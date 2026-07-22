---
version: alpha
name: Hookdeck-design-analysis
description: "A developer-infrastructure marketing surface built on warm-white canvas with electric cobalt-blue accents, Figtree display headlines, and JetBrains Mono running text that signals \"this is engineering software.\" The system reads as precise, technical, and quietly confident — soft-gray product cards holding real product UI fragments (event flows, code snippets, terminals), a single near-black \"Built for production\" band that anchors the long scroll, tight 6-8px corner radii, and layered hairline-ring shadows that give cards a crisp, panel-like edge. Brand voltage comes from the cobalt CTA (#0044cc) and from monospace labels that frame every section."
colors:
  primary: "#0044cc"
  primary-active: "#0036a3"
  ink: "#141412"
  ink-soft: "#191917"
  ink-softer: "#1d1d1b"
  body: "#52504a"
  muted: "#7a786e"
  muted-strong: "#525252"
  muted-gray: "#808080"
  hairline: "#cccccc"
  canvas: "#ffffff"
  surface: "#fafafa"
  surface-soft: "#f5f5f5"
  surface-tint: "#e9edf2"
  surface-tint-soft: "#f1f3f5"
  accent-navy: "#2d4156"
  accent-blue: "#668fe0"
  accent-blue-soft: "#99b4eb"
  dark: "#000000"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
typography:
  display-xl:
    fontFamily: "Figtree, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1.8px
  display-lg:
    fontFamily: "Figtree, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -1.2px
  display-md:
    fontFamily: "Figtree, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.64px
  title:
    fontFamily: "Figtree, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08px
  body-mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.429
    letterSpacing: 0.07px
  button:
    fontFamily: "Figtree, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.429
    letterSpacing: 0.07px
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 56px
  section-lg: 96px
components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 6px 6px 6px 12px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 6px 6px 6px 12px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 6px 6px 6px 12px
  eyebrow-label:
    backgroundColor: transparent
    textColor: "{colors.accent-navy}"
    typography: "{typography.body-mono}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: 32px
  product-feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  code-snippet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.sm}"
    padding: 16px
  tool-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    padding: 32px
  dark-band:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: 56px
  stat-block:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: 24px
  cta-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    padding: 56px
---

## Overview

Hookdeck's marketing surface is a developer-infrastructure interface — a warm-white canvas (`{colors.canvas}` — #ffffff) with a single electric cobalt-blue action color (`{colors.primary}` — #0044cc), **Figtree** display headlines, and **JetBrains Mono** running text. The monospace body and uppercase mono labels are the system's strongest signal: this is software for engineers, and the type voice says so before any copy is read.

