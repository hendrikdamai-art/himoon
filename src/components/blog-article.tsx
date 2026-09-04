"use client";

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import type { BlogPost, Product } from "@/types/catalog";
import { BlogProductCta } from "./blog-product-cta";
import { ProductCard } from "./product-card";

type BlogArticleProps = {
  post: BlogPost;
  relatedProducts: Product[];
};

/** Renders markdown-style [anchor](/path) as internal SEO links */
function renderWithLinks(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }
    nodes.push(
      <Link
        key={`l-${key++}`}
        href={match[2]}
        className="font-semibold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2 transition hover:text-himoon-yellow"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

function parseBlocks(content: string): Block[] {
  return content
    .split("\n\n")
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      if (chunk.startsWith("## ")) {
        return { type: "heading" as const, text: chunk.replace(/^##\s+/, "") };
      }
      return { type: "paragraph" as const, text: chunk };
    });
}

export function BlogArticle({ post, relatedProducts }: BlogArticleProps) {
  const { locale, t } = useLanguage();
  const blocks = parseBlocks(post.content[locale]);
  let paragraphCount = 0;

  return (
    <>
      <p className="mt-6 text-sm text-himoon-muted">
        {post.readTime} min read · {post.publishedAt}
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-himoon-blue">{post.title[locale]}</h1>

      <div className="prose prose-lg mt-8 max-w-none text-himoon-muted">
        {blocks.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="mb-3 mt-10 text-2xl font-extrabold text-himoon-blue first:mt-0"
              >
                {block.text}
              </h2>
            );
          }

          paragraphCount += 1;
          const showMidCta = paragraphCount === 1;

          return (
            <Fragment key={index}>
              <p className="mb-4 leading-relaxed">{renderWithLinks(block.text)}</p>
              {showMidCta ? <BlogProductCta post={post} placement="mid" /> : null}
            </Fragment>
          );
        })}
      </div>

      <BlogProductCta post={post} placement="end" />

      {relatedProducts.length > 0 ? (
        <section className="mt-12 border-t border-himoon-blue/10 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-himoon-yellow">
                {t.blog.relatedEyebrow}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-himoon-blue">
                {t.blog.relatedTitle}
              </h2>
              <p className="mt-1 text-sm text-himoon-muted">{t.blog.relatedSubtitle}</p>
            </div>
            <Link
              href={`/shop/${post.relatedCategory}`}
              className="text-sm font-bold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2 hover:text-himoon-yellow"
            >
              {t.blog.relatedAll} →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
