import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  paseoPrice?: number;
  saringanPrice?: number;
  bundaEliaPrice?: number;
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
  "peralatan-bayi": {
    fallbackMinPrice: 22500,
    fallbackMaxPrice: 29500,
    dateModified: "2026-10-15",
    keywords: [
      "peralatan makan bayi",
      "saringan MPASI",
      "saringan MPASI stainless",
      "tisu bayi Paseo",
      "perlengkapan bayi Bali",
      "peralatan MPASI Bali",
    ],
    clusterSlugs: [
      "panduan-mpasi-6-bulan",
      "toko-mpasi-bali",
      "perlengkapan-bayi-baru-lahir",
    ],
    title: (minPrice, maxPrice) =>
      `Saringan MPASI & Tisu Bayi ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`,
    description: (minPrice, maxPrice) =>
      `Beli saringan MPASI stainless dan tisu bayi Paseo ${idrRange(minPrice, maxPrice)} di baby shop HiMoon Badung. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar, Canggu, dan luar Bali. Botol/blender hanya jika listing Shopee ada.`,
    h1: (minPrice, maxPrice) =>
      `Peralatan bayi di baby shop Bali — saringan MPASI & tisu Paseo ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori Peralatan Bayi di baby shop HiMoon Bali menampilkan item yang sama dengan etalase Shopee himoonbabykids. Harga katalog ${idrRange(minPrice, maxPrice)}: tisu bayi Paseo 130 sheets ${formatPrice(extras?.paseoPrice ?? minPrice)} dan saringan MPASI Ceko stainless ${formatPrice(extras?.saringanPrice ?? maxPrice)}. Yang termasuk: produk original sesuai listing, bantuan pilih item via WhatsApp, opsi ambil di Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Botol susu, blender, atau steamer hanya kami sebut jika listing Shopee himoonbabykids menampilkannya — jangan percaya stok dari judul kategori saja. Etalase shop category Shopee untuk peralatan bisa tidak tampil; percayai kartu produk di halaman ini lalu checkout himoonbabykids. Kami bukan klinik gizi. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)} — tisu Paseo ${formatPrice(extras?.paseoPrice ?? minPrice)}; saringan MPASI ${formatPrice(extras?.saringanPrice ?? maxPrice)}`,
      },
      {
        label: "Yang termasuk",
        value:
          "Saringan MPASI stainless Ceko + tisu bayi Paseo original. Botol/blender/steamer hanya jika listing Shopee ada.",
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
          id: "Apakah HiMoon jual peralatan bayi?",
          en: "Does HiMoon sell baby equipment?",
        },
        answer: {
          id: `Ya. Katalog /shop/peralatan-bayi saat ini ${idrRange(minPrice, maxPrice)}: tisu bayi Paseo ${formatPrice(extras?.paseoPrice ?? minPrice)} dan saringan MPASI Ceko stainless ${formatPrice(extras?.saringanPrice ?? maxPrice)}, mengikuti Shopee himoonbabykids. Lihat kartu produk di bawah, lalu Beli di Shopee untuk stok live.`,
          en: `Yes. The /shop/peralatan-bayi catalog is currently ${idrRange(minPrice, maxPrice)}: Paseo baby tissue ${formatPrice(extras?.paseoPrice ?? minPrice)} and the Ceko stainless MPASI strainer ${formatPrice(extras?.saringanPrice ?? maxPrice)}, following Shopee himoonbabykids. Use Buy on Shopee on the cards below for live stock.`,
        },
      },
      {
        question: {
          id: "Ada botol susu, blender, atau steamer?",
          en: "Do you sell bottles, blenders, or steamers?",
        },
        answer: {
          id: "Botol susu, blender, dan steamer hanya kami jual jika listing Shopee himoonbabykids menampilkannya. Etalase kategori ini saat ini adalah saringan MPASI dan tisu Paseo. Jangan percaya stok alat masak lain dari halaman ini jika kartu produknya tidak ada — percayai Shopee.",
          en: "Bottles, blenders, and steamers are only sold when the himoonbabykids Shopee listing shows them. This category currently lists the MPASI strainer and Paseo tissue. Do not assume other cookware stock from this page if the product card is missing — trust Shopee.",
        },
      },
      {
        question: {
          id: "Ambil di toko atau kirim Shopee?",
          en: "Pickup or Shopee delivery?",
        },
        answer: {
          id: "Ambil di HiMoon, Kabupaten Badung, Bali. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat checkout Shopee himoonbabykids agar ongkir live. WhatsApp hanya untuk tanya stok toko.",
          en: "Pick up at HiMoon in Badung Regency, Bali. Ship to Denpasar, Canggu, Kuta, Ubud, or outside Bali via Shopee himoonbabykids so shipping is live. WhatsApp is only for in-store stock questions.",
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
          id: "Apakah harga peralatan sudah termasuk ongkir?",
          en: "Is shipping included in the equipment price?",
        },
        answer: {
          id: `Tidak. Harga katalog tisu Paseo ${formatPrice(extras?.paseoPrice ?? minPrice)} dan saringan MPASI ${formatPrice(extras?.saringanPrice ?? maxPrice)} belum termasuk ongkir. Ongkir dihitung Shopee saat checkout.`,
          en: `No. Catalog prices for Paseo tissue ${formatPrice(extras?.paseoPrice ?? minPrice)} and the MPASI strainer ${formatPrice(extras?.saringanPrice ?? maxPrice)} do not include shipping. Shopee calculates shipping at checkout.`,
        },
      },
    ],
  },
};
