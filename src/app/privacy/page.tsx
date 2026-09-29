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
        <section className="relative overflow-hidden bg-ink pt-[70px] pb-16 text-cream">
          <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
            <h1 className="text-[32px] leading-tight md:text-[48px]">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-cream/80">
              Last updated July 2026
            </p>
          </div>

          <WaveDivider fill="#F5EFE3" position="bottom" />
        </section>

        <section className="relative bg-cream">
          <div className="mx-auto max-w-[700px] px-6 py-[var(--section-pad)] text-ink/80 md:px-12">
            <div className="space-y-8 text-base leading-relaxed">
              <div>
                <h2 className="text-2xl text-ink">Information We Collect</h2>
                <p className="mt-3">
                  When you fill out the booking form, we collect your name,
                  email, and phone number. We also collect your event date,
                  guest count, and any event details you share. If you sign
                  up for email updates or a discount code, we collect your
                  email address.
                </p>
                <p className="mt-3">
                  When you build a menu on our Shop page, your drink and
                  topping picks are saved in your browser&apos;s local
                  storage. That way they are still there when you come back.
                  This information stays on your device. We only get it when
                  you send it through the booking form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">How We Use It</h2>
                <p className="mt-3">
                  We use your information to answer your request, give you a
                  quote, and plan your event. If you sign up for email
                  updates, we may sometimes send you seasonal flavors or open
                  booking dates. We never sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Third-Party Services</h2>
                <p className="mt-3">
                  Our booking and newsletter forms are run by{" "}
                  <a
                    href="https://web3forms.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-accent"
                  >
                    Web3Forms
                  </a>
                  . It sends your form to us by email. You can also choose
                  to read our site in Vietnamese with Google Translate. If
                  you use it, Google sets a cookie to remember your language.
                  That cookie follows{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-accent"
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
                  menu picks. If you use the translate button, a cookie
                  remembers your language. We don&apos;t use cookies for ads
                  or tracking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Your Rights</h2>
                <p className="mt-3">
                  You can ask us to see, correct, or delete any personal
                  information we have about you. Contact us below at any
                  time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Children&apos;s Privacy</h2>
                <p className="mt-3">
                  Our site is for adults planning events. It is not meant
                  for children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Changes to This Policy</h2>
                <p className="mt-3">
                  We may update this policy from time to time. We will post
                  any changes on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-ink">Contact Us</h2>
                <p className="mt-3">
                  Have questions about this policy or your information? Email
                  us at{" "}
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="font-bold underline hover:text-accent">
                    {BUSINESS_EMAIL}
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+14082064855" className="font-bold underline hover:text-accent">
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
