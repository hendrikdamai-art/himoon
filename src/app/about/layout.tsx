import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
    title: "Tentang Kami | Baby Shop Bali Terpercaya",
    description:
      "HiMoon Baby & Kids — baby shop terpercaya untuk MPASI, popok, perawatan kulit bayi, dan perlengkapan anak di Badung, Bali. Toko fisik & Shopee himoonbabykids.",
    path: "/about",
    keywords: ["tentang HiMoon", "Baby Shop Bali", "toko bayi terpercaya Bali"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
