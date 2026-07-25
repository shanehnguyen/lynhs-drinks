export type ServiceLocation = {
  slug: string;
  city: string;
  distance: string;
  intro: string;
  localNote: string;
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
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    distance: "Minutes from San Jose",
    intro:
      "From events near Santa Clara University to backyard parties off El Camino Real, we bring the same fresh-brewed milk tea and fruit tea bar to Santa Clara that we've served in San Jose for 20+ years.",
    localNote:
      "Great for company parties near the tech campuses, school fundraisers, and weekend celebrations anywhere in Santa Clara.",
  },
  {
    slug: "milpitas",
    city: "Milpitas",
    distance: "About 15 minutes from San Jose",
    intro:
      "Milpitas families and offices book us for the same reason San Jose does: real ingredients, fresh boba, and a drink bar that guests remember.",
    localNote:
      "A favorite for community events near the Great Mall area and company celebrations at Milpitas' tech offices.",
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    distance: "About 20 minutes from San Jose",
    intro:
      "We cater milk tea and fruit tea bars for Sunnyvale weddings, office parties, and school events with the same fresh-brewed recipes we've used for 20+ years.",
    localNote:
      "Popular for corporate events along the Sunnyvale tech corridor and family celebrations citywide.",
  },
  {
    slug: "campbell",
    city: "Campbell",
    distance: "About 15 minutes from San Jose",
    intro:
      "From backyard parties near downtown Campbell to school and church events, we bring a full drink bar setup wherever you're celebrating.",
    localNote:
      "A go-to for birthday parties and community events near the Pruneyard and downtown Campbell.",
  },
  {
    slug: "morgan-hill",
    city: "Morgan Hill",
    distance: "About 30 minutes from San Jose",
    intro:
      "We travel south county for Morgan Hill weddings, quinceañeras, and community festivals, bringing the same fresh milk tea and fruit tea bar we've served in San Jose for two decades.",
    localNote:
      "Available for outdoor events, wineries, and private venues throughout Morgan Hill and South County.",
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
