import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  sunscreenPrice?: number;
  gentlySunscreenPrice?: number;
  lotionPrice?: number;
  lipBalmPrice?: number;
};

export type CategoryMoneySeo = {
  fallbackMinPrice: number;
  fallbackMaxPrice: number;
  keywords: string[];
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
  "perawatan-kulit-bayi": {
    fallbackMinPrice: 45000,
    fallbackMaxPrice: 100000,
    keywords: [
      "perawatan kulit bayi",
      "sunscreen bayi Bali",
      "moisturizer bayi",
      "Moell sunscreen bayi",
      "Gently lotion bayi",
      "sabun mandi bayi non SLS",
    ],
    title: (minPrice, maxPrice) =>
      `Perawatan Kulit Bayi dari ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`,
    description: (minPrice, maxPrice) =>
      `Beli sunscreen Moell, lotion Gently, dan skincare bayi ${idrRange(minPrice, maxPrice)} di baby shop HiMoon Badung. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar, Canggu, dan luar Bali.`,
    h1: (minPrice, maxPrice) =>
      `Perawatan kulit bayi di baby shop Bali — sunscreen Moell & lotion Gently dari ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori Perawatan Kulit Bayi di baby shop HiMoon Bali menampilkan skincare yang sama dengan etalase Shopee himoonbabykids. Harga katalog ${idrRange(minPrice, maxPrice)}: cologne Gently dari ${formatPrice(minPrice)}, sunscreen Moell 30 gram ${formatPrice(extras?.sunscreenPrice ?? 79000)}, lotion Gently Hydra Soft ${formatPrice(extras?.lotionPrice ?? 93000)}, sampai refill sabun Moell ${formatPrice(maxPrice)}. Yang termasuk: produk original sesuai listing (Gently, Moell, Beeme), bantuan pilih varian via WhatsApp, opsi ambil di Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Kami bukan klinik kulit; label merek dan tenaga kesehatan tetap acuan. Harga dan stok mengikuti Shopee; konfirmasi listing sebelum checkout. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)} — cologne Gently sampai refill Moell; sunscreen Moell ${formatPrice(extras?.sunscreenPrice ?? 79000)}`,
      },
      {
        label: "Yang termasuk",
        value: "Sunscreen, lotion, sabun non-SLS original (Moell, Gently, Beeme) + bantuan pilih via WhatsApp",
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
          id: "Apakah HiMoon jual perawatan kulit bayi?",
          en: "Does HiMoon sell baby skincare?",
        },
        answer: {
          id: `Ya. HiMoon menjual sunscreen Moell, lotion Gently, dan skincare bayi Beeme dengan harga katalog ${idrRange(minPrice, maxPrice)}, mengikuti Shopee himoonbabykids. Lihat kartu produk di bawah, lalu Beli di Shopee untuk stok live.`,
          en: `Yes. HiMoon sells Moell sunscreen, Gently lotion, and Beeme baby skincare at about ${idrRange(minPrice, maxPrice)}, following Shopee himoonbabykids. Use Buy on Shopee on the cards below for live stock.`,
        },
      },
      {
        question: {
          id: "Berapa harga sunscreen bayi Moell di HiMoon?",
          en: "How much is Moell baby sunscreen at HiMoon?",
        },
        answer: {
          id: `Harga katalog situs saat ini ${formatPrice(extras?.sunscreenPrice ?? 79000)} untuk Moell Physical Sunscreen 30 gram, dan ${formatPrice(extras?.gentlySunscreenPrice ?? 75000)} untuk Gently Physical Sunscreen SPF 50. Rentang kategori skincare ${idrRange(minPrice, maxPrice)}. Promo dan stok bisa berubah — percayai listing Shopee sebelum checkout.`,
          en: `Current on-site catalog is ${formatPrice(extras?.sunscreenPrice ?? 79000)} for Moell Physical Sunscreen 30g, and ${formatPrice(extras?.gentlySunscreenPrice ?? 75000)} for Gently Physical Sunscreen SPF 50. Category range is ${idrRange(minPrice, maxPrice)}. Promos and stock can change — confirm the Shopee listing before checkout.`,
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
          id: "Apakah ada pelembap bibir bayi?",
          en: "Do you sell baby lip balm?",
        },
        answer: {
          id: `Ya. Beeme Honey Lollipop Balm katalog ${formatPrice(extras?.lipBalmPrice ?? 70000)} ada di kategori Perawatan Bibir, bukan di grid skincare ini. Buka /shop/perawatan-bibir, lalu Beli di Shopee.`,
          en: `Yes. Beeme Honey Lollipop Balm is catalogued at ${formatPrice(extras?.lipBalmPrice ?? 70000)} in Lip Care, not in this skincare grid. Open /shop/perawatan-bibir, then Buy on Shopee.`,
        },
      },
    ],
  },
};
