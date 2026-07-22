---
version: alpha
name: Descope-design-analysis
description: "A dual-mode developer-auth interface that alternates deep navy-black dark bands (hero, logo wall, customer quotes, footer) with crisp near-white editorial sections (no-code platform, use cases, \"why choose\"). Brand voltage comes from a mint-cyan pill CTA (#7deded) and a true-blue link accent (#0085ff) set against ink-navy surfaces, with the Roobert display face carrying tight, confident headlines and live product-UI \"identity journey\" node cards floating in the hero."
colors:
  primary: "#7deded"
  primary-bright: "#9dfafa"
  primary-teal: "#0ed7d1"
  accent-blue: "#0085ff"
  ink: "#0a101a"
  ink-soft: "#2a2d33"
  body: "#c6c6cb"
  muted: "#686e78"
  muted-light: "#a4a8ae"
  neutral-light: "#c3c5c9"
  hairline: "#dadee5"
  surface-soft: "#f0f0f1"
  canvas: "#f9fafb"
  surface-dark: "#0a101a"
  surface-dark-elevated: "#0c131f"
  surface-navy: "#111e32"
  surface-navy-strong: "#253754"
  border-navy: "#334665"
  near-black: "#1a1a1a"
  on-dark: "#ffffff"
  error: "#b50808"
typography:
  display-xl:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.28px
  display-lg:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.12px
  title-lg:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.64px
  title-md:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.48px
  body-md:
    fontFamily: "Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: normal
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
components:
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  announcement-bar:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 11px 24px
  button-primary-active:
    backgroundColor: "{colors.primary-teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 11px 24px
  button-video:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 11px 24px
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
  journey-node-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 16px
  logo-wall:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-light}"
    typography: "{typography.body-md}"
  feature-card-dark:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  tab-item:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
    padding: 12px 16px
  tab-item-active:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body-md}"
    padding: 12px 16px
  platform-card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 40px
  use-case-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: 24px
  why-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-light}"
    typography: "{typography.body-md}"
---

## Overview

Descope's marketing surface is a **dual-mode developer-auth interface** — it alternates deep navy-black dark bands with crisp near-white editorial sections as the page scrolls. The hero, top-nav, logo wall, customer-quote band, and footer all sit on ink-navy (`{colors.surface-dark}` — #0a101a); the "no-code CIAM platform", "endless use cases", and "why choose Descope" sections flip to a near-white canvas (`{colors.canvas}` — #f9fafb). This dark→light→dark rhythm is the system's core editorial device.

