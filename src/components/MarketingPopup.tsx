"use client";

import { useEffect, useState, FormEvent } from "react";
import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";
import { submitToWeb3Forms } from "@/lib/web3forms";

const DISMISS_KEY = "lynhs-promo-dismissed";
const SHOW_DELAY_MS = 8000;

export default function MarketingPopup() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      await submitToWeb3Forms({
        subject: "New booking discount signup — Lynh's Drinks",
        from_name: "Lynh's Drinks Website",
        email: form.get("email"),
      });
      setStatus("sent");
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
      <button
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 bg-coffee/50 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md rounded-2xl border-[3px] border-coffee bg-warmwhite p-6 shadow-[10px_10px_0_0_#2B1B12] sm:p-8">
        <button
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-coffee text-ink hover:bg-coffee hover:text-warmwhite"
        >
          ✕
        </button>

        <Mascot
          pose="cheer"
          cupColor="#F4E8D8"
          teaColor="#E2793A"
          className="mx-auto h-20 w-auto -rotate-3"
        />

        {status === "sent" ? (
          <div className="mt-4 text-center">
            <h2 className="text-2xl text-ink">You&apos;re in! 🎉</h2>
            <p className="mt-2 text-sm font-medium text-ink/70">
              Keep an eye on your inbox — I&apos;ll follow up with your promo
              code shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="mt-4 text-center text-2xl leading-tight text-ink md:text-[28px]">
              Get 10% Off Your First Event
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-center text-sm font-medium text-ink/70">
              Drop your email and I&apos;ll send you a discount code for your
              first catered event with Lynh&apos;s Drinks.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-full border-2 border-coffee/30 bg-warmwhite px-4 py-2.5 text-sm font-medium text-ink placeholder:text-ink/40 focus:border-coffee focus:outline-none"
              />
              <PushButton
                label={status === "sending" ? "Sending…" : "Send My Discount Code"}
                type="submit"
                disabled={status === "sending"}
                fullWidth
                surface="#4A2E22"
                textColor="#FFFBF3"
                pop="#E2793A"
              />
              {status === "error" && (
                <p className="text-center text-xs font-bold text-strawberry">
                  Something went wrong — please try again.
                </p>
              )}
            </form>

            <button
              onClick={dismiss}
              className="mx-auto mt-4 block text-xs font-bold uppercase tracking-wider text-ink/40 hover:text-ink/70"
            >
              No thanks, maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}
