const FAQS = [
  {
    q: "How much does drink catering cost?",
    a: "Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. Vietnamese coffee is $40 a gallon. Other specialty drinks vary in price. A gallon is 128 oz. Each gallon comes with 1 free topping. Extra toppings vary in price. Sugar and ice levels are included. Your quote is the full price. I usually reply to quote requests within 24 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in San Jose. We serve Santa Clara County and the South Bay, including Santa Clara, Milpitas, Sunnyvale, Campbell, and Morgan Hill. If your event is nearby, ask anyway. We travel for some events.",
  },
  {
    q: "What's included with the drink bar?",
    a: "Everything. We bring the whole mobile bar and brew tea fresh at your event, with real tea leaves and real milk. We cook the boba fresh and serve 16 to 20 oz drinks. We clean up after. One crew stays from setup to the last cup.",
  },
  {
    q: "How far in advance should I book?",
    a: "Book at least one week ahead for most events. Festival weekends, wedding season, and holidays fill up first. If your date is set, reach out early and we'll hold it for you.",
  },
  {
    q: "Can guests customize their drinks?",
    a: "Yes. Every guest picks their sweetness (0 to 100%), ice level, and toppings like boba, jelly, and cream foams. We always have drinks with no caffeine for kids, like strawberry milk, guava juice, and iced tamarind.",
  },
  {
    q: "What kind of events do you cater?",
    a: "Church festivals, weddings, school events, work parties, quinceañeras, birthdays, and community events. In twenty years, we've served 30,000+ drinks, from backyard parties to festival crowds in the thousands.",
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
              <summary className="cursor-pointer list-none font-display text-base font-bold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
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