Brand voltage comes from two accents: a **mint-cyan pill CTA** (`{colors.primary}` — #7deded) that anchors every primary action ("Sign up", "Book a demo"), and a **true blue** (`{colors.accent-blue}` — #0085ff) reserved for inline links, active tab states, and underlined keyword highlights in headlines. Against the dark navy floor these read as electric without shouting.

Headlines run **Roobert** at weight 500 with tight negative letter-spacing (-0.48px to -1.28px) — a precise, slightly technical display voice fitting a developer-platform brand. Body copy is Helvetica 16px / 400. The headline+keyword treatment (e.g. "Identity journeys" underlined in mint over the dark hero) is a signature.

The hero's defining component is the **identity-journey node graph** — small product-UI cards ("Welcome Screen", "reCAPTCHA Enterprise / Assess", "Sign In / Magic Link / Email") connected by curved wires, each outlined with a 1.5px inset border in a different accent (navy, mint, dark). Descope shows the actual flow-builder chrome as the hero artifact rather than a marketing illustration.

**Key Characteristics:**
- Dark-first system: ink-navy (`{colors.surface-dark}` — #0a101a) is the dominant canvas; light sections (`{colors.canvas}` — #f9fafb) appear as scroll interludes.
- Mint-cyan pill CTA (`{colors.primary}` — #7deded) with dark ink text, fully rounded (`{rounded.pill}`).
- True-blue (`{colors.accent-blue}` — #0085ff) for inline links, active tabs, and underlined headline keywords.
- Roobert display headlines at weight 500 with tight negative tracking; Helvetica body.
- Identity-journey node cards (`{component.journey-node-card}`) with colored 1.5px inset borders — real product chrome embedded in the hero.
- Layered soft shadow for elevated cards on light sections; inset-border "outlines" for dark node cards.
- Border radius is hierarchical: `{rounded.pill}` for buttons, `{rounded.md}`–`{rounded.xl}` (12–24px) for cards.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #7deded): The mint-cyan pill CTA fill — every primary action ("Sign up", "Book a demo", "Video overview" accent). Always paired with dark ink text. Press/active state shifts toward `{colors.primary-teal}` (#0ed7d1).
- **Primary Bright** (`{colors.primary-bright}` — #9dfafa): A lighter mint used for inset-border outlines on highlighted journey node cards and small glow accents.
- **Primary Teal** (`{colors.primary-teal}` — #0ed7d1): The deeper teal in the mint family — used for active/pressed CTA tone and small accent marks.
- **Accent Blue** (`{colors.accent-blue}` — #0085ff): Inline text links, active tab underline, and the underlined keyword highlights in headlines ("Identity journeys", "endless", "CIAM platform", "choose Descope").

### Surface (Dark)
- **Surface Dark** (`{colors.surface-dark}` — #0a101a): The primary page floor — hero, nav, logo wall, customer band, footer.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #0c131f): Journey node cards, testimonial cards, the announcement bar — slightly lifted off the darkest floor.
- **Surface Navy** (`{colors.surface-navy}` — #111e32): Dark feature cards ("One platform for all your external identities") and the secondary header button.
- **Surface Navy Strong** (`{colors.surface-navy-strong}` — #253754): Deeper navy used in gradient hero washes and stronger card fills.
- **Border Navy** (`{colors.border-navy}` — #334665): The 1.5px inset-border outline tone on dark journey node cards.

### Surface (Light)
- **Canvas** (`{colors.canvas}` — #f9fafb): The near-white floor for the light editorial sections and the light platform / use-case / why cards.
- **Surface Soft** (`{colors.surface-soft}` — #f0f0f1): Very-soft fills and dividers inside light sections.
- **Hairline** (`{colors.hairline}` — #dadee5): 1px border tone and inset-outline on light surfaces.

### Text
- **Ink** (`{colors.ink}` — #0a101a): Headlines and primary text on light sections; text on the mint CTA.
- **Ink Soft** (`{colors.ink-soft}` — #2a2d33): Secondary dark text on light surfaces.
- **Body** (`{colors.body}` — #c6c6cb): Default running-text color on dark surfaces (hero sub-copy, testimonial quotes).
- **Muted** (`{colors.muted}` — #686e78): Secondary/inactive text — inactive tabs, captions.
- **Muted Light** (`{colors.muted-light}` — #a4a8ae): Footer and logo-wall labels on dark surfaces.
- **Neutral Light** (`{colors.neutral-light}` — #c3c5c9): Tertiary text and faint UI labels.
- **On Dark** (`{colors.on-dark}` — #ffffff): White headlines and nav text on dark bands.

### Semantic & Other
- **Error** (`{colors.error}` — #b50808): Validation / error accents (sparingly observed).
- **Near Black** (`{colors.near-black}` — #1a1a1a): A neutral near-black used in occasional UI chrome.

## Typography

### Font Family
The system runs **Roobert** for all display/headline roles (h1–h4, weight 500) and **Helvetica** for body copy (16px / 400). Roobert is a commercial/licensed display typeface; this spec ships an open-source substitute (see note below). The headline voice is defined by weight 500 — not bold — combined with tight negative letter-spacing, which gives it a precise, engineered feel suited to a developer platform.

The split is strict:
- Roobert (display, weight 500, -0.48 to -1.28px tracking) — h1, h2, h3, h4
- Helvetica (body, weight 400, normal tracking) — paragraphs, labels, button/nav text

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 500 | 1.1 | -1.28px | Hero h1 ("Identity journeys for customers and AI agents") — Roobert |
| `{typography.display-lg}` | 56px | 500 | 1.1 | -1.12px | Section heads ("One platform for all your external identities") — Roobert |
| `{typography.title-lg}` | 32px | 500 | 1.1 | -0.64px | Card / panel titles ("Drag & drop user journeys") — Roobert |
| `{typography.title-md}` | 24px | 500 | 1.1 | -0.48px | Sub-section + card titles — Roobert |
| `{typography.body-md}` | 16px | 400 | 1.25 | normal | Body copy, buttons, nav, captions — Helvetica |

Note: the measured scale places h4 (32px / `{typography.title-lg}`) above h3 (24px / `{typography.title-md}`) — Descope uses h4 as its larger card-title role and h3 as the smaller one.

### Principles
Roobert carries every headline; Helvetica handles everything supporting. Display weight stays at 500 across all sizes — never 700. The negative letter-spacing (scaling with size) is part of the voice; Roobert without it reads as off-brand. Headline keywords are emphasized by underlining them in `{colors.accent-blue}`, not by changing weight.

### Note on Font Substitutes
Roobert is a licensed commercial typeface and is not shipped here. **Inter** at weight 500 with roughly -0.02em letter-spacing is a usable substitute that preserves the medium-weight, slightly-condensed signature; **Söhne** or **Pangram Sans** are closer paid alternatives. Body copy falls back cleanly to the system Helvetica/Arial stack.

## Layout

### Spacing System
- **Base unit:** 4px (the dominant rhythm; the analyzer also recorded frequent 11px and 15px padding values used inside pill buttons and compact rows — derived, treated as off-grid micro-padding).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px.
- **Most frequent measured gap:** `{spacing.lg}` (24px) — the dominant card padding and inter-element gap.
- **Card internal padding:** `{spacing.lg}` (24px) for use-case / feature cards; `{spacing.xxl}` (40px) for the larger light platform card.
- **Button padding:** ~11px × 24px (derived from measured 11px and 24px values).

### Grid & Container
- **Editorial body:** centered single column with constrained max width on marketing bands.
- **Feature cards:** 2-up grid ("One platform" section).
- **Use-case cards:** 3-up grid at desktop ("Power endless external identity use cases" — 6 cards in two rows).
- **Why cards:** 3-up grid ("Fast / Flexible / Future-proof").
- **Logo wall:** multi-row grid of partner logos centered on the dark band.

### Whitespace Philosophy
Descope uses generous vertical spacing between bands and alternates surface mode (dark → light → dark) to segment the long-scroll page. Within sections the rhythm is tight and scannable: a single headline, short supporting paragraph, then a grid of cards.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat dark | No shadow | Hero band, logo wall, footer — depth comes from navy gradient washes |
| Inset outline (navy) | `rgb(51,70,101)` 1.5px inset on all sides | Default journey node cards (`{component.journey-node-card}`) |
| Inset outline (mint) | `rgb(157,250,250)` 1.5px inset on all sides | Highlighted / active journey node cards |
| Inset outline (hairline) | `rgb(218,222,229)` 1.5px inset on all sides | Light-surface card outlines |
| Soft layered shadow | `rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 6px 6px -3px, rgba(42,51,69,0.04) 0px 3px 3px -1.5px` | Elevated light cards (platform card, use-case cards) |

The elevation philosophy splits by mode: on **dark** surfaces, depth is drawn with thin colored inset borders (the journey-node outlines) and gradient washes — not drop shadows. On **light** surfaces, a very low-alpha multi-layer blue-tinted shadow lifts cards subtly off the canvas.

### Decorative Depth
- The hero's identity-journey node cards connect via curved SVG wires; each node carries its own product-icon chip (blue, orange, mint) — real flow-builder chrome shown as content.
- Headline keyword highlights use an underline/highlight in `{colors.accent-blue}` rather than a box or shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, inline icon tiles, tight UI accents |
| `{rounded.sm}` | 8px | Small interior elements (rare) |
| `{rounded.md}` | 12px | Use-case cards, why cards |
| `{rounded.lg}` | 16px | Journey node cards, feature cards, testimonial cards |
| `{rounded.xl}` | 24px | Larger panels / containers |
| `{rounded.pill}` | 9999px | All buttons (mint CTA, dark secondary), tab indicators |

A measured 14px radius also appears occasionally (derived, between md and lg) — treated as a one-off and not promoted to a token.

### Geometry
Buttons are fully pill-shaped (`{rounded.pill}`). Content cards cluster around 12–16px corners. Product chrome inside node cards retains its own native interior radii (input rows, icon chips).

## Components

### Top Navigation & Bars

**`announcement-bar`** — Thin bar pinned above the nav ("Welcome to AI Launch Week!..."). Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}` with a "Let's go >" emphasis and a right-aligned "Log In" link.

**`top-nav`** — Dark nav bar on `{colors.surface-dark}`. Descope wordmark at left (with the mint asterisk glyph in "descope"), horizontal menu (Product, Use Cases, Developers, Customers, Resources, Company, Pricing) in `{typography.body-md}`, and a right cluster: a `{component.button-secondary}` "Sign up" and a `{component.button-primary}` "Book a demo".

**`nav-link`** — Transparent menu item, `{colors.on-dark}` text in `{typography.body-md}`. Several carry dropdown chevrons.

### Buttons

**`button-primary`** — The signature mint-cyan pill. Background `{colors.primary}` (#7deded), dark `{colors.ink}` text, `{typography.body-md}`, fully rounded `{rounded.pill}`, padding ~11px × 24px. Carries a trailing arrow glyph ("Sign up →", "Book a demo →"). Active state `button-primary-active` deepens toward `{colors.primary-teal}`.

**`button-secondary`** — Dark navy pill used in the header and for "Video overview". Background `{colors.surface-navy}`, text `{colors.on-dark}`, same pill radius and padding as primary.

**`button-video`** — A darker variant on the hero ("Video overview →") sitting on `{colors.surface-dark-elevated}` with `{colors.on-dark}` text and pill radius.

### Hero & Product Chrome

**`hero-band`** — Dark hero on `{colors.surface-dark}` with a deep navy gradient wash. Centered h1 in `{typography.display-xl}` (white, with the "Identity journeys" keyword underlined in `{colors.accent-blue}`), a `{colors.body}` sub-paragraph, a button row, and the journey-node graph below.

**`journey-node-card`** — Small product-UI flow nodes ("Welcome Screen", "reCAPTCHA Enterprise / Assess", "Sign In / Magic Link / Email") connected by curved wires. Background `{colors.surface-dark-elevated}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px), outlined with a 1.5px inset border in `{colors.border-navy}` (default) or `{colors.primary-bright}` (highlighted). Each node carries a small colored product-icon chip at top-left.

**`logo-wall`** — Dark band ("Powering auth for 1000s of organizations…") with a centered grid of monochrome partner logos in `{colors.muted-light}` on `{colors.surface-dark}`.

### Cards

**`feature-card-dark`** — Used in the 2-up "One platform for all your external identities" grid. Background `{colors.surface-navy}`, `{colors.on-dark}` text, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Small mint icon tile at top, `{typography.title-md}` title, body description.

**`platform-card-light`** — The large white panel in the "Our no-code CIAM platform" section ("Drag & drop user journeys"). Background `{colors.canvas}`, `{colors.ink}` text, `{typography.title-lg}` title, rounded `{rounded.lg}`, padding `{spacing.xxl}` (40px), with the soft layered shadow. Contains a left feature list (each item titled in `{colors.accent-blue}`) and a product mockup at right.

**`use-case-card`** — 3-up grid cards ("B2C CIAM", "B2B CIAM", "ATO prevention", etc.) on the light section. Background `{colors.canvas}`, `{colors.ink}` text, `{typography.title-md}` title, rounded `{rounded.md}`, padding `{spacing.lg}` (24px), soft shadow. Each carries a mint icon tile, a title, body copy, and a "Learn more →" `{component.text-link}`.

**`why-card`** — Compact light cards ("Fast / Flexible / Future-proof") with a small mint icon, short title, and body copy on `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

**`testimonial-card`** — Customer-quote cards on the dark "What our customers say" band. Background `{colors.surface-dark-elevated}`, body text in `{colors.body}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Carries the partner logo, quote, attribution, and a "Read case study →" pill.

### Tabs & Links

**`tab-item`** / **`tab-item-active`** — The "Build / Manage / Secure" switcher above the platform card. Inactive: transparent, `{colors.muted}` text. Active: `{colors.accent-blue}` text with a blue underline indicator. Padding 12px × 16px.

**`text-link`** — Inline links in `{colors.accent-blue}` ("Learn more →", "Explore product →", headline keyword underlines), `{typography.body-md}`.

### Footer

**`footer`** — Dark footer on `{colors.surface-dark}` closing the page, with link columns in `{colors.muted-light}` and the Descope wordmark. Matches the hero's dark mode so the page opens and closes on the same navy floor.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#7deded mint) for primary CTA pills, always with dark `{colors.ink}` text.
- Use `{colors.accent-blue}` (#0085ff) for inline links, active tab states, and underlined headline keywords — never as a button fill.
- Keep Roobert headlines at weight 500 with the measured negative tracking. Pair with Helvetica body.
- Alternate dark and light bands as you scroll — hero/logo/quotes/footer dark, platform/use-cases/why light.
- Outline dark node cards with thin colored inset borders (`{colors.border-navy}` / `{colors.primary-bright}`); reserve the soft layered drop shadow for light cards.
- Show real flow-builder chrome inside `{component.journey-node-card}` rather than painting an illustration of it.
- Use `{rounded.pill}` for all buttons; cards stay at 12–16px.

### Don't
- Don't put body copy in Roobert or headlines in Helvetica — the boundary is strict.
- Don't bold display type past weight 500.
- Don't drop the negative letter-spacing on headlines; it's part of the voice.
- Don't use drop shadows on dark surfaces — depth there comes from inset borders and gradient washes.
- Don't tint primary CTAs blue; the action color is mint, the link color is blue.
- Don't document hover; only default and active/pressed states.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→~36px; journey node graph stacks/collapses; feature & use-case grids 1-up; testimonial carousel single-card |
| Tablet | 768–1024px | Tightened horizontal nav; feature cards 2-up; use-case cards 2-up |
| Desktop | 1024–1440px | Full nav with all menu items; 2-up feature cards; 3-up use-case + why cards |
| Wide | > 1440px | Same as desktop with more outer breathing room; content max width caps |

### Touch Targets
- `{component.button-primary}` / `{component.button-secondary}` pill height from ~11px vertical padding + 16px text comfortably clears tap minimums.
- `{component.tab-item}` padding 12px × 16px gives an adequate tap area.
- `{component.nav-link}` collapses into a full-height mobile menu sheet.

### Collapsing Strategy
- Top nav collapses to a hamburger below tablet.
- The hero journey-node graph (a wide multi-node layout) reflows to vertical stacking or simplifies on narrow viewports.
- Card grids reduce column count rather than shrinking cards.
- The testimonial row becomes a single-card carousel with prev/next controls.

### Image / Chrome Behavior
- Product-UI fragments inside node and platform cards retain native aspect ratios; cards resize around them.
- Partner logos in the logo wall reflow to fewer columns.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key (`{component.journey-node-card}`, `{component.use-case-card}`).
2. Variants (`-active`, `-secondary`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Document default + active/pressed only — never hover.
5. Headlines stay Roobert 500 with negative tracking; body stays Helvetica 400.
6. Respect the dark↔light band alternation; don't stack two same-mode bands without intent.
7. Mint = action, blue = link/active. Keep the two accents in their lanes.

## Known Gaps

- The component analyzer returned anomalous values — `button-primary` measured `radius: 50%`, `padding: 0px`, `color: #c6c6cb`, and `card` / `input` measured `radius: 0px`. These conflict with the screenshot ground-truth (pill buttons, rounded cards), so button/card/input specs here are documented from the reference screenshots and the measured radius/shadow/color tokens rather than the component capture. Exact button padding (11px × 24px) is derived from measured spacing values.
- **Roobert** is a licensed commercial typeface (`fonts_licensed` was empty in the capture, but Roobert is not open-source); an Inter substitute is documented in Typography. The shipped product loads Roobert under its own license.
- The analyzer labeled `#ffffff` as "muted" (h2 color on dark) and `#0a101a` as "ink" — reconciled here as on-dark white text vs. dark ink. Roles were re-derived from contrast context.
- A 14px radius and frequent 11px/15px padding values were measured but not promoted to canonical tokens (treated as off-grid micro-values).
- Exact gradient stops for the hero navy wash were not extracted; only discrete surface hexes (`{colors.surface-dark}`, `{colors.surface-navy}`, `{colors.surface-navy-strong}`) are available.
- Form/input states, error/success validation styling, dropdown menus, and animation/transition timings were not measured and are out of scope.
- Dedicated button label, caption, and nav typography roles were not separately measured; `{typography.body-md}` is referenced for those roles.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/descope/design-md -->
