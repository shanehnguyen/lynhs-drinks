import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import WaveDivider from "./ui/WaveDivider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-[70px] pb-[var(--section-pad)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-12">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-ink/60">
            Milk tea, fruit tea, and Vietnamese coffee, brewed at your event
          </p>
          <h1 className="mt-3 text-[40px] leading-[1.05] text-field sm:text-[56px] md:text-[72px] lg:text-[84px]">
            Handcrafted Drinks Worth Remembering.
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium text-ink/80 md:text-xl">
            I brew real milk tea, fruit tea, and Vietnamese coffee on site,
            by hand, from the recipes I grew up with in Vietnam. Church
            festivals, school carnivals, weddings, backyard parties, office
            celebrations. Serving Santa Clara County and the wider Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PushButton
              label="Build My Menu"
              href="/shop"
              surface="#A8501A"
              textColor="#F5EFE3"
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
              <div className="flex items-center gap-1 text-2xl text-accent md:text-3xl">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-ink/60">
                Guest Rated
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <PhotoFrame
            label="Drink photo"
            rotate={-2}
            tone="#A8501A"
            src="/photos/lynh-booth.jpg"
            alt="Lynh serving drinks at her festival booth"
            priority
          />

          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-lg border-[3px] border-ink bg-cream px-5 py-3 shadow-[6px_6px_0_0_#6B5A9E] sm:block">
            <div className="flex items-center gap-1 text-accent">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
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

      <WaveDivider fill="#A8501A" position="bottom" />
    </section>
  );
}
