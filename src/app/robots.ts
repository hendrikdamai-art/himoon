import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { AI_CRAWLERS } from "@/lib/seo/constants";

const PRIVATE_PATHS = ["/admin/", "/api/", "/links"];

/** Search crawlers: allow the public site, keep admin/API out of the index. */
const SEARCH_CRAWLERS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "Google-InspectionTool",
  "*",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        ...(userAgent === "Googlebot-Video"
          ? {}
          : { disallow: [...PRIVATE_PATHS] }),
      })),
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
