# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-10-11**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-10-11, every SKU `syncedAt` still 2026-09-04), shop/category/blog slugs in code, open marketing PRs, and last Sunday backlog (PR #27).

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-10-04 (PR #27)

Nothing from the Sunday backlogs has merged to `main`. What *did* change:

- Last week’s Next 2 #1 was **drafted, not merged**: PR #28 `/blog/harga-mamypoko-royal-soft-original`. Do not rewrite it.
- Last week’s Next 2 #2 (**sabun bayi non SLS vs**) is still **unwritten**.
- PR #31 (Shop QA: popok) already drafts the `/shop/popok` title/H1/schema fix (`Popok MamyPoko Royal Soft dari Rp123.000`). Ship it — do not open a third popok-title branch.
- PR #10, #17, #22 remain open drafts. Do not rewrite them.
- Category `<title>`s on `main` are unchanged: `Beli MPASI Bayi di Bali`, `Perawatan Kulit Bayi di Bali`, `Popok Makuku & MamyPoko`, `Peralatan Makan Bayi`, `Perawatan Bibir Bayi`. H1s are still `{label} di toko HiMoon Badung`.
- `/shop` intro + meta still say “popok Makuku/MamyPoko”. Catalog still has MamyPoko only.
- `SITE_CONTENT_UPDATED` is still `2026-09-30`. Catalog IDR range is unchanged (Rp22.500–Rp123.000). File `lastSynced` moved 2026-10-04 → 2026-10-11; SKU rows did not.

This week stays on P0 and steps past the drafted MamyPoko article: **title the money pages that still omit harga / original / 6 bulan / brand**, **write the sabun non-SLS vs**, and **open a harga article on Moell Face Cream** (one of two SKUs whose orange CTA actually hits a Shopee item URL). One P1 slot stays title-only because `/shop/perawatan-bibir` still has zero supporting article after five Sunday passes.

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
- `/blog/harga-mamypoko-royal-soft-original` (PR #28)

## This week — top 5 opportunities

1. **Target keyword:** harga MamyPoko Royal Soft original / popok bayi Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** Still the only diaper SKU (`mamypoko-royal-soft-popok-bayi-tipe-celana-perekat`, katalog Rp123.000, title says “Tipe Celana & Perekat Organic Cotton” — no size in the row). Public “harga MamyPoko Royal Soft” SERPs swing by size/isi. **Do not publish a third number or invent a size.** `/shop/popok` `<title>` on `main` is still `Popok Makuku & MamyPoko`. `/shop` meta still promises Makuku. Article body is now PR #28; title/H1/schema fix is already drafted in PR #31.
   **Effort:** S
   **Expected action:** title tweak — ship PR #31 (and PR #28), do not rewrite either. On `main` until they land: drop Makuku from `/shop/popok` title + `/shop` meta. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` that says Makuku only if a live Shopee listing appears.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical Sunscreen 30gr SPF 50+ is katalog Rp79.000 and **one of two SKUs with a real Shopee item URL** (`48013199704`). Category `<title>` is still `Perawatan Kulit Bayi di Bali` with H1 `Perawatan Kulit Bayi di toko HiMoon Badung` — no 6 bulan / SPF / original. Gently Physical SPF 50 is also in catalog (Rp75.000). Vs draft is PR #10.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) and internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card. Follow label age; no medical claim. Ship/link PR #10 — do not rewrite.

3. **Target keyword:** sabun bayi non SLS original / Beeme vs Gently vs Moell
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** After lotion-vs (PR #22) and sunscreen-vs (PR #10), the remaining P0 “vs” on this money page is wash — still unwritten after last Sunday’s Next 2. Live SKUs: Beeme Honey Bee Bubble Wash 250ml Rp87.000, Beeme Natural Soap 3in1 Rp90.000, Gently Ultra Soft Body Wash 250gr Rp76.000 + refill Rp58.000, Moell Gentle Body Wash 185ml Rp72.000 + refill 500gr Rp100.000. “non SLS” + “original” + “kulit sensitif” is buying intent in Bali heat. Head-term `/blog/perawatan-kulit-bayi-sensitif` is a routine, not a wash comparison.
   **Effort:** M
   **Expected action:** new article (see Next 2 #1). Honest retailer comparison of washes that are in etalase, Shopee CTA, no eczema/dermatitis winner.

4. **Target keyword:** harga Bunda Elia BB Booster Rice original / beras MPASI 6 bulan Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** Still a one-SKU money page (katalog Rp55.000). Official/retailer pages often show a lower sticker. **Catalog/Shopee wins — do not publish a third number.** Title is still `Beli MPASI Bayi di Bali` — omits Bunda Elia / harga / original / 6 bulan. Article body is already PR #17 — do not write it again.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/mpasi` (e.g. “Harga Bunda Elia BB Booster Rice Original | Toko MPASI 6 Bulan Badung / Shopee”) + internal links from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that name the SKU, 6 bulan, and katalog Rp55.000. Merge/link PR #17 when it lands.

5. **Target keyword:** lip balm bayi 6 bulan original / Beeme Honey Lollipop Balm
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-bibir
   **Why it sells:** P1 page is still the only money page with **zero blog** after five Sunday passes. One SKU (Beeme Honey Lollipop Balm, katalog Rp70.000, label 6 bulan+ / aman ditelan). Beeme is a P0 brand; “6 bulan” + “original” is commercial. Title is still `Perawatan Bibir Bayi` — missing 6 bulan / original / Badung. Skincare guides still send bibir traffic to `/shop/perawatan-kulit-bayi`.
   **Effort:** S
   **Expected action:** title tweak on `/shop/perawatan-bibir` (e.g. “Lip Balm Bayi 6 Bulan Original | Beeme Honey Lollipop Balm Badung / Shopee”) + internal links from `/blog/perawatan-kulit-bayi-sensitif` and `/blog/perlengkapan-bayi-baru-lahir` to `/shop/perawatan-bibir`. Do not write a full article this week while Next 2 P0 drafts (sabun vs + Moell Face Cream harga) are unwritten.

## P0 rotation

Stay on P0 except #5 (lip-care money page has no cluster article after five weekly passes). Nothing else on P1 is more underserved than the Makuku-on-a-MamyPoko-page leak, the 6-bulan sunscreen title, the missing wash vs, and the Bunda Elia title that still does not name the SKU.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #4 title + links; ship PR #17 (do not rewrite) |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #10 (do not rewrite) |
| Popok | `/shop/popok` | #1 — ship PR #28 (article) + PR #31 (title/H1); do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | ship PR #22 lotion vs; #3 new sabun non-SLS vs; Next 2 #2 Face Cream harga |
| P1 exception: perawatan bibir Beeme | `/shop/perawatan-bibir` | #5 title + internal links only |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; title already commercial
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia harga), PR #22 (lotion vs), PR #28 (MamyPoko harga), PR #29 (shop regressions), PR #31 (popok QA title), PR #32 (price/GEO sync)

## Next 2 articles to write

1. **Title:** Beeme vs Gently vs Moell: sabun bayi non SLS original untuk kulit sensitif di Bali
   **Primary keyword:** sabun bayi non SLS original
   **Target:** `/shop/perawatan-kulit-bayi`
   **Shopee CTA angle:** Bandingkan wash yang ada di etalase (Beeme Honey Bee 250ml Rp87.000 / Gently Ultra Soft 250gr Rp76.000 + refill Rp58.000 / Moell Gentle 185ml Rp72.000 + refill Rp100.000), lalu checkout himoonbabykids supaya harga, isi pack, dan ongkir Badung–Denpasar live. WhatsApp hanya untuk tanya stok toko. No medical winner.

2. **Title:** Harga Moell Face Cream original — krim wajah bayi kulit sensitif Badung & Shopee
   **Primary keyword:** harga Moell Face Cream original
   **Target:** `/shop/perawatan-kulit-bayi`
   **Shopee CTA angle:** Satu dari dua SKU yang tombol oranye-nya benar-benar ke listing (`…-i.1869688077.52863165431`), katalog Rp80.000. CTA oranye ke item URL itu, bukan shop home. Bandingkan jujur dengan Gently Baby Face Cream 30gr Rp78.000 (shop-home URL only). WhatsApp hanya tanya stok toko Badung. No “official store” / no promised glow.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia” (PR #17), “Beeme vs Gently lotion” (PR #22), or “harga MamyPoko Royal Soft” (PR #28). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-10-11 (PR #29 has a later shop-regression pass; PR #31 drafts popok title + Shopee-first buttons; both unmerged).

- 25 of 27 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen (`48013199704`) and Moell face cream (`52863165431`) have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart on 25 cards.
- 25 of 27 fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” on `main` — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern. Category meta: “Pesan via WhatsApp atau Shopee”.
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro and meta still say “popok Makuku/MamyPoko”. Catalog has MamyPoko only. Category title `Popok Makuku & MamyPoko` now encodes the same leak. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs. `reviews.json` still attributes a review to “Popok Makuku”.
- Newborn guide still tells shoppers to buy “popok (Makuku atau MamyPoko)” and skincare “Gently, Mustela, Cussons”. Mustela/Cussons have no catalog row.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- `/blog/makuku-vs-mamypoko` English inclusions still say “Catalog listing ± Rp65,000” while ID/catalog MamyPoko is Rp123.000.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- File `lastSynced` is 2026-10-11 but every SKU `syncedAt` is still 2026-09-04. Catalog IDR range is still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` is `2026-09-30` (older than this catalog stamp).
- Category `<title>`s still omit harga / original / brand / 6 bulan / Shopee on every P0 category. `/shop/popok` title still names Makuku.

## Last run

2026-10-11
