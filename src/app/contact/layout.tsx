import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi HiMoon via WhatsApp 628511214358, email adminhimoon@gmail.com, Shopee himoonbabykids, atau toko Badung, Bali.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
