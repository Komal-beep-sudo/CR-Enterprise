<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$config = require __DIR__ . '/translation-config.php';
$apiKey = trim((string)($config['api_key'] ?? ''));
if ($apiKey === '' || strpos($apiKey, 'PASTE_YOUR_') === 0) {
    http_response_code(503);
    echo json_encode(['error' => 'Google Cloud Translation API key is not configured.']);
    exit;
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 1048576) {
    http_response_code(413);
    echo json_encode(['error' => 'Request is too large.']);
    exit;
}

$body = json_decode($raw, true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON request.']);
    exit;
}

$allowed = ['en', 'hi', 'fr', 'nl', 'pt', 'mg', 'it'];
$source = (string)($body['source'] ?? 'en');
$target = (string)($body['target'] ?? 'en');
$texts = $body['texts'] ?? [];

if (!in_array($source, $allowed, true) || !in_array($target, $allowed, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Unsupported language.']);
    exit;
}
if (!is_array($texts) || count($texts) === 0 || count($texts) > 128) {
    http_response_code(400);
    echo json_encode(['error' => 'Provide between 1 and 128 text strings.']);
    exit;
}

$clean = [];
$totalChars = 0;
foreach ($texts as $text) {
    if (!is_string($text)) {
        http_response_code(400);
        echo json_encode(['error' => 'Every text value must be a string.']);
        exit;
    }
    $text = trim($text);
    if ($text === '' || mb_strlen($text, 'UTF-8') > 5000) {
        http_response_code(400);
        echo json_encode(['error' => 'A text value is empty or too long.']);
        exit;
    }
    $totalChars += mb_strlen($text, 'UTF-8');
    if ($totalChars > 25000) {
        http_response_code(400);
        echo json_encode(['error' => 'Translation batch is too large.']);
        exit;
    }
    $clean[] = $text;
}

if ($target === 'en') {
    echo json_encode(['translations' => $clean], JSON_UNESCAPED_UNICODE);
    exit;
}

$cacheDir = __DIR__ . '/translation-cache';
if (!is_dir($cacheDir)) @mkdir($cacheDir, 0755, true);

$translations = array_fill(0, count($clean), null);
$missingTexts = [];
$missingIndexes = [];

foreach ($clean as $i => $text) {
    $cacheFile = $cacheDir . '/' . hash('sha256', $source . "\0" . $target . "\0" . $text) . '.txt';
    if (is_file($cacheFile)) {
        $cached = file_get_contents($cacheFile);
        if ($cached !== false) {
            $translations[$i] = $cached;
            continue;
        }
    }
    $missingTexts[] = $text;
    $missingIndexes[] = $i;
}

if ($missingTexts) {
    $payload = ['q' => $missingTexts, 'source' => $source, 'target' => $target, 'format' => 'text'];
    $url = 'https://translation.googleapis.com/language/translate/v2?key=' . rawurlencode($apiKey);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json; charset=utf-8'],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    ]);
    $response = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($response === false || $status < 200 || $status >= 300) {
        error_log('Creneu Translation API error HTTP ' . $status . ': ' . ($response ?: $curlError));
        http_response_code(502);
        echo json_encode(['error' => 'Google Cloud Translation request failed.']);
        exit;
    }

    $decoded = json_decode($response, true);
    $apiTranslations = $decoded['data']['translations'] ?? null;
    if (!is_array($apiTranslations) || count($apiTranslations) !== count($missingTexts)) {
        http_response_code(502);
        echo json_encode(['error' => 'Unexpected response from Google Cloud Translation.']);
        exit;
    }

    foreach ($apiTranslations as $j => $entry) {
        $value = html_entity_decode((string)($entry['translatedText'] ?? $missingTexts[$j]), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $idx = $missingIndexes[$j];
        $translations[$idx] = $value;
        $cacheFile = $cacheDir . '/' . hash('sha256', $source . "\0" . $target . "\0" . $clean[$idx]) . '.txt';
        @file_put_contents($cacheFile, $value, LOCK_EX);
    }
}

echo json_encode(['translations' => $translations], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
