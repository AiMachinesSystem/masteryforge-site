# COMPLIANCE_TODO — MasteryForge Crafts storefront

Tracked owner actions for legal/compliance gaps that cannot be fixed in code.
Last reviewed: 2026-08-23 (MANTRA P0/P1 fix pack v2, branch `fix/mantra-p0-v2-2026-08-23`).

## 1. Seller identity (OPEN — owner action)
Publish the legal seller identity: business name, registered address, and
VAT/tax ID where applicable. Required by EU consumer law (Directive 2011/83/EU)
and expected by payment platforms. Placeholder locations are marked with
`LEGAL_TODO` comments in the footers of `index.html`, `free-sample.html`.
Also update the Shopify policy pages once the legal string exists.

## 2. Accessibility feedback channel (OPEN — owner action)
`accessibility.html` publishes support@masteryforgecrafts.com as the feedback
channel (marked `A11Y_TODO`). Consider a dedicated accessibility@ address when
volume justifies it. The enforcement section (Directive (EU) 2019/882, AgID)
was added 2026-08-23.

## 3. Shopify anchor pricing substantiation (OPEN — owner action, on Shopify)
- Verify every "was" / strike-through anchor price on shop.masteryforgecrafts.com
  against real historical selling prices (e.g. the "$89 instead of $127" anchor
  on the Whole Workshop bundle was unsubstantiated in the 2026-07 audit; an
  earlier bundle anchor "$59 instead of $74" exceeded the real $56 sum of parts).
- Current landing page shows the bundle as "$89, was $131" with the fine-print
  explanation that $131 is the sum of the five separate store prices today.
  Keep that substantiation true: if individual prices change, update the anchor.

## 4. Domain strategy (RESOLVED 2026-07)
RESOLVED — option A is live: the site is served on the brand domain
`https://masteryforgecrafts.com` via GitHub Pages CNAME (the github.io URL
301-redirects to the brand domain). Canonicals, og:url, JSON-LD URLs and
`sitemap.xml` all stay on the brand domain. Do NOT point them at the
github.io mirror (that was the wrong premise of the superseded PR #1).

## 5. Reviews (CLOSED in v3, 2026-07-27)
The hardcoded "5.0 out of 5 · verified review" block was removed in the v3
rebuild. The page now shows one real Loox review with an explicit "Why only
one review" candor block. Rule going forward: reviews come from the store's
review app or they do not appear. Never fabricate.
