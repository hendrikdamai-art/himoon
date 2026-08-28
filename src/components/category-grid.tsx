"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-provider";
import { shopCategories } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ArrowRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  mpasi: "https://down-id.img.susercontent.com/file/id-11134207-81zth-mqbv48ncikg192",
  "baby-skincare": "https://down-id.img.susercontent.com/file/id-11134207-81ztf-mq4ujguquhvye8",
  popok: "https://down-id.img.susercontent.com/file/id-11134207-81ztn-mqd90g1x9bm50f",
  "peralatan-bayi": "https://down-id.img.susercontent.com/file/id-11134207-81ztl-mqbv2mbam6f460",
  "treatment-bibir": "https://down-id.img.susercontent.com/file/id-11134207-81zto-mqcsszbnocgc57",
};

export function CategoryGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-himoon-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={t.categories.title}
          subtitle={t.categories.subtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shopCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={categoryImages[category.slug]}
                  alt={category.label[locale]}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-himoon-blue">
                  {category.label[locale]}
                </h3>
                <p className="mt-2 text-sm text-himoon-muted">
                  {category.description[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-himoon-yellow group-hover:text-himoon-blue">
                  {t.products.viewAll}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
