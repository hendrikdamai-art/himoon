import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getProducts } from "@/lib/catalog";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";
import { ShopPageClient } from "./shop-page-client";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Belanja MPASI, Popok & Keperluan Bayi",
  description:
    "Katalog HiMoon Baby & Kids Bali: MPASI, perawatan kulit bayi, popok Makuku & MamyPoko, peralatan bayi. Pesan via WhatsApp atau Shopee Indonesia.",
  path: "/shop",
  keywords: ["belanja MPASI online", "katalog produk bayi Bali", "toko bayi Shopee"],
});

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();

  return <ShopPageClient products={products} />;
}
