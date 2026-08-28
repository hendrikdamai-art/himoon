"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-himoon-cream via-white to-amber-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              {t.hero.trusted}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              {t.hero.rating}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-himoon-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-himoon-blue-light"
            >
              {t.hero.ctaShop}
            </Link>
            <a
              href={siteConfig.shopeeShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-himoon-yellow bg-himoon-yellow px-6 py-3 text-sm font-bold text-himoon-blue transition hover:bg-himoon-yellow-light"
            >
              {t.hero.ctaShopee}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-himoon-yellow/20 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-himoon-blue/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <Image
              src="/hero-products.png"
              alt="Produk unggulan HiMoon Baby & Kids"
              width={600}
              height={600}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
