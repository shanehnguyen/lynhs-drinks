import Link from "next/link";
import PushButton from "./ui/PushButton";
import Mascot from "./ui/Mascot";

const OFFERINGS: {
  title: string;
  desc: string;
  href: string;
  shadowColor: string;
}[] = [
  {
    title: "Church Festivals",
    desc: "This is where I started. I've spent twenty years learning how to serve big crowds fast.",
    href: "/events/church-festivals",
    shadowColor: "#325C13",
  },
  {
    title: "School Events",
    desc: "Drinks kids love, for carnivals, fundraisers, and end-of-year parties.",
    href: "/events/school-events",
    shadowColor: "#4CAD7D",
  },
  {
    title: "Weddings",
    desc: "A drink bar that matches your colors, your flavors, and your schedule.",
    href: "/events/weddings",
    shadowColor: "#680036",
  },
  {
    title: "Corporate Events",
    desc: "Drinks the whole office will like, served fast enough for a lunch break.",
    href: "/events/corporate-events",
    shadowColor: "#EA699E",
  },
  {
    title: "Private Parties",
    desc: "Birthdays, graduations, family reunions, and backyard parties.",
    href: "/events/private-parties",
    shadowColor: "#700408",
  },
  {
    title: "Custom Menus",
    desc: "Tell me what you like, and I'll build a menu to match.",
    href: "/shop",
    shadowColor: "#F7995C",
  },
];

export default function OfferingGrid() {
  return (
    <section id="offerings" className="relative bg-white">

      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <h2 className="mx-auto text-center text-[24px] text-ink sm:text-[36px] md:text-[52px]">
          A Custom Menu for Your Event
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex flex-col rounded-xl border-[3px] border-ink bg-cream transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
              style={{ boxShadow: `6px 6px 0 0 ${item.shadowColor}` }}
            >
              <div className="p-6">
                <h3 className="text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-ink/70">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="hidden animate-float-slower sm:block">
            <Mascot
              pose="point"
              cupColor="#F5EFE3"
              teaColor="#F2B441"
              className="h-28 w-auto -rotate-6"
            />
          </div>
          <PushButton
            label="Get a Custom Quote"
            href="/book"
            surface="#F5EFE3"
            textColor="#2E1C12"
          />
        </div>
      </div>
    </section>
  );
}
