"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-himoon-cream">
      <div className="relative mx-auto w-full max-w-[1536px]">
        <Image
          src="/hero-background.png"
          alt="HiMoon mom, baby & kids shop"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:from-white/90 md:via-white/55 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="max-w-xl md:max-w-md lg:max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-himoon-muted">
                {t.hero.eyebrow}
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-himoon-blue sm:text-4xl md:text-4xl lg:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-himoon-muted md:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 md:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-sm md:text-sm">
                  <ShieldCheck className="h-4 w-4" />
                  {t.hero.trusted}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50/95 px-3 py-1.5 text-xs font-semibold text-amber-700 backdrop-blur-sm md:text-sm">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  {t.hero.rating}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-himoon-blue-light md:px-6 md:py-3"
                >
                  {t.hero.ctaShop}
                </Link>
                <a
                  href={siteConfig.shopeeShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-himoon-yellow bg-himoon-yellow px-5 py-2.5 text-sm font-bold text-himoon-blue shadow-lg transition hover:bg-himoon-yellow-light md:px-6 md:py-3"
                >
                  {t.hero.ctaShopee}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
