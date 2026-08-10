import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/ui/WaveDivider";
import HeroBackground from "@/components/ui/HeroBackground";
import JsonLd from "@/components/JsonLd";
import { EVENT_TYPES } from "@/data/events";
import { SITE_URL } from "@/lib/site";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Events We Cater",
  description:
    "Church festivals, weddings, corporate events, school fundraisers, and private parties — Lynh's Drinks caters fresh-brewed milk tea and fruit tea bars across the South Bay.",
  alternates: { canonical: `${SITE_URL}/events` },
  openGraph: {
    title: "Events We Cater | Lynh's Drinks",
    description:
      "Church festivals, weddings, corporate events, school fundraisers, and private parties across the South Bay.",
    url: `${SITE_URL}/events`,
    images: ["/photos/lynh-booth.jpg"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Event types catered by Lynh's Drinks",
  itemListElement: EVENT_TYPES.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: e.name,
    url: `${SITE_URL}/events/${e.slug}`,
  })),
};

export default function EventsIndexPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Events We Cater", path: "/events" },
        ])}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden pt-[70px] pb-[var(--section-pad)]">
          <HeroBackground />
          <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-ink/60">
              Events We Cater
            </p>
            <h1 className="mt-3 text-[36px] leading-tight text-ink md:text-[60px]">
              Whatever You&apos;re Celebrating, We Pour for It.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-ink/80">
              Twenty years of church festivals, weddings, school events,
              corporate parties, and backyard celebrations across the South Bay.
            </p>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[1100px] px-6 py-[var(--section-pad)] md:px-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {EVENT_TYPES.map((e) => (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="group flex flex-col rounded-xl border-[3px] border-ink bg-cream p-6 shadow-[6px_6px_0_0_#FF008C] transition-transform duration-200 hover:-translate-y-1"
                >
                  <h2 className="text-2xl text-ink">{e.navLabel}</h2>
                  <p className="mt-3 text-sm font-medium text-ink/70">{e.intro}</p>
                  <span className="mt-4 text-sm font-bold text-accent group-hover:underline">
                    {e.navLabel} catering →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
