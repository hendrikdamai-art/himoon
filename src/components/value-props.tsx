"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";
import { Package, MessageCircle, HeartHandshake } from "lucide-react";

const icons = [Package, MessageCircle, HeartHandshake];

export function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.values.title} align="center" className="mx-auto" />
        <div className="grid gap-6 md:grid-cols-3">
          {t.values.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-himoon-cream p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-himoon-yellow/20 p-3 text-himoon-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-himoon-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-himoon-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
