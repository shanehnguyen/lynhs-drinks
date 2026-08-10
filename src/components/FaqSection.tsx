const FAQS = [
  {
    q: "How much does drink catering cost?",
    a: "Drinks start at $5 each, and your quote is based on guest count and the menu you build. Custom menus, fresh toppings, and sugar and ice adjustments are included — no surprise fees at the event. I usually respond to quote requests within 24 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in San Jose and cater across Santa Clara County and the South Bay — including Santa Clara, Milpitas, Sunnyvale, Campbell, and Morgan Hill. If your event is nearby but not on that list, ask anyway; we travel for the right event.",
  },
  {
    q: "What's included with the drink bar?",
    a: "Everything. We bring the full mobile setup, brew tea fresh on site with real leaves and real milk, cook the boba fresh, pour 16–20 oz drinks, and handle our own cleanup. One crew stays from setup to the last cup.",
  },
  {
    q: "How far in advance should I book?",
    a: "At least one week for most events. Festival weekends, wedding season, and holidays go first — if your date is fixed, reach out early and we'll lock it in.",
  },
  {
    q: "Can guests customize their drinks?",
    a: "Yes — every guest picks their sweetness level (0–100%), ice level, and toppings like boba, jelly, and cream foams. Caffeine-free options such as strawberry milk, guava juice, and iced tamarind are always available for kids.",
  },
  {
    q: "What kind of events do you cater?",
    a: "Twenty years of church festivals, weddings, school events, corporate parties, quinceañeras, birthdays, and community celebrations. We've poured 30,000+ drinks at events from backyard parties to festival crowds in the thousands.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[900px] px-6 py-[var(--section-pad)] md:px-12">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-ink/50">
          Good Questions
        </p>
        <h2 className="mt-3 text-center text-[32px] leading-tight text-ink md:text-[48px]">
          Everything Hosts Ask Before Booking.
        </h2>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border-[3px] border-ink bg-cream p-5 shadow-[4px_4px_0_0_#FF008C]"
            >
              <summary className="cursor-pointer list-none font-display text-base font-bold text-ink md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="mr-2 inline-block text-accent transition-transform group-open:rotate-90">
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
