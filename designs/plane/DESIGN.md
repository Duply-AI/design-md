---
version: alpha
name: Plane-design-analysis
description: A precise, software-first project-management interface built on a white canvas with near-black ink, Satoshi display headlines, and Inter UI text. The system reads as calm, engineered, and enterprise-credible — generous whitespace, soft 8–12px rounded cards, real product UI fragments shown inside framed surfaces, monochrome logo walls, and full-bleed near-black bands (Plane AI, self-host) that punctuate the long white scroll. Brand voltage comes from the large low-contrast Satoshi headlines and from showing the actual product chrome rather than from color accents.

colors:
  primary: "#000000"
  primary-active: "#171717"
  ink: "#000000"
  ink-strong: "#171717"
  body: "#404040"
  muted: "#9ea2a8"
  slate: "#364153"
  accent-blue: "#006399"
  accent-deep: "#101828"
  accent-tan: "#c9a27e"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-card: "#f7f7f8"
  hairline: "#e4e6e7"
  hairline-strong: "#cacdce"
  border-light: "#e5e7eb"
  border-soft: "#d1d5dc"
  surface-dark: "#0f0f10"
  surface-dark-2: "#181a1b"
  surface-dark-3: "#1a1a1c"
  surface-dark-elevated: "#1d1f20"
  surface-dark-card: "#222425"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "Satoshi, Inter, sans-serif"
    fontSize: 58px
    fontWeight: 430
    lineHeight: 1.3
    letterSpacing: -1.74px
  display-lg:
    fontFamily: "Satoshi, Inter, sans-serif"
    fontSize: 44px
    fontWeight: 430
    lineHeight: 1.3
    letterSpacing: -1.32px
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  ml: 20px
  lg: 24px
  xl: 32px
  xxl: 40px
  group: 44px
  section: 64px
  section-lg: 80px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    height: 56px
    padding: 16px 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  eyebrow-label:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 80px 24px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  logo-wall:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    padding: 40px 24px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  testimonial-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 80px 24px
  dark-product-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 16px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 64px 24px
---

## Overview

Plane's marketing surface is a calm, engineered, software-first interface — white canvas (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #000000), large low-contrast **Satoshi** display headlines, and `{colors.surface-card}` (#f7f7f8) light-gray cards that hold real product UI fragments. The system reads as enterprise-credible without shouting: every band is one eyebrow + one headline + a supporting card grid, surrounded by generous whitespace.

Type voice splits into two roles: **Satoshi** (the display face used for the hero h1 and section h2 — geometric, weight 430, deep negative letter-spacing) and **Inter** (everything else — eyebrows, body, buttons, nav, card titles). The Satoshi headlines are large but low-contrast in weight (430, lighter than a typical bold), which gives the page its quiet, precise feel.

Component voltage comes from **product UI fragments shown directly inside framed cards** — the actual Plane app chrome (work-item lists, wiki pages, AI activity panels, dashboards) rendered at small scale inside white and light-gray cards. Plane shows the product rather than painting illustrations of it.

