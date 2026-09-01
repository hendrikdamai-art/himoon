import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Kontak & Lokasi Toko | HiMoon Bali",
  description:
    "Hubungi HiMoon Baby & Kids via WhatsApp, email adminhimoon@gmail.com, Shopee, atau kunjungi toko fisik kami di Badung, Bali. Lihat lokasi di Google Maps.",
  path: "/contact",
  keywords: ["kontak HiMoon Bali", "alamat toko bayi Badung", "Google Maps HiMoon"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
