import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import WaveDivider from "@/components/ui/WaveDivider";
import { SITE_URL, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Event",
  description: "Request a quote for milk tea, fruit tea, and coffee catering at your next event.",
  alternates: { canonical: `${SITE_URL}/book` },
};

export default function BookPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-field pt-[70px] pb-16 text-cream md:pb-20">
          <div className="mx-auto max-w-[1400px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-cream/70">
              Let&apos;s Get Your Date Booked
            </p>
            <h1 className="mt-3 text-[36px] leading-tight md:text-[60px]">
              Tell Us About Your Event
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-cream/85">
              Fill out the form below and I&apos;ll follow up with pricing,
              flavor recommendations, and availability for your date.
            </p>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[900px] px-6 py-10 md:px-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Starting Price", value: "$5 / drink" },
                { label: "Advance Notice", value: "1 Week" },
                { label: "Cup Size", value: "16–20 oz" },
                { label: "Years Serving", value: "20+" },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-lg border-[3px] border-ink bg-cream p-4 text-center shadow-[4px_4px_0_0_#FF008C]"
                >
                  <p className="text-lg font-bold tracking-wider text-ink md:text-xl">{detail.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    {detail.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs font-medium text-ink/50">
              Custom menus, fresh toppings, and sugar/ice levels included. I
              usually respond within 24 hours.
            </p>
            <p className="mt-2 text-center text-xs font-medium text-ink/50">
              Prefer to call or text?{" "}
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="font-bold text-ink underline hover:text-accent">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </p>

            <div className="mt-8">
              <Suspense fallback={null}>
                <BookingForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
