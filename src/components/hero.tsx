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
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-[0.95fr_1.05fr] md:gap-0">
        {/* Mobile: illustration sits behind text, not as its own block */}
        <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[min(72vw,280px)]">
            <Image
              src="/hero-background.png"
              alt=""
              fill
              priority
              className="object-contain object-right-bottom opacity-90"
              sizes="72vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-himoon-cream from-45% via-himoon-cream/88 via-70% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-himoon-cream to-transparent" />
        </div>

        <div className="relative z-10 px-4 py-4 sm:py-5 md:px-6 md:py-9 lg:py-10">
          <div className="max-w-xl md:max-w-none">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-himoon-muted sm:text-xs md:mb-2 md:text-sm">
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-[16rem] text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-himoon-blue sm:max-w-md sm:text-3xl md:max-w-xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-2 max-w-[15rem] text-sm leading-snug text-himoon-muted sm:mt-3 sm:max-w-md sm:text-base sm:leading-relaxed md:mt-4 md:max-w-xl md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2 md:mt-5 md:gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 shadow-sm backdrop-blur-sm sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-xs md:gap-2 md:px-3 md:py-1.5 md:text-sm">
                <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                {t.hero.trusted}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-semibold text-amber-700 shadow-sm backdrop-blur-sm sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-xs md:gap-2 md:px-3 md:py-1.5 md:text-sm">
                <Star className="h-3 w-3 fill-amber-500 text-amber-500 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                {t.hero.rating}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5 md:mt-6 md:gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-himoon-blue px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-himoon-blue-light sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3"
              >
                {t.hero.ctaShop}
              </Link>
              <a
                href={siteConfig.shopeeShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-himoon-yellow bg-himoon-yellow px-4 py-2 text-xs font-bold text-himoon-blue shadow-sm transition hover:bg-himoon-yellow-light sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3"
              >
                {t.hero.ctaShopee}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop: side-by-side illustration */}
        <div className="relative hidden bg-himoon-cream md:block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-4 left-0 z-10 w-16 bg-gradient-to-r from-himoon-cream to-transparent lg:w-24"
          />
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/hero-background.png"
              alt="HiMoon mom, baby & kids shop"
              fill
              priority
              className="object-contain object-right"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
