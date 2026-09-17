import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { getMoneyPageFaqs, keywordStrategy } from "@/lib/seo/keywords";
import { PRICE_RANGE_IDR } from "@/lib/seo/constants";
import { getGuide } from "@/lib/seo/guides";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import type { GuideFaq } from "@/types/catalog";

function moneySpeakable(minPrice: number, maxPrice: number): string {
  return `HiMoon Baby & Kids adalah baby shop di Kabupaten Badung, Bali, untuk ibu hamil, new mom, dan keluarga yang mencari MPASI, popok, skincare, serta peralatan makan. Tidak seperti baby shop besar di Denpasar yang fokus stroller atau car seat, kami mengkurasi etalase yang bisa di-checkout di Shopee himoonbabykids. Harga katalog situs sekitar ${formatPrice(minPrice)} sampai ${formatPrice(maxPrice)}, tergantung item seperti tisu, saringan MPASI, lotion, sunscreen, atau popok. Yang termasuk: produk original sesuai listing, bantuan tanya stok via WhatsApp, dan opsi ambil di Badung. Tidak termasuk ongkir — ongkir dihitung di Shopee saat checkout ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Kami bukan klinik; label merek dan tenaga kesehatan tetap acuan medis. Belanja paling cepat lewat tombol Beli di Shopee pada setiap produk. Rating 4,9 merujuk toko Shopee, bukan bintang buatan di halaman ini. Ini halaman belanja utama: panduan blog mengarah ke sini lalu ke Shopee. Jika stok berubah, percayai listing Shopee.`;
}

export function ShopMoneyIntro({
  productCount,
  minPrice,
  maxPrice,
}: {
  productCount: number;
  minPrice: number;
  maxPrice: number;
}) {
  const min = minPrice || PRICE_RANGE_IDR.min;
  const max = maxPrice || PRICE_RANGE_IDR.max;

  return (
    <header className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
        Baby Shop Bali · Toko perlengkapan bayi · Shopee himoonbabykids
      </p>
      <h1 className="mt-2 max-w-4xl text-3xl font-extrabold leading-tight text-himoon-blue md:text-5xl">
        Baby Shop Bali: perlengkapan bayi, MPASI & popok dari {formatPrice(min)}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-himoon-muted">
        Baby shop HiMoon di Badung untuk ibu hamil dan new mom: MPASI Bunda Elia, sunscreen Moell,
        popok MamyPoko, dan peralatan makan. Harga {formatPrice(min)}–{formatPrice(max)} mengikuti
        Shopee ({productCount} item di halaman ini).
      </p>
      <ShopQuickFacts minPrice={min} maxPrice={max} />
      <SpeakableAnswer id="shop-direct-answer" className="mt-6 max-w-4xl">
        <p>{moneySpeakable(min, max)}</p>
      </SpeakableAnswer>
      <div className="mt-6 flex flex-wrap gap-3">
        <ShopeeCta label="Beli di Shopee himoonbabykids" />
        <ShopCta href="/contact" label="Tanya stok WhatsApp / Maps" />
      </div>
    </header>
  );
}

export function ShopQuickFacts({
  minPrice,
  maxPrice,
}: {
  minPrice: number;
  maxPrice: number;
}) {
  const facts = [
    {
      label: "Harga katalog",
      value: `${formatPrice(minPrice)}–${formatPrice(maxPrice)}`,
    },
    {
      label: "Yang termasuk",
      value: "Produk original + tautan checkout Shopee",
    },
    {
      label: "Ambil vs kirim",
      value: "Ambil di Badung · kirim kurir Shopee",
    },
    {
      label: "Lokasi toko",
      value: "Kab. Badung, Bali",
    },
  ];

  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3"
        >
          <dt className="text-xs font-semibold uppercase tracking-wider text-himoon-yellow">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm font-semibold text-himoon-blue">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ShopInclusions() {
  const items = [
    "MPASI & nutrisi Bunda Elia",
    "Sunscreen Moell & lotion Gently",
    "Popok MamyPoko (Makuku sesuai stok Shopee)",
    "Peralatan makan & perawatan bibir",
    "Ambil di Badung atau kirim Shopee",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h2 className="text-2xl font-bold text-himoon-blue">Apa yang termasuk</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-himoon-blue"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-himoon-muted">
        Tidak termasuk: klaim medis, stroller/fashion kecuali ada di etalase Shopee, dan
        ongkir (dihitung Shopee).
      </p>
    </section>
  );
}

export function ShopGuideLinks() {
  const guides = keywordStrategy.clusters
    .map((cluster) => getGuide(cluster.path.replace(/^\/blog\//, "")))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 md:px-6">
      <h2 className="text-2xl font-bold text-himoon-blue">Panduan belanja (niat beli)</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/blog/${guide.slug}`}
              className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-himoon-yellow"
            >
              <p className="font-bold text-himoon-blue">{guide.title.id}</p>
              <p className="mt-1 text-sm text-himoon-muted">{guide.excerpt.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ShopFaqBlock({
  minPrice,
  maxPrice,
}: {
  minPrice?: number;
  maxPrice?: number;
} = {}) {
  const faqs: GuideFaq[] = [
    ...getMoneyPageFaqs(
      minPrice ?? PRICE_RANGE_IDR.min,
      maxPrice ?? PRICE_RANGE_IDR.max,
    ),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <FaqSection title="FAQ belanja HiMoon" faqs={faqs} />
      <p className="mt-6 text-sm text-himoon-muted">
        Etalase live:{" "}
        <a
          href={siteConfig.shopeeShopUrl}
          className="font-semibold text-himoon-blue underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.shopeeShopUrl}
        </a>
      </p>
    </div>
  );
}
