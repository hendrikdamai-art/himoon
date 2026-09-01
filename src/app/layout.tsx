import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Toko Perlengkapan Bayi Bali | MPASI & Skincare | HiMoon",
    template: "%s | HiMoon Baby & Kids",
  },
  description:
    "Toko perlengkapan bayi di Badung, Bali untuk ibu hamil & new mom. Beli MPASI, popok, sunscreen Moell di Shopee himoonbabykids atau toko fisik.",
  keywords: [
    "toko perlengkapan bayi Bali",
    "toko bayi Badung",
    "beli MPASI Bali",
    "sunscreen bayi Moell",
    "perlengkapan bayi baru lahir",
    "popok Makuku",
    "Shopee himoonbabykids",
  ],
  authors: [{ name: "HiMoon Baby & Kids" }],
  creator: "HiMoon Baby & Kids",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Toko Perlengkapan Bayi Bali | HiMoon",
    description:
      "MPASI, popok, sunscreen bayi. Checkout Shopee himoonbabykids. Toko fisik Kab. Badung.",
    images: [{ url: "/logo.png", width: 800, height: 400, alt: "HiMoon Baby & Kids" }],
  },
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
    canonical: siteConfig.url,
    languages: {
      id: siteConfig.url,
      en: `${siteConfig.url}?lang=en`,
    },
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
