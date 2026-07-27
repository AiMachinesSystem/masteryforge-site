# ACCEPTANCE SPEC — masteryforgecrafts.com rebuild · 2026-07-26

> Derived from the v2 binding contract (§0–§10) + v3 deltas (D1–D8) + `_DESIGN_BRIEF.md` facts + owner orders.
> **LIVING RULE: every future owner order gets APPENDED to §OWNER ORDERS the turn it is given.**
> A criterion is met only with rendered-screenshot (or tool-output) evidence logged in `WEBSITE/BUILD_LOG.md`.

## PAGE INVENTORY (deploy repo `SITE/`, GitHub Pages, domain masteryforgecrafts.com)

| File | Purpose |
|---|---|
| `index.html` | The 8-section metal flagship page (S1–S8) — the site |
| `free-sample.html` | Real free sample: Square Steel Fire Pit PDF download (no email wall) |
| `assets/` | Fresh Higgsfield images (re-encoded WebP) + sample PDF + favicon |
| `404.html` | Honest 404 with link home |
| `accessibility.html` | Public accessibility statement (EAA/MANTRA §6) |
| `robots.txt` · `sitemap.xml` | Fresh, lastmod 2026-07-26 |
| `CNAME` · `.nojekyll` | Carried deploy mechanics (untouched) |

Footer policy links → live Shopify policy pages: Refund Policy `https://shop.masteryforgecrafts.com/policies/refund-policy` · Delivery & Downloads `…/policies/shipping-policy` · Privacy `…/policies/privacy-policy` (Phase 3 verifies each returns 200).

## GLOBAL CRITERIA (every page)

