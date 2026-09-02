import { shopCategories, siteConfig } from "./site-config";
import type { ShopCategorySlug } from "./site-config";
import type { Product, ProductsCatalog } from "@/types/catalog";
import { shopeeImageUrl, shopeeProductUrl } from "./utils";

const SHOPEE_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: siteConfig.shopeeShopUrl,
  "x-api-source": "pc",
  "x-shopee-language": "id",
  Accept: "application/json",
};

type ShopeeItem = {
  itemid: number;
  shopid: number;
  name: string;
  price: number;
  image: string;
  stock?: number;
  status?: number;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function inferCategory(name: string): Product["category"] {
  const lower = name.toLowerCase();
  if (
    lower.includes("mpasi") ||
    lower.includes("bunda elia") ||
    lower.includes("makanan bayi") ||
    lower.includes("susu")
  ) {
    return "mpasi";
  }
  if (lower.includes("popok") || lower.includes("pampers") || lower.includes("pispot")) {
    return "popok";
  }
  if (
    lower.includes("lip") ||
    lower.includes("bibir") ||
    lower.includes("balm")
  ) {
    return "treatment-bibir";
  }
  if (
    lower.includes("blender") ||
    lower.includes("steamer") ||
    lower.includes("botol") ||
    lower.includes("dot") ||
    lower.includes("pompa") ||
    lower.includes("peralatan")
  ) {
    return "peralatan-bayi";
  }
  return "baby-skincare";
}

function inferBrand(name: string): string | undefined {
  const brands = [
    "Moell",
    "Gently",
    "Paseo",
    "Makuku",
    "MamyPoko",
    "Mami Poko",
    "Mom Uung",
    "Asi Booster",
    "Beeme",
    "Safe Baby",
    "Gea Baby",
    "Bunda Elia",
    "Cussons",
    "Philips",
    "Mustela",
  ];
  const lower = name.toLowerCase();
  return brands.find((brand) => lower.includes(brand.toLowerCase()));
}

function isValidShopeeItem(item: ShopeeItem | null | undefined): item is ShopeeItem {
  return Boolean(
    item &&
      item.itemid > 0 &&
      item.name?.trim() &&
      item.image?.trim(),
  );
}

function mapShopeeItem(item: ShopeeItem): Product {
  const slug = slugify(item.name);
  const category = inferCategory(item.name);
  return {
    id: String(item.itemid),
    itemId: item.itemid,
    shopId: item.shopid || siteConfig.shopeeShopId,
    name: item.name.trim(),
    slug,
    price: Math.round(item.price / 100000),
    image: shopeeImageUrl(item.image),
    category,
    shopeeUrl: shopeeProductUrl(
      item.shopid || siteConfig.shopeeShopId,
      item.itemid,
      slug,
    ),
    brand: inferBrand(item.name),
    inStock: (item.stock ?? 1) > 0 && item.status !== 0,
    syncedAt: new Date().toISOString(),
  };
}

export function dedupeProducts(products: Product[]): Product[] {
  const byItemId = new Map<number, Product>();
  const usedSlugs = new Set<string>();

  const sorted = [...products]
    .filter((product) => product.itemId > 0)
    .sort((a, b) => {
      if (a.itemId !== b.itemId) return a.itemId - b.itemId;
      return a.name.localeCompare(b.name);
    });

  for (const product of sorted) {
    if (byItemId.has(product.itemId)) continue;

    let slug = product.slug;
    let suffix = 2;
    while (usedSlugs.has(slug)) {
      slug = `${product.slug}-${suffix}`;
      suffix += 1;
    }

    const normalized: Product = { ...product, slug };
    byItemId.set(product.itemId, normalized);
    usedSlugs.add(slug);
  }

  return Array.from(byItemId.values()).sort((a, b) => a.name.localeCompare(b.name));
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: SHOPEE_HEADERS,
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchShopeeProducts(): Promise<Product[]> {
  const products = new Map<number, Product>();

  const seoData = await fetchJson<{
    error: number;
    data?: { items?: ShopeeItem[] };
  }>(
    `https://shopee.co.id/api/v4/shop/get_shop_seo?username=${siteConfig.shopeeUsername}&limit=50&offset=0`,
  );

  if (seoData?.error === 0 && seoData.data?.items) {
    for (const item of seoData.data.items) {
      if (!isValidShopeeItem(item)) continue;
      products.set(item.itemid, mapShopeeItem(item));
    }
  }

  const categoriesData = await fetchJson<{
    error: number;
    data?: {
      shop_categories?: Array<{
        shop_category_id: number;
        display_name: string;
        image: string;
        total: number;
      }>;
    };
  }>(
    `https://shopee.co.id/api/v4/shop/get_categories?shopid=${siteConfig.shopeeShopId}`,
  );

  const categoryMap = new Map<number, ShopCategorySlug>(
    shopCategories.map((category) => [category.shopeeCategoryId, category.slug]),
  );

  if (categoriesData?.error === 0 && categoriesData.data?.shop_categories) {
    for (const category of categoriesData.data.shop_categories) {
      const categorySlug = categoryMap.get(category.shop_category_id);
      const total = category.total || 30;
      const pageSize = 30;

      for (let offset = 0; offset < total; offset += pageSize) {
        const searchUrl = `https://shopee.co.id/api/v4/search/search_items?by=pop&limit=${pageSize}&match_id=${siteConfig.shopeeShopId}&newest=${offset}&order=desc&page_type=shop&scenario=PAGE_SHOP_SEARCH&version=2&shop_categoryids=${category.shop_category_id}`;

        const searchData = await fetchJson<{
          error: number;
          items?: Array<{ item_basic: ShopeeItem | null }>;
        }>(searchUrl);

        if (searchData?.error !== 0 || !searchData.items?.length) break;

        for (const entry of searchData.items) {
          const item = entry?.item_basic;
          if (!isValidShopeeItem(item)) continue;

          const mapped = mapShopeeItem(item);
          if (categorySlug) mapped.category = categorySlug;
          products.set(item.itemid, mapped);
        }

        if (searchData.items.length < pageSize) break;
      }
    }
  }

  return dedupeProducts(Array.from(products.values()));
}

export async function syncProductsCatalog(
  existing: ProductsCatalog,
): Promise<ProductsCatalog> {
  const fetched = await fetchShopeeProducts();

  if (fetched.length === 0) {
    return {
      lastSynced: existing.lastSynced,
      products: dedupeProducts(existing.products.filter((p) => p.itemId > 0)),
    };
  }

  const merged = new Map<number, Product>();
  for (const product of existing.products) {
    if (product.itemId > 0) merged.set(product.itemId, product);
  }
  for (const product of fetched) {
    merged.set(product.itemId, product);
  }

  return {
    lastSynced: new Date().toISOString(),
    products: dedupeProducts(Array.from(merged.values())),
  };
}
