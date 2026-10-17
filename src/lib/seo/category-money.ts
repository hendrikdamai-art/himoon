import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  mamypokoPrice?: number;
  rashCreamPrice?: number;
};

export type CategoryMoneySeo = {
  fallbackMinPrice: number;
  fallbackMaxPrice: number;
  dateModified: string;
  keywords: string[];
  clusterSlugs?: string[];
  title: (minPrice: number, maxPrice: number) => string;
  description: (minPrice: number, maxPrice: number) => string;
  h1: (minPrice: number, maxPrice: number) => string;
  speakable: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => string;
  facts: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => CategoryQuickFact[];
  faqs: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => GuideFaq[];
};

function idrRange(minPrice: number, maxPrice: number): string {
  if (minPrice === maxPrice) return formatPrice(minPrice);
  return `${formatPrice(minPrice)}–${formatPrice(maxPrice)}`;
}

export function resolveCategoryPrices(
  products: { price: number }[],
  money?: CategoryMoneySeo,
): { minPrice: number; maxPrice: number } {
  const prices = products.map((product) => product.price).filter((price) => price > 0);
  return {
    minPrice: prices.length ? Math.min(...prices) : (money?.fallbackMinPrice ?? 0),
    maxPrice: prices.length ? Math.max(...prices) : (money?.fallbackMaxPrice ?? 0),
  };
}

/** Category-specific money SEO. Add a slug when that page is rotated into weekly QA. */
export const categoryMoneySeo: Partial<Record<ShopCategorySlug, CategoryMoneySeo>> = {
  popok: {
    fallbackMinPrice: 123000,
    fallbackMaxPrice: 123000,
    dateModified: "2026-10-08",
    keywords: [
      "popok bayi Bali",
      "popok MamyPoko",
      "MamyPoko Royal Soft",
      "beli popok bayi original",
      "popok bayi Badung",
      "popok Makuku",
    ],
    clusterSlugs: [
      "tips-memilih-popok-bayi",
      "makuku-vs-mamypoko",
      "perlengkapan-bayi-baru-lahir",
    ],
    title: (minPrice, maxPrice) =>
      `Popok MamyPoko Royal Soft ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`,
    description: (minPrice, maxPrice) =>
      `Beli popok bayi original MamyPoko Royal Soft ${idrRange(minPrice, maxPrice)} di baby shop HiMoon Badung. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar, Canggu, dan luar Bali. Makuku hanya jika listing Shopee ada.`,
    h1: (minPrice, maxPrice) =>
      `Popok bayi di baby shop Bali — MamyPoko Royal Soft ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori Popok di baby shop HiMoon Bali menampilkan popok yang sama dengan etalase Shopee himoonbabykids. Harga katalog ${idrRange(minPrice, maxPrice)} untuk MamyPoko Royal Soft tipe celana dan perekat (${formatPrice(extras?.mamypokoPrice ?? minPrice)}). Yang termasuk: popok original sesuai listing, bantuan pilih ukuran via WhatsApp, opsi ambil di Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Makuku hanya kami sebut jika listing Shopee himoonbabykids menampilkannya — saat ini etalase kategori Popok & Pispot adalah satu SKU MamyPoko. Kami bukan klinik kulit; ruam parah ke tenaga kesehatan. Harga dan stok mengikuti Shopee; konfirmasi listing (ukuran dan isi pack) sebelum checkout. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)} — MamyPoko Royal Soft (${formatPrice(extras?.mamypokoPrice ?? minPrice)}); isi pack baca judul listing Shopee`,
      },
      {
        label: "Yang termasuk",
        value: "Popok original MamyPoko (celana & perekat) + bantuan pilih ukuran via WhatsApp. Makuku hanya jika listing Shopee ada.",
      },
      {
        label: "Ambil vs kirim",
        value: "Ambil di Badung, atau kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, luar Bali",
      },
      {
        label: "Venue",
        value: "HiMoon Mom, Baby & Kids Shop, Kabupaten Badung, Bali",
      },
    ],
    faqs: (minPrice, maxPrice, extras) => [
      {
        question: {
          id: "Apakah HiMoon jual popok bayi?",
          en: "Does HiMoon sell baby diapers?",
        },
        answer: {
          id: `Ya. HiMoon menjual MamyPoko Royal Soft dengan harga katalog ${formatPrice(extras?.mamypokoPrice ?? minPrice)} (rentang kategori ${idrRange(minPrice, maxPrice)}), mengikuti Shopee himoonbabykids. Lihat kartu produk di bawah, lalu Beli di Shopee untuk stok, ukuran, dan isi pack live.`,
          en: `Yes. HiMoon sells MamyPoko Royal Soft at catalog ${formatPrice(extras?.mamypokoPrice ?? minPrice)} (category range ${idrRange(minPrice, maxPrice)}), following Shopee himoonbabykids. Use Buy on Shopee on the cards below for live stock, size, and pack count.`,
        },
      },
      {
        question: {
          id: "Ada popok Makuku di HiMoon?",
          en: "Does HiMoon sell Makuku diapers?",
        },
        answer: {
          id: "Makuku hanya kami jual jika listing Shopee himoonbabykids menampilkannya. Etalase kategori Popok & Pispot saat ini adalah MamyPoko Royal Soft. Jangan percaya stok Makuku dari halaman ini jika kartu produknya tidak ada — percayai Shopee.",
          en: "Makuku is only sold when the himoonbabykids Shopee listing shows it. The Popok & Pispot category currently lists MamyPoko Royal Soft. Do not assume Makuku stock from this page if the product card is missing — trust Shopee.",
        },
      },
      {
        question: {
          id: "Ambil di toko atau kirim Shopee?",
          en: "Pickup or Shopee delivery?",
        },
        answer: {
          id: "Ambil di HiMoon, Kabupaten Badung, Bali. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat checkout Shopee himoonbabykids agar ongkir live. WhatsApp hanya untuk tanya stok ukuran di toko.",
          en: "Pick up at HiMoon in Badung Regency, Bali. Ship to Denpasar, Canggu, Kuta, Ubud, or outside Bali via Shopee himoonbabykids so shipping is live. WhatsApp is only for in-store size stock questions.",
        },
      },
      {
        question: {
          id: "Bagaimana cara beli ke Shopee?",
          en: "How do I buy on Shopee?",
        },
        answer: {
          id: "Klik Beli di Shopee pada kartu produk, atau buka etalase himoonbabykids. WhatsApp hanya untuk tanya stok toko Bali.",
          en: "Use Buy on Shopee on each product card, or open the himoonbabykids shop. WhatsApp is for Bali in-store stock questions.",
        },
      },
      {
        question: {
          id: "Apakah harga popok sudah termasuk ongkir?",
          en: "Is shipping included in the diaper price?",
        },
        answer: {
          id: `Tidak. Harga katalog MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? minPrice)} belum termasuk ongkir. Ongkir dihitung Shopee saat checkout.`,
          en: `No. The MamyPoko Royal Soft catalog price ${formatPrice(extras?.mamypokoPrice ?? minPrice)} does not include shipping. Shopee calculates shipping at checkout.`,
        },
      },
    ],
  },
};
