import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import WaveDivider from "./ui/WaveDivider";

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

export default function FeatureSplit({
  id,
  bg,
  textColor = "#2B1B12",
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
  return (
    <section id={id} className="relative" style={{ backgroundColor: bg }}>
      {dividerTop && <WaveDivider fill={dividerTop} position="top" />}

      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div
          className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${
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
              <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rotate-[3deg] rounded-lg border-[3px] border-coffee bg-warmwhite px-5 py-3 shadow-[6px_6px_0_0_#2B1B12] sm:block">
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
            <h2 className="text-[30px] leading-tight md:text-[44px]" style={{ color: textColor }}>
              {heading}
            </h2>
            <p
              className="mt-4 text-lg font-medium"
              style={{ color: textColor, opacity: 0.8 }}
            >
              {body}
            </p>

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
                <PushButton
                  label={cta.label}
                  href={cta.href}
                  surface={textColor === "#FFFBF3" ? "#FFFBF3" : "#4A2E22"}
                  textColor={textColor === "#FFFBF3" ? "#2B1B12" : "#FFFBF3"}
                  pop="#FF6FA0"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {dividerBottom && <WaveDivider fill={dividerBottom} position="bottom" />}
    </section>
  );
}
