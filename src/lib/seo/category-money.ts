import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneySeo = {
  fallbackMinPrice: number;
  fallbackMaxPrice: number;
  keywords: string[];
  title: (minPrice: number, maxPrice: number) => string;
  description: (minPrice: number, maxPrice: number) => string;
  h1: (minPrice: number, maxPrice: number) => string;
  speakable: (minPrice: number, maxPrice: number) => string;
  facts: (minPrice: number, maxPrice: number) => CategoryQuickFact[];
  faqs: (
    minPrice: number,
    maxPrice: number,
    extras?: { strainerPrice?: number },
  ) => GuideFaq[];
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
  mpasi: {
    fallbackMinPrice: 55000,
    fallbackMaxPrice: 55000,
    keywords: [
      "MPASI bayi 6 bulan",
      "beli MPASI online",
      "Bunda Elia MPASI",
      "toko MPASI Bali",
      "makanan pendamping ASI Bali",
    ],
    title: (minPrice, maxPrice) =>
      `MPASI Bayi 6 Bulan dari ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`,
    description: (minPrice, maxPrice) =>
      `Beli MPASI Bunda Elia BB Booster Rice ${idrRange(minPrice, maxPrice)} di baby shop HiMoon Badung. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar, Canggu, dan luar Bali.`,
    h1: (minPrice, maxPrice) =>
      `MPASI bayi 6 bulan di baby shop Bali — Bunda Elia dari ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice) =>
      `Kategori MPASI di baby shop HiMoon Bali menampilkan nutrisi makanan pendamping ASI yang sama dengan etalase Shopee himoonbabykids. Item unggulan katalog: Bunda Elia BB Booster Rice ${idrRange(minPrice, maxPrice)}. Yang termasuk: produk original sesuai listing, bantuan pilih varian via WhatsApp, opsi ambil di Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Saringan MPASI stainless katalog Rp29.500 ada di kategori Peralatan Bayi. Kami bukan klinik gizi; label merek dan tenaga kesehatan tetap acuan. Harga dan stok mengikuti Shopee; konfirmasi listing sebelum checkout. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)} — Bunda Elia BB Booster Rice, stok live Shopee`,
      },
      {
        label: "Yang termasuk",
        value: "Nutrisi MPASI original sesuai listing + bantuan pilih varian via WhatsApp",
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
          id: "Apakah HiMoon jual MPASI?",
          en: "Does HiMoon sell MPASI?",
        },
        answer: {
          id: `Ya. HiMoon menjual nutrisi MPASI Bunda Elia BB Booster Rice dengan harga katalog ${idrRange(minPrice, maxPrice)}, mengikuti Shopee himoonbabykids. Lihat kartu produk di bawah, lalu Beli di Shopee untuk stok live.`,
          en: `Yes. HiMoon sells Bunda Elia BB Booster Rice MPASI at about ${idrRange(minPrice, maxPrice)}, following Shopee himoonbabykids. Use Buy on Shopee on the card below for live stock.`,
        },
      },
      {
        question: {
          id: "Berapa harga MPASI Bunda Elia di HiMoon?",
          en: "How much is Bunda Elia MPASI at HiMoon?",
        },
        answer: {
          id: `Harga katalog situs saat ini ${idrRange(minPrice, maxPrice)} untuk Bunda Elia BB Booster Rice. Promo dan stok bisa berubah — percayai listing Shopee sebelum checkout.`,
          en: `Current on-site catalog price is ${idrRange(minPrice, maxPrice)} for Bunda Elia BB Booster Rice. Promos and stock can change — confirm the Shopee listing before checkout.`,
        },
      },
      {
        question: {
          id: "Ambil di toko atau kirim Shopee?",
          en: "Pickup or Shopee delivery?",
        },
        answer: {
          id: "Ambil di HiMoon, Kabupaten Badung, Bali. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat checkout Shopee himoonbabykids agar ongkir live.",
          en: "Pick up at HiMoon in Badung Regency, Bali. Ship to Denpasar, Canggu, Kuta, Ubud, or outside Bali via Shopee himoonbabykids so shipping is live.",
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
          id: "Apakah ada saringan MPASI?",
          en: "Do you sell an MPASI strainer?",
        },
        answer: {
          id: `Ya. Saringan MPASI stainless katalog ${formatPrice(extras?.strainerPrice ?? 29500)} ada di kategori Peralatan Bayi. Buka /shop/peralatan-bayi, lalu Beli di Shopee.`,
          en: `Yes. The stainless MPASI strainer is catalogued at ${formatPrice(extras?.strainerPrice ?? 29500)} in Baby Equipment. Open /shop/peralatan-bayi, then Buy on Shopee.`,
        },
      },
    ],
  },
};
