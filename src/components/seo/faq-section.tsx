import type { GuideFaq } from "@/types/catalog";

export function FaqSection({
  title,
  faqs,
}: {
  title: string;
  faqs: readonly GuideFaq[];
}) {
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold text-himoon-blue">
        {title}
      </h2>
      <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question.id} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-semibold text-himoon-blue marker:content-none">
              {faq.question.id}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-himoon-muted">
              {faq.answer.id}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
