import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/ui/WaveDivider";
import { LOCATIONS } from "@/data/locations";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Lynh's Drinks caters milk tea, fruit tea, and Vietnamese coffee across San Jose, Santa Clara, Milpitas, Sunnyvale, Campbell, and Morgan Hill.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

export default function LocationsIndexPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-coffee pt-[70px] pb-[var(--section-pad)] text-warmwhite">
          <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-warmwhite/60">
              Areas We Serve
            </p>
            <h1 className="mt-3 text-[36px] leading-tight md:text-[60px]">
              Catering Across the South Bay.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-warmwhite/80">
              Based in San Jose, catering fresh-brewed milk tea and fruit tea
              bars throughout Santa Clara County.
            </p>
          </div>

          <WaveDivider fill="#FFFBF3" position="bottom" />
        </section>

        <section className="relative bg-warmwhite">
          <div className="mx-auto max-w-[1100px] px-6 py-[var(--section-pad)] md:px-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LOCATIONS.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="group flex flex-col rounded-xl border-[3px] border-coffee bg-warmwhite p-6 shadow-[6px_6px_0_0_#2B1B12] transition-transform duration-200 hover:-translate-y-1"
                >
                  <h2 className="text-2xl text-ink">{l.city}</h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/45">
                    {l.distance}
                  </p>
                  <p className="mt-3 text-sm font-medium text-ink/70">{l.intro}</p>
                  <span className="mt-4 text-sm font-bold text-thai group-hover:underline">View {l.city} catering →</span>
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
