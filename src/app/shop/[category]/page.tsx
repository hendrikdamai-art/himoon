import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/lib/catalog";
import { getGuides } from "@/lib/seo/guides";
import { shopCategories } from "@/lib/site-config";
import { FaqSection } from "@/components/seo/faq-section";
import { buildIndonesiaPageMetadata, categorySeoKeywords } from "@/lib/seo/indonesia";
import { CategoryPageClient } from "./category-page-client";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
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

export async function generateStaticParams() {
  return shopCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) return {};

  return buildIndonesiaPageMetadata({
    title: `${category.label.id} | Baby Shop Bali`,
    description: `${category.description.id} Belanja ${category.label.id} di baby shop HiMoon, Badung Bali. Pesan via WhatsApp atau Shopee himoonbabykids.`,
    path: `/shop/${category.slug}`,
    keywords: ["Baby Shop Bali", ...(categorySeoKeywords[category.slug] ?? [])],
  });
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);
  const relatedGuides = getGuides()
    .filter((guide) => guide.shopHref === `/shop/${category.slug}` || guide.relatedCategory === category.slug)
    .slice(0, 3);

  const faqs = [
    {
      question: {
        id: `Apakah HiMoon jual ${category.label.id}?`,
        en: `Does HiMoon sell ${category.label.en}?`,
      },
      answer: {
        id: `Ya. ${category.description.id} Lihat katalog di bawah, lalu checkout Shopee himoonbabykids untuk stok live.`,
        en: `Yes. ${category.description.en} Browse the catalog below, then checkout on Shopee himoonbabykids for live stock.`,
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
  ];

  const speakable = `Kategori ${category.label.id} di baby shop HiMoon Bali menampilkan item yang sama dengan etalase Shopee himoonbabykids. ${category.description.id} Harga dan stok mengikuti Shopee; konfirmasi listing sebelum checkout. Ibu hamil dan new mom bisa ambil di Badung atau kirim ke Denpasar, Canggu, Kuta, Ubud, dan luar Bali lewat kurir Shopee. Halaman belanja utama tetap /shop. Kami tidak menempel rating palsu. Pilih produk di grid, lalu tombol oranye ke Shopee.`;

  return (
    <div className="bg-himoon-cream">
      <JsonLdScript
        data={webPageSchema({
          path: `/shop/${category.slug}`,
          name: `${category.label.id} | Baby Shop Bali`,
          description: category.description.id,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript data={faqSchema(faqs)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Baby Shop", path: "/shop" },
          { name: category.label.id, path: `/shop/${category.slug}` },
        ])}
      />
      <header className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
          Baby Shop Bali · {category.label.id}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-himoon-blue md:text-4xl">
          {category.label.id} di baby shop HiMoon
        </h1>
        <SpeakableAnswer id={`category-${category.slug}`} className="mt-6 max-w-4xl">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopeeCta />
          <ShopCta href="/shop" label="Semua katalog baby shop" />
        </div>
        {relatedGuides.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-3 text-sm">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="font-semibold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2"
                >
                  {guide.query.id}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </header>
      <CategoryPageClient category={category} products={products} hideHeading />
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <FaqSection title={`FAQ ${category.label.id}`} faqs={faqs} />
      </div>
    </div>
  );
}
