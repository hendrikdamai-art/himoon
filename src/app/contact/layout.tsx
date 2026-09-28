import type { Metadata } from "next";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { contactPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Kontak & Maps HiMoon Baby & Kids di Badung",
  description:
    "Hubungi HiMoon Mom, Baby & Kids Shop via WhatsApp, email adminhimoon@gmail.com, Shopee himoonbabykids, atau pin Google Maps di Kabupaten Badung, Bali.",
  path: "/contact",
  keywords: [
    "kontak HiMoon Baby & Kids",
    "alamat toko bayi Badung",
    "Google Maps HiMoon Mom Baby Kids Shop",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript data={contactPageSchema()} />
      {children}
    </>
  );
}
