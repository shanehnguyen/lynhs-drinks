import { DRINKS, TOPPINGS } from "@/data/shop";
import { LOCATIONS } from "@/data/locations";
import { EVENT_TYPES } from "@/data/events";
import {
  SITE_URL,
  SITE_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const menu = (["Milk Tea", "Fruit Tea", "Specialty"] as const)
    .map(
      (category) =>
        `### ${category}\n` +
        DRINKS.filter((d) => d.category === category)
          .map((d) => `- [${d.name}](${SITE_URL}/shop/${d.slug}): ${d.description}`)
          .join("\n")
    )
    .join("\n\n");

  const body = `# ${SITE_NAME}

> Mobile milk tea, fruit tea and Vietnamese coffee catering from San Jose, CA. We serve Santa Clara County and the South Bay. Lynh Ngo started the business. For 20+ years she has made her family's Vietnamese recipes by hand at church festivals, weddings, school events and work parties. She has poured 30,000+ drinks.

Key facts:
- Drinks start at $5 each. The price depends on guest count and menu. Replies usually come within 24 hours.
- Book at least 1 week ahead. Festival weekends and wedding season fill first.
- Drinks are 16 to 20 oz. Tea is made fresh at the event with real leaves and real milk. Boba is cooked fresh.
- Guests pick sweetness (0 to 100%), ice and toppings. Drinks with no caffeine are available.
- One crew does the setup, makes and serves the drinks, and cleans up.
- Service area: ${LOCATIONS.map((l) => `${l.city}, CA`).join("; ")}
- Contact: ${BUSINESS_PHONE_DISPLAY} · ${BUSINESS_EMAIL}

## Pages

- [Home](${SITE_URL}/): who we are, our story and reviews
- [Build My Menu](${SITE_URL}/shop): every drink and topping. Build a menu and ask for a quote.
- [Book Your Event](${SITE_URL}/book): quote form, prices and contact info
- [Areas We Serve](${SITE_URL}/locations): a page for each city we serve
${LOCATIONS.map((l) => `- [${l.city} catering](${SITE_URL}/locations/${l.slug}): milk tea and fruit tea catering in ${l.city}, CA`).join("\n")}
- [Events We Cater](${SITE_URL}/events): a page for each type of event
${EVENT_TYPES.map((e) => `- [${e.name}](${SITE_URL}/events/${e.slug}): ${e.metaDescription}`).join("\n")}

## Menu

${menu}

### Toppings
${TOPPINGS.map((t) => `- ${t.name}: ${t.description}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
