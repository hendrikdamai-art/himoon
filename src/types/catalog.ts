import type { ShopCategorySlug } from "@/lib/site-config";

export type Product = {
  id: string;
  itemId: number;
  shopId: number;
  name: string;
  nameEn?: string;
  slug: string;
  price: number;
  image: string;
  category: ShopCategorySlug;
  shopeeUrl: string;
  brand?: string;
  inStock: boolean;
  syncedAt: string;
};

export type Brand = {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
};

export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: { id: string; en: string };
  product: string;
  date: string;
};

export type BlogPost = {
  slug: string;
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  content: { id: string; en: string };
  publishedAt: string;
  readTime: number;
  image: string;
  /** Primary shop category for SEO internal links + CTA */
  relatedCategory: ShopCategorySlug;
  cta: {
    title: { id: string; en: string };
    body: { id: string; en: string };
    button: { id: string; en: string };
  };
};

export type ProductsCatalog = {
  lastSynced: string;
  products: Product[];
};
