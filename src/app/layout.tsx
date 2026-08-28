import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/i18n/language-provider";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HiMoon Baby & Kids | MPASI, Keperluan Bayi & Anak di Bali",
    template: "%s | HiMoon Baby & Kids",
  },
  description: siteConfig.description.id,
  keywords: [
    "HiMoon Baby Kids",
    "toko bayi Bali",
    "MPASI Bali",
    "perlengkapan bayi Badung",
    "popok bayi",
    "perawatan kulit bayi",
    "Shopee himoonbabykids",
    "penjual terpercaya",
  ],
  authors: [{ name: "HiMoon Baby & Kids" }],
  creator: "HiMoon Baby & Kids",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "HiMoon Baby & Kids | MPASI, Keperluan Bayi & Anak di Bali",
    description: siteConfig.description.id,
    images: [{ url: "/logo.png", width: 800, height: 400, alt: "HiMoon Baby & Kids" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HiMoon Baby & Kids",
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
  alternates: {
    canonical: siteConfig.url,
    languages: {
      id: siteConfig.url,
      en: `${siteConfig.url}?lang=en`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
