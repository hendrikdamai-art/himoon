import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { hreflangAlternates } from "@/lib/seo/indonesia";

function withHreflang(url: string, lastModified: Date, priority: number, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]) {
  return {
    url,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: hreflangAlternates.languages,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    withHreflang(baseUrl, now, 1, "daily"),
    withHreflang(`${baseUrl}/about`, now, 0.8, "monthly"),
    withHreflang(`${baseUrl}/shop`, now, 0.9, "daily"),
    withHreflang(`${baseUrl}/blog`, now, 0.7, "weekly"),
    withHreflang(`${baseUrl}/contact`, now, 0.8, "monthly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    withHreflang(`${baseUrl}/shop/${category.slug}`, now, 0.85, "daily"),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) =>
    withHreflang(`${baseUrl}/blog/${post.slug}`, new Date(post.publishedAt), 0.6, "monthly"),
  );

  return [...staticPages, ...categoryPages, ...blogPages];
}
