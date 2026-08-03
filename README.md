# CR ENTERPRISE (CRENEU) - website

Plain HTML / CSS / JavaScript. No frameworks, no build step, no dependencies.

## Structure

```
index.html          Home
about.html          About Us  (includes the FAQ section)
products.html       Products  (supports ?cat=<Category> deep links)
certificates.html   Certifications
knowledge.html      Knowledge Centre
market.html         Market Area
blog.html           Blog
clients.html        Our Clients
contact.html        Contact
404.html            Not-found page
sitemap.xml         Sitemap  <-- edit the domain before going live
robots.txt
.htaccess           Apache / Hostinger settings
.nojekyll           Tells GitHub Pages to serve the assets folder as-is
assets/css/style.css
assets/js/site.js
assets/img/         All images and the hero video
```

Every path in the project is **relative**, so the same files work unchanged
whether the site lives at a domain root (Hostinger) or in a repository
sub-folder (GitHub Pages).

## Deploying to GitHub Pages

1. Copy the whole contents of this folder into the repository root
   (`index.html` must sit at the top level, not inside a sub-folder).
2. Commit and push.
3. Settings -> Pages -> Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. The site appears at `https://<user>.github.io/<repo>/`.

Keep the `.nojekyll` file - without it GitHub may skip parts of `assets/`.

## Deploying to Hostinger

1. hPanel -> File Manager -> `public_html`.
2. Upload the contents of this folder (not the folder itself) into `public_html`.
   Uploading the ZIP and extracting in place is fastest.
3. `.htaccess` and `.nojekyll` are hidden files - switch on "show hidden files"
   in File Manager to confirm they uploaded.
4. Once the SSL certificate is issued, uncomment the HTTPS redirect block at the
   bottom of `.htaccess`.

## Before going live

- Edit `sitemap.xml` and replace `https://www.creneu.com/` with the real domain.
- Optionally add a `CNAME` file containing your domain if you point a custom
  domain at GitHub Pages.

## Editing

- Colours, layout, animations and responsive rules: `assets/css/style.css`
- Product catalogue, client list, market copy, sliders: `assets/js/site.js`
- Page copy: the matching `.html` file

The header, mobile menu and footer are repeated in each HTML file. If you change
one, apply the same change to the other pages so navigation stays consistent.

## Adding a product

Open `assets/js/site.js`, find `var products = [` and add an entry:

```js
{id:999, cat:"Sharp Containers", tag:"Sharp Container",
 name:"Product name", desc:"Short description.",
 price:"Price on Request", img:"assets/img/your-image.webp",
 feat:["Feature one","Feature two"]}
```

Drop the image into `assets/img/` first. The category must already exist in the
`cats` list for it to show up in the filter.
