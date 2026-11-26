import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  productCount?: number;
  pricedCount?: number;
  moellSunscreenPrice?: number;
  gentlySunscreenPrice?: number;
  gentlyColognePrice?: number;
  gentlyLotionPrice?: number;
  gentlyRashCreamPrice?: number;
  moellRefillPrice?: number;
  beemeLipBalmPrice?: number;
};

export type CategoryMoneySeo = {
  fallbackMinPrice: number;
  fallbackMaxPrice: number;
  dateModified: string;
  keywords: string[];
  clusterSlugs?: string[];
  title: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => string;
  description: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => string;
  h1: (minPrice: number, maxPrice: number, extras?: CategoryMoneyExtras) => string;
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
    dateModified: "2026-11-19",
    keywords: [
      "perawatan kulit bayi",
      "skincare bayi Bali",
      "sunscreen bayi Bali",
      "Moell sunscreen bayi",
      "Gently baby cologne",
      "moisturizer bayi",
      "perawatan kulit bayi sensitif",
    ],
    clusterSlugs: [
      "beli-sunscreen-bayi",
      "perawatan-kulit-bayi-sensitif",
      "perlengkapan-bayi-baru-lahir",
    ],
    title: (_minPrice, _maxPrice, extras) =>
      `Perawatan Kulit Bayi Bali | Moell ${formatPrice(extras?.moellSunscreenPrice ?? 79000)}`,
    description: (minPrice, maxPrice, extras) =>
      `Beli perawatan kulit bayi di HiMoon Badung: sunscreen Moell 30gr ${formatPrice(extras?.moellSunscreenPrice ?? 79000)}, Gently & Beeme. Katalog ${idrRange(minPrice, maxPrice)}. Ambil Abianbase/Mengwi atau kirim Shopee himoonbabykids.`,
    h1: (minPrice, maxPrice) =>
      `Beli skincare bayi di Bali: Moell & Gently ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori Perawatan Kulit Bayi di baby shop HiMoon Bali menampilkan skincare yang sama dengan etalase Shopee himoonbabykids. ${extras?.productCount ?? 0} item di halaman ini, ${extras?.pricedCount ?? 0} punya harga katalog. Rentang situs ${idrRange(minPrice, maxPrice)}: Gently Baby Cologne ${formatPrice(extras?.gentlyColognePrice ?? 45000)} sampai refill Moell Gentle Body Wash ${formatPrice(extras?.moellRefillPrice ?? 100000)}. Sunscreen Moell Physical 30gr ${formatPrice(extras?.moellSunscreenPrice ?? 79000)}; Gently Physical Sunscreen ${formatPrice(extras?.gentlySunscreenPrice ?? 75000)}; Gently Hydra Soft Body Lotion ${formatPrice(extras?.gentlyLotionPrice ?? 93000)}. Brand di grid: Gently, Moell, Beeme, plus listing Bambi, Cussons, dan Doodle (harga live di Shopee). Yang termasuk: produk original sesuai listing, bantuan pilih via WhatsApp, opsi ambil di Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Tidak termasuk: klaim medis, Mustela, stroller, tisu Paseo (itu Peralatan Bayi), dan ongkir. Lip balm Beeme Honey Lollipop ${formatPrice(extras?.beemeLipBalmPrice ?? 70000)} ada di kategori Perawatan Bibir; Beeme Nourishing Balm tetap di grid ini. Kami bukan klinik kulit. Pilih produk, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)}. Sunscreen Moell 30gr ${formatPrice(extras?.moellSunscreenPrice ?? 79000)}; Gently cologne ${formatPrice(extras?.gentlyColognePrice ?? 45000)}. ${extras?.pricedCount ?? 0}/${extras?.productCount ?? 0} item punya harga situs; Bambi/Cussons/Doodle cek Shopee.`,
      },
      {
        label: "Yang termasuk",
        value:
          "Sunscreen, lotion, cologne, wash, dan krim ruam original Gently/Moell/Beeme sesuai listing. Bukan Mustela. Lip balm Beeme di Perawatan Bibir.",
      },
      {
        label: "Ambil vs kirim",
        value:
          "Ambil di Abianbase, Mengwi, Kab. Badung, atau kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, luar Bali",
      },
      {
        label: "Venue",
        value:
          "HiMoon Mom, Baby & Kids Shop, Jl. Cica - Abianbase No.11b, Mengwi, Kabupaten Badung, Bali",
      },
    ],
    faqs: (minPrice, maxPrice, extras) => [
      {
        question: {
          id: "Apakah HiMoon jual perawatan kulit bayi?",
          en: "Does HiMoon sell baby skincare?",
        },
        answer: {
          id: `Ya. Katalog /shop/perawatan-kulit-bayi menampilkan ${extras?.productCount ?? 0} item Gently, Moell, dan Beeme, plus listing Bambi, Cussons, dan Doodle. Harga situs ${idrRange(minPrice, maxPrice)} untuk ${extras?.pricedCount ?? 0} SKU berharga; sisanya cek Shopee. Bukan Mustela. Klik Beli di Shopee pada kartu untuk stok live.`,
          en: `Yes. /shop/perawatan-kulit-bayi lists ${extras?.productCount ?? 0} Gently, Moell, and Beeme items, plus Bambi, Cussons, and Doodle listings. On-site prices are ${idrRange(minPrice, maxPrice)} for ${extras?.pricedCount ?? 0} priced SKUs; the rest show Check price on Shopee. Not Mustela. Use Buy on Shopee on each card for live stock.`,
        },
      },
      {
        question: {
          id: "Berapa harga sunscreen Moell di HiMoon?",
          en: "How much is Moell baby sunscreen at HiMoon?",
        },
        answer: {
          id: `Harga katalog situs saat ini ${formatPrice(extras?.moellSunscreenPrice ?? 79000)} untuk Moell Physical Sunscreen Bayi & Anak 30gr. Gently Physical Sunscreen ${formatPrice(extras?.gentlySunscreenPrice ?? 75000)}. Promo bisa berubah — percayai listing Shopee sebelum checkout. Ongkir tidak termasuk.`,
          en: `Current on-site catalog is ${formatPrice(extras?.moellSunscreenPrice ?? 79000)} for Moell Physical Sunscreen 30g. Gently Physical Sunscreen is ${formatPrice(extras?.gentlySunscreenPrice ?? 75000)}. Promos can change — confirm the Shopee listing before checkout. Shipping is extra.`,
        },
      },
      {
        question: {
          id: "Ambil di toko atau kirim Shopee?",
          en: "Pickup or Shopee delivery?",
        },
        answer: {
          id: "Ambil di HiMoon, Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kabupaten Badung, Bali. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat checkout Shopee himoonbabykids agar ongkir live. WhatsApp hanya untuk tanya stok toko.",
          en: "Pick up at HiMoon, Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Badung Regency, Bali. Ship to Denpasar, Canggu, Kuta, Ubud, or outside Bali via Shopee himoonbabykids so shipping is live. WhatsApp is only for in-store stock questions.",
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
          id: "Ada lip balm atau krim ruam popok?",
          en: "Do you sell lip balm or diaper rash cream?",
        },
        answer: {
          id: `Krim ruam Gently Baby Rash Cream katalog ${formatPrice(extras?.gentlyRashCreamPrice ?? 71000)} ada di grid ini; listing Bambi cek Shopee. Lip balm Beeme Honey Lollipop ${formatPrice(extras?.beemeLipBalmPrice ?? 70000)} ada di kategori Perawatan Bibir, bukan di grid skincare. Beeme Nourishing Balm tetap perawatan kulit.`,
          en: `Gently Baby Rash Cream is catalogued at ${formatPrice(extras?.gentlyRashCreamPrice ?? 71000)} on this grid; Bambi listings show Check price on Shopee. Beeme Honey Lollipop lip balm (${formatPrice(extras?.beemeLipBalmPrice ?? 70000)}) is in Lip Care, not this skincare grid. Beeme Nourishing Balm stays in baby skincare.`,
        },
      },
    ],
  },
};
