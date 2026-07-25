import type { MetadataRoute } from "next";
import { DRINKS } from "@/data/shop";
import { LOCATIONS } from "@/data/locations";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/book", "/locations"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const legalRoutes = ["/privacy"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const drinkRoutes = DRINKS.map((d) => ({
    url: `${SITE_URL}/shop/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const locationRoutes = LOCATIONS.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...legalRoutes, ...drinkRoutes, ...locationRoutes];
}
