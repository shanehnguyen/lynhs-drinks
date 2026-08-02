"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PushButton from "@/components/ui/PushButton";
import WaveDivider from "@/components/ui/WaveDivider";
import ShopProductCard from "@/components/ShopProductCard";
import { DRINKS, TOPPINGS, Category } from "@/data/shop";
import { useShopCart } from "@/context/ShopCartContext";

const CATEGORIES: (Category | "All")[] = ["All", "Milk Tea", "Fruit Tea", "Specialty"];

export default function ShopPageClient() {
  const [active, setActive] = useState<Category | "All">("All");
  const [addedTopping, setAddedTopping] = useState<string | null>(null);
  const { addItem } = useShopCart();

  const filtered = active === "All" ? DRINKS : DRINKS.filter((d) => d.category === active);

  function handleQuickAddTopping(slug: string, name: string) {
    addItem({ slug, name, kind: "topping" });
    setAddedTopping(slug);
    setTimeout(() => setAddedTopping((cur) => (cur === slug ? null : cur)), 1500);
  }

  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-ink pt-[70px] pb-[var(--section-pad)] text-cream">
          <div className="mx-auto max-w-[1400px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-cream/60">
              Build My Menu
            </p>
            <h1 className="mt-3 text-[36px] leading-tight md:text-[64px]">
              Build Your Menu, Drink by Drink.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-cream/80">
              Every milk tea, fruit tea, and specialty drink I serve. Tap the
              + to add a drink to your picks, or open one to customize
              sweetness and ice. Toppings are added separately below. No
              prices, just flavor.
            </p>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full border-2 px-5 py-2 text-sm font-bold tracking-wider transition-colors ${
                    active === cat
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/20 bg-transparent text-ink/60 border-ink/50 hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {filtered.map((drink) => (
                <ShopProductCard key={drink.slug} drink={drink} />
              ))}
            </div>
          </div>
        </section>

        <section id="toppings" className="relative bg-field">
          <WaveDivider fill="#F5EFE3" position="top" />

          <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
            <div className="mx-auto max-w-xl text-center">
              <p className="font-display text-sm uppercase tracking-widest text-cream/70">
                Make It Yours
              </p>
              <h2 className="mt-3 text-[30px] text-cream md:text-[44px]">
                Toppings
              </h2>
              <p className="mt-3 text-lg font-medium text-cream/85">
                Toppings aren&apos;t bundled with any drink — tap the + to add
                one straight to your picks, mix and match with whatever you
                like.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {TOPPINGS.map((t) => (
                <div
                  key={t.slug}
                  className="relative flex flex-col items-center rounded-xl border-[3px] border-ink bg-cream p-5 text-center shadow-[5px_5px_0_0_#F4CC7B]"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    {t.img ? (
                      <Image
                        src={t.img}
                        alt={t.name}
                        fill
                        sizes="96px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <span className="text-3xl">🧋</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-base text-ink">{t.name}</h3>
                  <p className="mt-1 text-xs font-medium text-ink/60">{t.description}</p>

                  <button
                    onClick={() => handleQuickAddTopping(t.slug, t.name)}
                    aria-label={`Quick add ${t.name} to my picks`}
                    className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink text-lg font-bold shadow-[3px_3px_0_0_#F4CC7B] transition-all duration-150 hover:scale-110 active:scale-95 ${
                      addedTopping === t.slug ? "bg-accent text-cream" : "bg-cream text-ink"
                    }`}
                  >
                    {addedTopping === t.slug ? "✓" : "+"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <WaveDivider fill="#2E1C12" position="bottom" />
        </section>

        <section className="relative bg-ink">
          <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] text-center md:px-12">
            <h2 className="text-[28px] text-cream md:text-[40px]">
              Found Your Favorites?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg font-medium text-cream/80">
              Add drinks to your picks as you browse, then send the full list
              straight to Lynh&apos;s for a custom event quote.
            </p>
            <div className="mt-8">
              <PushButton
                label="Book Your Event"
                href="/book"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