The page is built from soft-gray product cards (`{colors.surface}` — #fafafa) that hold real product UI fragments — event-flow diagrams, terminals, code snippets, latency charts — rather than marketing illustrations. Hookdeck shows its actual product chrome at small scale inside the editorial flow. Section context is set by short uppercase monospace eyebrow labels ("RECEIVE WEBHOOKS", "SEND WEBHOOKS", "{ PROCESSING BILLIONS OF EVENTS A WEEK }") in a muted navy (`{colors.accent-navy}` — #2d4156).

Type voice splits in two: **Figtree** at weight 600 with tight negative tracking (-0.64 to -1.8px) handles every headline (h1-h4), and **JetBrains Mono** at 14px handles body copy, labels, code, and captions. The hero headline pairs ink (`{colors.ink}` — #141412) text with a single cobalt word ("Never miss a **webhook**") — the only chromatic flourish in the masthead.

The "Built for production" band flips to near-black (`{colors.dark}` — #000000) — the one dark surface on the page. It anchors the long scroll with live-metric charts (cobalt sparklines on black), stat blocks, and compliance badges, then the page returns to white through testimonials, a get-started grid, and a light footer.

**Key Characteristics:**
- Warm-white canvas with a single cobalt CTA (`{colors.primary}` — #0044cc). The blue "Start for free" button carries a soft `rgba(0,68,204,0.5)` glow and a `rgb(0,54,163)` 1px ring; press shifts to `{colors.primary-active}` (#0036a3).
- Two-font system: **Figtree** 600 for all headlines (negative tracking), **JetBrains Mono** 400 for body, labels, and code. Monospace running text is the defining trait.
- Soft-gray product cards (`{colors.surface}` — #fafafa) holding real product UI — flow diagrams, terminals, code, charts — with crisp hairline-ring shadows.
- Uppercase monospace eyebrow labels in `{colors.accent-navy}` frame each section.
- Tight corner radii: `{rounded.sm}` (6px) for buttons, `{rounded.md}` (8px) for cards, `{rounded.xs}` (4px) for inline chips. Almost nothing rounds past 8px except the dark band (`{rounded.lg}` 16px).
- A single near-black "Built for production" band (`{colors.dark}` — #000000) anchors the page; cobalt sparkline charts and white stat numbers live on it.
- Layered hairline-ring shadows (1px `rgba(0,0,0,0.12)` ring + soft drop) give cards a precise, panel-like edge rather than a fluffy float.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #0044cc): The single action color — primary CTAs, the highlighted hero word, link accents. Press state shifts to `{colors.primary-active}` (#0036a3).
- **Accent Navy** (`{colors.accent-navy}` — #2d4156): Uppercase monospace eyebrow labels ("RECEIVE WEBHOOKS"), section context tags. A desaturated blue-gray that pairs with the cobalt without competing.
- **Accent Blue** (`{colors.accent-blue}` — #668fe0) and **Accent Blue Soft** (`{colors.accent-blue-soft}` — #99b4eb): Lighter cobalt tints used inside product UI fragments — flow-line connectors, chart strokes, node dots in the integration diagrams.
- **Surface Tint** (`{colors.surface-tint}` — #e9edf2) and **Surface Tint Soft** (`{colors.surface-tint-soft}` — #f1f3f5): Cool blue-gray fills used for code-snippet panels and highlighted rows inside product fragments.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and nav.
- **Surface** (`{colors.surface}` — #fafafa): The standard card fill — product feature cards, code snippet panels.
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): A slightly cooler/darker neutral fill used for soft section dividers and nested panels.
- **Dark** (`{colors.dark}` — #000000): The "Built for production" band — the only dark surface on the page.

### Text
- **Ink** (`{colors.ink}` — #141412): All headlines and primary text.
- **Ink Soft / Ink Softer** (`{colors.ink-soft}` — #191917, `{colors.ink-softer}` — #1d1d1b): Near-black variants used in dense UI fragments and tabular numerals.
- **Body** (`{colors.body}` — #52504a): Default running-text color for paragraph copy.
- **Muted** (`{colors.muted}` — #7a786e): The most frequent neutral — secondary labels, captions, footer text, logo-strip wordmarks.
- **Muted Strong / Muted Gray** (`{colors.muted-strong}` — #525252, `{colors.muted-gray}` — #808080): Tertiary text and iconography.
- **Hairline** (`{colors.hairline}` — #cccccc): 1px borders on dividers and the faint hero background guides.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on the cobalt button and the dark band.

## Typography

### Font Family
The system runs **Figtree** for all display headlines and **JetBrains Mono** for body, labels, and code. Both are open-source (Google Fonts / SIL OFL) and ship directly — no licensed substitution required. The pairing is the brand voice: a friendly geometric sans for headlines, a monospace for everything an engineer reads.

- **Figtree** (600 weight, -0.64 to -1.8px tracking) — h1, h2, h3, h4, button labels.
- **JetBrains Mono** (400 weight, +0.07px tracking) — body copy, uppercase eyebrow labels, code snippets, captions, footer links.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 600 | 1.2 | -1.8px | Homepage h1 ("Never miss a webhook") — Figtree |
| `{typography.display-lg}` | 40px | 600 | 1.2 | -1.2px | Section heads ("Tools for your entire workflow", "Built for production") — Figtree |
| `{typography.display-md}` | 32px | 600 | 1.25 | -0.64px | Sub-section heads, large stat numbers ("Event Gateway", "Outpost") — Figtree |
| `{typography.title}` | 20px | 600 | 1.4 | 0.08px | Card titles ("CLI", "Console", "Radar") — Figtree |
| `{typography.body-mono}` | 14px | 400 | 1.429 | 0.07px | Body copy, eyebrow labels, code, captions, footer — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.429 | 0.07px | Button labels, nav items — Figtree |

### Principles
The split is strict: every headline is Figtree 600 with negative tracking; everything else is JetBrains Mono 400. The monospace body is intentional — it reads as terminal/code-adjacent and reinforces the developer-infrastructure positioning. Uppercase monospace eyebrow labels are the system's recurring framing device; they precede most section heads.

Display weight holds at 600 across all sizes. Negative letter-spacing scales with size (-1.8px at 60px down to -0.64px at 32px) — without it, Figtree headlines read as off-brand.

### Note on Font Availability
Both Figtree and JetBrains Mono are open-source and ship directly; no substitution is required. If a monospace fallback is needed, `ui-monospace, SFMono-Regular, Menlo, monospace` preserves the tabular character of JetBrains Mono. For Figtree, `Inter` weight 600 with -0.02em tracking is a close approximation.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.section}` 56px · `{spacing.section-lg}` 96px.
- **Highest-frequency steps:** 8px and 12-16px dominate internal padding; 32px is the common card padding; 56px and 96px set the band rhythm.
- **Card internal padding:** `{spacing.xxl}` (32px) for full-width feature cards; `{spacing.xl}` (24px) for tool cards and testimonials.
- **Gutters:** `{spacing.sm}`-`{spacing.md}` (12-16px) between grid cards and inside code panels.

### Grid & Container
- **Max content width:** ~1200px centered.
- **Hero:** centered single-column — h1, sub-head, then a button pair, then the logo strip.
- **Product bands:** a full-width feature card (title + diagram) above a 3-up row of supporting capability cards (Event Gateway, Outpost).
- **Tool grid:** 3-up at desktop (CLI / Console / Radar).
- **Testimonials:** 3-column masonry of quote cards.
- **Footer:** multi-column link list (Product / Tools & References / Learn / Resources / Legal & Compliance).

### Whitespace Philosophy
Hookdeck uses moderate, technical whitespace — band rhythm sits at 56-96px and card padding at 24-32px. The result is dense enough to feel like a product surface (lots of UI fragments shown at once) but structured enough to scan. Eyebrow labels do navigational work that whitespace alone would otherwise carry.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, hero, logo strip |
| Card ring | `rgba(0,0,0,0.04) 0 -2px 0 inset, rgba(0,0,0,0.12) 0 0 0 1px, rgba(0,0,0,0.08) 0 1px 2px` | Default cards (`{component.card}`) — a crisp 1px ring + faint drop |
| Card ring elevated | adds `rgba(0,0,0,0.08) 0 2px 4px` to the above | Hovered/raised product cards |
| Popover / menu | `rgba(0,0,0,0.08) 0 0 0 1px, 0 8px 16px, 0 16px 32px` | Dropdown menus, overlays |
| Cobalt button | `rgba(255,255,255,0.2) 0 0.75px 0 inset, rgba(0,0,0,0.32) 0 1px 2px, rgba(0,0,0,0.16) 0 2px 4px, rgb(0,54,163) 0 0 0 1px` | Primary button resting depth |
| Cobalt glow | `rgba(0,68,204,0.5) 0 0 8px` | Active/focused primary button glow |
| Dark-band controls | `rgba(255,255,255,0.16) 0 -1px 0, rgba(0,0,0,0.4) 0 -2px 0 inset, rgba(255,255,255,0.2) 0 0 0 1px, …` | Buttons/chips inside the black "Built for production" band |
| Underline accent | `rgb(204,218,245) 0 1px 0` / `rgb(0,54,163) 0 1px 0` | Link/input bottom borders, cobalt focus underline |

The elevation philosophy is **precise, not fluffy** — the signature is a tight 1px hairline ring (`rgba(0,0,0,0.12)`) plus a small drop and a 2px inset highlight, which reads as a crisp UI panel edge. The cobalt button carries its own ringed, glowing depth distinct from neutral cards.

### Decorative Depth
- Product UI fragments inside cards (flow diagrams, terminals, charts) carry their own internal chrome and cobalt connector lines — shown as content, not system tokens.
- The dark band uses white-inset shadows to lift controls off black; this inverse-highlight treatment only appears on `{colors.dark}` surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Inline chips, small tags, code-row highlights |
| `{rounded.sm}` | 6px | Buttons, nav items, code-snippet panels (most frequent radius) |
| `{rounded.md}` | 8px | Content cards — feature cards, tool cards, testimonials |
| `{rounded.lg}` | 16px | The dark "Built for production" band container (the single large-radius element) |

### Geometry
Corners stay tight throughout — 6px is the dominant radius, 8px for cards. Nothing rounds past 8px on the light surfaces; only the dark production band uses 16px. Logos in the customer strip retain native aspect ratios; product-fragment imagery sits inside cards with their own internal radii.

## Components

### Top Navigation

**`top-nav`** — White nav bar (`{colors.canvas}`) pinned to the top of every page. Carries the Hookdeck wordmark + link-icon logo at left, a center menu (Products, Use cases, Developers, Docs, Company, Pricing) with dropdown carets, and a right cluster: "Sign in" (`{component.button-secondary}`) and "Get started" (`{component.button-dark}`). Menu items use `{typography.button}` (Figtree 14px / 500).

### Buttons

**`button-primary`** — The signature cobalt CTA ("Start for free"). Background `{colors.primary}` (#0044cc), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.sm}` (6px), padding 6px 6px 6px 12px (asymmetric — the right side holds a small icon/chip). Resting depth includes a `rgb(0,54,163)` 1px ring; active state `button-primary-active` shifts to `{colors.primary-active}` (#0036a3) with a `rgba(0,68,204,0.5)` glow.

**`button-dark`** — The "Get started" nav CTA. Background `{colors.ink}` (#141412), text `{colors.on-primary}`, rounded `{rounded.sm}`, same padding as primary. The dark button is the secondary high-emphasis action in the top nav.

**`button-secondary`** — White/outline button ("Read docs", "Sign in", "Learn more"). Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline ring, rounded `{rounded.sm}`, same padding.

### Labels

**`eyebrow-label`** — Uppercase monospace section tag ("RECEIVE WEBHOOKS", "SEND WEBHOOKS"). Transparent background, text `{colors.accent-navy}`, type `{typography.body-mono}`. Sits directly above section headlines as the recurring framing device. The hero's "{ PROCESSING BILLIONS OF EVENTS A WEEK }" uses the same treatment in `{colors.muted}`.

### Cards & Containers

**`card`** — The base card primitive (measured). Background `{colors.surface}` (#fafafa), rounded `{rounded.md}` (8px), with the signature hairline-ring shadow. Internal padding `{spacing.xxl}` (32px).

**`product-feature-card`** — Large full-width card pairing an `{typography.display-md}` title + eyebrow label + body on the left with a live product-UI diagram (flow graph, integration nodes) on the right. Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}` (24px). Used for "Event Gateway" and "Outpost".

**`code-snippet`** — Inline terminal/code panel inside product cards (curl commands, JSON payloads, filter expressions). Background `{colors.surface}` or `{colors.surface-tint}`, text `{colors.ink}`, type `{typography.body-mono}`, rounded `{rounded.sm}`, padding `{spacing.md}` (16px). Highlighted tokens use cobalt tints.

**`tool-card`** — 3-up cards in the "Tools for your entire workflow" band (CLI / Console / Radar). Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.xl}` (24px). Each carries a product-UI preview at top, a `{typography.title}` heading, a one-line description, and a `{component.button-secondary}` action.

**`logo-strip`** — The customer logo wall under the hero ("ChartMogul, BOLT, Contentful, n8n, YETI…"). Background `{colors.canvas}`, wordmarks tinted `{colors.muted}`, framed by an `{component.eyebrow-label}`. Padding `{spacing.xxl}` (32px).

### Dark Band

**`dark-band`** — The "Built for production" section. Background `{colors.dark}` (#000000), text `{colors.on-dark}`, rounded `{rounded.lg}` (16px), padding `{spacing.section}` (56px). Holds live cobalt sparkline charts, four columns (Dependable at any scale / Developer-first experience / Secure and compliant / Works everywhere you do), compliance badges (SOC2, SCIM, RBAC, SSO), and an integration constellation diagram. The only dark surface on the page.

**`stat-block`** — Big-number metrics inside the dark band ("121ms LIVE LATENCY", "176.2K LIVE TRAFFIC", "100.000% HISTORICAL UPTIME", "100B+ WEBHOOKS PROCESSED"). Transparent background, numerals in `{colors.on-dark}` / `{typography.display-md}`, monospace captions in `{typography.body-mono}`.

### Testimonials & CTA

**`testimonial-card`** — Quote cards in the "Loved by engineering teams" masonry. Background `{colors.canvas}`, body text `{colors.body}`, type `{typography.body-mono}`, rounded `{rounded.md}`, padding `{spacing.xl}` (24px). Each carries a quote, a small avatar/initial, name, and role; some show a customer wordmark (Vercel, gorgias) instead of a photo.

**`cta-card`** — 3-up cards in the "Get started in minutes" band (Send your first event / Explore features / Compare plans). Background `{colors.canvas}`, title `{typography.title}`, rounded `{rounded.md}`, padding `{spacing.xl}` (24px), each closing with a `{component.button-primary}` or `{component.button-secondary}`.

### Footer

**`footer`** — Light footer (`{colors.canvas}`) closing the page. Wordmark + "Hookdeck Technologies Inc. © 2026" at top-left, a multi-column monospace link list (Product / Tools & References / Learn / Resources / Legal & Compliance) in `{colors.muted}` / `{typography.body-mono}`, a 5-star rating mark, and social icons. Padding `{spacing.section}` (56px).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#0044cc) for primary CTAs and the single highlighted hero word. The system is near-monochrome except for cobalt.
- Use Figtree 600 for every headline and JetBrains Mono 400 for body, labels, and code. The monospace running text is the brand — don't replace it with a sans for body copy.
- Precede section heads with an uppercase monospace `{component.eyebrow-label}` in `{colors.accent-navy}`. It's the recurring framing device.
- Show real product UI fragments inside cards (flow diagrams, terminals, charts). Hookdeck demonstrates the product, it doesn't illustrate it.
- Keep corner radii tight — `{rounded.sm}` (6px) for buttons, `{rounded.md}` (8px) for cards. Precision over softness.
- Use the hairline-ring shadow on neutral cards for that crisp panel edge; reserve the cobalt glow for the primary button.
- Limit the dark surface to the single "Built for production" band — it's the page's structural anchor.

### Don't
- Don't introduce additional accent colors. Cobalt + navy + neutral grays is the whole palette.
- Don't set headlines without negative letter-spacing — Figtree at 0 tracking reads as off-brand.
- Don't round cards past `{rounded.md}` (8px) on light surfaces; only the dark band uses `{rounded.lg}` (16px).
- Don't add more dark sections. The black band works because it's singular.
- Don't put body copy in Figtree — keep it JetBrains Mono.
- Don't document or add hover styling beyond the encoded press/active states (cobalt darkens and gains its glow).

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 60→~32px; feature cards stack diagram below text; tool/CTA grids 1-up; testimonial masonry 1-up; footer columns wrap to 1-2 |
| Tablet | 768–1024px | Nav tightens; feature cards keep text/diagram split; tool grid 2-up; testimonials 2-up |
| Desktop | 1024–1440px | Full horizontal nav; 3-up tool and CTA grids; full dark-band 2×2 layout |
| Wide | > 1440px | Same as desktop with more outer margin; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` / `{component.button-dark}` use 6px vertical padding on a 14px label — effective height clears comfortable tap size with the icon chip; ensure ≥40px on touch.
- Nav menu items expand to full-width rows in the mobile sheet.
- Tool-card and CTA actions are full-width buttons on mobile.

### Collapsing Strategy
- Top nav collapses to a hamburger sheet below 768px.
- Product feature cards reflow from side-by-side (text | diagram) to stacked (text over diagram).
- Multi-column grids reduce column count rather than shrinking cards.
- The dark band's 2×2 column layout collapses to a single column; sparkline charts stay full-width and legible.
- Footer link columns wrap from 5-up to 2-up to 1-up.

### Image Behavior
- Product UI fragments scale proportionally inside their cards; flow diagrams may crop edges on narrow viewports.
- Customer logos in the strip retain aspect ratio and reflow to fewer per row.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-feature-card}`, `{component.dark-band}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Figtree 600 with negative tracking; body stays JetBrains Mono 400. The two-font split does not blur.
6. The black band is the only dark surface — don't casually add more.
7. When in doubt about emphasis: bigger Figtree before a second accent color. Cobalt stays scarce.

## Known Gaps

- The measured `body` role resolved to **JetBrains Mono** (from `p.color` / `body_text`), but longer paragraph copy in the hero and cards may render in Figtree at a body size — a separate Figtree body role was not measured and is therefore not declared. Treat any non-headline sans body text as a gap to confirm.
- The analysis flagged a `muted` role at #f5f5f5 sourced from "h2.color (low-contrast text)" — this value is light and reads as a surface, not a text color; it is documented here as `{colors.surface-soft}`. The true low-contrast text tone may differ.
- `button-primary` was measured with `color: #141412` and asymmetric padding (6px 6px 6px 12px); screenshots show the high-emphasis CTA is cobalt (#0044cc) while the dark button (#141412) is the nav "Get started". Both are documented; exact background vs. text-color attribution per measured entry is inferred from ground-truth screenshots.
- Exact card and button heights were not measured; padding is documented from the measured `button` entry and spacing frequencies.
- Cobalt tint values inside product diagrams (`{colors.accent-blue}`, `{colors.accent-blue-soft}`) are observed as connector/chart strokes; their precise per-element usage is product chrome, not system tokens.
- Animation and transition timings (flow-diagram motion, live latency charts, dropdown reveals) are out of scope.
- Form input, validation, and focus states beyond the measured underline-accent shadows were not extracted; a sign-up or console flow would be needed to confirm.
- Docs and pricing pages were captured but component-level extraction here is anchored on the landing page; docs-specific components (sidebars, API reference tables) are not documented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/hookdeck/design-md -->
