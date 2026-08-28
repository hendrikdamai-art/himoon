import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getProducts } from "@/lib/catalog";
import { ShopPageClient } from "./shop-page-client";

export const metadata: Metadata = {
  title: "Belanja | MPASI, Keperluan Bayi & Anak",
  description:
    "Jelajahi katalog HiMoon Baby & Kids: MPASI, perawatan kulit bayi, popok, dan perlengkapan anak. Pesan via WhatsApp atau Shopee.",
};

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();

  return <ShopPageClient products={products} />;
}
