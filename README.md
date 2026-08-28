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
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
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

Produk di-sync dari toko Shopee [himoonbabykids](https://shopee.co.id/himoonbabykids). Gambar disimpan via CDN Shopee (bukan di server Vercel).

```bash
curl https://your-domain.com/api/products/sync
```

Data fallback tersimpan di `src/data/products.json`.

## Deploy ke Vercel

1. Push repo ke GitHub
2. Import project di Vercel
3. Set environment variables
4. Deploy

## Links

- Shopee: https://shopee.co.id/himoonbabykids
- Google Maps: https://maps.app.goo.gl/T6hEgB5f2WsPodaen
