import type { Metadata } from "next";
import ShopPageClient from "@/components/ShopPageClient";
import JsonLd from "@/components/JsonLd";
import { DRINKS, TOPPINGS, type Category } from "@/data/shop";
import { SITE_URL } from "@/lib/site";
import { BUSINESS_ID, breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Build Your Boba Catering Menu",
  description:
    "Pick the milk teas, fruit teas and toppings for your event. Then send your picks to Lynh's Drinks for a free quote.",
  alternates: { canonical: `${SITE_URL}/shop` },
  openGraph: {
    title: "Build Your Boba Catering Menu",
    description:
      "See every milk tea, fruit tea and Vietnamese coffee Lynh's Drinks serves. Send your picks for a free quote.",
    url: `${SITE_URL}/shop`,
    images: ["/photos/lynh-booth.jpg"],
  },
};

const CATEGORIES: Category[] = ["Milk Tea", "Fruit Tea", "Specialty"];

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE_URL}/shop#menu`,
  name: "Lynh's Drinks Catering Menu",
  url: `${SITE_URL}/shop`,
  inLanguage: "en",
  provider: { "@id": BUSINESS_ID },
  hasMenuSection: [
    ...CATEGORIES.map((category) => ({
      "@type": "MenuSection",
      name: category,
      hasMenuItem: DRINKS.filter((d) => d.category === category).map((d) => ({
        "@type": "MenuItem",
        name: d.name,
        description: d.description,
        url: `${SITE_URL}/shop/${d.slug}`,
        ...(d.img ? { image: `${SITE_URL}${d.img}` } : {}),
      })),
    })),
    {
      "@type": "MenuSection",
      name: "Toppings",
      hasMenuItem: TOPPINGS.map((t) => ({
        "@type": "MenuItem",
        name: t.name,
        description: t.description,
        ...(t.img ? { image: `${SITE_URL}${t.img}` } : {}),
      })),
    },
  ],
};

export default function ShopPage() {
  return (
    <>
      <JsonLd data={menuJsonLd} />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Build My Menu", path: "/shop" },
        ])}
      />
      <ShopPageClient />
    </>
  );
}
