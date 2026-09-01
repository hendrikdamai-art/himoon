import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import {
  buildIndonesiaPageMetadata,
  hreflangAlternates,
  indonesiaKeywords,
} from "@/lib/seo/indonesia";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...buildIndonesiaPageMetadata({
    title: "HiMoon Baby & Kids | Toko MPASI, Keperluan Bayi & Anak di Bali",
    description: siteConfig.description.id,
  }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HiMoon Baby & Kids | Toko MPASI, Keperluan Bayi & Anak di Bali",
    template: "%s | HiMoon Baby & Kids",
  },
  keywords: [...indonesiaKeywords],
  authors: [{ name: "HiMoon Baby & Kids" }],
  creator: "HiMoon Baby & Kids",
  twitter: {
    card: "summary_large_image",
    title: "HiMoon Baby & Kids | Toko Bayi Bali",
    description: siteConfig.description.id,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: hreflangAlternates,
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google3e2d85e569fc51a6",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${nunito.variable} h-full`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
