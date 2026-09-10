import type { BlogPost } from "@/types/catalog";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

/**
 * Commercial guides targeting Kuma Baby Shop collections we can actually sell:
 * Hair & Skin Care + Bath (not stroller / car seat / clothing).
 */
export const bathSkinGuides: BlogPost[] = [
  {
    slug: "beli-sabun-bayi",
    phase: "month1",
    query: {
      id: "beli sabun bayi",
      en: "buy baby body wash",
    },
    title: {
      id: "Beli Sabun Bayi di Bali: Moell, Gently, Beeme + Harga Shopee",
      en: "Buy Baby Body Wash in Bali: Moell, Gently, Beeme + Shopee Prices",
    },
    excerpt: {
      id: "Sabun bayi non-SLS di baby shop HiMoon Badung: Moell, Gently, dan Beeme. Harga katalog dan checkout Shopee himoonbabykids.",
      en: "Non-SLS baby wash at HiMoon Badung: Moell, Gently, and Beeme. Catalog prices and Shopee himoonbabykids checkout.",
    },
    speakable: {
      id: "Sabun bayi dicari ibu hamil dan new mom yang ingin mencuci tubuh serta rambut bayi tanpa SLS berat, apalagi di iklim panas lembap Bali. HiMoon Baby & Kids di Kabupaten Badung menjual Moell Gentle Body Wash 185ml seharga Rp72.000, refill Moell 500 gram Rp100.000, Gently Ultra Soft Body Wash dan Shampoo 250 gram Rp76.000 plus refill Rp58.000, serta Beeme Honey Bee Bubble Wash 250ml Rp87.000. Harga mengikuti etalase Shopee himoonbabykids dan bisa berubah saat promo. Pilih tekstur cair atau busa sesuai usia minimum di label merek; kami toko ritel, bukan dokter kulit. Belanja di toko fisik, WhatsApp, atau tombol Beli di Shopee agar stok live. Tidak termasuk janji kulit bebas ruam. Gabungkan dengan lotion setelah mandi jika kulit kering. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat kurir Shopee. Simpan tautan himoonbabykids untuk restock sabun rutin.",
      en: "Parents searching to buy baby wash in Bali want a gentle cleanser for hot, humid weather. HiMoon Baby & Kids in Badung sells Moell Gentle Body Wash 185ml at Rp72,000, Moell 500g refill at Rp100,000, Gently Ultra Soft Wash 250g at Rp76,000 plus refill Rp58,000, and Beeme Honey Bee Bubble Wash 250ml at Rp87,000. Prices follow Shopee himoonbabykids. Follow the brand age label; we are a retailer, not a dermatologist. Shop in-store, WhatsApp, or Buy on Shopee for live stock. Shipping to Denpasar and beyond uses Shopee couriers.",
    },
    content: {
      id: "Kompetitor baby shop Denpasar sering menumpuk koleksi Bath and Potty lengkap. HiMoon fokus sabun dan sampo yang memang ada di etalase Shopee himoonbabykids — lalu checkout ke toko yang sama.",
      en: "Denpasar baby shops often stack a full Bath and Potty wall. HiMoon focuses on washes that are actually listed on Shopee himoonbabykids — then checkout that same shop.",
    },
    sections: [
      {
        heading: { id: "SKU sabun yang kami jual", en: "Washes we sell" },
        body: {
          id: "Moell Gentle Body Wash 185ml Rp72.000 dan refill 500gr Rp100.000; Gently Ultra Soft Body Wash & Shampoo 250gr Rp76.000 dan refill Rp58.000; Beeme Honey Bee Bubble Wash 250ml Rp87.000; Beeme Natural Soap 3in1 Rp90.000. Baca usia di kemasan sebelum dipakai newborn.",
          en: "Moell Gentle Body Wash 185ml Rp72,000 and 500g refill Rp100,000; Gently Ultra Soft 250g Rp76,000 and refill Rp58,000; Beeme Honey Bee Bubble Wash 250ml Rp87,000; Beeme Natural Soap 3-in-1 Rp90,000. Read the age line before using on a newborn.",
        },
      },
      {
        heading: { id: "Cara pilih di iklim Bali", en: "How to choose in Bali" },
        body: {
          id: "Cuaca panas membuat kulit mudah kering setelah mandi. Pilih klaim non-SLS di label jika kulit mudah merah, lalu oles lotion. Ini bukan diagnosis; ruam parah ke tenaga kesehatan.",
          en: "Heat can dry skin after a bath. Choose a labeled non-SLS wash if skin reddens easily, then moisturize. This is not a diagnosis; severe rash needs a clinician.",
        },
      },
      {
        heading: { id: "Cara order ke Shopee", en: "How to order on Shopee" },
        body: {
          id: "Buka [kategori perawatan kulit bayi](/shop/perawatan-kulit-bayi), pilih sabun, lalu Beli di Shopee. Atau tanya stok toko Badung via WhatsApp. Halaman belanja utama: [Baby Shop Bali](/shop).",
          en: "Open [baby skincare](/shop/perawatan-kulit-bayi), pick a wash, then Buy on Shopee. Or WhatsApp Badung stock. Money page: [Baby Shop Bali](/shop).",
        },
      },
    ],
    inclusions: {
      id: [
        "Moell Gentle Body Wash 185ml (katalog Rp72.000) + refill 500gr Rp100.000",
        "Gently Ultra Soft wash 250gr Rp76.000 + refill Rp58.000",
        "Beeme Bubble Wash 250ml Rp87.000 / sabun 3in1 Rp90.000",
        "Bantuan pilih via WhatsApp",
        "Checkout Shopee himoonbabykids atau ambil Badung",
      ],
      en: [
        "Moell Gentle Body Wash 185ml (catalog Rp72,000) + 500g refill Rp100,000",
        "Gently Ultra Soft wash 250g Rp76,000 + refill Rp58,000",
        "Beeme Bubble Wash 250ml Rp87,000 / 3-in-1 soap Rp90,000",
        "WhatsApp help choosing",
        "Shopee himoonbabykids checkout or Badung pickup",
      ],
    },
    priceNote: {
      id: "Sabun katalog: Gently refill Rp58.000; Moell 185ml Rp72.000; Gently botol Rp76.000; Beeme bubble Rp87.000; Beeme 3in1 Rp90.000; Moell refill Rp100.000. Harga final di Shopee.",
      en: "Wash catalog: Gently refill Rp58,000; Moell 185ml Rp72,000; Gently bottle Rp76,000; Beeme bubble Rp87,000; Beeme 3-in-1 Rp90,000; Moell refill Rp100,000. Final price on Shopee.",
    },
    faqs: [
      {
        question: { id: "Di mana beli sabun bayi original di Bali?", en: "Where to buy authentic baby wash in Bali?" },
        answer: {
          id: "Di toko HiMoon Kabupaten Badung atau Shopee himoonbabykids. Hindari listing tanpa toko jelas jika ragu keaslian.",
          en: "At HiMoon in Badung Regency or Shopee himoonbabykids. Avoid unclear listings if authenticity is in doubt.",
        },
      },
      {
        question: { id: "Berapa harga sabun bayi di HiMoon?", en: "How much is baby wash at HiMoon?" },
        answer: {
          id: "Katalog saat ini Rp58.000–Rp100.000 tergantung merek dan isi. Konfirmasi di Shopee sebelum bayar.",
          en: "Current catalog is Rp58,000–Rp100,000 depending on brand and size. Confirm on Shopee before paying.",
        },
      },
      {
        question: { id: "Sabun bayi bisa untuk newborn?", en: "Can newborns use these washes?" },
        answer: {
          id: "Ikuti usia minimum di label Moell, Gently, atau Beeme. Kami tidak mengganti petunjuk merek.",
          en: "Follow the minimum age on the Moell, Gently, or Beeme label. We do not override brand directions.",
        },
      },
      {
        question: { id: "Bisa kirim sabun bayi ke luar Bali?", en: "Can you ship baby wash outside Bali?" },
        answer: {
          id: "Ya, lewat kurir Shopee di checkout himoonbabykids.",
          en: "Yes, via Shopee courier options at himoonbabykids checkout.",
        },
      },
    ],
    publishedAt: "2026-09-08",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: "/products/moell-gentle-body-wash-185ml-sabun-bayi-non-sls.jpg",
    imageAlt: {
      id: "Sabun bayi Moell di baby shop HiMoon Bali",
      en: "Moell baby body wash at HiMoon Bali baby shop",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: [
      "beli-lotion-bayi",
      "perawatan-kulit-bayi-sensitif",
      "sabun-bayi-non-sls",
    ],
  },
  {
    slug: "beli-lotion-bayi",
    phase: "month1",
    query: {
      id: "beli lotion bayi",
      en: "buy baby lotion",
    },
    title: {
      id: "Beli Lotion Bayi di Bali: Beeme, Gently, Moell + Harga",
      en: "Buy Baby Lotion in Bali: Beeme, Gently, Moell + Prices",
    },
    excerpt: {
      id: "Pelembap bayi untuk iklim Bali. Katalog HiMoon: Beeme Rp65.000, Moell Rp76.000, Gently Hydra Soft Rp93.000. Checkout Shopee himoonbabykids.",
      en: "Baby moisturizer for Bali’s climate. HiMoon catalog: Beeme Rp65,000, Moell Rp76,000, Gently Hydra Soft Rp93,000. Checkout on Shopee himoonbabykids.",
    },
    speakable: {
      id: "Lotion bayi dicari new mom setelah mandi dan di cuaca AC plus panas Bali yang membuat kulit kering. HiMoon Baby & Kids menjual Beeme Bee Gentle Baby Lotion 200ml Rp65.000, Moell Body Lotion 185ml Rp76.000, dan Gently Hydra Soft Body Lotion 150 gram Rp93.000, mengikuti Shopee himoonbabykids. Beeme Nourishing Balm 15 gram Rp81.000 dipakai sebagai balm area kecil, bukan pengganti lotion tubuh. Patch test di pergelangan jika kulit sangat sensitif. Kami toko ritel di Kabupaten Badung, bukan klinik dermatologi. Belanja di toko, WhatsApp, atau tombol Beli di Shopee untuk stok live. Tidak termasuk janji menghilangkan ruam. Kombinasikan dengan sabun lembut dan sunscreen jika keluar rumah sesuai label merek. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali lewat kurir Shopee. Simpan tautan himoonbabykids untuk beli ulang pelembap bayi setiap habis.",
      en: "Baby lotion is searched after baths and in Bali’s mix of AC and heat. HiMoon sells Beeme Bee Gentle Baby Lotion 200ml at Rp65,000, Moell Body Lotion 185ml at Rp76,000, and Gently Hydra Soft 150g at Rp93,000 on Shopee himoonbabykids. Beeme Nourishing Balm 15g at Rp81,000 is for small areas, not a full-body substitute. Patch test if skin is reactive. We are a Badung retailer, not a dermatology clinic. Shop in-store, WhatsApp, or Buy on Shopee. Ship via Shopee to Denpasar and beyond.",
    },
    content: {
      id: "Koleksi Hair & Skin Care di baby shop kompetitor Denpasar luas. Halaman ini hanya SKU pelembap yang HiMoon jual, lalu mengarah ke [Baby Shop](/shop) dan Shopee.",
      en: "Competitor Hair & Skin Care walls in Denpasar are broad. This page only covers moisturizers HiMoon sells, then sends you to the [Baby Shop](/shop) and Shopee.",
    },
    sections: [
      {
        heading: { id: "Harga lotion di katalog", en: "Catalog lotion prices" },
        body: {
          id: "Beeme Bee Gentle 200ml Rp65.000; Moell Body Lotion 185ml Rp76.000; Gently Hydra Soft 150gr Rp93.000; balm Beeme 15gr Rp81.000. Face cream Moell 40ml Rp80.000 dan Gently Face Cream 30gr Rp78.000 jika Anda butuh pelembap wajah terpisah.",
          en: "Beeme Bee Gentle 200ml Rp65,000; Moell Body Lotion 185ml Rp76,000; Gently Hydra Soft 150g Rp93,000; Beeme balm 15g Rp81,000. Moell face cream 40ml Rp80,000 and Gently Face Cream 30g Rp78,000 if you want a separate face moisturizer.",
        },
      },
      {
        heading: { id: "Kapan pakai lotion", en: "When to use lotion" },
        body: {
          id: "Oles tipis setelah mandi pada kulit kering. Jangan tumpuk banyak merek sekaligus. Ikuti label jika ada area yang harus dihindari.",
          en: "Apply a thin layer after a bath on dry skin. Do not stack many brands at once. Follow the label for areas to avoid.",
        },
      },
      {
        heading: { id: "Cara beli", en: "How to buy" },
        body: {
          id: "Buka [perawatan kulit bayi](/shop/perawatan-kulit-bayi) lalu Beli di Shopee. Bandingkan sabun di panduan [beli sabun bayi](/blog/beli-sabun-bayi).",
          en: "Open [baby skincare](/shop/perawatan-kulit-bayi) then Buy on Shopee. Compare washes in [buy baby wash](/blog/beli-sabun-bayi).",
        },
      },
    ],
    inclusions: {
      id: [
        "Beeme Bee Gentle Baby Lotion 200ml (katalog Rp65.000)",
        "Moell Body Lotion 185ml (katalog Rp76.000)",
        "Gently Hydra Soft 150gr (katalog Rp93.000)",
        "Opsi balm Beeme 15gr Rp81.000",
        "Checkout Shopee / ambil Badung",
      ],
      en: [
        "Beeme Bee Gentle Baby Lotion 200ml (catalog Rp65,000)",
        "Moell Body Lotion 185ml (catalog Rp76,000)",
        "Gently Hydra Soft 150g (catalog Rp93,000)",
        "Optional Beeme balm 15g Rp81,000",
        "Shopee checkout / Badung pickup",
      ],
    },
    priceNote: {
      id: "Lotion tubuh katalog Rp65.000–Rp93.000. Balm dan face cream terpisah Rp78.000–Rp81.000. Harga bisa berubah di Shopee.",
      en: "Body lotion catalog Rp65,000–Rp93,000. Separate balm and face creams Rp78,000–Rp81,000. Prices can change on Shopee.",
    },
    faqs: [
      {
        question: { id: "Lotion bayi mana yang paling ringan?", en: "Which baby lotion feels lightest?" },
        answer: {
          id: "Tidak ada pemenang lab. Coba pack yang ada di etalase dan lihat reaksi 24 jam. Kami tidak membuat rating palsu.",
          en: "There is no lab winner. Trial a listed pack and watch skin for 24 hours. We do not invent ratings.",
        },
      },
      {
        question: { id: "Berapa harga lotion bayi di HiMoon?", en: "Baby lotion price at HiMoon?" },
        answer: {
          id: "Beeme Rp65.000, Moell Rp76.000, Gently Hydra Soft Rp93.000 pada katalog saat ini.",
          en: "Beeme Rp65,000, Moell Rp76,000, Gently Hydra Soft Rp93,000 on the current catalog.",
        },
      },
      {
        question: { id: "Bisa dipakai ibu hamil?", en: "Can pregnant shoppers use it?" },
        answer: {
          id: "Beberapa listing Beeme menyebut aman untuk ibu hamil pada kemasan. Tetap baca label resmi merek, bukan klaim tambahan dari halaman ini.",
          en: "Some Beeme listings mention pregnancy-safe wording on pack. Still read the official brand label, not extra claims from this page.",
        },
      },
      {
        question: { id: "Order lotion via Shopee dari luar Bali?", en: "Order lotion on Shopee from outside Bali?" },
        answer: {
          id: "Bisa, jika kurir Shopee mendukung alamat Anda di checkout himoonbabykids.",
          en: "Yes, if Shopee’s courier supports your address at himoonbabykids checkout.",
        },
      },
    ],
    publishedAt: "2026-09-08",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: "/products/beeme-bee-gentle-baby-lotion-200ml-pelembap-bayi.jpg",
    imageAlt: {
      id: "Lotion bayi Beeme di HiMoon Baby & Kids",
      en: "Beeme baby lotion at HiMoon Baby & Kids",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: [
      "beli-sabun-bayi",
      "hair-lotion-bayi",
      "perawatan-kulit-bayi-sensitif",
    ],
  },
  {
    slug: "hair-lotion-bayi",
    phase: "month1",
    query: {
      id: "hair lotion bayi",
      en: "baby hair lotion",
    },
    title: {
      id: "Hair Lotion Bayi: Beeme, Gently, Moell — Harga & Cara Beli",
      en: "Baby Hair Lotion: Beeme, Gently, Moell — Price & How to Buy",
    },
    excerpt: {
      id: "Hair lotion bayi di baby shop HiMoon: Gently Rp55.000, Beeme Rp60.000, Moell Rp72.000. Order Shopee himoonbabykids atau toko Badung.",
      en: "Baby hair lotion at HiMoon baby shop: Gently Rp55,000, Beeme Rp60,000, Moell Rp72,000. Order on Shopee himoonbabykids or in Badung.",
    },
    speakable: {
      id: "Hair lotion bayi dicari orang tua yang ingin rambut bayi lebih mudah disisir setelah mandi, terutama di udara lembap Bali. HiMoon Baby & Kids menjual Gently Baby Hair Lotion 100ml Smooth Keratin Rp55.000, Beeme Daily Nourishing Hair Lotion 100ml Rp60.000, dan Moell Nourish Hair Lotion Everyday 100ml Rp72.000, mengikuti Shopee himoonbabykids. Ini perawatan rambut, bukan obat ketombe atau diagnosis kulit kepala. Ikuti usia di label; listing Beeme menyebut mulai sekitar tiga bulan. Toko fisik ada di Kabupaten Badung; checkout online lewat tombol Beli di Shopee agar stok live. Tidak termasuk janji rambut tebal atau tumbuh cepat. Kombinasikan dengan sabun atau sampo yang sama-sama ada di etalase, misalnya Moell Hair Shampoo refill 500ml Rp98.000. Kirim ke Denpasar, Canggu, dan luar Bali lewat kurir Shopee. Simpan tautan himoonbabykids untuk restock hair lotion.",
      en: "Baby hair lotion is searched by parents who want easier combing after baths in humid Bali. HiMoon sells Gently Baby Hair Lotion 100ml at Rp55,000, Beeme Daily Nourishing Hair Lotion 100ml at Rp60,000, and Moell Nourish Hair Lotion 100ml at Rp72,000 on Shopee himoonbabykids. This is hair care, not a scalp diagnosis. Follow the age on the label; Beeme’s listing mentions about three months. Shop in Badung or Buy on Shopee for live stock. Pair with a listed shampoo such as Moell Hair Shampoo refill 500ml at Rp98,000. Ship via Shopee.",
    },
    content: {
      id: "Satu kueri: hair lotion bayi. Bukan halaman stroller. Lanjut belanja di [perawatan kulit bayi](/shop/perawatan-kulit-bayi).",
      en: "One query: baby hair lotion. Not a stroller page. Continue in [baby skincare](/shop/perawatan-kulit-bayi).",
    },
    sections: [
      {
        heading: { id: "Tiga SKU di etalase", en: "Three listed SKUs" },
        body: {
          id: "Gently 100ml Rp55.000; Beeme 100ml Rp60.000 (listing menyebut aman 3 bulan+); Moell Everyday 100ml Rp72.000. Sampo terkait: Moell Hair Shampoo refill 500ml Rp98.000.",
          en: "Gently 100ml Rp55,000; Beeme 100ml Rp60,000 (listing mentions 3 months+); Moell Everyday 100ml Rp72,000. Related shampoo: Moell refill 500ml Rp98,000.",
        },
      },
      {
        heading: { id: "Cara pakai singkat", en: "Short how-to" },
        body: {
          id: "Towel-dry rambut, oles sedikit, sisir lembut. Jauhkan dari mata. Hentikan jika ada iritasi dan tanya tenaga kesehatan.",
          en: "Towel-dry hair, use a small amount, comb gently. Keep out of eyes. Stop if irritated and ask a clinician.",
        },
      },
      {
        heading: { id: "Order", en: "Order" },
        body: {
          id: "Pilih item di katalog, Beli di Shopee. Bandingkan pelembap tubuh di [beli lotion bayi](/blog/beli-lotion-bayi).",
          en: "Pick the item in the catalog, Buy on Shopee. Compare body moisturizers in [buy baby lotion](/blog/beli-lotion-bayi).",
        },
      },
    ],
    inclusions: {
      id: [
        "Gently Baby Hair Lotion 100ml (katalog Rp55.000)",
        "Beeme Daily Nourishing Hair Lotion 100ml (katalog Rp60.000)",
        "Moell Nourish Hair Lotion 100ml (katalog Rp72.000)",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Gently Baby Hair Lotion 100ml (catalog Rp55,000)",
        "Beeme Daily Nourishing Hair Lotion 100ml (catalog Rp60,000)",
        "Moell Nourish Hair Lotion 100ml (catalog Rp72,000)",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "Hair lotion katalog Rp55.000–Rp72.000 per 100ml. Sampo refill Moell 500ml Rp98.000 terpisah.",
      en: "Hair lotion catalog Rp55,000–Rp72,000 per 100ml. Moell shampoo refill 500ml Rp98,000 is separate.",
    },
    faqs: [
      {
        question: { id: "Hair lotion wajib untuk bayi botak?", en: "Is hair lotion required for little hair?" },
        answer: {
          id: "Tidak. Ini produk opsional di etalase. Banyak keluarga melewatinya.",
          en: "No. It is optional. Many families skip it.",
        },
      },
      {
        question: { id: "Berapa harga hair lotion bayi di HiMoon?", en: "Hair lotion price at HiMoon?" },
        answer: {
          id: "Gently Rp55.000, Beeme Rp60.000, Moell Rp72.000 pada katalog saat ini.",
          en: "Gently Rp55,000, Beeme Rp60,000, Moell Rp72,000 on the current catalog.",
        },
      },
      {
        question: { id: "Apakah ini obat rontok?", en: "Is this a hair-loss medicine?" },
        answer: {
          id: "Bukan. Kami meritel sesuai listing. Tidak ada klaim medis di halaman ini.",
          en: "No. We retail the listing. This page makes no medical claims.",
        },
      },
      {
        question: { id: "Beli di toko Bali atau Shopee?", en: "Bali store or Shopee?" },
        answer: {
          id: "Keduanya. Shopee untuk stok dan ongkir live; toko Badung jika ingin lihat kemasan.",
          en: "Both. Shopee for live stock and shipping; Badung if you want to see the pack.",
        },
      },
    ],
    publishedAt: "2026-09-08",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 5,
    image: "/products/moell-nourish-hair-lotion-everyday-100ml-anak.jpg",
    imageAlt: {
      id: "Hair lotion bayi Moell di HiMoon Bali",
      en: "Moell baby hair lotion at HiMoon Bali",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: ["beli-lotion-bayi", "beli-sabun-bayi", "beli-sunscreen-bayi"],
  },
  {
    slug: "krim-ruam-popok",
    phase: "month2",
    query: {
      id: "krim ruam popok",
      en: "diaper rash cream",
    },
    title: {
      id: "Krim Ruam Popok: Gently Rash Cream Harga & Cara Beli HiMoon",
      en: "Diaper Rash Cream: Gently Rash Cream Price & How to Buy at HiMoon",
    },
    excerpt: {
      id: "Gently Baby Rash Cream 40gr katalog Rp71.000 di baby shop HiMoon Bali. Bukan diagnosis. Checkout Shopee himoonbabykids.",
      en: "Gently Baby Rash Cream 40g catalog Rp71,000 at HiMoon Bali baby shop. Not a diagnosis. Checkout on Shopee himoonbabykids.",
    },
    speakable: {
      id: "Krim ruam popok dicari new mom saat area popok memerah. HiMoon Baby & Kids menjual Gently Baby Rash Cream 40 gram dengan harga katalog Rp71.000, mengikuti Shopee himoonbabykids. Listing menyebut krim pereda ruam yang diuji dermatologis; kami tidak menambahkan klaim menyembuhkan infeksi. Ganti popok secara teratur dan biarkan kulit kering. Ruam parah, bernanah, atau demam perlu tenaga kesehatan — kami toko ritel di Kabupaten Badung, bukan klinik. Yang termasuk: produk sesuai listing, bantuan WhatsApp pilih item, ambil di Bali atau kirim Shopee. Tidak termasuk janji ruam hilang dalam semalam. Kombinasikan dengan popok yang pas; lihat panduan pilih popok dan perbandingan Makuku versus MamyPoko. Harga lain di kategori kulit, misalnya lotion Beeme Rp65.000, tidak menggantikan krim ruam. Checkout paling akurat lewat tombol Beli di Shopee himoonbabykids agar stok dan ongkir live.",
      en: "Diaper rash cream is searched when the diaper area reddens. HiMoon sells Gently Baby Rash Cream 40g at Rp71,000 catalog on Shopee himoonbabykids. The listing describes a dermatologically tested rash cream; we do not add infection-cure claims. Change diapers often and keep skin dry. Severe, pus-filled, or feverish rash needs a clinician — we are a Badung retailer, not a clinic. Included: the listed product, WhatsApp help, Bali pickup or Shopee ship. Not included: an overnight-clear promise. Pair with a well-fitting diaper. Checkout via Buy on Shopee.",
    },
    content: {
      id: "Halaman niat beli untuk krim ruam popok. Bukan artikel medis. Lanjut ke [kategori popok](/shop/popok) dan [perawatan kulit](/shop/perawatan-kulit-bayi).",
      en: "A purchase-intent page for diaper rash cream. Not a medical article. Continue to [diapers](/shop/popok) and [skincare](/shop/perawatan-kulit-bayi).",
    },
    sections: [
      {
        heading: { id: "Harga dan isi", en: "Price and pack" },
        body: {
          id: "Gently Baby Rash Cream 40gr tercatat Rp71.000 di katalog. Klaim uji dermatologis ada di listing merek. Kami tidak mengubah teks kemasan.",
          en: "Gently Baby Rash Cream 40g is listed at Rp71,000. Dermatologically tested wording stays on the brand listing. We do not rewrite the pack.",
        },
      },
      {
        heading: { id: "Yang dilakukan toko vs dokter", en: "Shop vs clinician" },
        body: {
          id: "Kami menjual SKU. Kami tidak mendiagnosis jamur, alergi, atau infeksi. Jika ragu, ke dokter anak dulu sebelum beli berulang.",
          en: "We sell the SKU. We do not diagnose yeast, allergy, or infection. If unsure, see a pediatrician before repeat buys.",
        },
      },
      {
        heading: { id: "Order", en: "Order" },
        body: {
          id: "Beli di Shopee dari kartu produk, atau WhatsApp stok toko. Baca juga [tips memilih popok](/blog/tips-memilih-popok-bayi).",
          en: "Buy on Shopee from the product card, or WhatsApp store stock. Also read [how to choose diapers](/blog/tips-memilih-popok-bayi).",
        },
      },
    ],
    inclusions: {
      id: [
        "Gently Baby Rash Cream 40gr (katalog Rp71.000)",
        "Bantuan WhatsApp",
        "Kirim Shopee / ambil Badung",
      ],
      en: [
        "Gently Baby Rash Cream 40g (catalog Rp71,000)",
        "WhatsApp help",
        "Shopee ship / Badung pickup",
      ],
    },
    priceNote: {
      id: "Gently Baby Rash Cream 40gr Rp71.000. Popok MamyPoko Royal Soft Rp123.000 jika Anda restock popok bersamaan.",
      en: "Gently Baby Rash Cream 40g Rp71,000. MamyPoko Royal Soft Rp123,000 if you restock diapers at the same time.",
    },
    faqs: [
      {
        question: { id: "Krim ruam popok wajib di tas bayi?", en: "Is rash cream required in the diaper bag?" },
        answer: {
          id: "Tidak wajib. Banyak keluarga menyimpan satu tube untuk jaga-jaga. Ini SKU opsional.",
          en: "Not required. Many families keep one tube just in case. It is optional.",
        },
      },
      {
        question: { id: "Berapa harga Gently rash cream di HiMoon?", en: "Gently rash cream price?" },
        answer: {
          id: "Katalog Rp71.000 untuk 40gr. Cek Shopee untuk promo.",
          en: "Catalog Rp71,000 for 40g. Check Shopee for promos.",
        },
      },
      {
        question: { id: "Apakah ini obat resep?", en: "Is this prescription medicine?" },
        answer: {
          id: "Kami meritel listing konsumen. Bukan resep dokter dari HiMoon.",
          en: "We retail a consumer listing. HiMoon does not prescribe.",
        },
      },
      {
        question: { id: "Kirim ke luar Bali?", en: "Ship outside Bali?" },
        answer: {
          id: "Ya, via Shopee himoonbabykids jika kurir mendukung alamat.",
          en: "Yes, via Shopee himoonbabykids if the courier supports the address.",
        },
      },
    ],
    publishedAt: "2026-09-08",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 5,
    image: "/products/gently-baby-rash-cream-40gr-krim-ruam-popok.jpg",
    imageAlt: {
      id: "Gently Baby Rash Cream dijual di HiMoon Bali",
      en: "Gently Baby Rash Cream sold at HiMoon Bali",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: [
      "tips-memilih-popok-bayi",
      "perawatan-kulit-bayi-sensitif",
      "makuku-vs-mamypoko",
    ],
  },
  {
    slug: "sabun-bayi-non-sls",
    phase: "month2",
    query: {
      id: "sabun bayi non SLS",
      en: "non-SLS baby wash comparison",
    },
    title: {
      id: "Sabun Bayi Non-SLS: Moell vs Gently vs Beeme di Iklim Bali",
      en: "Non-SLS Baby Wash: Moell vs Gently vs Beeme in Bali’s Climate",
    },
    excerpt: {
      id: "Bandingkan sabun bayi Moell, Gently, dan Beeme tanpa rating palsu. Harga katalog Rp58.000–Rp100.000, metode di /metodologi-perbandingan, beli di Shopee.",
      en: "Compare Moell, Gently, and Beeme baby wash without fake ratings. Catalog Rp58,000–Rp100,000, method on /metodologi-perbandingan, buy on Shopee.",
    },
    speakable: {
      id: "Sabun bayi non SLS adalah perbandingan niat beli untuk orang tua yang menghindari busa kasar di iklim panas Bali. HiMoon Baby & Kids menjual tiga jalur di Shopee himoonbabykids: Moell Gentle Body Wash 185ml Rp72.000 dan refill 500 gram Rp100.000, Gently Ultra Soft Body Wash dan Shampoo 250 gram Rp76.000 plus refill Rp58.000, serta Beeme Honey Bee Bubble Wash 250ml Rp87.000. Kami tidak menunjuk pemenang abadi dan tidak membuat bintang palsu. Moell cocok jika Anda sudah memakai sunscreen atau lotion merek yang sama. Gently menawarkan isi botol plus refill hemat. Beeme menawarkan format bubble wash. Uji pack kecil, baca usia di label, dan hentikan jika iritasi. Metodologi ada di halaman metodologi perbandingan: hanya SKU etalase, iklim Bali, harga listing, tanpa panel fiktif. Beli di toko Badung atau tombol Shopee. Stok mengikuti etalase; jika satu merek habis kami tidak memaksa pengganti sebagai juara.",
      en: "Non-SLS baby wash is a purchase-intent comparison for parents avoiding harsh foam in Bali heat. HiMoon sells three paths on Shopee himoonbabykids: Moell Gentle Body Wash 185ml Rp72,000 and 500g refill Rp100,000, Gently Ultra Soft 250g Rp76,000 plus refill Rp58,000, and Beeme Honey Bee Bubble Wash 250ml Rp87,000. We do not name an eternal winner or invent stars. Moell fits if you already use that brand’s lotion or sunscreen. Gently offers a bottle plus cheaper refill. Beeme is a bubble-wash format. Trial a small pack and stop if irritated. Method is on the comparison-methodology page. Buy in Badung or via Shopee.",
    },
    content: {
      id: "Perbandingan ritel, bukan uji lab. Sumber: etalase HiMoon/Shopee, label, dan cuaca Bali. Metode: [metodologi perbandingan](/metodologi-perbandingan).",
      en: "Retail comparison, not a lab test. Sources: HiMoon/Shopee listings, labels, Bali weather. Method: [comparison methodology](/metodologi-perbandingan).",
    },
    sections: [
      {
        heading: { id: "Kriteria", en: "Criteria" },
        body: {
          id: "Klaim non-SLS di listing, opsi refill, tekstur (cair vs bubble), ketersediaan di himoonbabykids, dan harga katalog. Lihat /metodologi-perbandingan.",
          en: "Non-SLS wording on the listing, refill option, texture (liquid vs bubble), availability on himoonbabykids, and catalog price. See /metodologi-perbandingan.",
        },
      },
      {
        heading: { id: "Kapan pilih Moell, Gently, atau Beeme", en: "When to pick each" },
        body: {
          id: "Moell jika ingin satu rangkaian dengan sunscreen Moell. Gently jika butuh refill 250gr lebih murah. Beeme jika Anda ingin bubble wash 3in1 sesuai label.",
          en: "Moell if you already use Moell sunscreen. Gently if you want the cheaper 250g refill. Beeme if you want a labeled 3-in-1 bubble wash.",
        },
      },
      {
        heading: { id: "Beli", en: "Buy" },
        body: {
          id: "Buka [beli sabun bayi](/blog/beli-sabun-bayi) untuk daftar harga, lalu [katalog skincare](/shop/perawatan-kulit-bayi) dan Shopee.",
          en: "Open [buy baby wash](/blog/beli-sabun-bayi) for the price list, then [skincare catalog](/shop/perawatan-kulit-bayi) and Shopee.",
        },
      },
    ],
    inclusions: {
      id: [
        "Moell wash 185ml Rp72.000 / refill Rp100.000",
        "Gently wash 250gr Rp76.000 / refill Rp58.000",
        "Beeme Bubble Wash 250ml Rp87.000",
        "Tautan metodologi perbandingan",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Moell wash 185ml Rp72,000 / refill Rp100,000",
        "Gently wash 250g Rp76,000 / refill Rp58,000",
        "Beeme Bubble Wash 250ml Rp87,000",
        "Link to comparison methodology",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "Rentang sabun katalog Rp58.000–Rp100.000. Isi kemasan berbeda; baca judul listing sebelum bayar.",
      en: "Wash catalog range Rp58,000–Rp100,000. Pack sizes differ; read the listing title before paying.",
    },
    faqs: [
      {
        question: { id: "Mana sabun bayi terbaik?", en: "Which baby wash is best?" },
        answer: {
          id: "Tidak ada pemenang tunggal. Uji pack kecil. Kami tidak menjual survei fiktif.",
          en: "There is no single winner. Trial a small pack. We do not sell fictional surveys.",
        },
      },
      {
        question: { id: "Apa arti non-SLS di halaman ini?", en: "What does non-SLS mean here?" },
        answer: {
          id: "Kami mengulang klaim yang tertulis di listing merek. Bukan hasil tes lab HiMoon.",
          en: "We repeat wording printed on the brand listing. It is not a HiMoon lab result.",
        },
      },
      {
        question: { id: "Di mana beli di Bali?", en: "Where to buy in Bali?" },
        answer: {
          id: "Toko HiMoon Badung atau Shopee himoonbabykids, kategori Perawatan Kulit Bayi.",
          en: "HiMoon Badung or Shopee himoonbabykids, Baby Skincare category.",
        },
      },
      {
        question: { id: "Bagaimana metode perbandingan?", en: "How is the method made?" },
        answer: {
          id: "Dijelaskan di halaman Metodologi Perbandingan. Tidak ada panel rahasia.",
          en: "Explained on the Comparison Methodology page. No secret panel.",
        },
      },
    ],
    publishedAt: "2026-09-08",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: "/products/gently-ultra-soft-body-wash-shampoo-250gr-non-sls.jpg",
    imageAlt: {
      id: "Perbandingan sabun bayi non-SLS di HiMoon Bali",
      en: "Non-SLS baby wash comparison at HiMoon Bali",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: ["beli-sabun-bayi", "beli-lotion-bayi", "makuku-vs-mamypoko"],
  },
];
