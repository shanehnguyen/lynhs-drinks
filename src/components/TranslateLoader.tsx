"use client";

import { useEffect } from "react";
import { isVietnamese } from "@/lib/translate";

// Loads Google Translate only for visitors who picked Vietnamese, and loads it
// right away. English visitors never download it.
export default function TranslateLoader() {
  useEffect(() => {
    if (!isVietnamese()) return;

    const w = window as unknown as {
      googleTranslateElementInit?: () => void;
      google?: { translate: { TranslateElement: new (opts: object, id: string) => unknown } };
    };
    w.googleTranslateElementInit = () => {
      new w.google!.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "vi", autoDisplay: false },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
