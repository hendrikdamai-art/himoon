import { siteConfig } from "@/lib/site-config";

/**
 * Commercial-intent keyword map for Indonesia (pregnant moms, new moms, baby shoppers).
 * Chosen for rankability vs national marketplace giants: local Bali + product long-tails
 * that match HiMoon's Shopee catalog (MPASI, sunscreen, diapers, nursing).
 */
export const keywordStrategy = {
  money: {
    primary: "toko perlengkapan bayi Bali",
    secondary: [
      "beli perlengkapan bayi online",
      "toko bayi Badung",
      "perlengkapan bayi Shopee",
    ],
    pagePath: "/shop",
  },
  clusters: [
    {
      query: "perlengkapan bayi baru lahir",
      intent: "commercial",
      why: "Ibu hamil & new mom compiling a shopping list; high conversion to Shopee.",
      path: "/blog/perlengkapan-bayi-baru-lahir",
    },
    {
      query: "beli sunscreen bayi",
      intent: "commercial",
      why: "Shopee-dominant category; HiMoon stocks Moell, a searched brand.",
      path: "/blog/beli-sunscreen-bayi",
    },
    {
      query: "toko MPASI Bali",
      intent: "commercial-local",
      why: "MPASI Store Bali owns the generic head term; we compete on Badung + Shopee + Bunda Elia.",
      path: "/blog/toko-mpasi-bali",
    },
    {
      query: "Makuku vs MamyPoko",
      intent: "comparison",
      why: "High-intent diaper research; both brands are in the HiMoon catalog.",
      path: "/blog/makuku-vs-mamypoko",
    },
    {
      query: "ASI booster ibu menyusui",
      intent: "commercial",
      why: "Repeat-buy supplement + nursing kit for new moms.",
      path: "/blog/asi-booster-ibu-menyusui",
    },
  ],
} as const;

export const moneyPageFaqs = [
  {
    question: {
      id: "Apa itu HiMoon Baby & Kids?",
      en: "What is HiMoon Baby & Kids?",
    },
    answer: {
      id: "HiMoon adalah toko perlengkapan bayi, anak, dan ibu menyusui di Kabupaten Badung, Bali. Kami menjual MPASI, popok, skincare bayi, peralatan makan, dan kebutuhan ibu. Belanja bisa di toko fisik, WhatsApp, atau langsung di Shopee himoonbabykids.",
      en: "HiMoon is a baby, kids, and nursing shop in Badung Regency, Bali. We sell MPASI, diapers, baby skincare, feeding gear, and nursing essentials. Shop in-store, via WhatsApp, or on Shopee at himoonbabykids.",
    },
  },
  {
    question: {
      id: "Berapa harga perlengkapan bayi di HiMoon?",
      en: "How much do baby essentials cost at HiMoon?",
    },
    answer: {
      id: "Harga mengikuti katalog Shopee himoonbabykids. Di situs ini rentang katalog saat ini sekitar Rp28.000–Rp125.000, tergantung produk (tissue, lotion, sunscreen, MPASI, popok, atau peralatan). Cek Shopee untuk stok dan promo terbaru sebelum checkout.",
      en: "Prices follow the himoonbabykids Shopee catalog. Current on-site range is about Rp28,000–Rp125,000 depending on the item. Always confirm live stock and promos on Shopee before checkout.",
    },
  },
  {
    question: {
      id: "Apa yang termasuk jika saya belanja di HiMoon?",
      en: "What is included when I shop at HiMoon?",
    },
    answer: {
      id: "Termasuk: produk original dari brand yang kami jual, bantuan pilih ukuran/jenis via WhatsApp, opsi ambil di toko Bali atau kirim lewat Shopee, dan tautan checkout ke item Shopee yang sama. Tidak termasuk klaim medis; kami toko ritel, bukan klinik.",
      en: "Included: authentic branded products we carry, WhatsApp help choosing size or type, Bali pickup or Shopee delivery, and checkout links to the matching Shopee item. We are a retailer, not a clinic — no medical claims.",
    },
  },
  {
    question: {
      id: "Bagaimana cara beli biar langsung ke Shopee?",
      en: "How do I buy so I land on Shopee?",
    },
    answer: {
      id: `Klik tombol oranye "Beli di Shopee" pada produk atau buka ${siteConfig.shopeeShopUrl}. Untuk pertanyaan stok di Bali, chat WhatsApp ${siteConfig.whatsappNumber}.`,
      en: `Use the orange "Buy on Shopee" button on any product or open ${siteConfig.shopeeShopUrl}. For Bali in-store stock questions, WhatsApp ${siteConfig.whatsappNumber}.`,
    },
  },
  {
    question: {
      id: "Apakah HiMoon kirim ke luar Bali?",
      en: "Does HiMoon ship outside Bali?",
    },
    answer: {
      id: "Ya. Pesanan Shopee mengikuti jangkauan pengiriman Shopee ke seluruh Indonesia. Pelanggan di Denpasar, Canggu, Kuta, Ubud, dan Badung juga bisa pilih ambil di toko atau kirim lokal via Shopee.",
      en: "Yes. Shopee orders follow Shopee’s Indonesia shipping coverage. Shoppers in Denpasar, Canggu, Kuta, Ubud, and Badung can also pick up in-store or use local Shopee delivery.",
    },
  },
] as const;
