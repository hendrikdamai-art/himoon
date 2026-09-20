# HiMoon SEO weekly backlog

Weekly commercial-intent pass. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-09-20), shop/category/blog slugs in code, and open marketing PRs.

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-09-13 (PR #9)

Last week’s S title tweaks never landed on `main`. Category `<title>` is still `{label} | Baby Shop Bali`. PR #11 (shop regressions) only rewrote descriptions, not titles. PR #10 drafted last week’s Moell vs Gently article but is unmerged — do not rewrite it.

This week stays on P0 and steps one level more commercial: **SPF 50 / 6 bulan / Badung / vs lotion**, plus ship the already-written sunscreen comparison.

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
   **Why it sells:** Parents searching this already want a pack for complementary feeding, not a parenting essay. `/shop/mpasi` is a one-SKU page (Rp55.000) whose `<title>` is still generic `MPASI | Baby Shop Bali`. Head-term blog `toko-mpasi-bali` exists; the SKU + “harga” + “original” + “6 bulan” + “Badung” query does not.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/mpasi` (e.g. “Harga Bunda Elia BB Booster Rice Original | Toko MPASI Badung / Shopee”) + internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that name the SKU and 6 bulan. Article body is Next 2 #1 — do not write it in a title-only slot.

2. **Target keyword:** Moell sunscreen SPF 50 original Bali  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical 30gr is in catalog at Rp79.000 and is one of only two SKUs with a real Shopee item URL. `/blog/beli-sunscreen-bayi` already covers the head term; the category title still does not say SPF 50 / original / Bali / harga.  
   **Effort:** S  
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + original + Bali) and internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card, not just the category.

3. **Target keyword:** Beeme vs Gently lotion bayi kulit sensitif  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Both lotions are in the live catalog (Beeme Bee Gentle 200ml Rp65.000; Gently Hydra Soft 150gr Rp93.000). “vs” is buying intent. `/blog/perawatan-kulit-bayi-sensitif` mentions both brands in passing and leads with a generic routine. Last week’s Beeme-only article is upgraded to a comparison so one page sells two SKUs.  
   **Effort:** M  
   **Expected action:** new article (see Next 2). Honest retailer comparison, link both cards, Shopee CTA, no medical winner / no dermatitis guide.

4. **Target keyword:** harga MamyPoko Royal Soft / popok bayi Badung Shopee  
   **Money-page URL:** https://himoonbaby.com/shop/popok  
   **Why it sells:** Only diaper SKU in `products.json` is MamyPoko Royal Soft (Rp123.000). `/shop` intro, `/shop` meta, `indonesiaFaqs`, and both popok blogs still promise Makuku. Comparison traffic is real, but promising a missing SKU is a dead checkout. Category title is still `Popok & Pispot | Baby Shop Bali`.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/popok` toward MamyPoko + harga + Badung/Shopee; internal-link pass that says Makuku only if a live Shopee listing appears.

5. **Target keyword:** Moell vs Gently sunscreen bayi  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Both physical SPF 50 SKUs are in catalog (Moell 30gr Rp79.000; Gently Physical Serum 30gr Rp75.000). The article already exists as PR #10 (`/blog/moell-vs-gently-sunscreen-bayi`). On `main` the cluster still has no “vs” URL, so sunscreen traffic cannot convert to a comparison checkout.  
   **Effort:** S  
   **Expected action:** internal links from `/blog/beli-sunscreen-bayi` and `/blog/perawatan-kulit-bayi-sensitif` into PR #10’s slug once merged. Do not rewrite the article.

## P0 rotation

Stay on P0 this week. Nothing on P1 is more underserved than Bunda Elia harga, the unshipped sunscreen vs, the missing lotion vs, and the Makuku-on-a-MamyPoko-page leak.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 title + links; Next 2 #1 article |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title; #5 ship/link PR #10 |
| Popok | `/shop/popok` | #4 — sell MamyPoko; do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | #3 new Beeme vs Gently lotion article |

P1 parked (do not write unless a P0 slot finishes early):

- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm Rp70.000, keyword “lip balm bayi 6 bulan”, no blog
- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog
- `/toko-bayi-bali` — local page exists; title already commercial

## Next 2 articles to write

1. **Title:** Harga Bunda Elia BB Booster Rice original — toko MPASI Badung & Shopee  
   **Primary keyword:** harga Bunda Elia BB Booster Rice original  
   **Target:** `/shop/mpasi`  
   **Shopee CTA angle:** Satu SKU nutrisi 6 bulan, harga katalog Rp55.000 mengikuti Shopee. CTA oranye ke listing/shop himoonbabykids; jangan janji bahan curah atau official store pabrik. WhatsApp hanya tanya stok toko Badung.

2. **Title:** Beeme vs Gently: lotion bayi original untuk kulit sensitif di Bali  
   **Primary keyword:** Beeme vs Gently lotion bayi kulit sensitif  
   **Target:** `/shop/perawatan-kulit-bayi`  
   **Shopee CTA angle:** Bandingkan dua lotion yang ada di etalase (Beeme Bee Gentle 200ml Rp65.000 / Gently Hydra Soft 150gr Rp93.000), lalu checkout himoonbabykids supaya harga, isi pack, dan ongkir Badung–Denpasar live. WhatsApp hanya untuk tanya stok toko.

Do not re-queue “Moell vs Gently sunscreen” — that draft is PR #10.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` (PR #11 has a partial WhatsApp-copy fix; unmerged).

- 25 of 27 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen and Moell face cream have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart.
- Most fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” on `main` — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern.
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro and meta still say “popok Makuku/MamyPoko”. Catalog has MamyPoko only. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. Do not invent IDR.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- File `lastSynced` is 2026-09-20 but every SKU `syncedAt` is still 2026-09-04. Catalog IDR range is still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number if brand sites disagree.
- `SITE_CONTENT_UPDATED` in `src/lib/seo/constants.ts` is still `2026-09-05` (stale sitemap/GEO dates).
- Category `<title>` pattern is `{label} | Baby Shop Bali` — missing harga / original / brand / Badung on every P0 category (still true in unmerged PR #11).

## Last run

2026-09-20
