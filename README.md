# MasteryForge Crafts website

Static site served at https://www.masteryforgecrafts.com through GitHub Pages.
The existing host configuration redirects www to the apex domain.
There is no build step; `.nojekyll` preserves the static files.

## Homepage import — 2026-10-18

The homepage comes from the user-supplied `MasteryForge-Crafts.gempages`.
Source SHA-256: `00becee520acb2e5e0ef4495542c724113658eeabf4d8702cb5caeed49efed70`.

All 14 sections retain the imported page structure and scoped interactions.
The offer, wording and artwork are adapted to MasteryForge Crafts and 300+ projects. GemPages root-class placeholders
are resolved to stable classes for standalone hosting.

- `index.html`: the existing woodworking homepage.
- `metalworking/index.html`: the 300+ metalworking pre-launch landing.
- `bundle/index.html`: the combined wood + metal pre-launch landing.
- `leatherworking/index.html`: the 300+ leatherworking pre-launch landing.
- `assets/home-gempages.css`: imported scoped section styles.
- `assets/home-gempages.js`: imported section interactions.
- `assets/consent.js`: existing consent handling; existing analytics retained.
- `sitemap.xml`: homepage only.

The five previous secondary HTML pages have been removed. Their earlier
versions remain in Git history. Run locally with `python3 -m http.server 8000`.

The homepage presents the 300+ woodworking project offer and uses the approved MasteryForge Crafts identity throughout its
navigation, footer, comparison panel, favicon, social metadata and artwork.
All imagery is hosted in assets/home. The buy button remains the original
presentation-only interaction; checkout wiring is a separate task.

## Metalworking and bundle landing previews — 2026-10-18

The new pages retain the woodworking layout and shared brand assets. Their new artwork
lives in `assets/metalworking` and `assets/bundle`. `assets/collection-landings.css`
and `assets/metalworking-page.js` provide scoped preview styling, accessible FAQ
interactions and inert hidden mobile controls. The woodworking homepage is unchanged.

The metalworking collection is $29. The combined woodworking + metalworking bundle is
$39 versus $58 for both collections separately. These are pre-launch offers: both
Shopify products remain DRAFT, the new pages carry noindex, and their purchase buttons
are disabled. Checkout, final file validation and digital delivery are intentionally
left for the next launch step. No order is created by either preview.

`collection-products.json` records the product and variant IDs for later integration.
The bundle is a single digital product that is intended to deliver both collections;
it is not yet connected to inventory bundles or downloadable files.

## Leatherworking landing preview — 2026-10-18

The leatherworking collection follows the same 14-section layout at `/leatherworking/`,
with dedicated pattern-cover mockups and leathercraft inspiration photographs in
`assets/leatherworking`. The standalone offer is $29, with the Shopify product kept
in DRAFT until the final files and delivery workflow are ready. This preview carries
noindex and an explicitly disabled purchase button. Other collection pages and products
are unchanged. Final artwork provenance is recorded in `docs/leather-artwork.json`.
