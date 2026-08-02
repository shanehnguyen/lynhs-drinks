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
  roundedTop?: boolean;
  roundedBottom?: boolean;
  swirlColor?: string;
  extraHeading?: string;
  extraItems?: string[];
};

const SECTION_ACCENTS: Record<string, { headline: string; shadow: string }> = {
  "#F5EFE3": { headline: "#000000", shadow: "#FF008C" },
  "#FF008C": { headline: "#F5EFE3", shadow: "#F4CC7B" },
  "#F4CC7B": { headline: "#F5EFE3", shadow: "#2E1C12" },
  "#2E1C12": { headline: "#F5EFE3", shadow: "#F2B441" },
  "#FFDBFD": { headline: "#000000", shadow: "#000000" },
  "#A4F6F8": { headline: "#000000", shadow: "#000000" },
  "#FFFFFF": { headline: "#000000", shadow: "#FF008C" },
};

// The hero's bounded pale-ribbon swirl shape, reused as a single
// decorative accent behind a FeatureSplit section when swirlColor is set.
// Shifted down 150px from the hero's original so the peak doesn't sit
// right at the top edge, where a short section would clip it off.
const SWIRL_PATH =
  "M -80.0,560.0 C -11.7,575.0 215.0,705.0 330.0,650.0 C 445.0,595.0 526.7,300.8 610.0,230.0" +
  " C 693.3,159.2 764.2,163.3 830.0,225.0 C 895.8,286.7 928.3,560.8 1005.0,600.0" +
  " C 1081.7,639.2 1204.2,511.7 1290.0,460.0 C 1375.8,408.3 1520.0,256.7 1520.0,290.0" +
  " C 1520.0,323.3 1375.8,566.7 1290.0,660.0 C 1204.2,753.3 1100.0,853.3 1005.0,850.0" +
  " C 910.0,846.7 829.2,645.0 720.0,640.0 C 610.8,635.0 483.3,793.3 350.0,820.0" +
  " C 216.7,846.7 -8.3,803.3 -80.0,800.0 Z";

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
  roundedTop = false,
  roundedBottom = false,
  swirlColor,
  extraHeading,
  extraItems,
}: FeatureSplitProps) {
  const accents = SECTION_ACCENTS[bg.toUpperCase()] ?? SECTION_ACCENTS["#F5EFE3"];

  const isCream = bg.toUpperCase() === "#F5EFE3";

  const isCard = roundedTop || roundedBottom;

  const roundedClass = [roundedTop && "rounded-t-[64px]", roundedBottom && "rounded-b-[64px]"]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${roundedClass}`}
      style={{ backgroundColor: bg, margin: isCard ? "20px" : undefined }}
    >
      {isCream && (
        <SectionDoodles
          items={[
            { shape: "dot", color: "#F2B441", top: "8%", right: "6%", size: 12 },
            { shape: "star", color: "#F4CC7B", top: "88%", left: "5%", size: 16, rotate: -6 },
          ]}
        />
      )}

      {swirlColor && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <svg
            className="h-full w-full animate-float-slower"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMax slice"
          >
            <path fill={swirlColor} d={SWIRL_PATH} />
          </svg>
        </div>
      )}

      {dividerTop && <WaveDivider fill={dividerTop} position="top" />}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div
          className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative">
            <div className="animate-float-slow">
              <PhotoFrame
                label={photoLabel}
                rotate={reverse ? 2 : -2}
                src={photoSrc}
                alt={photoAlt}
                cutout={photoCutout}
                cutoutMaxHeight={photoCutoutMaxHeight}
              />
            </div>
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
                <PushButton label={cta.label} href={cta.href} surface="#F4CC7B" textColor="#000000" />
              </div>
            )}
          </div>
        </div>
      </div>

      {extraHeading && extraItems && (
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-[var(--section-pad)] text-center md:px-12">
          <p
            className="font-display text-xl uppercase tracking-wider md:text-2xl"
            style={{ color: textColor }}
          >
            {extraHeading}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {extraItems.map((item) => (
              <span
                key={item}
                className="shrink-0 rounded-lg border-2 border-ink bg-cream px-5 py-2 text-sm font-bold tracking-wider text-ink shadow-[3px_3px_0_0_#2E1C12]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {dividerBottom && <WaveDivider fill={dividerBottom} position="bottom" />}
    </section>
  );
}
