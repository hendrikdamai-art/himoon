import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/lib/catalog";
import { shopCategories } from "@/lib/site-config";
import { CategoryPageClient } from "./category-page-client";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { FaqSection } from "@/components/seo/faq-section";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { getGuides } from "@/lib/seo/guides";
import Link from "next/link";

type Props = {
  params: Promise<{ category: string }>;
};

const categorySpeakable: Record<string, string> = {
  mpasi:
    "Kategori MPASI HiMoon di Bali menjual nutrisi Bunda Elia sekitar Rp45.000 dan terkait ASI booster sekitar Rp89.000 pada katalog Shopee himoonbabykids. Belanja di toko Badung, WhatsApp, atau checkout Shopee untuk stok live. MPASI biasanya mulai sekitar usia 6 bulan; ini toko ritel, bukan klinik gizi. Peralatan blender atau steamer ada di kategori Peralatan Bayi. Kirim ke Denpasar dan luar Bali lewat Shopee. Produk original sesuai merek di listing. Jika Anda mencari toko MPASI Bali yang juga punya popok dan skincare, etalase HiMoon menggabungkan kategori itu di satu shop Shopee. Baca panduan MPASI 6 bulan dan halaman toko MPASI Bali sebelum checkout. Harga bisa berubah saat promo. Ongkir tidak termasuk harga katalog. WhatsApp hanya untuk konfirmasi stok, bukan resep makan bayi. Tombol oranye mengarah langsung ke himoonbabykids. Simpan tautan shop untuk restock.",
  "baby-skincare":
    "Kategori perawatan kulit bayi HiMoon mencakup sunscreen Moell 30 gram Rp79.000, lotion Gently Rp55.000, dan tissue Paseo sekitar Rp28.000, mengikuti Shopee himoonbabykids. Cocok untuk iklim Bali yang panas dan UV tinggi. Patch test jika kulit sangat sensitif dan ikuti usia pemakaian di label merek. Beli di toko Kabupaten Badung atau tombol Beli di Shopee. Kami tidak membuat rating palsu di halaman ini. Perawatan bibir ada di kategori terpisah. Untuk newborn, konfirmasi usia minimum sunscreen pada kemasan Moell sebelum dipakai. Mustela dan Cussons muncul jika listing Shopee menampilkannya. Gabungkan dengan popok yang tidak gesek. Kirim ke Canggu, Kuta, atau luar Bali via Shopee. Ini bukan pengganti dokter kulit. Harga katalog bisa berbeda dari checkout saat flash sale. Baca panduan sunscreen bayi sebelum membeli Moell di Shopee himoonbabykids hari ini. Stok live hanya di Shopee.",
  popok:
    "Kategori popok HiMoon menjual Makuku dan MamyPoko dengan harga katalog sekitar Rp65.000 per listing yang ditampilkan, stok dan isi pack mengikuti Shopee himoonbabykids. Pilih ukuran menurut berat badan di kemasan, bukan usia. Coba pack kecil sebelum grosir. Ambil di toko Badung atau kirim Shopee ke seluruh Indonesia yang dijangkau kurir. Tips ukuran dan perbandingan merek ada di panduan blog kami. Ganti popok teratur; ruam parah perlu tenaga kesehatan, bukan diagnosis dari toko. Tidak ada pemenang abadi antara Makuku dan MamyPoko. Metodologi perbandingan dipublikasikan terpisah tanpa survei fiktif. Ongkir dihitung Shopee. Jika listing habis, jangan anggap merek lain otomatis lebih baik. Chat WhatsApp untuk stok fisik sebelum datang. Baca artikel Makuku versus MamyPoko lalu checkout Shopee himoonbabykids untuk stok live dan isi pack. Stok live hanya di Shopee himoonbabykids. Cek Shopee dulu.",
  "peralatan-bayi":
    "Peralatan bayi HiMoon mencakup kebutuhan MPASI seperti blender, steamer, dan botol sesuai stok Shopee, dengan harga katalog sekitar Rp125.000. Beli alat setelah jadwal MPASI benar-benar mulai, bukan sekadar lengkap di keranjang. Order via Shopee himoonbabykids atau tanya stok fisik WhatsApp. Toko di Kabupaten Badung. Ongkir tidak termasuk harga katalog. Merek seperti Philips Avent muncul jika listing Shopee membawanya. Lihat juga kategori MPASI untuk nutrisi Bunda Elia. Kami tidak mengklaim SKU yang tidak ada di etalase. Kirim ke Denpasar, Canggu, dan luar Bali mengikuti kurir Shopee. Panduan MPASI 6 bulan menjelaskan tanda kesiapan sebelum belanja alat. Ini toko ritel, bukan kelas memasak bayi. Konfirmasi foto dan judul item di Shopee sebelum bayar. Simpan tautan himoonbabykids untuk restock perlengkapan makan bayi di Bali setiap bulan. Stok live hanya di Shopee. Cek Shopee dulu.",
  "treatment-bibir":
    "Treatment bibir bayi di HiMoon berharga katalog sekitar Rp35.000 dan ditujukan untuk bibir kering, mengikuti stok Shopee himoonbabykids. Produk original dari brand yang tertera di listing. Beli di toko Badung atau checkout Shopee. Ini perawatan ritel, bukan obat. Jika bibir pecah-pecah parah atau ada luka, konsultasi tenaga kesehatan. Kombinasikan dengan lotion dan sunscreen sesuai kebutuhan iklim Bali. Harga bisa berubah saat promo Shopee. Mustela atau merek lain hanya kami jual jika muncul di etalase. Kirim ke seluruh Indonesia yang dijangkau Shopee. Patch test di area kecil jika kulit sangat sensitif. WhatsApp untuk tanya stok fisik. Halaman ini menaut ke katalog, bukan klaim medis. Baca usia pemakaian di kemasan sebelum dipakai newborn. Lanjut ke kategori skincare jika butuh lotion harian untuk kulit kering Bali dan UV tinggi. Stok live hanya di Shopee.",
};

