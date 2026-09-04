import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { moneyPageFaqs } from "@/lib/seo/keywords";
import { PRICE_RANGE_IDR } from "@/lib/seo/constants";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { getGuides } from "@/lib/seo/guides";

const MONEY_SPEAKABLE =
  "HiMoon Baby & Kids adalah toko perlengkapan bayi di Kabupaten Badung, Bali, untuk ibu hamil, new mom, dan keluarga yang mencari MPASI, popok, skincare, serta peralatan makan. Katalog situs ini mengikuti toko Shopee himoonbabykids dengan rentang harga sekitar Rp22.500 sampai Rp123.000, tergantung item. Yang termasuk: produk original sesuai etalase, bantuan pilih ukuran atau jenis lewat WhatsApp, opsi ambil di toko Bali, dan checkout Shopee untuk stok plus ongkir live ke Denpasar, Canggu, Kuta, Ubud, atau luar Bali. Kami bukan klinik; label merek dan tenaga kesehatan tetap acuan medis. Belanja paling cepat lewat tombol Beli di Shopee pada setiap produk, atau buka etalase himoonbabykids. Rating 4,9 yang disebut di situs merujuk toko Shopee, bukan bintang buatan di halaman ini. Halaman ini adalah money page: semua panduan blog mengarah ke sini lalu ke Shopee. Jika stok berubah, percayai listing Shopee daripada cache situs.";

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
        Toko perlengkapan bayi Bali · Shopee himoonbabykids
      </p>
      <h1 className="mt-2 max-w-4xl text-3xl font-extrabold leading-tight text-himoon-blue md:text-5xl">
        Beli perlengkapan bayi, MPASI & skincare di Bali
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-himoon-muted">
        Katalog HiMoon untuk ibu hamil dan new mom: MPASI Bunda Elia, sunscreen Moell,
        popok Makuku/MamyPoko, dan peralatan makan. Harga {formatPrice(min)}–
        {formatPrice(max)} mengikuti Shopee ({productCount} item di halaman ini).
      </p>
      <SpeakableAnswer id="shop-direct-answer" className="mt-6 max-w-4xl">
        <p>{MONEY_SPEAKABLE}</p>
      </SpeakableAnswer>
      <div className="mt-6 flex flex-wrap gap-3">
        <ShopeeCta label="Beli di Shopee himoonbabykids" />
        <ShopCta href="/contact" label="Tanya stok WhatsApp / Maps" />
      </div>
    </header>
  );
}

export function ShopInclusions() {
  const items = [
    "MPASI & nutrisi Bunda Elia",
    "Sunscreen Moell & lotion Gently",
    "Popok MamyPoko (Makuku sesuai stok Shopee)",
    "Peralatan makan & treatment bibir",
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
  const guides = getGuides().slice(0, 6);

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

export function ShopFaqBlock() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <FaqSection title="FAQ belanja HiMoon" faqs={[...moneyPageFaqs]} />
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