The page rhythm alternates white editorial bands with **full-bleed near-black bands** (`{colors.surface-dark}` — #0f0f10) for the "Plane AI" and "Self-host" sections, and closes on a dark footer. The dark bands are the only non-white surfaces — they punctuate the long white scroll and visually segment the narrative.

**Key Characteristics:**
- White canvas with a near-black primary CTA (`{colors.primary}` — #000000). Buttons read as solid black pills with weight-400 Inter labels (derived: the measured button selector returned a zeroed radius/padding, so radius is taken from the system's `{rounded.md}` 8px scale and screenshot ground-truth).
- Satoshi display type for headlines (h1 58px / h2 44px, weight 430, negative tracking). Inter for all supporting text.
- Light-gray card surfaces (`{colors.surface-card}` — #f7f7f8) for feature cards and testimonials, mostly with `{rounded.md}` (8px) corners and no shadow.
- Product UI fragments embedded directly in cards — work-item tables, wiki editors, AI activity timelines, dashboards shown as the actual product chrome.
- Monochrome logo wall — customer logos rendered in muted gray (`{colors.muted}` — #9ea2a8), no color.
- Full-bleed near-black bands (`{colors.surface-dark}` — #0f0f10) for Plane AI and self-host narratives, plus the footer. The dark bands are the system's only non-white surfaces.
- Blue eyebrow labels (`{colors.accent-blue}` — #006399) sit above headlines as the system's one recurring accent.
- Border radius is hierarchical: `{rounded.md}` (8px) the dominant card/button radius, `{rounded.lg}` (12px) for larger product-mockup frames, `{rounded.xl}` (16px) reserved for the largest hero artifacts.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #000000): The dominant action color. All primary CTAs ("Try Plane Business", "Get started free"). Press state shifts to `{colors.primary-active}` (#171717).
- **Accent Blue** (`{colors.accent-blue}` — #006399): The recurring accent — used on eyebrow labels above headlines ("THE PLATFORM", "CORE CAPABILITIES") and small in-product highlights. Plane is near-monochrome; the blue appears only in small doses.
- **Accent Deep** (`{colors.accent-deep}` — #101828): A very dark slate-navy used on small UI accents and dark text moments inside product fragments.
- **Accent Tan** (`{colors.accent-tan}` — #c9a27e): A muted tan that appears in product UI fragments / illustrations — a rare warm note in an otherwise neutral palette.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Very-soft section backgrounds and dividers.
- **Surface Card** (`{colors.surface-card}` — #f7f7f8): Feature cards, testimonial cards, light card fills.
- **Surface Dark** (`{colors.surface-dark}` — #0f0f10): Full-bleed dark bands (Plane AI, self-host) and the footer.
- **Surface Dark 2 / 3** (`{colors.surface-dark-2}` — #181a1b, `{colors.surface-dark-3}` — #1a1a1c): Nested near-black surfaces inside the dark bands.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1d1f20): Cards floated on top of the dark bands.
- **Surface Dark Card** (`{colors.surface-dark-card}` — #222425): The lightest dark surface — nested cards/inputs inside dark bands.

### Borders / Hairlines
- **Hairline** (`{colors.hairline}` — #e4e6e7): The default 1px divider/border tone on light surfaces.
- **Hairline Strong** (`{colors.hairline-strong}` — #cacdce): A slightly heavier divider for emphasis.
- **Border Light** (`{colors.border-light}` — #e5e7eb): Card outline border alternative.
- **Border Soft** (`{colors.border-soft}` — #d1d5dc): Soft input/control borders inside product fragments.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text.
- **Ink Strong** (`{colors.ink-strong}` — #171717): Secondary near-black text and the pressed primary button.
- **Body** (`{colors.body}` — #404040): Default running-text color.
- **Slate** (`{colors.slate}` — #364153): Sub-headings and secondary labels.
- **Muted** (`{colors.muted}` — #9ea2a8): Tertiary text, logo-wall logos, footer body.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on the black button and dark bands.

## Typography

### Font Family
The system runs **Satoshi** for display headlines and **Inter** for everything else. Satoshi is a geometric grotesque used at weight 430 (a custom-tuned light-medium) with deep negative letter-spacing — this is what gives Plane's headlines their large-but-quiet, precise character. Inter handles eyebrows, body copy, buttons, nav, and card titles at weight 400.

The split is functional:
- Satoshi (display, weight 430, -1.3 to -1.7px tracking) — h1, h2
- Inter (body + UI, weight 400, 0 tracking) — eyebrows, paragraphs, labels, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 58px | 430 | 1.3 | -1.74px | Hero h1 ("Project management and knowledge management for teams and agents") — Satoshi |
| `{typography.display-lg}` | 44px | 430 | 1.3 | -1.32px | Section heads ("Four products in one workspace", "AI that works because it knows your context") — Satoshi |
| `{typography.title}` | 16px | 400 | 1.5 | 0 | Card titles, h3 — Inter |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | Default running-text, sub-heads — Inter |
| `{typography.button}` | 16px | 400 | 1.5 | 0 | Button labels, nav links, eyebrow labels — Inter |

### Principles
Satoshi is the brand voice — every display headline uses it at weight 430 with negative tracking. Inter handles all supporting type at weight 400. The headline contrast comes from size and tracking, not from heavy weight — never bold the Satoshi headlines beyond their measured 430. Card titles and body sit at the same 16px Inter scale; hierarchy inside cards comes from position and color, not large type-size jumps.

### Note on Font Substitutes
Satoshi ships via Fontshare under its own license; if it is unavailable, **Inter** at a light-medium weight with -0.03em letter-spacing is a usable approximation, though Inter's humanist forms differ from Satoshi's geometric character. **Manrope** at weight 500 is another close geometric alternative. Inter itself is open-source and ships directly.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.ml}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.group}` 44px · `{spacing.section}` 64px · `{spacing.section-lg}` 80px.
- **Section padding:** `{spacing.section-lg}` (80px) is the dominant vertical rhythm between major bands; `{spacing.section}` (64px) for tighter band gaps and footer padding.
- **Card internal padding:** `{spacing.lg}` (24px) for feature and testimonial cards; `{spacing.md}` (16px) for product-mockup frames.
- **Gutters:** `{spacing.lg}` (24px) and `{spacing.md}` (16px) between cards in 2-up and 4-up grids.

### Grid & Container
- **Editorial body:** centered single-column hero (centered h1 + sub-head + button row), then multi-column card grids below.
- **Feature grids:** 2-up at desktop ("Four products" grid), 4-up at desktop for the lower capability tiles.
- **Logo wall:** multi-row monochrome logo grid (roughly 6-up to 9-up) centered under the hero.
- **Footer:** multi-column link list on the dark surface.

### Whitespace Philosophy
Plane uses generous whitespace — 80px between major bands and 24px card padding — to keep each band scannable. The hero is centered with large air around the headline; supporting bands hold one eyebrow + one h2 + a card grid. The result reads as calm, confident enterprise software rather than dense feature-listing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero band |
| Soft hairline | 1px `{colors.hairline}` border | Card outlines, dividers, product-fragment frames |
| Card surface | `{colors.surface-card}` background — no shadow | Feature cards, testimonial cards |
| Dark band | `{colors.surface-dark}` full-bleed | Plane AI band, self-host band, footer |
| Dark elevated | `{colors.surface-dark-elevated}` / `{colors.surface-dark-card}` | Cards floated on top of the dark bands |

The measured analysis returned **no shadow tokens** and `shadow: none` on the card component — Plane's elevation is done with **surface color and hairline borders, not drop shadows**. Depth comes from light-gray vs. white vs. near-black surface contrast and from the product UI fragments carrying their own internal chrome.

### Decorative Depth
- Product UI fragments inside cards carry their own internal shadows and borders from the actual product UI — these are product chrome shown as content, not system tokens.
- The dark bands occasionally float a brighter product card (a blue-tinted work-item screenshot) on top of `{colors.surface-dark}` — color contrast does the elevation work without a shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Rare — small inline chips/accents |
| `{rounded.sm}` | 6px | Small controls inside product fragments |
| `{rounded.md}` | 8px | The dominant radius — buttons, feature cards, most surfaces |
| `{rounded.lg}` | 12px | Larger product-mockup frames, dark floated cards |
| `{rounded.xl}` | 16px | Reserved for the largest hero/product artifacts |

8px (`{rounded.md}`) is by far the most-used radius (measured 36 occurrences), followed by 12px (`{rounded.lg}`). Larger radii are reserved and used sparingly. The overall feel is softly-rounded-but-restrained — professional software, not consumer app.

### Photography / Artifact Geometry
Product screenshots and UI fragments are framed inside `{rounded.lg}` (12px) or `{rounded.xl}` (16px) containers. The largest hero app-mockup uses the bigger radius; smaller in-card fragments use 8–12px.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page. `{colors.canvas}` background, ink wordmark + logo at left ("Plane" with the brand mark), center menu (Product, Solutions, Resources, Pricing, Self-host Plane), and a right cluster with "Contact sales" + "Login" text links and a `{component.button-primary}` ("Get started free"). Menu items in `{typography.button}` (Inter 16px / 400).

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#000000), text `{colors.on-primary}`, type `{typography.button}` (Inter 16px / 400), rounded `{rounded.md}` (8px), padding ~12px × 20px. Active state `button-primary-active` shifts to `{colors.primary-active}` (#171717). (Radius/padding derived from the system scale + screenshot ground-truth — see Known Gaps.)

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same radius/padding as primary. Used as the secondary action ("Talk to a human →", "Talk to a migration expert →").

**`eyebrow-label`** — Small uppercase accent label above headlines. Transparent background, `{colors.accent-blue}` (#006399) text, `{typography.button}`. Used as "THE PLATFORM", "CORE CAPABILITIES", "PLANE AI".

### Cards & Containers

**`hero-band`** — Centered white-canvas hero: eyebrow label, h1 in `{typography.display-xl}`, a sub-head in `{typography.body}`, a button row (`{component.button-primary}` + `{component.button-secondary}`), and a large product-mockup card below. Vertical padding `{spacing.section-lg}` (80px).

**`product-mockup-card`** — A framed card showing the actual Plane product UI (work-item table, wiki editor, dashboards). Background `{colors.canvas}`, 1px hairline border, rounded `{rounded.lg}` (12px), padding `{spacing.md}` (16px). The product chrome inside has its own internal styling — these cards display the product, they don't decorate around it.

**`feature-card`** — Used in the "Four products in one workspace" 2-up grid and the lower capability tiles. Background `{colors.surface-card}` (#f7f7f8), rounded `{rounded.md}` (8px), padding `{spacing.lg}` (24px). Carries a small icon + label at top, a title in `{typography.title}`, a body description in `{typography.body}`, and an embedded product fragment.

**`logo-wall`** — Centered monochrome customer-logo grid below the hero. Background `{colors.canvas}`, logos rendered in `{colors.muted}` (#9ea2a8). Padding `{spacing.xxl}` (40px) vertical. No color — the wall is deliberately desaturated.

**`testimonial-card`** — Customer-quote card. Background `{colors.surface-card}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Carries a logo/name + role and the quote in `{typography.body}`.

**`testimonial-card-featured`** — The lead testimonial that flips to a dark surface. Background `{colors.surface-dark}` (#0f0f10), text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. The dark surface is the featured signal.

### Dark Bands

**`cta-band-dark`** — Full-bleed near-black bands ("AI that works because it knows your context", "Self-host without compromise"). Background `{colors.surface-dark}` (#0f0f10), text `{colors.on-dark}`, h2 in `{typography.display-lg}`, body in `{typography.body}`, and a button row. Vertical padding `{spacing.section-lg}` (80px). These bands punctuate the white scroll.

**`dark-product-card`** — A product-mockup card floated on top of a dark band. Background `{colors.surface-dark-elevated}` (#1d1f20), text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.md}`. Holds the AI activity-timeline / work-item screenshot.

### Footer

**`footer`** — Dark footer that closes the page. Background `{colors.surface-dark}` (#0f0f10), text `{colors.muted}` (#9ea2a8), type `{typography.body}`. Multi-column link list (Prime CLI, Docker and Kubernetes, God Mode, etc.) with the Plane wordmark in `{colors.on-dark}`. Vertical padding `{spacing.section}` (64px).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#000000) for primary CTAs. Plane's button is solid black, never blue.
- Use Satoshi for every display headline at weight 430 with negative tracking. Pair with Inter for everything else.
- Let headline contrast come from size + tracking, not heavy weight — never bold Satoshi beyond its measured 430.
- Use `{colors.accent-blue}` (#006399) only on eyebrow labels and small in-product accents. Keep it scarce.
- Embed real Plane product UI fragments inside cards. Show the product, don't illustrate around it.
- Use the full-bleed dark bands (`{colors.surface-dark}`) to punctuate the white scroll and segment the AI / self-host narratives.
- Render the logo wall in monochrome `{colors.muted}` gray — never colored logos.
- Default to `{rounded.md}` (8px) for cards and buttons; reserve 12–16px for the largest product frames.

### Don't
- Don't add drop shadows — the system has no shadow tokens; depth is surface-color + hairline borders only.
- Don't use accent blue on primary CTAs or large surfaces — it's an eyebrow/accent color, not an action color.
- Don't introduce radii beyond `{rounded.xl}` (16px) — larger radii read as consumer-app, not professional software.
- Don't scatter dark surfaces casually — they're reserved for the AI band, self-host band, footer, and the single featured testimonial.
- Don't put body copy in Satoshi or headlines in Inter — the two-family boundary is strict.
- Don't document hover state styling beyond press — primary darkens to `{colors.primary-active}`; nothing else changes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 58→~32px; product-mockup card stacks full-width; feature grids 1-up; logo wall wraps to 2–3 per row; dark-band cards stack |
| Tablet | 768–1024px | Top nav tightens but stays horizontal; feature grids 2-up; logo wall 4–6 per row |
| Desktop | 1024–1440px | Full top-nav with all menu items; "Four products" grid 2-up; capability tiles 4-up |
| Wide | > 1440px | Same as desktop with more outer breathing room; centered max content width |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` are full-height pill buttons comfortably above 40px tall.
- Top-nav links use `{typography.button}` (16px) with surrounding padding to reach tap-friendly size.
- The measured component returned a zeroed button radius/padding (likely a link-element CTA); effective hit area is taken from screenshot ground-truth.

### Collapsing Strategy
- Top nav collapses to a hamburger at < 768px.
- The centered hero stacks: eyebrow → h1 → sub-head → buttons → product-mockup card.
- Feature grids reduce columns (4 → 2 → 1) rather than scaling cards down.
- Dark bands stay full-bleed at every breakpoint; their floated product cards stack on mobile.
- Logo wall reflows to fewer logos per row.

### Image Behavior
- Product UI fragments retain native aspect ratios; the framing cards resize around them.
- The hero app-mockup scales proportionally on mobile while keeping the work-item table legible.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.cta-band-dark}`).
2. Variants of an existing component (`-active`, `-featured`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Satoshi 430 with negative tracking. Body stays Inter 400. The pairing does not blur.
6. The dark bands are the only non-white surfaces — don't add other dark cards casually.
7. Depth is surface-color + hairline, never shadow.
8. When in doubt about emphasis: bigger Satoshi before bolder Satoshi.

## Known Gaps

- The measured `button-primary` component returned `radius: 0px` and `padding: 0px` — Plane renders its CTAs as styled link/wrapper elements that the button selector reads as zeroed. Button radius (`{rounded.md}` 8px) and padding are therefore derived from the system radius scale + screenshot ground-truth; exact values should be confirmed against source.
- No shadow tokens were captured (`shadows: []`, card `shadow: none`). The system appears to be shadow-free, but subtle elevation on floated product cards could exist below the measurement threshold.
- Typography only captured h1, h2, h3/body/button — no distinct caption, small-label, or code roles were measured. Eyebrow labels are documented from screenshot ground-truth using the Inter button role.
- Satoshi's exact weight axis (measured 430) is unusual; the rendered weight may depend on the variable-font setup. Open-source substitutes are documented in the Typography section.
- Spacing values 6px, 18px, 28px, 45px, and 48px appeared at low frequency and are treated as incidental; only the dominant steps are tokenized.
- The `{colors.accent-tan}` (#c9a27e) and `{colors.accent-deep}` (#101828) hues were measured but their precise usage (inside product fragments / illustrations) is inferred from screenshots, not confirmed per-element.
- Pricing and solutions pages were captured but their unique components (pricing tiers, comparison tables) were not surfaced in the measured component set and are out of scope here.
- Form inputs, validation states, and animation/transition timings were not extracted.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/plane/design-md -->
