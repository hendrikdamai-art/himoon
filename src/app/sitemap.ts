import type { MetadataRoute } from "next";
import { getBlogPosts, getCatalogMeta } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { indonesiaLanguageAlternates } from "@/lib/seo/indonesia";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

function canonicalUrl(path: string) {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function entry(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: ChangeFrequency,
): MetadataRoute.Sitemap[number] {
  return {
    url: canonicalUrl(path),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: indonesiaLanguageAlternates(path === "/" ? "" : path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDate = new Date(`${SITE_CONTENT_UPDATED}T00:00:00.000Z`);
  const catalogSynced = new Date(getCatalogMeta().lastSynced);
  const shopDate =
    Number.isNaN(catalogSynced.getTime()) || catalogSynced < contentDate
      ? contentDate
      : catalogSynced;

  const staticPages: MetadataRoute.Sitemap = [
    entry("/", shopDate, 1, "daily"),
    entry("/shop", shopDate, 1, "daily"),
    entry("/toko-bayi-bali", contentDate, 0.85, "monthly"),
    entry("/blog", contentDate, 0.8, "weekly"),
    entry("/about", contentDate, 0.7, "monthly"),
    entry("/contact", contentDate, 0.7, "monthly"),
    entry("/media-kit", contentDate, 0.5, "monthly"),
    entry("/metodologi-perbandingan", contentDate, 0.5, "monthly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    entry(`/shop/${category.slug}`, shopDate, 0.9, "daily"),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts()
    .map((post) => {
      const updated = new Date(post.updatedAt);
      return entry(
        `/blog/${post.slug}`,
        Number.isNaN(updated.getTime()) ? contentDate : updated,
        0.75,
        "monthly",
      );
    })
    .sort((a, b) => a.url.localeCompare(b.url));

  return [...staticPages, ...categoryPages, ...blogPages];
}
