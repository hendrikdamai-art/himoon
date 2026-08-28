import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi HiMoon Baby & Kids via WhatsApp, Shopee, atau kunjungi toko kami di Badung, Bali.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
