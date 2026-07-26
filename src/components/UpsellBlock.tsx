import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

export default function UpsellBlock() {
  return (
    <section className="relative overflow-hidden bg-field">
      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <PhotoFrame
            label="Toppings & boba"
            rotate={-2}
            tone="#2E1C12"
            src="/photos/private-party.jpg"
            alt="A drink bar set up with toppings and mix-ins"
          />

          <div className="relative">
            <Mascot
              pose="peek"
              cupColor="#F5EFE3"
              teaColor="#2E1C12"
              className="pointer-events-none absolute -top-20 right-2 hidden h-28 w-auto rotate-6 sm:block"
            />
            <h2 className="text-[30px] leading-tight text-cream md:text-[44px]">
              Build Your Own Drink Bar
            </h2>
            <p className="mt-4 text-lg font-medium text-cream/85">
              Boba, salted cream, egg cream, cheese foam, coconut cream, matcha
              foam, jelly. Guests mix and match right at the table, so
              everybody walks away with the drink they were picturing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PushButton
                label="See Topping Options"
                href="/shop#toppings"
                surface="#F5EFE3"
                textColor="#2E1C12"
              />
              <PushButton
                label="Ask About Pricing"
                href="/book"
                surface="#A8501A"
                textColor="#F5EFE3"
              />
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#F5EFE3" position="bottom" />
    </section>
  );
}
