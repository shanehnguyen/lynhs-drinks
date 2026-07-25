import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";

export default function ClosingCTA() {
  return (
    <section className="relative bg-warmwhite">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-[var(--section-pad)] text-center md:px-12">
        <div className="flex w-full items-end justify-between">
          <Mascot pose="cheer" className="hidden h-32 w-auto sm:block md:h-44" cupColor="#F4E8D8" teaColor="#E2793A" />

          <div className="flex-1">
            <h2 className="text-[32px] leading-tight text-ink md:text-[52px]">
              Make Your Next Event Unforgettable.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-ink/70">
              Tell me your guest count, date, and dream flavors, and
              I&apos;ll get you a quote fast. I usually reply within a day,
              and I just need about a week&apos;s notice to make it happen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PushButton
                label="Talk to Lynh"
                href="/book"
                surface="#4A2E22"
                textColor="#FFFBF3"
                pop="#E2793A"
              />
              <PushButton
                label="Get an Instant Quote"
                href="/book"
                surface="#FFFBF3"
                textColor="#2B1B12"
                pop="#8C6FAE"
              />
            </div>
          </div>

          <Mascot pose="wave" className="hidden h-32 w-auto sm:block md:h-44" cupColor="#F4E8D8" teaColor="#8C6FAE" />
        </div>
      </div>
    </section>
  );
}
