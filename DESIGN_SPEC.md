# Lynh's Drinks — Homepage Build Spec

Goal: rebuild the homepage using the exact **layout structure, spacing rhythm, and
"sticker/pop" design system** of creaturecoffee.co, re-skinned in Lynh's own palette,
with **100% original placeholder copy** (nothing copied from Creature Coffee's actual
text). Values below were pulled live from creaturecoffee.co's computed CSS
(desktop viewport, 1536px wide) so proportions match closely, not just "vibes."

Stack already scaffolded: Next.js (App Router) + TypeScript + Tailwind v4, in this
directory. Not yet built out — this doc is the checklist to execute later.

---

## 1. Design tokens

### 1.1 Color mapping

Creature uses 4 flat block colors + white, cycled section to section, plus one accent
used only for the button "pop shadow." Same mechanic, remapped to a milk-tea palette:

| Role | Creature (measured) | Lynh's replacement | Hex |
|---|---|---|---|
| Neutral hero bg | `rgb(231,231,231)` light gray | Cream (boba milk) | `#F4E8D8` |
| Block color A | `rgb(244,96,54)` orange-red | Thai Tea orange | `#E2793A` |
| Block color B | `rgb(255,210,8)` yellow | Taro purple | `#8C6FAE` |
| Anchor dark (nav/footer/text-links) | `rgb(15,58,192)` blue | Coffee brown | `#4A2E22` |
| Neutral white section | `rgb(255,255,255)` | Warm white | `#FFFBF3` |
| Button "pop shadow" accent | `rgb(255,128,190)` pink | Strawberry pink | `#FF6FA0` |
| Body ink / default text | `#000000` | Near-black brown ink | `#2B1B12` |

Add as Tailwind v4 theme tokens in `src/app/globals.css`:

```css
@theme inline {
  --color-cream: #F4E8D8;
  --color-thai: #E2793A;
  --color-taro: #8C6FAE;
  --color-coffee: #4A2E22;
  --color-warmwhite: #FFFBF3;
  --color-strawberry: #FF6FA0;
  --color-ink: #2B1B12;
}
```

### 1.2 Fonts

Creature uses `Redonda` (bold/chunky rounded display font, weights 700–900, used for
almost everything including 20px body copy) + `Inter` for small nav utility text.
Redonda is a paid/custom font — use the closest free Google Font equivalent:

- **Display/headings/buttons/body:** `Fredoka` (Google Fonts) — rounded, bold,
  playful, weights 500/600/700. Closest free match to Redonda's chunky rounded feel.
- **Small utility text (nav caps, footer fine print):** `Inter` — matches Creature's
  exact secondary font, already free.

Wire up via `next/font/google` in `src/app/layout.tsx`:

```ts
import { Fredoka, Inter } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["500","600","700"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
```

Measured type scale (desktop, keep these ratios):

| Element | Size | Weight | Line-height |
|---|---|---|---|
| Hero H1 | 84px (clamp down to ~40px mobile) | 900 | 1.0 (`57.2/52` ratio ≈ 1.1) |
| Section H2 | 52px (clamp to ~32px mobile) | 900 | 1.1 |
| Card H3 (grid items) | 24px | 800 | 1.2 |
| Body/lead paragraph | 20px | 500 | 1.2 |
| Nav links / small caps buttons | 14px, `Inter`, letter-spaced | 700 | 1.2 |

### 1.3 "Push-button" sticker component (exact mechanic, measured)

This is Creature's signature button — a two-layer pill: a white/colored surface with
an **inset colored border** (not a real border, a `box-shadow: inset`), plus an
**offset solid-color layer behind it** (not a blurred drop-shadow — a hard-edged
color block peeking out bottom-right) that shifts on hover for a "push down" effect.

Measured values (desktop, ~1536px viewport):

```
.push-btn            → position: relative; display: inline-block;
.push-btn__surface   → background: <bg color, e.g. white or cream>;
                        border-radius: 8px;        /* measured 5.6px at their zoom, round up */
                        box-shadow: inset 0 0 0 2px var(--color-coffee);
                        padding: 11px 15px;
                        font: 700 14px 'Inter', sans-serif;  /* or Fredoka 700 for bigger CTAs */
                        position: relative; z-index: 1;
.push-btn::after      → content: "";
                        position: absolute;
                        top: 4px; left: 4px; right: -4px; bottom: -4px;
                        background: var(--color-strawberry); /* pop color, vary per section */
                        border-radius: 8px;
                        z-index: -1;
                        transition: all 150ms ease;
/* on :hover/:active, animate ::after inset to 0/0/0/0 so it "pushes flat" */
```

