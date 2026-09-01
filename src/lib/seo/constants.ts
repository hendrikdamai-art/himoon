export const SITE_CONTENT_UPDATED = "2026-09-01";

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

export const PRICE_RANGE_IDR = {
  min: 28000,
  max: 125000,
} as const;
