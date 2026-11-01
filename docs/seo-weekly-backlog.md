# HiMoon SEO weekly backlog

Weekly commercial-intent pass for **2026-11-01**. Source: `docs/SEO-GEO-MARKETING-PLAN.md` (still draft on `cursor/add-seo-geo-docs-17ac` / PR #7; not on `main`), live catalog `src/data/products.json` (`lastSynced` 2026-11-01, 27 curated SKUs still `syncedAt` 2026-09-04, 28 new Shopee rows `syncedAt` 2026-10-29), shop/category/blog slugs in code, open marketing PRs, and last Sunday backlog (PR #39, 2026-10-18). No 2026-10-25 backlog PR was opened.

Do not write full articles in this file. Next writer picks from **Next 2 articles**.

## Carry-forward from 2026-10-18 (PR #39)

Nothing from the Sunday backlogs or cluster drafts has merged to `main`. What *did* change on `main`:

- Catalog grew **27 → 55 SKUs**. Commit `7e430ba` / `c316ca9` added 28 live Shopee items (real `itemId` + item URL, **price 0**, “Cek harga di Shopee” copy). `SITE_CONTENT_UPDATED` moved 2026-09-30 → **2026-10-29**.
- `/shop/mpasi` is no longer one-SKU: **22 items**. Bunda Elia is now 5 SKUs (priced BB Booster Rice Rp55.000 shop-home + kaldu / fat oil / santan / kecap with item URLs and Rp0). Also live: Alamii, Belcube, Bumboo, Crystal of the Sea, Gogofield, Milna, Promina, Pura, Yummy Bites.
- `/shop/popok` now has **Makuku SAP Comfort Fit** (`49969731055`, item URL, Rp0) beside MamyPoko Royal Soft (Rp123.000, shop-home). Last week’s “drop Makuku” advice is stale. **PR #31 still rewrites the title to drop Makuku — do not ship it as-is.**
- `/shop/perawatan-kulit-bayi` is 26 SKUs (added Bambi rash cream + cologne, Cussons hair lotion, Doodle telon). Beeme / Gently / Moell curated rows unchanged.
- `/shop/peralatan-bayi` added Coconi silicone bib + Cussons wipes (both item URL, Rp0) beside Paseo Rp22.500 and saringan MPASI Rp29.500.
- Last week’s Next 2 were **both drafted, not merged**: PR #40 `/blog/harga-moell-face-cream-original` and PR #44 `/blog/harga-gently-baby-rash-cream-original`. Do not rewrite them.
- PR #10, #17, #22, #28, #34 remain open drafts. Do not rewrite them.
- Category `<title>`s on `main` are still the short Bali strings. H1s are still `{label} di toko HiMoon Badung`.
- Footer on `main` still omits `/shop/perawatan-bibir` (PR #35 / #41 / #45 draft the link).
- Catalog IDR range for **priced** SKUs is unchanged (Rp22.500–Rp123.000). 28 new rows are Rp0 — do not invent IDR; say cek Shopee.

This week stays on P0. The money-page story changed: MPASI is a 22-SKU aisle, and Makuku is finally a working Shopee item URL. Use title tweaks + one new harga article each for those two facts. No P1 lip-care exception — PR #43 already drafted that title, and P0 inventory just doubled.

## Slug inventory (this run)

Money pages:

- `/shop` — Baby Shop Bali (55 SKUs; priced range Rp22.500–Rp123.000; 28 cards show “Cek harga di Shopee”)
- `/shop/mpasi` — 22 SKUs (Bunda Elia 5 + 17 other MPASI/snack brands)
- `/shop/perawatan-kulit-bayi` — Beeme 5 + Gently 9 + Moell 8 + Bambi 2 + Cussons 1 + Doodle 1 (26)
- `/shop/popok` — MamyPoko Royal Soft Rp123.000 + Makuku SAP Comfort Fit (item URL, Rp0)
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

## This week — top 5 opportunities

1. **Target keyword:** toko MPASI Bali 6 bulan / harga Bunda Elia original Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** The page jumped from 1 SKU to **22**. Bunda Elia is now a line (BB Booster Rice Rp55.000 shop-home + kaldu `53019019042`, fat oil `49569047166`, santan `46319042106`, kecap `49269042218` — all item URLs, all Rp0). Title on `main` is still `Beli MPASI Bayi di Bali`; H1 is still `MPASI di toko HiMoon Badung`. Cluster blogs still describe a one-SKU aisle. PR #19’s title (`MPASI Bayi 6 Bulan dari Rp55.000`) is the right direction but was written for the one-SKU era — ship it for the title/H1, do not rewrite the article body in #17.
   **Effort:** S
   **Expected action:** title tweak — ship PR #19 (and PR #17), do not rewrite either. On `main` until they land: name Bunda Elia + 6 bulan + original + Badung/Shopee on `/shop/mpasi` title + H1. Internal-link pass from `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan`: keep katalog Rp55.000 for BB Booster Rice, and add “cek Shopee” links to the four new Bunda Elia item URLs. Saringan MPASI Rp29.500 still lives on `/shop/peralatan-bayi`. Do not invent IDR for the Rp0 rows.

2. **Target keyword:** sunscreen bayi 6 bulan Bali / Moell SPF 50 original
   **Money-page URL:** https://himoonbaby.com/shop/perawatan-kulit-bayi
   **Why it sells:** Year-round UV in Badung/Canggu. Moell Physical Sunscreen 30gr SPF 50+ is still katalog Rp79.000 with a working item URL (`48013199704`). Category `<title>` is still `Perawatan Kulit Bayi di Bali` with H1 `Perawatan Kulit Bayi di toko HiMoon Badung` — no 6 bulan / SPF / original. Gently Physical SPF 50 remains Rp75.000 (shop-home). Vs draft is PR #10; category QA title is PR #25.
   **Effort:** S
   **Expected action:** title + H1 tweak on `/shop/perawatan-kulit-bayi` (name Moell SPF 50 + 6 bulan + original + Bali) — ship/link PR #25 and PR #10, do not rewrite. Internal links from `/blog/beli-sunscreen-bayi` that point at the Moell card / item URL. Follow label age; no medical claim.

3. **Target keyword:** harga Makuku SAP original / popok bayi tipis Badung Shopee
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** Makuku is **in the catalog for the first time** (`makuku-sap-diapers-comfort-fit-tape-nbsmlxlxxl-popok-bayi-tipis-extra-dry-anti-gumpal`, item `https://shopee.co.id/MAKUKU-SAP-Diapers-Comfort-Fit-Tape-NB-S-M-L-Xl-XXL-Popok-Bayi-Tipis-Extra-Dry-Anti-Gumpal-i.1869688077.49969731055`). Price is 0 — **do not publish a third number or invent a size**. `/shop/popok` `<title>` `Popok Makuku & MamyPoko` is now factually true but still omits harga / original / Badung / Shopee. `/blog/makuku-vs-mamypoko` and shop inclusions still hedge “Makuku sesuai stok Shopee”. PR #31 drops Makuku from the title — that patch is now wrong.
   **Effort:** S
   **Expected action:** title tweak on `/shop/popok` that **keeps Makuku**, adds original + Badung + Shopee (e.g. “Popok Makuku & MamyPoko Original | Toko Bayi Badung / Shopee”). Do **not** ship PR #31 as-is. Internal-link pass from `/blog/tips-memilih-popok-bayi` and `/blog/makuku-vs-mamypoko` that can now point at the live Makuku item URL. MamyPoko stays katalog Rp123.000 (PR #28 already drafted). WhatsApp only for size/stok toko.

4. **Target keyword:** harga Makuku SAP Comfort Fit original / popok tipis iklim panas Bali
   **Money-page URL:** https://himoonbaby.com/shop/popok
   **Why it sells:** First P0 popok SKU whose orange button hits a real listing (MamyPoko’s CTA is still shop home). Public “harga Makuku SAP” SERPs vary by size/isi — **cek Shopee, no invented IDR**. Existing vs page is a method essay, not a harga page. Honest neighbor: MamyPoko Royal Soft Rp123.000 (shop-home URL). Ties the live item URL to the climate-thin-diaper query parents already use on `/blog/makuku-vs-mamypoko`.
   **Effort:** M
   **Expected action:** new article (see Next 2 #1). Retailer harga page for the live SKU, Shopee item URL as primary CTA, no size table we do not have, no “official store”.

5. **Target keyword:** harga Bunda Elia kaldu MPASI original / kaldu bayi 6 bulan Badung
   **Money-page URL:** https://himoonbaby.com/shop/mpasi
   **Why it sells:** After BB Booster Rice (PR #17), the next Bunda Elia SKU with a **working orange CTA** is kaldu (`…-i.1869688077.53019019042`). Cluster blogs and speakable still sell only rice Rp55.000. Fat oil / santan / kecap are the same pattern (item URL, Rp0). Head-term `/blog/toko-mpasi-bali` is a store-locator, not a kaldu harga page. Commercial “kaldu MPASI” / “6 bulan” / “original” maps to a card that already deep-links to Shopee.
   **Effort:** M
   **Expected action:** new article (see Next 2 #2) plus an internal-link pass on `/blog/toko-mpasi-bali` and `/blog/panduan-mpasi-6-bulan` that names the four new Bunda Elia listings and says cek Shopee. Do not invent IDR. Do not rewrite PR #17.

## P0 rotation

Stay on P0. Lip-care is still the only money page with zero blog, but PR #43 already drafted its title and the MPASI/popok catalog change is the underserved commercial gap this week.

| Cluster | Money page | Status this week |
| --- | --- | --- |
| MPASI Bunda Elia | `/shop/mpasi` | #1 title (22-SKU aisle) — ship PR #19 + #17, do not rewrite; #5 / Next 2 #2 kaldu harga |
| Sunscreen Moell (+ Gently physical) | `/shop/perawatan-kulit-bayi` | #2 title (6 bulan / SPF 50); ship/link PR #25 + PR #10; do not rewrite |
| Popok | `/shop/popok` | #3 title **keep Makuku**; do not ship PR #31 as-is; #4 / Next 2 #1 Makuku harga; ship PR #28 for MamyPoko |
| Skincare Beeme / Gently / Moell | `/shop/perawatan-kulit-bayi` | ship PR #22 lotion vs + PR #34 sabun vs + PR #40 Face Cream + PR #44 rash cream; no new skincare draft this week |

P1 still parked (do not write unless a P0 slot finishes early):

- `/shop/perawatan-bibir` — still zero blog; title QA already drafted as PR #43. Do not start a lip-balm article until Next 2 P0 drafts exist.
- `/shop/peralatan-bayi` — saringan MPASI Rp29.500 + new Coconi / Cussons wipes. Saturday QA drafted as PR #37.
- `/blog/asi-booster-ibu-menyusui` — still no matching SKU; English inclusions still leak “± Rp89,000”
- `/toko-bayi-bali` — local page exists; QA drafted as PR #46
- Merge-first ops (not content): PR #7 (plan docs), PR #10 (sunscreen vs), PR #17 (Bunda Elia rice harga), PR #19 (mpasi QA title), PR #22 (lotion vs), PR #25 (skincare QA title), PR #28 (MamyPoko harga), PR #31 (popok QA — **stale vs live Makuku**), PR #34 (sabun vs), PR #35/#41/#45 (shop regressions), PR #37 (peralatan QA), PR #38/#47 (price/GEO sync), PR #40 (Face Cream), PR #43 (bibir QA), PR #44 (rash cream), PR #46 (toko-bayi-bali QA)

## Next 2 articles to write

1. **Title:** Harga Makuku SAP Comfort Fit original — popok tipis bayi Badung & Shopee
   **Primary keyword:** harga Makuku SAP original
   **Target:** `/shop/popok`
   **Shopee CTA angle:** Satu-satunya SKU popok yang tombol oranye-nya benar-benar ke listing (`…-i.1869688077.49969731055`). Harga katalog **Rp0 / cek Shopee** — do not invent IDR or a size. CTA oranye ke item URL itu, bukan shop home. Bandingkan jujur dengan MamyPoko Royal Soft Rp123.000 (shop-home URL only; body already PR #28). WhatsApp hanya tanya ukuran / stok toko Badung. No “official store” / no guaranteed no-bocor.

2. **Title:** Harga Bunda Elia kaldu MPASI original — kaldu bayi 6 bulan Badung & Shopee
   **Primary keyword:** harga Bunda Elia kaldu MPASI original
   **Target:** `/shop/mpasi`
   **Shopee CTA angle:** SKU live `bumbu-bunda-elia-bpom-kaldu-mpasi-kaldu-anak-kaldu-bayi-non-gula-garam-kaldu-non` → `https://shopee.co.id/Bumbu-Bunda-Elia-BPOM-Kaldu-MPASI-Kaldu-Anak-Kaldu-Bayi-Non-Gula-Garam-Kaldu-Non-MSG-Kaldu-Organik-i.1869688077.53019019042`. Harga **cek Shopee** (row is Rp0). Neighbors on the same brand line: BB Booster Rice Rp55.000 (shop-home; already PR #17), fat oil `49569047166`, santan `46319042106`, kecap `49269042218` — name them, do not invent IDR. WhatsApp hanya tanya stok toko. No medical / no promised naik berat badan.

Do not re-queue “Moell vs Gently sunscreen” (PR #10), “harga Bunda Elia BB Booster Rice” (PR #17), “Beeme vs Gently lotion” (PR #22), “harga MamyPoko Royal Soft” (PR #28), “sabun bayi non SLS vs” (PR #34), “harga Moell Face Cream” (PR #40), or “harga Gently Baby Rash Cream” (PR #44). Do not start a lip-balm article until these two P0 drafts exist.

## Sales friction notes

List only. Do not redesign UI in this run. Verified against `main` 2026-11-01 (catalog 55 SKUs; shop-regression PRs #35/#41/#45 and popok QA #31 remain unmerged).

- 28 of 55 SKUs have `price: 0`. Cards correctly show “Cek harga di Shopee”, but there is no on-site IDR for the new MPASI line, Makuku, Bambi, Cussons, Coconi, or Milna/Promina. Do not invent a number in copy.
- 25 of 55 fallback/curated SKUs still set `shopeeUrl` to `https://shopee.co.id/himoonbabykids` (shop home). That includes the priced heroes: Bunda Elia BB Booster Rice, MamyPoko Royal Soft, Gently rash cream, Beeme lip balm, Paseo, saringan MPASI. Only 2 curated SKUs have item URLs (Moell sunscreen `48013199704`, Moell Face Cream `52863165431`). The 28 new rows *do* have `…-i.{shopId}.{itemId}` links.
- 25 curated `itemId` values are still synthetic `100001`–`100025`. `getProductBySlug` exists but there is no product route, so there is no on-site PDP to recover a deep link.
- `OrderButtons` still leads with green **Pesan via WhatsApp**. `whatsappOrderUrl` copy is still “Saya ingin memesan” + harga + “cara pembayaran” — WhatsApp is treated as the cart. Rp0 SKUs omit the price line but still say “memesan / cara pembayaran”.
- Homepage/how-to-buy copy equals the two channels: “Checkout via WhatsApp atau Shopee” / “Pesan via WhatsApp atau Shopee”. `indonesiaFaqs` same pattern (“pesan via WhatsApp, atau checkout di Shopee”). Category meta: “Pesan via WhatsApp atau Shopee”. `llms.ts` WhatsApp note still says “Chat stok dan pesanan.”
- `BlogProductCta` has shop-catalog + WhatsApp only. No orange Shopee checkout on the article CTA. Related-products subtitle also says “pesan via WhatsApp atau Shopee”.
- `/shop` intro still says “popok Makuku/MamyPoko” (now true) and priced range Rp22.500–Rp123.000 (true for priced rows only). Shop inclusions still hedge “Makuku sesuai stok Shopee” even though Makuku has a live item URL.
- `brands.json` still logos Mom Uung, Asi Booster, Philips Avent, Safe Baby, Gea Baby, Mustela with no matching SKU. Cussons now has 2 catalog rows (wipes + hair lotion) — the old “do not claim Cussons” note is stale. `reviews.json` still attributes rows to Asi Booster / Philips Avent / Mustela with no catalog SKU.
- Newborn guide still tells shoppers to buy skincare “Gently, Mustela, Cussons”. Mustela still has no catalog row.
- ASI booster / Mom Uung is a live blog + `/shop/mpasi` mention with zero catalog row. English `inclusions` on that guide still say “± Rp89,000”. Do not invent IDR.
- `/blog/makuku-vs-mamypoko` English inclusions still say “Catalog listing ± Rp65,000” while ID/catalog MamyPoko is Rp123.000. The ID hedge “Makuku hanya jika listing Shopee ada” is now stale.
- MPASI cluster speakable/price notes still describe a one-SKU Bunda Elia rice + saringan aisle. 21 other `/shop/mpasi` cards (including 4 Bunda Elia item URLs) are invisible to those articles.
- Saringan MPASI (feeding tool, Rp29.500) is still categorized `peralatan-bayi` while MPASI money-page copy talks about it.
- Footer shop list on `main` still skips `/shop/perawatan-bibir` (drafted in PR #35/#41/#45).
- File `lastSynced` is 2026-11-01. Curated SKU `syncedAt` is still 2026-09-04; new Shopee rows `syncedAt` 2026-10-29. Priced IDR range still Rp22.500–Rp123.000 and matches `PRICE_RANGE_IDR`. Catalog/Shopee wins; do not publish a third number.
- `SITE_CONTENT_UPDATED` is `2026-10-29` (older than this catalog stamp).
- Category `<title>`s still omit harga / original / 6 bulan / Shopee on every P0 category. `/shop/popok` title names both brands (now correct) but not original/Badung.

## Last run

2026-11-01
