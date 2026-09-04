import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { AI_CRAWLERS } from "@/lib/seo/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [...AI_CRAWLERS],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/shop", "/blog"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
