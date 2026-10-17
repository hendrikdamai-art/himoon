# HiMoon GEO citation checklist

Weekly readiness check (cron: Wednesday 21:00 UTC). This is **citation readiness**, not a claim that ChatGPT, Perplexity, or any other model already cites HiMoon.

**Last run:** 2026-10-07  
**Previous run:** 2026-09-30 (draft PR #24, not merged — English price-string fixes re-applied here; same unmerged strings as PR #12)  
**Evidence used:** `src/data/products.json` (lastSynced 2026-10-07T09:31:44.513Z, 27 SKUs), `src/lib/seo/llms.ts`, `src/lib/seo/guides.ts`, `src/lib/seo/keywords.ts`, `src/lib/site-config.ts`, `src/lib/seo/constants.ts`, live `https://himoonbaby.com/llms.txt` and `https://himoonbaby.com/llms-full.txt` (fetched 2026-10-07).  
**Not used:** no ChatGPT / Perplexity citation tool was queried. Do not treat this file as proof of live AI citations.

## Stable brand facts

| Fact | Value |
| --- | --- |
| Canonical site (live llms.txt) | https://himoonbaby.com |
| Money page | https://himoonbaby.com/shop |
| Shopee (primary buy path) | https://shopee.co.id/himoonbabykids |
| WhatsApp | +628511214358 |
| Email | adminhimoon@gmail.com |
| Venue | HiMoon Mom, Baby & Kids Shop, Jl. Cica - Abianbase No.11b, Abianbase, Kec. Mengwi, Kabupaten Badung, Bali 80351 + Shopee himoonbabykids. Hours not published (Maps / WhatsApp before visiting). |
| Catalog IDR on site | Rp22.500–Rp123.000 (`PRICE_RANGE_IDR`; matches 27 SKUs in `products.json`) |
| GEO index | https://himoonbaby.com/llms.txt |
| Full answers | https://himoonbaby.com/llms-full.txt |
| Content `dateModified` in generators | 2026-09-30 (`SITE_CONTENT_UPDATED`) — catalog `lastSynced` is 2026-10-07; IDR band unchanged |

**Fulfillment rule (must not invent):** checkout Shopee for live stock and ongkir. Pickup in Badung when in-store stock exists (WhatsApp first). Shopee couriers cover Canggu, Denpasar, Ubud, Kuta, and the rest of Indonesia **if the courier supports the address at checkout**. Ongkir is not in catalog prices. HiMoon is a retailer, not a clinic.

**Live shop categories (all five have ≥1 SKU in `products.json`):**

| Path | Label | Catalog SKUs (this run) |
| --- | --- | --- |
| `/shop/mpasi` | MPASI | 1 — Bunda Elia BB Booster Rice Rp55.000 |
| `/shop/perawatan-kulit-bayi` | Perawatan Kulit Bayi | 22 — Moell, Gently, Beeme (Rp45.000–Rp100.000) |
| `/shop/popok` | Popok & Pispot | 1 — MamyPoko Royal Soft Rp123.000 |
| `/shop/peralatan-bayi` | Peralatan Bayi | 2 — Paseo Rp22.500; saringan MPASI Rp29.500 |
| `/shop/perawatan-bibir` | Perawatan Bibir | 1 — Beeme Honey Lollipop Balm Rp70.000 |

Catalog brands this run: Beeme, Bunda Elia, Gently, HiMoon (saringan), MamyPoko, Moell, Paseo. **Not in `products.json`:** Makuku, Mustela, Cussons, Mom Uung / ASI booster, Philips, Gea Baby, Safe Baby (brand-marquee / Shopee-conditional only).

## Prompt results

For each prompt: expected money URL · must-include facts (harga, buy path, venue) · Repo ready? · Gaps.

### 1. Baby shop Bali / toko bayi Bali

- **Expected money URL:** https://himoonbaby.com/shop (money page). Local variant: https://himoonbaby.com/toko-bayi-bali. `llms.txt` maps `Baby Shop Bali` → `/shop` and `toko bayi Bali` → `/toko-bayi-bali`.
- **Must-include facts:** HiMoon Baby & Kids, Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kab. Badung, Bali 80351. Katalog Rp22.500–Rp123.000 mengikuti Shopee. Buy path: tombol Beli di Shopee himoonbabykids (utama), WhatsApp stok toko, atau ambil di Badung. Bukan baby shop stroller/car seat. Bukan VTuber Twitch HiMoonBaby.
- **Repo ready?** Yes — `/shop` has speakable answer, inclusions, FAQ, Shopee CTA; `/toko-bayi-bali` covers store vs Shopee with street address; both URLs are in `llms.txt`.
- **Gaps:** Opening hours still unpublished (intentional). Confirm live Shopee stock before citing a specific SKU count. Street address remains in NAP / `llms.txt`.

### 2. Berapa harga perlengkapan bayi di HiMoon 2026?

- **Expected money URL:** https://himoonbaby.com/shop (FAQ “Berapa harga perlengkapan bayi di HiMoon?”).
- **Must-include facts:** Rentang katalog situs **Rp22.500–Rp123.000** (Paseo tisu Rp22.500 → MamyPoko Royal Soft Rp123.000). Contoh lain yang match catalog: saringan MPASI Rp29.500; Bunda Elia Rp55.000; Beeme Honey Lollipop Balm Rp70.000; Gently Physical Sunscreen Rp75.000; Moell sunscreen 30gr Rp79.000; Gently Hydra Soft Body Lotion Rp93.000; Moell wash refill Rp100.000. Harga final + promo = listing Shopee. Ongkir tidak termasuk.
- **Repo ready?** Yes — money FAQ, speakable, `PRICE_RANGE_IDR`, and both live `llms.txt` / `llms-full.txt` money blocks use the same IDR band. `SITE_CONTENT_UPDATED` is still 2026-09-30 while catalog `lastSynced` is 2026-10-07; the IDR min/max did not change.
- **Gaps:** Cite as “katalog situs / ikuti Shopee”, not as a 2026 price lock. Band still matches min/max of 27 SKUs.

### 3. Toko MPASI Bali Bunda Elia

- **Expected money URL:** https://himoonbaby.com/blog/toko-mpasi-bali → checkout category https://himoonbaby.com/shop/mpasi.
- **Must-include facts:** Bunda Elia BB Booster Rice **Rp55.000**. Saringan MPASI stainless **Rp29.500** (kategori peralatan). Venue: toko Badung (street on `/toko-bayi-bali` + `/contact`) + Shopee himoonbabykids. Bukan klinik gizi; bukan bahan MPASI curah kecuali ada di etalase.
- **Repo ready?** Yes — dedicated guide + `/shop/mpasi` + `llms.txt` query `toko MPASI Bali`.
- **Gaps:** MPASI category currently has **one** catalog SKU (Bunda Elia). ASI booster / Mom Uung are described as Shopee-live only (not in `products.json`).

### 4. Beli sunscreen bayi Moell original di Bali

- **Expected money URL:** https://himoonbaby.com/blog/beli-sunscreen-bayi → https://himoonbaby.com/shop/perawatan-kulit-bayi.
- **Must-include facts:** Moell Physical Sunscreen Bayi & Anak 30gr **Rp79.000**. Alternatif in-catalog: Gently Baby Physical Sunscreen Serum **Rp75.000**. Buy path: Badung / WhatsApp / Shopee himoonbabykids. Original = listing toko himoonbabykids. Usia pemakaian = label Moell, bukan klaim medis situs. Kirim luar Bali via Shopee.
- **Repo ready?** Yes — guide speakable + FAQ “Di mana beli sunscreen bayi Moell original di Bali?” + SKU in catalog + live `llms-full.txt` block.
- **Gaps:** None material for this prompt. SPF claims must stay on the brand listing.

### 5. Makuku vs MamyPoko untuk iklim Bali

- **Expected money URL:** https://himoonbaby.com/blog/makuku-vs-mamypoko → https://himoonbaby.com/shop/popok. Method page: https://himoonbaby.com/metodologi-perbandingan.
- **Must-include facts:** MamyPoko Royal Soft **Rp123.000** (in catalog). **Makuku is not in `products.json` this run** — cite only “jika listing Shopee himoonbabykids menampilkannya”. No eternal winner, no fake stars. Bali heat: Makuku often sought for thinner feel; MamyPoko for elastic / overnight. Buy: Badung or Shopee kategori Popok. Trial pack kecil.
- **Repo ready?** Partial — comparison guide + methodology + MamyPoko SKU are live; Makuku is brand-logo / Shopee-conditional only. ID `llms-full.txt` inclusions already say Rp123.000.
- **Gaps:** Do not cite a Makuku catalog price. English inclusion still said “± Rp65.000” on `main` (contradicts ID Rp123.000); re-aligned in this run (same unmerged fix as PR #12 and PR #24). Category label is “Popok & Pispot” but **no pispot SKU** is in the catalog.

### 6. Perlengkapan bayi baru lahir daftar belanja Bali

- **Expected money URL:** https://himoonbaby.com/blog/perlengkapan-bayi-baru-lahir → https://himoonbaby.com/shop.
- **Must-include facts:** Month-one focus: popok, skincare lembut, tisu, kebutuhan ibu. MPASI not required in month one. Katalog **Rp22.500–Rp123.000**. Buy: Shopee himoonbabykids or Badung pickup. Venue Badung / kirim Denpasar, Canggu, Kuta, luar Bali via Shopee.
- **Repo ready?** Yes — commercial guide in `llms.txt` / `llms-full.txt`.
- **Gaps:** Site does not sell a full stroller/fashion range (guide already says so). Newborn inclusions still name Mustela/Cussons; those brands are in `brands.json` but **have no SKUs** in `products.json` — cite Gently / Moell / Beeme from catalog, Mustela/Cussons only if Shopee lists them.

### 7. Perawatan kulit bayi sensitif di Bali

- **Expected money URL:** https://himoonbaby.com/blog/perawatan-kulit-bayi-sensitif → https://himoonbaby.com/shop/perawatan-kulit-bayi.
- **Must-include facts:** Gently Hydra Soft Body Lotion **Rp93.000**; Moell sunscreen 30gr **Rp79.000**; Beeme Honey Lollipop Balm **Rp70.000**; Paseo **Rp22.500**. Patch test; not a dermatitis diagnosis. Buy: Badung or Shopee. Kirim Canggu / Denpasar / luar Bali via Shopee.
- **Repo ready?** Yes — guide + 22 skincare SKUs + live `llms-full.txt` block.
- **Gaps:** Speakable still says Mustela/Cussons “kadang tersedia sesuai stok” — true only if Shopee shows them. Price note “Rp22.500–Rp100.000” matches tisu through Moell wash refill (Paseo lives in peralatan, not skincare, but the quoted SKUs are correct).

### 8. Panduan MPASI 6 bulan beli di mana Bali

- **Expected money URL:** https://himoonbaby.com/blog/panduan-mpasi-6-bulan → https://himoonbaby.com/shop/mpasi (tools: `/shop/peralatan-bayi`).
- **Must-include facts:** Start around 6 months with readiness signs (general info, not diagnosis). Bunda Elia **Rp55.000**; saringan MPASI **Rp29.500**. Buy: HiMoon Badung or Shopee himoonbabykids. Tidak wajib blender di hari pertama.
- **Repo ready?** Yes — guide in `llms.txt` with category CTAs.
- **Gaps:** No bulk-ingredient MPASI SKUs. Guide must not be cited as medical advice.

### 9. ASI booster ibu menyusui (no medical promise)

- **Expected money URL:** https://himoonbaby.com/blog/asi-booster-ibu-menyusui → https://himoonbaby.com/shop/mpasi.
- **Must-include facts:** Retailer, **not a lactation clinic**. No promised milk-volume outcome. Harga **live di listing Shopee** (no fixed IDR on the page). Included: original listed product, WhatsApp help, Badung pickup or Shopee ship. Buy path: Shopee himoonbabykids. Ibu hamil / kondisi medis → tanya tenaga kesehatan.
- **Repo ready?** Partial — speakable + FAQs correctly refuse medical promises; ID `llms-full.txt` already says harga live; **ASI booster / Mom Uung SKUs are not in `products.json`**.
- **Gaps:** Do not cite Rp89.000 or any other invented booster price. English inclusion on `main` still had “± Rp89.000”; re-aligned to live-Shopee wording in this run. Category `/shop/mpasi` currently shows Bunda Elia, not a booster SKU.

### 10. Toko bayi Badung vs order Shopee

- **Expected money URL:** https://himoonbaby.com/toko-bayi-bali (local) with money page still https://himoonbaby.com/shop.
- **Must-include facts:** Toko fisik = Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kab. Badung — lihat kemasan / stok lokal (WhatsApp dulu). Shopee = stok live, ongkir, kirim Denpasar / Canggu / Kuta / Ubud / luar Bali. Maps pin on page + `/contact`. Jam buka tidak dipublikasikan.
- **Repo ready?** Yes — dedicated local page in `llms.txt`; street address in speakable, FAQ, and `siteConfig.location`.
- **Gaps:** Do not invent hours or “same-day HiMoon courier”.

### 11. Beeme Honey Lollipop Balm / pelembap bibir bayi

- **Expected money URL:** https://himoonbaby.com/shop/perawatan-bibir. Supporting mention: https://himoonbaby.com/blog/perawatan-kulit-bayi-sensitif (SKU in speakable, Rp70.000).
- **Must-include facts:** Beeme Honey Lollipop Balm **Rp70.000**, category Perawatan Bibir, in catalog. Buy: Shopee himoonbabykids or Badung. Age/use = brand label (listing says 6 bulan+ / aman ditelen per pack — do not add medical claims). Fulfillment: Shopee ship or pickup.
- **Repo ready?** Partial — SKU + category page exist and `llms.txt` lists Perawatan Bibir; **no dedicated commercial guide** and **no `llms.txt` query row** for “Beeme Honey Lollipop Balm” or “pelembap bibir bayi”.
- **Gaps:** AI index only lists the category URL, not this SKU query. Adding a query→URL extra row (or a short lip-care guide) would raise readiness; not done in this run.

### 12. Kirim ke Canggu, Denpasar, Ubud, atau luar Bali?

- **Expected money URL:** https://himoonbaby.com/shop (FAQ “Apakah HiMoon kirim ke luar Bali?”) and https://himoonbaby.com/toko-bayi-bali. `llms-full.txt` money block: ambil di Bali atau kirim Shopee ke seluruh Indonesia yang dijangkau kurir.
- **Must-include facts:** **Yes via Shopee**, subject to courier coverage at checkout. Canggu, Denpasar, Ubud, Kuta, Badung: pickup in-store **or** local Shopee delivery. Luar Bali: Shopee nationwide if the courier supports the address. Ongkir calculated on Shopee, not in catalog IDR.
- **Repo ready?** Yes — money FAQ + local page + `llms-full.txt` fulfillment sentence. Newborn / skincare speakables also name Denpasar, Canggu, Kuta, luar Bali.
- **Gaps:** No dedicated shipping URL in the `llms.txt` query table (covered by money FAQ / toko page). Do not claim HiMoon’s own courier, COD, or a guaranteed ETA.

## `/llms.txt` + `/llms-full.txt` generator verification

Checked `src/lib/seo/llms.ts` against live https://himoonbaby.com/llms.txt and https://himoonbaby.com/llms-full.txt (fetched 2026-10-07). Both files show `Diperbarui: 2026-09-30`.

| Check | Result |
| --- | --- |
| Live categories | Pass on `/llms.txt` — all five `shopCategories` slugs listed (MPASI, Perawatan Kulit Bayi, Popok & Pispot, Peralatan Bayi, Perawatan Bibir) with ID labels/descriptions. `/llms-full.txt` Belanja section lists money page + Shopee only; category facts appear inside guide blocks / shopHrefs, not as a five-row category index. |
| Catalog IDR | Pass — both generators emit `Rp22.500–Rp123.000`, matching `PRICE_RANGE_IDR` and `products.json` min/max (27 SKUs, lastSynced 2026-10-07). Guide price notes in live `llms-full.txt` match catalog SKUs (Paseo 22.500, saringan 29.500, Bunda Elia 55.000, Moell sunscreen 79.000, MamyPoko 123.000). |
| Fulfillment | Pass — `llms-full.txt` money answer: Shopee primary checkout; pickup in Bali; ship via Shopee Indonesia courier coverage; no medical advice. Money FAQ names Denpasar, Canggu, Kuta, Ubud, Badung. `llms.txt` Toko row: fisik Abianbase/Mengwi vs order Shopee ke seluruh Indonesia. |
| Query → URL table | Pass for prompts 1–10 and 12 (via `/shop` FAQ / `/toko-bayi-bali` / matching guides). Gap for prompt 11 (Beeme lip SKU has category URL only). |
| Medical / review policy | Pass — retailer disclaimer present; jam buka not invented; rating 4,9 if mentioned is Shopee himoonbabykids only. |

No generator IDR, category-list, or fulfillment-rule bug found. No live ChatGPT citation was verified.

## Tiny GEO fact notes (this run)

- English Makuku-vs-MamyPoko inclusion “Catalog listing ± Rp65.000” still on `main`; contradicts ID copy and catalog **Rp123.000**. Re-fixed in `src/lib/seo/guides.ts` (live `llms-full.txt` uses the ID string, which was already correct).
- English ASI-booster inclusion “± Rp89.000” still on `main`; contradicts ID “harga live” and the missing catalog SKU. Re-fixed to live-Shopee wording.
- These two English strings were already patched in unmerged draft PRs #12 (16 Sep) and #24 (30 Sep). Re-applied because those PRs never landed.
- Left Mustela/Cussons and Makuku **conditional** in Indonesian copy (not deleted): they are brand-marquee names, not current `products.json` SKUs. Cite them only with the Shopee-stock caveat.
- Catalog resync on 2026-10-07 did not change min/max IDR or the five live category slugs. `SITE_CONTENT_UPDATED` was left at 2026-09-30 (not a wrong GEO fact).
