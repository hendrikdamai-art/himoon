import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/lib/catalog";
import { getGuides } from "@/lib/seo/guides";
import { shopCategories } from "@/lib/site-config";
import { buildIndonesiaPageMetadata, categorySeoKeywords } from "@/lib/seo/indonesia";
import { CategoryPageClient } from "./category-page-client";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

type Props = {
  params: Promise<{ category: string }>;
};

const categorySpeakable: Record<string, string> = {
  mpasi:
    "Kategori MPASI HiMoon menampilkan Bunda Elia BB Booster Rice Rp55.000 dan saringan MPASI stainless Rp29.500 pada katalog situs, mengikuti Shopee himoonbabykids. MPASI biasanya dimulai sekitar usia enam bulan dengan tekstur halus dan porsi kecil. Kami toko ritel di Kabupaten Badung, bukan klinik gizi; ikuti label merek dan tenaga kesehatan. Belanja di toko, WhatsApp, atau tombol Beli di Shopee agar stok dan ongkir live. Mom Uung atau ASI booster hanya kami jual jika listing Shopee menampilkannya. Bandingkan dengan toko MPASI bahan curah di Bali jika Anda butuh itu; keunggulan HiMoon adalah MPASI plus popok dan skincare di satu shop. Ongkir tidak termasuk harga katalog. Baca panduan MPASI 6 bulan sebelum checkout. Kirim ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali via Shopee. Simpan tautan himoonbabykids untuk restock.",
  "baby-skincare":
    "Kategori perawatan kulit bayi HiMoon mencakup Moell Physical Sunscreen 30 gram Rp79.000, Gently Physical Sunscreen Rp75.000, Gently Hydra Soft Body Lotion Rp93.000, dan tisu Paseo Rp22.500, mengikuti Shopee himoonbabykids. Cocok untuk iklim Bali yang panas dan UV tinggi. Patch test jika kulit sangat sensitif dan ikuti usia pemakaian di label merek. Beli di toko Kabupaten Badung atau tombol Beli di Shopee. Kami tidak membuat rating palsu di halaman ini. Perawatan bibir Beeme ada di kategori terpisah. Untuk newborn, konfirmasi usia minimum sunscreen pada kemasan sebelum dipakai. Gabungkan dengan popok yang tidak gesek. Kirim ke Canggu, Kuta, atau luar Bali via Shopee. Ini bukan pengganti dokter kulit. Harga katalog bisa berbeda dari checkout saat flash sale. Baca panduan sunscreen bayi sebelum membeli.",
  popok:
    "Kategori popok HiMoon menampilkan MamyPoko Royal Soft Rp123.000 pada katalog situs. Makuku hanya jika listing Shopee himoonbabykids menampilkannya. Pilih ukuran menurut berat badan di kemasan, bukan usia. Coba pack kecil sebelum grosir. Ambil di toko Badung atau kirim Shopee. Tips ukuran dan perbandingan merek ada di panduan blog. Ganti popok teratur; ruam parah perlu tenaga kesehatan, bukan diagnosis dari toko. Tidak ada pemenang abadi antara Makuku dan MamyPoko. Metodologi perbandingan dipublikasikan terpisah tanpa survei fiktif. Ongkir dihitung Shopee. Chat WhatsApp untuk stok fisik sebelum datang. Baca artikel Makuku versus MamyPoko lalu checkout Shopee untuk isi pack live.",
  "peralatan-bayi":
    "Peralatan bayi HiMoon pada katalog situs mencakup saringan MPASI Ceko stainless Rp29.500. Beli alat setelah jadwal MPASI benar-benar mulai, bukan sekadar lengkap di keranjang. Order via Shopee himoonbabykids atau tanya stok fisik WhatsApp. Toko di Kabupaten Badung. Ongkir tidak termasuk harga katalog. Merek lain muncul hanya jika listing Shopee membawanya. Lihat juga kategori MPASI untuk nutrisi Bunda Elia Rp55.000. Kami tidak mengklaim SKU yang tidak ada di etalase. Kirim ke Denpasar, Canggu, dan luar Bali mengikuti kurir Shopee. Panduan MPASI 6 bulan menjelaskan tanda kesiapan sebelum belanja alat. Ini toko ritel, bukan kelas memasak bayi. Konfirmasi foto dan judul item di Shopee sebelum bayar.",
  "treatment-bibir":
    "Treatment bibir bayi di HiMoon pada katalog situs mencakup Beeme Honey Lollipop Balm Rp70.000, mengikuti stok Shopee himoonbabykids. Produk original dari brand yang tertera di listing. Beli di toko Badung atau checkout Shopee. Ini perawatan ritel, bukan obat. Jika bibir pecah-pecah parah atau ada luka, konsultasi tenaga kesehatan. Kombinasikan dengan lotion dan sunscreen sesuai kebutuhan iklim Bali. Harga bisa berubah saat promo Shopee. Merek lain hanya kami jual jika muncul di etalase. Kirim ke seluruh Indonesia yang dijangkau Shopee. Patch test di area kecil jika kulit sangat sensitif. WhatsApp untuk tanya stok fisik. Baca usia pemakaian di kemasan sebelum dipakai newborn. Lanjut ke kategori skincare jika butuh lotion harian.",
};

