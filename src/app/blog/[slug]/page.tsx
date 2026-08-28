import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/catalog";

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
    openGraph: {
      title: post.title.id,
      description: post.excerpt.id,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.id.split("\n\n");

  return (
    <article className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link href="/blog" className="text-sm font-semibold text-himoon-blue hover:text-himoon-yellow">
          ← Kembali ke Blog
        </Link>
        <p className="mt-6 text-sm text-himoon-muted">
          {post.readTime} min read · {post.publishedAt}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-himoon-blue">{post.title.id}</h1>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title.id} fill className="object-cover" priority />
        </div>
        <div className="prose prose-lg mt-8 max-w-none text-himoon-muted">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
