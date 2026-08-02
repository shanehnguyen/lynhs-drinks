import TestimonialBackground from "./ui/TestimonialBackground";

const QUOTES = [
  { text: "Beautifully presented, with flavors that are unique and refreshing. They really do elevate the experience.", author: "Doan Tran" },
  { text: "Best jasmine milk tea ever! Super rich, with real milk and no processed powders.", author: "Annie Zhang" },
  { text: "Green Thai tea and Vietnamese salted coffee are my favorites. Highly recommend!", author: "Grace Nguyen, School Catering" },
  { text: "This is my sixth iced tamarind today. So yummy.", author: "Anonymous, Church Event" },
];

export default function TestimonialRow() {
  return (
    <section
      className="relative overflow-hidden rounded-t-[64px] rounded-b-[64px] bg-[#F6B93B]"
      style={{ margin: "20px" }}
    >
      <TestimonialBackground />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-[var(--section-pad)] text-center md:px-12">
        <h2 className="text-center text-[28px] text-black md:text-[36px]">
          What People Say After the Second Cup
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_0_#2E1C12]">
            <span className="animate-wiggle text-accent">★★★★★</span> Rated 5 Stars on Google
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_0_#2E1C12]">
            <span className="animate-wiggle text-accent" style={{ animationDelay: "0.6s" }}>★★★★★</span> Rated 5 Stars on Yelp
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-12 overflow-hidden pb-[var(--section-pad)]">
        <div className="marquee-track flex w-max items-stretch gap-6">
          {[...QUOTES, ...QUOTES].map((q, i) => (
            <div
              key={i}
              className="flex h-[300px] w-[320px] shrink-0 flex-col justify-between rounded-lg border-[3px] border-ink bg-cream p-6 shadow-[6px_6px_0_0_#2E1C12]"
            >
              <p className="text-lg font-bold leading-snug text-ink">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-ink/50">
                {q.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
