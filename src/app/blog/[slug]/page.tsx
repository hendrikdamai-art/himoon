import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/catalog";
import { getRelatedGuides } from "@/lib/seo/guides";
import { siteConfig } from "@/lib/site-config";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { RelatedGuides } from "@/components/seo/related-guides";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title.id,
    description: post.excerpt.id,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title.id,
      description: post.excerpt.id,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedGuides(post.slug);

  return (
    <article className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: `/blog/${post.slug}`,
          name: post.title.id,
          description: post.excerpt.id,
          dateModified: post.updatedAt,
        })}
      />
      <JsonLdScript data={articleSchema(post)} />
      <JsonLdScript data={faqSchema(post.faqs)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Panduan", path: "/blog" },
          { name: post.title.id, path: `/blog/${post.slug}` },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumb
          items={[
            { name: "Beranda", href: "/" },
            { name: "Panduan", href: "/blog" },
            { name: post.query.id },
          ]}
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
          {post.query.id} · update {post.updatedAt}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-himoon-blue">{post.title.id}</h1>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt.id}
            fill
            className="object-cover"
            priority
          />
        </div>
        <SpeakableAnswer id={`answer-${post.slug}`} className="mt-8">
          <p>{post.speakable.id}</p>
        </SpeakableAnswer>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="font-bold text-himoon-blue">Harga & yang termasuk</p>
          <p className="mt-2 text-sm text-himoon-muted">{post.priceNote.id}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-himoon-muted">
            {post.inclusions.id.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <ShopeeCta />
            <ShopCta href={post.shopHref} label="Buka katalog terkait" />
          </div>
        </div>
        <div className="prose prose-lg mt-8 max-w-none text-himoon-muted">
          <p className="mb-4 leading-relaxed">{post.content.id}</p>
          {post.sections.map((section) => (
            <section key={section.heading.id} className="mb-6">
              <h2 className="text-2xl font-bold text-himoon-blue">{section.heading.id}</h2>
              <p className="mt-2 leading-relaxed">{section.body.id}</p>
            </section>
          ))}
        </div>
        <FaqSection title="FAQ" faqs={post.faqs} />
        <RelatedGuides guides={related} />
        <p className="mt-10 text-sm">
          <Link href="/blog" className="font-semibold text-himoon-blue hover:text-himoon-yellow">
            ← Semua panduan
          </Link>
        </p>
      </div>
    </article>
  );
}
