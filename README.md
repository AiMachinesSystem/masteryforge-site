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

- `index.html`: the only published HTML page.
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
