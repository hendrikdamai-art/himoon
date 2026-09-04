import { indonesiaFaqs } from "@/lib/seo/indonesia";
import { siteConfig } from "@/lib/site-config";

type JsonLdProps = {
  type?: "Organization" | "LocalBusiness" | "WebSite";
};

export function JsonLd({ type = "LocalBusiness" }: JsonLdProps) {
  const baseUrl = siteConfig.url;
  const phone = `+${siteConfig.whatsappNumber.replace(/\D/g, "")}`;

  const localBusiness = {
    "@type": type,
    "@id": `${baseUrl}/#localbusiness`,
    name: siteConfig.businessName,
    alternateName: [siteConfig.name, "HiMoon Baby Shop Bali", "Toko Bayi HiMoon"],
    description: siteConfig.description.id,
    url: baseUrl,
    image: `${baseUrl}/logo.png`,
    logo: `${baseUrl}/logo.png`,
    email: siteConfig.email,
    telephone: phone,
    inLanguage: "id-ID",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Badung",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.5833",
      longitude: "115.1667",
    },
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "AdministrativeArea", name: "Bali" },
      { "@type": "City", name: "Denpasar" },
      { "@type": "AdministrativeArea", name: "Badung" },
    ],
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Bank Transfer, E-Wallet, ShopeePay",
    priceRange: "$$",
    hasMap: siteConfig.googleMapsShareUrl,
    sameAs: [
      siteConfig.shopeeShopUrl,
      siteConfig.googleMapsUrl,
      siteConfig.googleMapsShareUrl,
    ],
    knowsAbout: [
      "MPASI",
      "Makanan Pendamping ASI",
      "Popok Bayi",
      "Perawatan Kulit Bayi",
      "Perlengkapan Bayi",
      "Produk Anak",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "9",
      bestRating: "5",
    },
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: "id-ID",
    description: siteConfig.description.id,
    publisher: { "@id": `${baseUrl}/#localbusiness` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    inLanguage: "id-ID",
    mainEntity: indonesiaFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, webSite, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  image,
  price,
  url,
}: {
  name: string;
  image: string;
  price: number;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image,
    inLanguage: "id-ID",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price,
      availability: "https://schema.org/InStock",
      url,
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
    },
    brand: {
      "@type": "Brand",
      name: "HiMoon Baby & Kids",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
