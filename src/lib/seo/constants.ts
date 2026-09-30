export const SITE_CONTENT_UPDATED = "2026-09-30";

export const LLMS_CACHE_CONTROL =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

/** AI / answer-engine crawlers allowed to read the public site. */
export const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Anthropic-AI",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "FacebookBot",
  "meta-externalagent",
  "cohere-ai",
  "Amazonbot",
  "Diffbot",
  "YouBot",
] as const;

export const PRICE_RANGE_IDR = {
  min: 22500,
  max: 123000,
} as const;
