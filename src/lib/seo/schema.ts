import { siteConfig } from "@/lib/site-config";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { moneyPageFaqs } from "@/lib/seo/keywords";
import type { BlogPost, GuideFaq } from "@/types/catalog";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.businessName,
    alternateName: siteConfig.name,
    description: siteConfig.description.id,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsappNumber.replace(/\D/g, "")}`,
    priceRange: "Rp28.000-Rp125.000",
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
    hasMap: siteConfig.googleMapsShareUrl,
    sameAs: [
      siteConfig.shopeeShopUrl,
      siteConfig.googleMapsUrl,
      siteConfig.googleMapsShareUrl,
      `${siteConfig.url}/llms.txt`,
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
    url: siteConfig.url,
    inLanguage: "id-ID",
    publisher: { "@id": `${siteConfig.url}/#localbusiness` },
    dateModified: SITE_CONTENT_UPDATED,
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
