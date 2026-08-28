import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-card";
import { getProductsByCategory } from "@/lib/catalog";
import { shopCategories } from "@/lib/site-config";
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

  return {
    title: `${category.label.id} | HiMoon Baby & Kids`,
    description: category.description.id,
  };
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);

  return <CategoryPageClient category={category} products={products} />;
}
