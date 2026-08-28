"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="bg-himoon-cream">
      <section className="bg-gradient-to-br from-himoon-blue to-himoon-blue-light py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold md:text-5xl">{t.about.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-blue-100">
                {locale === "id" ? siteConfig.description.id : siteConfig.description.en}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.png"
                alt="HiMoon Baby & Kids logo"
                width={320}
                height={120}
                className="rounded-2xl bg-white p-6 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-himoon-blue">{t.about.trustedTitle}</h2>
              <p className="mt-3 leading-relaxed text-himoon-muted">{t.about.trustedText}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-3 text-amber-700">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-himoon-blue">{t.about.locationTitle}</h2>
              <p className="mt-3 leading-relaxed text-himoon-muted">{t.about.locationText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white hover:bg-himoon-blue-light"
                >
                  {t.about.visitStore}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.shopeeShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EE4D2D] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#d73211]"
                >
                  {t.about.visitShopee}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
            <SectionHeading
              title={locale === "id" ? "Apa yang kami jual?" : "What we sell"}
              subtitle={
                locale === "id"
                  ? "MPASI, keperluan bayi, perawatan kulit, popok, dan produk anak dari brand terpercaya."
                  : "MPASI, baby essentials, skincare, diapers, and kids products from trusted brands."
              }
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(locale === "id"
                ? ["MPASI & Nutrisi Bayi", "Perawatan Kulit Bayi", "Popok & Pispot", "Peralatan Bayi & Anak"]
                : ["MPASI & Baby Nutrition", "Baby Skincare", "Diapers & Potty", "Baby & Kids Equipment"]
              ).map((item) => (
                <Link
                  key={item}
                  href="/shop"
                  className="rounded-xl bg-himoon-cream px-4 py-3 text-center text-sm font-semibold text-himoon-blue hover:bg-himoon-yellow/20"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
