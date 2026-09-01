import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Tentang Kami | Toko Bayi Terpercaya di Bali",
  description:
    "HiMoon Baby & Kids — penjual terpercaya MPASI, popok, perawatan kulit bayi, dan perlengkapan anak di Badung, Bali. Toko fisik & Shopee himoonbabykids.",
  path: "/about",
  keywords: ["tentang HiMoon", "toko bayi terpercaya Bali", "baby shop Badung"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
