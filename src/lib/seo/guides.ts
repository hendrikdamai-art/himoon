import type { BlogPost } from "@/types/catalog";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { shopCategories, type ShopCategorySlug } from "@/lib/site-config";

const SHOPEE_IMG = {
  sunscreen:
    "https://down-id.img.susercontent.com/file/id-11134207-81ztf-mq4ujguquhvye8",
  mpasi:
    "https://down-id.img.susercontent.com/file/id-11134207-81zth-mqbv48ncikg192",
  peralatan:
    "https://down-id.img.susercontent.com/file/id-11134207-81ztl-mqbv2mbam6f460",
  popok:
    "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mqd90g1x9bm50f",
  bibir:
    "https://down-id.img.susercontent.com/file/id-11134207-81zto-mqcsszbnocgc57",
} as const;

export const guides: BlogPost[] = [
  {
    slug: "perlengkapan-bayi-baru-lahir",
    phase: "month1",
    query: {
      id: "perlengkapan bayi baru lahir",
      en: "newborn baby essentials checklist",
    },
    title: {
      id: "Perlengkapan Bayi Baru Lahir: Daftar Belanja + Harga di Bali",
      en: "Newborn Baby Essentials: Shopping List + Bali Prices",
    },
    excerpt: {
      id: "Daftar belanja bayi baru lahir yang bisa dibeli di HiMoon Bali atau Shopee himoonbabykids — popok, skincare, MPASI siap 6 bulan, dan kebutuhan ibu menyusui.",
      en: "A newborn shopping list you can buy at HiMoon Bali or Shopee himoonbabykids — diapers, skincare, later MPASI, and nursing essentials.",
    },
    speakable: {
      id: "Perlengkapan bayi baru lahir yang paling sering dibeli ibu hamil dan new mom di Bali adalah popok, perawatan kulit lembut, tissue basah, dan kebutuhan ibu menyusui. Di HiMoon Baby & Kids, katalog Shopee himoonbabykids saat ini dimulai sekitar Rp22.500 untuk tisu harian sampai sekitar Rp123.000 untuk popok. Anda tidak harus membeli blender MPASI sebelum bayi siap makan; fokus bulan pertama pada popok, lotion, dan perlindungan kulit. Sunscreen bayi seperti Moell berguna di Bali karena sinar matahari kuat, dipakai sesuai petunjuk kemasan setelah usia yang direkomendasikan merek. HiMoon punya toko fisik di Kabupaten Badung dan checkout online di Shopee. Chat WhatsApp jika ingin konfirmasi ukuran popok atau stok toko. Produk yang kami jual adalah barang asli dari brand yang tertera. Untuk pengiriman ke Denpasar, Canggu, Kuta, atau luar Bali, gunakan Shopee agar ongkir dan etalase stok selalu mengikuti toko resmi himoonbabykids.",
      en: "The newborn items pregnant and new moms in Bali buy first are diapers, gentle skincare, wipes, and nursing supplies. At HiMoon Baby & Kids, the himoonbabykids Shopee catalog currently starts around Rp22,500 for daily tissue up to about Rp123,000 for diapers. You do not need an MPASI blender before complementary feeding; month one is diapers, lotion, and skin protection. Baby sunscreen such as Moell matters in Bali’s strong sun and should be used as the brand label directs. HiMoon has a Badung store and Shopee checkout. WhatsApp us to confirm diaper size or in-store stock. We sell authentic branded goods. For Denpasar, Canggu, Kuta, or shipping across Indonesia, use Shopee so live stock and shipping match the himoonbabykids shop.",
    },
    content: {
      id: "Checklist ini untuk ibu hamil trimester akhir dan new mom yang ingin belanja terkurasi, bukan supermall. Setiap item di bawah bisa dilanjutkan ke katalog HiMoon atau Shopee.",
      en: "This checklist is for late-pregnancy and new moms who want a curated shop, not a department store. Each item below links onward to the HiMoon catalog or Shopee.",
    },
    sections: [
      {
        heading: {
          id: "Prioritas 0–3 bulan",
          en: "Priority at 0–3 months",
        },
        body: {
          id: "Fokus pada popok (Makuku atau MamyPoko), perawatan kulit sensitif (Gently, Mustela, Cussons), tissue lembut Paseo, dan treatment bibir jika kulit kering. Tunda pembelian MPASI sampai mendekati usia 6 bulan, kecuali Anda ingin menyiapkan blender lebih awal.",
          en: "Focus on diapers (Makuku or MamyPoko), sensitive-skin care (Gently, Mustela, Cussons), soft Paseo tissue, and lip care if skin is dry. Delay MPASI until closer to 6 months unless you want feeding tools early.",
        },
      },
      {
        heading: {
          id: "Perlengkapan ibu menyusui",
          en: "Nursing essentials",
        },
        body: {
          id: "Jika Anda menyusui, HiMoon juga membawa ASI booster dan peralatan terkait. Pilih produk sesuai label dan konsultasikan ke tenaga kesehatan untuk suplemen. Toko kami meritel, bukan memberi resep.",
          en: "If you are nursing, HiMoon also carries ASI booster and related gear. Follow the label and ask a health professional about supplements. We retail products; we do not prescribe.",
        },
      },
      {
        heading: {
          id: "Belanja di Bali vs Shopee",
          en: "Shop in Bali vs Shopee",
        },
        body: {
          id: "Kunjungi toko di Kab. Badung jika ingin lihat fisik. Untuk harga, stok, dan kirim ke alamat, checkout Shopee himoonbabykids adalah jalur tercepat. Tombol oranye di setiap produk mengarah ke etalase yang sama.",
          en: "Visit the Badung store to see items in person. For live price, stock, and doorstep delivery, checkout on Shopee himoonbabykids is the fastest path. The orange button on each product opens that shop.",
        },
      },
    ],
    inclusions: {
      id: [
        "Popok Makuku / MamyPoko",
        "Skincare bayi (Gently, Moell, Mustela, Cussons)",
        "Tissue & perawatan harian Paseo",
        "Opsi ASI booster untuk ibu menyusui",
        "Checkout Shopee atau ambil di toko Bali",
      ],
      en: [
        "Makuku / MamyPoko diapers",
        "Baby skincare (Gently, Moell, Mustela, Cussons)",
        "Daily Paseo tissue & care",
        "Optional ASI booster for nursing moms",
        "Shopee checkout or Bali pickup",
      ],
    },
    priceNote: {
      id: "Harga katalog HiMoon saat ini sekitar Rp22.500–Rp123.000 mengikuti Shopee. Tisu Paseo Rp22.500; saringan MPASI Rp29.500; Bunda Elia Rp55.000; sunscreen Moell Rp79.000; MamyPoko Royal Soft Rp123.000.",
      en: "Current HiMoon catalog is about Rp22,500–Rp123,000 following Shopee. Paseo tissue Rp22,500; MPASI strainer Rp29,500; Bunda Elia Rp55,000; Moell sunscreen Rp79,000; MamyPoko Royal Soft Rp123,000.",
    },
    faqs: [
      {
        question: {
          id: "Apa saja perlengkapan bayi baru lahir yang wajib?",
          en: "What newborn essentials are actually required?",
        },
        answer: {
          id: "Yang paling mendesak: popok sesuai berat badan, pakaian ganti, perawatan kulit tanpa wewangian berat, dan kebutuhan ibu. MPASI belum wajib di bulan pertama.",
          en: "Most urgent: correctly sized diapers, spare clothes, low-fragrance skincare, and the mother’s needs. MPASI is not required in month one.",
        },
      },
      {
        question: {
          id: "Berapa budget belanja bayi baru lahir di HiMoon?",
          en: "What budget should I plan at HiMoon?",
        },
        answer: {
          id: "Starter harian bisa dimulai dari puluhan ribu rupiah per item. Paket popok + lotion + sunscreen di katalog ini berkisar total ratusan ribu, tergantung jumlah pack. Cek Shopee untuk total keranjang.",
          en: "Daily starters begin in the tens of thousands of rupiah per item. A diaper + lotion + sunscreen basket is typically a few hundred thousand, depending on pack count. Confirm the cart on Shopee.",
        },
      },
      {
        question: {
          id: "Bisa belanja list ini lewat Shopee?",
          en: "Can I buy this list on Shopee?",
        },
        answer: {
          id: "Ya. Gunakan toko himoonbabykids. Setiap kartu produk di situs HiMoon punya tombol Beli di Shopee.",
          en: "Yes. Use the himoonbabykids shop. Every product card on the HiMoon site has a Buy on Shopee button.",
        },
      },
      {
        question: {
          id: "Apakah HiMoon jual stroller dan baju bayi lengkap?",
          en: "Does HiMoon sell strollers and a full clothing range?",
        },
        answer: {
          id: "Fokus kami adalah MPASI, skincare, popok, peralatan makan, dan kebutuhan ibu menyusui. Untuk stroller atau fashion lengkap, kami arahkan ke kebutuhan yang memang ada di etalase Shopee kami.",
          en: "We focus on MPASI, skincare, diapers, feeding gear, and nursing needs. For strollers or a full clothing range, we only sell what is actually listed in our Shopee shop.",
        },
      },
    ],
    publishedAt: "2026-09-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 7,
    image: SHOPEE_IMG.popok,
    imageAlt: {
      id: "Perlengkapan bayi baru lahir di toko HiMoon Bali",
      en: "Newborn essentials at HiMoon Bali",
    },
    shopHref: "/shop",
    relatedSlugs: ["beli-sunscreen-bayi", "panduan-mpasi-6-bulan", "tips-memilih-popok-bayi"],
  },
  {
    slug: "beli-sunscreen-bayi",
    phase: "month1",
    query: {
      id: "beli sunscreen bayi",
      en: "buy baby sunscreen",
    },
    title: {
      id: "Beli Sunscreen Bayi di Bali: Moell, Harga, dan Cara Order Shopee",
      en: "Buy Baby Sunscreen in Bali: Moell, Price, and Shopee Order",
    },
    excerpt: {
      id: "Sunscreen bayi Moell tersedia di HiMoon Badung dan Shopee himoonbabykids. Lihat harga katalog, kapan dipakai di iklim Bali, dan cara checkout.",
      en: "Moell baby sunscreen is available at HiMoon Badung and Shopee himoonbabykids. See catalog price, Bali-climate use, and how to checkout.",
    },
    speakable: {
      id: "Sunscreen bayi di Bali penting karena sinar UV tinggi sepanjang tahun, terutama untuk aktivitas outdoor di Badung, Canggu, dan Denpasar. HiMoon Baby & Kids menjual Moell Sunscreen Bayi & Anak 30 gram dengan harga katalog Rp79.000, mengikuti etalase Shopee himoonbabykids. Produk ini diposisikan merek untuk kulit sensitif dan extra water resistant; selalu baca label resmi Moell untuk usia pemakaian dan cara oles. Beli sunscreen bayi original lewat toko fisik HiMoon di Kabupaten Badung, WhatsApp, atau tombol Beli di Shopee agar stok live. Kami tidak menambahkan ulasan palsu; rating toko Shopee yang disebut di situs adalah rating Shopee himoonbabykids, bukan bintang buatan di halaman ini. Patch test di area kecil jika kulit bayi sangat sensitif. Untuk kebutuhan terkait, HiMoon juga punya lotion Gently dan perawatan bibir. Kirim ke luar Bali tetap lewat Shopee.",
      en: "Baby sunscreen matters in Bali because UV is high year-round, especially for outdoor time in Badung, Canggu, and Denpasar. HiMoon Baby & Kids sells Moell Baby & Kids Sunscreen 30g at a catalog price of Rp79,000, matching Shopee himoonbabykids. The brand positions it for sensitive skin and extra water resistance; always read Moell’s official label for age and application. Buy authentic baby sunscreen at the Badung store, via WhatsApp, or the Buy on Shopee button for live stock. We do not invent reviews; any Shopee rating mentioned on this site is the himoonbabykids shop rating. Patch test if your baby’s skin is very reactive. Related items include Gently lotion and lip care. Ship outside Bali through Shopee.",
    },
    content: {
      id: "Pencarian beli sunscreen bayi di Indonesia banyak berakhir di Shopee. Halaman ini menjelaskan SKU yang memang kami jual, bukan daftar merek yang tidak ada di etalase.",
      en: "Searches for baby sunscreen in Indonesia often end on Shopee. This page covers the SKU we actually sell, not brands missing from our shop.",
    },
    sections: [
      {
        heading: {
          id: "Harga dan isi kemasan",
          en: "Price and pack",
        },
        body: {
          id: "Moell Sunscreen Bayi & Anak 30gr tercatat Rp79.000 di katalog HiMoon. Harga final, diskon, dan stok mengikuti Shopee. Isi kemasan dan klaim SPF ada di listing resmi; kami tidak mengubah klaim merek.",
          en: "Moell Baby & Kids Sunscreen 30g is listed at Rp79,000 in the HiMoon catalog. Final price, discounts, and stock follow Shopee. SPF claims stay on the official listing; we do not rewrite brand claims.",
        },
      },
      {
        heading: {
          id: "Kapan dipakai di Bali",
          en: "When to use it in Bali",
        },
        body: {
          id: "Pakai sesuai petunjuk kemasan sebelum aktivitas di luar, termasuk antar jemput dan pantai. Kombinasikan dengan topi dan teduh. Ini bukan pengganti nasihat dokter kulit.",
          en: "Use as the pack directs before outdoor time, including school runs and the beach. Combine with a hat and shade. This is not a substitute for a dermatologist.",
        },
      },
      {
        heading: {
          id: "Cara order",
          en: "How to order",
        },
        body: {
          id: "Buka kategori Perawatan Kulit Bayi, pilih Moell, lalu Beli di Shopee. Atau kunjungi toko Badung. WhatsApp untuk tanya stok fisik.",
          en: "Open Baby Skincare, choose Moell, then Buy on Shopee. Or visit the Badung store. WhatsApp for in-store stock.",
        },
      },
    ],
    inclusions: {
      id: [
        "Moell Sunscreen Bayi & Anak 30gr (katalog Rp79.000)",
        "Opsi lotion Gently untuk perawatan harian",
        "Bantuan pilih lewat WhatsApp",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Moell Baby & Kids Sunscreen 30g (catalog Rp79,000)",
        "Optional Gently lotion for daily care",
        "WhatsApp product help",
        "Checkout on Shopee himoonbabykids",
      ],
    },
    priceNote: {
      id: "Sunscreen Moell Rp79.000; Gently Physical Sunscreen Rp75.000; Gently Hydra Soft Body Lotion Rp93.000. Harga bisa berubah di Shopee.",
      en: "Moell sunscreen Rp79,000; Gently Physical Sunscreen Rp75,000; Gently Hydra Soft Body Lotion Rp93,000. Prices can change on Shopee.",
    },
    faqs: [
      {
        question: {
          id: "Di mana beli sunscreen bayi Moell original di Bali?",
          en: "Where can I buy authentic Moell baby sunscreen in Bali?",
        },
        answer: {
          id: "Di toko HiMoon Kab. Badung atau Shopee himoonbabykids. Hindari listing tanpa toko yang jelas jika Anda ragu keaslian.",
          en: "At HiMoon in Badung Regency or Shopee himoonbabykids. Avoid unclear listings if you are unsure about authenticity.",
        },
      },
      {
        question: {
          id: "Berapa harga sunscreen bayi di HiMoon?",
          en: "How much is baby sunscreen at HiMoon?",
        },
        answer: {
          id: "Katalog saat ini Rp79.000 untuk Moell 30gr. Konfirmasi di Shopee sebelum bayar.",
          en: "Current catalog is Rp79,000 for Moell 30g. Confirm on Shopee before paying.",
        },
      },
      {
        question: {
          id: "Apakah sunscreen bayi wajib untuk newborn?",
          en: "Is sunscreen required for newborns?",
        },
        answer: {
          id: "Ikuti usia minimum di label Moell dan saran tenaga kesehatan. Banyak merek membatasi pemakaian di usia sangat muda; teduh tetap utama.",
          en: "Follow Moell’s minimum age on the label and your clinician. Many brands restrict very young ages; shade still comes first.",
        },
      },
      {
        question: {
          id: "Bisa kirim sunscreen ke luar Bali?",
          en: "Can you ship sunscreen outside Bali?",
        },
        answer: {
          id: "Ya, lewat Shopee sesuai opsi kurir di checkout himoonbabykids.",
          en: "Yes, via Shopee courier options at himoonbabykids checkout.",
        },
      },
    ],
    publishedAt: "2026-09-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: SHOPEE_IMG.sunscreen,
    imageAlt: {
      id: "Sunscreen bayi Moell dijual di HiMoon dan Shopee",
      en: "Moell baby sunscreen sold at HiMoon and Shopee",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: [
      "perawatan-kulit-bayi-sensitif",
      "perlengkapan-bayi-baru-lahir",
      "toko-mpasi-bali",
    ],
  },
  {
    slug: "toko-mpasi-bali",
    phase: "month1",
    query: {
      id: "toko MPASI Bali",
      en: "MPASI shop Bali",
    },
    title: {
      id: "Toko MPASI Bali: Bunda Elia, Peralatan, dan Order Shopee HiMoon",
      en: "Bali MPASI Shop: Bunda Elia, Tools, and HiMoon Shopee Orders",
    },
    excerpt: {
      id: "Cari toko MPASI di Bali? HiMoon di Badung menjual nutrisi Bunda Elia dan peralatan makan bayi, dengan checkout Shopee himoonbabykids untuk stok live.",
      en: "Looking for an MPASI shop in Bali? HiMoon in Badung sells Bunda Elia nutrition and feeding tools, with live stock on Shopee himoonbabykids.",
    },
    speakable: {
      id: "Toko MPASI Bali yang dicari ibu baru biasanya butuh dua hal: bahan atau nutrisi pendamping ASI, dan peralatan makan yang aman. HiMoon Baby & Kids di Kabupaten Badung menjual produk MPASI Bunda Elia BB Booster Rice dengan harga katalog Rp55.000 dan saringan MPASI stainless sekitar Rp29.500, mengikuti Shopee himoonbabykids. MPASI umumnya dimulai sekitar usia 6 bulan saat bayi bisa duduk dan minat pada makanan muncul; mulai tekstur halus, porsi kecil, dan satu bahan baru setiap beberapa hari untuk pantau reaksi. Kami bukan klinik gizi; ikuti panduan IDAI atau tenaga kesehatan Anda. Belanja bisa di toko fisik, WhatsApp, atau Shopee agar pengiriman sampai Denpasar dan luar Bali. Bandingkan dengan toko MPASI spesialis lain di Bali jika Anda butuh bahan organik curah; keunggulan HiMoon adalah etalase campuran MPASI plus popok dan skincare di satu Shopee shop.",
      en: "Parents searching for an MPASI shop in Bali usually need complementary-food nutrition and safe feeding tools. HiMoon Baby & Kids in Badung Regency sells Bunda Elia BB Booster Rice MPASI at Rp55,000 catalog and a stainless MPASI strainer around Rp29,500, following Shopee himoonbabykids. Complementary feeding usually starts around 6 months when a baby can sit and shows interest; begin with smooth textures, tiny portions, and one new food every few days. We are not a nutrition clinic; follow IDAI or your clinician. Shop in-store, on WhatsApp, or Shopee for delivery across Denpasar and Indonesia. Compare with specialist bulk-ingredient MPASI stores if you need that range; HiMoon’s edge is MPASI plus diapers and skincare in one Shopee shop.",
    },
    content: {
      id: "Kompetitor lokal seperti MPASI Store Bali fokus bahan dan alat masak. HiMoon menempati celah: nutrisi Bunda Elia, peralatan, plus kebutuhan bayi lain yang sama-sama bisa di-checkout Shopee.",
      en: "Local competitors such as MPASI Store Bali focus on ingredients and cookware. HiMoon occupies the mix of Bunda Elia nutrition, tools, and other baby needs on one Shopee checkout.",
    },
    sections: [
      {
        heading: {
          id: "Apa yang dijual untuk MPASI",
          en: "What we sell for MPASI",
        },
        body: {
          id: "Nutrisi MPASI Bunda Elia dan peralatan blender, steamer, atau botol sesuai stok Shopee. Nama item dan foto mengikuti etalase himoonbabykids.",
          en: "Bunda Elia MPASI nutrition and blender, steamer, or bottle tools depending on Shopee stock. Names and photos follow the himoonbabykids listing.",
        },
      },
      {
        heading: {
          id: "Harga",
          en: "Pricing",
        },
        body: {
          id: "Katalog: MPASI Bunda Elia BB Booster Rice Rp55.000; saringan MPASI stainless Rp29.500. Mom Uung / ASI booster sesuai stok Shopee, harga live di listing.",
          en: "Catalog: Bunda Elia BB Booster Rice Rp55,000; stainless MPASI strainer Rp29,500. Mom Uung / ASI booster follows Shopee stock and live listing price.",
        },
      },
      {
        heading: {
          id: "Cara mulai MPASI 6 bulan",
          en: "How to start MPASI at 6 months",
        },
        body: {
          id: "Tunggu tanda kesiapan, tekstur halus, dan pantau alergi. Detail langkah ada di panduan MPASI 6 bulan kami. Beli peralatan setelah Anda yakin jadwal makan sudah mulai.",
          en: "Wait for readiness signs, use smooth textures, and watch for allergies. Step-by-step notes are in our 6-month MPASI guide. Buy tools once feeding has actually started.",
        },
      },
    ],
    inclusions: {
      id: [
        "MPASI Bunda Elia BB Booster Rice (katalog Rp55.000)",
        "Saringan MPASI stainless (katalog Rp29.500)",
        "Konsultasi pilih item via WhatsApp",
        "Kirim Shopee atau ambil di Badung",
      ],
      en: [
        "Bunda Elia BB Booster Rice (catalog Rp55,000)",
        "Stainless MPASI strainer (catalog Rp29,500)",
        "WhatsApp help choosing items",
        "Shopee ship or Badung pickup",
      ],
    },
    priceNote: {
      id: "MPASI Bunda Elia Rp55.000; saringan MPASI Rp29.500. ASI booster / Mom Uung: cek harga live di Shopee.",
      en: "Bunda Elia MPASI Rp55,000; MPASI strainer Rp29,500. ASI booster / Mom Uung: check live Shopee price.",
    },
    faqs: [
      {
        question: {
          id: "Di mana toko MPASI HiMoon di Bali?",
          en: "Where is HiMoon’s MPASI shop in Bali?",
        },
        answer: {
          id: "Toko fisik di Kabupaten Badung. Pin Google Maps ada di halaman Kontak. Online 24 jam di Shopee himoonbabykids.",
          en: "Physical store in Badung Regency. The Google Maps pin is on the Contact page. Online 24/7 at Shopee himoonbabykids.",
        },
      },
      {
        question: {
          id: "Apakah HiMoon jual bahan MPASI curah?",
          en: "Does HiMoon sell bulk MPASI ingredients?",
        },
        answer: {
          id: "Kami fokus produk brand di etalase (Bunda Elia dan peralatan). Jika listing curah tidak ada di Shopee kami, kami tidak mengklaim menjualnya.",
          en: "We focus on branded listings (Bunda Elia and tools). If a bulk ingredient is not on our Shopee shop, we do not claim to sell it.",
        },
      },
      {
        question: {
          id: "Bisa order MPASI via Shopee dari luar Bali?",
          en: "Can I order MPASI on Shopee from outside Bali?",
        },
        answer: {
          id: "Bisa, selama kurir Shopee mendukung alamat Anda di checkout.",
          en: "Yes, as long as Shopee’s courier supports your address at checkout.",
        },
      },
      {
        question: {
          id: "Kapan bayi mulai MPASI?",
          en: "When should a baby start MPASI?",
        },
        answer: {
          id: "Umumnya sekitar 6 bulan dengan tanda kesiapan. Ini informasi umum, bukan diagnosis; tanyakan ke dokter anak Anda.",
          en: "Usually around 6 months with readiness signs. This is general information, not a diagnosis; ask your pediatrician.",
        },
      },
    ],
    publishedAt: "2026-09-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 7,
    image: SHOPEE_IMG.mpasi,
    imageAlt: {
      id: "Produk MPASI Bunda Elia di HiMoon Baby & Kids Bali",
      en: "Bunda Elia MPASI products at HiMoon Baby & Kids Bali",
    },
    shopHref: "/shop/mpasi",
    relatedSlugs: [
      "panduan-mpasi-6-bulan",
      "perlengkapan-bayi-baru-lahir",
      "beli-sunscreen-bayi",
    ],
  },
  {
    slug: "panduan-mpasi-6-bulan",
    phase: "month1",
    query: {
      id: "panduan MPASI 6 bulan",
      en: "6 month MPASI guide",
    },
    title: {
      id: "Panduan MPASI 6 Bulan: Langkah Praktis + Belanja di HiMoon",
      en: "6-Month MPASI Guide: Practical Steps + Shop at HiMoon",
    },
    excerpt: {
      id: "Langkah memulai MPASI usia 6 bulan, peralatan yang benar-benar dibutuhkan, dan tautan belanja Bunda Elia plus blender di Shopee HiMoon.",
      en: "How to start MPASI at 6 months, which tools you actually need, and shop links for Bunda Elia plus blenders on HiMoon’s Shopee.",
    },
    speakable: {
      id: "MPASI atau makanan pendamping ASI biasanya dimulai sekitar usia enam bulan ketika bayi bisa duduk dengan penopang, mengontrol kepala, dan menunjukkan minat pada makanan. Mulai dengan tekstur halus seperti puree, porsi satu sampai dua sendok, lalu naikkan pelan. Perkenalkan satu bahan baru setiap tiga hari agar mudah melihat reaksi. HiMoon Baby & Kids di Bali menyediakan nutrisi MPASI Bunda Elia BB Booster Rice Rp55.000 dan saringan MPASI stainless Rp29.500 di katalog Shopee himoonbabykids. Anda tidak wajib membeli semua alat di hari pertama; sendok, mangkuk, dan steamer atau blender sesuai kebutuhan saja. Toko fisik ada di Kabupaten Badung; checkout online lewat Shopee atau tanya stok via WhatsApp. Pengiriman ke Denpasar dan luar Bali mengikuti kurir Shopee. Panduan ini bukan pengganti konsultasi dokter anak atau ahli gizi. Buka kategori MPASI di situs lalu tombol Beli di Shopee untuk stok live.",
      en: "Complementary feeding (MPASI) usually starts around six months when a baby can sit with support, control the head, and shows interest in food. Start with smooth puree textures, one to two spoons, then increase slowly. Introduce one new food every three days so reactions are easier to spot. HiMoon Baby & Kids in Bali offers Bunda Elia BB Booster Rice MPASI at Rp55,000 and a stainless MPASI strainer at Rp29,500 on the himoonbabykids Shopee catalog. You do not need every gadget on day one; buy a spoon, bowl, and steamer or blender only as needed. The physical store is in Badung Regency; checkout on Shopee or ask stock via WhatsApp. This guide does not replace a pediatrician or dietitian.",
    },
    content: {
      id: "Gunakan halaman ini sebagai urutan praktis, lalu belanja hanya item yang Anda butuhkan di kategori MPASI.",
      en: "Use this page as a practical sequence, then buy only what you need in the MPASI category.",
    },
    sections: [
      {
        heading: {
          id: "Tanda kesiapan",
          en: "Readiness signs",
        },
        body: {
          id: "Duduk tegak dengan bantuan, kepala stabil, lidah tidak terus mendorong sendok keluar, dan tertarik saat orang dewasa makan. Jika ragu, tanya dokter anak.",
          en: "Sits upright with support, steady head, less tongue-thrust, and interest when adults eat. If unsure, ask your pediatrician.",
        },
      },
      {
        heading: {
          id: "Peralatan yang masuk akal dibeli",
          en: "Tools worth buying",
        },
        body: {
          id: "Mangkuk, sendok, dan saringan stainless. Lihat katalog peralatan bayi HiMoon; saringan MPASI Ceko tercatat Rp29.500.",
          en: "A bowl, spoon, and stainless strainer. See HiMoon’s baby-equipment catalog; the Ceko MPASI strainer is listed at Rp29,500.",
        },
      },
      {
        heading: {
          id: "Nutrisi Bunda Elia",
          en: "Bunda Elia nutrition",
        },
        body: {
          id: "Jika Anda memilih produk Bunda Elia, ikuti takaran di kemasan. HiMoon meritel produk tersebut; kami tidak meracik MPASI custom.",
          en: "If you choose Bunda Elia, follow the pack directions. HiMoon retails that product; we do not mix custom MPASI.",
        },
      },
    ],
    inclusions: {
      id: [
        "Panduan langkah kesiapan & tekstur",
        "Tautan kategori MPASI & peralatan",
        "Harga katalog Bunda Elia dan alat masak",
        "CTA Shopee / WhatsApp",
      ],
      en: [
        "Readiness & texture steps",
        "Links to MPASI & equipment categories",
        "Catalog prices for Bunda Elia and tools",
        "Shopee / WhatsApp CTAs",
      ],
    },
    priceNote: {
      id: "Bunda Elia BB Booster Rice Rp55.000; saringan MPASI Rp29.500 pada katalog saat ini.",
      en: "Bunda Elia BB Booster Rice Rp55,000; MPASI strainer Rp29,500 on the current catalog.",
    },
    faqs: [
      {
        question: {
          id: "MPASI harus blender dulu?",
          en: "Do I need a blender first?",
        },
        answer: {
          id: "Tidak selalu. Banyak keluarga mulai dengan kukus dan lumat garpu. Beli blender jika Anda benar-benar memakainya.",
          en: "Not always. Many families start with steaming and mashing. Buy a blender if you will actually use it.",
        },
      },
      {
        question: {
          id: "Di mana beli peralatan MPASI di Bali?",
          en: "Where can I buy MPASI tools in Bali?",
        },
        answer: {
          id: "Di HiMoon Badung atau Shopee himoonbabykids, kategori Peralatan Bayi dan MPASI.",
          en: "At HiMoon Badung or Shopee himoonbabykids, in Baby Equipment and MPASI.",
        },
      },
      {
        question: {
          id: "Apakah ASI tetap diberikan?",
          en: "Is breast milk still given?",
        },
        answer: {
          id: "MPASI mendampingi ASI atau susu formula, bukan otomatis mengganti. Ikuti saran tenaga kesehatan Anda.",
          en: "MPASI complements breast milk or formula; it does not automatically replace it. Follow your clinician.",
        },
      },
      {
        question: {
          id: "Bagaimana jika bayi alergi?",
          en: "What if the baby has an allergy?",
        },
        answer: {
          id: "Hentikan makanan pemicu dan hubungi tenaga kesehatan. HiMoon tidak mendiagnosis alergi.",
          en: "Stop the suspected food and contact a clinician. HiMoon does not diagnose allergies.",
        },
      },
    ],
    publishedAt: "2026-08-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: SHOPEE_IMG.peralatan,
    imageAlt: {
      id: "Peralatan MPASI bayi di HiMoon Bali",
      en: "Baby MPASI tools at HiMoon Bali",
    },
    shopHref: "/shop/mpasi",
    relatedSlugs: ["toko-mpasi-bali", "perlengkapan-bayi-baru-lahir"],
  },
  {
    slug: "perawatan-kulit-bayi-sensitif",
    phase: "month1",
    query: {
      id: "perawatan kulit bayi sensitif",
      en: "sensitive baby skin care",
    },
    title: {
      id: "Perawatan Kulit Bayi Sensitif di Bali: Lotion, Sunscreen, Harga",
      en: "Sensitive Baby Skin Care in Bali: Lotion, Sunscreen, Prices",
    },
    excerpt: {
      id: "Pilih lotion Gently, sunscreen Moell, dan perawatan bibir untuk kulit bayi di iklim Bali. Harga katalog dan belanja Shopee HiMoon.",
      en: "Choose Gently lotion, Moell sunscreen, and lip care for baby skin in Bali’s climate. Catalog prices and HiMoon Shopee shopping.",
    },
    speakable: {
      id: "Kulit bayi lebih tipis dan mudah iritasi, apalagi di Bali yang panas, lembap, dan berjemur kuat. HiMoon Baby & Kids menjual perawatan yang ada di etalase: Gently Hydra Soft Body Lotion Rp93.000, Moell sunscreen 30 gram Rp79.000, Beeme Honey Lollipop Balm Rp70.000, dan tisu Paseo Rp22.500. Hindari wewangian berat jika kulit mudah merah, dan lakukan patch test di area kecil. Ini bukan diagnosis dermatitis; jika ruam parah, ke dokter. Belanja original di toko Badung atau Shopee himoonbabykids. Brand lain yang kadang tersedia termasuk Mustela dan Cussons sesuai stok. Gabungkan skincare dengan popok yang tidak gesek berlebihan. Semua harga mengikuti Shopee dan bisa berubah saat promo. Untuk newborn, baca usia minimum di label sunscreen sebelum dipakai. Kirim ke Canggu, Denpasar, atau luar Bali lewat checkout Shopee agar ongkir akurat. Simpan tautan himoonbabykids untuk belanja ulang.",
      en: "Baby skin is thinner and more reactive, especially in hot, humid, high-UV Bali. HiMoon Baby & Kids sells listed care: Gently Hydra Soft Body Lotion Rp93,000, Moell 30g sunscreen Rp79,000, Beeme lip balm Rp70,000, and Paseo tissue Rp22,500. Skip heavy fragrance if skin reddens easily, and patch test. This is not a dermatitis diagnosis; see a doctor for severe rash. Buy authentic products at the Badung store or Shopee himoonbabykids. Other brands such as Mustela and Cussons appear when in stock. Pair skincare with a diaper that does not chafe. All prices follow Shopee and can change during promotions.",
    },
    content: {
      id: "Halaman ini merangkum produk skincare yang memang dijual HiMoon, plus cara order ke Shopee.",
      en: "This page summarizes skincare HiMoon actually sells, plus how to order on Shopee.",
    },
    sections: [
      {
        heading: {
          id: "Rutin harian",
          en: "Daily routine",
        },
        body: {
          id: "Bersihkan lembut, oles lotion Gently jika kulit kering, dan sunscreen Moell sebelum keluar sesuai label. Malam hari cek lipatan leher dan popok.",
          en: "Cleanse gently, apply Gently lotion if skin is dry, and use Moell sunscreen before going out as the label says. At night check neck folds and the diaper area.",
        },
      },
      {
        heading: {
          id: "Harga katalog",
          en: "Catalog prices",
        },
        body: {
          id: "Paseo Rp22.500, Beeme lip balm Rp70.000, Gently Physical Sunscreen Rp75.000, Moell sunscreen Rp79.000, Gently Hydra Soft Body Lotion Rp93.000.",
          en: "Paseo Rp22,500, Beeme lip balm Rp70,000, Gently Physical Sunscreen Rp75,000, Moell sunscreen Rp79,000, Gently Hydra Soft Body Lotion Rp93,000.",
        },
      },
      {
        heading: {
          id: "Iklim Bali",
          en: "Bali climate",
        },
        body: {
          id: "Keringat dan pasir pantai memicu gesekan. Pilih tekstur yang mudah dibilas dan jangan tumpuk terlalu banyak produk sekaligus.",
          en: "Sweat and beach sand cause friction. Choose rinse-friendly textures and do not layer too many products at once.",
        },
      },
    ],
    inclusions: {
      id: [
        "Lotion Gently",
        "Sunscreen Moell",
        "Treatment bibir & tissue Paseo",
        "Order Shopee / toko Badung",
      ],
      en: [
        "Gently lotion",
        "Moell sunscreen",
        "Lip care & Paseo tissue",
        "Shopee / Badung store order",
      ],
    },
    priceNote: {
      id: "Skincare katalog Rp22.500–Rp100.000 tergantung item (tisu sampai refill Moell).",
      en: "Skincare catalog Rp22,500–Rp100,000 depending on the item (tissue through Moell refill).",
    },
    faqs: [
      {
        question: {
          id: "Sunscreen atau lotion dulu?",
          en: "Sunscreen or lotion first?",
        },
        answer: {
          id: "Ikuti label merek. Umumnya pelembap dulu pada kulit kering, sunscreen sebelum paparan matahari, dengan jeda sesuai petunjuk produk.",
          en: "Follow the brand label. Typically moisturizer on dry skin first, sunscreen before sun, with the wait time the pack describes.",
        },
      },
      {
        question: {
          id: "Apakah semua produk unscented?",
          en: "Are all products unscented?",
        },
        answer: {
          id: "Tidak. Baca kemasan. Jika bayi sangat sensitif, pilih yang ringan wewangian dan patch test.",
          en: "No. Read the pack. If your baby is very sensitive, choose low fragrance and patch test.",
        },
      },
      {
        question: {
          id: "Di mana beli skincare bayi di Badung?",
          en: "Where can I buy baby skincare in Badung?",
        },
        answer: {
          id: "Toko HiMoon dan Shopee himoonbabykids, kategori Perawatan Kulit Bayi.",
          en: "HiMoon’s store and Shopee himoonbabykids, Baby Skincare category.",
        },
      },
      {
        question: {
          id: "Ada garansi original?",
          en: "Is authenticity guaranteed?",
        },
        answer: {
          id: "Kami menjual produk asli dari brand yang kami bawa. Jika ada kendala item, hubungi WhatsApp atau komplain Shopee sesuai kebijakan platform.",
          en: "We sell authentic products from the brands we carry. If an item has an issue, use WhatsApp or Shopee’s platform complaint flow.",
        },
      },
    ],
    publishedAt: "2026-07-20",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: SHOPEE_IMG.sunscreen,
    imageAlt: {
      id: "Perawatan kulit bayi di HiMoon Baby & Kids",
      en: "Baby skincare at HiMoon Baby & Kids",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: [
      "beli-sunscreen-bayi",
      "harga-gently-baby-rash-cream-original",
      "perlengkapan-bayi-baru-lahir",
    ],
  },
  {
    slug: "harga-gently-baby-rash-cream-original",
    phase: "month1",
    query: {
      id: "harga Gently Baby Rash Cream original",
      en: "Gently Baby Rash Cream original price",
    },
    title: {
      id: "Harga Gently Baby Rash Cream original — krim ruam popok bayi kulit sensitif Badung & Shopee",
      en: "Gently Baby Rash Cream original price — baby diaper-rash cream in Badung & Shopee",
    },
    excerpt: {
      id: "Harga katalog Gently Baby Rash Cream 40gr original Rp71.000 di HiMoon Badung. Bandingkan jujur dengan Gently Calming Cream 20gr Rp53.000 dan Beeme Nourishing Balm 15gr Rp81.000, lalu Beli di Shopee himoonbabykids (cari nama SKU; katalog belum punya item URL).",
      en: "Catalog price for authentic Gently Baby Rash Cream 40g is Rp71,000 at HiMoon Badung. Honest neighbors: Gently Calming Cream 20g Rp53,000 and Beeme Nourishing Balm 15g Rp81,000. Then Buy on Shopee himoonbabykids (search the SKU name; catalog has no item URL).",
    },
    speakable: {
      id: "Gently Baby Rash Cream original adalah krim area popok yang kami jual di HiMoon Baby & Kids, toko ritel di Kabupaten Badung, Bali — bukan klinik kulit dan bukan official store pabrik. Nama listing katalog: Gently Baby Rash Cream 40gr – Krim Pereda Ruam Popok Bayi Dermatologically Tested. Harga katalog Rp71.000 mengikuti Shopee himoonbabykids. Tombol oranye Beli di Shopee membuka etalase himoonbabykids; baris katalog kami belum punya item ID, jadi kami tidak mengarang tautan listing. Cari nama SKU itu di toko, atau buka katalog perawatan kulit bayi. Isi kemasan yang kami klaim hanya 40gr sesuai judul listing. Tulisan “Dermatologically Tested” dan “pereda ruam” milik merek; kami tidak menjamin bayi bebas ruam. Tetangga jujur di etalase: Gently Calming Baby Cream 20gr katalog Rp53.000 (krim penenang peppermint & lavender, SKU berbeda) dan Beeme Nourishing Balm 15gr katalog Rp81.000 (pelembap balm umum, bukan rash cream). Ongkir tidak termasuk. Yang termasuk: produk original sesuai etalase, bantuan pilih via WhatsApp, ambil di toko Badung atau kirim Shopee ke Denpasar, Canggu, Kuta, dan luar Bali. Halaman ini untuk ibu hamil dan new mom yang mencari harga Gently Baby Rash Cream original saat area popok mudah merah di iklim panas Badung. Cara beli: klik Beli di Shopee ke himoonbabykids, ketik Gently Baby Rash Cream. WhatsApp +628511214358 hanya tanya stok toko Badung, bukan keranjang bayar. Ganti popok yang basah, ikuti label Gently, ruam yang melepuh atau tidak membaik ke tenaga kesehatan. Popok di etalase kami saat ini MamyPoko Royal Soft katalog Rp123.000; Makuku tidak kami listing. Patch test 24 jam di area kecil jika kulit sangat reaktif.",
      en: "Authentic Gently Baby Rash Cream is the diaper-area cream we sell at HiMoon Baby & Kids, a retailer in Badung Regency, Bali — not a skin clinic and not a factory official store. Catalog listing name: Gently Baby Rash Cream 40g – Diaper Rash Cream Dermatologically Tested. Catalog price is Rp71,000 following Shopee himoonbabykids. The orange Buy on Shopee button opens the himoonbabykids shop; our catalog row has no item ID, so we do not invent a listing URL. Search that SKU name in the shop, or open the baby-skincare catalog. The pack size we claim is only 40g as in the listing title. “Dermatologically Tested” and “rash relief” stay brand wording; we do not guarantee a rash-free baby. Honest neighbors in the same shop: Gently Calming Baby Cream 20g catalog Rp53,000 (peppermint & lavender calming cream, a different SKU) and Beeme Nourishing Balm 15g catalog Rp81,000 (a general moisturizing balm, not a rash cream). Shipping is not included. Included: authentic listed goods, WhatsApp help choosing, Badung pickup or Shopee ship to Denpasar, Canggu, Kuta, and outside Bali. This page is for pregnant and new moms looking up the original Gently Baby Rash Cream price when the diaper area reddens easily in hot Badung. How to buy: click Buy on Shopee to himoonbabykids, then type Gently Baby Rash Cream. WhatsApp +628511214358 is only for Badung in-store stock, not a payment cart. Change wet diapers, follow the Gently label; blistering or a rash that does not improve needs a clinician. The diaper we currently list is MamyPoko Royal Soft at catalog Rp123,000; we do not list Makuku. Patch-test a small area for 24 hours if skin is very reactive.",
    },
    content: {
      id: "Kami meritel krim area popok yang memang ada di etalase: Gently Baby Rash Cream 40gr. Halaman ini menjawab harga katalog, apa yang termasuk, apakah original itu worth it dibanding Gently Calming Cream 20gr atau balm umum, dan cara Beli di Shopee himoonbabykids — tanpa mengarang item ID. Klaim “Dermatologically Tested” dan “pereda ruam” tetap di judul listing merek; kami tidak menambah janji bebas ruam atau diagnosis. Lanjut ke [katalog perawatan kulit bayi](/shop/perawatan-kulit-bayi), [perawatan kulit bayi sensitif](/blog/perawatan-kulit-bayi-sensitif), [tips memilih popok bayi](/blog/tips-memilih-popok-bayi), atau etalase campur di [/shop](/shop).",
      en: "We retail the diaper-area cream that is actually in the shop: Gently Baby Rash Cream 40g. This page answers catalog price, what is included, whether original is worth it versus Gently Calming Cream 20g or a general balm, and how to Buy on Shopee himoonbabykids — without inventing an item ID. “Dermatologically Tested” and “rash relief” stay on the brand listing title; we do not add a no-rash promise or a diagnosis. Continue to the [baby skincare catalog](/shop/perawatan-kulit-bayi), [sensitive baby skin care](/blog/perawatan-kulit-bayi-sensitif), [how to choose baby diapers](/blog/tips-memilih-popok-bayi), or the mixed catalog at [/shop](/shop).",
    },
    sections: [
      {
        heading: {
          id: "Apa itu, harga katalog, dan isi kemasan",
          en: "What it is, catalog price, and pack",
        },
        body: {
          id: "Gently Baby Rash Cream 40gr adalah krim area popok di [katalog perawatan kulit bayi](/shop/perawatan-kulit-bayi), bukan lotion tubuh dan bukan pelembap wajah. Harga katalog Rp71.000 mengikuti Shopee himoonbabykids. Ongkir tidak termasuk dan dihitung di checkout. Isi yang kami sebut hanya 40gr sesuai judul listing; usia, cara oles, dan frekuensi ada di label Gently — kami tidak menebak “aman newborn” jika baris katalog tidak menuliskannya. Promo, stok, dan harga final selalu konfirmasi di Shopee himoonbabykids sebelum bayar. Jika halaman ini dan etalase berbeda, Shopee yang menang. Kami toko ritel himoonbabykids di Kabupaten Badung, bukan klaim official store pabrik kecuali Shopee sendiri menampilkannya demikian.",
          en: "Gently Baby Rash Cream 40g is the diaper-area cream in the [baby skincare catalog](/shop/perawatan-kulit-bayi), not a body lotion and not a face cream. Catalog price is Rp71,000 following Shopee himoonbabykids. Shipping is not included and is calculated at checkout. The pack size we name is only 40g as in the listing title; age, how to apply, and frequency are on the Gently label — we do not guess “newborn-safe” if that is missing from the catalog row. Promos, stock, and the final price: confirm on Shopee himoonbabykids before paying. If this page and the shop disagree, Shopee wins. We are the himoonbabykids retailer in Badung Regency, not a factory official store unless Shopee itself labels it that way.",
        },
      },
      {
        heading: {
          id: "Original / vs Calming Cream / worth it?",
          en: "Original / vs Calming Cream / worth it?",
        },
        body: {
          id: "Original di sini artinya kami meritel listing Gently yang ada di etalase himoonbabykids, bukan krim dewasa yang di-relabel. Worth it atau tidak tergantung kebutuhan area popok — bukan stiker termurah. Tetangga jujur: Gently Calming Baby Cream 20gr katalog Rp53.000 (judul listing: krim penenang peppermint & lavender). Satuan 40gr vs 20gr berbeda; kami tidak pecah harga per gram. Calming Cream bukan pengganti rash cream, dan rash cream bukan krim kolik. Beeme Nourishing Balm 15gr katalog Rp81.000 adalah pelembap balm umum, bukan krim ruam popok. Metode banding ada di [/metodologi-perbandingan](/metodologi-perbandingan): SKU nyata, iklim Bali, tanpa panel palsu. Tidak ada pemenang medis. Ruam yang melepuh, bernanah, atau tidak membaik tetap ke tenaga kesehatan — HiMoon tidak mendiagnosis.",
          en: "Original here means we retail the Gently listing that is in the himoonbabykids shop, not an adult cream relabeled. Whether it is worth it depends on diaper-area need — not the cheapest sticker. Honest neighbor: Gently Calming Baby Cream 20g catalog Rp53,000 (listing title: peppermint & lavender calming cream). 40g vs 20g are different units; we do not split a per-gram price. Calming Cream is not a rash-cream substitute, and rash cream is not a colic rub. Beeme Nourishing Balm 15g catalog Rp81,000 is a general moisturizing balm, not a diaper-rash cream. Comparison method is on [/metodologi-perbandingan](/metodologi-perbandingan): real SKUs, Bali climate, no fake panel. There is no medical winner. A blistering, pus-filled, or non-improving rash still needs a clinician — HiMoon does not diagnose.",
        },
      },
      {
        heading: {
          id: "Area popok di iklim Bali — tanpa janji bebas ruam",
          en: "Diaper area in Bali’s climate — no promised rash-free result",
        },
        body: {
          id: "Panas, keringat, dan popok basah di Badung, Canggu, dan Denpasar membuat area popok mudah merah. Krim barrier (halaman ini) tidak menggantikan ganti popok. Popok yang kami jual saat ini hanya [MamyPoko Royal Soft](/shop/popok) katalog Rp123.000 (tipe celana & perekat organic cotton di judul listing; ukuran tidak kami tebak karena tidak ada di baris katalog). Makuku tidak ada di etalase Shopee kami — banding merek tetap di [tips memilih popok bayi](/blog/tips-memilih-popok-bayi), tanpa mengarang stok. Rutin mandi–lotion–tabir surya tetap di [perawatan kulit bayi sensitif](/blog/perawatan-kulit-bayi-sensitif). Ikuti label Gently untuk cara oles; patch test 24 jam di area kecil jika kulit sangat reaktif, hentikan jika memburuk. HiMoon tidak menjanjikan “tidak ruam lagi”. Perlengkapan lain di bulan pertama ada di [perlengkapan bayi baru lahir](/blog/perlengkapan-bayi-baru-lahir) dan etalase [/shop](/shop).",
          en: "Heat, sweat, and wet diapers in Badung, Canggu, and Denpasar make the diaper area redden easily. A barrier cream (this page) does not replace diaper changes. The diaper we currently sell is only [MamyPoko Royal Soft](/shop/popok) at catalog Rp123,000 (pants & tape organic cotton in the listing title; we do not guess a size because it is not in the catalog row). Makuku is not in our Shopee shop — brand comparison stays on [how to choose baby diapers](/blog/tips-memilih-popok-bayi), without inventing stock. Bath–lotion–sunscreen steps stay on [sensitive baby skin care](/blog/perawatan-kulit-bayi-sensitif). Follow the Gently label for how to apply; patch-test a small area for 24 hours if skin is very reactive, and stop if it worsens. HiMoon does not promise “no more rash.” Other month-one items are on the [newborn checklist](/blog/perlengkapan-bayi-baru-lahir) and the mixed catalog at [/shop](/shop).",
        },
      },
      {
        heading: {
          id: "Cara Beli di Shopee — WhatsApp hanya tanya stok",
          en: "How to Buy on Shopee — WhatsApp is stock-only",
        },
        body: {
          id: "Checkout utama: tombol oranye Beli di Shopee ke toko himoonbabykids, lalu cari “Gently Baby Rash Cream” agar harga, stok, dan ongkir Badung–Denpasar live. Kami tidak mengarang item ID; kartu katalog SKU ini masih ke beranda toko. Buka juga [katalog perawatan kulit bayi](/shop/perawatan-kulit-bayi) untuk kartu Gently Rash Cream, [popok](/shop/popok) jika Anda butuh MamyPoko Royal Soft Rp123.000, atau [/shop](/shop) untuk etalase campur. WhatsApp +628511214358 untuk tanya stok fisik di toko Badung sebelum perjalanan jauh — bukan keranjang bayar. Ambil di toko hanya setelah stok dikonfirmasi. Kirim ke luar Bali mengikuti kurir Shopee di checkout. Panduan terkait: [perawatan kulit bayi sensitif](/blog/perawatan-kulit-bayi-sensitif) (rutin) dan [tips memilih popok bayi](/blog/tips-memilih-popok-bayi) (ukuran & kulit, tanpa stok Makuku).",
          en: "Primary checkout: the orange Buy on Shopee button to the himoonbabykids shop, then search “Gently Baby Rash Cream” so price, stock, and Badung–Denpasar shipping are live. We do not invent an item ID; this SKU’s catalog card still opens the shop home. Also open the [baby skincare catalog](/shop/perawatan-kulit-bayi) for the Gently Rash Cream card, [diapers](/shop/popok) if you need MamyPoko Royal Soft Rp123,000, or [/shop](/shop) for the mixed catalog. WhatsApp +628511214358 to ask Badung in-store stock before a long trip — not a payment cart. Pickup only after stock is confirmed. Ship outside Bali with the Shopee courier at checkout. Related guides: [sensitive baby skin care](/blog/perawatan-kulit-bayi-sensitif) (routine) and [how to choose baby diapers](/blog/tips-memilih-popok-bayi) (size & skin, without Makuku stock).",
        },
      },
    ],
    inclusions: {
      id: [
        "Gently Baby Rash Cream 40gr original (katalog Rp71.000) — Beli di Shopee himoonbabykids, cari nama SKU",
        "Tetangga etalase: Gently Calming Baby Cream 20gr (katalog Rp53.000) dan Beeme Nourishing Balm 15gr (katalog Rp81.000)",
        "Produk sesuai listing Shopee himoonbabykids; isi 40gr mengikuti judul, usia/cara oles di label",
        "Checkout Beli di Shopee; WhatsApp tanya stok toko Badung",
        "Kirim Shopee ke Denpasar–Canggu–luar Bali atau ambil di Badung setelah stok dikonfirmasi",
      ],
      en: [
        "Authentic Gently Baby Rash Cream 40g (catalog Rp71,000) — Buy on Shopee himoonbabykids, search the SKU name",
        "Shop neighbors: Gently Calming Baby Cream 20g (catalog Rp53,000) and Beeme Nourishing Balm 15g (catalog Rp81,000)",
        "Goods as listed on Shopee himoonbabykids; 40g follows the title, age/use on the label",
        "Buy on Shopee checkout; WhatsApp for Badung in-store stock",
        "Shopee ship to Denpasar–Canggu–beyond Bali, or Badung pickup after stock is confirmed",
      ],
    },
    priceNote: {
      id: "Gently Baby Rash Cream 40gr katalog Rp71.000 (beranda toko himoonbabykids — belum ada item URL). Gently Calming Baby Cream 20gr katalog Rp53.000. Beeme Nourishing Balm 15gr katalog Rp81.000. MamyPoko Royal Soft katalog Rp123.000 di kategori popok. Satuan 40gr vs 20gr vs 15gr tidak kami pecah per gram. Ongkir tidak termasuk. Konfirmasi di Shopee himoonbabykids sebelum checkout.",
      en: "Gently Baby Rash Cream 40g catalog Rp71,000 (himoonbabykids shop home — no item URL yet). Gently Calming Baby Cream 20g catalog Rp53,000. Beeme Nourishing Balm 15g catalog Rp81,000. MamyPoko Royal Soft catalog Rp123,000 in the diaper category. 40g vs 20g vs 15g are not split per gram. Shipping not included. Confirm on Shopee himoonbabykids before checkout.",
    },
    faqs: [
      {
        question: {
          id: "Berapa harga Gently Baby Rash Cream original di HiMoon?",
          en: "How much is authentic Gently Baby Rash Cream at HiMoon?",
        },
        answer: {
          id: "Katalog saat ini Rp71.000 untuk Gently Baby Rash Cream 40gr, mengikuti Shopee himoonbabykids. Ongkir dihitung di checkout. Konfirmasi di Shopee himoonbabykids sebelum bayar — kami tidak mengarang item ID.",
          en: "Current catalog is Rp71,000 for Gently Baby Rash Cream 40g, following Shopee himoonbabykids. Shipping is calculated at checkout. Confirm on Shopee himoonbabykids before paying — we do not invent an item ID.",
        },
      },
      {
        question: {
          id: "Gently Rash Cream vs Calming Cream — mana yang worth it?",
          en: "Gently Rash Cream vs Calming Cream — which is worth it?",
        },
        answer: {
          id: "Tidak ada pemenang medis dan tidak ada janji bebas ruam. Rash Cream 40gr Rp71.000 untuk area popok sesuai judul listing. Calming Cream 20gr Rp53.000 adalah krim penenang peppermint & lavender, SKU berbeda. Satuan 40gr vs 20gr jangan disamakan. Uji patch, baca label, ruam parah ke tenaga kesehatan.",
          en: "There is no medical winner and no promised rash-free result. Rash Cream 40g Rp71,000 is for the diaper area as the listing title says. Calming Cream 20g Rp53,000 is a peppermint & lavender calming cream, a different SKU. Do not treat 40g vs 20g as the same portion. Patch-test, read the label; a severe rash needs a clinician.",
        },
      },
      {
        question: {
          id: "Apakah HiMoon official store Gently?",
          en: "Is HiMoon the Gently official store?",
        },
        answer: {
          id: "Kami toko ritel himoonbabykids di Kabupaten Badung, bukan klaim official store pabrik kecuali Shopee menampilkannya demikian. Beli di Shopee, cari Gently Baby Rash Cream, atau tanya stok toko via WhatsApp.",
          en: "We are the himoonbabykids retail shop in Badung Regency, not a factory official store unless Shopee itself labels it that way. Buy on Shopee, search Gently Baby Rash Cream, or WhatsApp for in-store stock.",
        },
      },
      {
        question: {
          id: "Bagaimana cara Beli di Shopee dari artikel ini?",
          en: "How do I Buy on Shopee from this article?",
        },
        answer: {
          id: "Klik tombol oranye Beli di Shopee — itu ke toko himoonbabykids, lalu ketik Gently Baby Rash Cream. Atau buka /shop/perawatan-kulit-bayi lalu kartu Gently Rash Cream. WhatsApp hanya untuk tanya stok toko Badung, bukan pembayaran.",
          en: "Click the orange Buy on Shopee button — it opens the himoonbabykids shop, then type Gently Baby Rash Cream. Or open /shop/perawatan-kulit-bayi then the Gently Rash Cream card. WhatsApp is for Badung stock questions, not payment.",
        },
      },
    ],
    publishedAt: "2026-10-26",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 8,
    image: SHOPEE_IMG.sunscreen,
    imageAlt: {
      id: "Gently Baby Rash Cream original di HiMoon Badung dan Shopee",
      en: "Authentic Gently Baby Rash Cream at HiMoon Badung and Shopee",
    },
    shopHref: "/shop/perawatan-kulit-bayi",
    relatedSlugs: ["perawatan-kulit-bayi-sensitif", "tips-memilih-popok-bayi"],
    emitFaqPageSchema: false,
    shopeeHref: "https://shopee.co.id/himoonbabykids",
    featuredProductSlugs: [
      "gently-baby-rash-cream-40gr-krim-ruam-popok",
      "gently-calming-baby-cream-20gr-krim-penenang-bayi",
      "beeme-nourishing-balm-15gr-pelembap-balm-bayi",
    ],
    cta: {
      title: {
        id: "Beli Gently Baby Rash Cream original di Shopee",
        en: "Buy authentic Gently Baby Rash Cream on Shopee",
      },
      body: {
        id: "Satu SKU krim area popok Gently 40gr, harga katalog Rp71.000, tombol oranye ke himoonbabykids — cari nama produk, jangan menunggu item URL yang belum ada di katalog. Calming Cream 20gr Rp53.000 dan Beeme Balm 15gr Rp81.000 adalah tetangga etalase, bukan pemenang medis. WhatsApp hanya untuk tanya stok toko Badung.",
        en: "One Gently diaper-area cream SKU at 40g, catalog Rp71,000, orange button to himoonbabykids — search the product name; do not wait for an item URL the catalog does not have. Calming Cream 20g Rp53,000 and Beeme Balm 15g Rp81,000 are shop neighbors, not medical winners. WhatsApp is only for in-store stock.",
      },
      button: {
        id: "Lihat katalog skincare",
        en: "Browse skincare catalog",
      },
    },
  },
  {
    slug: "tips-memilih-popok-bayi",
    phase: "month1",
    query: {
      id: "tips memilih popok bayi",
      en: "how to choose baby diapers",
    },
    title: {
      id: "Tips Memilih Popok Bayi: Ukuran, Kulit, dan Stok HiMoon",
      en: "How to Choose Baby Diapers: Size, Skin, and HiMoon Stock",
    },
    excerpt: {
      id: "Cara pilih popok menurut berat badan dan kulit. HiMoon menjual MamyPoko Royal Soft (katalog Rp123.000) dan Makuku sesuai stok Shopee. Bandingkan lengkap di artikel perbandingan.",
      en: "How to choose diapers by weight and skin. HiMoon sells MamyPoko Royal Soft (catalog Rp123,000) and Makuku when listed on Shopee. Full comparison in a dedicated article.",
    },
    speakable: {
      id: "Memilih popok bayi bergantung pada berat badan, bentuk paha, dan seberapa mudah kulit iritasi. HiMoon Baby & Kids di Bali menjual popok MamyPoko Royal Soft dengan harga katalog Rp123.000, plus Makuku jika listing Shopee himoonbabykids menampilkannya. Makuku sering dicari karena nuansa tipis; MamyPoko dikenal dengan fitur elastis dan pemakaian malam. Coba satu pack kecil dulu sebelum grosir. Toko fisik di Kabupaten Badung membantu jika Anda ingin lihat kemasan. Untuk pengiriman, checkout Shopee agar ukuran dan stok live. Ganti popok secara teratur dan kombinasikan dengan perawatan kulit jika ada ruam; ruam parah perlu tenaga kesehatan. Artikel perbandingan Makuku versus MamyPoko di situs ini menjelaskan metodologi kami tanpa ulasan palsu. Isi per pack berbeda, jadi baca judul listing sebelum bayar. Ongkir tidak termasuk harga katalog dan dihitung di Shopee. Simpan tautan himoonbabykids untuk restock popok.",
      en: "Choosing a baby diaper depends on weight, thigh shape, and how easily skin irritates. HiMoon Baby & Kids in Bali sells MamyPoko Royal Soft at Rp123,000 catalog, plus Makuku when the himoonbabykids Shopee listing shows it. Makuku is often sought for a thin feel; MamyPoko is known for elastic fit and overnight use. Try a small pack before bulk. The Badung store helps if you want to see packaging. For delivery, checkout on Shopee for live size and stock. Change regularly and add skincare if there is rash; severe rash needs a clinician. Our Makuku versus MamyPoko comparison explains our method without fake reviews.",
    },
    content: {
      id: "Gunakan tips ini untuk pilih ukuran. Detail head-to-head ada di halaman Makuku vs MamyPoko.",
      en: "Use these tips to pick a size. Head-to-head detail lives on the Makuku vs MamyPoko page.",
    },
    sections: [
      {
        heading: {
          id: "Ukuran menurut berat",
          en: "Size by weight",
        },
        body: {
          id: "Ikuti tabel berat di kemasan, bukan usia. Jika bocor di paha, naik ukuran. Stok ukuran mengikuti Shopee.",
          en: "Follow the pack’s weight chart, not age. If it leaks at the thigh, size up. Available sizes follow Shopee.",
        },
      },
      {
        heading: {
          id: "Harga",
          en: "Price",
        },
        body: {
          id: "Katalog menampilkan MamyPoko Royal Soft Rp123.000. Makuku hanya jika ada di Shopee. Isi per pack berbeda; baca judul listing.",
          en: "The catalog lists MamyPoko Royal Soft at Rp123,000. Makuku only if Shopee shows it. Pack counts differ; read the listing title.",
        },
      },
    ],
    inclusions: {
      id: [
        "Popok Makuku dan/atau MamyPoko sesuai stok",
        "Bantuan pilih ukuran via WhatsApp",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Makuku and/or MamyPoko depending on stock",
        "WhatsApp size help",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "MamyPoko Royal Soft katalog Rp123.000. Makuku sesuai stok Shopee. Harga per pcs tergantung isi pack.",
      en: "MamyPoko Royal Soft catalog Rp123,000. Makuku follows Shopee stock. Per-piece price depends on pack count.",
    },
    faqs: [
      {
        question: {
          id: "Makuku atau MamyPoko untuk kulit sensitif?",
          en: "Makuku or MamyPoko for sensitive skin?",
        },
        answer: {
          id: "Tidak ada jawaban tunggal. Coba pack kecil dan lihat ruam. Baca perbandingan kami untuk kriteria, bukan pemenang abadi.",
          en: "There is no single winner. Try a small pack and watch for rash. Read our comparison for criteria, not a forever winner.",
        },
      },
      {
        question: {
          id: "Bisa beli popok di toko Bali?",
          en: "Can I buy diapers at the Bali store?",
        },
        answer: {
          id: "Ya, tergantung stok fisik. WhatsApp dulu atau langsung ke Shopee.",
          en: "Yes, depending on in-store stock. WhatsApp first or go straight to Shopee.",
        },
      },
      {
        question: {
          id: "Apakah harga sudah termasuk ongkir?",
          en: "Is shipping included?",
        },
        answer: {
          id: "Tidak. Ongkir dihitung Shopee saat checkout.",
          en: "No. Shopee calculates shipping at checkout.",
        },
      },
      {
        question: {
          id: "Ada popok cloth?",
          en: "Do you sell cloth diapers?",
        },
        answer: {
          id: "Kami hanya mengklaim yang ada di etalase Shopee. Jika cloth tidak listed, kami tidak menjualnya saat ini.",
          en: "We only claim what is on the Shopee shop. If cloth is not listed, we are not selling it right now.",
        },
      },
    ],
    publishedAt: "2026-07-10",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 5,
    image: SHOPEE_IMG.popok,
    imageAlt: {
      id: "Popok bayi Makuku dan MamyPoko di HiMoon",
      en: "Makuku and MamyPoko baby diapers at HiMoon",
    },
    shopHref: "/shop/popok",
    relatedSlugs: [
      "perawatan-kulit-bayi-sensitif",
      "harga-gently-baby-rash-cream-original",
      "makuku-vs-mamypoko",
    ],
  },
  {
    slug: "makuku-vs-mamypoko",
    phase: "month2",
    query: {
      id: "Makuku vs MamyPoko",
      en: "Makuku vs MamyPoko",
    },
    title: {
      id: "Makuku vs MamyPoko: Perbandingan Popok untuk Iklim Bali",
      en: "Makuku vs MamyPoko: Diaper Comparison for Bali’s Climate",
    },
    excerpt: {
      id: "Bandingkan Makuku dan MamyPoko tanpa rating palsu. Kriteria: ketebalan, malam, kulit, harga katalog HiMoon: MamyPoko Royal Soft Rp123.000, Makuku sesuai stok Shopee, lalu beli di Shopee.",
      en: "Compare Makuku and MamyPoko without fake ratings. Criteria: thickness, overnight, skin, HiMoon catalog: MamyPoko Royal Soft Rp123,000, Makuku when Shopee lists it, then buy on Shopee.",
    },
    speakable: {
      id: "Makuku versus MamyPoko adalah perbandingan popok yang sering dicari new mom di Indonesia. HiMoon Baby & Kids di Bali menjual keduanya sesuai stok Shopee himoonbabykids, dengan harga listing MamyPoko Royal Soft Rp123.000 dan Makuku hanya jika etalase Shopee menampilkannya. Kami tidak menyatakan pemenang abadi dan tidak membuat ulasan bintang palsu. Makuku sering dipilih karena terasa lebih tipis untuk cuaca panas Bali. MamyPoko sering dipilih untuk pitas elastis dan pemakaian malam. Uji pack kecil, cek tabel berat di kemasan, dan lihat kebocoran paha. Metodologi lengkap ada di halaman metodologi perbandingan: kami hanya memakai fakta etalase, iklim Bali, dan kriteria yang bisa diulang, bukan survei fiktif. Beli di toko Badung atau tombol Shopee. Jika ruam muncul, ganti merek dan konsultasi tenaga kesehatan. Stok ukuran mengikuti Shopee; jika salah satu merek habis kami tidak memaksa pengganti sebagai pemenang. Kirim ke seluruh Indonesia yang dijangkau kurir Shopee.",
      en: "Makuku versus MamyPoko is a common diaper comparison for new moms in Indonesia. HiMoon Baby & Kids in Bali sells both depending on Shopee himoonbabykids stock, with MamyPoko Royal Soft at Rp123,000 catalog and Makuku only when Shopee lists it. We do not name an eternal winner and we do not invent star ratings. Makuku is often chosen for a thinner feel in Bali heat. MamyPoko is often chosen for elastic fit and overnight use. Trial a small pack, follow the weight chart, and watch thigh leaks. Full method is on our comparison-methodology page: shop-floor facts, Bali climate, and repeatable criteria — not a fake survey. Buy at the Badung store or via Shopee. If rash appears, switch brands and see a clinician.",
    },
    content: {
      id: "Ini perbandingan ritel, bukan uji lab. Sumber: etalase HiMoon/Shopee, label kemasan, dan kondisi panas-lembab Bali.",
      en: "This is a retail comparison, not a lab test. Sources: HiMoon/Shopee listings, pack labels, and Bali heat-humidity.",
    },
    sections: [
      {
        heading: { id: "Kriteria yang kami pakai", en: "Criteria we use" },
        body: {
          id: "Ketebalan terasa, kecocokan elastis, pemakaian malam, risiko gesekan di iklim lembap, ketersediaan ukuran di Shopee himoonbabykids, dan harga listing. Lihat /metodologi-perbandingan.",
          en: "Perceived thickness, elastic fit, overnight use, chafe risk in humidity, size availability on Shopee himoonbabykids, and listing price. See /metodologi-perbandingan.",
        },
      },
      {
        heading: { id: "Kapan pilih Makuku", en: "When to pick Makuku" },
        body: {
          id: "Jika Anda mengutamakan popok yang terasa tipis di cuaca Bali dan kulit tidak mudah kemerahan pada uji pack kecil.",
          en: "If you want a thinner feel in Bali weather and a small pack trial does not redden skin.",
        },
      },
      {
        heading: { id: "Kapan pilih MamyPoko", en: "When to pick MamyPoko" },
        body: {
          id: "Jika Anda butuh fitur malam atau elastis yang lebih ketat di paha, sepanjang stok Shopee tersedia.",
          en: "If you need overnight features or a snugger thigh elastic, when Shopee stock exists.",
        },
      },
    ],
    inclusions: {
      id: [
        "Popok Makuku dan/atau MamyPoko sesuai stok",
        "Harga listing MamyPoko Royal Soft Rp123.000; Makuku sesuai stok",
        "Tautan metodologi perbandingan",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Makuku and/or MamyPoko depending on stock",
        "Catalog listing ± Rp65,000",
        "Link to comparison methodology",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "MamyPoko Royal Soft di katalog popok HiMoon Rp123.000. Makuku hanya jika listing Shopee ada. Isi pack berbeda; baca judul sebelum bayar.",
      en: "MamyPoko Royal Soft on HiMoon’s diaper catalog is Rp123,000. Makuku only if the Shopee listing exists. Pack counts differ; read the title before paying.",
    },
    faqs: [
      {
        question: { id: "Mana yang lebih bagus?", en: "Which is better?" },
        answer: {
          id: "Tidak ada pemenang tunggal. Uji pack kecil pada bayi Anda. Kami tidak menjual hasil survei fiktif.",
          en: "There is no single winner. Trial a small pack on your baby. We do not sell fictional survey results.",
        },
      },
      {
        question: { id: "Di mana beli di Bali?", en: "Where to buy in Bali?" },
        answer: {
          id: "Toko HiMoon Badung atau Shopee himoonbabykids, kategori Popok.",
          en: "HiMoon Badung or Shopee himoonbabykids, Diapers category.",
        },
      },
      {
        question: { id: "Apakah HiMoon official store merek?", en: "Are you the brand official store?" },
        answer: {
          id: "Kami toko ritel himoonbabykids, bukan klaim sebagai official store pabrik kecuali Shopee menampilkannya demikian.",
          en: "We are the himoonbabykids retail shop, not a factory official store unless Shopee itself labels it that way.",
        },
      },
      {
        question: { id: "Bagaimana metodologi ini dibuat?", en: "How was this method made?" },
        answer: {
          id: "Dijelaskan di halaman Metodologi Perbandingan. Tidak ada panel rahasia atau rating 4.9 buatan di artikel ini.",
          en: "Explained on the Comparison Methodology page. No secret panel and no invented 4.9 rating on this article.",
        },
      },
    ],
    publishedAt: "2026-09-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 7,
    image: SHOPEE_IMG.popok,
    imageAlt: {
      id: "Perbandingan popok Makuku dan MamyPoko di HiMoon Bali",
      en: "Makuku and MamyPoko comparison at HiMoon Bali",
    },
    shopHref: "/shop/popok",
    relatedSlugs: ["tips-memilih-popok-bayi", "perlengkapan-bayi-baru-lahir"],
  },
  {
    slug: "asi-booster-ibu-menyusui",
    phase: "month2",
    query: {
      id: "ASI booster ibu menyusui",
      en: "nursing ASI booster",
    },
    title: {
      id: "ASI Booster untuk Ibu Menyusui: Harga Katalog & Cara Beli HiMoon",
      en: "ASI Booster for Nursing Moms: Catalog Price & How to Buy at HiMoon",
    },
    excerpt: {
      id: "ASI booster / Mom Uung di Shopee himoonbabykids sesuai stok. Bukan resep medis. Order Shopee atau tanya WhatsApp stok toko.",
      en: "ASI booster / Mom Uung on Shopee himoonbabykids follows live stock. Not a medical prescription. Order on Shopee or WhatsApp in-store stock.",
    },
    speakable: {
      id: "ASI booster dicari ibu menyusui yang ingin suplemen laktasi di samping pola menyusui. HiMoon Baby & Kids menjual ASI booster dan Mom Uung sesuai stok Shopee himoonbabykids, dengan harga live di listing (bukan angka tetap di halaman ini). Kami toko ritel di Kabupaten Badung, bukan klinik laktasi; keputusan memakai suplemen harus sesuai label dan tenaga kesehatan Anda. Yang termasuk saat belanja: produk original sesuai listing, bantuan pilih item via WhatsApp, ambil di Bali atau kirim Shopee. Tidak termasuk janji volume ASI tertentu. Kombinasikan dengan kebutuhan MPASI jika bayi sudah enam bulan, dan skincare jika puting atau kulit ibu butuh perawatan terpisah yang memang ada di etalase. Checkout paling akurat lewat tombol Beli di Shopee agar stok live. Ibu hamil atau kondisi medis tertentu wajib tanya dokter sebelum suplemen. Nama lengkap produk dan komposisi hanya yang tertera di listing Shopee, bukan klaim tambahan dari halaman ini.",
      en: "ASI booster is searched by nursing moms who want a lactation supplement alongside feeding. HiMoon Baby & Kids sells ASI booster and Mom Uung when they appear on Shopee himoonbabykids, at the live listing price rather than a fixed number on this page. We are a Badung retailer, not a lactation clinic; using a supplement must follow the label and your clinician. Included: authentic listed product, WhatsApp help, Bali pickup or Shopee ship. Not included: a promised milk-volume outcome. Combine with MPASI if the baby is six months, and with skincare only if those SKUs are in the shop. The most accurate checkout is Buy on Shopee for live stock.",
    },
    content: {
      id: "Halaman ini untuk niat beli, bukan diagnosis production ASI rendah.",
      en: "This page is for purchase intent, not a low-supply diagnosis.",
    },
    sections: [
      {
        heading: { id: "Harga dan stok", en: "Price and stock" },
        body: {
          id: "Harga ASI booster / Mom Uung mengikuti listing Shopee. Nama lengkap, isi, dan klaim label ada di etalase. Jika stok habis di situs, etalase Shopee yang berlaku.",
          en: "ASI booster / Mom Uung price follows the Shopee listing. Full name, contents, and label claims are on the shop. If the site is stale, the Shopee listing wins.",
        },
      },
      {
        heading: { id: "Cara order", en: "How to order" },
        body: {
          id: "Buka kategori MPASI, pilih ASI booster, Beli di Shopee. Atau WhatsApp untuk stok toko Badung.",
          en: "Open MPASI, choose ASI booster, Buy on Shopee. Or WhatsApp for Badung in-store stock.",
        },
      },
      {
        heading: { id: "Batas tanggung jawab", en: "Limits" },
        body: {
          id: "Kami tidak menjanjikan hasil medis. Ibu hamil atau kondisi tertentu harus tanya dokter sebelum suplemen.",
          en: "We do not promise medical outcomes. Pregnant people or those with conditions should ask a doctor before supplements.",
        },
      },
    ],
    inclusions: {
      id: [
        "ASI booster / Mom Uung sesuai listing Shopee (harga live)",
        "Bantuan WhatsApp",
        "Kirim Shopee / ambil Bali",
      ],
      en: [
        "ASI booster as listed on Shopee (± Rp89,000)",
        "WhatsApp help",
        "Shopee ship / Bali pickup",
      ],
    },
    priceNote: {
      id: "ASI booster / Mom Uung: harga live di Shopee. MPASI Bunda Elia BB Booster Rice Rp55.000 di katalog situs.",
      en: "ASI booster / Mom Uung: live Shopee price. Bunda Elia BB Booster Rice Rp55,000 on the site catalog.",
    },
    faqs: [
      {
        question: { id: "ASI booster wajib untuk semua ibu?", en: "Is ASI booster required?" },
        answer: {
          id: "Tidak. Banyak ibu menyusui tanpa suplemen. Ini produk opsional di etalase kami.",
          en: "No. Many people nurse without a supplement. This is an optional SKU in our shop.",
        },
      },
      {
        question: { id: "Bisa beli dari luar Bali?", en: "Buy from outside Bali?" },
        answer: {
          id: "Ya, via Shopee himoonbabykids jika kurir mendukung alamat.",
          en: "Yes, via Shopee himoonbabykids if the courier supports your address.",
        },
      },
      {
        question: { id: "Apakah ini obat?", en: "Is this medicine?" },
        answer: {
          id: "Kami meritel sesuai listing. Bukan resep. Baca komposisi di kemasan.",
          en: "We retail the listing. It is not a prescription. Read the pack composition.",
        },
      },
      {
        question: { id: "Ada konsultasi laktasi?", en: "Do you offer lactation consults?" },
        answer: {
          id: "Tidak. Kami bantu pilih produk di toko. Untuk laktasi, temui konselor atau tenaga kesehatan.",
          en: "No. We help pick shop items. For lactation care, see a counselor or clinician.",
        },
      },
    ],
    publishedAt: "2026-09-01",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 6,
    image: SHOPEE_IMG.mpasi,
    imageAlt: {
      id: "ASI booster untuk ibu menyusui di HiMoon Bali",
      en: "ASI booster for nursing moms at HiMoon Bali",
    },
    shopHref: "/shop/mpasi",
    relatedSlugs: ["toko-mpasi-bali", "perlengkapan-bayi-baru-lahir", "panduan-mpasi-6-bulan"],
  },
];

function withShopMeta(guide: BlogPost): BlogPost {
  const slug = guide.shopHref.replace(/^\/shop\/?/, "");
  const relatedCategory = shopCategories.some((category) => category.slug === slug)
    ? (slug as ShopCategorySlug)
    : undefined;

  return {
    ...guide,
    relatedCategory,
    cta: guide.cta ?? {
      title: {
        id: "Lanjut belanja di HiMoon",
        en: "Continue shopping at HiMoon",
      },
      body: {
        id: "Buka katalog terkait, lalu checkout Shopee himoonbabykids untuk stok dan ongkir live.",
        en: "Open the related catalog, then checkout on Shopee himoonbabykids for live stock and shipping.",
      },
      button: {
        id: "Lihat katalog",
        en: "View catalog",
      },
    },
  };
}

export function getGuides(): BlogPost[] {
  return guides.map(withShopMeta);
}

export function getGuide(slug: string): BlogPost | undefined {
  return getGuides().find((guide) => guide.slug === slug);
}

export function getRelatedGuides(slug: string): BlogPost[] {
  const guide = getGuide(slug);
  if (!guide) return [];
  return guide.relatedSlugs
    .map((related) => getGuide(related))
    .filter((item): item is BlogPost => Boolean(item));
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
