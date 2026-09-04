import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { BrandMarquee } from "@/components/brand-marquee";
import { ReviewsSection } from "@/components/reviews-section";
import { HowToBuy } from "@/components/how-to-buy";
import { BlogPreview } from "@/components/blog-preview";
import { HomeSeoBlock } from "@/components/home-seo-block";
import { getProducts, getBrands, getReviews, getBlogPosts } from "@/lib/catalog";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";
import { moneyPageFaqs } from "@/lib/seo/keywords";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

export const revalidate = 3600;

export default async function HomePage() {
  const [products, brands, reviews, blogPosts] = await Promise.all([
    getProducts(),
    Promise.resolve(getBrands()),
    Promise.resolve(getReviews()),
    Promise.resolve(getBlogPosts()),
  ]);

  const featured = products.slice(0, 12);

  return (
    <>
      <JsonLdScript
        data={webPageSchema({
          path: "/",
          name: "Toko Perlengkapan Bayi Bali | HiMoon",
          description:
            "Toko perlengkapan bayi Badung dengan katalog Shopee himoonbabykids.",
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript data={faqSchema(moneyPageFaqs)} />
      <Hero />
      <FeaturedProducts products={featured} />
      <HomeSeoBlock />
      <ValueProps />
      <CategoryGrid />
      <BrandMarquee brands={brands} />
      <ReviewsSection reviews={reviews} />
      <HowToBuy />
      <BlogPreview posts={blogPosts} />
    </>
  );
}
