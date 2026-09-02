#!/usr/bin/env node
/**
 * Sync products from Shopee into src/data/products.json.
 * Run locally (Indonesia network works best): npm run sync:products
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const TARGET = join(ROOT, "src/data/products.json");

const siteConfig = {
  shopeeShopId: 1869688077,
  shopeeUsername: "himoonbabykids",
  shopeeShopUrl: "https://shopee.co.id/himoonbabykids",
};

const shopCategories = [
  { slug: "mpasi", shopeeCategoryId: 276164519 },
  { slug: "baby-skincare", shopeeCategoryId: 276164516 },
  { slug: "popok", shopeeCategoryId: 276164518 },
  { slug: "peralatan-bayi", shopeeCategoryId: 276164517 },
  { slug: "treatment-bibir", shopeeCategoryId: 276164520 },
];

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: siteConfig.shopeeShopUrl,
  "x-api-source": "pc",
  "x-shopee-language": "id",
  Accept: "application/json",
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function shopeeImageUrl(imageHash) {
  if (imageHash.startsWith("http")) return imageHash;
  return `https://down-id.img.susercontent.com/file/${imageHash}`;
}

function shopeeProductUrl(shopId, itemId, slug) {
  return `https://shopee.co.id/${slug}-i.${shopId}.${itemId}`;
}

function inferCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes("mpasi") || lower.includes("bunda elia") || lower.includes("makanan bayi") || lower.includes("susu")) return "mpasi";
  if (lower.includes("popok") || lower.includes("pampers") || lower.includes("pispot")) return "popok";
  if (lower.includes("lip") || lower.includes("bibir") || lower.includes("balm")) return "treatment-bibir";
  if (lower.includes("blender") || lower.includes("steamer") || lower.includes("botol") || lower.includes("dot") || lower.includes("pompa") || lower.includes("peralatan")) return "peralatan-bayi";
  return "baby-skincare";
}

function isValidItem(item) {
  return item && item.itemid > 0 && item.name?.trim() && item.image?.trim();
}

function mapItem(item, categorySlug) {
  const slug = slugify(item.name);
  return {
    id: String(item.itemid),
    itemId: item.itemid,
    shopId: item.shopid || siteConfig.shopeeShopId,
    name: item.name.trim(),
    slug,
    price: Math.round(item.price / 100000),
    image: shopeeImageUrl(item.image),
    category: categorySlug || inferCategory(item.name),
    shopeeUrl: shopeeProductUrl(item.shopid || siteConfig.shopeeShopId, item.itemid, slug),
    inStock: (item.stock ?? 1) > 0 && item.status !== 0,
    syncedAt: new Date().toISOString(),
  };
}

function dedupeProducts(products) {
  const byItemId = new Map();
  const usedSlugs = new Set();

  for (const product of products.filter((p) => p.itemId > 0).sort((a, b) => a.itemId - b.itemId)) {
    if (byItemId.has(product.itemId)) continue;
    let slug = product.slug;
    let suffix = 2;
    while (usedSlugs.has(slug)) {
      slug = `${product.slug}-${suffix}`;
      suffix += 1;
    }
    byItemId.set(product.itemId, { ...product, slug });
    usedSlugs.add(slug);
  }

  return Array.from(byItemId.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function loadExisting() {
  try {
    const data = JSON.parse(readFileSync(TARGET, "utf8"));
    return dedupeProducts(data.products || []);
  } catch {
    return [];
  }
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) {
    console.warn(`${url.split("?")[0]} -> HTTP ${res.status}`);
    return null;
  }
  return res.json();
}

async function fetchCategoryProducts(category, categorySlug, products) {
  const total = category.total || 30;
  const pageSize = 30;

  for (let offset = 0; offset < total; offset += pageSize) {
    const url = `https://shopee.co.id/api/v4/search/search_items?by=pop&limit=${pageSize}&match_id=${siteConfig.shopeeShopId}&newest=${offset}&order=desc&page_type=shop&scenario=PAGE_SHOP_SEARCH&version=2&shop_categoryids=${category.shop_category_id}`;
    const search = await fetchJson(url);

    if (!search || search.error !== 0) {
      if (offset === 0) {
        console.warn(`Category ${category.display_name}: Shopee error ${search?.error ?? "network error"}`);
      }
      break;
    }

    const items = search.items || [];
    console.log(`  ${category.display_name} offset ${offset}: ${items.length} items`);

    for (const entry of items) {
      const item = entry?.item_basic;
      if (!isValidItem(item)) continue;
      products.set(item.itemid, mapItem(item, categorySlug));
    }

    if (items.length < pageSize) break;
  }
}

async function main() {
  const products = new Map();
  const categoryMap = new Map(shopCategories.map((c) => [c.shopeeCategoryId, c.slug]));

  for (const existing of loadExisting()) {
    products.set(existing.itemId, existing);
  }

  const seo = await fetchJson(
    `https://shopee.co.id/api/v4/shop/get_shop_seo?username=${siteConfig.shopeeUsername}&limit=50&offset=0`,
  );
  if (seo?.error === 0) {
    for (const item of seo.data?.items || []) {
      if (!isValidItem(item)) continue;
      products.set(item.itemid, mapItem(item));
    }
  } else {
    console.warn("get_shop_seo unavailable:", seo?.error ?? "network error");
  }

  const cats = await fetchJson(
    `https://shopee.co.id/api/v4/shop/get_categories?shopid=${siteConfig.shopeeShopId}`,
  );

  for (const category of cats?.data?.shop_categories || []) {
    await fetchCategoryProducts(category, categoryMap.get(category.shop_category_id), products);
  }

  const list = dedupeProducts(Array.from(products.values()));
  const output = {
    lastSynced: new Date().toISOString(),
    products: list,
  };

  writeFileSync(TARGET, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Synced ${list.length} unique products -> ${TARGET}`);
  if (list.length < 20) {
    console.warn("Warning: expected ~26 products. Shopee API may be blocked from this network.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
