import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/ui/WaveDivider";
import { SITE_URL, SITE_NAME, BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-coffee pt-[70px] pb-16 text-warmwhite">
          <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
            <p className="font-display text-sm uppercase tracking-widest text-warmwhite/60">
              Legal
            </p>
            <h1 className="mt-3 text-[32px] leading-tight md:text-[48px]">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-warmwhite/80">
              Last updated July 2026
            </p>
          </div>

          <WaveDivider fill="#FFFBF3" position="bottom" />
        </section>

        <section className="relative bg-warmwhite">
          <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-ink/80 md:px-12">
            <div className="space-y-8 text-base leading-relaxed">
              <div>
                <h2 className="text-2xl text-ink">Information We Collect</h2>
                <p className="mt-3">
                  When you fill out the booking form, we collect your name,
                  email, phone number, event date, guest count, and any
                  details you share about your event. If you sign up for
                  email updates or a discount code, we collect your email
                  address.
                </p>
                <p className="mt-3">
                  When you build a menu on our Shop page, your drink and
                  topping picks are stored in your browser&apos;s local
                  storage so they&apos;re there when you come back. That
                  information stays on your device and is only sent to us
                  when you submit it through the booking form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">How We Use It</h2>
                <p className="mt-3">
                  We use your information to respond to your inquiry, put
                  together a quote, and coordinate your event. If you sign up
                  for email updates, we may occasionally send you seasonal
                  flavors or booking openings. We never sell your personal
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Third-Party Services</h2>
                <p className="mt-3">
                  Our booking and newsletter forms are processed by{" "}
                  <a
                    href="https://web3forms.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-thai"
                  >
                    Web3Forms
                  </a>
                  , which delivers your submission to us by email. Our
                  optional Vietnamese translation is powered by Google
                  Translate; if you use it, Google sets a cookie to remember
                  your language preference, subject to{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-thai"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Cookies &amp; Local Storage</h2>
                <p className="mt-3">
                  We use your browser&apos;s local storage to remember your
                  menu picks, and a cookie to remember your language
                  preference if you use the translate button. We don&apos;t
                  use advertising or tracking cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Your Rights</h2>
                <p className="mt-3">
                  You can ask us to access, correct, or delete any personal
                  information we have about you at any time by contacting us
                  below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Children&apos;s Privacy</h2>
                <p className="mt-3">
                  Our site is intended for adults planning events and is not
                  directed at children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Changes to This Policy</h2>
                <p className="mt-3">
                  We may update this policy from time to time. Changes will
                  be posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Contact Us</h2>
                <p className="mt-3">
                  Questions about this policy or your information? Reach us
                  at{" "}
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="font-bold underline hover:text-thai">
                    {BUSINESS_EMAIL}
                  </a>{" "}
                  or{" "}
                  <a href="tel:+14082064855" className="font-bold underline hover:text-thai">
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
