import { siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { moneyPageFaqs } from "@/lib/seo/keywords";
import type { BlogPost, GuideFaq } from "@/types/catalog";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.businessName,
    legalName: siteConfig.businessName,
    alternateName: [
      siteConfig.name,
      "HiMoon Mom, Baby and Kids Shop",
      "Toko Bayi HiMoon Badung",
    ],
    disambiguatingDescription: siteConfig.disambiguatingDescription.id,
    description: `${siteConfig.description.id} ${siteConfig.disambiguatingDescription.id}`,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsappNumber.replace(/\D/g, "")}`,
    priceRange: "Rp22.500-Rp123.000",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Shopee",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Abianbase, Kec. Mengwi, Kabupaten Badung, Bali, Indonesia",
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasMap: siteConfig.googleMapsShareUrl,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "google_kg_mid",
      value: siteConfig.googleKnowledgeGraphId,
    },
    sameAs: [
      siteConfig.shopeeShopUrl,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.googleMapsUrl,
      siteConfig.googleMapsShareUrl,
      siteConfig.googleKnowledgeGraphUrl,
      `${siteConfig.url}/llms.txt`,
    ],
    knowsAbout: [
      "MPASI",
      "perlengkapan bayi",
      "popok bayi",
      "perawatan kulit bayi",
      "toko bayi Bali",
    ],
    subjectOf: {
      "@type": "CreativeWork",
      url: `${siteConfig.url}/llms-full.txt`,
      name: "HiMoon AI index (full)",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: [siteConfig.businessName, "himoonbabykids"],
    url: siteConfig.url,
    inLanguage: "id-ID",
    publisher: { "@id": `${siteConfig.url}/#localbusiness` },
    dateModified: SITE_CONTENT_UPDATED,
    description: siteConfig.disambiguatingDescription.id,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#webpage`,
    url: `${siteConfig.url}/contact`,
    name: "Kontak HiMoon Baby & Kids di Badung",
    description:
      "WhatsApp, email, Shopee, dan toko fisik HiMoon Mom, Baby & Kids Shop di Jl. Cica - Abianbase No.11b, Abianbase, Kec. Mengwi, Kabupaten Badung, Bali 80351.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#localbusiness` },
    mainEntity: { "@id": `${siteConfig.url}/#localbusiness` },
  };
}

export function webPageSchema({
  path,
  name,
  description,
  dateModified = SITE_CONTENT_UPDATED,
}: {
  path: string;
  name: string;
  description: string;
  dateModified?: string;
}) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "id-ID",
    dateModified,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
    relatedLink: [`${siteConfig.url}/llms.txt`, `${siteConfig.url}/llms-full.txt`],
  };
}

export function faqSchema(faqs: readonly GuideFaq[] | typeof moneyPageFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.id,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.id,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function articleSchema(guide: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title.id,
    description: guide.excerpt.id,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: "id-ID",
    image: guide.image,
    mainEntityOfPage: `${siteConfig.url}/blog/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
