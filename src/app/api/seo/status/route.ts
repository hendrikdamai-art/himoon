import { NextResponse } from "next/server";
import { getGuides, wordCount } from "@/lib/seo/guides";
import { shopCategories, siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

export function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");
  const url = new URL(request.url);
  const authed =
    Boolean(secret) &&
    (auth === `Bearer ${secret}` || url.searchParams.get("secret") === secret);

  const guides = getGuides();
  const speakable = guides.map((guide) => ({
    slug: guide.slug,
    words: wordCount(guide.speakable.id),
  }));

  const publicBody = {
    ok: true,
    site: siteConfig.url,
    contentUpdated: SITE_CONTENT_UPDATED,
    guides: guides.length,
    categories: shopCategories.length,
    llms: "/llms.txt",
    llmsFull: "/llms-full.txt",
    moneyPage: "/shop",
  };

  if (!authed) {
    return NextResponse.json({
      ...publicBody,
      cronConfigured: Boolean(secret),
    });
  }

  return NextResponse.json({
    ...publicBody,
    authenticated: true,
    speakableWordCounts: speakable,
    shopee: siteConfig.shopeeShopUrl,
  });
}
