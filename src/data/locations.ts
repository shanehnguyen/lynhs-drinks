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
      "Lynh's Drinks started in San Jose. Most of our events are still here, from parish festivals to backyard parties.",
    localNote:
      "We have served at the St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth and Saint John Vianney festivals. We also serve school events and work parties from Almaden to Berryessa.",
    faqs: [
      {
        q: "Do you cater church festivals in San Jose?",
        a: "Yes. Lynh's Drinks started at parish festivals. We have served at St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth, Saint John Vianney and other San Jose churches. We can make thousands of drinks in one weekend.",
      },
      {
        q: "How much does boba catering cost in San Jose?",
        a: "Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. Each gallon comes with 1 free topping. Sugar and ice choices are included. Send your event details and you will usually hear back within 24 hours.",
      },
      {
        q: "What parts of San Jose do you serve?",
        a: "All of it. San Jose is our home base. We go to Almaden, Berryessa, Evergreen, Willow Glen, East Side, downtown and every part in between.",
      },
      {
        q: "How far in advance should I book a San Jose event?",
        a: "Book at least one week ahead for most events. Festival weekends and big holidays fill up first. If your date is set, like for a festival or wedding, reach out as early as you can.",
      },
    ],
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    distance: "Minutes from San Jose",
    intro:
      "We bring our milk tea and fruit tea bar to Santa Clara, from Santa Clara University to El Camino Real. It is the same fresh tea we have made in San Jose for 20+ years.",
    localNote:
      "We serve work parties near the tech offices, school fundraisers and weekend parties all over Santa Clara.",
    faqs: [
      {
        q: "Do you cater office and tech company events in Santa Clara?",
        a: "Yes. Work parties are one of our most common Santa Clara events. We bring the whole drink bar to your office and make the tea there. We keep the line moving so a drink break stays short.",
      },
      {
        q: "Is there a travel charge for Santa Clara events?",
        a: "Santa Clara is only minutes from our San Jose home base, so it is in our main service area. Your quote covers the full setup. Tell us the date, place and guest count.",
      },
      {
        q: "Can you serve events near Santa Clara University?",
        a: "Yes. We serve student club events, graduation parties and family parties near SCU. We also serve backyard parties and fundraisers across the city.",
      },
      {
        q: "What drinks work best for a Santa Clara school fundraiser?",
        a: "Schools usually pick fruit teas and drinks with no caffeine, like strawberry milk and guava juice. Adults like the milk teas. You can pick your menu on our Build My Menu page and send it to us.",
      },
    ],
  },
  {
    slug: "milpitas",
    city: "Milpitas",
    distance: "About 15 minutes from San Jose",
    intro:
      "Milpitas families and offices book us for the same reasons San Jose does. We use real tea, real milk and fresh boba.",
    localNote:
      "We serve community events near the Great Mall and work parties at Milpitas tech offices.",
    faqs: [
      {
        q: "Do you cater events in Milpitas?",
        a: "Yes. Milpitas is about 15 minutes from our San Jose kitchen, so it is in our regular service area. We serve community events, office parties, birthdays and school events across the city.",
      },
      {
        q: "Can you handle a large community event in Milpitas?",
        a: "Yes. We have poured 30,000+ drinks at big events over 20 years. For a bigger crowd, we bring more crew and make more tea.",
      },
      {
        q: "What does milk tea catering cost in Milpitas?",
        a: "Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. Each gallon comes with 1 free topping. Extra toppings vary in price. The price you are quoted is the price you pay.",
      },
      {
        q: "How much notice do you need for a Milpitas booking?",
        a: "One week is enough for most events. For a big event, like a festival or a company party, book earlier. That way we can hold your date before the weekend fills.",
      },
    ],
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    distance: "About 20 minutes from San Jose",
    intro:
      "We bring our milk tea and fruit tea bar to Sunnyvale weddings, office parties and school events. We use the same recipes we have made for 20+ years.",
    localNote:
      "We serve work events at Sunnyvale tech offices and family parties across the city.",
    faqs: [
      {
        q: "Do you cater weddings in Sunnyvale?",
        a: "Yes. Many couples pick a milk tea and fruit tea bar over a tub of soda. We match the menu to your wedding and serve 16 to 20 oz drinks. We stay from setup to the last cup.",
      },
      {
        q: "Can you set up a drink bar at a Sunnyvale office?",
        a: "Yes, we do this often at Sunnyvale tech offices. The bar fits inside or outside, and we make every drink there. Guests pick their sugar, ice and toppings. It works for a team of 30 or a whole campus.",
      },
      {
        q: "How does pricing work for Sunnyvale events?",
        a: "Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. Each gallon comes with 1 free topping. Choose your drinks and toppings on the Build My Menu page and send them to us. You will usually hear back within 24 hours.",
      },
      {
        q: "Do you serve hot drinks for cooler Sunnyvale evenings?",
        a: "Vietnamese coffee can be hot or iced. Most teas are served iced. For a night event, we will help you pick a menu that fits the weather and your guests.",
      },
    ],
  },
  {
    slug: "campbell",
    city: "Campbell",
    distance: "About 15 minutes from San Jose",
    intro:
      "We bring the full drink bar to backyard parties near downtown Campbell and to school and church events.",
    localNote:
      "We often serve birthday parties and community events near the Pruneyard and downtown Campbell.",
    faqs: [
      {
        q: "Do you cater birthday parties in Campbell?",
        a: "Yes, often. We serve many backyard birthdays near downtown Campbell and the Pruneyard. Guests pick their sugar, ice and toppings, so each cup is made the way they like it.",
      },
      {
        q: "What's the minimum for a Campbell event?",
        a: "We price by the gallon. Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. We serve small backyard parties and big community events. Tell us what you are planning.",
      },
      {
        q: "Can kids customize their drinks?",
        a: "Yes. We always have drinks with no caffeine, like strawberry milk, guava juice and iced tamarind. We can make any drink less sweet for kids.",
      },
      {
        q: "How soon should I book for a Campbell party?",
        a: "One week ahead works for most parties. Spring and summer weekends fill up fastest. If your party is on a Saturday, reach out a few weeks early.",
      },
    ],
  },
  {
    slug: "morgan-hill",
    city: "Morgan Hill",
    distance: "About 30 minutes from San Jose",
    intro:
      "We drive south to Morgan Hill for weddings, quinceañeras and community festivals. We bring the same milk tea and fruit tea bar we have run in San Jose for 20 years.",
    localNote:
      "We serve outdoor events, wineries and private venues across Morgan Hill and South County.",
    faqs: [
      {
        q: "Do you travel to Morgan Hill and South County?",
        a: "Yes. Morgan Hill is about 30 minutes from our San Jose base, and we serve there often. We go to wineries, outdoor venues and private ranches across South County.",
      },
      {
        q: "Can you cater a winery or outdoor wedding in Morgan Hill?",
        a: "Yes. Our drink bar has everything it needs, so the venue does not need a kitchen. We bring it all, make the drinks there and clean up after.",
      },
      {
        q: "Do you do quinceañeras and cultural celebrations?",
        a: "Yes. We often serve quinceañeras, tết parties, graduation parties and family reunions. We will help you pick a menu for your party, from fruit teas to Vietnamese drinks.",
      },
      {
        q: "How is pricing handled for Morgan Hill events?",
        a: "It works the same everywhere. Milk tea is $20 a gallon. Thai tea and fruit tea are $25 a gallon. Send your date, venue and guest count on the booking form. We will send your price back fast.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