const categoryFaqs: Record<
  string,
  { question: { id: string; en: string }; answer: { id: string; en: string } }[]
> = {
  mpasi: [
    {
      question: { id: "Berapa harga MPASI di HiMoon?", en: "MPASI price?" },
      answer: {
        id: "Bunda Elia sekitar Rp45.000 di katalog. Cek Shopee untuk harga live.",
        en: "Bunda Elia about Rp45,000 on the catalog. Check Shopee for live price.",
      },
    },
    {
      question: { id: "Bisa beli MPASI di Shopee?", en: "Buy MPASI on Shopee?" },
      answer: {
        id: "Ya, toko himoonbabykids. Gunakan tombol Beli di Shopee.",
        en: "Yes, himoonbabykids. Use Buy on Shopee.",
      },
    },
  ],
  "baby-skincare": [
    {
      question: { id: "Berapa harga sunscreen bayi Moell?", en: "Moell price?" },
      answer: {
        id: "Katalog Rp79.000 untuk 30gr. Konfirmasi di Shopee.",
        en: "Catalog Rp79,000 for 30g. Confirm on Shopee.",
      },
    },
    {
      question: { id: "Original?", en: "Authentic?" },
      answer: {
        id: "Kami menjual produk asli dari brand yang tertera di listing.",
        en: "We sell authentic products from the brands shown on the listing.",
      },
    },
  ],
  popok: [
    {
      question: { id: "Berapa harga popok?", en: "Diaper price?" },
      answer: {
        id: "Listing katalog sekitar Rp65.000. Isi pack baca judul Shopee.",
        en: "Catalog listing about Rp65,000. Pack count is on the Shopee title.",
      },
    },
    {
      question: { id: "Makuku atau MamyPoko?", en: "Makuku or MamyPoko?" },
      answer: {
        id: "Keduanya bisa ada di stok. Baca tips dan halaman perbandingan kami.",
        en: "Both may be in stock. Read our tips and comparison page.",
      },
    },
  ],
  "peralatan-bayi": [
    {
      question: { id: "Berapa harga peralatan?", en: "Equipment price?" },
      answer: {
        id: "Katalog sekitar Rp125.000. Stok mengikuti Shopee.",
        en: "Catalog around Rp125,000. Stock follows Shopee.",
      },
    },
    {
      question: { id: "Ada Philips Avent?", en: "Philips Avent?" },
      answer: {
        id: "Jika listing Shopee kami menampilkannya. Kami tidak mengklaim SKU yang tidak ada di etalase.",
        en: "If our Shopee listing shows it. We do not claim SKUs that are not in the shop.",
      },
    },
  ],
  "treatment-bibir": [
    {
      question: { id: "Berapa harga treatment bibir?", en: "Lip care price?" },
      answer: {
        id: "Katalog sekitar Rp35.000.",
        en: "Catalog about Rp35,000.",
      },
    },
    {
      question: { id: "Untuk usia berapa?", en: "Which age?" },
      answer: {
        id: "Ikuti label merek di kemasan. Jika ragu, WhatsApp kami dengan foto listing.",
        en: "Follow the brand label. If unsure, WhatsApp us with the listing photo.",
      },
    },
  ],
};

export async function generateStaticParams() {
  return shopCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) return {};

  return {
    title: `Beli ${category.label.id} di Bali`,
    description: category.description.id,
    alternates: { canonical: `${siteConfig.url}/shop/${category.slug}` },
  };
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);
  const related = getGuides()
    .filter((guide) => guide.shopHref.includes(category.slug) || guide.shopHref === "/shop")
    .slice(0, 3);
  const faqs = categoryFaqs[category.slug] ?? [];

  return (
    <div className="bg-himoon-cream">
      <JsonLdScript
        data={webPageSchema({
          path: `/shop/${category.slug}`,
          name: category.label.id,
          description: category.description.id,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      {faqs.length ? <JsonLdScript data={faqSchema(faqs)} /> : null}
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Belanja", path: "/shop" },
          { name: category.label.id, path: `/shop/${category.slug}` },
        ])}
      />
      <div className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <h1 className="text-3xl font-extrabold text-himoon-blue md:text-4xl">
          {category.label.id} — beli di Bali & Shopee
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-himoon-muted">{category.description.id}</p>
        <SpeakableAnswer id={`speakable-${category.slug}`} className="mt-6">
          <p>{categorySpeakable[category.slug]}</p>
        </SpeakableAnswer>
        <div className="mt-5 flex flex-wrap gap-3">
          <ShopeeCta />
          <ShopCta href="/shop" label="Semua produk" />
        </div>
      </div>
      <CategoryPageClient category={category} products={products} hideHeading />
      {related.length ? (
        <div className="mx-auto max-w-7xl px-4 pb-4 md:px-6">
          <h2 className="text-xl font-bold text-himoon-blue">Baca dulu, belanja sesudah</h2>
          <ul className="mt-3 space-y-2">
            {related.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/blog/${guide.slug}`} className="font-semibold text-himoon-blue underline">
                  {guide.title.id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {faqs.length ? (
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <FaqSection title={`FAQ ${category.label.id}`} faqs={faqs} />
        </div>
      ) : null}
    </div>
  );
}
