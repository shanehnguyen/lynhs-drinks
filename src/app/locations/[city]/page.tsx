import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushButton from "@/components/ui/PushButton";
import WaveDivider from "@/components/ui/WaveDivider";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return {};

  const title = `Milk Tea & Fruit Tea Catering in ${location.city}, CA`;
  const description = `Handcrafted milk tea, fruit tea, and Vietnamese coffee catering in ${location.city}, CA. Fresh-brewed drink bars for weddings, festivals, and events. 20+ years serving the South Bay.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/locations/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const others = LOCATIONS.filter((l) => l.slug !== location.slug);

  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-ink pt-[70px] pb-[var(--section-pad)] text-cream">
          <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-cream/60">
              Catering in {location.city}, CA
            </p>
            <h1 className="mt-3 text-[32px] leading-tight md:text-[56px]">
              Milk Tea &amp; Fruit Tea Catering in {location.city}, CA
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-cream/80">
              {location.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PushButton
                label="Build My Menu"
                href="/shop"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
              <PushButton
                label="Get My Free Quote"
                href="/book"
                surface="#F2B441"
                textColor="#2E1C12"
              />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-cream/50">
              {location.distance}
            </p>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[900px] px-6 py-[var(--section-pad)] md:px-12">
            <h2 className="text-[28px] text-ink md:text-[40px]">Why {location.city} Books Lynh&apos;s Drinks.</h2>
            <p className="mt-4 text-lg font-medium text-ink/75">{location.localNote}</p>

            <ul className="mt-8 space-y-3">
              {[
                "Brewed fresh on-site, never from a powdered mix",
                "Real tapioca boba and fully customizable toppings",
                "20,000+ drinks served across 10+ large-scale events",
                "One team, from setup to last cup poured",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-cream">
                    ✓
                  </span>
                  <span className="font-medium text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <WaveDivider fill="#F4CC7B" position="bottom" />
        </section>

        <section className="relative bg-accent">
          <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-center md:px-12">
            <h2 className="text-[26px] leading-tight text-cream md:text-[36px]">
              &ldquo;Perfectly balanced, super refreshing!&rdquo;
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-cream/70">
              — Nikki P.Y.
            </p>
          </div>

          <WaveDivider fill="#2E1C12" position="bottom" />
        </section>

        <section className="relative bg-ink">
          <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-center md:px-12">
            <h2 className="text-[28px] text-cream md:text-[40px]">
              Ready to Book {location.city}?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg font-medium text-cream/80">
              Tell me your date and guest count, and I&apos;ll get you a quote
              fast.
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
                Also Serving
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {others.map((l) => (
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
