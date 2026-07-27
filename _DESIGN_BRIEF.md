# DESIGN BRIEF — masteryforgecrafts.com ABSOLUTE-ZERO REBUILD · 2026-07-26

> **Consumer:** Phase 1 (`_ACCEPTANCE_SPEC.md`) + Phase 2 build of this run. MACHINE HEART steps: DATI (this file's evidence) → ANALISI (the 5 decisions below).
> **Method:** 6-agent parallel fan-out over registered sources (workflow `wf_0d350c58-904`) + live Shopify GraphQL pull + live policy fetch + Gmail review-record pull + /last30days engine run — all 2026-07-26.
> **ABSOLUTE-ZERO:** old build quarantined unseen at `../SITE_OLD_2026-07-26/` (rollback hash `29b39e7`). Nothing here derives from old site code/copy/photos.
> **Binding law (not repeated here):** v2 contract `WEBSITE/_SPECS_BRIEFS/METAL_SITE_FINAL_BUILD_PROMPT_2026-07-18.md` §0–§10 + v3 deltas D1–D8 (`WEBSITE/_METAL_SITE_ALL_2026-07-19/00_DEFINITIVE_BUILD/DEFINITIVE_SITE_BUILD_PROMPT_v3_2026-07-19.md`) + `WEBSITE/DESIGN_SYSTEM/masteryforge_DESIGN.md` + `WEBSITE/MANTRA_WEBSITE_v2_2026-07-19.md`.

---

## 1 · LIVE STORE FACTS (VERIFIED — Shopify Admin GraphQL, 2026-07-26)

Shop: **shop.masteryforgecrafts.com** (checkout-only) · info@masteryforgecrafts.com · USD · Advanced plan.

| Product (live title) | Handle | Status | Price | compareAt | Variant ID |
|---|---|---|---|---|---|
| MasteryForge Metalworking Project Plans — 500+ Step-by-Step Build Plans (PDF) | metalworking-project-plans | ACTIVE | $37 | — | 58091624431919 |
| MasteryForge Metal Cut-File Vault — 500+ Plasma / Laser / CNC Files (DXF + SVG) | masteryforge-metal-cut-file-vault-… | ACTIVE | $19 | — | 58142503076143 |
| Wood Pattern Vault — 150+ (SVG) | masteryforge-wood-pattern-vault-… | ACTIVE | $37 | — | 58133406384431 |
| Laser Vault — 150+ | masteryforge-laser-vault-… | ACTIVE | $37 | — | 58133406417199 |
| Clay Cutter Vault — 150+ (STL + SVG) | masteryforge-cutter-vault-… | ACTIVE | $19 | — | 58133406515503 |
| Commercial License — Sell What You Make | masteryforge-commercial-license-… | ACTIVE | $19 | $48 (substantiation UNKNOWN → do not use) | 58133406679343 |
| Metal & Wood Bundle — 650+ | the-masteryforge-metal-wood-bundle-… | ACTIVE | $59 | $74 | 58155074978095 |
| Wood & Laser Bundle — 300+ | the-masteryforge-wood-laser-bundle-… | ACTIVE | $59 | $74 | 58155075010863 |
| **The MasteryForge Whole Workshop — 950+ Designs Across 4 Crafts + Commercial License** | the-masteryforge-whole-workshop-… | ACTIVE | **$89** | **$131** | 58155075109167 |

- **Whole Workshop anchor $131 = TRUE live sum:** cut-file vault $19 + wood $37 + laser $37 + clay $19 + license $19 = $131 (Shopify-verified today). "950+" ≈ 501+150+154+153 = 958 on-disk designs (see §4).
- **Metal flagship $37 has NO compareAt** → the metal offer renders **without any anchor row** (v2 §6). The 6 fictitious single-SKU anchors flagged 2026-07-10 (`_SYSTEM/STRATEGY/2026-07-10_COMPARE-AT_SUBSTANTIATION_TABLE_v1.md`) are gone from live — do not resurrect.
- Checkout permalinks (302→Shopify checkout): `https://shop.masteryforgecrafts.com/cart/{variantId}:1` — main `58091624431919:1` · main+bump `58091624431919:1,58142503076143:1` · bundle `58155075109167:1`.
- DRAFT (never link): 501 Starter Pack, Free Laser Earring Pack.

## 2 · GUARANTEE + DELIVERY (VERIFIED — live policy pages, 2026-07-26)

- **Guarantee verbatim** (shop.masteryforgecrafts.com/policies/refund-policy): *“If you're not happy with your purchase — for any reason — email us within 30 days of your order and we refund every cent.”* Short form on same page: *“Try everything for 30 days.”* Refund to original payment method within 2 business days of contacting support. → `{{GUARANTEE_DAYS}}`=30; the verbatim sentence is the ONLY long-form guarantee string (its em-dash is policy-verbatim: documented lint exception).
- **Delivery** (policies/shipping-policy): instant email with secure download link + account dashboard access + support@masteryforgecrafts.com resend within 24h. All digital, nothing shipped. → 3-step S6 explainer: checkout → instant email with your secure download link → download and build.

## 3 · THE ONE REAL REVIEW (VERIFIED — store review record via Loox notification email)

- **Garret J. · 5★ · The MasteryForge Whole Workshop** · Loox status **Published** · notified 2026-07-14 (email no-reply@loox.io → info@masteryforgecrafts.com, Gmail thread `19f5f9e6cdb24a41`).
- Verbatim text: *“Amazing quality! Everything was easy to download and exactly as described. Highly recommended!”*
- This is the ONLY genuine review. The "John P" review is FABRICATED and deleted (FTC hard line, `_SYSTEM/CHANGE_LOG.md` 2026-07-20) — never reuse. S3 = this one review, honestly attributed (product + Loox verified), + the candor stance + free-sample CTA. No stars aggregate, no counts, no AggregateRating JSON-LD.

## 4 · DELIVERABLE TRUTH ON DISK (VERIFIED — FILE/ vault listings, 2026-07-26)

- Metal cut vault: **exactly 501 matched DXF+SVG pairs** ("500+" true, barely — never claim more). Categories: mandala 112 · snowflakes 61 · geometric 140 · garden 18 · stars/badges 72 · brackets 20 · hearts 22 · wreaths 56. `FILE/metal-cut-vault/`.
- Free sample (real, shipped practice): `FILE/SAMPLE_PLAN_2026-07-03/MasteryForge_sample-plan_square-fire-pit.pdf` — **Square Steel Fire Pit 24″×24″×12″**, TOP+SIDE+SECTION views, inches+cm, A36 cut list, 8 assembly steps, weld symbol, SAMPLE watermark. Second PDF: Steel & Wood Coffee Table.
- 12 full build plans as HTML in `FILE/metal-plans-vault/` (welding table, cart, fire pit, workbench…) — footer states "Personal use included; commercial license sold separately."
- Other vaults on disk: laser 154 SVG · wood 150 SVG · clay 153 STL+SVG (+ bonus PDFs each).
- Line-art SVG sources for visuals = the real vault files (true origin, allowed).
- **OWNER-HELD integrity item** (logged in `WEBSITE/_PENDING_GO.md`, does not block build): Fileflare attachment backing the live "$37 · 500+ Step-by-Step Build Plans" claim is owner-verifiable only (INC-0001/INC-0002 territory). Page copy mirrors the LIVE product title (store-fact truth).

## 5 · WHAT THE COMPETITOR DATA SAYS CONVERTS (registered research, fan-out citations)

Hooks ranked by observed ad longevity (`COMPETITORS/METAL_ADS_WARROOM_LIVING_v1.md` §2–§4; `COMPETITORS/2026-07-09_METAL_PER-AD_TEARDOWN_leader+top2_v1.md`):
1. **Money-math POV** — 162+ days active (oldest live ad now 194 days, `COMPETITORS/DAILY/LATEST_MARKET_PULSE.md` 2026-07-26): "build the $2,000 piece for a fraction" → our S5.
2. **Advertorial story** (failure → "no path" insight → discovery → build proof) — pruning survivor, twice-validated → informs S5 problem-cards narrative spine.
3. **Pain-durability + 4 checkmark bullets** — x6 duplication current push → S4 pillars + S2 checklist rhythm.
4. **Effort-elimination** ("stop redrawing from scratch") — x14 duplication at $17 → bump framing for machine owners.
5. Income/"sell what you make" angle — AVOID on the $37 page (low-trust signal; license is a separate product; zero sell/earn framing per v2 §0).

Copy DNA that repeats in winners: checkmark clarity bullets · dual units (inches+cm) · "instant digital access" · beginner reassurance ("no advanced skills"). (`…PER-AD_TEARDOWN…` §1.)

Offer patterns: single-product funnel, hero → price → proof → features → stack → FAQ order (`…DEEPDIVE_6DIM_v1.md` DIM 4). Round prices signal credible maker; charm .97/.99 signals PLR operators (DIM 2).

**Trust vacuum = our wedge** (DIM 5 + 360 §5): leader is anonymous, Scam-Detector 19.2/100, hardcoded fake reviews, NO guarantee, fake urgency. Ranked wedges to make loud: real honored 30-day MBG · honest curated counts + index · original in-house designs · real review or none · zero fake urgency. (v3 D7 differentiation block.)

FORMAT CENSUS (VERIFIED 2026-07-17, `_SYSTEM/00_SYSTEM_CONTROL/RESEARCH_MEMORY_INDEX.md`): top-3 metal competitors mention PDF/DXF/SVG **0 times** pre-purchase — everyone sells OUTCOME + volume. Owner resolution on record: strip format-led selling from metal copy. (Aligns with v2 §4.)

## 6 · CUSTOMER LANGUAGE BANK (`_SYSTEM/DATA/2026-07-05_METAL_CUSTOMER_VOICE_v1.md` + `CRAFTS_CUSTOMER_VOICE_TABLE_v1.md`)

Pains: files that aren't cut-ready ("people expect any file to be cut ready") · unit/scale corruption (mm-vs-inch 25.4×) · "not a complete set of instructions" · no CAD skill to adapt · cheap bundles = "ripped off" · beginners can't read blueprints.
Objections: "free files are everywhere" → answered by free sample + completeness · "I'll draw it myself" → time · "won't cut right on my machine" → double-check culture → answered by dimensioned accuracy + guarantee · unknown seller → 30-day MBG visible.
Desired outcomes: **complete package** ("describe how, what, and where to weld") · **cut list / BOM ready to hand to a supplier** · dimensioned drawings · inches AND cm · instant delivery · confidence ramp (simple → bigger builds).
Positive-review phrasing to echo (never fabricate): "well laid out plans which are simple to follow" · "measure once and cut once without wasting material" · "easy to follow, even for a beginner".

## 7 · FRESH 30-DAY WINDOW (/last30days engine, 2026-07-26 + LATEST_MARKET_PULSE)

- Community is **project-idea-hungry**: r/metalworking's top thread of the window = "need ideas for this rebar" (1,660 pts, 567 cmt). Beginner pride posts dominate r/hobbycnc ("First project finished!"). Encouraging-foreman tone fits.
- No organic anti-bundle backlash in the window; vendor content is thin (1 video/17 views) → creative lane open. Coverage note: X/TikTok/IG not configured in this run; raw artifact not persisted (engine save-dir empty — findings cited here instead).
- Leader accelerating (80 active ads; EU rollout) — parity is not the goal, honesty + craft is (v3 D7).

## 8 · THE 5 KEY DECISIONS (ANALISI — each traceable above)

1. **Hook order fixed by evidence:** Hero = accuracy/zero-guesswork ("every measurement done" — v2 §4 canon + customer voice §6) · S5 = money-math with mandatory fine-print clarifier (162-day winner, §5) · S8 = legacy close. No income framing anywhere.
2. **Proof = honesty as design:** S3 shows the ONE real Garret J. review verbatim (Loox-published, §3) + "real reviews or none" candor stripe + free-sample CTA to the REAL Square Steel Fire Pit PDF (§4). Zero fabricated proof, zero aggregate stars.
3. **Offer architecture on page:** $37 flagship with NO anchor (live truth §1) · order bump = $19 Metal Cut-File Vault (real ACTIVE SKU, registered 07-13 model — "add the 500+ machine-ready cut files") · S6 value stack ends in the honest upgrade path: Whole Workshop $89 vs **$131 true-sum anchor** (§1). All money strings from live Shopify only.
4. **Outcome-first copy, zero format-led selling** (format census §5 + v2 §4/§6): body sells plans/volume/accuracy; delivery mechanics live behind the linked Delivery & Downloads policy. Counts only as round+ ("500+", "950+" — on-disk true §4).
5. **Signature = honest brand motion:** self-drawing CAD fire-pit figure (v3 D1) **matching the real free-sample plan** (Square Steel Fire Pit 24×24×12, §4) — the brand motif IS the product truth; annotation styled as CAD motif, never captioned as a product page. Blueprint-paper design system per DS tokens; mobile-first 390 (6/6 purchases mobile — BEST_OF §2); GSAP pin ≤ +=1000 (v3 D3).

**Carry-over (owner order 2026-07-26):** GA4 `G-CPLH8JQ6FC` + Meta base pixel `2163098587590612` fresh on every page; Phase 3 verifies both fire via browser network requests.

## 9 · DECLARED GAPS / ASSUMPTIONS

- Fileflare deliverable attachment on the $37 Plans = OWNER-HELD verification (→ `WEBSITE/_PENDING_GO.md`).
- Base-product license terms unstated anywhere official → FAQ states "personal use included; commercial license sold separately" (source: metal-plans-vault footers §4 — the only registered license line). ASSUMPTION flagged in provenance.
- License $48 compareAt unsubstantiated → never displayed.
- Leader's current prices post-2026-07-24 unknown (storefront collectors 403) — irrelevant to build (we never show competitor prices).
