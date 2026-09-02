"use client";

import Link from "next/link";
import type { Product } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-card";

export function FeaturedProducts({ products }: { products: Product[] }) {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <SectionHeading title={t.products.title} subtitle={t.products.subtitle} />
          <Link
            href="/shop"
            className="rounded-full border-2 border-himoon-blue px-5 py-2 text-sm font-bold text-himoon-blue transition hover:bg-himoon-blue hover:text-white"
          >
            {t.products.viewAll} →
          </Link>
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
