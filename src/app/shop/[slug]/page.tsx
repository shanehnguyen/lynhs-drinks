import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import { DRINKS, getDrinkBySlug } from "@/data/shop";
import { SITE_URL } from "@/lib/site";

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

  const title = `${drink.name} — Build My Menu`;

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
  if (!getDrinkBySlug(slug)) notFound();
  return <ProductDetailClient slug={slug} />;
}
