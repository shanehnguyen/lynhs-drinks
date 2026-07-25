"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Catering",
    links: [
      { label: "Build My Menu", href: "/shop" },
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
    <footer className="relative bg-coffee text-warmwhite">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-lg text-warmwhite">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-warmwhite/70 hover:text-warmwhite"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.heading === "Company" && (
                  <li>
                    <a
                      href={`tel:${BUSINESS_PHONE_TEL}`}
                      className="text-sm font-bold text-warmwhite/70 hover:text-warmwhite"
                    >
                      {BUSINESS_PHONE_DISPLAY}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg text-warmwhite">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-warmwhite/40 text-xs font-bold text-warmwhite/70 hover:border-warmwhite hover:text-warmwhite"
                  >
                    {s.label[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Mascot
              pose="wave"
              cupColor="#F4E8D8"
              teaColor="#FF6FA0"
              className="pointer-events-none absolute -top-24 right-0 hidden h-24 w-auto rotate-6 sm:block"
            />
            <h3 className="font-display text-lg text-warmwhite">
              Stay Sweet
            </h3>
            <p className="mt-4 text-sm font-medium text-warmwhite/70">
              Get seasonal flavors &amp; booking openings in your inbox.
            </p>
            {status === "sent" ? (
              <p className="mt-4 text-sm font-bold text-warmwhite">
                You&apos;re on the list! 🎉
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-full border-2 border-warmwhite/40 bg-transparent px-4 py-2 text-sm text-warmwhite placeholder:text-warmwhite/50 focus:border-warmwhite focus:outline-none"
                />
                <PushButton
                  label={status === "sending" ? "Subscribing…" : "Subscribe"}
                  type="submit"
                  disabled={status === "sending"}
                  surface="#FFFBF3"
                  textColor="#2B1B12"
                  pop="#E2793A"
                  className="self-start text-sm"
                />
                {status === "error" && (
                  <p className="text-xs font-bold text-strawberry">
                    Something went wrong — please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <p className="mt-16 select-none text-center font-display text-[13vw] leading-none text-warmwhite/10 sm:text-[10vw]">
          lynh&apos;s drinks
        </p>

        <p className="mt-6 text-center text-xs font-medium text-warmwhite/50">
          © {new Date().getFullYear()}{" "}Lynh&apos;s Drinks. San Jose &amp; Santa Clara County, CA.{" "}
          <Link href="/privacy" className="underline hover:text-warmwhite">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
