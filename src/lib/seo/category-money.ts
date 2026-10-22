import { formatPrice } from "@/lib/utils";
import type { GuideFaq } from "@/types/catalog";
import type { ShopCategorySlug } from "@/lib/site-config";

export type CategoryQuickFact = {
  label: string;
  value: string;
};

export type CategoryMoneyExtras = {
  beemeBalmPrice?: number;
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
  "perawatan-bibir": {
    fallbackMinPrice: 70000,
    fallbackMaxPrice: 70000,
    dateModified: "2026-10-22",
    keywords: [
      "lip balm bayi",
      "perawatan bibir bayi",
      "pelembap bibir anak",
      "Beeme Honey Lollipop Balm",
      "lip balm bayi Bali",
      "treatment bibir bayi",
    ],
    clusterSlugs: [
      "perawatan-kulit-bayi-sensitif",
      "perlengkapan-bayi-baru-lahir",
      "beli-sunscreen-bayi",
    ],
    title: (minPrice, maxPrice) =>
      `Perawatan Bibir Bayi Beeme ${idrRange(minPrice, maxPrice)} | Baby Shop Bali`,
    description: (minPrice, maxPrice) =>
      `Beli pelembap bibir bayi Beeme Honey Lollipop Balm ${idrRange(minPrice, maxPrice)} di baby shop HiMoon Badung. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar, Canggu, dan luar Bali. Balm tubuh Beeme ada di Perawatan Kulit Bayi.`,
    h1: (minPrice, maxPrice) =>
      `Perawatan bibir bayi di baby shop Bali — Beeme Honey Lollipop Balm ${idrRange(minPrice, maxPrice)}`,
    speakable: (minPrice, maxPrice, extras) =>
      `Kategori Perawatan Bibir di baby shop HiMoon Bali menampilkan item yang sama dengan etalase Treatment Bibir Shopee himoonbabykids (1 listing). Harga katalog ${idrRange(minPrice, maxPrice)}: Beeme Honey Lollipop Balm ${formatPrice(extras?.beemeBalmPrice ?? minPrice)}. Yang termasuk: pelembap bibir original sesuai listing, bantuan pilih via WhatsApp, opsi ambil di Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Label Beeme menyebut pemakaian 6 bulan+; ikuti kemasan, kami bukan klinik. Balm tubuh Beeme Nourishing bukan kategori ini — lihat Perawatan Kulit Bayi. Lip balm merek lain hanya kami sebut jika listing Shopee menampilkannya. Pilih produk di grid, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `${idrRange(minPrice, maxPrice)} — Beeme Honey Lollipop Balm, stok live Shopee Treatment Bibir (1 item)`,
      },
      {
        label: "Yang termasuk",
        value: `Pelembap bibir Beeme Honey Lollipop Balm original ${formatPrice(extras?.beemeBalmPrice ?? minPrice)} sesuai listing. Bantuan pilih via WhatsApp.`,
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
          id: "Apakah HiMoon jual perawatan bibir bayi?",
          en: "Does HiMoon sell baby lip care?",
        },
        answer: {
          id: `Ya. Katalog /shop/perawatan-bibir saat ini ${idrRange(minPrice, maxPrice)}: Beeme Honey Lollipop Balm ${formatPrice(extras?.beemeBalmPrice ?? minPrice)}, mengikuti etalase Treatment Bibir Shopee himoonbabykids (1 listing). Lihat kartu produk di bawah, lalu Beli di Shopee untuk stok live.`,
          en: `Yes. The /shop/perawatan-bibir catalog is currently ${idrRange(minPrice, maxPrice)}: Beeme Honey Lollipop Balm ${formatPrice(extras?.beemeBalmPrice ?? minPrice)}, matching the himoonbabykids Shopee Treatment Bibir tab (1 listing). Use Buy on Shopee on the card below for live stock.`,
        },
      },
      {
        question: {
          id: "Beeme Nourishing Balm termasuk perawatan bibir?",
          en: "Is Beeme Nourishing Balm lip care?",
        },
        answer: {
          id: "Tidak. Beeme Nourishing Balm adalah balm tubuh/pelembap di kategori Perawatan Kulit Bayi. Kategori ini hanya pelembap bibir — saat ini Beeme Honey Lollipop Balm. Lip balm merek lain hanya jika listing Shopee ada.",
          en: "No. Beeme Nourishing Balm is a body/skin balm in Baby Skincare. This category is lip care only — currently Beeme Honey Lollipop Balm. Other lip balm brands only if Shopee lists them.",
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
          id: "Klik Beli di Shopee pada kartu produk, atau buka etalase Treatment Bibir himoonbabykids. WhatsApp hanya untuk tanya stok toko Bali.",
          en: "Use Buy on Shopee on each product card, or open the himoonbabykids Treatment Bibir shop tab. WhatsApp is for Bali in-store stock questions.",
        },
      },
      {
        question: {
          id: "Apakah harga Beeme Lollipop Balm sudah termasuk ongkir?",
          en: "Is shipping included in the Beeme Lollipop Balm price?",
        },
        answer: {
          id: `Tidak. Harga katalog Beeme Honey Lollipop Balm ${formatPrice(extras?.beemeBalmPrice ?? minPrice)} belum termasuk ongkir. Ongkir dihitung Shopee saat checkout.`,
          en: `No. The catalog price for Beeme Honey Lollipop Balm ${formatPrice(extras?.beemeBalmPrice ?? minPrice)} does not include shipping. Shopee calculates shipping at checkout.`,
        },
      },
    ],
  },
};
