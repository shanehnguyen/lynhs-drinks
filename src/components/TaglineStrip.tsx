import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

const WORDS = ["Hand-Brewed", "Real Fruit", "Extra Boba", "Twenty Years In"];

export default function TaglineStrip() {
  return (
    <section className="relative overflow-hidden bg-accent py-12 pb-20 md:py-16 md:pb-24">
      <WaveDivider fill="#F5EFE3" position="top" />

      <div className="flex items-center justify-center gap-3">
        <Mascot
          pose="hip"
          cupColor="#F5EFE3"
          teaColor="#F2B441"
          className="hidden h-16 w-auto -rotate-6 sm:block"
        />
        <p className="flex flex-wrap items-center justify-center gap-3 text-center font-display text-lg uppercase tracking-widest text-cream md:text-xl">
          {WORDS.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {word}
              {i < WORDS.length - 1 && <span className="text-pop">✦</span>}
            </span>
          ))}
        </p>
        <Mascot
          pose="shrug"
          flip
          cupColor="#F5EFE3"
          teaColor="#F2B441"
          className="hidden h-16 w-auto rotate-6 sm:block"
        />
      </div>

      <WaveDivider fill="#2E1C12" position="bottom" />
    </section>
  );
}
