import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/lib/catalog";
import { getGuide, getGuides } from "@/lib/seo/guides";
import { shopCategories } from "@/lib/site-config";
import { FaqSection } from "@/components/seo/faq-section";
import { buildIndonesiaPageMetadata, categoryPageTitles, categorySeoKeywords } from "@/lib/seo/indonesia";
import { CategoryPageClient } from "./category-page-client";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { CategoryQuickFacts } from "@/components/shop-money-content";
import {
  aggregateOfferSchema,
  breadcrumbSchema,
  faqSchema,
  productOfferSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import {
  categoryMoneySeo,
  resolveCategoryPrices,
  type CategoryMoneyExtras,
} from "@/lib/seo/category-money";
import { formatPrice } from "@/lib/utils";
import type { BlogPost, Product } from "@/types/catalog";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return shopCategories.map((category) => ({ category: category.slug }));
}

function findPrice(products: { name: string; price: number }[], pattern: RegExp, fallback: number) {
  const match = products.find((item) => pattern.test(item.name) && item.price > 0);
  return match?.price ?? fallback;
}

function relatedGuidesForCategory(slug: string, clusterSlugs?: string[]): BlogPost[] {
  const byHref = getGuides().filter(
    (guide) => guide.shopHref === `/shop/${slug}` || guide.relatedCategory === slug,
  );

  const extras = (clusterSlugs ?? [])
    .map((clusterSlug) => getGuide(clusterSlug))
    .filter((guide): guide is BlogPost => Boolean(guide));

  const merged = new Map<string, BlogPost>();
  for (const guide of [...extras, ...byHref]) merged.set(guide.slug, guide);
  return Array.from(merged.values()).slice(0, 3);
}

