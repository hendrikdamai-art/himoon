import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getProducts } from "@/lib/catalog";
import { getGuide } from "@/lib/seo/guides";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta, WhatsAppCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { RelatedGuides } from "@/components/seo/related-guides";
import { ProductCard } from "@/components/product-card";
import { MoneyQuickFacts } from "@/components/shop-money-content";
import {
  aggregateOfferSchema,
  breadcrumbSchema,
  faqSchema,
  productOfferSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { PRICE_RANGE_IDR } from "@/lib/seo/constants";
import { buildIndonesiaPageMetadata } from "@/lib/seo/indonesia";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/catalog";

const CLUSTER_SLUGS = [
  "perlengkapan-bayi-baru-lahir",
  "toko-mpasi-bali",
  "beli-sunscreen-bayi",
  "tips-memilih-popok-bayi",
] as const;

const FEATURED_MATCHERS = [
  /PASEO Baby Tissue/i,
  /Bunda Elia/i,
  /Moell Physical Sunscreen/i,
  /MamyPoko Royal Soft/i,
];

function resolvePrices(products: Product[]) {
  const prices = products.map((product) => product.price).filter((price) => price > 0);
  return {
    minPrice: prices.length ? Math.min(...prices) : PRICE_RANGE_IDR.min,
    maxPrice: prices.length ? Math.max(...prices) : PRICE_RANGE_IDR.max,
  };
}

function pickFeaturedStoreProducts(products: Product[]): Product[] {
  const picks: Product[] = [];
  for (const matcher of FEATURED_MATCHERS) {
    const found = products.find((product) => matcher.test(product.name));
    if (found && !picks.some((item) => item.id === found.id)) {
      picks.push(found);
    }
  }
  return picks;
}

function findPrice(products: Product[], pattern: RegExp, fallback: number) {
  return products.find((product) => pattern.test(product.name))?.price ?? fallback;
}

function idrRange(minPrice: number, maxPrice: number) {
  if (minPrice === maxPrice) return formatPrice(minPrice);
  return `${formatPrice(minPrice)}–${formatPrice(maxPrice)}`;
}

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const products = await getProducts();
  const { minPrice, maxPrice } = resolvePrices(products);
  const range = idrRange(minPrice, maxPrice);

  return buildIndonesiaPageMetadata({
    title: `Toko Bayi Bali di Badung | Harga ${range}`,
    description: `Toko bayi Bali HiMoon di ${siteConfig.location.id}. Katalog ${range}: MPASI, popok, skincare. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar & luar Bali.`,
    path: "/toko-bayi-bali",
    keywords: [
      "toko bayi Bali",
      "toko bayi Badung",
      "Baby Shop Bali",
      "toko perlengkapan bayi Bali",
      "HiMoon Badung",
      "ambil toko atau kirim Shopee",
    ],
  });
}

