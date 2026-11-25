# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-11-22**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-11-22, 27 curated SKUs still `syncedAt` 2026-09-04, 28 Shopee rows `syncedAt` 2026-10-29), shop/category/product/blog slugs in code, open marketing PRs, and last Sunday backlog (PR #60, 2026-11-15).

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-11-15 (PR #60)

Nothing from the Sunday backlogs or cluster drafts has merged to `main`. What *did* change since last Sunday:

- **Catalog stamp moved 2026-11-15 → 2026-11-22** (chore syncs only). Still **55 SKUs**, 27 priced (Rp22.500–Rp123.000) + 28 Rp0 with real item URLs. No new SKU, no price change on priced heroes. `SITE_CONTENT_UPDATED` is still `2026-11-14`.
- Last week’s Next 2 #1 **was drafted**: PR #61 `/blog/harga-bunda-elia-fat-oil-original` (item `49569047166`, Rp0 / cek Shopee). Do not rewrite it.
- Last week’s Next 2 #2 **was not drafted**: harga Beeme Bee Gentle lotion original (`beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi`, katalog Rp65.000, shop-home CTA) is still the open P0 article slot.
- New open ops PRs this week (not content): #62 shop SEO/sales regressions (17 Nov), #63 GEO citation checklist (18 Nov), #64 Shop QA `/shop/perawatan-kulit-bayi` (19 Nov), #65 price/GEO sync (21 Nov).
- PR #7, #10, #17, #19, #22, #25, #28, #31, #34, #40, #43, #44, #49, #55, #58 remain open drafts. Do not rewrite them. Prefer newer QA **#64 over #25** for skincare; prefer **#58 over #19** for MPASI.
- Footer on `main` still omits `/shop/perawatan-bibir`.
- Category `<title>`s on `main` are unchanged from 14 Nov: `/shop/mpasi` is `Toko MPASI Bali | Bunda Elia, Milna, Bumboo`; `/shop/perawatan-kulit-bayi` is `Skincare Bayi Bali | Moell, Gently, Beeme`. Brands are named; **harga / original / 6 bulan / Shopee are still missing.** H1s are still `{label} di toko HiMoon Badung`. `categoryPageHeadings` in `src/lib/seo/indonesia.ts` is unused.
- `/shop/popok` title on `main` is still `Popok Makuku & MamyPoko` (factually true). **PR #31 still rewrites it to drop Makuku — do not ship it as-is.**
- PDP titles on `main` are still `${product.name} | Beli di Shopee`. Product cards remain Shopee-only (`OrderButtons`). Homepage / how-to-buy / blog CTA / category meta still treat WhatsApp as a checkout channel.

This week stays on P0. Fat oil is no longer the underserved article gap. Use title tweaks on the live PDPs + one new harga article for Beeme lotion (carry) and one for the next Bunda Elia SKU with a working orange CTA (santan). No P1 lip-care exception — PR #43 already drafted that title.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali (55 SKUs; priced range Rp22.500–Rp123.000; 28 cards show “Cek harga di Shopee”)
- `/shop/mpasi` — 22 SKUs (Bunda Elia 5 + 17 other MPASI/snack brands)
- `/shop/perawatan-kulit-bayi` — Beeme 5 + Gently 9 + Moell 8 + Bambi 2 + Cussons 1 + Doodle 1 (26)
- `/shop/popok` — MamyPoko Royal Soft Rp123.000 (shop-home) + Makuku SAP Comfort Fit (item URL, Rp0)
- `/shop/peralatan-bayi` — Paseo Rp22.500 + saringan MPASI Rp29.500 + Coconi bib + Cussons wipes
- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm only (Rp70.000, shop-home)
- `/toko-bayi-bali` — local store vs Shopee

Product PDPs exist for every catalog slug, e.g.:

- `/shop/mpasi/bumbu-bunda-elia-bb-booster-rice-mpasi-beras` (Rp55.000, shop-home URL)
- `/shop/mpasi/bumbu-bunda-elia-bpom-kaldu-mpasi-kaldu-anak-kaldu-bayi-non-gula-garam-kaldu-non` (Rp0, item `53019019042`)
- `/shop/mpasi/bumbu-bunda-elia-chicken-fat-oil-beef-fat-oil-minyak-mpasi-bb-booster-mpasi-lema` (Rp0, item `49569047166`)
- `/shop/mpasi/bumbu-bunda-elia-coconut-milk-powder-santan-mpasi-santan-anak-bb-booster-mpasi-s` (Rp0, item `46319042106`)
- `/shop/perawatan-kulit-bayi/moell-physical-sunscreen-bayi-anak-30gr-spf` (Rp79.000, item `48013199704`)
- `/shop/perawatan-kulit-bayi/beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi` (Rp65.000, shop-home URL)
- `/shop/popok/makuku-sap-diapers-comfort-fit-tape-nbsmlxlxxl-popok-bayi-tipis-extra-dry-anti-g` (Rp0, item `49969731055`)
- `/shop/popok/mamypoko-royal-soft-popok-bayi-tipe-celana-perekat` (Rp123.000, shop-home URL)

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
- `/blog/harga-makuku-sap-original` (PR #49)
- `/blog/harga-bunda-elia-kaldu-mpasi-original` (PR #55)
- `/blog/harga-bunda-elia-fat-oil-original` (PR #61) — drafted this week from 2026-11-15 Next 2 #1

## This week — top 5 opportunities

1. **Target keyword:** harga Bunda Elia BB Booster Rice original / toko MPASI 6 bulan Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/mpasi and https://himoonbaby.com/shop/mpasi/bumbu-bunda-elia-bb-booster-rice-mpasi-beras
   **Why it sells:** Parents searching this already want a pack for complementary feeding. `/shop/mpasi` is still a **22-SKU** aisle whose `<title>` names Bunda Elia / Milna / Bumboo but still omits harga / original / 6 bulan / Shopee. H1 is still `MPASI di toko HiMoon Badung`. The rice SKU has a PDP, but the orange CTA on that PDP opens shop-home (synthetic `itemId` 100010). Cluster blogs still describe a one-SKU rice + saringan aisle. Rice harga body is PR #17; fat oil is now PR #61; kaldu is PR #55; newer mpasi QA is PR #58 (and older PR #19).
   **Effort:** S
   **Expected action:** title tweak — ship PR #58 / #19 for category title+H1 (do not rewrite), then add harga / original / 6 bulan / Shopee on the **rice PDP** title. Internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` should hit the rice PDP (katalog Rp55.000) plus “cek Shopee” PDPs for kaldu / fat oil / santan / kecap. Saringan MPASI Rp29.500 still lives on `/shop/peralatan-bayi`. Do not invent IDR for Rp0 rows. Ship/link PR #17 and PR #61, do not rewrite.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi/moell-physical-sunscreen-bayi-anak-30gr-spf
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical Sunscreen 30gr SPF 50+ is still katalog Rp79.000 and **one of two curated SKUs with a working Shopee item URL** (`48013199704`). The live PDP title is the raw product name + “Beli di Shopee” — it already has SPF, not 6 bulan / original / Badung / harga. Category `<title>` on `main` is still `Skincare Bayi Bali | Moell, Gently, Beeme`; H1 is still `Perawatan Kulit Bayi di toko HiMoon Badung`. PR #64 (19 Nov) already drafted category title `Perawatan Kulit Bayi Bali | Moell Rp79.000` plus H1/FAQ/Offer JSON-LD — ship that, do not rewrite. Gently Physical SPF 50 remains Rp75.000 (shop-home). Vs draft is PR #10; older category QA is PR #25.
   **Effort:** S
   **Expected action:** title tweak on the Moell sunscreen PDP (name 6 bulan + original + Badung / Shopee + katalog Rp79.000). Ship/link **PR #64** (prefer over #25) and PR #10, do not rewrite. Internal links from `/blog/beli-sunscreen-bayi` should point at the PDP, not only the category. Follow label age; no medical claim.

3. **Target keyword:** harga Makuku SAP original / popok bayi tipis Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok/makuku-sap-diapers-comfort-fit-tape-nbsmlxlxxl-popok-bayi-tipis-extra-dry-anti-g
   **Why it sells:** Makuku is live (`item` `49969731055`). Price is 0 — **do not publish a third number or invent a size**. Category `<title>` `Popok Makuku & MamyPoko` is factually true but still omits original / Badung / Shopee. The PDP is the first indexable Makuku URL; `/blog/makuku-vs-mamypoko` and shop inclusions still hedge “Makuku sesuai stok Shopee”. PR #31 drops Makuku from the category title — that patch is still wrong. The harga article is PR #49. Saturday QA #64 named **next rotation `/shop/popok`** — do not wait for a new popok QA to keep Makuku in the live title.
   **Effort:** S
   **Expected action:** title tweak on `/shop/popok` that **keeps Makuku**, adds original + Badung + Shopee, and on the Makuku PDP. Do **not** ship PR #31 as-is. Ship/link PR #49 (and PR #28 for MamyPoko Rp123.000), do not rewrite. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` to the live Makuku PDP / item URL. WhatsApp only for size/stok toko.

4. **Target keyword:** harga Beeme Bee Gentle lotion original / lotion bayi kulit sensitif Bali
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi/beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi
   **Why it sells:** P0 skincare rotation after two MPASI-heavy Sundays. Beeme Bee Gentle 200ml is katalog Rp65.000 and has a PDP. `/blog/perawatan-kulit-bayi-sensitif` is a routine, not a Beeme harga page. Lotion vs (Beeme / Gently / Moell) is already PR #22 — do not rewrite it. This was Next 2 #2 last week and was not written. Neighbor: Gently Hydra Soft 150gr Rp93.000 (shop-home). Both shop-home CTAs are friction (see notes); still better to title the PDP than to skip Beeme.
   **Effort:** M
   **Expected action:** new article (see Next 2 #1) + title tweak on the Beeme lotion PDP (harga / original / kulit sensitif / Badung). Internal links from `/blog/perawatan-kulit-bayi-sensitif` to the Beeme and Gently lotion PDPs. No dermatitis winner. WhatsApp only for stok toko.

5. **Target keyword:** harga Bunda Elia santan original / coconut milk powder MPASI 6 bulan Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/mpasi/bumbu-bunda-elia-coconut-milk-powder-santan-mpasi-santan-anak-bb-booster-mpasi-s
   **Why it sells:** After rice (PR #17), kaldu (PR #55), and fat oil (PR #61), the next Bunda Elia SKU with a **working orange CTA** is santan / coconut milk powder (`…-i.1869688077.46319042106`). Same Rp0 / cek-Shopee pattern. Public “santan MPASI” / “BB booster” / “original” / “6 bulan” queries map to this listing. Cluster blogs still sell only rice Rp55.000. Do **not** promise naik berat badan or organik beyond the listing title — retailer copy, follow the label, no medical claim.
   **Effort:** M
   **Expected action:** new article (see Next 2 #2) plus internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` to this PDP. Do not invent IDR. Do not rewrite PR #17, #55, or #61.

## P0 rotation

Stay on P0. Lip-care is still the only money page with zero blog, but PR #43 already drafted its title and the unwritten Beeme lotion + santan harga pages are the underserved commercial gap this week.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` + rice/santan PDPs | #1 title on category + rice PDP — ship PR #58/#19 + #17, do not rewrite; fat oil is PR #61 (do not rewrite); kaldu is PR #55 (do not rewrite); #5 / Next 2 #2 santan harga |
| Sunscreen Moell (+ Gently physical) | Moell sunscreen PDP | #2 title on PDP; ship/link **PR #64** (prefer over #25) + PR #10; do not rewrite |
| Popok | Makuku PDP + `/shop/popok` | #3 title **keep Makuku**; do not ship PR #31 as-is; ship PR #49 + PR #28; do not rewrite |
| Skincare Beeme / Gently / Moell | Beeme lotion PDP | #4 / Next 2 #1 Beeme harga; ship PR #22 lotion vs + PR #34 sabun vs + PR #40 Face Cream + PR #44 rash cream; do not rewrite |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/perawatan-bibir` — still zero blog; title QA already drafted as PR #43. Do not start a lip-balm article until the two new P0 drafts exist.
- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 + Coconi / Cussons wipes. Saturday QA drafted as PR #37.
- `/blog/asi-booster-ibu-menyusui` — still no matching SKU; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; QA drafted as PR #46
- Next Bunda Elia after santan: kecap `49269042218` (item URL, Rp0)
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia rice harga), PR #19/#58 (mpasi QA title), PR #22 (lotion vs), PR #25/#64 (skincare QA title — prefer #64), PR #28 (MamyPoko harga), PR #31 (popok QA — **stale vs live Makuku**), PR #34 (sabun vs), PR #35/#41/#45/#50/#56/#62 (shop regressions), PR #37 (peralatan QA), PR #38/#47/#53/#59/#65 (price/GEO sync), PR #40 (Face Cream), PR #43 (bibir QA), PR #44 (rash cream), PR #46 (toko-bayi-bali QA), PR #49 (Makuku SAP harga), PR #52 (shop QA), PR #55 (kaldu harga), PR #57/#63 (GEO), PR #61 (fat oil harga)

## Next 2 articles to write

1. **Title:** Harga Beeme Bee Gentle lotion original — lotion bayi kulit sensitif Badung & Shopee
   **Primary keyword:** harga Beeme lotion bayi original
   **Target:** `/shop/perawatan-kulit-bayi` (CTA to `/shop/perawatan-kulit-bayi/beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi`)
   **Shopee CTA angle:** SKU katalog Rp65.000 (`beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi`). Orange CTA today opens shop-home — say “Beli di Shopee himoonbabykids” and do not invent a listing IDR besides the catalog number. Neighbor Gently Hydra Soft 150gr Rp93.000 (shop-home; vs is PR #22 — link it, do not rewrite). WhatsApp hanya tanya stok toko. No medical winner / no dermatitis guide.

2. **Title:** Harga Bunda Elia santan original — coconut milk powder MPASI 6 bulan Badung & Shopee
   **Primary keyword:** harga Bunda Elia santan original
   **Target:** `/shop/mpasi` (CTA to `/shop/mpasi/bumbu-bunda-elia-coconut-milk-powder-santan-mpasi-santan-anak-bb-booster-mpasi-s`)
   **Shopee CTA angle:** SKU live → `https://shopee.co.id/Bumbu-Bunda-Elia-Coconut-Milk-Powder-Santan-MPASI-Santan-Anak-BB-Booster-MPASI-Santan-Organik-Lemak-MPASI-Lemak-Bayi-i.1869688077.46319042106`. Harga **cek Shopee** (row is Rp0). Honest neighbors: BB Booster Rice Rp55.000 (shop-home; PR #17), kaldu `53019019042` (PR #55), fat oil `49569047166` (PR #61), kecap `49269042218` — name them, do not invent IDR. CTA oranye ke item URL itu, bukan shop home. WhatsApp hanya tanya stok toko Badung. Retailer copy only — do not promise organik / lemak / naik berat badan beyond the listing.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia BB Booster Rice” (PR #17), “Beeme vs Gently lotion” (PR #22), “harga MamyPoko Royal Soft” (PR #28), “sabun bayi non SLS vs” (PR #34), “harga Moell Face Cream” (PR #40), “harga Gently Baby Rash Cream” (PR #44), “harga Makuku SAP original” (PR #49), “harga Bunda Elia kaldu MPASI original” (PR #55), or “harga Bunda Elia fat oil original” (PR #61). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-11-22 (catalog 55 SKUs, `lastSynced` 2026-11-22; PDPs shipped 2026-11-14; shop-regression PRs #50/#56/#62, skincare QA #64, and popok QA #31 remain unmerged).

- 28 of 55 SKUs have `price: 0`. Cards and PDPs correctly show “Cek harga di Shopee”, but there is no on-site IDR for the new MPASI line, Makuku, Bambi, Cussons, Coconi, or Milna/Promina. Product JSON-LD omits `offers.price` when price is 0 (good) but still marks `InStock`. Do not invent a number in copy.
- 25 of 55 curated SKUs still set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home). That includes priced heroes: Bunda Elia BB Booster Rice, MamyPoko Royal Soft, Beeme lotion / lip balm, Gently Hydra Soft, Paseo, saringan MPASI. Only 2 curated SKUs have item URLs (Moell sunscreen `48013199704`, Moell Face Cream `52863165431`). The 28 new rows *do* have `…-i.{shopId}.{itemId}` links. PDP `ShopeeCta href={product.shopeeUrl}` therefore dumps those 25 carts to shop-home even though the on-site PDP now exists.
- 25 curated `itemId` values are still synthetic `100001`–`100025`. PDPs exist now, but they cannot recover a deep Shopee link from a fake itemId.
- `OrderButtons` on cards is Shopee-only (WhatsApp button removed 2026-11-14). `whatsappOrderUrl` in `src/lib/utils.ts` is unused leftover copy: “Saya ingin memesan” + harga + “cara pembayaran”.
- Homepage/how-to-buy copy still equals the two channels: “Pesan via WhatsApp atau Shopee” / “Checkout via WhatsApp atau Shopee”. Category meta: “Pesan via WhatsApp atau Shopee himoonbabykids”. `indonesiaFaqs` how-to-buy was tightened on `/shop` (“WhatsApp hanya untuk tanya stok”) but homepage values/how-to-buy/hero were not. `llms.ts` WhatsApp note still says “Chat stok dan pesanan.”
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle still says “pesan via WhatsApp atau Shopee”.
- `/shop` intro still says “popok Makuku/MamyPoko” (true) and priced range Rp22.500–Rp123.000 (true for priced rows only). Shop inclusions still hedge “Makuku sesuai stok Shopee” even though Makuku has a live item URL and PDP.
- `brands.json` still logos Mom Uung, Asi Booster, Philips Avent, Safe Baby, Gea Baby, Mustela with no matching SKU. Cussons has 2 catalog rows (wipes + hair lotion). `reviews.json` still attributes rows to Asi Booster / Philips Avent / Mustela with no catalog SKU.
- Newborn guide still tells shoppers to buy skincare “Gently, Mustela, Cussons”. Mustela still has no catalog row.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- `/blog/makuku-vs-mamypoko` English inclusions still say “Catalog listing ± Rp65,000” while ID/catalog MamyPoko is Rp123.000. The ID hedge “Makuku hanya jika listing Shopee ada” is still stale (live item URL + PDP exist).
- MPASI cluster speakable/price notes still describe a one-SKU Bunda Elia rice + saringan aisle. 21 other `/shop/mpasi` cards (including 4 Bunda Elia item URLs + PDPs) are invisible to those articles.
- Two Gogofield cards (`29996024711` and `51519026608`) share the same Shopee listing title (“Gogofield Teri Kremes NON MSG / MPASI Bayi…”). Orange CTAs go to different item IDs; on-site names look duplicated.
- Saringan MPASI (feeding tool, Rp29.500) is still categorized `peralatan-bayi` while MPASI money-page copy talks about it.
- Footer shop list on `main` still skips `/shop/perawatan-bibir` (drafted in PR #35/#41/#45/#50/#56/#62).
- File `lastSynced` is 2026-11-22. Curated SKU `syncedAt` is still 2026-09-04; new Shopee rows `syncedAt` 2026-10-29. Priced IDR range still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number.
- Category H1s still `{label} di toko HiMoon Badung`. `categoryPageHeadings` exists (`Beli MPASI bayi di Bali: kaldu, bubur, dan snack`, etc.) and is unused.
- New PDP titles are raw Shopee/catalog names + “Beli di Shopee”. They are indexable but do not yet carry the commercial modifiers this pass cares about (harga, original, Badung, 6 bulan) except where the product name already includes SPF / brand.

## Last run

2026-11-22
