"use client";

import type { Review } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";
import { StarRating } from "./star-rating";
import { Quote } from "lucide-react";

export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-himoon-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-himoon-yellow/60" />
              <StarRating rating={review.rating} className="mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-himoon-muted">
                {review.text[locale]}
              </p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-bold text-himoon-blue">{review.name}</p>
                <p className="text-xs text-himoon-muted">{review.location}</p>
                <p className="mt-1 text-xs font-medium text-himoon-yellow">
                  {review.product}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
