import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Metodologi Perbandingan Produk Bayi | HiMoon",
  description:
    "Cara HiMoon membandingkan popok, sunscreen, dan MPASI: etalase Shopee nyata, iklim Bali, tanpa panel palsu atau rating buatan.",
  alternates: { canonical: `${siteConfig.url}/metodologi-perbandingan` },
};

const speakable =
  "Metodologi perbandingan HiMoon dipakai agar artikel Makuku versus MamyPoko dan panduan skincare bisa dikutip tanpa menyesatkan. Kami hanya membandingkan produk yang memang ada di etalase Shopee himoonbabykids atau katalog situs. Kriteria yang diulang: kesesuaian iklim panas lembap Bali, kejelasan ukuran atau usia di label merek, harga listing katalog, dan apakah item bisa di-checkout Shopee hari ini. Kami tidak menjalankan uji lab, tidak membayar panel orang tua fiktif, dan tidak menempel aggregateRating di artikel. Rating 4,9 jika muncul di situs merujuk toko Shopee, terpisah dari perbandingan SKU. Jika stok salah satu merek habis, kami tidak memaksa pemenang. Pembaca tetap diarahkan ke /shop dan Shopee untuk beli. Revisi metodologi bertanggal di dateModified halaman ini. Wartawan boleh menaut halaman ini sebagai sumber metode. Pertanyaan koreksi kirim ke email toko, bukan ke form yang tidak kami sediakan.";

export default function MethodologyPage() {
  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: "/metodologi-perbandingan",
          name: "Metodologi perbandingan produk bayi",
          description: metadata.description as string,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Metodologi", path: "/metodologi-perbandingan" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumb
          items={[{ name: "Beranda", href: "/" }, { name: "Metodologi perbandingan" }]}
        />
        <h1 className="mt-4 text-4xl font-extrabold text-himoon-blue">
          Metodologi perbandingan produk
        </h1>
        <p className="mt-3 text-himoon-muted">Aset yang bisa di-link wartawan dan AI: cara kami membandingkan SKU.</p>
        <SpeakableAnswer id="methodology-answer" className="mt-6">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <ol className="mt-8 list-decimal space-y-3 pl-5 text-himoon-muted">
          <li>Hanya SKU yang ada di Shopee himoonbabykids atau katalog situs.</li>
          <li>Harga yang disebut adalah harga listing katalog, dengan catatan bisa berubah di Shopee.</li>
          <li>Iklim Bali (panas, lembap, UV) dipakai sebagai konteks pemakaian, bukan uji lab.</li>
          <li>Tidak ada bintang buatan, tidak ada jumlah reviewer fiktif.</li>
          <li>Pemenang bersifat situasional (malam vs tipis), bukan abadi.</li>
          <li>CTA selalu ke halaman belanja dan Shopee, bukan form lead palsu.</li>
        </ol>
        <p className="mt-6 text-sm">
          Contoh terapan:{" "}
          <Link href="/blog/makuku-vs-mamypoko" className="font-semibold text-himoon-blue underline">
            Makuku vs MamyPoko
          </Link>{" "}
          dan{" "}
          <Link href="/blog/beli-sunscreen-bayi" className="font-semibold text-himoon-blue underline">
            beli sunscreen bayi
          </Link>
          .
        </p>
        <p className="mt-4 text-xs text-himoon-muted">
          Diperbarui {SITE_CONTENT_UPDATED}. Pertanyaan metodologi: {siteConfig.email}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopCta />
          <ShopeeCta />
        </div>
      </div>
    </div>
  );
}
