---
version: alpha
name: Grafbase-design-analysis
description: A precise, monochrome developer-platform interface built on a white canvas with near-black ink, oversized Inter display headlines with aggressive negative tracking, and light-gray product/feature cards. The system reads as engineering-grade and confident — minimal color, heavy display weight, generous whitespace, and real product UI (dashboard charts, integration tiles, throughput bars) shown directly inside cards. A single soft drop shadow and a tight grayscale palette do all the elevation work.

colors:
  ink: "#1b1b1b"
  body: "#606060"
  muted: "#7c7c7c"
  muted-cool: "#60646c"
  hairline: "#eaeaea"
  canvas: "#ffffff"
  surface-soft: "#fcfcfc"
  surface-softer: "#fbfbfb"
  surface-tint: "#f9f8f9"
  surface-accent: "#fcfcfd"
  on-primary: "#ffffff"
  black: "#000000"

typography:
  display-xl:
    fontFamily: "Inter, sans-serif"
    fontSize: 90px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -4.5px
  display-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  sm: 6px
  md: 12px
  lg: 20px
  xl: 40px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  huge: 64px

components:
  announcement-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    padding: 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 24px
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 16px 24px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 16px 24px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 48px
  dashboard-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  dashboard-mockup-sidebar:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    padding: 24px
  logo-bar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    padding: 32px
  feature-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  extension-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px
  comparison-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  throughput-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: 48px
  carousel-arrow-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    size: 44px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    padding: 64px
---

## Overview

Grafbase's marketing surface is a precise, monochrome developer-platform interface — white canvas (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #1b1b1b), oversized Inter display headlines, and light-gray feature/product cards. The system reads as engineering-grade and self-assured: it doesn't sell with color, it sells with scale, whitespace, and real product chrome shown directly inside cards.

The type voice is a single family — **Inter** — pushed hard at the top of the hierarchy. The hero h1 runs 90px / weight 700 with an aggressive **-4.5px** letter-spacing, which compresses the headline into a dense, architectural block ("Unify your APIs. Govern your AI."). Section heads drop to 40px / 700 with -1px tracking. Body copy is a comfortable 20px / 400. The contrast between the giant tracked-tight headlines and the calm 20px body is the system's primary signature.

Component voltage comes from **real product UI shown in-card** — a full dashboard mockup (sidebar nav + request/latency line charts) anchors the hero's right side, integration tiles (Snowflake, NATS, Kafka, Postgres, gRPC, REST, JWT) sit in a row of bordered tiles, and a throughput bar-chart card compares Grafbase against competitors. Grafbase shows the product, it doesn't illustrate around it.

