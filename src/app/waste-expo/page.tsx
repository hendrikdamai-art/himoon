import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  Heart,
  CalendarDays,
} from "lucide-react";
import { BookingForm } from "./booking-form";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const EXHIBITOR_URL =
  "https://www.wasteexpoaustralia.com.au/en-gb/exhibitor-details.ihub%20solutions.org-11a4de73-ea90-4c9c-8abc-3025dc7db37d.html";

export const metadata: Metadata = {
  title: {
    absolute: "Visit WasteVantage at Stand D161 | Waste Expo Australia 2026",
  },
  description:
    "Book a 30-minute waste discovery meeting with Andrew at Waste Expo Australia, 28–29 October 2026, MCEC Melbourne. Stand D161. No hard sell.",
  robots: { index: true, follow: true },
};

const services = [
  "Skip bins",
  "Hook bins",
  "Front lift",
  "Rear lift",
  "Wheelie bins",
  "Garden bags",
  "Liquid waste",
  "Asset tracking",
];

export default function WasteExpoLandingPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-[#F3F5F7] text-slate-900`}>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/waste-expo/logo.png"
              alt="WasteVantage"
              width={180}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <span className="hidden h-6 w-px bg-slate-200 sm:block" />
            <p className="hidden text-sm font-medium text-slate-500 sm:block">
              Powered by iHub Solutions
            </p>
          </div>
          <a
            href="#book"
            className="rounded-lg bg-[#0088F0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0076d1]"
          >
            Book 30 minutes
          </a>
        </div>
      </header>

      <section className="bg-[#1A8CFF]">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8">
          <Image
            src="/waste-expo/hero.jpg"
            alt="Come talk waste with us. Waste Expo special offer: book a live demo and receive one month free. Visit WasteVantage at Stand D161."
            width={1920}
            height={1080}
            className="h-auto w-full rounded-t-2xl shadow-lg"
            priority
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0088F0]">
              iHub Solutions
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Come talk waste with us
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Waste Expo Australia · 28–29 October 2026 · MCEC Melbourne · Stand
              D161
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Why visit our stand</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Not a software demo. A 30-minute waste discovery meeting with
                our founder to find where your money is going without you
                noticing. Plus the MDT880 rugged tablet, on the table, in your
                hands.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                WasteVantage is purpose-built waste management software from
                iHub Logistics, designed and maintained in Australia. Bookings,
                scheduling, driver run sheets, bin and asset tracking, proof of
                service and invoicing run in one system, across skip bins, hook
                bins, front lift, rear lift, wheelie bins, garden bags and
                liquid waste. Xero, MYOB and Stripe connect natively. Optional
                MDT880 rugged tablets and truck mount kits put the whole job in
                the driver’s hand. Built for operators running one truck or
                250. We scheduled the drivers, ran the yard and drove the truck
                before we wrote a line of code.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-[#D6E9FA] bg-[#F4F8FC] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0088F0]">
                Waste Expo special offer
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Book a live demo with our team at the show and receive one
                month free when you get started with WasteVantage.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Brands we will feature</h2>
              <p className="mt-3 text-base text-slate-700">
                WasteVantage, TaskIT
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Categories</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:pt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <a
                href={EXHIBITOR_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700"
              >
                <Heart className="size-4" />
                Add to planner
              </a>
              <p className="mt-5 flex items-start gap-3 text-sm text-slate-700">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#0088F0]" />
                <span>
                  <strong>Stand(s):</strong> D161
                </span>
              </p>
              <p className="mt-3 flex items-start gap-3 text-sm text-slate-700">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-[#0088F0]" />
                <span>28–29 October 2026 · 9am–5pm</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Company contacts
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://ihublogistics.com/"
                    className="inline-flex items-center gap-2 text-[#0088F0] hover:underline"
                  >
                    <Globe className="size-4" />
                    ihublogistics.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:andrew@ihubsolutions.com.au"
                    className="inline-flex items-center gap-2 text-[#0088F0] hover:underline"
                  >
                    <Mail className="size-4" />
                    andrew@ihubsolutions.com.au
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+61429966184"
                    className="inline-flex items-center gap-2 text-[#0088F0] hover:underline"
                  >
                    <Phone className="size-4" />
                    +61 429 966 184
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Company address
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Unit 1/43 Baretta Road
                <br />
                Wangara
                <br />
                WA 6065
                <br />
                Australia
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="book" className="scroll-mt-8 bg-[#F3F5F7] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Book 30 minutes with Andrew
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Sit down with Andrew, our consultant, at Stand D161. He is there to
            listen — pain points, ideas you want feedback on, things that are
            not working — and to give some guidance for free. No hard sell.
          </p>
          <div className="mt-8">
            <BookingForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>WasteVantage · Stand D161 · 28–29 October 2026</p>
          <p>
            <a
              href="https://www.wasteexpoaustralia.com.au/"
              className="text-[#0088F0] hover:underline"
            >
              wasteexpoaustralia.com.au
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
