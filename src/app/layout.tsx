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
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...buildIndonesiaPageMetadata({
    title: "Toko Perlengkapan Bayi Bali | MPASI & Skincare | HiMoon",
    description:
      "Toko perlengkapan bayi di Badung, Bali untuk ibu hamil & new mom. Beli MPASI, popok, sunscreen Moell di Shopee himoonbabykids atau toko fisik.",
  }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Toko Perlengkapan Bayi Bali | MPASI & Skincare | HiMoon",
    template: "%s | HiMoon Baby & Kids",
  },
  keywords: [...indonesiaKeywords],
  authors: [{ name: "HiMoon Baby & Kids" }],
  creator: "HiMoon Baby & Kids",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Toko Perlengkapan Bayi Bali | HiMoon",
    description:
      "Beli perlengkapan bayi & MPASI di Bali. Shopee himoonbabykids + toko Badung.",
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
  alternates: {
    ...hreflangAlternates,
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "AI index" },
        { url: "/llms-full.txt", title: "AI index (full)" },
      ],
    },
  },
  other: {
    "ai-index": `${siteConfig.url}/llms.txt`,
    describedby: `${siteConfig.url}/llms.txt`,
    dateModified: SITE_CONTENT_UPDATED,
    "geo.region": "ID-BA",
    "geo.placename": "Badung, Bali, Indonesia",
    "geo.position": "-8.5833;115.1667",
    ICBM: "-8.5833, 115.1667",
    "content-language": "id-ID",
  },
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
        <link rel="describedby" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="AI index" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="AI index full" href="/llms-full.txt" />
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
