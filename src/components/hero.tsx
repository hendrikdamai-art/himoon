"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[520px] overflow-hidden md:min-h-[620px] lg:min-h-[680px]">
      <Image
        src="/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 md:from-white/92 md:via-white/75 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-16 md:px-6 md:py-24 lg:py-28">
        <div className="max-w-xl md:max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-himoon-muted">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-himoon-blue md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-himoon-muted">
            {t.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/95 px-3 py-1.5 text-sm font-semibold text-emerald-700 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              {t.hero.trusted}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50/95 px-3 py-1.5 text-sm font-semibold text-amber-700 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              {t.hero.rating}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-himoon-blue px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-himoon-blue-light"
            >
              {t.hero.ctaShop}
            </Link>
            <a
              href={siteConfig.shopeeShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-himoon-yellow bg-himoon-yellow px-6 py-3 text-sm font-bold text-himoon-blue shadow-lg transition hover:bg-himoon-yellow-light"
            >
              {t.hero.ctaShopee}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
