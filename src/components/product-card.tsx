"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-provider";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/catalog";
import { OrderButtons } from "./order-buttons";

export function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useLanguage();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.brand ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-himoon-blue shadow">
            {product.brand}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-himoon-blue md:text-base">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-extrabold text-himoon-yellow">
          {formatPrice(product.price, locale)}
        </p>
        <div className="mt-auto pt-4">
          <OrderButtons product={product} compact />
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-himoon-muted">
        Produk sedang dimuat. Silakan kunjungi{" "}
        <a href="https://shopee.co.id/himoonbabykids" className="font-semibold text-himoon-blue underline">
          toko Shopee
        </a>{" "}
        kami.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
