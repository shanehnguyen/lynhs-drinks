import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ShopCartProvider } from "@/context/ShopCartContext";
import MarketingPopup from "@/components/MarketingPopup";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { businessNode, websiteNode, BUSINESS_DESCRIPTION } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
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

const DESCRIPTION = BUSINESS_DESCRIPTION;
const HOME_TITLE = `Bay Area Boba & Milk Tea Catering | ${SITE_NAME}, San Jose`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
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
    title: HOME_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: ["/photos/lynh-booth.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DESCRIPTION,
    images: ["/photos/lynh-booth.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [businessNode, websiteNode],
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
        <JsonLd data={jsonLd} />
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
