import { NextResponse } from "next/server";
import { getProducts } from "@/lib/catalog";

export const revalidate = 3600;

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({
    count: products.length,
    products,
    syncedAt: new Date().toISOString(),
  });
}
