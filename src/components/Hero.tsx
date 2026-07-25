import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import WaveDivider from "./ui/WaveDivider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-[90px] pb-[var(--section-pad)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div>
          <h1 className="text-[40px] leading-[1.05] text-ink sm:text-[56px] md:text-[72px] lg:text-[84px]">
            Handcrafted Drinks Worth Remembering.
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium text-ink/80 md:text-xl">
            I brew real milk tea, fruit tea, and Vietnamese coffee fresh for
            church festivals, school events, private parties, and company
            celebrations. Same recipes I&apos;ve been making for 20+ years.
            Serving Santa Clara County + the Bay Area.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PushButton
              label="Build My Menu"
              href="/shop"
              surface="#4A2E22"
              textColor="#FFFBF3"
              pop="#E2793A"
            />
            <PushButton
              label="Get My Free Quote"
              href="/book"
              surface="#FFFBF3"
              textColor="#2B1B12"
              pop="#8C6FAE"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-3xl text-ink md:text-4xl">30,000+</p>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-ink/60">
                Drinks Served
              </p>
            </div>
            <div className="h-10 w-px bg-coffee/15" />
            <div>
              <div className="flex items-center gap-1 text-2xl text-thai md:text-3xl">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-ink/60">
                Rated By Guests
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <PhotoFrame
            label="Drink photo"
            rotate={-2}
            tone="#E2793A"
            src="/photos/lynh-booth.jpg"
            alt="Lynh serving drinks at her festival booth"
            priority
          />

          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-lg border-[3px] border-coffee bg-warmwhite px-5 py-3 shadow-[6px_6px_0_0_#2B1B12] sm:block">
            <div className="flex items-center gap-1 text-thai">
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

      <WaveDivider fill="#E2793A" position="bottom" />
    </section>
  );
}
