import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ShopCartProvider } from "@/context/ShopCartContext";
import MarketingPopup from "@/components/MarketingPopup";
import { SITE_URL, SITE_NAME, BUSINESS_PHONE_TEL } from "@/lib/site";
import { LOCATIONS } from "@/data/locations";
import "./globals.css";

const alfaSlabOne = localFont({
  src: "./fonts/AlfaSlabOne-Regular.ttf",
  variable: "--font-alfa",
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Handcrafted milk tea, fruit tea, and Vietnamese coffee catering for weddings, church festivals, school events, and corporate parties across San Jose & Santa Clara County.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Handcrafted Milk Tea & Fruit Tea Catering`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "milk tea catering",
    "boba catering San Jose",
    "fruit tea catering",
    "Vietnamese coffee catering",
    "drink bar catering Bay Area",
    "wedding milk tea bar",
    "church festival drink catering",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Handcrafted Milk Tea & Fruit Tea Catering`,
    description: DESCRIPTION,
    url: SITE_URL,
    images: ["/photos/lynh-booth.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Handcrafted Milk Tea & Fruit Tea Catering`,
    description: DESCRIPTION,
    images: ["/photos/lynh-booth.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/photos/lynh-booth.jpg`,
  description: DESCRIPTION,
  telephone: BUSINESS_PHONE_TEL,
  servesCuisine: ["Vietnamese", "Milk Tea", "Boba", "Fruit Tea"],
  priceRange: "$$",
  areaServed: LOCATIONS.map((l) => ({
    "@type": "City",
    name: `${l.city}, CA`,
  })),
  sameAs: [
    "https://www.facebook.com/lynh.ngo.16",
    "https://g.page/r/CUOOp2R3u86OEAI/review",
    "https://share.google/lnfhDLI4oemIjCP6g",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfaSlabOne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div id="google_translate_element" className="hidden" />
        <Script id="google-translate-init" strategy="lazyOnload">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'vi', autoDisplay: false }, 'google_translate_element');
          }`}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <ShopCartProvider>{children}</ShopCartProvider>
        <MarketingPopup />
      </body>
    </html>
  );
}
