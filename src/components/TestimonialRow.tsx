const QUOTES = [
  { text: "Beautifully presented, with flavors that are unique and refreshing. They really do elevate the experience.", author: "Doan Tran" },
  { text: "Best jasmine milk tea ever! Super rich, with real milk and no processed powders.", author: "Annie Zhang" },
  { text: "Green Thai tea and Vietnamese salted coffee are my favorites. Highly recommend!", author: "Grace Nguyen, School Catering" },
  { text: "This is my sixth iced tamarind today. So yummy.", author: "Anonymous, Church Event" },
];

export default function TestimonialRow() {
  return (
    <section className="relative bg-accent">
      <div className="mx-auto max-w-[1400px] px-6 pt-[var(--section-pad)] pb-10 md:px-12">
        <h2 className="text-center text-[26px] text-cream md:text-[32px]">
          What People Say After the Second Cup
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((q) => (
            <div
              key={q.author}
              className="rounded-lg border-[3px] border-ink bg-cream p-5 shadow-[5px_5px_0_0_#2E1C12]"
            >
              <p className="text-sm font-bold text-ink">&ldquo;{q.text}&rdquo;</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink/50">
                {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
