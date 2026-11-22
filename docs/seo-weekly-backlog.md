# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-11-08**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-11-08, 27 curated SKUs still `syncedAt` 2026-09-04, 28 Shopee rows `syncedAt` 2026-10-29), shop/category/blog slugs in code, open marketing PRs, and last Sunday backlog (PR #48, 2026-11-01).

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-11-01 (PR #48)

Nothing from the Sunday backlogs or cluster drafts has merged to `main`. What *did* change since last Sunday:

- Catalog stamp moved **2026-11-01 → 2026-11-08**. Still **55 SKUs**, 27 priced (Rp22.500–Rp123.000) + 28 Rp0 with real item URLs. No new SKU, no price change on priced heroes.
- Last week’s Next 2 #1 **was drafted**: PR #49 `/blog/harga-makuku-sap-original` (item `49969731055`, Rp0 / cek Shopee). Do not rewrite it.
- Last week’s Next 2 #2 **was not drafted**: harga Bunda Elia kaldu MPASI original (`53019019042`) is still the open P0 article slot.
- New open ops PRs this week (not content): #50 shop SEO/sales regressions, #51 GEO citation checklist (4 Nov), #52 Shop QA `/shop`, #53 price/GEO sync (7 Nov).
- PR #10, #17, #19, #22, #25, #28, #31, #34, #40, #44 remain open drafts. Do not rewrite them.
- Category `<title>`s on `main` are still the short Bali strings. H1s are still `{label} di toko HiMoon Badung`.
- Footer on `main` still omits `/shop/perawatan-bibir` (PR #35 / #41 / #45 / #50 draft the link).
- `/shop/popok` title on `main` is still `Popok Makuku & MamyPoko` (factually true). **PR #31 still rewrites it to drop Makuku — do not ship it as-is.**

This week stays on P0. The money-page story is the same 22-SKU MPASI aisle + live Makuku item URL, but the Kaldu harga page still does not exist and category titles still omit harga / original / 6 bulan / Shopee. Use title tweaks + one new harga article for the next Bunda Elia SKU with a working orange CTA. No P1 lip-care exception — PR #43 already drafted that title, and kaldu is still the underserved commercial gap.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali (55 SKUs; priced range Rp22.500–Rp123.000; 28 cards show “Cek harga di Shopee”)
- `/shop/mpasi` — 22 SKUs (Bunda Elia 5 + 17 other MPASI/snack brands)
- `/shop/perawatan-kulit-bayi` — Beeme 5 + Gently 9 + Moell 8 + Bambi 2 + Cussons 1 + Doodle 1 (26)
- `/shop/popok` — MamyPoko Royal Soft Rp123.000 (shop-home) + Makuku SAP Comfort Fit (item URL, Rp0)
- `/shop/peralatan-bayi` — Paseo Rp22.500 + saringan MPASI Rp29.500 + Coconi bib + Cussons wipes
- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm only (Rp70.000, shop-home)
- `/toko-bayi-bali` — local store vs Shopee

Product slugs exist in JSON but there is no `/shop/[kategori]/[slug]` route (cards are the only PDP).

Blog / guide slugs on `main` (`src/lib/seo/guides.ts`; `src/data/blog.json` is leftover long-form, not what `/blog` serves):

- `/blog/toko-mpasi-bali`
- `/blog/panduan-mpasi-6-bulan`
- `/blog/beli-sunscreen-bayi`
- `/blog/perawatan-kulit-bayi-sensitif`
- `/blog/tips-memilih-popok-bayi`
- `/blog/makuku-vs-mamypoko`
- `/blog/perlengkapan-bayi-baru-lahir`
- `/blog/asi-booster-ibu-menyusui`

Draft only (not on `main`):

- `/blog/moell-vs-gently-sunscreen-bayi` (PR #10)
- `/blog/harga-bunda-elia-bb-booster-rice-original` (PR #17)
- `/blog/beeme-vs-gently-lotion-bayi` (PR #22)
- `/blog/harga-mamypoko-royal-soft-original` (PR #28)
- `/blog/beeme-vs-gently-vs-moell-sabun-bayi` (PR #34)
- `/blog/harga-moell-face-cream-original` (PR #40)
- `/blog/harga-gently-baby-rash-cream-original` (PR #44)
- `/blog/harga-makuku-sap-original` (PR #49) — drafted this week from 2026-11-01 Next 2 #1

## This week — top 5 opportunities

1. **Target keyword:** toko MPASI Bali 6 bulan / harga Bunda Elia original Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** Still a **22-SKU** aisle on `main` with a one-SKU title. Bunda Elia is a line (BB Booster Rice Rp55.000 shop-home + kaldu `53019019042`, fat oil `49569047166`, santan `46319042106`, kecap `49269042218` — all item URLs, all Rp0). Title on `main` is still `Beli MPASI Bayi di Bali`; H1 is still `MPASI di toko HiMoon Badung`. Cluster blogs still describe a one-SKU rice + saringan aisle. PR #19’s title (`MPASI Bayi 6 Bulan dari Rp…`) is the right direction but was written for the one-SKU era — ship it for the title/H1, do not rewrite the article body in #17.
   **Effort:** S
   **Expected action:** title tweak — ship PR #19 (and PR #17), do not rewrite either. On `main` until they land: name Bunda Elia + 6 bulan + original + Badung/Shopee on `/shop/mpasi` title + H1. Internal-link pass from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan`: keep katalog Rp55.000 for BB Booster Rice, and add “cek Shopee” links to the four new Bunda Elia item URLs. Saringan MPASI Rp29.500 still lives on `/shop/peralatan-bayi`. Do not invent IDR for the Rp0 rows.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical Sunscreen 30gr SPF 50+ is still katalog Rp79.000 with a working item URL (`48013199704`). Category `<title>` is still `Perawatan Kulit Bayi di Bali` with H1 `Perawatan Kulit Bayi di toko HiMoon Badung` — no 6 bulan / SPF / original. Gently Physical SPF 50 remains Rp75.000 (shop-home). Vs draft is PR #10; category QA is PR #25 (`Perawatan Kulit Bayi dari Rp…` + H1 that names Moell & Gently). Ship #25 for structure; title still underserves SPF 50 / 6 bulan.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) — ship/link PR #25 and PR #10, do not rewrite. Internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card / item URL. Follow label age; no medical claim.

3. **Target keyword:** harga Makuku SAP original / popok bayi tipis Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** Makuku is in the catalog (`makuku-sap-diapers-comfort-fit-tape-nbsmlxlxxl-popok-bayi-tipis-extra-dry-anti-gumpal`, item `https://shopee.co.id/MAKUKU-SAP-Diapers-Comfort-Fit-Tape-NB-S-M-L-Xl-XXL-Popok-Bayi-Tipis-Extra-Dry-Anti-Gumpal-i.1869688077.49969731055`). Price is 0 — **do not publish a third number or invent a size**. `/shop/popok` `<title>` `Popok Makuku & MamyPoko` is factually true but still omits harga / original / Badung / Shopee. `/blog/makuku-vs-mamypoko` and shop inclusions still hedge “Makuku sesuai stok Shopee”. PR #31 drops Makuku from the title — that patch is still wrong. The harga article is now drafted as PR #49.
   **Effort:** S
   **Expected action:** title tweak on `/shop/popok` that **keeps Makuku**, adds original + Badung + Shopee (e.g. “Popok Makuku & MamyPoko Original | Toko Bayi Badung / Shopee”). Do **not** ship PR #31 as-is. Ship/link PR #49, do not rewrite. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` that can now point at the live Makuku item URL. MamyPoko stays katalog Rp123.000 (PR #28 already drafted). WhatsApp only for size/stok toko.

4. **Target keyword:** harga Bunda Elia kaldu MPASI original / kaldu bayi 6 bulan Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** After BB Booster Rice (PR #17), the next Bunda Elia SKU with a **working orange CTA** is still kaldu (`…-i.1869688077.53019019042`). Cluster blogs and speakable still sell only rice Rp55.000. Fat oil / santan / kecap are the same pattern (item URL, Rp0). Head-term `/blog/toko-mpasi-bali` is a store-locator, not a kaldu harga page. Commercial “kaldu MPASI” / “6 bulan” / “original” maps to a card that already deep-links to Shopee. This was Next 2 #2 last week and was not written.
   **Effort:** M
   **Expected action:** new article (see Next 2 #1) plus an internal-link pass on `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that names the four new Bunda Elia listings and says cek Shopee. Do not invent IDR. Do not rewrite PR #17.

5. **Target keyword:** harga Bunda Elia fat oil original / minyak MPASI BB booster Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** Second Bunda Elia SKU with a working orange CTA after kaldu (`chicken/beef fat oil`, item `https://shopee.co.id/Bumbu-Bunda-Elia-Chicken-Fat-Oil-Beef-Fat-Oil-Minyak-MPASI-BB-Booster-MPASI-Lemak-MPASI-Lemak-Bayi-Penambah-Berat-Badan-i.1869688077.49569047166`). Same Rp0 / cek-Shopee pattern as kaldu. Public “BB booster” / “minyak MPASI” / “original” queries map to this listing. Rice harga is already PR #17; kaldu is Next 2 #1 this week. Do **not** promise naik berat badan — the Shopee title says it; we are a retailer, follow the label, no medical claim.
   **Effort:** M
   **Expected action:** new article (see Next 2 #2). Retailer harga page, Shopee item URL as primary CTA, name rice Rp55.000 + kaldu/santan/kecap as cek-Shopee neighbors. WhatsApp only for stok toko Badung.

## P0 rotation

Stay on P0. Lip-care is still the only money page with zero blog, but PR #43 already drafted its title and the Bunda Elia kaldu/fat-oil listings are the underserved commercial gap this week.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 title (22-SKU aisle) — ship PR #19 + #17, do not rewrite; #4 / Next 2 #1 kaldu harga; #5 / Next 2 #2 fat oil harga |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #25 + PR #10; do not rewrite |
| Popok | `/shop/popok` | #3 title **keep Makuku**; do not ship PR #31 as-is; ship PR #49 (Makuku harga) + PR #28 (MamyPoko); do not rewrite |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | ship PR #22 lotion vs + PR #34 sabun vs + PR #40 Face Cream + PR #44 rash cream; no new skincare draft this week |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/perawatan-bibir` — still zero blog; title QA already drafted as PR #43. Do not start a lip-balm article until Next 2 P0 drafts exist.
- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 + Coconi / Cussons wipes. Saturday QA drafted as PR #37.
- `/blog/asi-booster-ibu-menyusui` — still no matching SKU; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; QA drafted as PR #46
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia rice harga), PR #19 (mpasi QA title), PR #22 (lotion vs), PR #25 (skincare QA title), PR #28 (MamyPoko harga), PR #31 (popok QA — **stale vs live Makuku**), PR #34 (sabun vs), PR #35/#41/#45/#50 (shop regressions), PR #37 (peralatan QA), PR #38/#47/#53 (price/GEO sync), PR #40 (Face Cream), PR #43 (bibir QA), PR #44 (rash cream), PR #46 (toko-bayi-bali QA), PR #49 (Makuku SAP harga), PR #51 (GEO 4 Nov), PR #52 (shop QA)

## Next 2 articles to write

1. **Title:** Harga Bunda Elia kaldu MPASI original — kaldu bayi 6 bulan Badung & Shopee
   **Primary keyword:** harga Bunda Elia kaldu MPASI original
   **Target:** `/shop/mpasi`
   **Shopee CTA angle:** SKU live `bumbu-bunda-elia-bpom-kaldu-mpasi-kaldu-anak-kaldu-bayi-non-gula-garam-kaldu-non` → `https://shopee.co.id/Bumbu-Bunda-Elia-BPOM-Kaldu-MPASI-Kaldu-Anak-Kaldu-Bayi-Non-Gula-Garam-Kaldu-Non-MSG-Kaldu-Organik-i.1869688077.53019019042`. Harga **cek Shopee** (row is Rp0). Neighbors on the same brand line: BB Booster Rice Rp55.000 (shop-home; already PR #17), fat oil `49569047166`, santan `46319042106`, kecap `49269042218` — name them, do not invent IDR. WhatsApp hanya tanya stok toko. No medical / no promised naik berat badan.

2. **Title:** Harga Bunda Elia fat oil original — minyak MPASI BB booster Badung & Shopee
   **Primary keyword:** harga Bunda Elia fat oil original
   **Target:** `/shop/mpasi`
   **Shopee CTA angle:** SKU live `bumbu-bunda-elia-chicken-fat-oil-beef-fat-oil-minyak-mpasi-bb-booster-` → `https://shopee.co.id/Bumbu-Bunda-Elia-Chicken-Fat-Oil-Beef-Fat-Oil-Minyak-MPASI-BB-Booster-MPASI-Lemak-MPASI-Lemak-Bayi-Penambah-Berat-Badan-i.1869688077.49569047166`. Harga **cek Shopee** (row is Rp0). Honest neighbor: BB Booster Rice Rp55.000 (shop-home; PR #17). Kaldu / santan / kecap: name + cek Shopee, no invented IDR. CTA oranye ke item URL itu, bukan shop home. WhatsApp hanya tanya stok toko Badung. Retailer copy only — do not promise penambah berat badan.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia BB Booster Rice” (PR #17), “Beeme vs Gently lotion” (PR #22), “harga MamyPoko Royal Soft” (PR #28), “sabun bayi non SLS vs” (PR #34), “harga Moell Face Cream” (PR #40), “harga Gently Baby Rash Cream” (PR #44), or “harga Makuku SAP original” (PR #49). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-11-08 (catalog 55 SKUs, `lastSynced` 2026-11-08; shop-regression PRs #35/#41/#45/#50 and popok QA #31 remain unmerged).

- 28 of 55 SKUs have `price: 0`. Cards correctly show “Cek harga di Shopee”, but there is no on-site IDR for the new MPASI line, Makuku, Bambi, Cussons, Coconi, or Milna/Promina. Do not invent a number in copy.
- 25 of 55 fallback/curated SKUs still set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home). That includes the priced heroes: Bunda Elia BB Booster Rice, MamyPoko Royal Soft, Gently rash cream, Beeme lip balm, Paseo, saringan MPASI. Only 2 curated SKUs have item URLs (Moell sunscreen `48013199704`, Moell Face Cream `52863165431`). The 28 new rows *do* have `…-i.{shopId}.{itemId}` links. Two more curated rows than last week’s “2 item URLs” note? Still 2 curated + 28 new = 30 item URLs / 25 shop-home.
- 25 curated `itemId` values are still synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` still leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” — WhatsApp is treated as the cart. Rp0 SKUs omit the price line but still say “memesan / cara pembayaran”.
- Homepage/how-to-buy copy equals the two channels: “Pesan via WhatsApp atau Shopee” / “Chat kami di WhatsApp untuk konfirmasi, atau checkout langsung di Shopee”. `indonesiaFaqs` same pattern (“pesan via WhatsApp, atau checkout di Shopee”). Category meta: “Pesan via WhatsApp atau Shopee”. `llms.ts` WhatsApp note still says “Chat stok dan pesanan.”
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro still says “popok Makuku/MamyPoko” (true) and priced range Rp22.500–Rp123.000 (true for priced rows only). Shop inclusions still hedge “Makuku sesuai stok Shopee” even though Makuku has a live item URL.
- `brands.json` still logos Mom Uung, Asi Booster, Philips Avent, Safe Baby, Gea Baby, Mustela with no matching SKU. Cussons has 2 catalog rows (wipes + hair lotion). `reviews.json` still attributes rows to Asi Booster / Philips Avent / Mustela with no catalog SKU.
- Newborn guide still tells shoppers to buy skincare “Gently, Mustela, Cussons”. Mustela still has no catalog row.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- `/blog/makuku-vs-mamypoko` English inclusions still say “Catalog listing ± Rp65,000” while ID/catalog MamyPoko is Rp123.000. The ID hedge “Makuku hanya jika listing Shopee ada” is still stale (live item URL exists).
- MPASI cluster speakable/price notes still describe a one-SKU Bunda Elia rice + saringan aisle. 21 other `/shop/mpasi` cards (including 4 Bunda Elia item URLs) are invisible to those articles.
- Two Gogofield cards (`29996024711` and `51519026608`) share the same Shopee listing title (“Gogofield Teri Kremes NON MSG / MPASI Bayi…”). Orange CTAs go to different item IDs; on-site names look duplicated.
- Saringan MPASI (feeding tool, Rp29.500) is still categorized `peralatan-bayi` while MPASI money-page copy talks about it.
- Footer shop list on `main` still skips `/shop/perawatan-bibir` (drafted in PR #35/#41/#45/#50).
- File `lastSynced` is 2026-11-08. Curated SKU `syncedAt` is still 2026-09-04; new Shopee rows `syncedAt` 2026-10-29. Priced IDR range still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` is `2026-10-29` (older than this catalog stamp).
- Category `<title>`s still omit harga / original / 6 bulan / Shopee on every P0 category. `/shop/popok` title names both brands (correct) but not original/Badung.

## Last run

2026-11-08
