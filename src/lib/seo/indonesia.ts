import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** Primary Indonesian search terms for baby & kids retail in Bali */
export const indonesiaKeywords = [
  "HiMoon Baby Kids",
  "HiMoon Bali",
  "toko bayi Bali",
  "toko perlengkapan bayi Badung",
  "baby shop Bali",
  "baby shop Denpasar",
  "MPASI bayi",
  "makanan pendamping ASI",
  "popok bayi",
  "popok Makuku",
  "popok MamyPoko",
  "perawatan kulit bayi",
  "perlengkapan bayi anak",
  "toko ibu dan bayi",
  "produk bayi Shopee Bali",
  "penjual terpercaya Shopee",
  "himoonbabykids",
  "toko MPASI Bali",
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

export const hreflangAlternates = {
  canonical: siteUrl,
  languages: {
    "id-ID": siteUrl,
    "en-ID": `${siteUrl}?lang=en`,
    "x-default": siteUrl,
  },
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
    keywords: [...keywords, ...indonesiaKeywords.slice(0, 8)],
    alternates: {
      canonical: url,
      languages: hreflangAlternates.languages,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      alternateLocale: ["en_ID", "en_US"],
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: "/logo.png", width: 204, height: 204, alt: siteConfig.name }],
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
  mpasi: ["MPASI bayi 6 bulan", "bubur bayi", "makanan pendamping ASI Bali", "Bunda Elia MPASI"],
  "baby-skincare": [
    "sunscreen bayi Bali",
    "moisturizer bayi",
    "perawatan kulit bayi sensitif",
    "Moell sunscreen bayi",
  ],
  popok: ["popok bayi murah Bali", "popok Makuku", "popok MamyPoko", "diaper bayi"],
  "peralatan-bayi": ["peralatan makan bayi", "botol susu bayi", "perlengkapan bayi"],
  "treatment-bibir": ["lip balm bayi", "perawatan bibir bayi", "treatment bibir anak"],
};
