# GitHub Pages URL shortener

A simple service for hosting a URL shortener on a custom domain through GitHub Pages.

## How does it work?

The file `404.html` catches all routes and loads a small script from `src/redirect.js`. The script checks the URL against the routes defined in `entries.js` and performs a client-side redirect as specified.

## How to use

1. Fork the repository
2. Define your own routes in `entries.js`
3. Enable GitHub Pages in the repository settings
4. (Optional) Set up your custom domain with GitHub Pages

The redirects are now available at `yourdomain.com/your-entry`
