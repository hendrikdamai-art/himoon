import type { MetadataRoute } from "next";
import catalogData from "@/data/products.json";
import { getBlogPosts, getCatalogMeta } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import type { ProductsCatalog } from "@/types/catalog";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const catalog = catalogData as ProductsCatalog;

function canonicalUrl(path: string) {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function absoluteImage(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${siteConfig.url}${src.startsWith("/") ? src : `/${src}`}`;
}

/** Sekar-style lastmod: date only at midnight UTC */
function dayStamp(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return SITE_CONTENT_UPDATED;
  }
  return date.toISOString().slice(0, 10);
}

function entry(
  path: string,
  lastModified: Date | string,
  priority: number,
  changeFrequency: ChangeFrequency,
  images: string[] = [],
): MetadataRoute.Sitemap[number] {
  return {
    url: canonicalUrl(path),
    lastModified: dayStamp(lastModified),
    changeFrequency,
    priority,
    ...(images.length > 0
      ? { images: [...new Set(images.map(absoluteImage))] }
      : {}),
  };
}

function categoryImages(slug: string) {
  return catalog.products
    .filter((product) => product.category === slug && product.image)
    .slice(0, 3)
    .map((product) => product.image);
}

export const dynamic = "force-static";
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDate = SITE_CONTENT_UPDATED;
  const catalogSynced = getCatalogMeta().lastSynced || contentDate;
  const shopDate = catalogSynced;

  const staticPages: MetadataRoute.Sitemap = [
    entry("/", shopDate, 1, "weekly", ["/logo.png"]),
    entry("/shop", shopDate, 0.95, "weekly", ["/logo.png"]),
    entry("/toko-bayi-bali", contentDate, 0.85, "monthly"),
    entry("/blog", contentDate, 0.9, "weekly"),
    entry("/contact", contentDate, 0.85, "monthly"),
    entry("/about", contentDate, 0.8, "monthly"),
    entry("/media-kit", contentDate, 0.55, "yearly", ["/logo.png"]),
    entry("/metodologi-perbandingan", contentDate, 0.5, "yearly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    entry(
      `/shop/${category.slug}`,
      shopDate,
      0.9,
      "weekly",
      categoryImages(category.slug),
    ),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts()
    .map((post) =>
      entry(
        `/blog/${post.slug}`,
        post.updatedAt || contentDate,
        0.85,
        "weekly",
        post.image ? [post.image] : [],
      ),
    )
    .sort((a, b) => a.url.localeCompare(b.url));

  return [...staticPages, ...categoryPages, ...blogPages];
}
