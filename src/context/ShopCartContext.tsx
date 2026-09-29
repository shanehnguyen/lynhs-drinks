"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  kind: "drink" | "topping";
  sweetness?: string;
  ice?: string;
};

type ShopCartContextValue = {
  items: CartItem[];
  hydrated: boolean;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

// Plain-text list of picks, used to prefill the booking form.
export function summarizePicks(items: CartItem[]) {
  return items
    .map((item, i) => {
      if (item.kind === "topping") {
        return `${i + 1}. ${item.name} (topping)`;
      }
      return `${i + 1}. ${item.name}, ${item.sweetness} sweet, ${item.ice}`;
    })
    .join("\n");
}

const ShopCartContext = createContext<ShopCartContextValue | null>(null);
const STORAGE_KEY = "lynhs-shop-cart";

export function ShopCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- deferred on purpose: keeps the first client render matching SSR (empty cart) before hydrating from localStorage
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(item: Omit<CartItem, "id">) {
    setItems((prev) => [...prev, { ...item, id: `${item.slug}-${prev.length}-${Date.now()}` }]);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  return (
    <ShopCartContext.Provider value={{ items, hydrated, addItem, removeItem, clear }}>
      {children}
    </ShopCartContext.Provider>
  );
}

export function useShopCart() {
  const ctx = useContext(ShopCartContext);
  if (!ctx) throw new Error("useShopCart must be used within ShopCartProvider");
  return ctx;
}
