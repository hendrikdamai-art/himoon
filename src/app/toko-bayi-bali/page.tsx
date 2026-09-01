import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { FaqSection } from "@/components/seo/faq-section";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toko Bayi Bali di Badung | HiMoon + Shopee",
  description:
    "Toko bayi di Kabupaten Badung, Bali: MPASI, popok, sunscreen. Datang ke toko atau beli online di Shopee himoonbabykids untuk kirim Denpasar, Canggu, Kuta, Ubud.",
  alternates: { canonical: `${siteConfig.url}/toko-bayi-bali` },
};

const faqs = [
  {
    question: { id: "Di mana alamat toko bayi HiMoon?", en: "Address?" },
    answer: {
      id: "Kabupaten Badung, Bali. Pin Google Maps ada di halaman ini dan di /contact. Kami tidak menuliskan jalan yang tidak kami miliki datanya.",
      en: "Badung Regency, Bali. The Google Maps pin is on this page and /contact. We do not invent a street we do not have on file.",
    },
  },
  {
    question: { id: "Lebih cepat toko atau Shopee?", en: "Store or Shopee?" },
    answer: {
      id: "Toko jika Anda di Badung dan ingin lihat fisik. Shopee jika butuh stok live, ongkir, dan kirim ke Denpasar atau luar Bali.",
      en: "The store if you are in Badung and want to see items. Shopee if you need live stock, shipping, and delivery to Denpasar or beyond Bali.",
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
    question: { id: "Jam buka?", en: "Hours?" },
    answer: {
      id: "Kami tidak mencantumkan jam yang belum dikonfirmasi. Chat WhatsApp atau cek Google Maps sebelum datang.",
      en: "We do not publish unverified hours. WhatsApp or check Google Maps before visiting.",
    },
  },
];

const speakable =
  "Toko bayi HiMoon ada di Kabupaten Badung, Bali, dan melayani ibu hamil plus new mom yang mencari MPASI, popok, sunscreen, dan peralatan makan. Jika Anda tinggal di Canggu, Kuta, Denpasar, atau Ubud, jalur paling akurat untuk stok dan ongkir adalah Shopee himoonbabykids, sementara kunjungan toko cocok bila ingin lihat kemasan. Harga di situs mengikuti etalase Shopee, sekitar Rp28.000 sampai Rp125.000. Kami tidak mengisi alamat jalan atau jam buka yang tidak ada di data bisnis. Kontak: WhatsApp, email adminhimoon@gmail.com, dan pin Google Maps. Halaman belanja utama tetap /shop. Produk original sesuai brand di listing. Ini toko ritel, bukan klinik bayi. Bandingkan dengan baby shop besar di Denpasar jika Anda butuh stroller lengkap; HiMoon fokus etalase terkurasi plus checkout Shopee. Tanyakan stok fisik dulu via chat sebelum datang dari jauh. Simpan tautan Shopee untuk restock.";

export default function TokoBayiBaliPage() {
  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: "/toko-bayi-bali",
          name: "Toko bayi Bali di Badung | HiMoon",
          description: metadata.description as string,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
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
        <h1 className="mt-4 text-4xl font-extrabold text-himoon-blue">
          Toko bayi Bali (Badung) — datang atau order Shopee
        </h1>
        <SpeakableAnswer id="toko-bayi-bali-answer" className="mt-6">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopeeCta />
          <ShopCta />
        </div>
        <section className="mt-10 space-y-4 text-himoon-muted">
          <h2 className="text-2xl font-bold text-himoon-blue">Siapa yang cocok ke toko fisik</h2>
          <p>
            Ibu di Badung yang ingin pegang kemasan sunscreen Moell, cek ukuran popok, atau tanya
            stok MPASI Bunda Elia. Bawa daftar dari{" "}
            <Link href="/blog/perlengkapan-bayi-baru-lahir" className="font-semibold text-himoon-blue underline">
              perlengkapan bayi baru lahir
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
            agar kurir dan promo mengikuti platform.
          </p>
        </section>
        <div className="mt-8">
          <GoogleMapEmbed />
        </div>
        <FaqSection title="FAQ toko bayi Bali" faqs={faqs} />
      </div>
    </div>
  );
}
