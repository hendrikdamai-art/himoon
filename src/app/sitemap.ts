import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { indonesiaLanguageAlternates } from "@/lib/seo/indonesia";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

function entry(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"],
) {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  return {
    url,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: indonesiaLanguageAlternates(path === "/" ? "" : path),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDate = new Date(SITE_CONTENT_UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    entry("/", contentDate, 1, "daily"),
    entry("/shop", contentDate, 1, "daily"),
    entry("/toko-bayi-bali", contentDate, 0.85, "monthly"),
    entry("/about", contentDate, 0.7, "monthly"),
    entry("/blog", contentDate, 0.8, "weekly"),
    entry("/contact", contentDate, 0.7, "monthly"),
    entry("/media-kit", contentDate, 0.5, "monthly"),
    entry("/metodologi-perbandingan", contentDate, 0.5, "monthly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    entry(`/shop/${category.slug}`, contentDate, 0.9, "daily"),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) =>
    entry(`/blog/${post.slug}`, new Date(post.updatedAt), 0.75, "monthly"),
  );

  return [...staticPages, ...categoryPages, ...blogPages];
}
