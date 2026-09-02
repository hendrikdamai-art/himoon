import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SHOP_ID = 1869688077;
const SHOP_URL = "https://shopee.co.id/himoonbabykids#product_list";

const CATEGORY_MAP = {
  276164519: "mpasi",
  276164516: "baby-skincare",
  276164518: "popok",
  276164517: "peralatan-bayi",
  276164520: "treatment-bibir",
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
  if (!imageHash) return "";
  if (imageHash.startsWith("http")) return imageHash;
  return `https://down-id.img.susercontent.com/file/${imageHash}`;
}

function mapItem(item, categorySlug) {
  const slug = slugify(item.name);
  return {
    id: String(item.itemid),
    itemId: item.itemid,
    shopId: item.shopid || SHOP_ID,
    name: item.name.trim(),
    slug,
    price: Math.round(item.price / 100000),
    image: shopeeImageUrl(item.image),
    category: categorySlug,
    shopeeUrl: `https://shopee.co.id/${slug}-i.${item.shopid || SHOP_ID}.${item.itemid}`,
    inStock: (item.stock ?? 1) > 0 && item.status !== 0,
    syncedAt: new Date().toISOString(),
  };
}

function dedupeProducts(products) {
  const byItemId = new Map();
  const usedSlugs = new Set();
  for (const product of products.sort((a, b) => a.itemId - b.itemId)) {
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

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: "id-ID",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const rawItems = new Map();

  page.on("response", async (response) => {
    const url = response.url();
    if (!url.includes("search_items") && !url.includes("get_shop_seo")) return;
    try {
      const json = await response.json();
      const entries = json?.items || json?.data?.items || [];
      for (const entry of entries) {
        const item = entry?.item_basic || entry;
        if (item?.itemid && item?.name) rawItems.set(item.itemid, item);
      }
    } catch {
      // ignore
    }
  });

  await page.goto(SHOP_URL, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(5000);

  // Fetch via in-page API with browser cookies/headers
  const categories = await page.evaluate(async (shopId) => {
    const res = await fetch(`https://shopee.co.id/api/v4/shop/get_categories?shopid=${shopId}`, {
      headers: { "x-api-source": "pc", Accept: "application/json" },
    });
    const json = await res.json();
    return json?.data?.shop_categories || [];
  }, SHOP_ID);

  console.log("Categories:", categories.length);

  for (const category of categories) {
    const categorySlug = CATEGORY_MAP[category.shop_category_id] || "baby-skincare";
    const limit = Math.min(Math.max(category.total || 30, 30), 50);
    const searchUrl = `https://shopee.co.id/api/v4/search/search_items?by=pop&limit=${limit}&match_id=${SHOP_ID}&newest=0&order=desc&page_type=shop&scenario=PAGE_SHOP_SEARCH&version=2&shop_categoryids=${category.shop_category_id}`;

    const result = await page.evaluate(async ({ searchUrl }) => {
      const res = await fetch(searchUrl, {
        headers: { "x-api-source": "pc", "x-shopee-language": "id", Accept: "application/json" },
      });
      return res.json();
    }, { searchUrl });

    const items = result?.items || [];
    console.log(
      `${category.display_name}: error=${result?.error} items=${items.length} (total=${category.total})`,
    );

    for (const entry of items) {
      const item = entry?.item_basic;
      if (!item?.itemid || !item?.name) continue;
      rawItems.set(item.itemid, { ...item, _categorySlug: categorySlug });
    }
  }

  const seo = await page.evaluate(async () => {
    const res = await fetch(
      "https://shopee.co.id/api/v4/shop/get_shop_seo?username=himoonbabykids&limit=50&offset=0",
      { headers: { "x-api-source": "pc", Accept: "application/json" } },
    );
    return res.json();
  });

  for (const item of seo?.data?.items || []) {
    if (item?.itemid && item?.name) rawItems.set(item.itemid, item);
  }

  // DOM scrape as fallback
  for (let round = 0; round < 12; round++) {
    await page.mouse.wheel(0, 2000);
    await page.waitForTimeout(1200);
  }

  const domItems = await page.evaluate(() => {
    const results = [];
    for (const link of document.querySelectorAll('a[href*="-i."]')) {
      const href = link.getAttribute("href") || "";
      const match = href.match(/-i\.(\d+)\.(\d+)/);
      if (!match) continue;
      const img = link.querySelector("img");
      const name = link.getAttribute("title") || img?.alt || link.textContent?.trim() || "";
      if (name.length < 5) continue;
      results.push({
        shopid: Number(match[1]),
        itemid: Number(match[2]),
        name,
        image: img?.src || "",
        href,
      });
    }
    return results;
  });

  for (const item of domItems) {
    if (!rawItems.has(item.itemid)) {
      rawItems.set(item.itemid, {
        itemid: item.itemid,
        shopid: item.shopid,
        name: item.name,
        price: 0,
        image: item.image.includes("/file/")
          ? item.image.split("/file/")[1]
          : item.image,
        _categorySlug: "baby-skincare",
      });
    }
  }

  await browser.close();

  const products = dedupeProducts(
    Array.from(rawItems.values()).map((item) =>
      mapItem(item, item._categorySlug || "baby-skincare"),
    ),
  );

  const output = {
    lastSynced: new Date().toISOString(),
    products,
  };

  writeFileSync(join(ROOT, "src/data/products.json"), `${JSON.stringify(output, null, 2)}\n`);
  console.log(`\nSaved ${products.length} products to src/data/products.json`);
  for (const p of products) {
    console.log(`${p.itemId} | ${p.price} | ${p.image.split("/").pop()} | ${p.name.slice(0, 60)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
