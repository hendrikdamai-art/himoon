import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ShopeeCta({
  href = siteConfig.shopeeShopUrl,
  label = "Beli di Shopee",
  className,
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#EE4D2D] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d73211]",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function ShopCta({
  href = "/shop",
  label = "Lihat katalog HiMoon",
  className,
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-himoon-blue-light",
        className,
      )}
    >
      {label}
    </Link>
  );
}
