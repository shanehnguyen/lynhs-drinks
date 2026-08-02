import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import HeroBackground from "./ui/HeroBackground";
import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

const FESTIVALS = [
  "St. Maria Goretti Parish Festival",
  "Our Lady of La Vang Parish Festival",
  "Saint Elizabeth Parish",
  "Saint John Vianney Annual Festival",
  "Vietnamese Martyrs Parish Festival",
  "Holy Spirit Parish Festival",
  "Queen of Peace Parish Festival",
];

const badgeClass =
  "shrink-0 rounded-lg border-2 border-ink bg-cream px-5 py-2 text-sm font-bold tracking-wider text-ink shadow-[3px_3px_0_0_#2E1C12]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6B93B] pt-6 pb-[var(--section-pad)]">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-ink/60">
            Milk tea, fruit tea, and Vietnamese coffee, brewed at your event
          </p>
          <h1 className="mt-3 text-[40px] leading-[1.05] text-ink sm:text-[56px] md:text-[72px] lg:text-[84px]">
            Handcrafted Drinks Worth Remembering.
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium text-ink/80 md:text-xl">
            Real milk tea, fruit tea, and Vietnamese coffee, brewed by hand
            on site from recipes I grew up with in Vietnam. Serving
            festivals, weddings, and parties across the Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PushButton
              label="Build My Menu"
              href="/shop"
              surface="#F4CC7B"
              textColor="#000000"
            />
            <PushButton
              label="Get My Free Quote"
              href="/book"
              surface="#F5EFE3"
              textColor="#2E1C12"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-3xl text-ink md:text-4xl">30,000+</p>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-ink/60">
                Drinks Poured
              </p>
            </div>
            <div className="h-10 w-px bg-ink/15" />
            <div>
              <div className="relative z-10 flex items-center gap-1 text-2xl text-black md:text-3xl">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="animate-wiggle" style={{ animationDelay: `${i * 0.15}s` }}>
                    {star}
                  </span>
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-ink/60">
                Guest Rated
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="animate-float-slow">
            <PhotoFrame
              label="Drink photo"
              rotate={-2}
              tone="#F4CC7B"
              src="/photos/lynh-booth.jpg"
              alt="Lynh serving drinks at her festival booth"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden animate-float-delay sm:block">
            <div className="rotate-[-4deg] rounded-lg border-[3px] border-ink bg-cream px-5 py-3 shadow-[6px_6px_0_0_#FFDBFD]">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="animate-wiggle" style={{ animationDelay: `${i * 0.15}s` }}>
                    {star}
                  </span>
                ))}
              </div>
              <p className="mt-1 max-w-[180px] text-xs font-bold text-ink">
                &ldquo;Perfectly balanced, super refreshing!&rdquo;
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink/50">
                — Nikki P.Y.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 pt-16 pb-14 md:mt-20 md:pt-20 md:pb-20">
        <div className="pointer-events-none absolute -top-10 left-6 z-40 hidden animate-float sm:block md:-top-14 md:left-12">
          <Mascot
            pose="shrug"
            cupColor="#F5EFE3"
            teaColor="#FF008C"
            className="h-28 w-auto -rotate-12 md:h-36"
          />
        </div>
        <div className="pointer-events-none absolute -top-10 right-6 z-40 hidden animate-float-slower sm:block md:-top-14 md:right-12">
          <Mascot
            pose="peek"
            cupColor="#F5EFE3"
            teaColor="#2E1C12"
            className="h-28 w-auto rotate-12 md:h-36"
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-12">
          <p className="font-display text-xl uppercase tracking-wider text-ink md:text-2xl">
            Twenty years of parish festivals, and they keep asking me back:
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-wider text-ink/70">
            20+ years serving Santa Clara County &amp; the wider Bay Area
          </p>

          <div className="mt-8 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-4">
              {[...FESTIVALS, ...FESTIVALS].map((item, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span className={badgeClass}>{item}</span>
                  <span className="shrink-0 text-lg text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#FFFFFF" position="bottom" />
    </section>
  );
}
