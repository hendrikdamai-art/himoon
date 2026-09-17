import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/lib/site-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: "id" | "en" = "id"): string {
  return new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function shopeeImageUrl(imageHash: string): string {
  if (imageHash.startsWith("http")) return imageHash;
  return `https://down-id.img.susercontent.com/file/${imageHash}`;
}

export function shopeeProductUrl(shopId: number, itemId: number, slug?: string): string {
  const base = slug
    ? `https://shopee.co.id/${slug}-i.${shopId}.${itemId}`
    : `https://shopee.co.id/product/${shopId}/${itemId}`;
  return base;
}

export function resolveShopeeCheckoutUrl(product: {
  shopeeUrl?: string;
  shopId?: number;
  itemId?: number;
}): string {
  const url = product.shopeeUrl || "";
  if (/\/product\/\d+\/\d+/.test(url) || /i\.\d+\.\d+/.test(url)) {
    return url;
  }
  if (product.shopId && product.itemId) {
    return shopeeProductUrl(product.shopId, product.itemId);
  }
  return url || siteConfig.shopeeShopUrl;
}

export function whatsappOrderUrl(
  phone: string,
  productName: string,
  price: number,
  locale: "id" | "en" = "id",
): string {
  const message =
    locale === "id"
      ? `Halo HiMoon Baby & Kids! Saya ingin tanya stok toko Bali untuk:\n\n*${productName}*\nHarga katalog: ${formatPrice(price, "id")}\n\nMohon konfirmasi ketersediaan. Checkout saya lewat Shopee. Terima kasih!`
      : `Hi HiMoon Baby & Kids! I'd like to check Bali in-store stock for:\n\n*${productName}*\nCatalog price: ${formatPrice(price, "en")}\n\nPlease confirm availability. I'll checkout on Shopee. Thank you!`;
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
