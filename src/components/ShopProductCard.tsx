"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ShopDrink } from "@/data/shop";
import { useShopCart } from "@/context/ShopCartContext";

const CATEGORY_COLOR: Record<string, string> = {
  "Milk Tea": "#A8501A",
  "Fruit Tea": "#F2B441",
  Specialty: "#6B5A9E",
};

const CATEGORY_TEXT: Record<string, string> = {
  "Milk Tea": "#F5EFE3",
  "Fruit Tea": "#2E1C12",
  Specialty: "#F5EFE3",
};

export default function ShopProductCard({ drink }: { drink: ShopDrink }) {
  const tone = CATEGORY_COLOR[drink.category] ?? "#A8501A";
  const toneText = CATEGORY_TEXT[drink.category] ?? "#F5EFE3";
  const { addItem } = useShopCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      slug: drink.slug,
      name: drink.name,
      sweetness: "100%",
      ice: "Regular Ice",
      kind: "drink",
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <Link
      href={`/shop/${drink.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border-[3px] border-ink bg-cream shadow-[6px_6px_0_0_#6B5A9E] transition-transform duration-200 hover:-translate-y-1"
    >
      <div
        className="relative flex aspect-square items-center justify-center overflow-hidden"
        style={{ backgroundColor: `${tone}1a` }}
      >
        {drink.img ? (
          <Image
            src={drink.img}
            alt={drink.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <svg viewBox="0 0 48 48" className="h-16 w-16" fill="none" stroke={tone} strokeWidth="1.8">
            <path d="M12 14h24l-2.5 24a4 4 0 0 1-4 3.6h-11a4 4 0 0 1-4-3.6L12 14Z" />
            <path d="M16 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
            <path d="M15 22h18" />
          </svg>
        )}

        <span
          className="absolute left-3 top-3 rounded-full border-2 border-ink px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: tone, color: toneText }}
        >
          {drink.category}
        </span>

        <button
          onClick={handleQuickAdd}
          aria-label={`Quick add ${drink.name} to my picks`}
          className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink text-lg font-bold shadow-[3px_3px_0_0_#6B5A9E] transition-all duration-150 hover:scale-110 active:scale-95 ${
            justAdded ? "bg-accent text-cream" : "bg-cream text-ink"
          }`}
        >
          {justAdded ? "✓" : "+"}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-body text-base font-bold leading-snug tracking-wider text-ink">{drink.name}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-ink/45">
          {drink.tastesLike.slice(0, 2).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
