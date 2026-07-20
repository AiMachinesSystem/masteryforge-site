# MasteryForge Crafts — static site

Publicable as-is from this folder (`SITE/` = project root). No build step, no framework, no runtime CDN.
Preview locally: `npm run dev` (vite, dev-only) or any static server, e.g. `python -m http.server`.

## Structure
- `index.html` — homepage = Metalworking Project Plans offer ($37, v2 metal-first)
- `library.html` — the metal shop: plans, cut files, license (3 products)
- `products/metal-cut-file-vault.html` · `products/commercial-license.html` — the 2 metal PDPs
- `assets/css/tokens.css` — canonical design tokens (copy of `WEBSITE/DESIGN_SYSTEM/tokens.css`, DO NOT EDIT)
- `assets/css/site.css` — component system (see `_build/COMPONENTS.md`)
- `assets/js/site.js` — scroll-reveal + sticky mobile bar + footer year (vanilla, defer)
- `assets/fonts/oswald-latin.woff2` — Oswald variable (latin), self-hosted
- `assets/img/` — metal product imagery (webp, 3 sizes) + `og.jpg` (1200×630)
- `assets/downloads/free-sample-plan.pdf` — lead magnet
- `_build/` — working docs (BUILD_BRIEF, COPY_GUIDE, PLAN, COMPONENTS, _base.html, retired v2 pages in `_phase2/`) — EXCLUDED from deploy

## Fonts
Oswald downloaded OK (2026-07-19, fonts.gstatic.com): variable latin woff2, 21 KB, weights 200–700,
`@font-face` with `font-display:swap` + preload in each page head. If the file is ever missing,
the token fallback stack holds: Bahnschrift SemiCondensed → Arial Narrow → Helvetica Neue → Arial.
Sans = system stack, mono = system mono.

## Canonical domain
Canonical/OG URLs point at `https://masteryforgecrafts.com/`. If the site is published on a
different host (e.g. GitHub Pages subdomain), update `canonical`, `og:url`, `og:image`,
`twitter:image`, `sitemap.xml` and `robots.txt` accordingly (absolute URLs only; page links
are relative and travel fine).

## Deploy
Upload everything EXCEPT `_build/` and `node_modules/`. `robots.txt` already disallows `/_build/`.
Checkout stays on Shopify: all buy CTAs are cart permalinks to the live store.
