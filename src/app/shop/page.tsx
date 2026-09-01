import type { Metadata } from "next";
import { ShopPageClient } from "./shop-page-client";
import { getProducts } from "@/lib/catalog";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  ShopFaqBlock,
  ShopGuideLinks,
  ShopInclusions,
  ShopMoneyIntro,
} from "@/components/shop-money-content";
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { moneyPageFaqs } from "@/lib/seo/keywords";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Beli Perlengkapan Bayi Bali | MPASI, Popok, Sunscreen",
  description:
    "Toko perlengkapan bayi Bali untuk ibu hamil & new mom. MPASI, popok Makuku, sunscreen Moell. Harga mengikuti Shopee himoonbabykids. Checkout Shopee atau WhatsApp.",
  alternates: { canonical: `${siteConfig.url}/shop` },
  openGraph: {
    title: "Beli Perlengkapan Bayi Bali | HiMoon",
    description:
      "Katalog MPASI, skincare, popok, dan peralatan bayi. Belanja di Shopee himoonbabykids atau toko Badung.",
    url: `${siteConfig.url}/shop`,
  },
};

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();
  const prices = products.map((product) => product.price);
  const minPrice = prices.length ? Math.min(...prices) : 28000;
  const maxPrice = prices.length ? Math.max(...prices) : 125000;

  return (
    <div className="bg-himoon-cream">
      <JsonLdScript
        data={webPageSchema({
          path: "/shop",
          name: "Beli Perlengkapan Bayi Bali | HiMoon",
          description:
            "Toko perlengkapan bayi Bali dengan katalog MPASI, popok, dan skincare. Checkout Shopee himoonbabykids.",
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript data={faqSchema(moneyPageFaqs)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Belanja perlengkapan bayi", path: "/shop" },
        ])}
      />
      <ShopMoneyIntro
        productCount={products.length}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <ShopInclusions />
      <ShopPageClient products={products} hideHeading />
      <ShopGuideLinks />
      <ShopFaqBlock />
    </div>
  );
}
