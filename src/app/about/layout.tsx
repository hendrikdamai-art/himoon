import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "HiMoon Baby & Kids — penjual terpercaya MPASI, keperluan bayi, dan produk anak di Bali. Toko fisik & Shopee.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
