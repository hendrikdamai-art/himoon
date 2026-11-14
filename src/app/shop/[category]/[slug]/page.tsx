import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCatalogProducts, getProductBySlug, getProductsByCategory } from "@/lib/catalog";
import { getGuidesForCategory } from "@/lib/seo/guide-category";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { RelatedGuides } from "@/components/seo/related-guides";
import { ProductCard } from "@/components/product-card";
import { breadcrumbSchema, productSchema, webPageSchema } from "@/lib/seo/schema";
import {
  buildIndonesiaPageMetadata,
  categoryPageTitles,
  moneyPageLabel,
} from "@/lib/seo/indonesia";
import { shopCategories } from "@/lib/site-config";
import { formatPrice, productPath } from "@/lib/utils";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  return getCatalogProducts().map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || product.category !== category) return {};

  const categoryLabel =
    shopCategories.find((item) => item.slug === product.category)?.label.id ?? product.category;
  const priceLabel =
    product.price > 0 ? formatPrice(product.price, "id") : "cek harga di Shopee";
  const metadata = buildIndonesiaPageMetadata({
    title: `${product.name} | Beli di Shopee`,
    description: `${product.name}${product.brand ? ` dari ${product.brand}` : ""} — ${categoryLabel} di HiMoon Baby & Kids Badung. ${priceLabel}. Checkout Shopee himoonbabykids.`,
    path: productPath(product),
    keywords: [
      product.name,
      product.brand ?? "HiMoon",
      categoryLabel,
      "Shopee himoonbabykids",
    ],
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      title: product.name,
      description: `Beli ${product.name} di Shopee himoonbabykids.`,
      images: [product.image],
    },
    robots: { index: true, follow: true },
  };
}

export const revalidate = 3600;

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  const shopCategory = shopCategories.find((item) => item.slug === product.category);
  const relatedGuides = getGuidesForCategory(product.category).slice(0, 3);
  const relatedProducts = (await getProductsByCategory(product.category))
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);
  const priceLabel =
    product.price > 0 ? formatPrice(product.price, "id") : "Cek harga di Shopee";
  const categoryHref = `/shop/${product.category}`;
  const categoryTitle = categoryPageTitles[product.category] ?? shopCategory?.label.id ?? "Katalog";
  const speakable = `${product.name}${product.brand ? ` dari ${product.brand}` : ""} dijual di HiMoon Baby & Kids, baby shop di Badung, Bali. Harga di situs: ${priceLabel}. Jalur beli hanya Shopee himoonbabykids — buka tombol Beli di Shopee untuk stok dan ongkir live. WhatsApp tidak dipakai untuk checkout.`;

  return (
    <div className="bg-himoon-cream py-10 md:py-14">
      <JsonLdScript
        data={webPageSchema({
          path: productPath(product),
          name: product.name,
          description: `${product.name} di HiMoon Baby & Kids. Checkout Shopee himoonbabykids.`,
          dateModified: product.syncedAt || SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript data={productSchema(product)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Baby Shop", path: "/shop" },
          { name: shopCategory?.label.id ?? "Katalog", path: categoryHref },
          { name: product.name, path: productPath(product) },
        ])}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:px-6">
        <div>
          <Breadcrumb
            items={[
              { name: "Beranda", href: "/" },
              { name: "Belanja", href: "/shop" },
              { name: shopCategory?.label.id ?? "Katalog", href: categoryHref },
              { name: product.name },
            ]}
          />
          <div className="relative mt-6 aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              fetchPriority="high"
              quality={70}
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
            {product.brand ? (
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-himoon-blue shadow">
                {product.brand}
              </span>
            ) : null}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
            {shopCategory?.label.id} · Shopee himoonbabykids
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-himoon-blue md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-extrabold text-himoon-yellow">{priceLabel}</p>
          <SpeakableAnswer id={`product-${product.slug}`} className="mt-6">
            <p>{speakable}</p>
          </SpeakableAnswer>
          <div className="mt-6 flex flex-wrap gap-3">
            <ShopeeCta href={product.shopeeUrl} label="Beli di Shopee" />
            <ShopCta href={categoryHref} label={moneyPageLabel(categoryHref)} />
          </div>
          <p className="mt-4 text-sm text-himoon-muted">
            Stok, varian, dan ongkir mengikuti listing Shopee. HiMoon tidak checkout via WhatsApp.
          </p>
          <p className="mt-6 text-sm">
            <Link href={categoryHref} className="font-semibold text-himoon-blue underline">
              {categoryTitle}
            </Link>
            {" · "}
            <Link href="/shop" className="font-semibold text-himoon-blue underline">
              Semua katalog
            </Link>
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <RelatedGuides guides={relatedGuides} />
        {relatedProducts.length > 0 ? (
          <section className="mt-12 pb-8">
            <h2 className="text-2xl font-bold text-himoon-blue">Produk serupa</h2>
            <p className="mt-1 text-sm text-himoon-muted">Beli di Shopee himoonbabykids.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
