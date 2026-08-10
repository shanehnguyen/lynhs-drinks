import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import JsonLd from "@/components/JsonLd";
import { DRINKS, getDrinkBySlug } from "@/data/shop";
import { SITE_URL } from "@/lib/site";
import { BUSINESS_ID, breadcrumbList } from "@/lib/schema";

export function generateStaticParams() {
  return DRINKS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const drink = getDrinkBySlug(slug);
  if (!drink) return {};

  const title = `${drink.name} — Boba Catering Menu`;

  return {
    title,
    description: drink.description,
    alternates: { canonical: `${SITE_URL}/shop/${drink.slug}` },
    openGraph: {
      title,
      description: drink.description,
      url: `${SITE_URL}/shop/${drink.slug}`,
      images: drink.img ? [drink.img] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const drink = getDrinkBySlug(slug);
  if (!drink) notFound();

  const menuItemJsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: drink.name,
    description: drink.description,
    url: `${SITE_URL}/shop/${drink.slug}`,
    ...(drink.img ? { image: `${SITE_URL}${drink.img}` } : {}),
    offers: {
      "@type": "Offer",
      price: "5.00",
      priceCurrency: "USD",
      description: "Starting price per drink for catered events",
      offeredBy: { "@id": BUSINESS_ID },
    },
  };

  return (
    <>
      <JsonLd data={menuItemJsonLd} />
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Build My Menu", path: "/shop" },
          { name: drink.name, path: `/shop/${drink.slug}` },
        ])}
      />
      <ProductDetailClient slug={slug} />
    </>
  );
}
