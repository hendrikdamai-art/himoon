# HiMoon Baby & Kids

Website resmi **HiMoon Baby & Kids** — toko perlengkapan bayi, anak, dan ibu menyusui di Bali. Menjual MPASI, keperluan bayi, popok, perawatan kulit, dan produk anak dari brand terpercaya.

## Fitur

- Bahasa Indonesia (default) dengan toggle English
- Katalog produk dengan harga & foto dari Shopee (CDN eksternal)
- Checkout ganda: **WhatsApp** (hijau) dan **Shopee** (oranye)
- Section brand, ulasan pelanggan, blog, dan SEO siap Google Search Console
- Arsitektur scalable untuk e-commerce (Next.js App Router + API routes)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript + Tailwind CSS
- Deploy di [Vercel](https://vercel.com) (free tier compatible)

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:4317](http://localhost:4317)

## Environment Variables

Buat file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=628511214358
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-gsc-verification-code
```

## Struktur Sitemap

- `/` — Beranda
- `/about` — Tentang Kami
- `/shop` — Semua produk
- `/shop/[category]` — Kategori (mpasi, baby-skincare, popok, dll.)
- `/blog` — Artikel
- `/contact` — Kontak

Sitemap otomatis: `/sitemap.xml`  
Robots: `/robots.txt`

## Google Search Console

1. Deploy ke Vercel
2. Set `NEXT_PUBLIC_SITE_URL` ke domain production
3. Tambahkan property di [Google Search Console](https://search.google.com/search-console)
4. Verifikasi via meta tag (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`) atau DNS
5. Submit sitemap: `https://your-domain.com/sitemap.xml`

## Sinkronisasi Produk Shopee

Produk di-sync langsung dari toko Shopee [himoonbabykids](https://shopee.co.id/himoonbabykids). Setiap produk memakai **foto asli dari Shopee** (CDN eksternal) — tidak ada placeholder atau gambar duplikat buatan.

**Sinkron otomatis (runtime):** setiap halaman shop memuat produk live dari API Shopee (cache 1 jam).

**Perbarui fallback JSON** (must run from Indonesia — Shopee blocks datacenter IPs):

```bash
npm run sync:products
git add src/data/products.json
git commit -m "Sync full Shopee catalog"
git push
```

After deploy on Vercel (Singapore region), the site also tries to load products live from Shopee on each visit. If products still look incomplete, run the sync command above from your laptop in Bali.

## Deploy ke Vercel

Proyek ini sudah siap Vercel (Next.js 16, build lokal sukses). Region serverless: **Singapore (`sin1`)** — dekat Bali/Indonesia.

### Langkah 1 — Pastikan kode ada di GitHub

Repo GitHub: https://github.com/hendrikdamai-art/himoon

**Remote `origin` in this project points to that GitHub URL.**

### Push from WSL (one command)

```bash
curl -fsSL https://raw.githubusercontent.com/hendrikdamai-art/himoon/main/scripts/push-to-github.sh | bash
```

If the script is not on GitHub yet, clone from Cursor Origin first:

```bash
origin auth login
origin repo clone hendrik-dipayadi/himoon-store
cd himoon-store
bash scripts/push-to-github.sh .
```

Or manually:

```bash
origin auth login
origin repo clone hendrik-dipayadi/himoon-store
cd himoon-store
git remote set-url origin https://github.com/hendrikdamai-art/himoon.git
git push -u origin main --force
```

### Langkah 2 — Import di Vercel (dashboard)

1. Buka [vercel.com/new](https://vercel.com/new) dan login dengan GitHub.
2. **Import** repository `hendrikdamai-art/himoon`.
3. Framework: **Next.js** (terdeteksi otomatis).
4. Root Directory: `./` (default).
5. Build Command: `npm run build` (default).
6. Output: otomatis (App Router).

### Langkah 3 — Environment variables

Di Vercel → Project → **Settings → Environment Variables**, tambahkan:

| Variable | Value | Environment |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `628511214358` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` *(ganti setelah deploy)* | Production |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | *(opsional, dari Google Search Console)* | Production |

**Catatan:** Jika `NEXT_PUBLIC_SITE_URL` belum di-set, situs memakai URL Vercel otomatis untuk sitemap & SEO. Setelah dapat domain final (mis. `himoonbabykids.com`), update variabel ini lalu **Redeploy**.

### Langkah 4 — Deploy

Klik **Deploy**. Setelah selesai, buka URL production (mis. `https://himoon.vercel.app`).

### Langkah 5 — Custom domain (opsional)

Vercel → Project → **Settings → Domains** → tambahkan `himoonbabykids.com` (atau domain Anda), ikuti instruksi DNS, lalu update `NEXT_PUBLIC_SITE_URL` dan redeploy.

### Langkah 6 — Google Search Console

1. Tambah property dengan URL production.
2. Verifikasi via meta tag → salin kode ke `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Redeploy.
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Deploy via CLI (alternatif)

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

Set environment variables dengan `vercel env add`.

## Links

- Shopee: https://shopee.co.id/himoonbabykids
- Google Maps: https://share.google/XCsGX1ahJGslLnNMi
- Email: adminhimoon@gmail.com
