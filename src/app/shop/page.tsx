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
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Beli Perlengkapan Bayi Bali | MPASI, Popok, Sunscreen",
  description:
    "Toko perlengkapan bayi Bali untuk ibu hamil & new mom. MPASI Bunda Elia, popok MamyPoko, sunscreen Moell. Harga Rp22.500–Rp123.000 mengikuti Shopee himoonbabykids.",
  path: "/shop",
  keywords: [
    "toko perlengkapan bayi Bali",
    "beli perlengkapan bayi online",
    "toko bayi Badung",
    "perlengkapan bayi Shopee",
  ],
});

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();
  const prices = products.map((product) => product.price);
  const minPrice = prices.length ? Math.min(...prices) : 22500;
  const maxPrice = prices.length ? Math.max(...prices) : 123000;

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
