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
      "Festival-scale milk tea, fruit tea, and Vietnamese drink catering for parish festivals across San Jose and Santa Clara County. 20+ years, 30,000+ drinks poured.",
    heroEyebrow: "Where It All Started",
    heroTitle: "Drink Catering Built for Parish Festivals.",
    intro:
      "Lynh's Drinks started at a church festival, and festival weekends are still the heart of our calendar. We've poured drinks at St. Maria Goretti, Our Lady of La Vang, Saint Elizabeth, Saint John Vianney, Vietnamese Martyrs, Holy Spirit, and Queen of Peace parish festivals — and the parishes keep asking us back.",
    body: [
      {
        heading: "Big Batches, Long Lines, No Panic",
        text: "A festival crowd isn't like any other event. Lines form fast, they're long, and they re-form all weekend. Twenty years of festival weekends taught us how to brew in volume without dropping quality — real tea leaves, real milk, boba cooked fresh through the day — and how to keep a line moving so nobody gives up and walks away.",
      },
      {
        heading: "Flavors the Community Actually Wants",
        text: "Thai milk tea, iced tamarind, che thai, salted kumquat juice, pandan mung bean milk — alongside the fruit teas and milk teas every crowd loves. We build the menu with your festival committee so it fits your community, and every drink can be made less sweet or caffeine-free for kids and elders.",
      },
    ],
    bullets: [
      "Proven at 10+ large-scale festivals with thousands of drinks per weekend",
      "Mobile drink bar bus — self-contained setup, no kitchen access needed",
      "Traditional Vietnamese drinks plus crowd-favorite milk and fruit teas",
      "One crew from Friday setup through Sunday teardown",
    ],
    drinkSlugs: ["thai-milk-tea", "iced-tamarind", "che-thai", "salted-kumquat-juice"],
    quote: {
      text: "Very organized and responsive. My guests were impressed with the drink decor.",
      author: "Diep Nguyen, Church Festival",
    },
    faqs: [
      {
        q: "Can you handle a full festival weekend?",
        a: "Yes — multi-day festival weekends are our specialty. We've poured 30,000+ drinks across 10+ large-scale events, and we plan batch brewing, restocks, and crew shifts around your festival schedule so the booth never goes dark.",
      },
      {
        q: "Do you need power or kitchen access at the festival grounds?",
        a: "Our mobile drink bar runs self-contained, so festival grounds without kitchen access aren't a problem. Tell us about your site when you book and we'll sort out placement and logistics with your committee.",
      },
      {
        q: "How is pricing handled for festivals?",
        a: "Festival pricing is quoted by expected volume, with drinks starting at $5 each. Talk to us early — festival season weekends are the first dates on our calendar to fill.",
      },
      {
        q: "Do you serve traditional Vietnamese drinks?",
        a: "Yes — che thai, salted kumquat juice, pandan mung bean milk, herbal drinks, and Vietnamese coffee are all on the menu, alongside milk teas and fruit teas. These recipes are the ones Lynh grew up with in Vietnam.",
      },
    ],
  },
  {
    slug: "weddings",
    name: "Wedding Boba & Milk Tea Bar",
    navLabel: "Weddings",
    metaTitle: "Wedding Boba Bar & Milk Tea Catering | Bay Area",
    metaDescription:
      "A handcrafted milk tea and fruit tea bar for Bay Area weddings. Custom menus matched to your theme, fresh-brewed on site, served from setup to last dance.",
    heroEyebrow: "For Your Big Day",
    heroTitle: "A Drink Bar Your Guests Will Talk About.",
    intro:
      "A boba bar is the wedding station guests actually line up for — and remember. We build the menu around your colors, your flavors, and your timeline, then brew everything fresh on site so the drinks are as good at the last dance as they were at cocktail hour.",
    body: [
      {
        heading: "A Menu That Matches Your Wedding",
        text: "Elegant lychee and passion fruit teas for a garden ceremony, classic milk teas for the crowd-pleasers, Vietnamese coffee for a nod to family tradition — we help you pick a short menu that fits the day. Drinks are served in 16–20 oz cups, and every guest customizes their own sweetness, ice, and toppings.",
      },
      {
        heading: "Zero Stress on the Day",
        text: "One crew handles everything: setup before guests arrive, service through the reception, and cleanup after. You won't manage us — you'll just see the line at the drink bar and the cups on the dance floor.",
      },
    ],
    bullets: [
      "Custom menu built around your theme and guest list",
      "Fresh-brewed on site — real tea leaves, real milk, fresh boba",
      "Guests customize sweetness, ice, and toppings at the bar",
      "Setup, service, and cleanup handled by one crew",
    ],
    drinkSlugs: ["lychee-tea", "passion-fruit-tea", "jasmine-milk-tea", "vietnamese-coffee"],
    faqs: [
      {
        q: "How does a boba bar work at a wedding reception?",
        a: "We set up a full drink bar station at your venue before guests arrive. Guests walk up, pick a drink from your custom menu, choose their sweetness and toppings, and we hand them a fresh-poured 16–20 oz cup. It works as a cocktail-hour station, a dessert-table neighbor, or an all-night bar.",
      },
      {
        q: "How early should we book for a wedding?",
        a: "As early as your date is fixed. Wedding-season Saturdays are the most requested dates we have, and one week is the bare minimum for any event — for a wedding, give us as much runway as you can.",
      },
      {
        q: "Can the menu match our wedding theme?",
        a: "Yes — that's the fun part. Tell us your colors and the mood you want, and we'll suggest drinks that fit: vibrant dragon fruit and butterfly-pretty fruit teas for a bright palette, or creamy classics and Vietnamese coffee for something warmer and more traditional.",
      },
      {
        q: "What does a wedding drink bar cost?",
        a: "Drinks start at $5 each and we quote by guest count and menu. Send your date, venue, and headcount through the booking form and we'll come back with pricing and flavor recommendations, usually within 24 hours.",
      },
    ],
  },
  {
    slug: "corporate-events",
    name: "Corporate & Office Event Catering",
    metaTitle: "Corporate Boba Catering | San Jose & Silicon Valley Offices",
    navLabel: "Corporate Events",
    metaDescription:
      "Boba and milk tea catering for Silicon Valley offices — team celebrations, all-hands, and campus events across San Jose, Santa Clara, and Sunnyvale. Fast lines, custom menus.",
    heroEyebrow: "For the Whole Team",
    heroTitle: "The Office Perk Everyone Actually Shows Up For.",
    intro:
      "A boba bar turns a routine team event into the one people talk about in standup the next day. We cater offices across San Jose, Santa Clara, Sunnyvale, and the wider Silicon Valley — from a 30-person team celebration to a campus-wide event.",
    body: [
      {
        heading: "Built to Fit a Work Day",
        text: "Twenty years of long festival lines taught us speed. We keep the line moving so a drink break fits inside a lunch break, and the bar sets up indoors or out — lobby, patio, cafeteria, or conference floor. Everything is self-contained, so facilities won't need to do a thing.",
      },
      {
        heading: "A Menu the Whole Office Agrees On",
        text: "Classic milk teas for the traditionalists, fruit teas for the light-drink crowd, Vietnamese coffee for the caffeine-dependent, and caffeine-free options for everyone else. Every drink is customizable, so nobody settles.",
      },
    ],
    bullets: [
      "Fast service lines sized to your headcount",
      "Indoor or outdoor setup — fully self-contained",
      "Caffeinated, decaf, and caffeine-free options on every menu",
      "Serving the South Bay tech corridor for 20+ years",
    ],
    drinkSlugs: ["brown-sugar-milk-tea", "viet-salted-coffee", "peach-green-tea", "tropical-fruit-tea"],
    faqs: [
      {
        q: "Can you set up inside our office?",
        a: "Yes — the drink bar is fully self-contained and sets up in lobbies, cafeterias, patios, and event spaces. Tell us the location when you book and we'll handle the rest with your office or facilities contact.",
      },
      {
        q: "How many people can you serve at a corporate event?",
        a: "From a 30-person team party to a campus-wide celebration. We've served festival crowds in the thousands, so we size the crew and brewing plan to your headcount and time window.",
      },
      {
        q: "How fast is the line?",
        a: "Fast — it's the thing twenty years of festivals forced us to get right. Tell us your headcount and the window you have, and we'll staff so everyone gets a drink without burning the whole break.",
      },
      {
        q: "How does booking and pricing work for companies?",
        a: "Drinks start at $5 each, quoted by headcount and menu. Send the date, office location, and approximate headcount through the booking form and you'll have numbers back quickly — usually within 24 hours.",
      },
    ],
  },
  {
    slug: "school-events",
    name: "School Event & Fundraiser Catering",
    navLabel: "School Events",
    metaTitle: "School Event Boba Catering | Fundraisers & Carnivals, San Jose",
    metaDescription:
      "Milk tea and fruit tea catering for school carnivals, fundraisers, and celebrations across Santa Clara County. Kid-friendly caffeine-free menu, fast festival-tested lines.",
    heroEyebrow: "For Campus Crowds",
    heroTitle: "Flavors Kids Ask for by Name.",
    intro:
      "School carnivals, fundraisers, teacher appreciation days, and end-of-year parties — we build kid-friendly menus with plenty of caffeine-free options, and we keep lines moving fast enough for a recess-length break.",
    body: [
      {
        heading: "A Menu Parents Don't Have to Worry About",
        text: "Strawberry milk, guava juice, iced tamarind, and fruit teas headline the kid menu — all caffeine-free — with classic milk teas for the parents and teachers. Every drink's sweetness can be dialed down, and toppings like jelly and boba make it feel like a treat, not just a drink.",
      },
      {
        heading: "Festival-Tested for School-Sized Crowds",
        text: "A school carnival crowd moves like a festival crowd: everyone at once. Twenty years of parish festivals means we know how to serve a rush — so the line at the drink booth doesn't swallow the whole event.",
      },
    ],
    bullets: [
      "Caffeine-free favorites: strawberry milk, guava juice, iced tamarind",
      "Adjustable sweetness on every drink — down to 0%",
      "Fast lines tested on twenty years of festival crowds",
      "Works for carnivals, fundraisers, and staff appreciation events",
    ],
    drinkSlugs: ["strawberry-milk", "guava-juice", "mango-green-tea", "strawberry-milk-tea"],
    quote: {
      text: "They pulled up in the cutest drink bus — our guests were obsessed!",
      author: "Mai Le, School Event",
    },
    faqs: [
      {
        q: "Do you have caffeine-free drinks for kids?",
        a: "Plenty — strawberry milk, guava juice, iced tamarind, herbal drinks, and more are naturally caffeine-free, and they're the most popular picks at every school event we serve.",
      },
      {
        q: "Can drinks be made less sweet for younger kids?",
        a: "Yes — sweetness is adjustable on every drink, from 100% down to 0%. Kids still get the fun of picking toppings; parents get a say in the sugar.",
      },
      {
        q: "Do you work school fundraisers?",
        a: "Yes — carnivals, walkathons, and fundraiser nights are regulars on our calendar. Talk to us about your event's format and headcount and we'll build a plan and quote that fits.",
      },
      {
        q: "How much notice does a school event need?",
        a: "At least a week, and more for big carnival dates in spring — those weekends overlap with festival season and fill up first.",
      },
    ],
  },
  {
    slug: "private-parties",
    name: "Private Party Drink Catering",
    navLabel: "Private Parties",
    metaTitle: "Private Party Boba Catering | Birthdays & Celebrations, San Jose",
    metaDescription:
      "Boba and milk tea catering for birthdays, graduations, quinceañeras, and backyard parties across San Jose and the South Bay. Custom menus, fresh-brewed on site.",
    heroEyebrow: "For Your People",
    heroTitle: "The Backyard Party, Upgraded.",
    intro:
      "Birthdays, graduations, quinceañeras, tết celebrations, baby showers, reunions, and the backyard get-together that somehow grew to forty people — a drink bar makes any of them feel like an occasion.",
    body: [
      {
        heading: "Every Guest Builds Their Own Drink",
        text: "The drink bar is entertainment as much as refreshment. Guests pick a base — milk tea, fruit tea, or a Vietnamese specialty — then customize sweetness, ice, and toppings. Kids stack jelly, grandparents get their coffee, and everyone walks away with exactly what they wanted.",
      },
      {
        heading: "Sized to Your Party, Not the Other Way Around",
        text: "A backyard birthday doesn't need a festival rig, and a quinceañera shouldn't get a card table. We scale the setup, menu, and crew to your guest list, and the same person who takes your booking is at your party pouring drinks.",
      },
    ],
    bullets: [
      "Menus scaled from intimate parties to big family celebrations",
      "Vietnamese specialties alongside milk and fruit teas",
      "Caffeine-free and low-sugar options for all ages",
      "Setup to cleanup handled — you stay with your guests",
    ],
    drinkSlugs: ["taro-milk-tea", "mango-milk-tea", "dragon-fruit-tea", "pandan-mungbean-milk"],
    faqs: [
      {
        q: "Is my party too small for catering?",
        a: "Probably not — drinks start at $5 each and we quote by guest count, so a backyard birthday works just as well as a hundred-person reunion. Tell us what you're planning and we'll make it fit.",
      },
      {
        q: "Do you do quinceañeras and cultural celebrations?",
        a: "Yes — quinceañeras, tết, graduation parties, baby showers, and family reunions are all regulars. We'll build a menu that fits the celebration, from tropical fruit teas to traditional Vietnamese drinks.",
      },
      {
        q: "What if my guests have never had boba?",
        a: "That's the best part of the bar — first-timers get walked through it. We'll steer them to crowd-pleasers like mango milk tea or peach green tea, and the customizable sweetness means nobody ends up with something too sweet.",
      },
      {
        q: "How far ahead should I book a party?",
        a: "A week covers most parties, but spring and summer Saturdays go fast. If your date's locked, get it on our calendar early.",
      },
    ],
  },
];

export function getEventBySlug(slug: string) {
  return EVENT_TYPES.find((e) => e.slug === slug);
}
