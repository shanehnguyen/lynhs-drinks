import PushButton from "./ui/PushButton";
import IconDoodle, { DoodleName } from "./ui/IconDoodle";
import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

const OFFERINGS: { icon: DoodleName; title: string; desc: string }[] = [
  {
    icon: "church",
    title: "Church Festivals",
    desc: "Where this started. Big batches, long lines, and twenty years of learning how to keep both moving.",
  },
  {
    icon: "school",
    title: "School Events",
    desc: "Flavors kids ask for by name, for carnivals, fundraisers, and end-of-year parties.",
  },
  {
    icon: "wedding",
    title: "Weddings",
    desc: "A drink bar built around your colors, your flavors, and your timeline.",
  },
  {
    icon: "corporate",
    title: "Corporate Events",
    desc: "A menu the whole office agrees on, served fast enough to fit a lunch break.",
  },
  {
    icon: "party",
    title: "Private Parties",
    desc: "Birthdays, graduations, reunions, and the backyard get-together that grew to forty people.",
  },
  {
    icon: "custom",
    title: "Custom Menus",
    desc: "Tell me the mood you're going for and I'll build the menu to match.",
  },
];

export default function OfferingGrid() {
  return (
    <section id="offerings" className="relative bg-field">

      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <h2 className="mx-auto max-w-2xl text-center text-[32px] text-cream md:text-[52px]">
          Every Event Gets Its Own Menu
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg font-medium text-cream/85">
          Six hundred guests at a parish festival or twenty in a backyard,
          the drinks get made the same way.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border-[3px] border-ink bg-cream p-6 shadow-[6px_6px_0_0_#A8501A]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-pop">
                <IconDoodle name={item.icon} color="#2E1C12" className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <Mascot
            pose="point"
            cupColor="#F5EFE3"
            teaColor="#F2B441"
            className="hidden h-28 w-auto -rotate-6 sm:block"
          />
          <PushButton
            label="Get a Custom Quote"
            href="/book"
            surface="#F5EFE3"
            textColor="#2E1C12"
          />
        </div>
      </div>

      <WaveDivider fill="#F5EFE3" position="bottom" />
    </section>
  );
}
