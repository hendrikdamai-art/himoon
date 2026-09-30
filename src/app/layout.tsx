import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { Analytics, AnalyticsNoscript } from "@/components/analytics";
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
  display: "swap",
});

export const metadata: Metadata = {
  ...buildIndonesiaPageMetadata({
    title: "HiMoon Baby & Kids | Toko Bayi Badung & Shopee himoonbabykids",
    description:
      "Toko ritel perlengkapan bayi di Kabupaten Badung, Bali — HiMoon Mom, Baby & Kids Shop. Bukan VTuber Twitch. Beli MPASI, popok, skincare via Shopee himoonbabykids atau toko fisik.",
  }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HiMoon Baby & Kids | Toko Bayi Badung & Shopee himoonbabykids",
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
    title: "HiMoon Baby & Kids | Toko Bayi Badung",
    description:
      "Toko ritel perlengkapan bayi di Badung, Bali. Shopee himoonbabykids — bukan VTuber Twitch.",
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
      "text/markdown": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
    },
  },
  other: {
    "ai-index": `${siteConfig.url}/llms.txt`,
    describedby: `${siteConfig.url}/llms.txt`,
    dateModified: SITE_CONTENT_UPDATED,
    "geo.region": "ID-BA",
    "geo.placename": "Abianbase, Mengwi, Badung, Bali, Indonesia",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="describedby" href="/llms.txt" />
        <link rel="alternate" type="text/markdown" title="llms.txt" href="/llms.txt" />
        <link rel="alternate" type="text/markdown" title="llms-full.txt" href="/llms-full.txt" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <AnalyticsNoscript />
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
