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

function mapShopeeItem(item: ShopeeItem): Product {
  const slug = slugify(item.name);
  const category = inferCategory(item.name);
  return {
    id: String(item.itemid),
    itemId: item.itemid,
    shopId: item.shopid || siteConfig.shopeeShopId,
    name: item.name,
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

  if (seoData?.data?.items) {
    for (const item of seoData.data.items) {
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

  if (categoriesData?.data?.shop_categories) {
    for (const category of categoriesData.data.shop_categories) {
      const searchUrl = `https://shopee.co.id/api/v4/search/search_items?by=pop&limit=30&match_id=${siteConfig.shopeeShopId}&newest=0&order=desc&page_type=shop&scenario=PAGE_SHOP_SEARCH&version=2&shop_categoryids=${category.shop_category_id}`;

      const searchData = await fetchJson<{
        error: number;
        items?: Array<{ item_basic: ShopeeItem }>;
      }>(searchUrl);

      if (searchData?.items?.length) {
        for (const entry of searchData.items) {
          const mapped = mapShopeeItem(entry.item_basic);
          const slug = categoryMap.get(category.shop_category_id);
          if (slug) mapped.category = slug;
          products.set(entry.item_basic.itemid, mapped);
        }
      }
    }
  }

  return Array.from(products.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function syncProductsCatalog(
  existing: ProductsCatalog,
): Promise<ProductsCatalog> {
  const fetched = await fetchShopeeProducts();

  if (fetched.length === 0) {
    return existing;
  }

  const merged = new Map(existing.products.map((product) => [product.id, product]));
  for (const product of fetched) {
    merged.set(product.id, product);
  }

  return {
    lastSynced: new Date().toISOString(),
    products: Array.from(merged.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    ),
  };
}
