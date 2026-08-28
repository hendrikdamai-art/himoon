import { siteConfig } from "@/lib/site-config";

type JsonLdProps = {
  type?: "Organization" | "LocalBusiness" | "WebSite";
};

export function JsonLd({ type = "LocalBusiness" }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: siteConfig.name,
    description: siteConfig.description.id,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
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
    sameAs: [siteConfig.shopeeShopUrl, siteConfig.googleMapsUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "9",
      bestRating: "5",
    },
    priceRange: "$$",
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
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price,
      availability: "https://schema.org/InStock",
      url,
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
