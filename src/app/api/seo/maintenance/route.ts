import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { shopCategories } from "@/lib/site-config";
import { getGuides } from "@/lib/seo/guides";
import { fetchShopeeProducts } from "@/lib/shopee";

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  const url = new URL(request.url);
  const querySecret = url.searchParams.get("secret");
  return auth === `Bearer ${secret}` || querySecret === secret;
}

function revalidateSeoPaths() {
  const paths = [
    "/",
    "/shop",
    "/blog",
    "/about",
    "/contact",
    "/toko-bayi-bali",
    "/media-kit",
    "/metodologi-perbandingan",
    "/sitemap.xml",
    "/llms.txt",
    "/llms-full.txt",
    ...shopCategories.map((category) => `/shop/${category.slug}`),
    ...getGuides().map((guide) => `/blog/${guide.slug}`),
  ];

  for (const path of paths) {
    revalidatePath(path);
  }

  revalidatePath("/shop/[category]", "page");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/", "layout");

  return paths;
}

export async function GET(request: Request) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is not configured" },
      { status: 503 },
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const paths = revalidateSeoPaths();

  let productCount: number | null = null;
  let syncError: string | null = null;
  try {
    const products = await fetchShopeeProducts();
    productCount = products.length;
  } catch (error) {
    syncError = error instanceof Error ? error.message : "Shopee sync failed";
  }

  return NextResponse.json({
    ok: true,
    ranAt: new Date().toISOString(),
    revalidated: paths.length,
    productCount,
    syncError,
  });
}
