export type EventType = {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  intro: string;
  body: { heading: string; text: string }[];
  bullets: string[];
  drinkSlugs: string[];
  quote?: { text: string; author: string };
  faqs: { q: string; a: string }[];
};

export const EVENT_TYPES: EventType[] = [
  {
    slug: "church-festivals",
    name: "Church Festival Drink Catering",
    navLabel: "Church Festivals",
    metaTitle: "Church Festival Drink Catering | San Jose & Bay Area",
    metaDescription:
      "Milk tea, fruit tea, and Vietnamese drinks for church festivals in San Jose and Santa Clara County. 20+ years and 30,000+ drinks served.",
    heroEyebrow: "Where We Started",
    heroTitle: "Drink Catering for Church Festivals.",
    intro:
      "Lynh's Drinks started at a church festival. We have served at St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth, Saint John Vianney, Vietnamese Martyrs, Holy Spirit, and Queen of Peace. The churches keep asking us back.",
    body: [
      {
        heading: "Big Crowds, Short Waits",
        text: "Festival lines form fast and stay long all weekend. We have served them for twenty years. We make big batches with real tea leaves and real milk, and we cook boba fresh all day. We keep the line moving so no one gives up and leaves.",
      },
      {
        heading: "Vietnamese Drinks and Milk Teas",
        text: "We serve Thai milk tea, iced tamarind, che thai, salted kumquat juice, and pandan mung bean milk. We also serve milk teas and fruit teas. We plan the menu with your festival team. Any drink can be less sweet or caffeine-free for kids and elders.",
      },
    ],
    bullets: [
      "Served at 10+ large festivals, with thousands of drinks each weekend",
      "Our drink bus brings everything, so no kitchen is needed",
      "Vietnamese drinks plus milk teas and fruit teas",
      "One crew from Friday setup to Sunday cleanup",
    ],
    drinkSlugs: ["thai-milk-tea", "iced-tamarind", "che-thai", "salted-kumquat-juice"],
    quote: {
      text: "Very organized and responsive. My guests were impressed with the drink decor.",
      author: "Diep Nguyen, Church Festival",
    },
    faqs: [
      {
        q: "Can you handle a full festival weekend?",
        a: "Yes. Festival weekends are what we do most. We have served 30,000+ drinks at 10+ large events. We plan brewing, restocks, and crew shifts around your schedule, so the booth stays open.",
      },
      {
        q: "Do you need power or kitchen access at the festival grounds?",
        a: "Our drink bus carries its own setup, so you do not need a kitchen. Tell us about your grounds when you book. We will plan where to set up with your festival team.",
      },
      {
        q: "How is pricing handled for festivals?",
        a: "We price festivals by how many drinks you expect. Drinks start at $5 each. Reach out early, because festival weekends are the first dates to fill.",
      },
      {
        q: "Do you serve traditional Vietnamese drinks?",
        a: "Yes. We serve che thai, salted kumquat juice, pandan mung bean milk, herbal drinks, and Vietnamese coffee. We also serve milk teas and fruit teas. I grew up with these recipes in Vietnam.",
      },
    ],
  },
  {
    slug: "weddings",
    name: "Wedding Boba & Milk Tea Bar",
    navLabel: "Weddings",
    metaTitle: "Wedding Boba Bar & Milk Tea Catering | Bay Area",
    metaDescription:
      "A milk tea and fruit tea bar for Bay Area weddings. We match the menu to your theme, brew fresh on site, and serve until the last dance.",
    heroEyebrow: "Bay Area Weddings",
    heroTitle: "A Boba and Milk Tea Bar for Your Wedding.",
    intro:
      "Guests line up for a boba bar at a wedding. We plan the menu around your colors, flavors, and timeline. We brew everything fresh on site, so the last drink tastes as good as the first.",
    body: [
      {
        heading: "A Menu That Matches Your Wedding",
        text: "Pick lychee or passion fruit tea for a garden wedding. Add classic milk teas for everyone, and Vietnamese coffee to honor family. We help you choose a short menu. Drinks come in 16 to 20 oz cups. Each guest picks their sweetness, ice, and toppings.",
      },
      {
        heading: "One Crew Does It All",
        text: "Our crew sets up before guests arrive, serves through the reception, and cleans up after. You do not have to manage us. You will just see the line at the drink bar.",
      },
    ],
    bullets: [
      "A menu planned around your theme and guest list",
      "Brewed fresh on site with real tea leaves, real milk, and fresh boba",
      "Guests pick their sweetness, ice, and toppings",
      "One crew sets up, serves, and cleans up",
    ],
    drinkSlugs: ["lychee-tea", "passion-fruit-tea", "jasmine-milk-tea", "vietnamese-coffee"],
    faqs: [
      {
        q: "How does a boba bar work at a wedding reception?",
        a: "We set up a drink bar at your venue before guests arrive. Guests walk up and pick a drink from your menu. They choose sweetness and toppings, and we hand them a fresh 16 to 20 oz cup. The bar can run during cocktail hour, next to dessert, or all night.",
      },
      {
        q: "How early should we book for a wedding?",
        a: "Book as soon as your date is set. Wedding season Saturdays are our most requested dates. We need at least one week for any event. For a wedding, book as early as you can.",
      },
      {
        q: "Can the menu match our wedding theme?",
        a: "Yes. Tell us your colors and the mood you want, and we will suggest drinks to match. Dragon fruit and other fruit teas fit a bright, colorful wedding. Creamy milk teas and Vietnamese coffee feel warmer and more traditional.",
      },
      {
        q: "What does a wedding drink bar cost?",
        a: "Drinks start at $5 each. We price by guest count and menu. Send your date, venue, and guest count through the booking form. We will send prices and drink ideas, usually within 24 hours.",
      },
    ],
  },
  {
    slug: "corporate-events",
    name: "Corporate & Office Event Catering",
    metaTitle: "Corporate Boba Catering | San Jose & Silicon Valley Offices",
    navLabel: "Corporate Events",
    metaDescription:
      "Boba and milk tea catering for Silicon Valley offices. Team parties, all-hands, and campus events in San Jose, Santa Clara, and Sunnyvale. Fast lines, custom menus.",
    heroEyebrow: "Silicon Valley Offices",
    heroTitle: "Boba Catering for Your Office Event.",
    intro:
      "We bring a boba bar to offices in San Jose, Santa Clara, Sunnyvale, and across Silicon Valley. We serve teams of 30 and whole campuses.",
    body: [
      {
        heading: "Fast Enough for a Lunch Break",
        text: "Twenty years of long festival lines taught us to serve fast. A drink break fits inside a lunch break. We set up inside or outside, in a lobby, patio, cafeteria, or meeting space. We bring everything, so your facilities team has nothing to do.",
      },
      {
        heading: "A Drink for Every Person",
        text: "We serve classic milk teas, light fruit teas, and Vietnamese coffee. We also have caffeine-free drinks. Each person can change their drink to fit their taste.",
      },
    ],
    bullets: [
      "Fast lines, staffed for your headcount",
      "Indoor or outdoor setup, and we bring everything",
      "Caffeine, decaf, and caffeine-free drinks on every menu",
      "Serving the South Bay for 20+ years",
    ],
    drinkSlugs: ["brown-sugar-milk-tea", "viet-salted-coffee", "peach-green-tea", "tropical-fruit-tea"],
    faqs: [
      {
        q: "Can you set up inside our office?",
        a: "Yes. The drink bar brings all it needs. It sets up in lobbies, cafeterias, patios, and event spaces. Tell us where when you book, and we will plan the rest with your office team.",
      },
      {
        q: "How many people can you serve at a corporate event?",
        a: "We serve teams of 30 up to whole campuses. We have served festival crowds in the thousands. We plan our crew and brewing around your headcount and time.",
      },
      {
        q: "How fast is the line?",
        a: "Fast. Twenty years of festivals taught us speed. Tell us your headcount and how much time you have. We will bring enough crew so everyone gets a drink before the break ends.",
      },
      {
        q: "How does booking and pricing work for companies?",
        a: "Drinks start at $5 each. We price by headcount and menu. Send the date, office address, and about how many people through the booking form. You will get prices back, usually within 24 hours.",
      },
    ],
  },
  {
    slug: "school-events",
    name: "School Event & Fundraiser Catering",
    navLabel: "School Events",
    metaTitle: "School Event Boba Catering | Fundraisers & Carnivals, San Jose",
    metaDescription:
      "Milk tea and fruit tea catering for school carnivals, fundraisers, and parties in Santa Clara County. Caffeine-free drinks for kids and fast lines.",
    heroEyebrow: "Santa Clara County Schools",
    heroTitle: "Drinks for School Carnivals and Fundraisers.",
    intro:
      "We serve school carnivals, fundraisers, teacher thank-you days, and end-of-year parties. Our kid menu has lots of caffeine-free drinks. Our lines move fast, even during a short break.",
    body: [
      {
        heading: "A Kid Menu Parents Can Trust",
        text: "Strawberry milk, guava juice, iced tamarind, and fruit teas top the kid menu. All of them are caffeine-free. Parents and teachers get classic milk teas. Any drink can be made less sweet. Toppings like jelly and boba make it a treat.",
      },
      {
        heading: "Fast Lines for Big School Crowds",
        text: "At a school carnival, everyone comes at once, just like a festival. Twenty years of church festivals taught us how to serve a rush. The drink line will not take over your event.",
      },
    ],
    bullets: [
      "Caffeine-free drinks: strawberry milk, guava juice, iced tamarind",
      "Set the sweetness on every drink, down to 0%",
      "Fast lines, tested at twenty years of festivals",
      "For carnivals, fundraisers, and staff thank-you events",
    ],
    drinkSlugs: ["strawberry-milk", "guava-juice", "mango-green-tea", "strawberry-milk-tea"],
    quote: {
      text: "They pulled up in the cutest drink bus — our guests were obsessed!",
      author: "Mai Le, School Event",
    },
    faqs: [
      {
        q: "Do you have caffeine-free drinks for kids?",
        a: "Yes, lots. Strawberry milk, guava juice, iced tamarind, herbal drinks, and more have no caffeine. They are the top picks at every school event we serve.",
      },
      {
        q: "Can drinks be made less sweet for younger kids?",
        a: "Yes. You can set the sweetness on every drink, from 100% down to 0%. Kids still pick their toppings, and parents choose the sugar.",
      },
      {
        q: "Do you work school fundraisers?",
        a: "Yes. We often work carnivals, walkathons, and fundraiser nights. Tell us how your event works and how many people will come. We will send a plan and a price.",
      },
      {
        q: "How much notice does a school event need?",
        a: "At least one week. Give us more time for big spring carnivals. Those weekends fall in festival season and fill up first.",
      },
    ],
  },
  {
    slug: "private-parties",
    name: "Private Party Drink Catering",
    navLabel: "Private Parties",
    metaTitle: "Private Party Boba Catering | Birthdays & Celebrations, San Jose",
    metaDescription:
      "Boba and milk tea catering for birthdays, graduations, quinceañeras, and backyard parties in San Jose and the South Bay. Custom menus, brewed fresh on site.",
    heroEyebrow: "San Jose and the South Bay",
    heroTitle: "Boba Catering for Your Private Party.",
    intro:
      "We serve birthdays, graduations, quinceañeras, tết parties, baby showers, and family reunions. We also serve backyard parties that grew to forty people. A drink bar makes any party feel special.",
    body: [
      {
        heading: "Every Guest Builds Their Own Drink",
        text: "Guests pick a milk tea, fruit tea, or Vietnamese drink. Then they choose sweetness, ice, and toppings. Kids pile on jelly, and grandparents get their coffee. Everyone gets the drink they want.",
      },
      {
        heading: "Sized to Your Party",
        text: "A backyard birthday needs a small setup. A quinceañera needs a bigger one. We size the setup, menu, and crew to your guest list. The person who takes your booking is at your party serving drinks.",
      },
    ],
    bullets: [
      "Menus for small parties and big family events",
      "Vietnamese drinks plus milk teas and fruit teas",
      "Caffeine-free and low-sugar drinks for all ages",
      "We set up and clean up, so you can stay with your guests",
    ],
    drinkSlugs: ["taro-milk-tea", "mango-milk-tea", "dragon-fruit-tea", "pandan-mungbean-milk"],
    faqs: [
      {
        q: "Is my party too small for catering?",
        a: "Probably not. Drinks start at $5 each, and we price by guest count. A backyard birthday works as well as a reunion of a hundred people. Tell us your plans and we will make it fit.",
      },
      {
        q: "Do you do quinceañeras and cultural celebrations?",
        a: "Yes. We often serve quinceañeras, tết, graduation parties, baby showers, and family reunions. We will plan a menu for your party, from tropical fruit teas to Vietnamese drinks.",
      },
      {
        q: "What if my guests have never had boba?",
        a: "We walk first-timers through it. We point them to easy favorites like mango milk tea or peach green tea. Guests set their own sweetness, so no drink ends up too sweet.",
      },
      {
        q: "How far ahead should I book a party?",
        a: "One week is enough for most parties. Spring and summer Saturdays fill fast. If your date is set, book early.",
      },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return EVENT_TYPES.find((e) => e.slug === slug);
}
