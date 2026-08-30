"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-himoon-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-7 md:grid-cols-2 md:gap-8 md:px-6 md:py-9 lg:py-10">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-himoon-muted md:text-sm">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-himoon-blue md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-himoon-muted md:mt-4 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-5 md:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 md:gap-2 md:px-3 md:py-1.5 md:text-sm">
              <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {t.hero.trusted}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 md:gap-2 md:px-3 md:py-1.5 md:text-sm">
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

        <div className="relative bg-himoon-cream">
          <Image
            src="/hero-background.png"
            alt="HiMoon mom, baby & kids shop"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full max-h-[220px] object-contain object-right sm:max-h-[260px] md:max-h-[300px] lg:max-h-[340px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
