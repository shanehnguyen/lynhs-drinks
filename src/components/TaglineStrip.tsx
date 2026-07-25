import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

export default function TaglineStrip() {
  return (
    <section className="relative bg-warmwhite pb-24">
      <div className="flex items-center justify-center gap-3">
        <Mascot
          pose="hip"
          cupColor="#F4E8D8"
          teaColor="#FF6FA0"
          className="hidden h-16 w-auto -rotate-6 sm:block"
        />
        <p className="text-center font-display text-lg uppercase tracking-widest text-ink/60 md:text-xl">
          Handcrafted ✦ Never Powdered ✦ Made With Love
        </p>
        <Mascot
          pose="shrug"
          flip
          cupColor="#F4E8D8"
          teaColor="#E2793A"
          className="hidden h-16 w-auto rotate-6 sm:block"
        />
      </div>

      <WaveDivider fill="#4A2E22" position="bottom" />
    </section>
  );
}
