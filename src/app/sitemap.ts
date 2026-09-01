import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const contentDate = new Date(SITE_CONTENT_UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: contentDate, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/shop`, lastModified: contentDate, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: contentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: contentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: contentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/toko-bayi-bali`, lastModified: contentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/media-kit`, lastModified: contentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/metodologi-perbandingan`, lastModified: contentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/llms.txt`, lastModified: contentDate, changeFrequency: "weekly", priority: 0.4 },
    { url: `${baseUrl}/llms-full.txt`, lastModified: contentDate, changeFrequency: "weekly", priority: 0.4 },
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) => ({
    url: `${baseUrl}/shop/${category.slug}`,
    lastModified: contentDate,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}
