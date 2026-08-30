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
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://himoonbabykids.com",
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
      id: "Nutrisi MPASI dan makanan bayi berkualitas untuk tumbuh kembang optimal.",
      en: "Quality complementary foods and baby nutrition for healthy growth.",
    },
  },
  {
    slug: "baby-skincare",
    shopeeCategoryId: 276164516,
    label: { id: "Perawatan Kulit Bayi", en: "Baby Skincare" },
    description: {
      id: "Produk perawatan kulit sensitif bayi dan anak dari brand terpercaya.",
      en: "Skincare for sensitive baby and kids skin from trusted brands.",
    },
  },
  {
    slug: "popok",
    shopeeCategoryId: 276164518,
    label: { id: "Popok & Pispot", en: "Diapers & Potty" },
    description: {
      id: "Popok dan perlengkapan toilet training untuk kenyamanan si kecil.",
      en: "Diapers and potty training essentials for your little one.",
    },
  },
  {
    slug: "peralatan-bayi",
    shopeeCategoryId: 276164517,
    label: { id: "Peralatan Bayi", en: "Baby Equipment" },
    description: {
      id: "Peralatan makan, masak, dan kebutuhan bayi sehari-hari.",
      en: "Feeding, cooking, and everyday baby equipment.",
    },
  },
  {
    slug: "treatment-bibir",
    shopeeCategoryId: 276164520,
    label: { id: "Treatment Bibir", en: "Lip Care" },
    description: {
      id: "Perawatan bibir lembut dan aman untuk bayi dan anak.",
      en: "Gentle and safe lip care for babies and children.",
    },
  },
] as const;

export type ShopCategorySlug = (typeof shopCategories)[number]["slug"];
