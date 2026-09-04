import { localBusinessSchema, webSiteSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  return (
    <>
      <JsonLdScript data={localBusinessSchema()} />
      <JsonLdScript data={webSiteSchema()} />
    </>
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
      name: siteConfig.name,
    },
  };

  return <JsonLdScript data={schema} />;
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

  return <JsonLdScript data={schema} />;
}
