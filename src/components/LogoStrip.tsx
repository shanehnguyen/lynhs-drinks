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
  textColor = "#FFFBF3",
  dividerTo,
  marquee = false,
  mascotLeft,
  mascotRight,
}: LogoStripProps) {
  const badgeClass = "shrink-0 rounded-lg border-2 px-5 py-2 text-sm font-bold tracking-wider";
  const badgeStyle = { borderColor: textColor, color: textColor, backgroundColor: "transparent" };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: bg }}>
      {mascotLeft && (
        <Mascot
          pose={mascotLeft.pose}
          flip={mascotLeft.flip}
          cupColor={mascotLeft.cupColor ?? "#FFFBF3"}
          teaColor={mascotLeft.teaColor ?? "#E2793A"}
          className="pointer-events-none absolute left-0 top-0 hidden h-28 w-auto -rotate-6 sm:block md:h-36"
        />
      )}
      {mascotRight && (
        <Mascot
          pose={mascotRight.pose}
          flip={mascotRight.flip}
          cupColor={mascotRight.cupColor ?? "#FFFBF3"}
          teaColor={mascotRight.teaColor ?? "#E2793A"}
          className="pointer-events-none absolute right-0 top-0 hidden h-28 w-auto rotate-6 sm:block md:h-36"
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
            <div className="marquee-track flex w-max items-center gap-3">
              {[...items, ...items].map((item, i) => (
                <span key={i} className={badgeClass} style={badgeStyle}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {items.map((item) => (
              <span key={item} className={badgeClass} style={badgeStyle}>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <WaveDivider fill={dividerTo} position="bottom" />
    </section>
  );
}
