"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-provider";
import { cn, formatPrice, whatsappOrderUrl } from "@/lib/utils";
import type { Product } from "@/types/catalog";
import { MessageCircle, ShoppingBag } from "lucide-react";

type OrderButtonsProps = {
  product: Pick<Product, "name" | "price" | "shopeeUrl">;
  className?: string;
  compact?: boolean;
};

export function OrderButtons({ product, className, compact }: OrderButtonsProps) {
  const { locale, t } = useLanguage();
  const whatsappUrl = whatsappOrderUrl(
    siteConfig.whatsappNumber,
    product.name,
    product.price,
    locale,
  );

  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row", className)}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#1da851]",
          compact && "px-3 py-2 text-xs",
        )}
      >
        <MessageCircle className="h-4 w-4" />
        {t.products.orderWhatsapp}
      </a>
      <a
        href={product.shopeeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-[#EE4D2D] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#d73211]",
          compact && "px-3 py-2 text-xs",
        )}
      >
        <ShoppingBag className="h-4 w-4" />
        {t.products.orderShopee}
      </a>
    </div>
  );
}
