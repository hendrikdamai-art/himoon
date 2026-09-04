import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getProductsByCategory } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { buildIndonesiaPageMetadata, categorySeoKeywords } from "@/lib/seo/indonesia";
import { CategoryPageClient } from "./category-page-client";

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
    title: `${category.label.id} | Toko ${category.label.id} Bali`,
    description: `${category.description.id} Belanja ${category.label.id} di HiMoon Baby & Kids, Badung Bali. Pesan via WhatsApp atau Shopee.`,
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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", url: siteConfig.url },
          { name: "Toko", url: `${siteConfig.url}/shop` },
          {
            name: category.label.id,
            url: `${siteConfig.url}/shop/${category.slug}`,
          },
        ]}
      />
      <CategoryPageClient category={category} products={products} />
    </>
  );
}