The palette is almost entirely grayscale: `{colors.ink}` for headlines and primary buttons, `{colors.body}` (#606060) and `{colors.muted}` (#7c7c7c) for running text, `{colors.hairline}` (#eaeaea) for borders, and a stack of near-white surfaces (`{colors.surface-soft}`, `{colors.surface-softer}`, `{colors.surface-tint}`) for card fills. Elevation is handled by a single soft drop shadow.

**Key Characteristics:**
- White canvas with near-black primary CTA (`{colors.ink}` — #1b1b1b). Buttons are softly rounded (`{rounded.sm}` — 6px) with calm weight-400 Inter labels — restraint, not shout.
- Oversized Inter display headlines: 90px / 700 / -4.5px tracking for h1. The negative letter-spacing is the brand's defining typographic move.
- Light-gray card surfaces (`{colors.surface-soft}` — #fcfcfc) for feature cards, comparison cards, and the throughput card. Cards lean on hairline borders and faint fills, not heavy shadow.
- Real product UI fragments inside cards — dashboard charts, integration tiles, throughput bars. The marketing flow embeds the actual product chrome.
- A single soft elevation token: `rgba(0,0,0,0.15) 0px 4px 20px 0px` — used sparingly on the floating elements (dashboard card, carousel controls).
- Hierarchical radius: `{rounded.sm}` (6px) for buttons, `{rounded.md}` (12px) for tiles + mockup cards, `{rounded.lg}` (20px) for content cards, `{rounded.xl}` (40px) for pill/circular carousel controls.
- Generous whitespace and a 4px-based spacing rhythm clustered at 8 / 16 / 24px, opening to 48 / 64px between major bands.

## Colors

The system is near-monochrome. Every measured color sits on a grayscale axis from #1b1b1b down to #ffffff; there is no measured accent hue.

### Ink & Text
- **Ink** (`{colors.ink}` — #1b1b1b): The dominant dark — all display headlines, primary button fill, primary button label. The most frequent color in the system (frequency 293).
- **Body** (`{colors.body}` — #606060): Default running-text gray for paragraphs and supporting copy.
- **Muted** (`{colors.muted}` — #7c7c7c): Secondary text — captions, nav sub-labels, footer links, dashboard sidebar labels.
- **Muted Cool** (`{colors.muted-cool}` — #60646c): A slightly cooler gray used on auxiliary UI text inside product mockups.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and the fill behind the hero, nav, and extension tiles.
- **Surface Soft** (`{colors.surface-soft}` — #fcfcfc): Feature cards, comparison cards, throughput card, logo bar — the standard "card" fill, barely off-white.
- **Surface Softer** (`{colors.surface-softer}` — #fbfbfb): An alternate near-white panel fill.
- **Surface Tint** (`{colors.surface-tint}` — #f9f8f9): The dashboard mockup sidebar fill — the warmest of the near-whites.
- **Surface Accent** (`{colors.surface-accent}` — #fcfcfd): A faint cool-white used as a subtle accent panel (lowest frequency, labeled accent in measurement).
- **Hairline** (`{colors.hairline}` — #eaeaea): The 1px border tone for cards, tiles, dividers, and input outlines.
- **Black** (`{colors.black}` — #000000): Pure black, used sparingly inside product UI/icons.

### On-Dark
- **On Primary** (`{colors.on-primary}` — #ffffff): White text/icon color on the dark primary button and on the dark announcement bar.

## Typography

### Font Family
The system runs **Inter** for everything — display, body, buttons, nav. There is no secondary face. Inter is open-source (Google Fonts / SIL OFL), so no substitution is required; ship Inter directly with a `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` fallback stack.

The personality comes entirely from how Inter is deployed: enormous display weights with severe negative tracking up top, calm 400-weight reading text below.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 90px | 700 | 1.0 | -4.5px | Hero h1 ("Unify your APIs. Govern your AI.") |
| `{typography.display-md}` | 40px | 700 | 1.1 | -1px | Section heads ("Customize and enable AI agents…", "Why Grafbase?", "Get Started") |
| `{typography.body}` | 20px | 400 | 1.5 | normal | Running text, sub-headlines, card descriptions |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button labels, nav links, footer links, small UI labels |

### Principles
Hierarchy is driven by **size and tracking**, not color. The h1's -4.5px letter-spacing is the single most distinctive type decision — it packs the headline into a tight, monumental block. As headings shrink, the negative tracking eases (-4.5px → -1px → normal) so body copy reads at a relaxed default. Display weight stays at 700; body and buttons stay at 400 — there is no measured intermediate weight (500/600), so emphasis comes from jumping size tiers rather than nudging weight.

### Note on Font Substitutes
No licensed/custom typefaces were detected (`fonts_licensed` is empty). Inter is freely available; no substitute needed.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.huge}` 64px.
- **Most common rhythm:** 24px (frequency 32) and 8px (frequency 29) dominate — 24px between grouped content, 8px inside compact clusters (icon+label, button internals). 16px (frequency 24) is the standard component gap.
- **Card internal padding:** `{spacing.lg}` (24px) for feature, comparison, dashboard, and throughput cards.
- **Section/footer padding:** `{spacing.xxl}` (48px) between major editorial bands, `{spacing.huge}` (64px) on the footer.

Note: several off-grid values were measured (6, 10, 14, 15, 20, 28, 44px). The 14px and 28px clusters appear frequently enough (13 each) to be intentional secondary steps; they are folded into the nearest documented tokens above rather than promoted.

### Grid & Container
- **Hero:** Two-column split — display headline + sub-head + button row on the left, `{component.dashboard-mockup-card}` on the right.
- **Feature grids:** 2-up cards for the primary feature band; 3-up for the "Why Grafbase?" band.
- **Extension tiles:** A single horizontal row of 7 bordered tiles.
- **Comparison cards:** A horizontally scrollable row with `{component.carousel-arrow-button}` controls.
- **Footer:** Multi-column link list (Resources / Company / Compliance) under the wordmark.

### Whitespace Philosophy
Whitespace is generous and deliberate. The hero gives the 90px headline room to breathe, and bands separate with large vertical gaps. Cards are calm and uncrowded — the density lives inside the embedded product UI, not in the marketing copy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero text column |
| Hairline | 1px `{colors.hairline}` border | Extension tiles, secondary buttons, card outlines, dividers |
| Card surface | `{colors.surface-soft}` fill, no shadow | Feature cards, comparison cards, throughput card |
| Soft float | `rgba(0, 0, 0, 0.15) 0px 4px 20px 0px` | Floating dashboard mockup, carousel controls — the system's single drop-shadow token |

The elevation philosophy is **flat-with-one-shadow**. Almost everything sits flush on the canvas or is defined by a hairline border; the lone measured box-shadow (`rgba(0,0,0,0.15) 0px 4px 20px 0px`, frequency 3) is reserved for genuinely floating elements. No layered shadows, no glassmorphism.

### Decorative Depth
- The dashboard mockup card carries faint internal chart lines (request/latency graphs) — these are product chrome rendered as content, not system tokens.
- Feature cards use soft radial/ring background textures behind icons (visible in the "Why Grafbase?" band) — decorative, low-contrast, monochrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Buttons, small controls (most frequent radius, frequency 15) |
| `{rounded.md}` | 12px | Extension tiles, dashboard mockup card |
| `{rounded.lg}` | 20px | Feature cards, comparison cards (frequency 7) |
| `{rounded.xl}` | 40px | Pill/circular carousel controls and circular play buttons |

### Geometry
Corners stay modest on interactive elements (6px buttons) and open up on content cards (20px). The largest radius (40px) appears only on small circular controls — the round "play" and carousel-arrow buttons. Logos and integration glyphs sit inside square tiles with the 12px radius.

## Components

### Announcement Bar

**`announcement-bar`** — A full-width strip pinned above the nav carrying the acquisition notice ("Grafbase has been acquired by The Guild!"). `{colors.ink}` background placeholder with `{colors.on-primary}` text in `{typography.button}`, padding `{spacing.xs}` (8px). NOTE: the live bar renders in a brand green that was **not** captured in measurement — see Known Gaps; the token here is a faithful-grayscale stand-in.

### Top Navigation

**`top-nav`** — White nav bar with the Grafbase wordmark + logo at left, a center menu (Products, Solutions, Resources, Extensions, Docs, Pricing, Contact) with a GitHub star count, and a right cluster: theme toggle, `{component.button-secondary}` "Sign in", and `{component.button-primary}` "Get started". `{colors.canvas}` background, `{typography.button}` links, padding `{spacing.md}` × `{spacing.lg}`.

### Buttons

**`button-primary`** — The signature CTA ("Get started", "Try it for free"). `{colors.ink}` background, `{colors.on-primary}` label, `{typography.button}` (Inter 16px / 400), rounded `{rounded.sm}` (6px — derived; the component selector measured a 0px inner span, but the visible button silhouette carries the 6px dominant radius), padding `{spacing.md}` × `{spacing.lg}`.

**`button-secondary`** — White button with hairline outline ("Contact Sales", "Sign in", "Speak to our team"). `{colors.canvas}` background, `{colors.ink}` label, 1px `{colors.hairline}` border, same radius and label type as primary.

**`button-ghost`** — Subtle bordered/transparent action used for "Read more", "Compare", and "Explore extensions". Transparent background, `{colors.ink}` label, `{rounded.sm}`, padding `{spacing.sm}` × `{spacing.md}`.

### Hero & Product Mockup

**`hero-band`** — Two-column hero: `{typography.display-xl}` headline + `{typography.body}` sub-line ("Enterprise-grade governance, control, and observability…") + button row at left, dashboard mockup at right. `{colors.canvas}` background, vertical padding `{spacing.xxl}` (48px).

**`dashboard-mockup-card`** — The floating product card showing the actual Grafbase console: an "api@main" header, request/latency line charts, and deployment/checks rows. `{colors.canvas}` background, rounded `{rounded.md}` (12px), padding `{spacing.lg}`, carries the soft float shadow `rgba(0,0,0,0.15) 0px 4px 20px 0px`.

**`dashboard-mockup-sidebar`** — The left rail inside the mockup (Overview, Schema, Explorer, Proposals, Analytics, Traces, Checks, Subgraphs, Deployments, Settings). `{colors.surface-tint}` fill, `{colors.muted}` labels in `{typography.button}`, padding `{spacing.lg}`.

### Cards & Containers

**`logo-bar`** — The customer logo strip (commercetools, Pantheon, PSCU, cruisecritic, SQLI). `{colors.surface-soft}` background, `{colors.muted}` monochrome logos, padding `{spacing.xl}` (32px).

**`feature-card`** — Used in the feature grids ("Powerful customization options", "Self-hosting for control and security"). `{colors.surface-soft}` fill, rounded `{rounded.lg}` (20px), padding `{spacing.lg}` (24px). Carries an embedded product/illustration zone, a bold title, a `{typography.body}` description, and a `{component.button-ghost}` "Read more".

**`extension-tile`** — Square bordered tiles for the integrations row (Snowflake, NATS, Kafka, Postgres, gRPC, REST, JWT). `{colors.canvas}` background, 1px `{colors.hairline}` border, rounded `{rounded.md}` (12px), padding `{spacing.md}`, label in `{typography.button}`.

**`throughput-card`** — The performance comparison card with horizontal bar chart (Grafbase 1502 req/s vs Cosmo / Apollo / Hive). `{colors.surface-soft}` fill, rounded `{rounded.md}`, padding `{spacing.lg}`.

**`comparison-card`** — Cards in the "Scale with the fastest…" carousel ("Struggling with Apollo's…", "Frustrated with Hive's…"). `{colors.surface-soft}` fill, rounded `{rounded.lg}`, padding `{spacing.lg}`, with a `{component.button-ghost}` "Compare" action.

**`carousel-arrow-button`** — Circular previous/next control beneath the comparison carousel. `{colors.canvas}` background, `{colors.ink}` icon, rounded `{rounded.xl}` (40px), ~44px diameter, soft float shadow.

### CTA & Footer

**`cta-band`** — The pre-footer "Get Started" band. `{colors.canvas}` background, `{typography.display-md}` heading, sub-line, and a row of `{component.button-primary}` + `{component.button-secondary}` + `{component.button-ghost}` ("Try it for free", "Speak to our team", "Read the docs"). Padding `{spacing.xxl}`.

**`footer`** — White footer closing the page. `{colors.canvas}` background, `{colors.muted}` link text in `{typography.button}`, multi-column link list (Resources / Company / Compliance) under the wordmark and social icons. Padding `{spacing.huge}` (64px).

## Do's and Don'ts

### Do
- Reserve `{colors.ink}` (#1b1b1b) for headlines and the primary CTA. The button is near-black, not colored.
- Use Inter at 700 with heavy negative tracking for display headlines — the -4.5px (h1) / -1px (h2) signature is the brand voice.
- Keep body copy at `{typography.body}` (20px / 400 / normal tracking). The size jump between display and body carries the hierarchy.
- Fill feature and comparison cards with `{colors.surface-soft}` and define their edges with `{colors.hairline}` — let the near-whites separate softly.
- Embed real product UI inside cards (dashboard charts, integration tiles, throughput bars) instead of decorative illustration.
- Use the single soft float shadow only for genuinely floating elements (dashboard mockup, carousel controls).
- Keep the palette grayscale; let scale and whitespace, not color, do the persuading.

### Don't
- Don't introduce extra weights between 400 and 700 — the system jumps size tiers, it doesn't nudge weight.
- Don't soften the h1 tracking; without -4.5px the headline loses its architectural density.
- Don't stack multiple shadows or add glass/gradient effects — one soft drop shadow is the whole elevation language.
- Don't push card radius past `{rounded.lg}` (20px); the 40px radius is reserved for circular controls only.
- Don't add hover-state styling beyond default and pressed.
- Don't paint marketing illustrations where the actual product UI could be shown instead.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down from 90px; dashboard mockup stacks below the headline; feature grids collapse to 1-up; footer columns stack |
| Tablet | 768–1024px | Nav tightens; feature grid 2-up holds; comparison carousel shows ~2 cards |
| Desktop | 1024–1440px | Full horizontal nav; hero two-column split; 2-up and 3-up feature grids; 7 extension tiles in a row |
| Wide | > 1440px | Same as desktop with more outer breathing room |

### Touch Targets
- `{component.button-primary}` / `{component.button-secondary}` carry `{spacing.md}` × `{spacing.lg}` padding, comfortably exceeding 44px tap height.
- `{component.carousel-arrow-button}` is ~44px diameter — meets the WCAG target.
- Extension tiles are large square hit areas.

### Collapsing Strategy
- The hero's two-column split stacks to single-column on mobile (headline + sub-head + buttons first, dashboard mockup below).
- Feature grids reduce column count rather than shrinking card content.
- The extension-tile row and comparison carousel become horizontally scrollable on narrow viewports.
- The footer's link columns wrap to stacked groups.

### Image Behavior
- The dashboard mockup and embedded charts retain native aspect ratios and scale proportionally.
- Customer logos in the `{component.logo-bar}` stay monochrome and wrap as needed.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.dashboard-mockup-card}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Inter 700 with negative tracking; body stays Inter 400 at 20px. Don't blur the two tiers.
6. The palette is grayscale by intent — resist adding accent color to CTAs or cards until a brand hue is properly measured.
7. When in doubt about emphasis: bigger Inter before bolder Inter.

## Known Gaps

- **Brand green not measured.** The live site uses a green accent (visible in the announcement bar, the dashboard chart lines, and the throughput bars). No green hex appears in the measured palette, so it is intentionally omitted from tokens. The `{component.announcement-bar}` uses an ink stand-in; the real bar is green. A re-capture targeting `background-color` on the announcement/accent elements is needed to add the brand hue faithfully.
- **Intermediate type sizes/weights missing.** Only four type roles were measured (90 / 40 / 20 / 16px). Card titles such as "Powerful customization options" appear bold at roughly 20px but were not captured as a distinct role; component title styling references the nearest measured tokens.
- **Primary button radius conflict.** The component selector reported `radius: 0px` and `padding: 0px 8px` for `button-primary` (likely an inner text span), while the dominant measured border-radius is 6px and the visible buttons appear rounded. The 6px value is used (marked derived); confirm against the actual `<button>`/`<a>` element.
- **Nav-link and footer-link styling** are inferred from the 16px button role; their exact size/weight were not separately measured.
- **Off-grid spacing values** (10, 14, 15, 28, 44px) were measured but folded into the documented 4px scale; some may be intentional secondary steps.
- **Dark/light theme toggle** is visible in the nav, but only the light theme was captured — dark-mode token values are out of scope.
- **Animation, transition timings, and chart interactions** (line-chart hover, carousel slide, play-button behavior) were not extracted.
- **Pricing page** was captured in scope but no pricing-specific components (tier cards, toggles) were surfaced in the measured component set; they remain undocumented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/grafbase/design-md -->
