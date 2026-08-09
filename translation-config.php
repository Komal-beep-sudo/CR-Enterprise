<?php
// Google Cloud Translation API configuration.
// Recommended: set GOOGLE_CLOUD_TRANSLATE_API_KEY as a server environment variable.
// If your Hostinger plan does not expose environment variables, paste your restricted
// Google Cloud API key below. This PHP file is executed server-side and is never sent
// to visitors as JavaScript.
return [
    'api_key' => getenv('GOOGLE_CLOUD_TRANSLATE_API_KEY') ?: 'PASTE_YOUR_GOOGLE_CLOUD_TRANSLATION_API_KEY_HERE',
];
