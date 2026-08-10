export type ServiceLocation = {
  slug: string;
  city: string;
  distance: string;
  intro: string;
  localNote: string;
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: ServiceLocation[] = [
  {
    slug: "san-jose",
    city: "San Jose",
    distance: "Home base",
    intro:
      "San Jose is where Lynh's Drinks started, and it's still where most of our events happen — from parish festivals to backyard parties across every corner of the city.",
    localNote:
      "We've served drinks at St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth, and Saint John Vianney parish festivals, plus school events and company parties from Almaden to Berryessa.",
    faqs: [
      {
        q: "Do you cater church festivals in San Jose?",
        a: "Yes — parish festivals are where Lynh's Drinks started. We've poured at St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth, Saint John Vianney, and other San Jose parishes, and we're set up to handle festival-scale crowds with thousands of drinks in a weekend.",
      },
      {
        q: "How much does boba catering cost in San Jose?",
        a: "Drinks start at $5 each, with the final quote based on your guest count and menu picks. Custom menus, fresh toppings, and sugar and ice adjustments are all included — send your event details and you'll get a quote back fast, usually within 24 hours.",
      },
      {
        q: "What parts of San Jose do you serve?",
        a: "All of them. San Jose is our home base, so there's no corner of the city we don't reach — Almaden, Berryessa, Evergreen, Willow Glen, East Side, downtown, and everywhere in between.",
      },
      {
        q: "How far in advance should I book a San Jose event?",
        a: "At least one week ahead for most events. Festival season weekends and big holidays fill up first, so if your date is fixed — especially for a parish festival or wedding — reach out as early as you can.",
      },
    ],
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    distance: "Minutes from San Jose",
    intro:
      "From events near Santa Clara University to backyard parties off El Camino Real, we bring the same fresh-brewed milk tea and fruit tea bar to Santa Clara that we've served in San Jose for 20+ years.",
    localNote:
      "Great for company parties near the tech campuses, school fundraisers, and weekend celebrations anywhere in Santa Clara.",
    faqs: [
      {
        q: "Do you cater office and tech company events in Santa Clara?",
        a: "Yes — company parties are one of our most common Santa Clara bookings. We bring the full drink bar to your office or venue, brew on site, and keep the line moving so a drink break doesn't eat the whole afternoon.",
      },
      {
        q: "Is there a travel charge for Santa Clara events?",
        a: "Santa Clara is only minutes from our San Jose home base, so it's part of our core service area. Your quote covers the full setup — just tell us the date, location, and guest count.",
      },
      {
        q: "Can you serve events near Santa Clara University?",
        a: "Absolutely. We cater student org events, graduation parties, and family celebrations around the SCU area, along with backyard parties and fundraisers across the rest of the city.",
      },
      {
        q: "What drinks work best for a Santa Clara school fundraiser?",
        a: "Fruit teas and caffeine-free options like strawberry milk and guava juice are the usual picks for school crowds, with classic milk teas for the adults. You can build the exact menu on our Build My Menu page and send it with your quote request.",
      },
    ],
  },
  {
    slug: "milpitas",
    city: "Milpitas",
    distance: "About 15 minutes from San Jose",
    intro:
      "Milpitas families and offices book us for the same reason San Jose does: real ingredients, fresh boba, and a drink bar that guests remember.",
    localNote:
      "A favorite for community events near the Great Mall area and company celebrations at Milpitas' tech offices.",
    faqs: [
      {
        q: "Do you cater events in Milpitas?",
        a: "Yes — Milpitas is about 15 minutes from our San Jose kitchen, well inside our regular service area. We cater community events, office parties, birthdays, and school functions across the city.",
      },
      {
        q: "Can you handle a large community event in Milpitas?",
        a: "That's our specialty. We've poured 30,000+ drinks across large-scale events over 20 years, so a big Milpitas community festival or company all-hands is comfortable territory — we scale the crew and brewing setup to your headcount.",
      },
      {
        q: "What does milk tea catering cost in Milpitas?",
        a: "Pricing starts at $5 per drink and scales with guest count and menu. Toppings like fresh boba, jellies, and cream foams are included in the menu you build — no surprise add-on fees at the event.",
      },
      {
        q: "How much notice do you need for a Milpitas booking?",
        a: "A week's notice is enough for most events. If you're planning something bigger — a community festival or a corporate celebration — earlier is better so we can lock in your date before the weekend fills.",
      },
    ],
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    distance: "About 20 minutes from San Jose",
    intro:
      "We cater milk tea and fruit tea bars for Sunnyvale weddings, office parties, and school events with the same fresh-brewed recipes we've used for 20+ years.",
    localNote:
      "Popular for corporate events along the Sunnyvale tech corridor and family celebrations citywide.",
    faqs: [
      {
        q: "Do you cater weddings in Sunnyvale?",
        a: "Yes — a milk tea and fruit tea bar is a favorite wedding station, especially for couples who want something more memorable than a soda tub. We match the menu to your theme, serve 16–20 oz drinks, and stay from setup to the last pour.",
      },
      {
        q: "Can you set up a drink bar at a Sunnyvale office?",
        a: "We do it regularly along the Sunnyvale tech corridor. The bar fits indoors or out, we brew everything on site, and guests customize sweetness, ice, and toppings — it works as well for a 30-person team as a whole-campus event.",
      },
      {
        q: "How does pricing work for Sunnyvale events?",
        a: "Drinks start at $5 each and your quote is built from guest count and the menu you pick. Use the Build My Menu page to choose drinks and toppings, send it over, and you'll usually hear back within 24 hours.",
      },
      {
        q: "Do you serve hot drinks for cooler Sunnyvale evenings?",
        a: "Vietnamese coffee can be served hot or iced, and most teas are poured iced. For an evening event we'll help you build a menu that fits the weather and the crowd.",
      },
    ],
  },
  {
    slug: "campbell",
    city: "Campbell",
    distance: "About 15 minutes from San Jose",
    intro:
      "From backyard parties near downtown Campbell to school and church events, we bring a full drink bar setup wherever you're celebrating.",
    localNote:
      "A go-to for birthday parties and community events near the Pruneyard and downtown Campbell.",
    faqs: [
      {
        q: "Do you cater birthday parties in Campbell?",
        a: "All the time — backyard birthdays near downtown Campbell and the Pruneyard are a staple for us. Guests pick their sweetness, ice level, and toppings, so every cup comes out exactly how they want it.",
      },
      {
        q: "What's the minimum for a Campbell event?",
        a: "There's no complicated minimum — drinks start at $5 each and we'll quote based on your guest count. Smaller backyard parties and big community events both work; just tell us what you're planning.",
      },
      {
        q: "Can kids customize their drinks?",
        a: "Yes, and they love it. Caffeine-free options like strawberry milk, guava juice, and iced tamarind are always available, and every drink can be made less sweet for younger guests.",
      },
      {
        q: "How soon should I book for a Campbell party?",
        a: "One week ahead covers most parties. Spring and summer weekends book up fastest, so if your party lands on a Saturday, it's worth reaching out a few weeks early.",
      },
    ],
  },
  {
    slug: "morgan-hill",
    city: "Morgan Hill",
    distance: "About 30 minutes from San Jose",
    intro:
      "We travel south county for Morgan Hill weddings, quinceañeras, and community festivals, bringing the same fresh milk tea and fruit tea bar we've served in San Jose for two decades.",
    localNote:
      "Available for outdoor events, wineries, and private venues throughout Morgan Hill and South County.",
    faqs: [
      {
        q: "Do you travel to Morgan Hill and South County?",
        a: "Yes — Morgan Hill is about 30 minutes from our San Jose base and we cater there regularly, including wineries, outdoor venues, and private ranches across South County.",
      },
      {
        q: "Can you cater a winery or outdoor wedding in Morgan Hill?",
        a: "That's a great fit for our setup. The drink bar runs self-contained, so outdoor venues without kitchen access aren't a problem — we bring everything, brew on site, and handle our own cleanup.",
      },
      {
        q: "Do you do quinceañeras and cultural celebrations?",
        a: "Yes — quinceañeras, tết celebrations, graduation parties, and family reunions are all regulars on our calendar. We'll help you build a menu that fits the celebration, from tropical fruit teas to traditional Vietnamese drinks.",
      },
      {
        q: "How is pricing handled for Morgan Hill events?",
        a: "Same as everywhere we serve: drinks start at $5 each, quoted by guest count and menu. Send your date, venue, and headcount through the booking form and you'll get numbers back quickly.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