- G1 Design system tokens only (canvas #F6F2EC, ember family, steel #33526B, Oswald 600/700 + system sans + mono ladder); no rogue hex; ember only on money moments; laser #C2451E never on CTAs.
- G2 Wordmark (owner order): "Mastery" in ink dark + "Forge" in ember ORANGE + "Crafts" placed tastefully; **no stray glyphs**; built as text/SVG fresh (no old logo file).
- G3 Tracking (owner order 2026-07-26): GA4 `G-CPLH8JQ6FC` + Meta base pixel `2163098587590612` on EVERY page; Phase 3 verifies both fire via browser network requests (`google-analytics.com/g/collect` or gtag load + `facebook.com/tr`).
- G4 Honesty law (v2 §6): counts round+ only ("500+", "950+"); no fake reviews/urgency/anchors; the ONLY review = Garret J. verbatim (brief §3); anchor rendered ONLY on the Whole Workshop ($131 = live true sum); no .97/.99; no format-led selling in body copy (brief §5 census); no sell/earn framing on the $37 page; every claim traces to `WEBSITE/_PROVENANCE.md`.
- G5 Copy lint (v2 §4): no em-dashes in visible strings — SOLE exception: the verbatim guarantee sentence (policy text, documented); no banned AI-slop words; no exact counts; no "Learn more"; one CTA intent page-wide ("GET ALL 500+ PLANS FOR $37" family).
- G6 Tech (v2 §8): self-contained HTML + inline CSS/JS; external origins ONLY GSAP/ScrollTrigger CDN + Google Fonts (+ GA4/Meta endpoints per G3); semantic HTML, single h1; JSON-LD Product ($37, InStock) + FAQPage matching S7 verbatim (no AggregateRating); WCAG 2.2 AA (4.5:1 body, 3:1 large, focus visible, skip-link, ≥44px targets, alt per §5); viewport-fit=cover + safe-area sticky bar.
- G7 Motion (v2 §3 + v3 D3/D4): GSAP+ScrollTrigger only; desktop pin ≤ `+=1000`; mobile/reduced/low-end = light SVG autoplay ≤2s, NO pin; `prefers-reduced-motion` = fully static drawn page; no-JS = complete visible page (v2 §3.9: default markup is the final state, JS applies hidden states).
- G8 Performance (v2 §3.8 + MANTRA): LCP < 2.5s throttled (target beat 2.17s), CLS < 0.1 (target ≤0.05), page ≤ 1.5MB transferred, hero images ≤300KB / others ≤200KB (WebP, srcset 390/780/1280, width/height), below-fold lazy, no scroll listeners, 320→1600px zero horizontal overflow.
- G9 Images: EVERY raster generated fresh this run via Higgsfield (job IDs in provenance) or derived from REAL vault SVGs / the real sample PDF; no image appears twice; alt text describes the actual image honestly; no baked-in text with claims/prices/formats; every image seen at render before ship.
- G10 SEO: unique title + meta description (honest, matches live offer), canonical, OG/Twitter tags + fresh OG image, favicon fresh.

## PER-SECTION CRITERIA (index.html)

- **Header**: minimal sticky, wordmark (G2) + compact CTA + secure pulse dot + skip-link; no nav links.
- **S1 HERO**: eyebrow `METALWORKING PROJECT PLANS`; H1 ≤2 lines accuracy hook; lede ≤20 words with beginner anti-fear; primary CTA with $37 + ghost CTA → free-sample.html; trust chips (30-day guarantee · instant download · lifetime updates); signature self-drawing FIRE-PIT plan figure (v3 D1, mirrors the real Square Steel Fire Pit sample §brief 4) over blueprint grid; **H1+lede+CTA+chips+price visible at t=0 pre-scroll at 390 AND 1280** (v3 D8a); scrub animates only the figure layer; no carousel; LCP = H1 text.
- **S2 BUY BOX #1**: offer-card; $37 static loudest type; ✓ checklist (dimensioned drawings · cut lists · material specs · inches+cm); "Instant download. No physical item." inside the box; full-width CTA; guarantee row = verbatim sentence; secure-checkout row (generic shield/lock); **order bump** = Metal Cut-File Vault +$19 (variant 58142503076143) with springy checkbox swapping `window.MF.CHECKOUT_URL` between `/cart/58091624431919:1` and `/cart/58091624431919:1,58142503076143:1`; NO file-format list in the box; buy box reachable ≤1.2 viewport-heights at 390 (v3 D2).
- **S3 PROOF**: the Garret J. review card (verbatim, khaki stars, attributed "Verified Loox review · Whole Workshop bundle"); candor stripe ("We show every review we have. One so far. Never fake ones." territory — fresh wording); free-sample CTA naming the real asset ("Square Steel Fire Pit plan: download it free, check every measurement, then decide."); real-files contact sheet from ACTUAL vault SVGs (≥6 designs, inline line-art); differentiation micro-copy (v3 D7): real guarantee · real reviews or none · zero fake urgency. No external explorer claim.
- **S4 MECHANISM**: 3 pillars (Complete library 500+ count-up · Engineered accuracy with mini dimension-draw · Zero guesswork); 3-col ≥760px, hover lift.
- **S5 BUILD-VS-BUY + AGITATION**: 3 ✕ problem-cards + bridge; money-math band: welded fire pit $200–$600 store range vs build-from-plan + MANDATORY fine print "(Example retail range for finished welded pieces. You get the plans, not a finished item.)"; numbers count up; price never animates; split layout distinct from S4; zero sell/earn framing.
- **S6 VALUE STACK + BUY BOX #2**: honest rows (Included labels), NO fictitious total; repeat offer-card (same component/price/guarantee); 3-step delivery explainer (checkout → instant email with secure download link → download and build); **upgrade path card**: Whole Workshop $89 vs $131 struck (labeled as sum of the five live products it contains) → `/cart/58155075109167:1`; total-row dimension-rule draw.
- **S7 FAQ**: native details/summary, one open, +→− ember, 300ms; covers: skill level ("even if you've never read a plan") · what you need (honest, no format assertion) · delivery mechanics · lifetime updates · license (personal use included; commercial license sold separately — ASSUMPTION flag per `_PENDING_GO.md` #3) · refund (30-day, links policy); FAQPage JSON-LD matches S7 verbatim.
- **S8 FINAL CTA + FOOTER**: dark #141414 end-cap; legacy close ("Spend Saturday building, not guessing." territory); final CTA + guarantee row; free-sample LINK (no dead email form — no confirmed capture endpoint exists); footer 3-col: wordmark, policy links (see inventory), support@masteryforgecrafts.com, honest fine print; content rises once, nothing loops.
- **Global plumbing**: sticky mobile buy bar ($37 + CTA + secure dot; IO on hero CTA; hidden ≥760px; safe-area); NO popup/teaser of any kind; ≥4 distinct layout families; max 1 uppercase eyebrow per 3 sections beyond hero.

## FREE-SAMPLE PAGE CRITERIA

- Serves the REAL PDF (`assets/…square-fire-pit.pdf`, copied from `FILE/SAMPLE_PLAN_2026-07-03/`); no email wall; honest description (what the sample contains: 24″×24″×12″ fire pit, inches+cm, cut list, 8 steps, SAMPLE watermark); one CTA back to the $37 offer; same header/footer/tracking/design system; claims match the PDF contents exactly.

## PHASE 3 HARD-RULES CHECK (all must PASS before deploy)

H1 no invented reviews/claims (grep + eyes) · H2 Whole Workshop anchor = live SKU sum re-verified via Shopify GraphQL · H3 contract §9 loop: 390/1280 t=0 screenshots, full-page scroll shots, 320/1600 overflow gate, reduced-motion render, no-JS render, throttled trace (LCP/CLS), console zero errors/404s · H4 JSON-LD valid (structural check) · H5 every checkout permalink tested (302 → checkout) · H6 GA4 + Meta pixel fire observed in browser network log on rendered pages · H7 every image slot non-empty, each image used once, weights within caps · H8 policy links return 200 · H9 em-dash lint (sole exception G5) · H10 Ramsay adversarial review with repro-before-fix.

## PHASE 4 DEPLOY CRITERIA

Push main `AiMachinesSystem/masteryforge-site` (rollback = pre-push hash logged in report) → GitHub Pages build → re-verify EVERY section on https://masteryforgecrafts.com cache-busted (fresh browser profile / query-string bust): all H-checks that apply live + Lighthouse (perf ≥90 mobile target, a11y 100) → `WEBSITE/REBUILD_REPORT_2026-07-26.md`.

## OWNER ORDERS (append-only)

- 2026-07-26 · run charter: ABSOLUTE-ZERO rebuild (never read old build; quarantine to SITE_OLD_2026-07-26/), full apparatus, provenance for every detail, MACHINE HEART logged, unattended to completion incl. deploy; gates only secrets/money/Shopify-admin-writes → `WEBSITE/_PENDING_GO.md`.
- 2026-07-26 · wordmark: "Mastery" dark + "Forge" ORANGE + "Crafts" tastefully; no stray glyphs; every image honest; reviews real only (one exists — design honestly around scarcity, never invent).
- 2026-07-26 · tracking carry-over: GA4 `G-CPLH8JQ6FC` + Meta base pixel `2163098587590612` fresh on every page; Phase 3 verifies both fire via browser network requests.
