import type { Metadata } from "next";
import ShopPageClient from "@/components/ShopPageClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Build My Menu",
  description:
    "Build your own milk tea and fruit tea menu for your event. Browse every drink and topping Lynh's Drinks serves, then send your picks for a free quote.",
  alternates: { canonical: `${SITE_URL}/shop` },
};

export default function ShopPage() {
  return <ShopPageClient />;
}
