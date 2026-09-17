import catalogData from "@/data/products.json";

export const SITE_CONTENT_UPDATED = "2026-09-17";

export const LLMS_CACHE_CONTROL =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Googlebot",
  "Googlebot-Image",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Diffbot",
  "YouBot",
] as const;

const catalogPrices = (catalogData.products as { itemId: number; price: number }[])
  .filter((product) => product.itemId > 0)
  .map((product) => product.price);

/** Catalog IDR range from products.json — keep SEO copy tied to the shop source of truth. */
export const PRICE_RANGE_IDR = {
  min: catalogPrices.length ? Math.min(...catalogPrices) : 22500,
  max: catalogPrices.length ? Math.max(...catalogPrices) : 123000,
} as const;
