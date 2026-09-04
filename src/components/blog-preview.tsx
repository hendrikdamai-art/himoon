"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/catalog";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SectionHeading } from "./section-heading";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-himoon-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={t.blog.title}
          subtitle={t.blog.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title[locale]}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-himoon-muted">
                  {post.readTime} menit baca
                </p>
                <h3 className="mt-2 text-lg font-bold text-himoon-blue group-hover:text-himoon-yellow">
                  {post.title[locale]}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-himoon-muted">
                  {post.excerpt[locale]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-himoon-blue">
                  {t.blog.readMore} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
