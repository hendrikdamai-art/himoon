# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-10-18**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-10-18, every SKU `syncedAt` still 2026-09-04), shop/category/blog slugs in code, open marketing PRs, and last Sunday backlog (PR #33).

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-10-11 (PR #33)

Nothing from the Sunday backlogs has merged to `main`. What *did* change:

- Last week’s Next 2 #1 was **drafted, not merged**: PR #34 `/blog/beeme-vs-gently-vs-moell-sabun-bayi` (exact slug may differ — cluster branch `cursor/cluster-beeme-vs-gently-sabun-bayi-a7c6`). Do not rewrite it.
- Last week’s Next 2 #2 (**harga Moell Face Cream original**) is still **unwritten**.
- PR #31 (Shop QA: popok) still drafts the `/shop/popok` title/H1/schema fix. PR #19 (Shop QA: mpasi) still drafts the Bunda Elia / Rp55.000 title. PR #25 (Shop QA: perawatan-kulit-bayi) still drafts skincare title + IDR. Ship those — do not open extra title-only branches.
- PR #10, #17, #22, #28 remain open drafts. Do not rewrite them.
- Category `<title>`s on `main` are unchanged: `Beli MPASI Bayi di Bali`, `Perawatan Kulit Bayi di Bali`, `Popok Makuku & MamyPoko`, `Peralatan Makan Bayi`, `Perawatan Bibir Bayi`. H1s are still `{label} di toko HiMoon Badung`.
- `/shop` intro + meta still say “popok Makuku/MamyPoko”. Catalog still has MamyPoko only.
- Footer on `main` still omits `/shop/perawatan-bibir` (PR #35 drafts the link).
- `SITE_CONTENT_UPDATED` is still `2026-09-30`. Catalog IDR range is unchanged (Rp22.500–Rp123.000). File `lastSynced` moved 2026-10-11 → 2026-10-18; SKU rows did not.

This week rotates P0 onto **MPASI title**, **sunscreen 6 bulan title**, **popok ship-existing**, then the remaining P0 **harga article with a working Shopee item URL** (Moell Face Cream). One P1 slot stays title-only because `/shop/perawatan-bibir` still has zero supporting article after six Sunday passes.

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
- `/blog/beeme-vs-gently-vs-moell-sabun-bayi` (PR #34; sabun non-SLS vs)

## This week — top 5 opportunities

1. **Target keyword:** harga Bunda Elia BB Booster Rice original / toko MPASI Bali 6 bulan Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** Still a one-SKU money page (katalog Rp55.000). Official/retailer pages often show a lower sticker. **Catalog/Shopee wins — do not publish a third number.** Title on `main` is still `Beli MPASI Bayi di Bali` — omits Bunda Elia / harga / original / 6 bulan. Article body is already PR #17; title/H1/schema fix is already PR #19.
   **Effort:** S
   **Expected action:** title tweak — ship PR #19 (and PR #17), do not rewrite either. On `main` until they land: name Bunda Elia + harga + 6 bulan + original + Badung/Shopee on `/shop/mpasi` title + H1. Internal-link pass from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that cites katalog Rp55.000. Saringan MPASI Rp29.500 lives on `/shop/peralatan-bayi` — link there, do not pretend it sits on `/shop/mpasi`.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical Sunscreen 30gr SPF 50+ is katalog Rp79.000 and **one of two SKUs with a real Shopee item URL** (`48013199704`). Category `<title>` is still `Perawatan Kulit Bayi di Bali` with H1 `Perawatan Kulit Bayi di toko HiMoon Badung` — no 6 bulan / SPF / original. Gently Physical SPF 50 is also in catalog (Rp75.000). Vs draft is PR #10; category QA title is PR #25.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) — ship/link PR #25 and PR #10, do not rewrite. Internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card / item URL. Follow label age; no medical claim.

3. **Target keyword:** harga MamyPoko Royal Soft original / popok bayi Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** Still the only diaper SKU (`mamypoko-royal-soft-popok-bayi-tipe-celana-perekat`, katalog Rp123.000, title says “Tipe Celana & Perekat Organic Cotton” — no size in the row). Public “harga MamyPoko Royal Soft” SERPs swing by size/isi. **Do not publish a third number or invent a size.** `/shop/popok` `<title>` on `main` is still `Popok Makuku & MamyPoko`. `/shop` meta still promises Makuku. Article body is PR #28; title/H1/schema fix is PR #31.
   **Effort:** S
   **Expected action:** title tweak — ship PR #31 (and PR #28), do not rewrite either, do not open a fourth popok-title branch. On `main` until they land: drop Makuku from `/shop/popok` title + `/shop` meta. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` that says Makuku only if a live Shopee listing appears.

4. **Target keyword:** harga Moell Face Cream original / krim wajah bayi kulit sensitif Badung
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** After sunscreen-vs (PR #10), lotion-vs (PR #22), and wash-vs (PR #34), the remaining P0 “harga” SKU on this money page with a **working orange CTA** is Moell Face Cream 40ml (katalog Rp80.000, `…-i.1869688077.52863165431`). Last Sunday queued it; it was not written. Gently Baby Face Cream 30gr Rp78.000 is the honest neighbor (shop-home URL only). Head-term `/blog/perawatan-kulit-bayi-sensitif` is a routine, not a face-cream harga page.
   **Effort:** M
   **Expected action:** new article (see Next 2 #1). Retailer harga page for the live SKU, Shopee item URL as primary CTA, no “official store”, no promised glow.

5. **Target keyword:** lip balm bayi 6 bulan original / Beeme Honey Lollipop Balm
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-bibir
   **Why it sells:** P1 page is still the only money page with **zero blog** after six Sunday passes. One SKU (Beeme Honey Lollipop Balm, katalog Rp70.000, label 6 bulan+ / aman ditelen). Beeme is a P0 brand; “6 bulan” + “original” is commercial. Title is still `Perawatan Bibir Bayi` — missing 6 bulan / original / Badung. Footer on `main` still skips this category. Skincare guides still send bibir traffic to `/shop/perawatan-kulit-bayi`.
   **Effort:** S
   **Expected action:** title tweak on `/shop/perawatan-bibir` (e.g. “Lip Balm Bayi 6 Bulan Original | Beeme Honey Lollipop Balm Badung / Shopee”) + internal links from `/blog/perawatan-kulit-bayi-sensitif` and `/blog/perlengkapan-bayi-baru-lahir` to `/shop/perawatan-bibir`. Do not write a full article this week while Next 2 P0 drafts (Moell Face Cream harga + Gently rash-cream harga) are unwritten.

## P0 rotation

Stay on P0 except #5 (lip-care money page has no cluster article after six weekly passes). Nothing else on P1 is more underserved than the Bunda Elia title that still does not name the SKU, the 6-bulan sunscreen title, the Makuku-on-a-MamyPoko-page leak, and the Face Cream harga page whose orange button actually hits a listing.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 — ship PR #19 (title/H1) + PR #17 (article); do not rewrite |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #25 + PR #10; do not rewrite |
| Popok | `/shop/popok` | #3 — ship PR #28 (article) + PR #31 (title/H1); do not invent Makuku |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | ship PR #22 lotion vs + PR #34 sabun vs; #4 new Face Cream harga; Next 2 #2 rash-cream harga |
| P1 exception: perawatan bibir Beeme | `/shop/perawatan-bibir` | #5 title + internal links only |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 sits here, not on `/shop/mpasi`. Saturday QA already drafted as PR #37 — ship it, do not write a new peralatan article.
- `/blog/asi-booster-ibu-menyusui` — no matching SKU in catalog; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; title already commercial
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia harga), PR #19 (mpasi QA title), PR #22 (lotion vs), PR #25 (skincare QA title), PR #28 (MamyPoko harga), PR #31 (popok QA title), PR #34 (sabun vs), PR #35 (shop regressions), PR #37 (peralatan QA), PR #38 (price/GEO sync)

## Next 2 articles to write

1. **Title:** Harga Moell Face Cream original — krim wajah bayi kulit sensitif Badung & Shopee
   **Primary keyword:** harga Moell Face Cream original
   **Target:** `/shop/perawatan-kulit-bayi`
   **Shopee CTA angle:** Satu dari dua SKU yang tombol oranye-nya benar-benar ke listing (`…-i.1869688077.52863165431`), katalog Rp80.000. CTA oranye ke item URL itu, bukan shop home. Bandingkan jujur dengan Gently Baby Face Cream 30gr Rp78.000 (shop-home URL only). WhatsApp hanya tanya stok toko Badung. No “official store” / no promised glow.

2. **Title:** Harga Gently Baby Rash Cream original — krim ruam popok bayi kulit sensitif Badung & Shopee
   **Primary keyword:** harga Gently Baby Rash Cream original
   **Target:** `/shop/perawatan-kulit-bayi`
   **Shopee CTA angle:** SKU live `gently-baby-rash-cream-40gr-krim-ruam-popok` katalog Rp71.000 (orange CTA currently shop home, not item URL — send buyers to himoonbabykids and name the SKU; do not invent an item ID). Ties P0 skincare to the popok cluster (`/shop/popok` + MamyPoko Rp123.000) without rewriting PR #28. WhatsApp hanya tanya stok toko. No medical winner / no guaranteed no-ruam; follow label + tenaga kesehatan.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia” (PR #17), “Beeme vs Gently lotion” (PR #22), “harga MamyPoko Royal Soft” (PR #28), or “sabun bayi non SLS vs” (PR #34). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-10-18 (PR #35 has a later shop-regression pass; PR #31 drafts popok title + Shopee-first buttons; both unmerged).

- 25 of 27 fallback SKUs set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home), not the item URL. Only Moell sunscreen (`48013199704`) and Moell face cream (`52863165431`) have `…-i.{shopId}.{itemId}` links. Orange “Beli di Shopee” therefore dumps the cart on 25 cards.
- 25 of 27 fallback `itemId` values are synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” on `main` — WhatsApp is treated as the cart.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern. Category meta: “Pesan via WhatsApp atau Shopee”. `llms.ts` WhatsApp note still says “Chat stok dan pesanan.”
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro and meta still say “popok Makuku/MamyPoko”. Catalog has MamyPoko only. Category title `Popok Makuku & MamyPoko` now encodes the same leak. `brands.json` still logos Makuku, Mom Uung, Asi Booster, Cussons, Mustela, Philips, Safe Baby, Gea Baby with no matching SKUs. `reviews.json` still attributes a review to “Popok Makuku”, plus Asi Booster / Philips Avent / Mustela rows with no catalog SKU.
- Newborn guide still tells shoppers to buy “popok (Makuku atau MamyPoko)” and skincare “Gently, Mustela, Cussons”. Mustela/Cussons have no catalog row.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- `/blog/makuku-vs-mamypoko` English inclusions still say “Catalog listing ± Rp65,000” while ID/catalog MamyPoko is Rp123.000.
- Saringan MPASI (feeding tool, Rp29.500) is categorized `peralatan-bayi` while MPASI money-page copy talks about it — shoppers on `/shop/mpasi` may not see the tool card.
- Footer shop list on `main` still skips `/shop/perawatan-bibir` (drafted in PR #35).
- File `lastSynced` is 2026-10-18 but every SKU `syncedAt` is still 2026-09-04. Catalog IDR range is still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` is `2026-09-30` (older than this catalog stamp).
- Category `<title>`s still omit harga / original / brand / 6 bulan / Shopee on every P0 category. `/shop/popok` title still names Makuku.

## Last run

2026-10-18
