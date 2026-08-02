import PushButton from "./ui/PushButton";
import PhotoFrame from "./ui/PhotoFrame";
import Mascot from "./ui/Mascot";

export default function UpsellBlock() {
  return (
    <section className="relative overflow-hidden rounded-t-[64px] rounded-b-[64px] bg-field">
      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="animate-float-slow">
            <PhotoFrame
              label="Toppings & boba"
              rotate={-2}
              tone="#2E1C12"
              src="/photos/private-party.jpg"
              alt="A drink bar set up with toppings and mix-ins"
            />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-20 right-2 z-40 hidden animate-float sm:block">
              <Mascot
                pose="peek"
                cupColor="#F5EFE3"
                teaColor="#2E1C12"
                className="h-28 w-auto rotate-6"
              />
            </div>
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
                surface="#F4CC7B"
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
