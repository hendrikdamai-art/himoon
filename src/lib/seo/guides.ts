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
    relatedSlugs: ["beli-sunscreen-bayi", "perlengkapan-bayi-baru-lahir"],
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
      id: "Cara pilih popok menurut berat badan dan kulit. HiMoon menjual Makuku SAP Comfort Fit (harga konfirmasi di Shopee himoonbabykids) dan MamyPoko Royal Soft (katalog Rp123.000). Harga SKU Makuku ada di artikel harga original.",
      en: "How to choose diapers by weight and skin. HiMoon sells Makuku SAP Comfort Fit (confirm price on Shopee himoonbabykids) and MamyPoko Royal Soft (catalog Rp123,000). Makuku SKU price is on the original-price article.",
    },
    speakable: {
      id: "Memilih popok bayi bergantung pada berat badan, bentuk paha, dan seberapa mudah kulit iritasi. HiMoon Baby & Kids di Bali menjual popok Makuku SAP Comfort Fit (harga konfirmasi di Shopee himoonbabykids; listing item live) dan MamyPoko Royal Soft dengan harga katalog Rp123.000. Makuku sering dicari karena nuansa tipis; MamyPoko dikenal dengan fitur elastis dan pemakaian malam. Coba satu pack kecil dulu sebelum grosir. Toko fisik di Kabupaten Badung membantu jika Anda ingin lihat kemasan. Untuk pengiriman, checkout Shopee agar ukuran dan stok live. Ganti popok secara teratur dan kombinasikan dengan perawatan kulit jika ada ruam; ruam parah perlu tenaga kesehatan. Artikel harga Makuku SAP original dan perbandingan Makuku versus MamyPoko di situs ini menjelaskan etalase tanpa ulasan palsu. Isi per pack berbeda, jadi baca judul listing sebelum bayar. Ongkir tidak termasuk harga katalog dan dihitung di Shopee. Simpan tautan himoonbabykids untuk restock popok.",
      en: "Choosing a baby diaper depends on weight, thigh shape, and how easily skin irritates. HiMoon Baby & Kids in Bali sells Makuku SAP Comfort Fit (confirm price on Shopee himoonbabykids; live item listing) and MamyPoko Royal Soft at Rp123,000 catalog. Makuku is often sought for a thin feel; MamyPoko is known for elastic fit and overnight use. Try a small pack before bulk. The Badung store helps if you want to see packaging. For delivery, checkout on Shopee for live size and stock. Change regularly and add skincare if there is rash; severe rash needs a clinician. The Makuku SAP original-price article and our Makuku versus MamyPoko comparison explain the shop without fake reviews.",
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
          id: "Katalog menampilkan MamyPoko Royal Soft Rp123.000. Makuku SAP Comfort Fit ada di etalase; harganya konfirmasi di Shopee himoonbabykids (baris katalog tidak memuat angka). Isi per pack berbeda; baca judul listing. Detail harga SKU: /blog/harga-makuku-sap-original.",
          en: "The catalog lists MamyPoko Royal Soft at Rp123,000. Makuku SAP Comfort Fit is in the shop; confirm its price on Shopee himoonbabykids (the catalog row has no number). Pack counts differ; read the listing title. SKU price detail: /blog/harga-makuku-sap-original.",
        },
      },
    ],
    inclusions: {
      id: [
        "Popok Makuku SAP Comfort Fit (harga konfirmasi di Shopee himoonbabykids) dan MamyPoko Royal Soft katalog Rp123.000",
        "Bantuan pilih ukuran via WhatsApp",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Makuku SAP Comfort Fit (confirm price on Shopee himoonbabykids) and MamyPoko Royal Soft catalog Rp123,000",
        "WhatsApp size help",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "MamyPoko Royal Soft katalog Rp123.000. Makuku SAP Comfort Fit: konfirmasi di Shopee himoonbabykids. Harga per pcs tergantung isi pack.",
      en: "MamyPoko Royal Soft catalog Rp123,000. Makuku SAP Comfort Fit: confirm on Shopee himoonbabykids. Per-piece price depends on pack count.",
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
      "perlengkapan-bayi-baru-lahir",
      "perawatan-kulit-bayi-sensitif",
      "makuku-vs-mamypoko",
      "harga-makuku-sap-original",
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
      id: "Bandingkan Makuku dan MamyPoko tanpa rating palsu. Kriteria: ketebalan, malam, kulit, harga katalog HiMoon: MamyPoko Royal Soft Rp123.000, Makuku SAP Comfort Fit konfirmasi di Shopee himoonbabykids, lalu Beli di Shopee.",
      en: "Compare Makuku and MamyPoko without fake ratings. Criteria: thickness, overnight, skin, HiMoon catalog: MamyPoko Royal Soft Rp123,000, Makuku SAP Comfort Fit confirm on Shopee himoonbabykids, then Buy on Shopee.",
    },
    speakable: {
      id: "Makuku versus MamyPoko adalah perbandingan popok yang sering dicari new mom di Indonesia. HiMoon Baby & Kids di Bali menjual keduanya di Shopee himoonbabykids: Makuku SAP Comfort Fit (harga konfirmasi di Shopee; listing item live) dan MamyPoko Royal Soft katalog Rp123.000. Kami tidak menyatakan pemenang abadi dan tidak membuat ulasan bintang palsu. Makuku sering dipilih karena terasa lebih tipis untuk cuaca panas Bali. MamyPoko sering dipilih untuk pitas elastis dan pemakaian malam. Uji pack kecil, cek tabel berat di kemasan, dan lihat kebocoran paha. Harga SKU Makuku ada di artikel harga Makuku SAP original. Metodologi lengkap ada di halaman metodologi perbandingan: kami hanya memakai fakta etalase, iklim Bali, dan kriteria yang bisa diulang, bukan survei fiktif. Beli di toko Badung atau tombol Shopee. Jika ruam muncul, ganti merek dan konsultasi tenaga kesehatan. Stok ukuran mengikuti Shopee; jika salah satu merek habis kami tidak memaksa pengganti sebagai pemenang. Kirim ke seluruh Indonesia yang dijangkau kurir Shopee.",
      en: "Makuku versus MamyPoko is a common diaper comparison for new moms in Indonesia. HiMoon Baby & Kids in Bali sells both on Shopee himoonbabykids: Makuku SAP Comfort Fit (confirm price on Shopee; live item listing) and MamyPoko Royal Soft at Rp123,000 catalog. We do not name an eternal winner and we do not invent star ratings. Makuku is often chosen for a thinner feel in Bali heat. MamyPoko is often chosen for elastic fit and overnight use. Trial a small pack, follow the weight chart, and watch thigh leaks. Makuku SKU price is on the original-price article. Full method is on our comparison-methodology page: shop-floor facts, Bali climate, and repeatable criteria — not a fake survey. Buy at the Badung store or via Shopee. If rash appears, switch brands and see a clinician.",
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
          id: "Jika Anda mengutamakan popok yang terasa tipis di cuaca Bali dan kulit tidak mudah kemerahan pada uji pack kecil. Harga SKU live: /blog/harga-makuku-sap-original — konfirmasi di Shopee himoonbabykids, jangan tebak angka.",
          en: "If you want a thinner feel in Bali weather and a small pack trial does not redden skin. Live SKU price: /blog/harga-makuku-sap-original — confirm on Shopee himoonbabykids, do not guess a number.",
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
        "Popok Makuku SAP Comfort Fit (harga konfirmasi di Shopee himoonbabykids) dan MamyPoko Royal Soft katalog Rp123.000",
        "Tautan metodologi perbandingan dan artikel harga Makuku SAP original",
        "Checkout Shopee himoonbabykids",
      ],
      en: [
        "Makuku SAP Comfort Fit (confirm price on Shopee himoonbabykids) and MamyPoko Royal Soft catalog Rp123,000",
        "Link to comparison methodology and the Makuku SAP original-price article",
        "Shopee himoonbabykids checkout",
      ],
    },
    priceNote: {
      id: "MamyPoko Royal Soft di katalog popok HiMoon Rp123.000. Makuku SAP Comfort Fit: konfirmasi di Shopee himoonbabykids (baris katalog tidak memuat angka). Isi pack berbeda; baca judul sebelum bayar.",
      en: "MamyPoko Royal Soft on HiMoon’s diaper catalog is Rp123,000. Makuku SAP Comfort Fit: confirm on Shopee himoonbabykids (the catalog row has no number). Pack counts differ; read the title before paying.",
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
    relatedSlugs: [
      "tips-memilih-popok-bayi",
      "perlengkapan-bayi-baru-lahir",
      "harga-makuku-sap-original",
    ],
  },
  {
    slug: "harga-makuku-sap-original",
    phase: "month1",
    query: {
      id: "harga Makuku SAP original",
      en: "Makuku SAP original price",
    },
    title: {
      id: "Harga Makuku SAP Comfort Fit original — popok tipis bayi Badung & Shopee",
      en: "Makuku SAP Comfort Fit original price — thin baby diapers in Badung & Shopee",
    },
    excerpt: {
      id: "Harga Makuku SAP Comfort Fit original di HiMoon Badung: konfirmasi di Shopee himoonbabykids (katalog situs tidak memuat angka). Bandingkan jujur dengan MamyPoko Royal Soft katalog Rp123.000, lalu Beli di Shopee ke listing item tape NB–XXL.",
      en: "Authentic Makuku SAP Comfort Fit price at HiMoon Badung: confirm on Shopee himoonbabykids (the site catalog has no number). Honest neighbor: MamyPoko Royal Soft catalog Rp123,000. Then Buy on Shopee on the tape NB–XXL item listing.",
    },
    speakable: {
      id: "Makuku SAP Comfort Fit original adalah popok bayi tipe perekat (tape) yang kami jual di HiMoon Baby & Kids, toko ritel di Kabupaten Badung, Bali — bukan klinik kulit dan bukan official store pabrik. Nama listing katalog: MAKUKU SAP Diapers Comfort Fit /Tape NB/S/M/L/Xl/XXL Popok Bayi Tipis Extra Dry Anti Gumpal. Harga tidak kami tebak di halaman ini. Baris katalog situs belum memuat angka, jadi konfirmasi di Shopee himoonbabykids sebelum checkout. Tombol oranye Beli di Shopee membuka listing item itu, bukan beranda toko. Isi kemasan, ukuran NB sampai XXL, dan jumlah pcs hanya yang tertera di judul serta pilihan varian Shopee — kami tidak membuat tabel ukuran. Tulisan tipis, extra dry, dan anti gumpal milik merek; kami tidak menjamin bebas bocor atau bebas ruam. Tetangga jujur di etalase popok: MamyPoko Royal Soft katalog Rp123.000 (tipe celana dan perekat organic cotton di judul listing; CTA kartu itu masih ke beranda himoonbabykids). Ongkir tidak termasuk. Yang termasuk: produk original sesuai listing, bantuan pilih ukuran via WhatsApp, ambil di toko Badung atau kirim Shopee ke Denpasar, Canggu, Kuta, dan luar Bali. Halaman ini untuk ibu hamil dan new mom yang mencari harga Makuku SAP original untuk popok tipis di iklim panas Badung. Cara beli: klik Beli di Shopee ke listing Makuku SAP Comfort Fit. WhatsApp +628511214358 hanya tanya ukuran atau stok toko Badung, bukan keranjang bayar. Ganti popok yang basah, ikuti label Makuku; ruam yang melepuh atau tidak membaik ke tenaga kesehatan.",
      en: "Authentic Makuku SAP Comfort Fit is the tape-style baby diaper we sell at HiMoon Baby & Kids, a retailer in Badung Regency, Bali — not a skin clinic and not a factory official store. Catalog listing name: MAKUKU SAP Diapers Comfort Fit /Tape NB/S/M/L/Xl/XXL thin extra-dry anti-clump baby diaper. We do not guess a price on this page. The site catalog row has no number, so confirm on Shopee himoonbabykids before checkout. The orange Buy on Shopee button opens that item listing, not the shop home. Pack count, sizes NB through XXL, and piece counts are only what the listing title and Shopee variants show — we do not invent a size chart. Thin, extra dry, and anti-clump stay brand wording; we do not guarantee leak-free or rash-free use. Honest neighbor in the diaper shop: MamyPoko Royal Soft catalog Rp123,000 (pants and tape organic cotton in the listing title; that card still opens the himoonbabykids shop home). Shipping is not included. Included: authentic listed goods, WhatsApp help choosing a size, Badung pickup or Shopee ship to Denpasar, Canggu, Kuta, and outside Bali. This page is for pregnant and new moms looking up the original Makuku SAP price for a thinner diaper in hot Badung. How to buy: click Buy on Shopee on the Makuku SAP Comfort Fit listing. WhatsApp +628511214358 is only for size or Badung in-store stock, not a payment cart. Change wet diapers, follow the Makuku label; blistering or a rash that does not improve needs a clinician.",
    },
    content: {
      id: "Kami meritel popok yang memang ada di etalase: Makuku SAP Comfort Fit tipe tape. Halaman ini menjawab harga (konfirmasi di Shopee himoonbabykids), apa yang termasuk, apakah original itu worth it dibanding [MamyPoko Royal Soft](/shop/popok) katalog Rp123.000, dan cara Beli di Shopee ke listing item — tanpa mengarang angka atau tabel ukuran. Klaim tipis, extra dry, dan anti gumpal tetap di judul listing merek; kami tidak menambah janji bebas bocor atau diagnosis ruam. Lanjut ke [katalog popok](/shop/popok), [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko), [tips memilih popok bayi](/blog/tips-memilih-popok-bayi), atau etalase campur di [/shop](/shop).",
      en: "We retail the diaper that is actually in the shop: Makuku SAP Comfort Fit tape. This page answers price (confirm on Shopee himoonbabykids), what is included, whether original is worth it versus [MamyPoko Royal Soft](/shop/popok) catalog Rp123,000, and how to Buy on Shopee on the item listing — without inventing a number or a size chart. Thin, extra dry, and anti-clump stay on the brand listing title; we do not add a leak-free promise or a rash diagnosis. Continue to the [diaper catalog](/shop/popok), [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko), [how to choose baby diapers](/blog/tips-memilih-popok-bayi), or the mixed catalog at [/shop](/shop).",
    },
    sections: [
      {
        heading: {
          id: "Apa itu, harga katalog, dan isi kemasan",
          en: "What it is, catalog price, and pack",
        },
        body: {
          id: "Makuku SAP Comfort Fit adalah popok bayi tipe perekat (tape) di [katalog popok](/shop/popok), bukan popok kain dan bukan pispot. Nama lengkap listing: MAKUKU SAP Diapers Comfort Fit /Tape NB/S/M/L/Xl/XXL Popok Bayi Tipis Extra Dry Anti Gumpal. Harga: konfirmasi di Shopee himoonbabykids. Baris katalog situs tidak memuat angka, jadi kami tidak menulis IDR di sini. Ongkir tidak termasuk dan dihitung di checkout Shopee. Isi, gram, dan jumlah pcs hanya yang muncul di judul plus varian listing; usia dan tabel berat ada di kemasan Makuku — kami tidak menebak NB vs S untuk bayi Anda. Promo, stok, dan harga final selalu konfirmasi di Shopee himoonbabykids sebelum bayar. Jika halaman ini dan etalase berbeda, Shopee yang menang. Kami toko ritel himoonbabykids di Kabupaten Badung, bukan klaim official store pabrik kecuali Shopee sendiri menampilkannya demikian.",
          en: "Makuku SAP Comfort Fit is the tape-style baby diaper in the [diaper catalog](/shop/popok), not a cloth diaper and not a potty. Full listing name: MAKUKU SAP Diapers Comfort Fit /Tape NB/S/M/L/Xl/XXL thin extra-dry anti-clump baby diaper. Price: confirm on Shopee himoonbabykids. The site catalog row has no number, so we do not print IDR here. Shipping is not included and is calculated at Shopee checkout. Pack contents and piece counts are only what the title plus listing variants show; age and the weight chart are on the Makuku pack — we do not guess NB vs S for your baby. Promos, stock, and the final price: confirm on Shopee himoonbabykids before paying. If this page and the shop disagree, Shopee wins. We are the himoonbabykids retailer in Badung Regency, not a factory official store unless Shopee itself labels it that way.",
        },
      },
      {
        heading: {
          id: "Original / vs MamyPoko Royal Soft / worth it?",
          en: "Original / vs MamyPoko Royal Soft / worth it?",
        },
        body: {
          id: "Original di sini artinya kami meritel listing Makuku SAP yang ada di etalase himoonbabykids, bukan popok tanpa merek yang di-relabel. Worth it atau tidak tergantung fit di paha bayi Anda dan apakah Anda butuh nuansa tipis di cuaca Bali — bukan stiker termurah. Tetangga jujur: [MamyPoko Royal Soft](/shop/popok) katalog Rp123.000 (judul listing: tipe celana dan perekat organic cotton). Satuan pack dan isi pcs berbeda; kami tidak pecah harga per pcs. Makuku SAP di halaman ini adalah tipe tape; MamyPoko di katalog kami menyebut celana dan perekat — pilih sesuai tahap bayi, bukan karena satu merek “menang”. Metode banding ada di [/metodologi-perbandingan](/metodologi-perbandingan) dan esai [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko): SKU nyata, iklim Bali, tanpa panel palsu. Tidak ada pemenang medis. Bocor malam atau ruam yang melepuh tetap ke observasi di rumah plus tenaga kesehatan jika memburuk — HiMoon tidak mendiagnosis.",
          en: "Original here means we retail the Makuku SAP listing that is in the himoonbabykids shop, not an unbranded diaper relabeled. Whether it is worth it depends on thigh fit and whether you want a thinner feel in Bali weather — not the cheapest sticker. Honest neighbor: [MamyPoko Royal Soft](/shop/popok) catalog Rp123,000 (listing title: pants and tape organic cotton). Pack units and piece counts differ; we do not split a per-piece price. Makuku SAP on this page is tape; our MamyPoko listing names pants and tape — pick by your baby’s stage, not because one brand “wins.” Comparison method is on [/metodologi-perbandingan](/metodologi-perbandingan) and the [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko) essay: real SKUs, Bali climate, no fake panel. There is no medical winner. Night leaks or a blistering rash still need home observation plus a clinician if it worsens — HiMoon does not diagnose.",
        },
      },
      {
        heading: {
          id: "Popok tipis di iklim panas Bali — tanpa janji bebas bocor",
          en: "Thin diapers in Bali heat — no promised leak-free result",
        },
        body: {
          id: "Panas, keringat, dan popok basah di Badung, Canggu, dan Denpasar membuat banyak orang tua mencari popok yang terasa lebih tipis. Itu alasan komersial halaman ini, bukan uji lab. Ganti segera saat basah tetap fondasi; popok tidak menggantikan [tips memilih ukuran](/blog/tips-memilih-popok-bayi). Ikuti tabel berat di kemasan Makuku, bukan usia kalender. Jika bocor di paha atau meninggalkan bekas dalam, naik ukuran pada varian Shopee — kami tidak punya tabel NB–XXL di situs. Area popok yang mudah merah bisa dibahas di [perawatan kulit bayi sensitif](/blog/perawatan-kulit-bayi-sensitif); krim barrier adalah SKU terpisah, bukan janji “Makuku = tidak ruam”. HiMoon tidak menjanjikan bebas bocor, extra dry abadi, atau anti gumpal di rumah Anda. Perlengkapan lain di bulan pertama ada di [perlengkapan bayi baru lahir](/blog/perlengkapan-bayi-baru-lahir) dan etalase [/shop](/shop).",
          en: "Heat, sweat, and wet diapers in Badung, Canggu, and Denpasar make many parents look for a thinner-feeling diaper. That is this page’s commercial reason, not a lab test. Prompt changes stay the foundation; a diaper does not replace [size-selection tips](/blog/tips-memilih-popok-bayi). Follow the Makuku pack weight chart, not calendar age. If it leaks at the thigh or leaves a deep mark, size up in the Shopee variant — we do not publish an NB–XXL table on the site. A diaper area that reddens easily can be discussed on [sensitive baby skin care](/blog/perawatan-kulit-bayi-sensitif); barrier cream is a separate SKU, not a promise that “Makuku = no rash.” HiMoon does not promise leak-free nights, forever extra-dry, or anti-clump in your home. Other month-one items are on the [newborn checklist](/blog/perlengkapan-bayi-baru-lahir) and the mixed catalog at [/shop](/shop).",
        },
      },
      {
        heading: {
          id: "Cara Beli di Shopee — WhatsApp hanya tanya stok",
          en: "How to Buy on Shopee — WhatsApp is stock-only",
        },
        body: {
          id: "Checkout utama: tombol oranye Beli di Shopee ke listing Makuku SAP Comfort Fit himoonbabykids agar harga, varian ukuran, stok, dan ongkir Badung–Denpasar live. Ini SKU popok yang tombol oranye-nya benar-benar ke item, bukan beranda toko. Buka juga [katalog popok](/shop/popok) untuk kartu Makuku SAP dan MamyPoko Royal Soft Rp123.000, atau [/shop](/shop) untuk etalase campur. WhatsApp +628511214358 untuk tanya ukuran atau stok fisik di toko Badung sebelum perjalanan jauh — bukan keranjang bayar. Ambil di toko hanya setelah stok dikonfirmasi. Kirim ke luar Bali mengikuti kurir Shopee di checkout. Panduan terkait: [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko) (kriteria, bukan pemenang abadi) dan [tips memilih popok bayi](/blog/tips-memilih-popok-bayi) (berat badan dan kulit).",
          en: "Primary checkout: the orange Buy on Shopee button to the Makuku SAP Comfort Fit himoonbabykids listing so price, size variants, stock, and Badung–Denpasar shipping are live. This is the diaper SKU whose orange button actually hits the item, not the shop home. Also open the [diaper catalog](/shop/popok) for the Makuku SAP and MamyPoko Royal Soft Rp123,000 cards, or [/shop](/shop) for the mixed catalog. WhatsApp +628511214358 to ask size or Badung in-store stock before a long trip — not a payment cart. Pickup only after stock is confirmed. Ship outside Bali with the Shopee courier at checkout. Related guides: [Makuku vs MamyPoko](/blog/makuku-vs-mamypoko) (criteria, not an eternal winner) and [how to choose baby diapers](/blog/tips-memilih-popok-bayi) (weight and skin).",
        },
      },
    ],
    inclusions: {
      id: [
        "Makuku SAP Comfort Fit original (tape NB–XXL sesuai listing) — Beli di Shopee ke item URL; harga konfirmasi di Shopee himoonbabykids",
        "Tetangga etalase: MamyPoko Royal Soft (katalog Rp123.000, CTA kartu masih beranda toko)",
        "Produk sesuai listing Shopee himoonbabykids; isi/ukuran mengikuti judul dan varian, bukan tabel buatan kami",
        "Checkout Beli di Shopee; WhatsApp tanya ukuran atau stok toko Badung",
        "Kirim Shopee ke Denpasar–Canggu–luar Bali atau ambil di Badung setelah stok dikonfirmasi",
      ],
      en: [
        "Authentic Makuku SAP Comfort Fit (tape NB–XXL as listed) — Buy on Shopee on the item URL; confirm price on Shopee himoonbabykids",
        "Shop neighbor: MamyPoko Royal Soft (catalog Rp123,000; card CTA still shop home)",
        "Goods as listed on Shopee himoonbabykids; pack/size follow the title and variants, not a table we invent",
        "Buy on Shopee checkout; WhatsApp for size or Badung in-store stock",
        "Shopee ship to Denpasar–Canggu–beyond Bali, or Badung pickup after stock is confirmed",
      ],
    },
    priceNote: {
      id: "Makuku SAP Comfort Fit: konfirmasi di Shopee himoonbabykids (baris katalog situs tidak memuat angka; tombol oranye ke listing item). MamyPoko Royal Soft katalog Rp123.000 di kategori popok (CTA kartu masih beranda toko). Isi pack dan ukuran NB–XXL tidak kami pecah per pcs. Ongkir tidak termasuk. Konfirmasi di Shopee himoonbabykids sebelum checkout.",
      en: "Makuku SAP Comfort Fit: confirm on Shopee himoonbabykids (the site catalog row has no number; the orange button goes to the item listing). MamyPoko Royal Soft catalog Rp123,000 in the diaper category (card CTA still shop home). Pack counts and NB–XXL sizes are not split per piece. Shipping not included. Confirm on Shopee himoonbabykids before checkout.",
    },
    faqs: [
      {
        question: {
          id: "Berapa harga Makuku SAP original di HiMoon?",
          en: "How much is authentic Makuku SAP at HiMoon?",
        },
        answer: {
          id: "Kami tidak menulis angka di halaman ini. Baris katalog situs untuk Makuku SAP Comfort Fit tidak memuat IDR, jadi konfirmasi di Shopee himoonbabykids sebelum bayar. Ongkir dihitung di checkout. Tetangga etalase MamyPoko Royal Soft katalog Rp123.000.",
          en: "We do not print a number on this page. The site catalog row for Makuku SAP Comfort Fit has no IDR, so confirm on Shopee himoonbabykids before paying. Shipping is calculated at checkout. Shop neighbor MamyPoko Royal Soft is catalog Rp123,000.",
        },
      },
      {
        question: {
          id: "Makuku SAP vs MamyPoko Royal Soft — mana yang worth it?",
          en: "Makuku SAP vs MamyPoko Royal Soft — which is worth it?",
        },
        answer: {
          id: "Tidak ada pemenang medis dan tidak ada janji bebas bocor. Makuku SAP Comfort Fit (tape, harga konfirmasi di Shopee) sering dicari karena terasa lebih tipis. MamyPoko Royal Soft katalog Rp123.000 menyebut celana dan perekat organic cotton. Uji pack kecil, baca tabel berat kemasan, ruam parah ke tenaga kesehatan. Metode lengkap di /metodologi-perbandingan.",
          en: "There is no medical winner and no promised leak-free result. Makuku SAP Comfort Fit (tape, confirm price on Shopee) is often sought for a thinner feel. MamyPoko Royal Soft catalog Rp123,000 names pants and tape organic cotton. Trial a small pack, read the pack weight chart; a severe rash needs a clinician. Full method is on /metodologi-perbandingan.",
        },
      },
      {
        question: {
          id: "Apakah HiMoon official store Makuku?",
          en: "Is HiMoon the Makuku official store?",
        },
        answer: {
          id: "Kami toko ritel himoonbabykids di Kabupaten Badung, bukan klaim official store pabrik kecuali Shopee menampilkannya demikian. Beli di Shopee ke listing Makuku SAP Comfort Fit, atau tanya stok toko via WhatsApp.",
          en: "We are the himoonbabykids retail shop in Badung Regency, not a factory official store unless Shopee itself labels it that way. Buy on Shopee on the Makuku SAP Comfort Fit listing, or WhatsApp for in-store stock.",
        },
      },
      {
        question: {
          id: "Bagaimana cara Beli di Shopee dari artikel ini?",
          en: "How do I Buy on Shopee from this article?",
        },
        answer: {
          id: "Klik tombol oranye Beli di Shopee — itu ke listing item Makuku SAP Comfort Fit di toko himoonbabykids, lalu pilih varian ukuran. Atau buka /shop/popok lalu kartu Makuku. WhatsApp hanya untuk tanya ukuran atau stok toko Badung, bukan pembayaran.",
          en: "Click the orange Buy on Shopee button — it opens the Makuku SAP Comfort Fit item listing in the himoonbabykids shop, then pick a size variant. Or open /shop/popok then the Makuku card. WhatsApp is for size or Badung stock questions, not payment.",
        },
      },
    ],
    publishedAt: "2026-11-02",
    updatedAt: SITE_CONTENT_UPDATED,
    readTime: 8,
    image: SHOPEE_IMG.popok,
    imageAlt: {
      id: "Makuku SAP Comfort Fit original di HiMoon Badung dan Shopee",
      en: "Authentic Makuku SAP Comfort Fit at HiMoon Badung and Shopee",
    },
    shopHref: "/shop/popok",
    relatedSlugs: ["makuku-vs-mamypoko", "tips-memilih-popok-bayi"],
    emitFaqPageSchema: false,
    shopeeHref:
      "https://shopee.co.id/MAKUKU-SAP-Diapers-Comfort-Fit-Tape-NB-S-M-L-Xl-XXL-Popok-Bayi-Tipis-Extra-Dry-Anti-Gumpal-i.1869688077.49969731055",
    featuredProductSlugs: [
      "makuku-sap-diapers-comfort-fit-tape-nbsmlxlxxl-popok-bayi-tipis-extra-dry-anti-gumpal",
      "mamypoko-royal-soft-popok-bayi-tipe-celana-perekat",
    ],
    cta: {
      title: {
        id: "Beli Makuku SAP Comfort Fit original di Shopee",
        en: "Buy authentic Makuku SAP Comfort Fit on Shopee",
      },
      body: {
        id: "Satu SKU popok tipis Makuku SAP tipe tape. Harga tidak kami tebak di halaman ini — konfirmasi di Shopee himoonbabykids. Tombol oranye ke listing item, bukan beranda toko. MamyPoko Royal Soft Rp123.000 adalah tetangga etalase, bukan pemenang medis. WhatsApp hanya untuk tanya ukuran atau stok toko Badung.",
        en: "One thin Makuku SAP tape diaper SKU. We do not guess a price on this page — confirm on Shopee himoonbabykids. The orange button goes to the item listing, not the shop home. MamyPoko Royal Soft Rp123,000 is a shop neighbor, not a medical winner. WhatsApp is only for size or Badung in-store stock.",
      },
      button: {
        id: "Lihat katalog popok",
        en: "Browse diaper catalog",
      },
    },
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
