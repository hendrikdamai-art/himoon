import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
    title: "Tentang HiMoon Baby & Kids | Toko Bayi di Badung",
    description:
      "HiMoon Mom, Baby & Kids Shop — toko ritel MPASI, popok, dan perawatan bayi di Kabupaten Badung, Bali. Bukan VTuber Twitch. Toko fisik & Shopee himoonbabykids.",
    path: "/about",
    keywords: ["tentang HiMoon Baby & Kids", "toko bayi Badung", "HiMoon Mom Baby Kids Shop"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
