"use client";

import Image from "next/image";
import { useState } from "react";
import type { Brand } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";

function BrandLogo({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=1e3a5f&color=f5a623&size=128&bold=true`;

  return (
    <div className="flex h-24 w-36 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm">
      {failed ? (
        <span className="text-center text-xs font-bold text-himoon-blue">{brand.name}</span>
      ) : (
        <Image
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          width={120}
          height={60}
          className="max-h-12 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
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
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
