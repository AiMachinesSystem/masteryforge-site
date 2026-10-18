# MasteryForge Crafts website

Static site served at https://www.masteryforgecrafts.com through GitHub Pages.
The existing host configuration redirects www to the apex domain.
There is no build step; `.nojekyll` preserves the static files.

## Homepage import — 2026-10-18

The homepage comes from the user-supplied `MasteryForge-Crafts.gempages`.
Source SHA-256: `00becee520acb2e5e0ef4495542c724113658eeabf4d8702cb5caeed49efed70`.

All 14 Custom Code sections retain their original HTML, scoped CSS,
JavaScript, images, text, prices, and order. GemPages root-class placeholders
are resolved to stable classes for standalone hosting.

- `index.html`: the only published HTML page.
- `assets/home-gempages.css`: imported scoped section styles.
- `assets/home-gempages.js`: imported section interactions.
- `assets/consent.js`: existing consent handling; existing analytics retained.
- `sitemap.xml`: homepage only.

The five previous secondary HTML pages have been removed. Their earlier
versions remain in Git history. Run locally with `python3 -m http.server 8000`.

The supplied design still says "Master Crafts DIY" and contains its original
claims and euro prices. Its buy button only changes its label; it does not
create a cart or start checkout. Footer links are source placeholders.
These are intentionally left for the next requested content step.
