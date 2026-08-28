"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";

export function HowToBuy() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.howToBuy.title} align="center" className="mx-auto" />
        <div className="grid gap-6 md:grid-cols-3">
          {t.howToBuy.steps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-slate-200 p-6">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-himoon-blue text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-himoon-blue">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-himoon-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
