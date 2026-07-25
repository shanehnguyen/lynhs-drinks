"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushButton from "@/components/ui/PushButton";
import WaveDivider from "@/components/ui/WaveDivider";
import ShopProductCard from "@/components/ShopProductCard";
import IconDoodle from "@/components/ui/IconDoodle";
import { getDrinkBySlug, getRelatedDrinks } from "@/data/shop";
import { useShopCart } from "@/context/ShopCartContext";

const SWEETNESS_LEVELS = ["100%", "75%", "50%", "25%", "0%"];
const ICE_LEVELS = ["Regular Ice", "Less Ice", "No Ice"];

const CATEGORY_COLOR: Record<string, string> = {
  "Milk Tea": "#4A2E22",
  "Fruit Tea": "#E2793A",
  Specialty: "#8C6FAE",
};

export default function ProductDetailClient({ slug }: { slug: string }) {
  const drink = getDrinkBySlug(slug);
  const { addItem } = useShopCart();

  const [sweetness, setSweetness] = useState("100%");
  const [ice, setIce] = useState("Regular Ice");
  const [justAdded, setJustAdded] = useState(false);

  if (!drink) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-[600px] px-6 py-32 text-center">
          <h1 className="text-3xl text-ink">Drink Not Found</h1>
          <p className="mt-4 text-ink/70">
            We couldn&apos;t find that drink on the menu.
          </p>
          <div className="mt-8 flex justify-center">
            <PushButton label="Back to Shop" href="/shop" surface="#4A2E22" textColor="#FFFBF3" pop="#E2793A" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const tone = CATEGORY_COLOR[drink.category] ?? "#4A2E22";
  const related = getRelatedDrinks(drink);

  function handleAdd() {
    if (!drink) return;
    addItem({ slug: drink.slug, name: drink.name, sweetness, ice, kind: "drink" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <>
      <Header />

      <main>
        <section className="relative bg-warmwhite pt-[40px] pb-[var(--section-pad)]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <nav className="text-xs font-bold uppercase tracking-wider text-ink/40">
              <Link href="/shop" className="hover:text-ink">
                Build My Menu
              </Link>{" "}
              / <span className="text-ink/70">{drink.name}</span>
            </nav>

            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div
                className="relative flex aspect-square items-center justify-center rounded-xl border-[3px] border-coffee"
                style={{ backgroundColor: `${tone}1a` }}
              >
                {drink.img ? (
                  <Image
                    src={drink.img}
                    alt={drink.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-10"
                    priority
                  />
                ) : (
                  <svg viewBox="0 0 48 48" className="h-32 w-32" fill="none" stroke={tone} strokeWidth="1.6">
                    <path d="M12 14h24l-2.5 24a4 4 0 0 1-4 3.6h-11a4 4 0 0 1-4-3.6L12 14Z" />
                    <path d="M16 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                    <path d="M15 22h18" />
                  </svg>
                )}
              </div>

              <div>
                <span
                  className="inline-block rounded-full border-2 border-coffee px-4 py-1 text-xs font-bold uppercase tracking-wider text-warmwhite"
                  style={{ backgroundColor: tone }}
                >
                  {drink.category}
                </span>

                <h1 className="mt-4 text-[34px] leading-tight text-ink md:text-[46px]">
                  {drink.name}
                </h1>

                <div className="mt-3 flex flex-wrap gap-2">
                  {drink.tastesLike.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-coffee/20 px-3 py-1 text-xs font-bold tracking-wider text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-lg font-medium text-ink/75">{drink.description}</p>

                <div className="mt-8 space-y-6">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-ink/70">
                      Sweetness Level
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {SWEETNESS_LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSweetness(level)}
                          className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold tracking-wider transition-colors ${
                            sweetness === level
                              ? "border-coffee bg-coffee text-warmwhite"
                              : "border-coffee/25 text-ink/60 hover:border-coffee/50"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-ink/70">
                      Ice Level
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ICE_LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => setIce(level)}
                          className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold tracking-wider transition-colors ${
                            ice === level
                              ? "border-coffee bg-coffee text-warmwhite"
                              : "border-coffee/25 text-ink/60 hover:border-coffee/50"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <PushButton
                    label={justAdded ? "Added to My Picks ✓" : "Add to My Picks"}
                    type="button"
                    onClick={handleAdd}
                    surface="#4A2E22"
                    textColor="#FFFBF3"
                    pop="#E2793A"
                  />
                  <p className="mt-3 text-xs font-medium text-ink/50">
                    No prices, no checkout. This just adds the drink to your
                    picks list so you can send it to me for a quote.
                  </p>
                  <p className="mt-2 text-xs font-medium text-ink/50">
                    Want boba, cream, or foam on top? Toppings are added
                    separately —{" "}
                    <Link href="/shop#toppings" className="font-bold text-ink underline hover:text-thai">
                      pick your toppings here
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6 border-t-2 border-coffee/10 pt-10 sm:grid-cols-4">
              <InfoStat label="Category" value={drink.category} icon="church" />
              <InfoStat label="Caffeine" value={drink.caffeine} icon="custom" />
              <InfoStat label="Serving Style" value={drink.servingStyle} icon="party" />
              <InfoStat label="Best For" value={drink.bestFor} icon="wedding" />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="relative bg-taro">
            <WaveDivider fill="#FFFBF3" position="top" />

            <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
              <h2 className="text-center text-[28px] text-warmwhite md:text-[40px]">
                You Might Also Like
              </h2>

              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {related.map((d) => (
                  <ShopProductCard key={d.slug} drink={d} />
                ))}
              </div>
            </div>

            <WaveDivider fill="#4A2E22" position="bottom" />
          </section>
        )}

        <section className="relative bg-coffee">
          <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] text-center md:px-12">
            <h2 className="text-[28px] text-warmwhite md:text-[40px]">
              Ready to Build Your Menu?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg font-medium text-warmwhite/80">
              Keep browsing, add your favorites to your picks, then send the
              full list to Lynh&apos;s for a custom quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PushButton label="Keep Shopping" href="/shop" surface="#FFFBF3" textColor="#2B1B12" pop="#8C6FAE" />
              <PushButton label="Book Your Event" href="/book" surface="#FFFBF3" textColor="#2B1B12" pop="#E2793A" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function InfoStat({ label, value, icon }: { label: string; value: string; icon: "church" | "custom" | "party" | "wedding" }) {
  return (
    <div className="flex flex-col items-center text-center">
      <IconDoodle name={icon} color="#8C6FAE" className="h-8 w-8" />
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/45">{label}</p>
      <p className="mt-1 text-sm font-bold tracking-wider text-ink">{value}</p>
    </div>
  );
}
