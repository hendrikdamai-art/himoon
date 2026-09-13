# HiMoon SEO weekly backlog

Weekly commercial-intent pass. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main` yet), live catalog `src/data/products.json` (`lastSynced` 2026-09-13), shop/category/blog slugs in code, and public marketplace/brand SERPs.

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali
- `/shop/mpasi` — Bunda Elia BB Booster Rice only (1 SKU, Rp55.000)
- `/shop/perawatan-kulit-bayi` — Beeme / Gently / Moell (widest etalase)
- `/shop/popok` — MamyPoko Royal Soft only (1 SKU, Rp123.000)
- `/shop/peralatan-bayi` — Paseo tissue + saringan MPASI
- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm only
- `/toko-bayi-bali` — local store vs Shopee

Product slugs exist in JSON but there is no `/shop/[kategori]/[slug]` route (cards are the only PDP).

Blog / guide slugs (`src/lib/seo/guides.ts`; `src/data/blog.json` is leftover long-form, not what `/blog` serves):

- `/blog/toko-mpasi-bali`
- `/blog/panduan-mpasi-6-bulan`
- `/blog/beli-sunscreen-bayi`
- `/blog/perawatan-kulit-bayi-sensitif`
- `/blog/tips-memilih-popok-bayi`
- `/blog/makuku-vs-mamypoko`
- `/blog/perlengkapan-bayi-baru-lahir`
- `/blog/asi-booster-ibu-menyusui`

Seed pass (2026-09-11) already named head terms *toko MPASI Bali*, *beli sunscreen bayi*, *Makuku vs MamyPoko*, *lotion bayi kulit sensitif*, *perlengkapan bayi baru lahir*. Those pages exist. This week goes one step more commercial: **harga / original / vs / Badung / 6 bulan** on SKUs that are actually in the catalog.

## This week — top 5 opportunities

1. **Target keyword:** harga Bunda Elia BB Booster Rice original  
   **Money-page URL:** https://himoonbaby.com/shop/mpasi  
   **Why it sells:** Parents searching this already want a pack, not a parenting essay. Official/marketplace listings cluster around Rp46.500–Rp58.000; HiMoon catalog is Rp55.000. `/shop/mpasi` title is still generic `MPASI | Baby Shop Bali`. Blog `toko-mpasi-bali` ranks the head term but under-uses “harga” + “original” + “Shopee”.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/mpasi` (e.g. “Harga MPASI Bunda Elia Original | Toko MPASI Bali / Shopee”) + internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` to the category H1/SKU name.

2. **Target keyword:** sunscreen bayi Bali / Moell sunscreen original  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical 30gr is in catalog at Rp79.000 (official brand site currently shows ~Rp65.000 — treat Shopee as source of truth, do not invent a third number). `/blog/beli-sunscreen-bayi` already exists; category title still does not say harga / original / Bali.  
   **Effort:** S  
   **Expected action:** title tweak on the skincare category + H1, and add internal links from `/blog/beli-sunscreen-bayi` and `/blog/perawatan-kulit-bayi-sensitif` that name Moell + Gently physical SKUs.

3. **Target keyword:** Moell vs Gently sunscreen bayi  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Both physical SPF 50 SKUs are in the live catalog (Moell 30gr Rp79.000; Gently Physical Serum 30gr Rp75.000). “vs” is buying intent; no guide exists. Beats another generic “tips kulit bayi” essay.  
   **Effort:** M  
   **Expected action:** new article (see Next 2). Honest retailer comparison, link both cards, Shopee CTA, no medical winner.

4. **Target keyword:** harga MamyPoko Royal Soft / beli popok bayi Badung  
   **Money-page URL:** https://himoonbaby.com/shop/popok  
   **Why it sells:** Only diaper SKU in `products.json` is MamyPoko Royal Soft (Rp123.000). Copy on `/shop` and both popok blogs still promises Makuku. Comparison traffic is real, but promising a missing SKU is a dead checkout.  
   **Effort:** S  
   **Expected action:** title tweak on `/shop/popok` toward MamyPoko + Badung/Shopee; internal-link pass that says Makuku only if a live Shopee listing appears.

5. **Target keyword:** Beeme lotion bayi original / kulit sensitif  
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi  
   **Why it sells:** Six Beeme SKUs in catalog (lotion Rp65.000 is the hero; official shop chatter ~Rp85.000). `/blog/perawatan-kulit-bayi-sensitif` mentions Beeme in passing and leads with Gently/Moell. Brand + “original” + “kulit sensitif” is commercial and underserved.  
   **Effort:** M  
   **Expected action:** new article (or a tight internal-link + H2 pass if the writer only has an S slot). Do not write a medical dermatitis guide.

## P0 rotation

Stay on P0 this week. Nothing on P1 is more underserved than the Beeme and Moell-vs-Gently gaps.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 — harga/original title + links |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title, #3 new vs article |
| Popok | `/shop/popok` | #4 — sell MamyPoko; do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | #5 — Beeme original / kulit sensitif |

P1 parked (do not write unless a P0 slot finishes early):

- `/shop/perawatan-bibir` — Beeme Honey Lollipop Balm, keyword “lip balm bayi 6 bulan”, no blog
- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog
- `/toko-bayi-bali` — local page exists; title already commercial

## Next 2 articles to write

1. **Title:** Moell vs Gently: sunscreen bayi original untuk kulit sensitif di Bali  
   **Primary keyword:** Moell vs Gently sunscreen bayi  
   **Target:** `/shop/perawatan-kulit-bayi`  
   **Shopee CTA angle:** Bandingkan dua SKU physical SPF 50 yang ada di etalase (Moell 30gr / Gently 30gr), lalu checkout himoonbabykids supaya harga, varian, dan ongkir Badung–Denpasar live. WhatsApp hanya untuk tanya stok toko.

2. **Title:** Harga Bunda Elia BB Booster Rice original — toko MPASI Badung & Shopee  
   **Primary keyword:** harga Bunda Elia BB Booster Rice original  
   **Target:** `/shop/mpasi`  
   **Shopee CTA angle:** Satu SKU nutrisi 6 bulan, harga katalog Rp55.000 mengikuti Shopee. CTA oranye ke listing/shop himoonbabykids; jangan janji bahan curah atau official store pabrik.

## Sales friction notes

List only. Do not redesign UI in this run.

- 23 of 25 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen and Moell face cream have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart.
- Most fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is “Saya ingin memesan” + harga + “cara pembayaran” — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”.
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA.
- `/shop` intro still says “popok Makuku/MamyPoko”. Catalog has MamyPoko only. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. Do not invent IDR.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- Per-SKU `syncedAt` is mostly 2026-09-04 even though file `lastSynced` is 2026-09-13. Public brand/marketplace prices for Moell sunscreen (~Rp65.000 official) and Beeme lotion (~Rp85.000 official chatter) disagree with catalog Rp79.000 / Rp65.000. Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` in `src/lib/seo/constants.ts` is still `2026-09-05` (stale sitemap/GEO dates).
- Category `<title>` pattern is `{label} | Baby Shop Bali` — missing harga / original / brand / Badung on every P0 category.

## Last run

2026-09-13
