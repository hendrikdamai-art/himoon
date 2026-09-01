import {
  localBusinessSchema,
  webSiteSchema,
} from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld-script";

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

  return <JsonLdScript data={schema} />;
}
