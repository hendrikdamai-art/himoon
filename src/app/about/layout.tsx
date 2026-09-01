import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "HiMoon Baby & Kids di Kab. Badung, Bali: toko MPASI, popok, dan skincare bayi. Belanja Shopee himoonbabykids atau kunjungi toko fisik.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
