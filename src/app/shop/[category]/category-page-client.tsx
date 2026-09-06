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
  hideHeading = false,
}: {
  category: Category;
  products: Product[];
  hideHeading?: boolean;
}) {
  const { locale } = useLanguage();

  return (
    <div className={hideHeading ? "bg-himoon-cream pb-12 md:pb-16" : "bg-himoon-cream py-12 md:py-16"}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {hideHeading ? (
          <h2 className="mb-6 mt-10 text-2xl font-bold text-himoon-blue">
            Katalog {category.label[locale]}
          </h2>
        ) : (
          <SectionHeading
            title={category.label[locale]}
            subtitle={category.description[locale]}
          />
        )}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