Build as a reusable `<PushButton>` component with props: `label`, `href`, `variant`
(surface color), `pop` (pop-shadow color) so it can be recolored per section (e.g.
strawberry pop on cream sections, cream pop on coffee-brown sections).

### 1.4 Wavy shape-divider mechanic

Every color-block-to-color-block transition uses an absolutely-positioned SVG wave,
not a straight edge:

```
.shape-divider          → position: absolute; top: 0 (or bottom: 0); left: 0; width: 100%;
                            pointer-events: none; z-index: 20; overflow: hidden;
.shape-divider svg path → fill: <color of the section ABOVE/BELOW being transitioned into>;
```

Build one reusable `<WaveDivider position="top" | "bottom" fill="<hex>" />` component
using a simple SVG wave path (viewBox `0 0 1440 100`, one smooth sine-like curve).
Flip vertically via CSS `transform: scaleY(-1)` for bottom vs top use instead of two
separate paths.

### 1.5 Layout container

- Max content width: **1400px**, centered, with side padding (`px-6` mobile → `px-12`
  desktop).
- Section vertical padding: ~90–107px top/bottom on desktop (fluid — use `clamp(48px, 8vw, 107px)`
  rather than a fixed px so it scales down cleanly on mobile), never 0.

---

## 2. Section-by-section spec (in order)

For each section below: **measured height (desktop reference only, not fixed)**,
**mapped bg color**, and the **placeholder content plan** for Lynh's (all original text
— write fresh copy, do not reuse Creature's wording).

