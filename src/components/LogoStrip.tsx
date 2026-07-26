import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

type MascotPose = "wave" | "cheer" | "point" | "peek" | "shrug" | "think" | "hip";

type MascotSpec = {
  pose: MascotPose;
  flip?: boolean;
  cupColor?: string;
  teaColor?: string;
};

type LogoStripProps = {
  heading: string;
  items: string[];
  bg: string;
  textColor?: string;
  dividerTo: string;
  marquee?: boolean;
  mascotLeft?: MascotSpec;
  mascotRight?: MascotSpec;
};

export default function LogoStrip({
  heading,
  items,
  bg,
  textColor = "#F5EFE3",
  dividerTo,
  marquee = false,
  mascotLeft,
  mascotRight,
}: LogoStripProps) {
  const badgeClass =
    "shrink-0 rounded-lg border-2 border-ink bg-pop px-5 py-2 text-sm font-bold tracking-wider text-ink shadow-[3px_3px_0_0_#2E1C12]";
  const separator = <span className="shrink-0 text-lg text-pop">✦</span>;

  return (
    <section className="relative" style={{ backgroundColor: bg }}>
      {mascotLeft && (
        <Mascot
          pose={mascotLeft.pose}
          flip={mascotLeft.flip}
          cupColor={mascotLeft.cupColor ?? "#F5EFE3"}
          teaColor={mascotLeft.teaColor ?? "#A8501A"}
          className="pointer-events-none absolute -top-10 left-0 z-30 hidden h-28 w-auto -rotate-12 sm:block md:-top-14 md:h-36"
        />
      )}
      {mascotRight && (
        <Mascot
          pose={mascotRight.pose}
          flip={mascotRight.flip}
          cupColor={mascotRight.cupColor ?? "#F5EFE3"}
          teaColor={mascotRight.teaColor ?? "#A8501A"}
          className="pointer-events-none absolute -top-10 right-0 z-30 hidden h-28 w-auto rotate-12 sm:block md:-top-14 md:h-36"
        />
      )}

      <div className="mx-auto max-w-[1400px] px-6 pt-8 pb-[58px] text-center md:px-12 md:pt-10 md:pb-[92px]">
        <p
          className="font-display text-lg uppercase tracking-wider"
          style={{ color: textColor }}
        >
          {heading}
        </p>

        {marquee ? (
          <div className="mt-6 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-4">
              {[...items, ...items].map((item, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span className={badgeClass}>{item}</span>
                  {separator}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {items.map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <span className={badgeClass}>{item}</span>
                {i < items.length - 1 && separator}
              </span>
            ))}
          </div>
        )}
      </div>

      <WaveDivider fill={dividerTo} position="bottom" />
    </section>
  );
}
