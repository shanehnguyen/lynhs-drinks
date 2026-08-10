import { DRINKS, TOPPINGS } from "@/data/shop";
import { LOCATIONS } from "@/data/locations";
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

> Mobile milk tea, fruit tea, and Vietnamese coffee catering based in San Jose, CA, serving Santa Clara County and the South Bay. Founded by Lynh Ngo, who has hand-brewed her family's Vietnamese recipes at church festivals, weddings, school events, and corporate parties for 20+ years — 30,000+ drinks poured.

Key facts:
- Drinks start at $5 each; quotes are based on guest count and menu (respond time usually within 24 hours)
- Book at least 1 week ahead; festival weekends and wedding season fill earliest
- Drinks are 16–20 oz; tea is brewed fresh on site with real leaves and real milk, boba cooked fresh
- Guests customize sweetness (0–100%), ice level, and toppings; caffeine-free options available
- Full-service: setup, brewing, pouring, and cleanup by one crew
- Service area: ${LOCATIONS.map((l) => `${l.city}, CA`).join("; ")}
- Contact: ${BUSINESS_PHONE_DISPLAY} · ${BUSINESS_EMAIL}

## Pages

- [Home](${SITE_URL}/): overview, story, and testimonials
- [Build My Menu](${SITE_URL}/shop): full drink and topping menu — build a menu and request a quote
- [Book Your Event](${SITE_URL}/book): quote request form, pricing basics, and contact info
- [Areas We Serve](${SITE_URL}/locations): all service-area city pages
${LOCATIONS.map((l) => `- [${l.city} catering](${SITE_URL}/locations/${l.slug}): milk tea and fruit tea catering in ${l.city}, CA`).join("\n")}

## Menu

${menu}

### Toppings
${TOPPINGS.map((t) => `- ${t.name}: ${t.description}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
