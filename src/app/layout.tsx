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

const GTM_ID = "GTM-TKJCDTLR";
const GA_MEASUREMENT_ID = "G-CMBWL27BM4";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...buildIndonesiaPageMetadata({
    title: "Baby Shop Bali | Toko Perlengkapan Bayi & MPASI | HiMoon",
    description:
      "Baby shop di Badung, Bali untuk ibu hamil & new mom. Beli MPASI, popok, sunscreen Moell di Shopee himoonbabykids atau toko fisik.",
  }),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Baby Shop Bali | Toko Perlengkapan Bayi & MPASI | HiMoon",
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
    title: "Baby Shop Bali | HiMoon Baby & Kids",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) — GA4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`,
          }}
        />
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="describedby" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="AI index" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="AI index full" href="/llms-full.txt" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
