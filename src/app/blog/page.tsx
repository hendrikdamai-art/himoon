import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/catalog";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Blog Tips MPASI & Perawatan Bayi",
  description:
    "Artikel MPASI 6 bulan, tips popok bayi, dan perawatan kulit bayi sensitif di Bali — panduan parenting dari HiMoon Baby & Kids.",
  path: "/blog",
  keywords: ["tips MPASI bayi", "panduan parenting Bali", "blog keperluan bayi"],
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-extrabold text-himoon-blue">Blog & Tips</h1>
        <p className="mt-3 max-w-2xl text-lg text-himoon-muted">
          Panduan MPASI, perawatan bayi, dan parenting dari HiMoon Baby & Kids.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title.id}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-himoon-muted">
                  {post.readTime} min · {post.publishedAt}
                </p>
                <h2 className="mt-2 text-xl font-bold text-himoon-blue group-hover:text-himoon-yellow">
                  {post.title.id}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-himoon-muted">{post.excerpt.id}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
