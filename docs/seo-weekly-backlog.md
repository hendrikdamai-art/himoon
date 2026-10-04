# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-10-04**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-10-04, every SKU `syncedAt` still 2026-09-04), shop/category/blog slugs in code, open marketing PRs, and public brand/marketplace SERPs.

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-09-27 (PR #21)

Nothing from the last three Sunday backlogs has merged to `main`. What *did* change:

- Category `<title>`s on `main` are no longer `{label} | Baby Shop Bali`. They are now short Bali titles (`Beli MPASI Bayi di Bali`, `Perawatan Kulit Bayi di Bali`, `Popok Makuku & MamyPoko`, `Peralatan Makan Bayi`, `Perawatan Bibir Bayi`). Still missing harga / original / 6 bulan / Badung / Shopee. H1s are still `{label} di toko HiMoon Badung`.
- Last week’s Next 2 were **drafted, not merged**: PR #17 `/blog/harga-bunda-elia-bb-booster-rice-original` and PR #22 `/blog/beeme-vs-gently-lotion-bayi`. Do not rewrite either.
- PR #10 `/blog/moell-vs-gently-sunscreen-bayi` is still open — do not rewrite it.
- `/shop` intro + meta still say “popok Makuku/MamyPoko”. Catalog still has MamyPoko only.
- `SITE_CONTENT_UPDATED` moved from 2026-09-05 → 2026-09-30. Catalog IDR range is unchanged (Rp22.500–Rp123.000).

This week stays on P0 and steps past the drafted “harga Bunda Elia” / “Beeme vs Gently lotion” slots: **sell the live MamyPoko SKU**, **title the Moell 6-bulan sunscreen money page**, and **open a sabun non-SLS vs** on the widest skincare etalase. One P1 slot stays title-only because `/shop/perawatan-bibir` still has zero supporting article.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali (27 SKUs, Rp22.500–Rp123.000)
- `/shop/mpasi` — Bunda Elia BB Booster Rice only (1 SKU, Rp55.000)
- `/shop/perawatan-kulit-bayi` — Beeme 5 + Gently 9 + Moell 8 (22 SKUs; widest etalase)
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

Draft only (not on `main`):

- `/blog/moell-vs-gently-sunscreen-bayi` (PR #10)
- `/blog/harga-bunda-elia-bb-booster-rice-original` (PR #17)
- `/blog/beeme-vs-gently-lotion-bayi` (PR #22)

## This week — top 5 opportunities

1. **Target keyword:** harga MamyPoko Royal Soft original / popok bayi Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** The only diaper SKU in `products.json` is MamyPoko Royal Soft (katalog Rp123.000, title says “Tipe Celana & Perekat Organic Cotton” — no size in the row). Public “harga MamyPoko Royal Soft” SERPs swing wildly by size/isi (NB ~Rp75–82rb, S50 ~Rp100–155rb). **Do not publish a third number or invent a size.** `/blog/makuku-vs-mamypoko` still ranks a missing brand. Category `<title>` is now `Popok Makuku & MamyPoko` — a checkout leak. `/shop` meta still promises Makuku.
   **Effort:** M
   **Expected action:** title tweak on `/shop/popok` (and `/shop` meta) to MamyPoko + harga + Badung/Shopee, no Makuku. New article is Next 2 #1. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` that says Makuku only if a live Shopee listing appears.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** Year-round UV in Badung/Canggu. Moell FAQ (moell.co.id) positions Physical sunscreen for bayi **6 bulan+** (SPF 50+ PA++++). HiMoon catalog is Rp79.000; official/retailer pages still show ~Rp65.000. **Catalog/Shopee wins.** `/blog/beli-sunscreen-bayi` covers the head term; category `<title>` is still `Perawatan Kulit Bayi di Bali` with H1 `Perawatan Kulit Bayi di toko HiMoon Badung`. Gently Physical SPF 50 is also in catalog (Rp75.000) — vs draft is PR #10.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) and internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card (one of two SKUs with a real Shopee item URL). Follow label age; no medical claim. Ship/link PR #10 — do not rewrite.

3. **Target keyword:** sabun bayi non SLS original / Beeme vs Gently vs Moell
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** After lotion-vs (PR #22) and sunscreen-vs (PR #10), the remaining P0 “vs” on this money page is wash. Live SKUs: Beeme Honey Bee Bubble Wash 250ml Rp87.000, Beeme Natural Soap 3in1 Rp90.000, Gently Ultra Soft Body Wash 250gr Rp76.000 + refill Rp58.000, Moell Gentle Body Wash 185ml Rp72.000 + refill 500gr Rp100.000. “non SLS” + “original” + “kulit sensitif” is buying intent in Bali heat. Head-term `/blog/perawatan-kulit-bayi-sensitif` is a routine, not a wash comparison.
   **Effort:** M
   **Expected action:** new article (see Next 2). Honest retailer comparison of washes that are in etalase, Shopee CTA, no eczema/dermatitis winner.

4. **Target keyword:** harga Bunda Elia BB Booster Rice original / beras MPASI 6 bulan Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** Still a one-SKU money page (katalog Rp55.000). Official bundaelia.co.id and several retailers still show ~Rp49.900; MPASI Store Bali ~Rp50.000; some Tokopedia rows ~Rp48.700. **Catalog/Shopee wins — do not publish a third number.** Title improved to `Beli MPASI Bayi di Bali` but still omits Bunda Elia / harga / original / 6 bulan. Article body is already PR #17 — do not write it again.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/mpasi` (e.g. “Harga Bunda Elia BB Booster Rice Original | Toko MPASI 6 Bulan Badung / Shopee”) + internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that name the SKU, 6 bulan, and katalog Rp55.000. Merge/link PR #17 when it lands.

5. **Target keyword:** lip balm bayi 6 bulan original / Beeme Honey Lollipop Balm
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-bibir
   **Why it sells:** P1 page is still the only money page with **zero blog** after four Sunday passes. One SKU (Beeme Honey Lollipop Balm, katalog Rp70.000, label 6 bulan+ / aman ditelan). Beeme is a P0 brand; “6 bulan” + “original” is commercial. Title is now `Perawatan Bibir Bayi` — better than the old generic pattern, still missing 6 bulan / original / Badung. Skincare guides still send bibir traffic to `/shop/perawatan-kulit-bayi`.
   **Effort:** S
   **Expected action:** title tweak on `/shop/perawatan-bibir` (e.g. “Lip Balm Bayi 6 Bulan Original | Beeme Honey Lollipop Balm Badung / Shopee”) + internal links from `/blog/perawatan-kulit-bayi-sensitif` and `/blog/perlengkapan-bayi-baru-lahir` to `/shop/perawatan-bibir`. Do not write a full article this week while Next 2 P0 drafts (MamyPoko harga + sabun vs) are unwritten.

## P0 rotation

Stay on P0 except #5 (lip-care money page has no cluster article after four weekly passes). Nothing else on P1 is more underserved than the Makuku-on-a-MamyPoko-page leak, the 6-bulan sunscreen title, the missing wash vs, and the Bunda Elia title that still does not name the SKU.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #4 title + links; ship PR #17 (do not rewrite) |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #10 (do not rewrite) |
| Popok | `/shop/popok` | #1 — sell MamyPoko; Next 2 #1 article; do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | ship PR #22 lotion vs; #3 new sabun non-SLS vs |
| P1 exception: perawatan bibir Beeme | `/shop/perawatan-bibir` | #5 title + internal links only |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; title already commercial
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia harga), PR #22 (lotion vs), PR #23 (shop regressions), PR #26 (price/GEO sync)

## Next 2 articles to write

1. **Title:** Harga MamyPoko Royal Soft original — toko popok Badung & Shopee
   **Primary keyword:** harga MamyPoko Royal Soft original
   **Target:** `/shop/popok`
   **Shopee CTA angle:** Satu SKU popok di etalase, harga katalog Rp123.000 mengikuti Shopee (marketplace “harga” by size/isi is not our number — listing does not name a size). CTA oranye ke listing/shop himoonbabykids; jangan janji Makuku, official store pabrik, atau “anti ruam”. WhatsApp hanya tanya stok ukuran di toko Badung.

2. **Title:** Beeme vs Gently vs Moell: sabun bayi non SLS original untuk kulit sensitif di Bali
   **Primary keyword:** sabun bayi non SLS original
   **Target:** `/shop/perawatan-kulit-bayi`
   **Shopee CTA angle:** Bandingkan wash yang ada di etalase (Beeme Honey Bee 250ml Rp87.000 / Gently Ultra Soft 250gr Rp76.000 + refill Rp58.000 / Moell Gentle 185ml Rp72.000 + refill Rp100.000), lalu checkout himoonbabykids supaya harga, isi pack, dan ongkir Badung–Denpasar live. WhatsApp hanya untuk tanya stok toko. No medical winner.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia” (PR #17), or “Beeme vs Gently lotion” (PR #22). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-10-04 (PR #23 has a later shop-regression pass; unmerged).

- 25 of 27 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen (`48013199704`) and Moell face cream (`52863165431`) have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart.
- 25 of 27 fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” on `main` — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern.
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro and meta still say “popok Makuku/MamyPoko”. Catalog has MamyPoko only. Category title `Popok Makuku & MamyPoko` now encodes the same leak. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs. `reviews.json` still attributes a review to “Popok Makuku”.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- File `lastSynced` is 2026-10-04 but every SKU `syncedAt` is still 2026-09-04. Catalog IDR range is still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Public brand prices disagree (Bunda Elia official ~Rp49.900 vs katalog Rp55.000; Moell sunscreen official ~Rp65.000 vs katalog Rp79.000; marketplace MamyPoko “harga” varies by size vs katalog Rp123.000 with no size). Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` is `2026-09-30` (improved vs 2026-09-05; still older than this catalog stamp).
- Category `<title>`s improved to short Bali strings but still omit harga / original / brand / 6 bulan / Shopee on every P0 category. `/shop/popok` title still names Makuku.

## Last run

2026-10-04
