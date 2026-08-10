import { SITE_URL, SITE_NAME, BUSINESS_PHONE_TEL, BUSINESS_EMAIL } from "./site";
import { LOCATIONS } from "@/data/locations";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS_DESCRIPTION =
  "Fresh-brewed milk tea, fruit tea, and Vietnamese coffee catered for church festivals, weddings, school events, and parties across Santa Clara County. Twenty years, 30,000+ drinks.";

/** Caterer is a schema.org subtype of FoodEstablishment — the most accurate type for a mobile drink bar. */
export const businessNode = {
  "@type": "Caterer",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/photos/lynh-booth.jpg`,
  description: BUSINESS_DESCRIPTION,
  telephone: BUSINESS_PHONE_TEL,
  email: BUSINESS_EMAIL,
  priceRange: "$$",
  servesCuisine: ["Vietnamese", "Milk Tea", "Boba", "Fruit Tea", "Vietnamese Coffee"],
  hasMenu: `${SITE_URL}/shop`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Jose",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.3382,
    longitude: -121.8863,
  },
  areaServed: LOCATIONS.map((l) => ({
    "@type": "City",
    name: `${l.city}, CA`,
  })),
  founder: {
    "@type": "Person",
    name: "Lynh Ngo",
  },
  foundingDate: "2005",
  knowsLanguage: ["en", "vi"],
  sameAs: [
    "https://www.facebook.com/lynh.ngo.16",
    "https://g.page/r/CUOOp2R3u86OEAI/review",
    "https://share.google/lnfhDLI4oemIjCP6g",
  ],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": BUSINESS_ID },
};

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
