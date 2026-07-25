"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PushButton from "./ui/PushButton";
import ShopCartDrawer from "./ShopCartDrawer";
import Mascot from "./ui/Mascot";
import LanguageToggle from "./ui/LanguageToggle";

const NAV_LINKS = [
  { label: "Build My Menu", href: "/shop" },
  { label: "Events", href: "/#offerings" },
  { label: "About", href: "/#about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/book" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function updateBg() {
      const header = headerRef.current;
      if (!header) return;
      const x = window.innerWidth / 2;
      const y = header.getBoundingClientRect().bottom + 80;
      const el = document.elementFromPoint(x, y);
      const section = el?.closest("section");
      if (!section) return;

      const bg = getComputedStyle(section).backgroundColor;
      const parts = bg.match(/[\d.]+/g);
      if (!parts || parts.length < 3) return;
      const [r, g, b] = parts.map(Number);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

      setIsDark(luminance < 0.6);
      setNavBg(`rgba(${r}, ${g}, ${b}, 0.85)`);
    }

    updateBg();
    window.addEventListener("scroll", updateBg, { passive: true });
    window.addEventListener("resize", updateBg);
    return () => {
      window.removeEventListener("scroll", updateBg);
      window.removeEventListener("resize", updateBg);
    };
  }, []);

  const textColorClass = navBg ? (isDark ? "text-warmwhite" : "text-ink") : "text-ink";
  const hoverColorClass = isDark ? "hover:text-strawberry" : "hover:text-thai";

  return (
    <header
      ref={headerRef}
      style={navBg ? { backgroundColor: navBg } : undefined}
      className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${navBg ? "" : "bg-cream/90"}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 md:px-12">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`flex items-center gap-1.5 font-display text-xl transition-colors duration-300 sm:text-2xl ${textColorClass}`}
        >
          Lynh&apos;s Drinks
          <Mascot
            pose="wave"
            cupColor="#FFFBF3"
            teaColor="#E2793A"
            className="h-9 w-auto -rotate-3 sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle
            className="hidden sm:flex"
            colorClassName={
              isDark
                ? "border-warmwhite/50 text-warmwhite hover:bg-warmwhite hover:text-ink"
                : "border-coffee text-ink hover:bg-coffee hover:text-warmwhite"
            }
          />
          <ShopCartDrawer />
          <PushButton
            label="Get a Quote"
            href="/book"
            surface="#4A2E22"
            textColor="#FFFBF3"
            pop="#FF6FA0"
            border="#2B1B12"
            className="hidden text-sm sm:inline-block"
          />

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-coffee bg-warmwhite text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t-2 border-coffee/10 bg-cream px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-bold uppercase tracking-wider text-ink hover:bg-coffee/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex items-center gap-3">
            <PushButton
              label="Get a Quote"
              href="/book"
              onClick={() => setMenuOpen(false)}
              surface="#4A2E22"
              textColor="#FFFBF3"
              pop="#FF6FA0"
              border="#2B1B12"
              className="text-sm"
            />
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
