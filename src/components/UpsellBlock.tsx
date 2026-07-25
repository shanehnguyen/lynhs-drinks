import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

export default function UpsellBlock() {
  return (
    <section className="relative overflow-hidden bg-taro">
      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <PhotoFrame
            label="Toppings & boba"
            rotate={-2}
            tone="#4A2E22"
            src="/photos/private-party.jpg"
            alt="A drink bar set up with toppings and mix-ins"
          />

          <div className="relative">
            <Mascot
              pose="peek"
              cupColor="#FFFBF3"
              teaColor="#4A2E22"
              className="pointer-events-none absolute -top-20 right-2 hidden h-28 w-auto rotate-6 sm:block"
            />
            <h2 className="text-[30px] leading-tight text-warmwhite md:text-[44px]">
              Build Your Own Drink Bar
            </h2>
            <p className="mt-4 text-lg font-medium text-warmwhite/85">
              Boba, salted cream, egg cream, cheese foam, coconut cream, matcha
              foam, jelly. Mix and match so every guest gets a drink
              that&apos;s exactly theirs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PushButton
                label="See Topping Options"
                href="/shop#toppings"
                surface="#FFFBF3"
                textColor="#2B1B12"
                pop="#E2793A"
              />
              <PushButton
                label="Ask About Pricing"
                href="/book"
                surface="#4A2E22"
                textColor="#FFFBF3"
                pop="#FF6FA0"
              />
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#FFFBF3" position="bottom" />
    </section>
  );
}
