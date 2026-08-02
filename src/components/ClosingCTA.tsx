import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";
import SectionDoodles from "./ui/SectionDoodles";
import WaveDivider from "./ui/WaveDivider";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <SectionDoodles
        items={[
          { shape: "dot", color: "#F2B441", top: "15%", left: "8%", size: 14 },
          { shape: "star", color: "#F4CC7B", top: "75%", right: "10%", size: 18, rotate: 10 },
        ]}
      />
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 py-[var(--section-pad)] text-center md:px-12">
        <div className="flex w-full items-end justify-between">
          <div className="hidden animate-float-slow sm:block">
            <Mascot pose="cheer" className="h-32 w-auto md:h-44" cupColor="#F5EFE3" teaColor="#F4CC7B" />
          </div>

          <div className="flex-1">
            <h2 className="text-[32px] leading-tight text-black md:text-[52px]">
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
                surface="#F4CC7B"
                textColor="#000000"
              />
              <PushButton
                label="Get an Instant Quote"
                href="/book"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
            </div>
          </div>

          <div className="hidden animate-float-fast sm:block">
            <Mascot pose="wave" className="h-32 w-auto md:h-44" cupColor="#F5EFE3" teaColor="#FF008C" />
          </div>
        </div>
      </div>

      <WaveDivider fill="#2E1C12" position="bottom" />
    </section>
  );
}
