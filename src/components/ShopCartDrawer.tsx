"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useShopCart } from "@/context/ShopCartContext";
import PushButton from "./ui/PushButton";

function buildSummary(items: ReturnType<typeof useShopCart>["items"]) {
  return items
    .map((item, i) => {
      if (item.kind === "topping") {
        return `${i + 1}. ${item.name} (topping)`;
      }
      return `${i + 1}. ${item.name} — ${item.sweetness} sweet, ${item.ice}`;
    })
    .join("\n");
}

export default function ShopCartDrawer() {
  const { items, removeItem, clear } = useShopCart();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard client-only mount flag so the portal only renders after hydration
    setMounted(true);
  }, []);

  const bookHref =
    items.length > 0
      ? `/book?picks=${encodeURIComponent(buildSummary(items))}`
      : "/book";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink"
        aria-label="View my drink picks"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 8h12l-1.2 11.5a2 2 0 0 1-2 1.5H9.2a2 2 0 0 1-2-1.5L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
        {items.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-cream">
            {items.length}
          </span>
        )}
      </button>

      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[60]">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream p-6 shadow-[-6px_0_0_0_#FF008C]">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-ink">My Picks</h2>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink text-ink"
                aria-label="Close picks panel"
              >
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <p className="mt-8 text-sm font-medium text-ink/60">
                Nothing here yet. Browse the shop and add the drinks you want
                for your event.
              </p>
            ) : (
              <div className="mt-6 flex-1 space-y-4 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-lg border-[3px] border-ink bg-cream p-4 shadow-[4px_4px_0_0_#FF008C]"
                  >
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute right-3 top-3 text-xs font-bold text-ink/50 hover:text-ink"
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                    <h3 className="pr-6 text-lg text-ink">{item.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/50">
                      {item.kind === "topping" ? "Topping" : `${item.sweetness} sweet · ${item.ice}`}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {items.length > 0 && (
              <div className="mt-6 space-y-3">
                <PushButton
                  label="Book With These Picks"
                  href={bookHref}
                  onClick={() => setOpen(false)}
                  surface="#F4CC7B"
                  textColor="#000000"
                  fullWidth
                />
                <button
                  onClick={clear}
                  className="w-full text-center text-xs font-bold uppercase tracking-wider text-ink/40 hover:text-ink/70"
                >
                  Clear all picks
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
