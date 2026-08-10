import Link from "next/link";
import PushButton from "./ui/PushButton";
import IconDoodle, { DoodleName } from "./ui/IconDoodle";
import Mascot from "./ui/Mascot";

const OFFERINGS: {
  icon: DoodleName;
  title: string;
  desc: string;
  href: string;
  panelColor: string;
  iconColor: string;
  shadowColor: string;
}[] = [
  {
    icon: "church",
    title: "Church Festivals",
    desc: "Where this started. Big batches, long lines, and twenty years of learning how to keep both moving.",
    href: "/events/church-festivals",
    panelColor: "#325C13",
    iconColor: "#F5EFE3",
    shadowColor: "#23400D",
  },
  {
    icon: "school",
    title: "School Events",
    desc: "Flavors kids ask for by name, for carnivals, fundraisers, and end-of-year parties.",
    href: "/events/school-events",
    panelColor: "#4CAD7D",
    iconColor: "#2E1C12",
    shadowColor: "#357958",
  },
  {
    icon: "wedding",
    title: "Weddings",
    desc: "A drink bar built around your colors, your flavors, and your timeline.",
    href: "/events/weddings",
    panelColor: "#680036",
    iconColor: "#F5EFE3",
    shadowColor: "#490026",
  },
  {
    icon: "corporate",
    title: "Corporate Events",
    desc: "A menu the whole office agrees on, served fast enough to fit a lunch break.",
    href: "/events/corporate-events",
    panelColor: "#EA699E",
    iconColor: "#2E1C12",
    shadowColor: "#A44A6F",
  },
  {
    icon: "party",
    title: "Private Parties",
    desc: "Birthdays, graduations, reunions, and the backyard get-together that grew to forty people.",
    href: "/events/private-parties",
    panelColor: "#700408",
    iconColor: "#F5EFE3",
    shadowColor: "#4E0306",
  },
  {
    icon: "custom",
    title: "Custom Menus",
    desc: "Tell me the mood you're going for and I'll build the menu to match.",
    href: "/shop",
    panelColor: "#F7995C",
    iconColor: "#2E1C12",
    shadowColor: "#AD6B40",
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
              className="flex flex-col overflow-hidden rounded-xl border-[3px] border-ink bg-cream transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
              style={{ boxShadow: `6px 6px 0 0 ${item.shadowColor}` }}
            >
              <div
                className="flex h-56 items-center justify-center border-b-[3px] border-ink sm:h-64"
                style={{ backgroundColor: item.panelColor }}
              >
                <IconDoodle
                  name={item.icon}
                  color={item.iconColor}
                  className="h-32 w-32 sm:h-40 sm:w-40"
                />
              </div>
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
