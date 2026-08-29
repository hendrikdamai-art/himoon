"use client";

import Image from "next/image";
import { useState } from "react";
import type { Brand } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";

function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  const isLocalLogo = brand.logoUrl.startsWith("/");

  return (
    <a
      href={brand.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-28 w-40 shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-himoon-yellow hover:shadow-md"
      title={brand.name}
    >
      {failed ? (
        <span className="text-center text-xs font-bold leading-tight text-himoon-blue">
          {brand.name}
        </span>
      ) : isLocalLogo ? (
        <img
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          className="max-h-14 max-w-[120px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <Image
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          width={120}
          height={60}
          className="max-h-14 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      )}
      <span className="mt-2 line-clamp-1 text-[10px] font-semibold uppercase tracking-wide text-himoon-muted group-hover:text-himoon-blue">
        {brand.name}
      </span>
    </a>
  );
}

export function BrandMarquee({ brands }: { brands: Brand[] }) {
  const { t } = useLanguage();
  const doubled = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={t.brands.title}
          subtitle={t.brands.subtitle}
          align="center"
          className="mx-auto"
        />
      </div>
      <div className="relative mt-2">
        <div className="flex animate-marquee gap-4 px-4">
          {doubled.map((brand, index) => (
            <BrandLogo key={`${brand.id}-${index}`} brand={brand} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