async function moneyExtrasForCategory(
  slug: string,
  products: Product[],
): Promise<CategoryMoneyExtras> {
  const equipment =
    slug === "mpasi" ? await getProductsByCategory("peralatan-bayi") : [];
  return {
    bundaEliaPrice: findPrice(products, /Bunda Elia.*BB Booster Rice|BB Booster Rice/i, 55000),
    strainerPrice: findPrice(equipment, /saringan/i, 29500),
    productCount: products.length,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) return {};

  const money = categoryMoneySeo[category.slug];
  if (money) {
    const products = await getProductsByCategory(category.slug);
    const { minPrice, maxPrice } = resolveCategoryPrices(products, money);
    const extras = await moneyExtrasForCategory(category.slug, products);
    const title = money.title(minPrice, maxPrice, extras);
    return {
      ...buildIndonesiaPageMetadata({
        title,
        description: money.description(minPrice, maxPrice, extras),
        path: `/shop/${category.slug}`,
        keywords: ["Baby Shop Bali", ...money.keywords],
      }),
      title: { absolute: title },
    };
  }

  return buildIndonesiaPageMetadata({
    title: categoryPageTitles[category.slug] ?? `${category.label.id} | Baby Shop Bali`,
    description: `${category.description.id} Belanja ${category.label.id} di baby shop HiMoon, Badung Bali. Pesan via WhatsApp atau Shopee himoonbabykids.`,
    path: `/shop/${category.slug}`,
    keywords: ["Baby Shop Bali", ...(categorySeoKeywords[category.slug] ?? [])],
  });
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = shopCategories.find((item) => item.slug === slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);
  const money = categoryMoneySeo[category.slug];
  const { minPrice, maxPrice } = resolveCategoryPrices(products, money);
  const extras = await moneyExtrasForCategory(category.slug, products);
  const relatedGuides = relatedGuidesForCategory(category.slug, money?.clusterSlugs);
  const pricedProducts = products.filter((product) => product.price > 0);

  const faqs = money
    ? money.faqs(minPrice, maxPrice, extras)
    : [
        {
          question: {
            id: `Apakah HiMoon jual ${category.label.id}?`,
            en: `Does HiMoon sell ${category.label.en}?`,
          },
          answer: {
            id: `Ya. ${category.description.id} Lihat katalog di bawah, lalu checkout Shopee himoonbabykids untuk stok live.`,
            en: `Yes. ${category.description.en} Browse the catalog below, then checkout on Shopee himoonbabykids for live stock.`,
          },
        },
        {
          question: {
            id: "Bagaimana cara beli ke Shopee?",
            en: "How do I buy on Shopee?",
          },
          answer: {
            id: "Klik Beli di Shopee pada kartu produk, atau buka etalase himoonbabykids. WhatsApp hanya untuk tanya stok toko Bali.",
            en: "Use Buy on Shopee on each product card, or open the himoonbabykids shop. WhatsApp is for Bali in-store stock questions.",
          },
        },
      ];

  const speakable = money
    ? money.speakable(minPrice, maxPrice, extras)
    : `Kategori ${category.label.id} di baby shop HiMoon Bali menampilkan item yang sama dengan etalase Shopee himoonbabykids. ${category.description.id} Harga dan stok mengikuti Shopee; konfirmasi listing sebelum checkout. Ibu hamil dan new mom bisa ambil di Badung atau kirim ke Denpasar, Canggu, Kuta, Ubud, dan luar Bali lewat kurir Shopee. Halaman belanja utama tetap /shop. Kami tidak menempel rating palsu. Pilih produk di grid, lalu tombol oranye ke Shopee.`;

  const heading = money
    ? money.h1(minPrice, maxPrice, extras)
    : `${category.label.id} di toko HiMoon Badung`;
  const dateModified = money?.dateModified ?? SITE_CONTENT_UPDATED;

  return (
    <div className="bg-himoon-cream">
      <JsonLdScript
        data={webPageSchema({
          path: `/shop/${category.slug}`,
          name: heading,
          description: money ? money.description(minPrice, maxPrice, extras) : category.description.id,
          dateModified,
        })}
      />
      <JsonLdScript data={faqSchema(faqs)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Baby Shop", path: "/shop" },
          { name: category.label.id, path: `/shop/${category.slug}` },
        ])}
      />
      {pricedProducts.length > 0 ? (
        <JsonLdScript
          data={aggregateOfferSchema({
            path: `/shop/${category.slug}`,
            name: heading,
            description: money
              ? money.description(minPrice, maxPrice, extras)
              : category.description.id,
            lowPrice: minPrice,
            highPrice: maxPrice,
            offerCount: pricedProducts.length,
          })}
        />
      ) : null}
      {pricedProducts.map((product) => (
        <JsonLdScript
          key={product.id}
          data={productOfferSchema({
            name: product.name,
            image: product.image,
            price: product.price,
            url: product.shopeeUrl,
            brand: product.brand,
            inStock: product.inStock,
          })}
        />
      ))}
      <header className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
          Baby Shop Bali · {category.label.id}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-himoon-blue md:text-4xl">
          {heading}
        </h1>
        {money ? <CategoryQuickFacts facts={money.facts(minPrice, maxPrice, extras)} /> : null}
        <SpeakableAnswer id={`category-${category.slug}`} className="mt-6 max-w-4xl">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopeeCta />
          <ShopCta href="/shop" label="Semua katalog baby shop" />
        </div>
        {relatedGuides.length > 0 ? (
          <nav className="mt-6" aria-label={`Panduan ${category.label.id}`}>
            <p className="text-sm font-bold text-himoon-blue">Panduan cluster {category.label.id}</p>
            <ul className="mt-3 flex flex-wrap gap-3 text-sm">
              {relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/blog/${guide.slug}`}
                    className="font-semibold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2"
                  >
                    {guide.title.id}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        {category.slug === "mpasi" ? (
          <p className="mt-4 text-sm text-himoon-muted">
            Butuh saringan MPASI stainless (katalog {formatPrice(extras.strainerPrice ?? 29500)})? Lihat{" "}
            <Link
              href="/shop/peralatan-bayi"
              className="font-semibold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2"
            >
              kategori Peralatan Bayi
            </Link>
            . ASI booster / Mom Uung hanya jika listing Shopee menampilkannya.
          </p>
        ) : null}
      </header>
      <CategoryPageClient category={category} products={products} hideHeading />
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <FaqSection title={`FAQ ${category.label.id}`} faqs={faqs} />
      </div>
    </div>
  );
}
