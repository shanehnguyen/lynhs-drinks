import PushButton from "./ui/PushButton";
import IconDoodle, { DoodleName } from "./ui/IconDoodle";
import Mascot from "./ui/Mascot";
import WaveDivider from "./ui/WaveDivider";

const OFFERINGS: { icon: DoodleName; title: string; desc: string }[] = [
  {
    icon: "church",
    title: "Church Festivals",
    desc: "Where it all started. Big batches of drinks for hundreds of guests.",
  },
  {
    icon: "school",
    title: "School Events",
    desc: "Fun, kid-friendly flavors for celebrations and fundraisers.",
  },
  {
    icon: "wedding",
    title: "Weddings",
    desc: "A custom drink bar that matches your day, start to finish.",
  },
  {
    icon: "corporate",
    title: "Corporate Events",
    desc: "Fast service and crowd-pleasing menus for the whole office.",
  },
  {
    icon: "party",
    title: "Private Parties",
    desc: "Birthdays, reunions, and backyard get-togethers, handled.",
  },
  {
    icon: "custom",
    title: "Custom Menus",
    desc: "Tell me the vibe and I'll build a menu just for your event.",
  },
];

export default function OfferingGrid() {
  return (
    <section id="offerings" className="relative bg-taro">

      <div className="mx-auto max-w-[1400px] px-6 py-[var(--section-pad)] md:px-12">
        <h2 className="mx-auto max-w-2xl text-center text-[32px] text-warmwhite md:text-[52px]">
          Not Just Drinks. Fresh-Brewed Catering Built for Your Event.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border-[3px] border-coffee bg-warmwhite p-6 shadow-[6px_6px_0_0_#2B1B12]"
            >
              <IconDoodle name={item.icon} color="#8C6FAE" className="h-10 w-10" />
              <h3 className="mt-4 text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <Mascot
            pose="point"
            cupColor="#FFFBF3"
            teaColor="#E2793A"
            className="hidden h-28 w-auto -rotate-6 sm:block"
          />
          <PushButton
            label="Get a Custom Quote"
            href="/book"
            surface="#FFFBF3"
            textColor="#2B1B12"
            pop="#4A2E22"
          />
        </div>
      </div>

      <WaveDivider fill="#FFFBF3" position="bottom" />
    </section>
  );
}
