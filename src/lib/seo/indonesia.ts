import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** Primary Indonesian search terms for baby & kids retail in Bali / Indonesia */
export const indonesiaKeywords = [
  "HiMoon Baby Kids",
  "HiMoon Bali",
  "toko bayi Bali",
  "toko bayi Badung",
  "toko perlengkapan bayi Bali",
  "toko perlengkapan bayi Badung",
  "toko ibu dan bayi Bali",
  "MPASI bayi",
  "MPASI 6 bulan",
  "makanan pendamping ASI",
  "beli MPASI online",
  "popok bayi",
  "popok bayi Bali",
  "popok Makuku",
  "popok MamyPoko",
  "MamyPoko Royal Soft",
  "perawatan kulit bayi",
  "skincare bayi",
  "sunscreen bayi",
  "sunscreen bayi Bali",
  "moisturizer bayi",
  "sabun mandi bayi",
  "parfum bayi non alkohol",
  "Moell sunscreen bayi",
  "Moell body wash",
  "Gently baby cologne",
  "Gently face cream",
  "Beeme baby lotion",
  "Bumbu Bunda Elia MPASI",
  "perlengkapan bayi anak",
  "peralatan bayi",
  "perawatan bibir bayi",
  "toko bayi online Indonesia",
  "penjual terpercaya Shopee Bali",
  "himoonbabykids",
  "kebutuhan bayi online Indonesia",
] as const;

export const indonesiaFaqs = [
  {
    question: "Di mana lokasi HiMoon Baby & Kids?",
    answer:
      "HiMoon Mom, Baby & Kids Shop berlokasi di Kabupaten Badung, Bali, Indonesia. Kunjungi toko fisik kami atau lihat peta di Google Maps melalui halaman Kontak.",
  },
  {
    question: "Apakah HiMoon menjual MPASI dan keperluan bayi?",
    answer:
      "Ya. HiMoon menjual MPASI, popok, perawatan kulit bayi, peralatan bayi, dan produk anak dari brand terpercaya seperti Bunda Elia, Makuku, MamyPoko, Moell, dan Gently.",
  },
  {
    question: "Bagaimana cara belanja di HiMoon?",
    answer:
      "Anda bisa belanja langsung di toko fisik kami di Bali, pesan via WhatsApp, atau checkout di Shopee toko himoonbabykids.",
  },
  {
    question: "Apakah HiMoon penjual terpercaya?",
    answer:
      "HiMoon adalah penjual terpercaya di Shopee dengan rating 4.9 dan ulasan pelanggan positif. Semua produk dijamin asli.",
  },
] as const;

const siteUrl = siteConfig.url;

/** Path-aware hreflang for Indonesian Google (no fake EN URL) */
export function indonesiaLanguageAlternates(path = "") {
  const normalized = path
    ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
    : siteUrl;
  return {
    "id-ID": normalized,
    "x-default": normalized,
  } as const;
}

export const hreflangAlternates = {
  canonical: siteUrl,
  languages: indonesiaLanguageAlternates(),
} satisfies Metadata["alternates"];

export function buildIndonesiaPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = path ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}` : siteUrl;

  return {
    title,
    description,
    keywords: [...keywords, ...indonesiaKeywords.slice(0, 12)],
    alternates: {
      canonical: url,
      languages: indonesiaLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/logo.png",
          width: 204,
          height: 204,
          alt: "HiMoon Baby & Kids — toko bayi Bali",
        },
      ],
    },
    other: {
      "geo.region": "ID-BA",
      "geo.placename": "Badung, Bali, Indonesia",
      "geo.position": "-8.5833;115.1667",
      ICBM: "-8.5833, 115.1667",
      "content-language": "id-ID",
    },
  };
}

export const categorySeoKeywords: Record<string, string[]> = {
  mpasi: [
    "MPASI bayi 6 bulan",
    "bubur bayi",
    "makanan pendamping ASI Bali",
    "Bunda Elia MPASI",
    "beli MPASI online",
  ],
  "perawatan-kulit-bayi": [
    "sunscreen bayi Bali",
    "moisturizer bayi",
    "perawatan kulit bayi sensitif",
    "Moell sunscreen bayi",
    "sabun mandi bayi non SLS",
  ],
  popok: [
    "popok bayi murah Bali",
    "popok Makuku",
    "popok MamyPoko",
    "popok bayi overnight",
  ],
  "peralatan-bayi": [
    "peralatan makan bayi",
    "botol susu bayi",
    "perlengkapan bayi Bali",
    "saringan MPASI",
  ],
  "perawatan-bibir": [
    "lip balm bayi",
    "perawatan bibir bayi",
    "pelembap bibir anak",
  ],
};
