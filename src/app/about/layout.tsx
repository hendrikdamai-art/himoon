import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Tentang Toko Perlengkapan Bayi Bali | HiMoon",
  description:
    "HiMoon Baby & Kids di Badung: toko fisik + Shopee himoonbabykids untuk ibu hamil dan new mom. MPASI, popok, sunscreen original. Tanpa rating palsu di halaman ini.",
  path: "/about",
  keywords: ["tentang HiMoon", "toko bayi terpercaya Bali", "baby shop Badung"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
