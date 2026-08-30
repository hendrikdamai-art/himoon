"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-himoon-cream">
      {/* Full-bleed illustration layer — like MadeBrings, not a separate box */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-background.png"
          alt=""
          fill
          priority
          className="object-cover object-[72%_center] opacity-95 md:object-[78%_center] lg:object-[80%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-himoon-cream from-0% via-himoon-cream via-42% to-transparent to-100%" />
        <div className="absolute inset-0 bg-gradient-to-t from-himoon-cream/40 via-transparent to-himoon-cream/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10 lg:py-12">
        <div className="max-w-xl md:max-w-lg lg:max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-himoon-muted md:text-sm">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-himoon-blue md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-himoon-muted md:mt-4 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-5 md:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-sm md:gap-2 md:px-3 md:py-1.5 md:text-sm">
              <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {t.hero.trusted}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-amber-700 shadow-sm backdrop-blur-sm md:gap-2 md:px-3 md:py-1.5 md:text-sm">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500 md:h-4 md:w-4" />
              {t.hero.rating}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-himoon-blue-light md:px-6 md:py-3"
            >
              {t.hero.ctaShop}
            </Link>
            <a
              href={siteConfig.shopeeShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-himoon-yellow bg-himoon-yellow px-5 py-2.5 text-sm font-bold text-himoon-blue transition hover:bg-himoon-yellow-light md:px-6 md:py-3"
            >
              {t.hero.ctaShopee}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
