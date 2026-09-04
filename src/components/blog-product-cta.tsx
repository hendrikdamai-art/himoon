"use client";

import Link from "next/link";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { BlogPost } from "@/types/catalog";

type BlogProductCtaProps = {
  post: BlogPost;
  placement?: "mid" | "end";
};

function categoryWhatsAppUrl(locale: "id" | "en", categoryLabel: string) {
  const message =
    locale === "id"
      ? `Halo HiMoon Baby & Kids! Saya baca artikel blog dan tertarik belanja ${categoryLabel}. Mohon bantu rekomendasi produk ya.`
      : `Hi HiMoon Baby & Kids! I read your blog and I'm interested in ${categoryLabel}. Please help recommend products.`;
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function BlogProductCta({ post, placement = "end" }: BlogProductCtaProps) {
  const { locale, t } = useLanguage();
  const shopHref = `/shop/${post.relatedCategory}`;
  const whatsappUrl = categoryWhatsAppUrl(locale, post.cta.button[locale]);

  return (
    <aside
      className={
        placement === "mid"
          ? "my-8 border-y border-himoon-blue/15 bg-white/70 px-5 py-6 md:px-6"
          : "mt-10 rounded-2xl bg-himoon-blue px-6 py-7 text-white md:px-8"
      }
      aria-label={t.blog.ctaLabel}
    >
      <p
        className={
          placement === "mid"
            ? "text-xs font-semibold uppercase tracking-[0.14em] text-himoon-yellow"
            : "text-xs font-semibold uppercase tracking-[0.14em] text-himoon-yellow"
        }
      >
        {t.blog.ctaEyebrow}
      </p>
      <h2
        className={
          placement === "mid"
            ? "mt-2 text-xl font-extrabold text-himoon-blue md:text-2xl"
            : "mt-2 text-2xl font-extrabold md:text-3xl"
        }
      >
        {post.cta.title[locale]}
      </h2>
      <p
        className={
          placement === "mid"
            ? "mt-2 max-w-xl text-sm leading-relaxed text-himoon-muted md:text-base"
            : "mt-2 max-w-xl text-sm leading-relaxed text-white/85 md:text-base"
        }
      >
        {post.cta.body[locale]}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={shopHref}
          className={
            placement === "mid"
              ? "inline-flex items-center justify-center gap-2 rounded-full bg-himoon-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-himoon-blue/90"
              : "inline-flex items-center justify-center gap-2 rounded-full bg-himoon-yellow px-5 py-2.5 text-sm font-bold text-himoon-blue transition hover:bg-white"
          }
        >
          <ShoppingBag className="h-4 w-4" />
          {post.cta.button[locale]}
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            placement === "mid"
              ? "inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/10 px-5 py-2.5 text-sm font-bold text-[#128C7E] transition hover:bg-[#25D366]/20"
              : "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
          }
        >
          <MessageCircle className="h-4 w-4" />
          {t.blog.ctaWhatsapp}
        </a>
      </div>
    </aside>
  );
}
