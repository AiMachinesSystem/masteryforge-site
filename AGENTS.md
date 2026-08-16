# MasteryForge Crafts website

Static marketing website for MasteryForge Crafts (metalworking project plans),
deployed via GitHub Pages to `masteryforgecrafts.com`. It is plain HTML/CSS/JS
with no build step, package manager, or backend.

## Cursor Cloud specific instructions

- This is a pure static site. There are no dependencies to install, no lint
  step, no automated tests, and no build/bundling step. HTML/CSS/JS are
  hand-authored and served as-is (note `.nojekyll`, so GitHub Pages does not
  process the files).
- To run it in development, serve the repo root over HTTP (do NOT open files via
  `file://`, because pages use root-absolute links like `/#buy` and
  `/free-sample.html`). Example: `python3 -m http.server 8000` from the repo
  root, then browse `http://127.0.0.1:8000/`.
- Pages: `index.html` (landing/sales page), `free-sample.html` (free PDF
  download), `accessibility.html`, and `404.html`.
- Checkout is external (Shopify at `shop.masteryforgecrafts.com`); analytics
  (GA4/Meta Pixel) and Google Fonts load from third-party CDNs. These external
  requests may be blocked by network egress policy while running locally, which
  is expected and does not affect the local dev workflow.
- Client-side JS in `index.html` (inline `<script>` at the bottom) drives: FAQ
  accordions (single-open), scroll-reveal animations (`.rv`), count-up numbers,
  the mobile sticky buy bar, and the order-bump checkbox (`#bumpBox`) which
  swaps every `[data-mf-cta]` checkout link between `window.MF.MAIN` and
  `window.MF.WITH_BUMP`.
