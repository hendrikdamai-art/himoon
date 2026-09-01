function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://www.himoonbaby.com";
}

export const siteConfig = {
  name: "HiMoon Baby & Kids",
  nameShort: "HiMoon",
  businessName: "HiMoon Mom, Baby & Kids Shop",
  tagline: {
    id: "Toko perlengkapan bayi, anak & ibu menyusui di Bali",
    en: "Baby, kids & nursing essentials shop in Bali",
  },
  description: {
    id: "HiMoon Baby & Kids menjual MPASI, keperluan bayi, dan anak. Toko kami berlokasi di Bali dengan toko fisik dan toko online Shopee. Penjual terpercaya dengan produk berkualitas dari brand lokal dan internasional.",
    en: "HiMoon Baby & Kids sells complementary foods (MPASI), baby essentials, and kids products. We are based in Bali with a physical store and Shopee online shop. A trusted seller offering quality products from local and international brands.",
  },
  url: getSiteUrl(),
  locale: "id_ID",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628511214358",
  shopeeShopUrl: "https://shopee.co.id/himoonbabykids",
  shopeeShopId: 1869688077,
  shopeeUsername: "himoonbabykids",
  googleMapsShareUrl: "https://share.google/XCsGX1ahJGslLnNMi",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=HiMoon+Mom,+Baby+%26+Kids+Shop",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=HiMoon+Mom,+Baby+%26+Kids+Shop&hl=id&z=16&output=embed",
  googleKnowledgeGraphId: "/g/11nqpf1l07",
  email: "adminhimoon@gmail.com",
  location: {
    id: "Kab. Badung, Bali, Indonesia",
    en: "Badung Regency, Bali, Indonesia",
  },
  social: {
    shopee: "https://shopee.co.id/himoonbabykids",
  },
} as const;

export const shopCategories = [
  {
    slug: "mpasi",
    shopeeCategoryId: 276164519,
    label: { id: "MPASI", en: "Complementary Food (MPASI)" },
    description: {
      id: "Beli MPASI Bunda Elia dan nutrisi pendamping ASI di Bali. Harga katalog mulai ± Rp45.000, checkout Shopee himoonbabykids.",
      en: "Buy Bunda Elia MPASI and complementary feeding products in Bali. Catalog from ± Rp45,000, checkout on Shopee himoonbabykids.",
    },
  },
  {
    slug: "baby-skincare",
    shopeeCategoryId: 276164516,
    label: { id: "Perawatan Kulit Bayi", en: "Baby Skincare" },
    description: {
      id: "Beli sunscreen bayi Moell, lotion Gently, dan skincare sensitif. Moell 30gr katalog Rp79.000 di Shopee HiMoon.",
      en: "Buy Moell baby sunscreen, Gently lotion, and sensitive-skin care. Moell 30g catalog Rp79,000 on HiMoon Shopee.",
    },
  },
  {
    slug: "popok",
    shopeeCategoryId: 276164518,
    label: { id: "Popok & Pispot", en: "Diapers & Potty" },
    description: {
      id: "Beli popok bayi Makuku dan MamyPoko di Bali. Katalog ± Rp65.000, stok live di Shopee himoonbabykids.",
      en: "Buy Makuku and MamyPoko baby diapers in Bali. Catalog ± Rp65,000, live stock on Shopee himoonbabykids.",
    },
  },
  {
    slug: "peralatan-bayi",
    shopeeCategoryId: 276164517,
    label: { id: "Peralatan Bayi", en: "Baby Equipment" },
    description: {
      id: "Peralatan MPASI, blender, steamer, dan botol bayi. Katalog peralatan ± Rp125.000 di Shopee HiMoon Bali.",
      en: "MPASI tools, blenders, steamers, and baby bottles. Equipment catalog ± Rp125,000 on HiMoon Bali Shopee.",
    },
  },
  {
    slug: "treatment-bibir",
    shopeeCategoryId: 276164520,
    label: { id: "Treatment Bibir", en: "Lip Care" },
    description: {
      id: "Treatment bibir bayi dan anak. Katalog ± Rp35.000, original di toko Badung dan Shopee HiMoon.",
      en: "Baby and kids lip care. Catalog ± Rp35,000, authentic at the Badung store and HiMoon Shopee.",
    },
  },
] as const;

export type ShopCategorySlug = (typeof shopCategories)[number]["slug"];
