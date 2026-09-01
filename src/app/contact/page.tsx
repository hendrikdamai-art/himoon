"use client";

import { MessageCircle, ShoppingBag, MapPin, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { indonesiaFaqs } from "@/lib/seo/indonesia";

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const cards = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      text: t.contact.whatsappText,
      href: `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`,
      color: "bg-[#25D366]",
    },
    {
      icon: ShoppingBag,
      title: t.contact.shopee,
      text: t.contact.shopeeText,
      href: siteConfig.shopeeShopUrl,
      color: "bg-[#EE4D2D]",
    },
    {
      icon: MapPin,
      title: t.contact.maps,
      text: t.contact.mapsText,
      href: siteConfig.googleMapsShareUrl,
      color: "bg-himoon-blue",
    },
    {
      icon: Mail,
      title: t.contact.email,
      text: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "bg-himoon-yellow text-himoon-blue",
    },
  ];

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 text-white ${card.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-bold text-himoon-blue">{card.title}</h2>
                <p className="mt-2 text-sm text-himoon-muted">{card.text}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-12">
          <SectionHeading title={t.contact.storeTitle} subtitle={t.contact.storeSubtitle} />
          <div className="mt-6 space-y-4">
            <GoogleMapEmbed />
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div>
                <p className="font-bold text-himoon-blue">{siteConfig.businessName}</p>
                <p className="mt-1 text-sm text-himoon-muted">
                  {locale === "id" ? siteConfig.location.id : siteConfig.location.en}
                </p>
              </div>
              <a
                href={siteConfig.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white hover:bg-himoon-blue-light"
              >
                {t.contact.openInMaps}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading
            title={locale === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            subtitle={
              locale === "id"
                ? "Informasi tentang toko bayi HiMoon di Bali, MPASI, dan cara belanja."
                : "About HiMoon baby shop in Bali, MPASI, and how to order."
            }
          />
          <div className="mt-6 space-y-4">
            {indonesiaFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-himoon-blue marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-himoon-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