const categoryFaqs: Record<
  string,
  { question: { id: string; en: string }; answer: { id: string; en: string } }[]
> = {
  mpasi: [
    {
      question: { id: "Berapa harga MPASI di HiMoon?", en: "MPASI price?" },
      answer: {
        id: "Bunda Elia BB Booster Rice Rp55.000 di katalog situs. Cek Shopee untuk harga live.",
        en: "Bunda Elia BB Booster Rice is Rp55,000 on the site catalog. Check Shopee for the live price.",
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
        id: "Katalog Rp79.000 untuk Moell Physical Sunscreen 30gr. Gently Physical Sunscreen Rp75.000. Konfirmasi di Shopee.",
        en: "Catalog Rp79,000 for Moell Physical Sunscreen 30g. Gently Physical Sunscreen Rp75,000. Confirm on Shopee.",
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
        id: "MamyPoko Royal Soft Rp123.000 di katalog situs. Makuku hanya jika ada di Shopee. Isi pack baca judul listing.",
        en: "MamyPoko Royal Soft is Rp123,000 on the site catalog. Makuku only if Shopee lists it. Pack count is on the listing title.",
      },
    },
    {
      question: { id: "Makuku atau MamyPoko?", en: "Makuku or MamyPoko?" },
      answer: {
        id: "MamyPoko ada di katalog. Makuku sesuai stok Shopee. Baca tips dan halaman perbandingan kami.",
        en: "MamyPoko is on the catalog. Makuku follows Shopee stock. Read our tips and comparison page.",
      },
    },
  ],
  "peralatan-bayi": [
    {
      question: { id: "Berapa harga peralatan?", en: "Equipment price?" },
      answer: {
        id: "Saringan MPASI Ceko stainless Rp29.500 di katalog. Stok lain mengikuti Shopee.",
        en: "The Ceko stainless MPASI strainer is Rp29,500 on the catalog. Other tools follow Shopee.",
      },
    },
    {
      question: { id: "Ada blender MPASI?", en: "MPASI blender?" },
      answer: {
        id: "Kami hanya mengklaim SKU yang ada di etalase. Jika blender tidak listed, kami tidak menjualnya saat ini.",
        en: "We only claim SKUs on the shop floor. If a blender is not listed, we are not selling it right now.",
      },
    },
  ],
  "treatment-bibir": [
    {
      question: { id: "Berapa harga treatment bibir?", en: "Lip care price?" },
      answer: {
        id: "Beeme Honey Lollipop Balm Rp70.000 di katalog situs.",
        en: "Beeme Honey Lollipop Balm is Rp70,000 on the site catalog.",
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

  return buildIndonesiaPageMetadata({
    title: `Beli ${category.label.id} di Bali | Shopee HiMoon`,
    description: `${category.description.id} Belanja ${category.label.id} di HiMoon Badung atau checkout Shopee himoonbabykids.`,
    path: `/shop/${category.slug}`,
    keywords: categorySeoKeywords[category.slug] ?? [],
  });
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
