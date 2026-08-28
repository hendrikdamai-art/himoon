import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function whatsappOrderUrl(
  phone: string,
  productName: string,
  price: number,
  locale: "id" | "en" = "id",
): string {
  const message =
    locale === "id"
      ? `Halo HiMoon Baby & Kids! Saya ingin memesan:\n\n*${productName}*\nHarga: ${formatPrice(price, "id")}\n\nMohon info ketersediaan dan cara pembayaran. Terima kasih!`
      : `Hi HiMoon Baby & Kids! I'd like to order:\n\n*${productName}*\nPrice: ${formatPrice(price, "en")}\n\nPlease confirm availability and payment. Thank you!`;
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
