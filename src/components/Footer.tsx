"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import PushButton from "./ui/PushButton";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Catering",
    links: [
      { label: "Build My Menu", href: "/shop" },
      { label: "Events We Cater", href: "/events" },
      { label: "Book an Event", href: "/book" },
      { label: "Toppings & Add-ons", href: "/shop#toppings" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Lynh's", href: "/#about" },
      { label: "Locations", href: "/locations" },
      { label: "Contact", href: "/book" },
    ],
  },
];

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/lynh.ngo.16" },
  { label: "Google Review", href: "https://g.page/r/CUOOp2R3u86OEAI/review" },
  { label: "Google Profile", href: "https://share.google/lnfhDLI4oemIjCP6g" },
];

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      await submitToWeb3Forms({
        subject: "New newsletter signup — Lynh's Drinks",
        from_name: "Lynh's Drinks Website",
        email: form.get("email"),
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-lg text-cream">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-cream/70 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.heading === "Company" && (
                  <li>
                    <a
                      href={`tel:${BUSINESS_PHONE_TEL}`}
                      className="text-sm font-bold text-cream/70 hover:text-cream"
                    >
                      {BUSINESS_PHONE_DISPLAY}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg text-cream">
              Let&apos;s Be Friends
            </h3>
            <ul className="mt-4 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream/40 text-xs font-bold text-cream/70 hover:border-cream hover:text-cream"
                  >
                    {s.label[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-first sm:order-none">
            <h3 className="font-display text-lg text-cream">
              Stay Sweet
            </h3>
            <p className="mt-4 text-sm font-medium text-cream/70">
              Seasonal flavors and open dates, about once a month.
            </p>
            {status === "sent" ? (
              <p className="mt-4 text-sm font-bold text-cream">
                You&apos;re on the list! 🎉
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-full border-2 border-cream/40 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
                />
                <PushButton
                  label={status === "sending" ? "Subscribing…" : "Subscribe"}
                  type="submit"
                  disabled={status === "sending"}
                  surface="#F2B441"
                  textColor="#2E1C12"
                  className="self-start text-sm"
                />
                {status === "error" && (
                  <p className="text-xs font-bold text-pop">
                    Something went wrong — please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <p
          className="mt-16 -mb-4 select-none whitespace-nowrap text-center font-display leading-none text-pop sm:-mb-6"
          style={{ fontSize: "clamp(28px, 9vw, 150px)" }}
        >
          lynh&apos;s drinks
        </p>

        <p className="mt-6 text-center text-xs font-medium text-cream/50">
          © {new Date().getFullYear()}{" "}Lynh&apos;s Drinks. San Jose &amp; Santa Clara County, CA.{" "}
          <Link href="/privacy" className="underline text-cream hover:text-pop">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
