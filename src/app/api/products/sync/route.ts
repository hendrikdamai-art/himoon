import { NextResponse } from "next/server";
import { fetchShopeeProducts } from "@/lib/shopee";

export async function GET() {
  try {
    const products = await fetchShopeeProducts();
    return NextResponse.json({
      success: true,
      count: products.length,
      products,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Sync failed",
      },
      { status: 500 },
    );
  }
}
