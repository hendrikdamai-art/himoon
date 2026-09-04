import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { getBlogPost, getBlogPosts, getProductsByCategory } from "@/lib/catalog";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

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
    ...buildIndonesiaPageMetadata({
      title: post.title.id,
      description: post.excerpt.id,
      path: `/blog/${post.slug}`,
      keywords: ["tips bayi Bali", "MPASI", "parenting Indonesia", "toko bayi Badung"],
    }),
    openGraph: {
      type: "article",
      locale: "id_ID",
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

  const relatedProducts = (await getProductsByCategory(post.relatedCategory)).slice(0, 3);

  return (
    <article className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/blog"
          className="text-sm font-semibold text-himoon-blue hover:text-himoon-yellow"
        >
          ← Blog
        </Link>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title.id} fill className="object-cover" priority />
        </div>

        <BlogArticle post={post} relatedProducts={relatedProducts} />
      </div>
    </article>
  );
}
