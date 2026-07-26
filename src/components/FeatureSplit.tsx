import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import WaveDivider from "./ui/WaveDivider";
import SectionDoodles from "./ui/SectionDoodles";

type FeatureSplitProps = {
  id?: string;
  bg: string;
  textColor?: string;
  reverse?: boolean;
  eyebrow?: string;
  heading: string;
  body: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  photoLabel: string;
  photoSrc?: string;
  photoAlt?: string;
  photoCutout?: boolean;
  photoCutoutMaxHeight?: string;
  quote?: { text: string; author: string };
  dividerTop?: string;
  dividerBottom?: string;
};

const SECTION_ACCENTS: Record<string, { headline: string; shadow: string }> = {
  "#F5EFE3": { headline: "#6B5A9E", shadow: "#6B5A9E" },
  "#6B5A9E": { headline: "#F5EFE3", shadow: "#A8501A" },
  "#A8501A": { headline: "#F5EFE3", shadow: "#2E1C12" },
  "#2E1C12": { headline: "#F5EFE3", shadow: "#F2B441" },
};

export default function FeatureSplit({
  id,
  bg,
  textColor = "#2E1C12",
  reverse = false,
  eyebrow,
  heading,
  body,
  bullets,
  cta,
  photoLabel,
  photoSrc,
  photoAlt,
  photoCutout,
  photoCutoutMaxHeight,
  quote,
  dividerTop,
  dividerBottom,
}: FeatureSplitProps) {
  const accents = SECTION_ACCENTS[bg.toUpperCase()] ?? SECTION_ACCENTS["#F5EFE3"];

  const isCream = bg.toUpperCase() === "#F5EFE3";

  return (
    <section id={id} className="relative" style={{ backgroundColor: bg }}>
      {isCream && (
        <SectionDoodles
          items={[
            { shape: "dot", color: "#F2B441", top: "8%", right: "6%", size: 12 },
            { shape: "star", color: "#A8501A", top: "88%", left: "5%", size: 16, rotate: -6 },
          ]}
        />
      )}
      {dividerTop && <WaveDivider fill={dividerTop} position="top" />}

      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div
          className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative">
            <PhotoFrame
              label={photoLabel}
              rotate={reverse ? 2 : -2}
              src={photoSrc}
              alt={photoAlt}
              cutout={photoCutout}
              cutoutMaxHeight={photoCutoutMaxHeight}
            />
            {quote && (
              <div
                className="absolute -bottom-6 -right-4 hidden max-w-[220px] rotate-[3deg] rounded-lg border-[3px] border-ink bg-cream px-5 py-3 sm:block"
                style={{ boxShadow: `6px 6px 0 0 ${accents.shadow}` }}
              >
                <p className="text-xs font-bold text-ink">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink/60">
                  {quote.author}
                </p>
              </div>
            )}
          </div>

          <div>
            {eyebrow && (
              <p
                className="mb-3 text-sm font-bold uppercase tracking-wider"
                style={{ color: textColor, opacity: 0.6 }}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="text-[30px] leading-tight md:text-[44px]" style={{ color: accents.headline }}>
              {heading}
            </h2>
            {body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg font-medium ${i === 0 ? "mt-4" : "mt-3"}`}
                style={{ color: textColor, opacity: 0.8 }}
              >
                {paragraph}
              </p>
            ))}

            {bullets && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: textColor, color: bg }}
                    >
                      ✓
                    </span>
                    <span className="font-medium" style={{ color: textColor, opacity: 0.85 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <div className="mt-8">
                <PushButton label={cta.label} href={cta.href} surface="#A8501A" textColor="#F5EFE3" />
              </div>
            )}
          </div>
        </div>
      </div>

      {dividerBottom && <WaveDivider fill={dividerBottom} position="bottom" />}
    </section>
  );
}
