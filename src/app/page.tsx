import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { BrandMarquee } from "@/components/brand-marquee";
import { ReviewsSection } from "@/components/reviews-section";
import { HowToBuy } from "@/components/how-to-buy";
import { BlogPreview } from "@/components/blog-preview";
import { getProducts, getBrands, getReviews, getBlogPosts } from "@/lib/catalog";

export const revalidate = 3600;

export default async function HomePage() {
  const [products, brands, reviews, blogPosts] = await Promise.all([
    getProducts(),
    Promise.resolve(getBrands()),
    Promise.resolve(getReviews()),
    Promise.resolve(getBlogPosts()),
  ]);

  const featured = products.slice(0, 8);

  return (
    <>
      <Hero />
      <ValueProps />
      <CategoryGrid />
      <FeaturedProducts products={featured} />
      <BrandMarquee brands={brands} />
      <ReviewsSection reviews={reviews} />
      <HowToBuy />
      <BlogPreview posts={blogPosts} />
    </>
  );
}
