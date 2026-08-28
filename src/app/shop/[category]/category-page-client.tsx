"use client";

import type { Product } from "@/types/catalog";
import type { shopCategories } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-card";

type Category = (typeof shopCategories)[number];

export function CategoryPageClient({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const { locale } = useLanguage();

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={category.label[locale]}
          subtitle={category.description[locale]}
        />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
