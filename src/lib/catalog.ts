import catalogData from "@/data/products.json";
import brandsData from "@/data/brands.json";
import reviewsData from "@/data/reviews.json";
import type {
  BlogPost,
  Brand,
  Product,
  ProductsCatalog,
  Review,
} from "@/types/catalog";
import { fetchShopeeProducts } from "./shopee";
import type { ShopCategorySlug } from "./site-config";
import { getGuide, getGuides } from "@/lib/seo/guides";

const catalog = catalogData as ProductsCatalog;
const brands = brandsData as Brand[];
const reviews = reviewsData as Review[];

export async function getProducts(): Promise<Product[]> {
  try {
    const live = await fetchShopeeProducts();
    if (live.length > catalog.products.length) {
      return live;
    }
  } catch {
    // Fall back to static catalog when Shopee API is unavailable.
  }
  return catalog.products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(
  category: ShopCategorySlug,
): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((product) => product.category === category);
}

export function getBrands(): Brand[] {
  return brands;
}

export function getReviews(): Review[] {
  return reviews;
}

export function getBlogPosts(): BlogPost[] {
  return getGuides();
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getGuide(slug);
}

export function getCatalogMeta(): Pick<ProductsCatalog, "lastSynced"> {
  return { lastSynced: catalog.lastSynced };
}
