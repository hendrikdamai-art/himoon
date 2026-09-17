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
  aggregateOfferSchema,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { getMoneyPageFaqs } from "@/lib/seo/keywords";
import { PRICE_RANGE_IDR, SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";
import { formatPrice } from "@/lib/utils";

const shopTitle = `Baby Shop Bali | Perlengkapan Bayi ${formatPrice(PRICE_RANGE_IDR.min)}–${formatPrice(PRICE_RANGE_IDR.max)}`;
const shopDescription = `Baby shop Bali di Badung. MPASI Bunda Elia, popok MamyPoko, sunscreen Moell. Harga ${formatPrice(PRICE_RANGE_IDR.min)}–${formatPrice(PRICE_RANGE_IDR.max)}. Ambil di toko atau kirim Shopee himoonbabykids.`;

export const metadata: Metadata = {
  ...buildIndonesiaPageMetadata({
    title: shopTitle,
    description: shopDescription,
    path: "/shop",
    keywords: [
      "Baby Shop",
      "Baby Shop Bali",
      "toko perlengkapan bayi Bali",
      "toko bayi Bali",
      "beli perlengkapan bayi online",
      "perlengkapan bayi Shopee",
    ],
  }),
  title: {
    absolute: shopTitle,
  },
};

export const revalidate = 3600;

export default async function ShopPage() {
  const products = await getProducts();
  const prices = products.map((product) => product.price);
  const minPrice = prices.length ? Math.min(...prices) : PRICE_RANGE_IDR.min;
  const maxPrice = prices.length ? Math.max(...prices) : PRICE_RANGE_IDR.max;
  const faqs = getMoneyPageFaqs(minPrice, maxPrice);

  return (
    <div className="bg-himoon-cream">
      <JsonLdScript
        data={webPageSchema({
          path: "/shop",
          name: shopTitle,
          description: shopDescription,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript data={faqSchema(faqs)} />
      <JsonLdScript
        data={aggregateOfferSchema({
          path: "/shop",
          name: shopTitle,
          description: shopDescription,
          lowPrice: minPrice,
          highPrice: maxPrice,
          offerCount: products.length,
        })}
      />
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
      <ShopFaqBlock minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
}
