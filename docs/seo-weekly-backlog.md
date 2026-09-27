# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-09-27**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-09-27, every SKU `syncedAt` still 2026-09-04), shop/category/blog slugs in code, open marketing PRs, and public brand/marketplace SERPs.

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-09-20 (PR #15) and 2026-09-13 (PR #9)

Nothing from the last two Sunday passes has landed on `main`:

- Category `<title>` is still `{label} | Baby Shop Bali` (third week). Unmerged PR #18 (`Fix shop SEO/sales regressions`, 2026-09-22) updates descriptions + WhatsApp copy but **leaves titles generic**.
- Next 2 articles from 2026-09-20 (Bunda Elia harga original; Beeme vs Gently lotion) were never drafted.
- PR #10 (`/blog/moell-vs-gently-sunscreen-bayi`) is still open — do not rewrite it.
- `/shop` intro + meta still say “popok Makuku/MamyPoko”. Catalog still has MamyPoko only.

This week stays on P0 and steps one level more commercial: **6 bulan + harga + original + Badung/Shopee**. One P1 slot is included because `/shop/perawatan-bibir` still has zero supporting article.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali (27 SKUs, Rp22.500–Rp123.000)
- `/shop/mpasi` — Bunda Elia BB Booster Rice only (1 SKU, Rp55.000)
- `/shop/perawatan-kulit-bayi` — Beeme 5 + Gently 9 + Moell 8 (widest etalase)
- `/shop/popok` — MamyPoko Royal Soft only (1 SKU, Rp123.000)
- `/shop/peralatan-bayi` — Paseo tissue Rp22.500 + saringan MPASI Rp29.500
- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm only (Rp70.000)
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

Draft only (PR #10, not on `main`): `/blog/moell-vs-gently-sunscreen-bayi`

## This week — top 5 opportunities

1. **Target keyword:** harga Bunda Elia BB Booster Rice original / beras MPASI 6 bulan Badung  
   **Money-page URL:** https://himoonbaby.com/shop/mpasi  
   **Why it sells:** Parents searching this already want a pack for complementary feeding, not a parenting essay. `/shop/mpasi` is a one-SKU page (katalog Rp55.000) whose `<title>` is still generic `MPASI | Baby Shop Bali` after two Sunday asks. Official site currently shows ~Rp49.900; Tokopedia listings cluster ~Rp48.700–Rp51.900. **Catalog/Shopee wins — do not publish a third number.** Head-term blog `toko-mpasi-bali` exists; the SKU + “harga” + “original” + “6 bulan” + “Badung” query still does not.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/mpasi` (e.g. “Harga Bunda Elia BB Booster Rice Original | Toko MPASI 6 Bulan Badung / Shopee”) + internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that name the SKU, 6 bulan, and katalog Rp55.000. Article body is Next 2 #1 — do not write it in a title-only slot.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Year-round UV in Badung/Canggu. Moell’s own label positions Physical 30gr for bayi **6 bulan+** (SPF 50+ PA++++). HiMoon catalog is Rp79.000; official moell.co.id currently shows ~Rp65.000. **Catalog/Shopee wins.** `/blog/beli-sunscreen-bayi` covers the head term “beli sunscreen bayi” but does not title around “6 bulan” / SPF 50 / original / Badung. Category `<title>` is still `Perawatan Kulit Bayi | Baby Shop Bali`.  
   **Effort:** S  
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) and internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card (the only sunscreen SKU with a real Shopee item URL). Follow label age; no medical claim.

3. **Target keyword:** Beeme vs Gently lotion bayi kulit sensitif  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Both lotions are in the live catalog (Beeme Bee Gentle 200ml Rp65.000; Gently Hydra Soft 150gr Rp93.000). “vs” is buying intent. Public chatter disagrees (Beeme official shop ~Rp85.000; Gently official sale ~Rp75.000 from Rp99.000) — **catalog/Shopee wins, omit a third number.** `/blog/perawatan-kulit-bayi-sensitif` mentions both brands in a generic routine. Still no comparison URL on `main`.  
   **Effort:** M  
   **Expected action:** new article (see Next 2). Honest retailer comparison, link both cards, Shopee CTA, no medical winner / no dermatitis guide.

4. **Target keyword:** harga MamyPoko Royal Soft / popok bayi Badung Shopee  
   **Money-page URL:** https://himoonbaby.com/shop/popok  
   **Why it sells:** Only diaper SKU in `products.json` is MamyPoko Royal Soft (Rp123.000). `/shop` intro, `/shop` meta, `indonesiaFaqs`, `reviews.json` (“Popok Makuku”), and both popok blogs still promise Makuku. Comparison traffic is real, but promising a missing SKU is a dead checkout. Category title is still `Popok & Pispot | Baby Shop Bali`.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/popok` toward MamyPoko + harga + Badung/Shopee; internal-link pass that says Makuku only if a live Shopee listing appears.

5. **Target keyword:** lip balm bayi 6 bulan original / Beeme Honey Lollipop Balm  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-bibir  
   **Why it sells:** P1 page is clearly underserved: one SKU (Beeme Honey Lollipop Balm, katalog Rp70.000, label 6 bulan+ / aman ditelan) and **zero blog**. Beeme is a P0 brand; “6 bulan” + “original” is commercial. Existing skincare guides mention bibir in passing and send traffic to `/shop/perawatan-kulit-bayi`, not this money page.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/perawatan-bibir` (e.g. “Lip Balm Bayi 6 Bulan Original | Beeme Honey Lollipop Balm Badung / Shopee”) + internal links from `/blog/perawatan-kulit-bayi-sensitif` and `/blog/perlengkapan-bayi-baru-lahir` to `/shop/perawatan-bibir`. Do not write a full article this week while Next 2 P0 drafts are still unwritten.

## P0 rotation

Stay on P0 except #5 (lip-care money page has no cluster article after three weekly passes). Nothing else on P1 is more underserved than Bunda Elia harga, the 6-bulan sunscreen title, the missing lotion vs, and the Makuku-on-a-MamyPoko-page leak.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 title + links; Next 2 #1 article |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #10 (do not rewrite) |
| Popok | `/shop/popok` | #4 — sell MamyPoko; do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | #3 new Beeme vs Gently lotion article |
| P1 exception: perawatan bibir Beeme | `/shop/perawatan-bibir` | #5 title + internal links only |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; title already commercial
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #18 (shop regressions), PR #20 (price/GEO sync)

## Next 2 articles to write

1. **Title:** Harga Bunda Elia BB Booster Rice original — toko MPASI Badung & Shopee  
   **Primary keyword:** harga Bunda Elia BB Booster Rice original  
   **Target:** `/shop/mpasi`  
   **Shopee CTA angle:** Satu SKU nutrisi 6 bulan, harga katalog Rp55.000 mengikuti Shopee (official ~Rp49.900 is not our number). CTA oranye ke listing/shop himoonbabykids; jangan janji bahan curah, kenaikan berat badan, atau official store pabrik. WhatsApp hanya tanya stok toko Badung.

2. **Title:** Beeme vs Gently: lotion bayi original untuk kulit sensitif di Bali  
   **Primary keyword:** Beeme vs Gently lotion bayi kulit sensitif  
   **Target:** `/shop/perawatan-kulit-bayi`  
   **Shopee CTA angle:** Bandingkan dua lotion yang ada di etalase (Beeme Bee Gentle 200ml Rp65.000 / Gently Hydra Soft 150gr Rp93.000), lalu checkout himoonbabykids supaya harga, isi pack, dan ongkir Badung–Denpasar live. WhatsApp hanya untuk tanya stok toko. No medical winner.

Do not re-queue “Moell vs Gently sunscreen” — that draft is PR #10. Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` (PR #18 has a partial WhatsApp/description fix; unmerged).

- 25 of 27 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen and Moell face cream have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart.
- 25 of 27 fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” on `main` — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern.
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro and meta still say “popok Makuku/MamyPoko”. Catalog has MamyPoko only. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs. `reviews.json` still attributes a review to “Popok Makuku”.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- File `lastSynced` is 2026-09-27 but every SKU `syncedAt` is still 2026-09-04. Catalog IDR range is still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Public brand prices disagree (Bunda Elia official ~Rp49.900 vs katalog Rp55.000; Moell sunscreen official ~Rp65.000 vs katalog Rp79.000; Gently Hydra Soft official sale ~Rp75.000 vs katalog Rp93.000; Beeme lotion official chatter ~Rp85.000 vs katalog Rp65.000). Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` in `src/lib/seo/constants.ts` is still `2026-09-05` (stale sitemap/GEO dates).
- Category `<title>` pattern is `{label} | Baby Shop Bali` — missing harga / original / brand / Badung / 6 bulan on every P0 category (still true in unmerged PR #18).

## Last run

2026-09-27
