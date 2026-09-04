import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { indonesiaLanguageAlternates } from "@/lib/seo/indonesia";

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
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    entry("/", now, 1, "daily"),
    entry("/about", now, 0.8, "monthly"),
    entry("/shop", now, 0.9, "daily"),
    entry("/blog", now, 0.7, "weekly"),
    entry("/contact", now, 0.8, "monthly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    entry(`/shop/${category.slug}`, now, 0.85, "daily"),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) =>
    entry(`/blog/${post.slug}`, new Date(post.publishedAt), 0.6, "monthly"),
  );

  return [...staticPages, ...categoryPages, ...blogPages];
}
