# README_DEPLOY — Pubblicazione del sito statico MasteryForge

Guida per l'owner. Il sito vive nella cartella `SITE/` ed è **statico al 100%**: niente build, niente framework, niente dipendenze runtime. Qualunque host statico va bene. Il checkout resta su Shopify (le CTA sono cart-permalink verso `masteryforgecrafts.com`): l'host che scegli serve solo le pagine vetrina.

## Cosa pubblicare (e cosa no)

Pubblica **tutto il contenuto di `SITE/`** TRANNE:

- `_build/` — documenti di cantiere (brief, copy guide, piani). Non devono finire online.
- `node_modules/` — solo per l'anteprima locale con vite.

`robots.txt` già esclude `/_build/` dai crawler, ma la regola resta: non caricarlo proprio.

File chiave nella root: `index.html`, `sitemap.xml`, `robots.txt`, `404.html`, `favicon.svg`, `assets/` (css, js, fonts, img, downloads), `library.html`, `free-sample.html`, `guarantee.html`, `faq.html`, `products/` (2 schede metal), `legal/` (3 pagine).

---

## Opzione A — GitHub + GitHub Pages

1. Crea un repository su GitHub (es. `masteryforge-site`), pubblico o privato.
2. Carica il contenuto di `SITE/` nella radice del repo (tranne `_build/` e `node_modules/`):
   ```bash
   git init && git add . && git commit -m "MasteryForge static site"
   git branch -M main
   git remote add origin https://github.com/<utente>/<repo>.git
   git push -u origin main
   ```
3. Consigliato: aggiungi un file vuoto `.nojekyll` nella root (evita l'elaborazione Jekyll; le cartelle con underscore come `_build` verrebbero ignorate comunque, ma meglio blindare).
4. Su GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, Branch: `main`, cartella: `/ (root)`. Salva.
5. Dopo 1–2 minuti il sito è live su `https://<utente>.github.io/<repo>/`.
6. Con dominio personalizzato: **Settings → Pages → Custom domain** → inserisci il dominio → crea il record DNS indicato da GitHub (CNAME verso `<utente>.github.io`).

> I link interni sono tutti relativi: il sito funziona anche sotto un sottopercorso (`.../repo/`). Se pubblichi su un dominio diverso da `masteryforgecrafts.com`, leggi la sezione "Cambio dominio" qui sotto.

## Opzione B — Netlify Drop (la più veloce, zero CLI)

1. Prepara una copia pulita della cartella `SITE/` senza `_build/` e `node_modules/`.
2. Apri **https://app.netlify.com/drop** (serve un account Netlify gratuito).
3. Trascina la cartella nell'area di drop. Fine: Netlify la pubblica subito con un URL tipo `https://nome-casuale.netlify.app`.
4. Da **Site settings → Domain management** puoi cambiare il sottodominio o collegare un dominio tuo (record DNS guidato).

## Opzione C — Cloudflare Pages

1. Account Cloudflare gratuito → **Workers & Pages → Create → Pages**.
2. Metodo più semplice: **"Direct upload"** → trascina la cartella `SITE/` (pulita come sopra) → nome progetto → Deploy. Nessun build command, output directory = root.
3. In alternativa: **"Connect to Git"** → selezioni il repo → Framework preset: **None** → Build command: *(vuoto)* → Build output directory: `/`.
4. Live su `https://<progetto>.pages.dev`. Dominio custom: **Pages → progetto → Custom domains** (se il dominio è già su Cloudflare DNS è automatico).

---

## Cambio dominio (canonical / OG / sitemap)

Di fabbrica, canonical, Open Graph, Twitter card, `sitemap.xml` e `robots.txt` puntano a `https://masteryforgecrafts.com/`. Se pubblichi altrove (es. `utente.github.io/repo`):

1. Cerca `masteryforgecrafts.com` in tutti i file.
2. Sostituisci **SOLO** nelle righe che contengono:
   - `rel="canonical"`
   - `og:url`, `og:image`
   - `twitter:image`
   - tutto `sitemap.xml` e la riga `Sitemap:` di `robots.txt`
3. **NON toccare** i link che contengono `/cart/`, `/products/`, `/collections/`, `/pages/`, `/policies/`: sono il checkout e le pagine dello **store Shopify reale** e devono continuare a puntare a `masteryforgecrafts.com` anche se la vetrina sta altrove.
4. Eccezione: se il sito vive in una sottocartella (GitHub Pages senza dominio custom), canonical/OG dovrebbero includere il percorso completo, es. `https://utente.github.io/repo/products/x.html`.

> Se invece colleghi il dominio `masteryforgecrafts.com` allo stesso host dello store, valuta con attenzione cosa resta su Shopify: i cart-permalink presuppongono che quel dominio risponda come store Shopify.

## Aggiornare prezzi e CTA (fonte unica)

La fonte di verità è **`_build/COPY_GUIDE.md` §1** (tabella con prezzi, anchor e cart-permalink verificati). Nota v2 (metal-first): sul sito restano SOLO 3 prodotti — Metalworking Project Plans **$37** (`/cart/58091624431919:1`), Metal Cut-File Vault **$19** (`/cart/58142503076143:1`), Commercial License **$39** (`/cart/58133406679343:1`). I bundle restano sullo store Shopify ma non sul sito. Quando un prezzo o un variant ID cambia sullo store:

1. Aggiorna la tabella in `_build/COPY_GUIDE.md` §1.
2. Cerca il vecchio cart-permalink (es. `/cart/58091624431919:1`) in tutti gli `.html` e sostituiscilo col nuovo.
3. Aggiorna il prezzo visibile nei testi (bottoni "— $37", `price-now`) e, sulle pagine prodotto, anche nel blocco **JSON-LD** (`offers.price`).
4. v2: **nessun anchor/was-price** sul sito (prodotti singoli, prezzo pieno). Mai inventare sconti.
5. Sotto ogni CTA d'acquisto deve restare la micro-trust string esatta: `Instant download · Lifetime updates · 30-day money-back guarantee`.

## Anteprima locale

Dalla cartella `SITE/`:

```bash
# opzione 1 — vite (hot reload)
npm install
npm run dev

# opzione 2 — solo Python, zero install
python -m http.server 8000
# poi apri http://localhost:8000
```

Il sito non dipende da vite: `npm run dev` è solo comodità di sviluppo.

## Checklist post-pubblicazione (2 minuti)

- [ ] La home si apre e font/stili caricano (Oswald visibile nei titoli).
- [ ] `https://<dominio>/sitemap.xml` e `/robots.txt` rispondono 200.
- [ ] Un URL a caso sbagliato mostra la `404.html` brandizzata.
- [ ] Una CTA d'acquisto porta al carrello Shopify con il prodotto giusto.
- [ ] View-source: canonical e OG puntano al dominio corretto.