| # | Creature section | Height (ref) | BG (Creature → Lynh's) | Lynh's content plan |
|---|---|---|---|---|
| 0 | Sticky header/nav | auto (~90px) | transparent → cream | Logo "Lynh's Drinks", links: Menu / Events / Gallery / About / Contact, `<PushButton>` "Get a Quote" top-right |
| 1 | Hero (image-with-text) | 782px | gray `#E7E7E7` → cream `#F4E8D8` | Big H1 (own headline, e.g. tone: "handcrafted milk tea & fruit tea for your next event"), subhead, 2 `<PushButton>`s ("View Menu" / "Book Your Event"), photo-frame placeholder (right side), small 5-star review sticker card, city/service-area tags row (San Jose · Santa Clara County) |
| 2–3 | Logo/press strip | 192px + 204px | orange `#F46036` → Thai orange `#E2793A` | "Trusted for 20+ years at:" + placeholder logo chips (Church Festivals, School Events, Weddings, Corporate Parties — text-based badges, not real logos) |
| 4–5 | Offering grid | 300px + 650px | yellow `#FFD208` → taro `#8C6FAE` | H2 own headline about catering offerings, 6 icon cards: Church Festivals, School Events, Weddings, Corporate Events, Private Parties, Custom Menus — each with a simple doodle icon (SVG) + 1-line desc, `<PushButton>` CTA below grid |
| 6 | "Aha Moment" feature | 793px | white `#FFFFFF` | Two-col: bold H2 + own definition-style callout (Lynh's equivalent hook line) + photo-frame placeholder, `<PushButton>` "See the Menu" |
| 7 | 2nd press strip | 257px | blue `#0F3AC0` → coffee brown `#4A2E22` | "As seen at:" + placeholder badge chips (Santa Clara County Fair, local church names as generic placeholders, etc. — keep generic/fake-labeled) |
| 8–9 | Differentiator feature | 1045px | white | Photo-frame placeholder + checklist of 4 differentiators (fresh-brewed daily, real boba not powder, customizable toppings, on-site drink bar) |
| 10–11 | Testimonial row + featured quote | 88px + 549px | orange `#F46036` → Thai orange `#E2793A` | Row of 4 short placeholder quote cards (`"Lorem ipsum" — Name, Event`) + one large featured quote card w/ photo placeholder, 2 `<PushButton>`s |
| 12 | Two-col feature (photo + quote / copy) | 1061px | gray `#E7E7E7` → cream `#F4E8D8` | Left: photo placeholder + quote sticker card; Right: H2 "Meet the Team Behind the Boba" copy + `<PushButton>` "More About Lynh's" |
| 13 | Second two-col feature | 854px | blue `#0F3AC0` → coffee brown `#4A2E22` | Mirror of #12, swap column order |
| 14 | Upsell block | 795px | yellow `#FFD208` → taro `#8C6FAE` | "Order Drinks for Pickup" or "Shop Merch" style upsell, photo placeholder, 2 `<PushButton>`s |
| 15–16 | Closing CTA banner + tagline strip | 893px + 226px | white | Big centered H2 CTA ("Make Your Next Event Unforgettable"), 2 mascot-style SVG illustrations either side (boba-cup character, not copied from Creature's mascot — original design), 2 `<PushButton>`s, then a thin tagline strip below (e.g. "Handcrafted ✦ Never Powdered") |
| 17 | Footer | 291px+ | blue `#0F3AC0` → coffee brown `#4A2E22` | Columns: Catering (menu/events links), Company (about/contact), Follow Us (social icons placeholder), email signup input + `<PushButton>`, oversized "lynh's" wordmark at very bottom, copyright line |

**Total page order (17 stacked full-bleed sections):** Header → Hero → Press strip →
Offering grid → Aha-moment feature → Press strip 2 → Differentiator feature →
Testimonials row → Featured testimonial → Two-col feature A → Two-col feature B →
Upsell block → Closing CTA → Tagline strip → Footer.

---

## 3. Component/file structure to build

```
src/
  app/
    layout.tsx              (fonts, metadata)
    globals.css              (color tokens, section padding var, push-btn base styles)
    page.tsx                 (assembles all sections in order)
  components/
    Header.tsx
    Hero.tsx
    LogoStrip.tsx             (reusable, props: bg, items[])
    OfferingGrid.tsx
    FeatureSplit.tsx          (reusable two-col text+photo, props: reverse, bg)
    TestimonialRow.tsx
    FeaturedTestimonial.tsx
    UpsellBlock.tsx
    ClosingCTA.tsx
    TaglineStrip.tsx
    Footer.tsx
    ui/
      PushButton.tsx          (per §1.3)
      WaveDivider.tsx          (per §1.4)
      PhotoFrame.tsx           (placeholder box w/ dashed border + label, swap for real img later)
      Mascot.tsx                (original SVG boba-cup character, 1-2 poses)
      IconDoodle.tsx            (simple line-icon set for offering grid: church, school, ring/wedding, briefcase, party, custom)
```

---

## 4. Build order (checklist)

1. [ ] Add color tokens + font vars to `globals.css` / `layout.tsx` (§1.1, §1.2)
2. [ ] Build `PushButton` + `WaveDivider` primitives and sanity-check them in isolation
3. [ ] Build `Header` (sticky, logo, nav, CTA button)
4. [ ] Build `Hero` section
5. [ ] Build `LogoStrip` (reused twice, different bg colors)
6. [ ] Build `OfferingGrid` (6-card grid + icons)
7. [ ] Build `FeatureSplit` (reused for Aha-moment, differentiator, two-col A/B — via props)
8. [ ] Build `TestimonialRow` + `FeaturedTestimonial`
9. [ ] Build `UpsellBlock`
10. [ ] Build `ClosingCTA` + `Mascot` illustration + `TaglineStrip`
11. [ ] Build `Footer`
12. [ ] Assemble all in `page.tsx` in the exact order from §2, dropping in `WaveDivider`
    between every color transition
13. [ ] `npm run dev`, compare side-by-side against the reference screenshot at the
    same 1536px-ish desktop width; adjust section heights/padding/font sizes to match
14. [ ] Responsive pass: stack two-col sections, shrink hero/H2 font sizes via `clamp()`,
    verify wave dividers don't break on mobile widths
15. [ ] `npm run build` to confirm no type/lint errors

Existing tracked tasks (#1–#6 in this session) map onto this checklist — resume there
when ready to execute.

---

## 5. Explicit non-goals / guardrails

- **No copied text.** Every headline, quote, testimonial, and label must be original
  copy written for Lynh's Drinks — Creature's actual sentences are copyrighted and
  must not appear verbatim anywhere in the code or content.
- **No real customer names/quotes** attributed as genuine — testimonial cards use
  clearly-placeholder content (e.g. "Sarah T." / generic event type) until real
  reviews are collected and swapped in.
- **No copied imagery/mascot art** — the boba-cup mascot and icons must be original
  simple SVGs in Lynh's style, not traced/copied from Creature's illustrations.
- Photos are placeholders (`PhotoFrame` component) until real event/drink photography
  is available to drop in.
