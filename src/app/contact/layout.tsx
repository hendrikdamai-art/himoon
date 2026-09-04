import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Kontak Toko Bayi Badung | WhatsApp & Shopee HiMoon",
  description:
    "Chat WhatsApp, email adminhimoon@gmail.com, atau checkout Shopee himoonbabykids. Toko fisik HiMoon di Kabupaten Badung, Bali — pin Google Maps di halaman ini.",
  path: "/contact",
  keywords: ["kontak HiMoon Bali", "alamat toko bayi Badung", "Google Maps HiMoon"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
