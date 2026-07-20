# COMPLIANCE TODO — before relying on this site as the public face of MasteryForge Crafts

This file tracks the compliance items that require **owner input** (they cannot be
completed by developers without the seller's real data). Referenced by the
`LEGAL_TODO` HTML comments in every page footer.

## 1. Seller identity (P0 — legal obligation, EU Dir. 2011/83 art. 6 + US state laws)
Every page footer carries an HTML comment placeholder. Provide and publish:
- [ ] Seller legal name (person or registered company)
- [ ] Geographic address (or registered office)
- [ ] Public contact email

## 2. Accessibility feedback channel (P1 — EAA / Directive (EU) 2019/882)
`accessibility.html` describes the evaluation method and enforcement authority, but
the statement needs a working feedback channel:
- [ ] Public email (or form) dedicated to accessibility reports — add it to the
      "Feedback" section of `accessibility.html` (see `A11Y_TODO` comment there).

## 3. Store-side anchor pricing (P0 — FTC / EU Omnibus, separate change on Shopify)
The static site is clean, but on the Shopify store:
- [ ] "$89 instead of $127" — the $127 reference price is not substantiated: remove
      the comparison or document a real prior price.
- [ ] Bundle "Metal & Wood $59 instead of $74" — the sum of the parts is $56, so the
      $74 anchor must be corrected or removed.

## 4. Domain strategy (decides SEO fate of this mirror)
Canonicals, og:url and sitemap currently point to the GitHub Pages mirror
(self-referential) as a coherent interim state. Choose one:
- [ ] **A (recommended):** serve this static site on `masteryforgecrafts.com` (or a
      subdomain), then find/replace the base URL in canonicals, og:url, JSON-LD,
      sitemap.xml and submit the sitemap to Google Search Console.
- [ ] **B:** keep the storefront on Shopify and recreate equivalent pages there so the
      brand-domain URLs stop returning 404; then point canonicals back to the brand
      domain and deindex/noindex this mirror.

## 5. Star-rating graphics (P1)
`--star` decorative color is ~1.6:1 contrast (fails WCAG 1.4.11 if the stars convey
meaning). Currently moot (the honest-reviews block shows no stars). If star ratings
return with real reviews, darken `--star` to ≥3:1 on its background.
