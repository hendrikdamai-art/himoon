import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/catalog";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildIndonesiaPageMetadata({
  title: "Panduan Beli Perlengkapan Bayi | MPASI, Sunscreen, Popok",
  description:
    "Artikel niat beli dari HiMoon Bali: perlengkapan bayi baru lahir, sunscreen Moell, toko MPASI, popok. Setiap panduan ke katalog dan Shopee himoonbabykids.",
  path: "/blog",
  keywords: ["perlengkapan bayi baru lahir", "beli sunscreen bayi", "toko MPASI Bali"],
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: "/blog",
          name: "Panduan beli perlengkapan bayi",
          description: "Artikel komersial MPASI, sunscreen, popok, dan newborn kit.",
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Panduan", path: "/blog" },
        ])}
      />
      <JsonLdScript
        data={itemListSchema(
          "Panduan HiMoon",
          posts.map((post) => ({
            name: post.title.id,
            url: `${siteConfig.url}/blog/${post.slug}`,
          })),
        )}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-4xl font-extrabold text-himoon-blue">
          Panduan belanja bayi (niat beli)
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-himoon-muted">
          Setiap artikel menjawab satu pencarian, memuat harga katalog, apa yang termasuk,
          FAQ, dan tautan ke Shopee himoonbabykids.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ShopCta />
          <ShopeeCta />
        </div>
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
                  alt={post.imageAlt.id}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-himoon-yellow">
                  {post.query.id}
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
