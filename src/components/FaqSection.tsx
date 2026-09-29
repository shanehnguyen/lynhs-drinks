const FAQS = [
  {
    q: "How much does drink catering cost?",
    a: "Drinks are priced by the gallon. You can see each price on the Build My Menu page. A gallon is 128 oz, which is 8 drinks (16 oz each). Each gallon comes with 1 free topping. Extra toppings vary in price.",
  },
  {
    q: "How far in advance should I book?",
    a: "Book at least one week ahead. A 10% deposit is due 1 week before your event. Festival weekends and wedding season fill up first. I usually reply within 24 hours.",
  },
  {
    q: "What's included with the drink bar?",
    a: "We bring the whole mobile bar and brew tea fresh at your event. We cook the boba fresh and clean up after. Guests pick their sugar, ice, and toppings. We always have drinks with no caffeine for kids.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in San Jose. We serve Santa Clara County and the South Bay, including Santa Clara, Milpitas, Sunnyvale, Campbell, and Morgan Hill. If your event is nearby, ask anyway.",
  },
  {
    q: "What kind of events do you cater?",
    a: "Church festivals, weddings, school events, work parties, quinceañeras, birthdays, and community events. In twenty years, we've served 30,000+ drinks.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[900px] px-6 py-[var(--section-pad)] md:px-12">
        <h2 className="text-center text-[32px] leading-tight text-ink md:text-[48px]">
          Questions Hosts Ask Before Booking
        </h2>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border-[3px] border-ink bg-cream p-5 shadow-[4px_4px_0_0_#FF008C]"
            >
              <summary className="cursor-pointer list-none font-body text-base font-bold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="mr-2 inline-block text-black transition-transform group-open:rotate-90">
                  ▸
                </span>
                {faq.q}
              </summary>
              <p className="mt-3 pl-6 text-sm font-medium leading-relaxed text-ink/75 md:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
