import PushButton from "./ui/PushButton";
import WaveDivider from "./ui/WaveDivider";

export default function FeaturedTestimonial() {
  return (
    <section className="relative bg-accent">
      <div className="mx-auto max-w-[1400px] px-6 pb-[var(--section-pad)] md:px-12">
        <div className="mx-auto max-w-[720px] rounded-2xl border-[3px] border-ink bg-cream p-8 text-center shadow-[8px_8px_0_0_#2E1C12] md:p-12">
          <div className="flex justify-center gap-1 text-accent">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          <h2 className="mt-4 text-[28px] leading-tight text-ink md:text-[38px]">
            &ldquo;Their Drinks Are Perfectly Balanced, Not Too Sweet.&rdquo;
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-ink/70">
            With fresh ingredients and chewy boba, Lynh&apos;s fruit teas are
            super refreshing. Definitely a go-to place when you&apos;re
            craving a quality milk tea. 🧋
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-ink/50">
            — Nikki Phuong Yang, Festival
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PushButton
              label="Customize Your Menu"
              href="/shop"
              surface="#A8501A"
              textColor="#F5EFE3"
            />
            <PushButton
              label="Contact Us"
              href="/book"
              surface="#F5EFE3"
              textColor="#2E1C12"
            />
          </div>
        </div>
      </div>

      <WaveDivider fill="#F5EFE3" position="bottom" />
    </section>
  );
}
