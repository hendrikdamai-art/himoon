import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  bundaEliaPrice?: number;
  strainerPrice?: number;
  productCount?: number;
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
  mpasi: {
    fallbackMinPrice: 55000,
    fallbackMaxPrice: 55000,
    dateModified: "2026-11-12",
    keywords: [
      "MPASI bayi 6 bulan",
      "beli MPASI online",
      "Bunda Elia MPASI",
      "toko MPASI Bali",
      "makanan pendamping ASI Bali",
      "Bunda Elia BB Booster Rice",
    ],
    clusterSlugs: [
      "toko-mpasi-bali",
      "panduan-mpasi-6-bulan",
      "asi-booster-ibu-menyusui",
    ],
    title: (minPrice, maxPrice, extras) => {
      const featured = extras?.bundaEliaPrice ?? minPrice;
      if (minPrice === maxPrice) {
        return `MPASI Bayi 6 Bulan | Bunda Elia ${formatPrice(featured)}`;
      }
      return `MPASI Bayi 6 Bulan ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`;
    },
    description: (minPrice, maxPrice, extras) =>
      `Beli MPASI bayi 6 bulan di baby shop HiMoon Badung. Bunda Elia BB Booster Rice ${formatPrice(extras?.bundaEliaPrice ?? minPrice)}; merek lain (Milna, Promina, Bumboo, Alamii) cek harga di Shopee. Ambil di Abianbase/Mengwi atau kirim himoonbabykids ke Denpasar, Canggu, dan luar Bali.`,
    h1: (minPrice, maxPrice, extras) =>
      minPrice === maxPrice
        ? `Beli MPASI bayi 6 bulan di Bali — Bunda Elia ${formatPrice(extras?.bundaEliaPrice ?? minPrice)}`
        : `Beli MPASI bayi 6 bulan di Bali — katalog ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori MPASI di baby shop HiMoon Bali menampilkan nutrisi makanan pendamping ASI yang sama dengan etalase Shopee himoonbabykids. ${extras?.productCount ?? 0} item di halaman ini. Harga yang tercatat di situs: Bunda Elia BB Booster Rice ${formatPrice(extras?.bundaEliaPrice ?? minPrice)}. Merek lain seperti Milna, Promina, Bumboo, Alamii, Yummy Bites, dan kaldu Bunda Elia mengikuti listing Shopee — kartu tanpa angka menampilkan Cek harga di Shopee. Yang termasuk: produk original sesuai listing, bantuan pilih varian via WhatsApp, opsi ambil di Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Tidak termasuk: klaim medis, bahan MPASI curah, blender/steamer kecuali ada di etalase, dan ongkir. Saringan MPASI stainless katalog ${formatPrice(extras?.strainerPrice ?? 29500)} ada di kategori Peralatan Bayi. Kami bukan klinik gizi. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `Bunda Elia BB Booster Rice ${formatPrice(extras?.bundaEliaPrice ?? minPrice)}. ${extras?.productCount ?? 0} item MPASI di halaman ini; merek lain cek Shopee.`,
      },
      {
        label: "Yang termasuk",
        value:
          "Nutrisi MPASI original sesuai listing (Bunda Elia, Milna, Promina, Bumboo, Alamii, dll.) + bantuan pilih varian via WhatsApp. Bukan bahan curah.",
      },
      {
        label: "Ambil vs kirim",
        value: "Ambil di Abianbase, Mengwi, Kab. Badung, atau kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, luar Bali",
      },
      {
        label: "Venue",
        value: "HiMoon Mom, Baby & Kids Shop, Jl. Cica - Abianbase No.11b, Mengwi, Kabupaten Badung, Bali",
      },
    ],
    faqs: (minPrice, maxPrice, extras) => [
      {
        question: {
          id: "Apakah HiMoon jual MPASI?",
          en: "Does HiMoon sell MPASI?",
        },
        answer: {
          id: `Ya. Katalog /shop/mpasi menampilkan ${extras?.productCount ?? 0} item: Bunda Elia BB Booster Rice ${formatPrice(extras?.bundaEliaPrice ?? minPrice)} plus merek etalase seperti Milna, Promina, Bumboo, dan Alamii (harga live di Shopee). Bukan toko bahan MPASI curah. Klik Beli di Shopee pada kartu untuk stok live.`,
          en: `Yes. The /shop/mpasi catalog lists ${extras?.productCount ?? 0} items: Bunda Elia BB Booster Rice at ${formatPrice(extras?.bundaEliaPrice ?? minPrice)} plus shop brands such as Milna, Promina, Bumboo, and Alamii (live Shopee price). We are not a bulk-ingredient MPASI store. Use Buy on Shopee on each card for live stock.`,
        },
      },
      {
        question: {
          id: "Berapa harga MPASI Bunda Elia di HiMoon?",
          en: "How much is Bunda Elia MPASI at HiMoon?",
        },
        answer: {
          id: `Harga katalog situs saat ini ${formatPrice(extras?.bundaEliaPrice ?? minPrice)} untuk Bunda Elia BB Booster Rice. Item Bunda Elia lain (kaldu, fat oil, santan, kecap) dan merek lain: cek harga di Shopee. Promo bisa berubah — percayai listing sebelum checkout. Ongkir tidak termasuk.`,
          en: `Current on-site catalog price is ${formatPrice(extras?.bundaEliaPrice ?? minPrice)} for Bunda Elia BB Booster Rice. Other Bunda Elia SKUs (stock, fat oil, coconut milk, sauce) and other brands: check the Shopee price. Promos can change — confirm the listing before checkout. Shipping is extra.`,
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
          id: "Apakah ada saringan MPASI?",
          en: "Do you sell an MPASI strainer?",
        },
        answer: {
          id: `Ya. Saringan MPASI stainless katalog ${formatPrice(extras?.strainerPrice ?? 29500)} ada di kategori Peralatan Bayi, bukan di grid MPASI. Buka /shop/peralatan-bayi, lalu Beli di Shopee. Blender/steamer/botol hanya jika listing Shopee menampilkannya.`,
          en: `Yes. The stainless MPASI strainer is catalogued at ${formatPrice(extras?.strainerPrice ?? 29500)} in Baby Equipment, not on the MPASI grid. Open /shop/peralatan-bayi, then Buy on Shopee. Blender/steamer/bottle only if Shopee lists them.`,
        },
      },
    ],
  },
};
