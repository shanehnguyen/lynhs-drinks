import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";
import SectionDoodles from "./ui/SectionDoodles";

export default function ClosingCTA() {
  return (
    <section className="relative bg-cream">
      <SectionDoodles
        items={[
          { shape: "dot", color: "#F2B441", top: "15%", left: "8%", size: 14 },
          { shape: "star", color: "#A8501A", top: "75%", right: "10%", size: 18, rotate: 10 },
        ]}
      />
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-[var(--section-pad)] text-center md:px-12">
        <div className="flex w-full items-end justify-between">
          <Mascot pose="cheer" className="hidden h-32 w-auto sm:block md:h-44" cupColor="#F5EFE3" teaColor="#A8501A" />

          <div className="flex-1">
            <h2 className="text-[32px] leading-tight text-field md:text-[52px]">
              Let&apos;s Get Your Drink Table Handled
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-ink/70">
              Send me your guest count, your date, and the flavors
              you&apos;re dreaming about. I&apos;ll get a quote back to you
              fast, usually within a day, and I need about a week&apos;s
              notice to make it happen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PushButton
                label="Talk to Lynh"
                href="/book"
                surface="#A8501A"
                textColor="#F5EFE3"
              />
              <PushButton
                label="Get an Instant Quote"
                href="/book"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
            </div>
          </div>

          <Mascot pose="wave" className="hidden h-32 w-auto sm:block md:h-44" cupColor="#F5EFE3" teaColor="#6B5A9E" />
        </div>
      </div>
    </section>
  );
}
