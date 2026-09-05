"use client";

import type { Product } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-card";

export function ShopPageClient({
  products,
  hideHeading = false,
}: {
  products: Product[];
  hideHeading?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className={hideHeading ? "bg-himoon-cream pb-12 md:pb-16" : "bg-himoon-cream py-12 md:py-16"}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {hideHeading ? (
          <h2 className="mb-6 text-2xl font-bold text-himoon-blue">{t.products.title}</h2>
        ) : (
          <SectionHeading title={t.nav.shop} subtitle={t.products.subtitle} />
        )}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
