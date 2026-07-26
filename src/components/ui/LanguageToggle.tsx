"use client";

import { useEffect, useState } from "react";

function getGoogTransCookie() {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setGoogTransCookie(value: string) {
  const hostname = window.location.hostname;
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${hostname}`;
}

type LanguageToggleProps = {
  className?: string;
  colorClassName?: string;
};

export default function LanguageToggle({
  className = "",
  colorClassName = "border-ink text-ink hover:bg-ink hover:text-cream",
}: LanguageToggleProps) {
  const [isVietnamese, setIsVietnamese] = useState(false);

  useEffect(() => {
    setIsVietnamese(getGoogTransCookie() === "/en/vi");
  }, []);

  function toggle() {
    setGoogTransCookie(isVietnamese ? "/en/en" : "/en/vi");
    window.location.reload();
  }

  return (
    <button
      onClick={toggle}
      aria-label={isVietnamese ? "Switch to English" : "Chuyển sang tiếng Việt"}
      className={`notranslate flex h-9 items-center justify-center gap-1 rounded-full border-2 px-3 text-xs font-bold uppercase tracking-wider transition-colors ${colorClassName} ${className}`}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
      </svg>
      {isVietnamese ? "EN" : "VI"}
    </button>
  );
}
