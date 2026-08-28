"use client";

import type { Product } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-card";

export function ShopPageClient({ products }: { products: Product[] }) {
  const { t } = useLanguage();

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={t.nav.shop}
          subtitle={t.products.subtitle}
        />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
