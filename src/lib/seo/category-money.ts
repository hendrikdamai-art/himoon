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
  mamypokoPrice?: number;
  gentlyRashCreamPrice?: number;
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
  popok: {
    fallbackMinPrice: 123000,
    fallbackMaxPrice: 123000,
    dateModified: "2026-11-26",
    keywords: [
      "popok bayi Bali",
      "popok MamyPoko",
      "MamyPoko Royal Soft",
      "popok Makuku",
      "popok bayi overnight",
      "beli popok bayi online",
    ],
    clusterSlugs: [
      "tips-memilih-popok-bayi",
      "makuku-vs-mamypoko",
      "perlengkapan-bayi-baru-lahir",
    ],
    title: (_minPrice, _maxPrice, extras) =>
      `Popok Bayi Bali | MamyPoko ${formatPrice(extras?.mamypokoPrice ?? 123000)}`,
    description: (_minPrice, _maxPrice, extras) =>
      `Beli popok bayi di HiMoon Badung: MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? 123000)}. Makuku SAP listing ada — harga cek Shopee, bukan angka di judul. Ambil Abianbase/Mengwi atau kirim himoonbabykids.`,
    h1: (_minPrice, _maxPrice, extras) =>
      `Beli popok bayi di Bali: MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? 123000)}`,
    speakable: (_minPrice, _maxPrice, extras) =>
      `Kategori Popok di baby shop HiMoon Bali menampilkan popok yang sama dengan etalase Shopee himoonbabykids. ${extras?.productCount ?? 0} item di halaman ini, ${extras?.pricedCount ?? 0} punya harga katalog. Harga situs: MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? 123000)}. Makuku SAP Comfort Fit ada di grid dengan tombol Cek harga di Shopee — kami tidak menempel IDR Makuku sampai listing punya harga. Yang termasuk: popok original sesuai listing, bantuan pilih ukuran via WhatsApp, opsi ambil di Jl. Cica - Abianbase No.11b, Abianbase, Mengwi, Kabupaten Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Tidak termasuk: pispot, cloth diaper, klaim pemenang Makuku vs MamyPoko, krim ruam (itu Perawatan Kulit Bayi), dan ongkir. Isi pack dan ukuran ikuti judul listing Shopee. Pilih kartu, lalu tombol oranye Beli di Shopee. WhatsApp hanya untuk tanya stok toko Bali.`,
    facts: (minPrice, maxPrice, extras) => [
      {
        label: "Harga katalog",
        value: `MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? 123000)}${minPrice !== maxPrice ? ` · rentang ${idrRange(minPrice, maxPrice)}` : ""}. ${extras?.pricedCount ?? 0}/${extras?.productCount ?? 0} item punya harga situs; Makuku SAP cek Shopee.`,
      },
      {
        label: "Yang termasuk",
        value:
          "Popok MamyPoko Royal Soft dan listing Makuku SAP sesuai etalase. Bukan pispot. Krim ruam Gently ada di Perawatan Kulit Bayi.",
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
    faqs: (_minPrice, _maxPrice, extras) => [
      {
        question: {
          id: "Apakah HiMoon jual popok bayi?",
          en: "Does HiMoon sell baby diapers?",
        },
        answer: {
          id: `Ya. Katalog /shop/popok menampilkan ${extras?.productCount ?? 0} item: MamyPoko Royal Soft ${formatPrice(extras?.mamypokoPrice ?? 123000)} dan Makuku SAP Comfort Fit (harga live di Shopee). Bukan toko pispot. Klik Beli di Shopee pada kartu untuk stok dan ukuran live.`,
          en: `Yes. /shop/popok lists ${extras?.productCount ?? 0} items: MamyPoko Royal Soft at ${formatPrice(extras?.mamypokoPrice ?? 123000)} and Makuku SAP Comfort Fit (live Shopee price). We are not a potty shop. Use Buy on Shopee on each card for live stock and size.`,
        },
      },
      {
        question: {
          id: "Berapa harga MamyPoko Royal Soft di HiMoon?",
          en: "How much is MamyPoko Royal Soft at HiMoon?",
        },
        answer: {
          id: `Harga katalog situs saat ini ${formatPrice(extras?.mamypokoPrice ?? 123000)} untuk MamyPoko Royal Soft. Makuku SAP: cek harga di Shopee — kami tidak menulis IDR sampai listing berharga. Isi pack dan ukuran ada di judul listing. Promo bisa berubah. Ongkir tidak termasuk.`,
          en: `Current on-site catalog is ${formatPrice(extras?.mamypokoPrice ?? 123000)} for MamyPoko Royal Soft. Makuku SAP: check the Shopee price — we do not publish IDR until the listing is priced. Pack count and size are in the listing title. Promos can change. Shipping is extra.`,
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
          id: "Ada krim ruam popok di kategori ini?",
          en: "Is diaper rash cream in this category?",
        },
        answer: {
          id: `Tidak di grid popok. Gently Baby Rash Cream katalog ${formatPrice(extras?.gentlyRashCreamPrice ?? 71000)} ada di kategori Perawatan Kulit Bayi. Buka /shop/perawatan-kulit-bayi, lalu Beli di Shopee.`,
          en: `Not on the diaper grid. Gently Baby Rash Cream is catalogued at ${formatPrice(extras?.gentlyRashCreamPrice ?? 71000)} in Baby Skincare. Open /shop/perawatan-kulit-bayi, then Buy on Shopee.`,
        },
      },
    ],
  },
};
