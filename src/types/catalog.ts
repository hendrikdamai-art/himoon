import type { ShopCategorySlug } from "@/lib/site-config";

export type LocalizedText = {
  id: string;
  en: string;
};

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
  text: LocalizedText;
  product: string;
  date: string;
};

export type GuideFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type GuideSection = {
  heading: LocalizedText;
  body: LocalizedText;
};

export type BlogPost = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  query: LocalizedText;
  content: LocalizedText;
  speakable: LocalizedText;
  sections: GuideSection[];
  inclusions: { id: string[]; en: string[] };
  priceNote: LocalizedText;
  faqs: GuideFaq[];
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  image: string;
  imageAlt: LocalizedText;
  shopHref: string;
  relatedSlugs: string[];
  phase: "month1" | "month2";
};

export type ProductsCatalog = {
  lastSynced: string;
  products: Product[];
};
