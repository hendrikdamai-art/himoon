import { siteConfig } from "@/lib/site-config";

/**
 * Commercial-intent keyword map for Indonesia (pregnant moms, new moms, baby shoppers).
 * Chosen for rankability vs national marketplace giants: local Bali + product long-tails
 * that match HiMoon's Shopee catalog (MPASI, sunscreen, diapers, nursing).
 */
export const keywordStrategy = {
  money: {
    primary: "Baby Shop Bali",
    secondary: [
      "Baby Shop",
      "toko perlengkapan bayi Bali",
      "toko bayi Bali",
      "beli perlengkapan bayi online",
      "perlengkapan bayi Shopee",
      "beli sabun bayi",
      "beli lotion bayi",
    ],
    pagePath: "/shop",
  },
  clusters: [
    {
      query: "perlengkapan bayi baru lahir",
      intent: "commercial",
      why: "Kuma Baby Shop and other Bali baby shops rank for newborn checklists; HiMoon converts that list to Shopee.",
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
    {
      query: "beli sabun bayi",
      intent: "commercial",
      why: "Kuma Baby Shop Bath and Potty collection; HiMoon sells Moell, Gently, Beeme wash on Shopee.",
      path: "/blog/beli-sabun-bayi",
    },
    {
      query: "beli lotion bayi",
      intent: "commercial",
      why: "Kuma Hair & Skin Care overlap; HiMoon stocks Beeme, Gently, Moell lotion.",
      path: "/blog/beli-lotion-bayi",
    },
    {
      query: "hair lotion bayi",
      intent: "commercial",
      why: "Kuma Hair & Skin Care; three 100ml SKUs in the HiMoon catalog.",
      path: "/blog/hair-lotion-bayi",
    },
    {
      query: "krim ruam popok",
      intent: "commercial",
      why: "New-mom repeat buy next to diapers; Gently rash cream is in catalog.",
      path: "/blog/krim-ruam-popok",
    },
    {
      query: "sabun bayi non SLS",
      intent: "comparison",
      why: "Bath comparison asset vs Kuma’s broader bath wall; method page is linkable.",
      path: "/blog/sabun-bayi-non-sls",
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
      id: "HiMoon adalah baby shop / toko perlengkapan bayi, anak, dan ibu menyusui di Kabupaten Badung, Bali. Kami menjual MPASI, popok, sabun bayi, lotion, sunscreen, peralatan makan, dan kebutuhan ibu. Belanja bisa di toko fisik, WhatsApp, atau langsung di Shopee himoonbabykids.",
      en: "HiMoon is a baby shop in Badung Regency, Bali. We sell MPASI, diapers, baby skincare, feeding gear, and nursing essentials. Shop in-store, via WhatsApp, or on Shopee at himoonbabykids.",
    },
  },
  {
    question: {
      id: "Berapa harga perlengkapan bayi di HiMoon?",
      en: "How much do baby essentials cost at HiMoon?",
    },
    answer: {
      id: "Harga baby shop HiMoon mengikuti katalog Shopee himoonbabykids. Di situs ini rentang katalog saat ini sekitar Rp22.500–Rp123.000, tergantung produk (tisu Paseo, saringan MPASI, sabun, lotion, sunscreen, MPASI, atau popok). Cek Shopee untuk stok dan promo terbaru sebelum checkout.",
      en: "Prices follow the himoonbabykids Shopee catalog. Current on-site range is about Rp22,500–Rp123,000 depending on the item. Always confirm live stock and promos on Shopee before checkout.",
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
  {
    question: {
      id: "Apakah HiMoon jual sabun dan lotion bayi seperti baby shop Denpasar?",
      en: "Do you sell baby wash and lotion like Denpasar baby shops?",
    },
    answer: {
      id: "Ya, untuk merek di etalase kami: Moell, Gently, dan Beeme (sabun, lotion, hair lotion, sunscreen). Kami tidak mengklaim stroller, car seat, atau fashion lengkap seperti baby shop one-stop Denpasar. Lihat panduan beli sabun bayi dan beli lotion bayi, lalu checkout Shopee.",
      en: "Yes, for brands we list: Moell, Gently, and Beeme (wash, lotion, hair lotion, sunscreen). We do not claim strollers, car seats, or a full fashion wall like a Denpasar one-stop shop. See the baby wash and lotion guides, then checkout on Shopee.",
    },
  },
] as const;
