import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushButton from "@/components/ui/PushButton";
import WaveDivider from "@/components/ui/WaveDivider";
import HeroBackground from "@/components/ui/HeroBackground";
import JsonLd from "@/components/JsonLd";
import { EVENT_TYPES, getEventBySlug } from "@/data/events";
import { getDrinkBySlug } from "@/data/shop";
import { LOCATIONS } from "@/data/locations";
import { SITE_URL } from "@/lib/site";
import { BUSINESS_ID, breadcrumbList } from "@/lib/schema";

export function generateStaticParams() {
  return EVENT_TYPES.map((e) => ({ type: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const event = getEventBySlug(type);
  if (!event) return {};

  return {
    title: event.metaTitle,
    description: event.metaDescription,
    alternates: { canonical: `${SITE_URL}/events/${event.slug}` },
    openGraph: {
      title: event.metaTitle,
      description: event.metaDescription,
      url: `${SITE_URL}/events/${event.slug}`,
      images: ["/photos/lynh-booth.jpg"],
    },
  };
}

export default async function EventTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const event = getEventBySlug(type);
  if (!event) notFound();

  const drinks = event.drinkSlugs
    .map((slug) => getDrinkBySlug(slug))
    .filter((d) => d !== undefined);
  const otherEvents = EVENT_TYPES.filter((e) => e.slug !== event.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/events/${event.slug}#service`,
    name: event.name,
    serviceType: "Beverage catering",
    url: `${SITE_URL}/events/${event.slug}`,
    description: event.metaDescription,
    provider: { "@id": BUSINESS_ID },
    areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, CA` })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Events We Cater", path: "/events" },
          { name: event.navLabel, path: `/events/${event.slug}` },
        ])}
      />
      <Header />

      <main>
        <section className="relative overflow-hidden pt-[70px] pb-[var(--section-pad)]">
          <HeroBackground />
          <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-ink/60">
              {event.heroEyebrow}
            </p>
            <h1 className="mt-3 text-[32px] leading-tight text-ink md:text-[56px]">
              {event.heroTitle}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-ink/80">
              {event.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PushButton
                label="Build My Menu"
                href="/shop"
                surface="#F4CC7B"
                textColor="#000000"
              />
              <PushButton
                label="Get My Free Quote"
                href="/book"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
            </div>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[900px] px-6 py-[var(--section-pad)] md:px-12">
            {event.body.map((block) => (
              <div key={block.heading} className="mt-10 first:mt-0">
                <h2 className="text-[28px] text-ink md:text-[40px]">{block.heading}</h2>
                <p className="mt-4 text-lg font-medium text-ink/75">{block.text}</p>
              </div>
            ))}

            <ul className="mt-10 space-y-3">
              {event.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-cream">
                    ✓
                  </span>
                  <span className="font-medium text-ink/85">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <h2 className="text-[24px] text-ink md:text-[32px]">
                Menu Picks for {event.navLabel}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {drinks.map((drink) => (
                  <Link
                    key={drink.slug}
                    href={`/shop/${drink.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border-[3px] border-ink bg-cream shadow-[4px_4px_0_0_#FF008C] transition-transform duration-200 hover:-translate-y-1"
                  >
                    {drink.img && (
                      <div className="relative aspect-square w-full border-b-[3px] border-ink bg-white">
                        <Image
                          src={drink.img}
                          alt={`${drink.name} — catered by Lynh's Drinks`}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-contain p-2"
                        />
                      </div>
                    )}
                    <p className="p-3 text-center font-display text-sm font-bold text-ink group-hover:text-accent">
                      {drink.name}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium text-ink/60">
                Every menu is custom —{" "}
                <Link href="/shop" className="font-bold text-accent underline">
                  browse all drinks and toppings
                </Link>{" "}
                and build your own.
              </p>
            </div>

            <div className="mt-14">
              <h2 className="text-[24px] text-ink md:text-[32px]">
                {event.navLabel} Questions, Answered
              </h2>
              <div className="mt-6 space-y-4">
                {event.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-lg border-[3px] border-ink bg-cream p-5 shadow-[4px_4px_0_0_#FF008C]"
                  >
                    <summary className="cursor-pointer list-none font-display text-base font-bold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
                      <span className="mr-2 inline-block text-accent transition-transform group-open:rotate-90">
                        ▸
                      </span>
                      {faq.q}
                    </summary>
                    <p className="mt-3 pl-6 text-sm font-medium leading-relaxed text-ink/75 md:text-base">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <WaveDivider fill={event.quote ? "#F4CC7B" : "#2E1C12"} position="bottom" />
        </section>

        {event.quote && (
          <section className="relative bg-accent">
            <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-center md:px-12">
              <h2 className="text-[26px] leading-tight text-cream md:text-[36px]">
                &ldquo;{event.quote.text}&rdquo;
              </h2>
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-cream/70">
                — {event.quote.author}
              </p>
            </div>
            <WaveDivider fill="#2E1C12" position="bottom" />
          </section>
        )}

        <section className="relative bg-ink">
          <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-center md:px-12">
            <h2 className="text-[28px] text-cream md:text-[40px]">
              Let&apos;s Get Your Date on the Calendar.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg font-medium text-cream/80">
              Tell me your date and guest count, and I&apos;ll get you a quote
              fast — usually within 24 hours.
            </p>
            <div className="mt-8">
              <PushButton
                label="Get My Free Quote"
                href="/book"
                surface="#F4CC7B"
                textColor="#000000"
              />
            </div>

            <div className="mx-auto mt-14 max-w-2xl border-t-2 border-cream/10 pt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-cream/50">
                We Also Cater
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {otherEvents.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/events/${e.slug}`}
                    className="rounded-full border-2 border-cream/30 px-4 py-1.5 text-sm font-bold text-cream/80 hover:border-cream hover:text-cream"
                  >
                    {e.navLabel}
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-wider text-cream/50">
                Serving
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {LOCATIONS.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="rounded-full border-2 border-cream/30 px-4 py-1.5 text-sm font-bold text-cream/80 hover:border-cream hover:text-cream"
                  >
                    {l.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
