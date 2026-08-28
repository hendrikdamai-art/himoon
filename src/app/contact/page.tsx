"use client";

import { MessageCircle, ShoppingBag, MapPin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      text: "Chat kami untuk tanya produk & pesan.",
      href: `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`,
      color: "bg-[#25D366]",
    },
    {
      icon: ShoppingBag,
      title: t.contact.shopee,
      text: "Belanja online di Shopee HiMoon Baby & Kids.",
      href: siteConfig.shopeeShopUrl,
      color: "bg-[#EE4D2D]",
    },
    {
      icon: MapPin,
      title: t.contact.maps,
      text: "Kunjungi toko fisik kami di Badung, Bali.",
      href: siteConfig.googleMapsUrl,
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
      </div>
    </div>
  );
}
