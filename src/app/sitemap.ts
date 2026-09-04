import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/catalog";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { hreflangAlternates } from "@/lib/seo/indonesia";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

function withHreflang(
  url: string,
  lastModified: Date,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"],
) {
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
  const contentDate = new Date(SITE_CONTENT_UPDATED);

  const staticPages: MetadataRoute.Sitemap = [
    withHreflang(baseUrl, contentDate, 1, "daily"),
    withHreflang(`${baseUrl}/shop`, contentDate, 1, "daily"),
    withHreflang(`${baseUrl}/about`, contentDate, 0.7, "monthly"),
    withHreflang(`${baseUrl}/blog`, contentDate, 0.8, "weekly"),
    withHreflang(`${baseUrl}/contact`, contentDate, 0.7, "monthly"),
    withHreflang(`${baseUrl}/toko-bayi-bali`, contentDate, 0.85, "monthly"),
    withHreflang(`${baseUrl}/media-kit`, contentDate, 0.5, "monthly"),
    withHreflang(`${baseUrl}/metodologi-perbandingan`, contentDate, 0.5, "monthly"),
  ];

  const categoryPages: MetadataRoute.Sitemap = shopCategories.map((category) =>
    withHreflang(`${baseUrl}/shop/${category.slug}`, contentDate, 0.9, "daily"),
  );

  const blogPages: MetadataRoute.Sitemap = getBlogPosts().map((post) =>
    withHreflang(`${baseUrl}/blog/${post.slug}`, new Date(post.updatedAt), 0.75, "monthly"),
  );

  return [...staticPages, ...categoryPages, ...blogPages];
}