export default async function TokoBayiBaliPage() {
  const products = await getProducts();
  const { minPrice, maxPrice } = resolvePrices(products);
  const range = idrRange(minPrice, maxPrice);
  const featured = pickFeaturedStoreProducts(products);
  const clusterGuides = CLUSTER_SLUGS.map((slug) => getGuide(slug)).filter(
    (guide): guide is NonNullable<typeof guide> => Boolean(guide),
  );

  const paseoPrice = findPrice(products, /PASEO Baby Tissue/i, 22500);
  const eliaPrice = findPrice(products, /Bunda Elia/i, 55000);
  const moellPrice = findPrice(products, /Moell Physical Sunscreen/i, 79000);
  const popokPrice = findPrice(products, /MamyPoko Royal Soft/i, 123000);

  const heading = `Toko bayi Bali di Badung — ambil di Maps atau kirim Shopee`;
  const description = `Toko bayi Bali HiMoon di ${siteConfig.location.id}. Katalog ${range}: MPASI, popok, skincare. Ambil di toko atau kirim Shopee himoonbabykids ke Denpasar & luar Bali.`;

  const facts = [
    {
      label: "Harga katalog",
      value: `${range} mengikuti Shopee himoonbabykids (tisu Paseo ${formatPrice(paseoPrice)} sampai MamyPoko Royal Soft ${formatPrice(popokPrice)})`,
    },
    {
      label: "Yang termasuk",
      value: `Produk original sesuai listing: MPASI Bunda Elia ${formatPrice(eliaPrice)}, sunscreen Moell ${formatPrice(moellPrice)}, popok MamyPoko, peralatan Paseo. Bantuan pilih via WhatsApp.`,
    },
    {
      label: "Ambil vs kirim",
      value:
        "Ambil di toko Badung. Kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Ongkir dihitung di checkout.",
    },
    {
      label: "Venue",
      value: siteConfig.location.id,
    },
  ];

  const faqs = [
    {
      question: { id: "Di mana alamat toko bayi Bali HiMoon?", en: "Address?" },
      answer: {
        id: `${siteConfig.location.id}. Pin Google Maps ada di halaman ini dan di [/contact](/contact).`,
        en: `${siteConfig.location.en}. The Google Maps pin is on this page and /contact.`,
      },
    },
    {
      question: { id: "Berapa harga di toko bayi Bali HiMoon?", en: "Prices?" },
      answer: {
        id: `Katalog situs mengikuti Shopee himoonbabykids, saat ini ${range}. Contoh live: tisu Paseo ${formatPrice(paseoPrice)}, Bunda Elia ${formatPrice(eliaPrice)}, sunscreen Moell ${formatPrice(moellPrice)}, MamyPoko Royal Soft ${formatPrice(popokPrice)}. Harga final, promo, dan stok ada di listing Shopee.`,
        en: `On-site catalog follows Shopee himoonbabykids, currently ${range}. Confirm the live listing before checkout.`,
      },
    },
    {
      question: { id: "Lebih cepat ambil di toko atau kirim Shopee?", en: "Pickup or Shopee?" },
      answer: {
        id: "Ambil di toko jika Anda di Badung dan ingin lihat kemasan. Kirim Shopee jika butuh stok live, ongkir, dan pengiriman ke Denpasar atau luar Bali. WhatsApp hanya untuk tanya stok fisik.",
        en: "Pickup if you are in Badung and want to see items. Shopee if you need live stock, shipping, and delivery to Denpasar or beyond Bali. WhatsApp is for in-store stock questions.",
      },
    },
    {
      question: { id: "Apa yang termasuk jika belanja di toko bayi Bali HiMoon?", en: "What is included?" },
      answer: {
        id: `Termasuk produk original sesuai listing (${range}), bantuan pilih via WhatsApp, opsi ambil di Badung, dan checkout Shopee himoonbabykids. Tidak termasuk klaim medis, stroller, atau ongkir (dihitung Shopee).`,
        en: `Included: authentic listed products (${range}), WhatsApp help, Badung pickup, and Shopee checkout. Not included: medical claims, strollers, or shipping (Shopee calculates it).`,
      },
    },
    {
      question: { id: "Apakah buka untuk ibu hamil?", en: "Open for pregnant shoppers?" },
      answer: {
        id: "Ya. Katalog kami untuk ibu hamil, new mom, dan keluarga yang mencari perlengkapan bayi.",
        en: "Yes. The catalog is for pregnant shoppers, new moms, and anyone buying baby essentials.",
      },
    },
    {
      question: { id: "Jam buka toko bayi Bali?", en: "Hours?" },
      answer: {
        id: "Kami tidak mencantumkan jam yang belum dikonfirmasi. Chat WhatsApp atau cek Google Maps sebelum datang.",
        en: "We do not publish unverified hours. WhatsApp or check Google Maps before visiting.",
      },
    },
  ];

  const speakable = `Toko bayi Bali HiMoon Mom, Baby & Kids Shop ada di ${siteConfig.location.id}. Harga katalog mengikuti Shopee himoonbabykids, saat ini ${range} — tisu Paseo ${formatPrice(paseoPrice)} sampai popok MamyPoko Royal Soft ${formatPrice(popokPrice)}. Yang termasuk: produk original sesuai listing seperti MPASI Bunda Elia ${formatPrice(eliaPrice)} dan sunscreen Moell ${formatPrice(moellPrice)}, bantuan pilih via WhatsApp, opsi ambil di toko Badung, dan kirim Shopee ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Kunjungi toko jika ingin lihat kemasan; checkout Shopee jika butuh stok live dan ongkir. Jam buka tidak kami tebak di situs; cek Google Maps atau WhatsApp sebelum datang. Halaman belanja utama tetap /shop. Ini toko ritel, bukan klinik bayi. Baby shop besar di Denpasar sering jual stroller; HiMoon fokus etalase terkurasi plus checkout Shopee.`;

  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: "/toko-bayi-bali",
          name: heading,
          description,
        })}
      />
      <JsonLdScript
        data={aggregateOfferSchema({
          name: "Katalog toko bayi Bali HiMoon",
          url: `${siteConfig.url}/toko-bayi-bali`,
          lowPrice: minPrice,
          highPrice: maxPrice,
          offerCount: Math.max(products.length, featured.length, 1),
        })}
      />
      {featured.map((product) => (
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
      <JsonLdScript data={faqSchema(faqs)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Toko bayi Bali", path: "/toko-bayi-bali" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumb
          items={[
            { name: "Beranda", href: "/" },
            { name: "Toko bayi Bali" },
          ]}
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
          Toko bayi Bali · Badung · Shopee himoonbabykids
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-himoon-blue">
          {heading}
        </h1>
        <MoneyQuickFacts facts={facts} />
        <SpeakableAnswer id="toko-bayi-bali-answer" className="mt-6">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopeeCta label="Beli di Shopee himoonbabykids" />
          <ShopCta href="/shop" label="Lihat katalog HiMoon" />
          <WhatsAppCta />
        </div>
        <div className="mt-8">
          <GoogleMapEmbed />
        </div>
        {featured.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-himoon-blue">
              Beli di Shopee — contoh harga live
            </h2>
            <p className="mt-2 text-sm text-himoon-muted">
              Tombol oranye ke Shopee himoonbabykids. WhatsApp hanya untuk tanya stok toko Badung.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ) : null}
        <section className="mt-10 space-y-4 text-himoon-muted">
          <h2 className="text-2xl font-bold text-himoon-blue">Siapa yang cocok ke toko fisik</h2>
          <p>
            Ibu di Badung yang ingin pegang kemasan sunscreen Moell, cek ukuran popok, atau tanya
            stok MPASI Bunda Elia. Bawa daftar dari{" "}
            <Link href="/blog/perlengkapan-bayi-baru-lahir" className="font-semibold text-himoon-blue underline">
              perlengkapan bayi baru lahir
            </Link>
            , bandingkan popok di{" "}
            <Link href="/blog/tips-memilih-popok-bayi" className="font-semibold text-himoon-blue underline">
              tips memilih popok bayi
            </Link>
            , atau cek{" "}
            <Link href="/blog/beli-sunscreen-bayi" className="font-semibold text-himoon-blue underline">
              beli sunscreen bayi
            </Link>
            .
          </p>
          <h2 className="text-2xl font-bold text-himoon-blue">Siapa yang lebih cocok Shopee</h2>
          <p>
            Orang tua di Denpasar, Canggu, Kuta, Sanur, Ubud, atau luar Bali. Checkout{" "}
            <a
              href={siteConfig.shopeeShopUrl}
              className="font-semibold text-himoon-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              himoonbabykids
            </a>{" "}
            agar kurir dan promo mengikuti platform. Nutrisi MPASI ada di panduan{" "}
            <Link href="/blog/toko-mpasi-bali" className="font-semibold text-himoon-blue underline">
              toko MPASI Bali
            </Link>
            .
          </p>
        </section>
        <RelatedGuides guides={clusterGuides} />
        <FaqSection title="FAQ toko bayi Bali" faqs={faqs} />
      </div>
    </div>
  );
}
