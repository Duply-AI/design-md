---
version: alpha
name: Visitors-design-analysis
description: A light, friendly analytics-SaaS marketing surface built on a white canvas with near-black ink headlines set in the rounded OpenRunde display face, a soft periwinkle-purple brand accent, and a full rainbow of small chromatic accents used inside product-UI fragments. The system reads as approachable modern dev-tooling — a floating dark pill navigation bar, very-light gray cards with whisper-soft shadows, embedded dashboard/map/table mockups, and tight negative letter-spacing on rounded headlines.

colors:
  primary: "#918df6"
  primary-strong: "#9580ff"
  ink: "#181925"
  neutral-black: "#000000"
  body: "#666666"
  muted: "#999999"
  hairline: "#cccccc"
  canvas: "#ffffff"
  surface-soft: "#f5f5f5"
  surface-softer: "#fafafa"
  surface-dark: "#14141f"
  on-primary: "#bbbcc3"
  on-dark: "#ffffff"
  accent-orange: "#ffa600"
  accent-green: "#33c758"
  accent-blue: "#2c78fc"
  accent-pink: "#d6409f"
  accent-red: "#ff2f00"
  accent-cyan: "#00c4ff"
  accent-yellow: "#f5d90a"
  accent-orange-deep: "#f76808"

typography:
  display-xl:
    fontFamily: "OpenRunde, Nunito, Inter, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.133
    letterSpacing: -3px
  display-md:
    fontFamily: "OpenRunde, Nunito, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.222
    letterSpacing: -1.8px
  title-sm:
    fontFamily: "OpenRunde, Nunito, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: -0.32px
  body-md:
    fontFamily: "OpenRunde, Nunito, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: -0.32px
  button:
    fontFamily: "OpenRunde, Nunito, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.429
    letterSpacing: -0.32px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px

spacing:
  xxs: 4px
  micro: 6px
  xs: 8px
  tight: 10px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 64px
  band: 112px
  mega: 160px

components:
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xxl}"
    padding: 8px 16px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.xxl}"
    padding: 4px 8px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 64px
  dashboard-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.surface-softer}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.xl}"
    padding: 24px
  step-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.xl}"
    padding: 16px
  comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 16px
  comparison-column-highlight:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 16px
  pricing-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  faq-item:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 16px
  badge-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    padding: 64px
---

## Overview

Visitors is a revenue-first web-analytics product, and its marketing surface reads as friendly modern dev-tooling: a white canvas (`{colors.canvas}` — #ffffff), near-black ink headlines (`{colors.ink}` — #181925) set in the rounded **OpenRunde** display face, and a single soft periwinkle-purple brand accent (`{colors.primary}` — #918df6) carrying the primary "Register" / "Start 14 day free trial" CTAs. The page floats a dark pill navigation bar (`{colors.surface-dark}` — #14141f) at the top — the only dark surface in the system — over an aurora-gradient hero image, then settles into clean white bands of very-light gray cards.

The system's voltage is twofold. First, the rounded geometry: OpenRunde is a soft-cornered grotesque, and at display sizes it runs tight negative letter-spacing (-3px at h1) that makes headlines feel compact and confident. Second, the color comes almost entirely from **embedded product UI** — dashboards, an interactive visitor globe, source-attribution bar lists, comparison checkmarks, and an experience-score gauge. These fragments carry the full chromatic accent set (`{colors.accent-green}`, `{colors.accent-orange}`, `{colors.accent-blue}`, `{colors.accent-pink}`, etc.) so the marketing chrome itself stays nearly monochrome.

Cards are the workhorse: very-light gray surfaces (`{colors.surface-soft}` — #f5f5f5 and `{colors.surface-softer}` — #fafafa) with whisper-soft 1px shadows, rounded between `{rounded.lg}` (12px) and `{rounded.xl}` (16px). There is no heavy elevation anywhere — depth is communicated by faint hairline shadows and color-block grouping rather than drop shadows.

**Key Characteristics:**
- White canvas with a single periwinkle-purple primary CTA (`{colors.primary}` — #918df6). Everything else at the action layer is near-monochrome.
- Floating dark pill navigation (`{colors.surface-dark}` — #14141f) rounded to `{rounded.xxl}` (24px) — the only dark surface, hovering over the gradient hero.
- Rounded **OpenRunde** display type with aggressive negative letter-spacing (-3px / -1.8px) on headlines — compact, friendly, geometric.
- Brand color lives inside embedded product UI (globe, dashboard, bar lists, comparison checks) — a wide accent palette confined to product chrome.
- Very-light gray cards (`{colors.surface-soft}` / `{colors.surface-softer}`) with whisper-soft shadows; no heavy elevation.
- FAQ accordions, comparison tables, and pricing cards all share the same soft-gray-card vocabulary.
- Spacing rhythm reaches `{spacing.band}` (112px) and `{spacing.mega}` (160px) between the largest editorial breaks, with `{spacing.md}` (16px) as the dominant internal unit.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #918df6): The periwinkle-purple brand accent. Carries the "Register" pill, primary trial CTAs, and the brand mark. The dominant chromatic note in the system.
- **Primary Strong** (`{colors.primary-strong}` — #9580ff): A slightly more saturated violet measured alongside the primary; usable for pressed/active CTA states (derived as the active companion to `{colors.primary}`).
- **Product-UI Accent Set** — These appear almost exclusively inside embedded dashboards, the visitor globe, bar charts, and comparison tables, never on marketing CTAs: `{colors.accent-green}` (#33c758, GDPR/positive checks + live dots), `{colors.accent-orange}` (#ffa600), `{colors.accent-orange-deep}` (#f76808), `{colors.accent-blue}` (#2c78fc), `{colors.accent-pink}` (#d6409f), `{colors.accent-cyan}` (#00c4ff), `{colors.accent-yellow}` (#f5d90a), and `{colors.accent-red}` (#ff2f00). Together they form the "real product, shown at small scale" chroma.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and the background of most product-mockup cards.
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): FAQ accordions, pricing cards, step cards, badge pills.
- **Surface Softer** (`{colors.surface-softer}` — #fafafa): Feature cards and the lightest card fills — barely distinct from canvas.
- **Surface Dark** (`{colors.surface-dark}` — #14141f): The floating pill navigation bar — the single dark surface in the system.

### Text
- **Ink** (`{colors.ink}` — #181925): All headlines and primary text. Near-black with a faint blue cast.
- **Neutral Black** (`{colors.neutral-black}` — #000000): Pure black used for some icon and chart strokes inside product UI.
- **Body** (`{colors.body}` — #666666): The default running-text color — the most frequent text tone on the page.
- **Muted** (`{colors.muted}` — #999999): Secondary/tertiary text, footer body, fine-print.
- **Hairline** (`{colors.hairline}` — #cccccc): 1px borders, divider lines, inactive icon outlines.
- **On Primary** (`{colors.on-primary}` — #bbbcc3): The measured label tone on the primary button (a soft light-gray); the visible CTA renders white text per screenshots (`{colors.on-dark}`).
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on the dark pill nav.

## Typography

### Font Family
The system runs **OpenRunde** for every text role — headlines, body, navigation, and buttons all share one rounded grotesque family. OpenRunde is an open-source, soft-cornered typeface (a rounded reinterpretation of Inter's structure), so it ships freely; no licensed face is in play (`fonts_licensed` is empty). The fallback stack walks `Nunito, Inter, sans-serif`.

There is no display/body font split here — the rounded face does double duty. Hierarchy is created by size, weight (600 at h1, 500 everywhere else), and letter-spacing rather than by switching families.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 600 | 1.133 | -3px | Hero h1 ("Revenue-first web analytics"), "Frequently asked questions" — OpenRunde |
| `{typography.display-md}` | 36px | 500 | 1.222 | -1.8px | Section heads ("Everything you need to understand your visitors"), pricing figures |
| `{typography.title-sm}` | 18px | 500 | 1.333 | -0.32px | Card titles, feature headers, FAQ question rows |
| `{typography.body-md}` | 18px | 500 | 1.333 | -0.32px | Default running-text, descriptions, list rows |
| `{typography.button}` | 14px | 500 | 1.429 | -0.32px | Button labels, nav links, badge pills, footer links |

### Principles
The whole type system leans on the rounded face plus negative tracking. The h1 runs an unusually tight -3px letter-spacing, which is what makes the large headline feel compact and engineered rather than airy. As sizes shrink, tracking eases toward -0.32px but never reaches zero — OpenRunde without negative tracking reads as off-brand here.

Note that `title-sm` and `body-md` share identical metrics (18px / 500 / 1.333 / -0.32px); the distinction between a card title and its body copy is carried by color (`{colors.ink}` vs `{colors.body}`) and position, not by type size. Weight only climbs to 600 at the single largest display size — everything else holds at 500.

### Note on Font Substitutes
OpenRunde is open-source and can be shipped directly. If it is unavailable, **Nunito** (a rounded geometric sans) at weights 500–700 is the closest substitute, preserving the soft-corner character and the negative-tracking feel. **Inter** at weight 500–600 with -0.02em tracking is a structurally faithful but harder-cornered fallback.

## Layout

### Spacing System
- **Base unit:** 4px, with frequent 8px and 16px steps (16px is the single most-used value).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.micro}` 6px · `{spacing.xs}` 8px · `{spacing.tight}` 10px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section}` 64px · `{spacing.band}` 112px · `{spacing.mega}` 160px.
- **Section padding:** `{spacing.section}` (64px) as the standard band rhythm; the largest editorial breaks open to `{spacing.band}` (112px) and `{spacing.mega}` (160px).
- **Card internal padding:** `{spacing.xl}` (24px) for feature/pricing cards; `{spacing.md}` (16px) for FAQ rows, step cards, and mockup cards.
- **Micro-spacing:** `{spacing.xxs}` (4px), `{spacing.micro}` (6px), and `{spacing.xs}` (8px) handle icon gaps, list-row padding, and pill internals.

### Grid & Container
- **Max content width:** ~960px centered for the marketing column; product-mockup bands run slightly wider.
- **Hero:** single centered column — eyebrow badge, h1, sub-line, CTA row, then the dashboard-mockup-card full-width below.
- **Feature grids:** 2-up at desktop (Revenue attribution / Realtime tracking / Visitor profiles / Performance metrics).
- **Step grid:** 3-up "Get started in minutes" cards.
- **Comparison table:** label column + 4 product columns, with the "Visitors" column boxed as a highlight.
- **Footer:** multi-column link list (Product / Comparison / Features / Company).

### Whitespace Philosophy
Visitors uses generous vertical whitespace between bands (64–160px) but tight internal spacing inside cards (16px). The contrast is deliberate: lots of air between sections for scanning, but dense, information-rich product fragments inside each card. Everything is centered, single-column, and calm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body bands, hero text block |
| Hairline shadow | `rgba(0,0,0,0.08) 0px 1px 1px 1px` + `rgba(0,0,0,0.06)` | Feature cards, FAQ accordions, list rows — the most common card treatment |
| Soft shadow | `rgba(0,0,0,0.08) 0px 1px 1px 0px` + `rgba(0,0,0,0.05)` | Pricing card, step cards |
| Lifted shadow | `rgba(0,0,0,0.06) 0px 1px 3px 0px` + `rgba(0,0,0,0.06) 0px 8px` | Dashboard mockup card, floating pill nav |

The elevation philosophy is **whisper-soft**. Every measured shadow sits at 0.02–0.08 alpha with 1–3px blur — there is no heavy drop shadow, no glow, no neumorphism. Depth comes from these barely-there 1px shadows plus the color-block grouping of cards against the white canvas.

### Decorative Depth
- The hero sits over an aurora gradient image (purple-to-blue), the single painterly moment; the dark pill nav floats above it with a lifted shadow.
- Embedded product UI (globe, dashboard charts, experience-score gauge) carries its own internal chrome and color — these are content, not system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Smallest accents, tiny inline chips |
| `{rounded.sm}` | 6px | Badge pills (e.g. the "FAQ" / "Features" eyebrow tags) |
| `{rounded.md}` | 8px | List rows, small buttons, inner UI tiles |
| `{rounded.lg}` | 12px | FAQ accordions, comparison table, dashboard mockup card |
| `{rounded.xl}` | 16px | Feature cards, pricing cards, highlighted comparison column |
| `{rounded.xxl}` | 24px | Floating pill nav, primary CTA pill (derived from screenshot — see Known Gaps) |

### Geometry
Everything is soft-cornered — radius is the visual echo of the rounded OpenRunde type. The largest radii (`{rounded.xxl}`, 24px) are reserved for the floating navigation pill and the rounded CTA buttons, which read as fully rounded "lozenge" shapes at their height. Product-UI fragments inside cards carry their own native radii from the actual app.

## Components

### Navigation

**`top-nav`** — A floating dark pill bar centered at the top of the page. Background `{colors.surface-dark}` (#14141f), white labels (`{colors.on-dark}`), rounded `{rounded.xxl}` (24px), padding 8px × 16px, lifted soft shadow. Holds the circular brand mark, primary menu (Features ▾, Pricing, Blog, Docs), a "Login" text link, and the purple "Register" CTA pill at the right.

**`nav-link`** — Inline nav menu items inside the pill. Transparent background, `{colors.on-dark}` text, `{typography.button}` (OpenRunde 14px / 500).

### Buttons

**`button-primary`** — The signature CTA ("Register", "Start 14 day free trial"). Background `{colors.primary}` (#918df6), label rendered white (`{colors.on-dark}`; the measured computed text tone is `{colors.on-primary}` — #bbbcc3), typography `{typography.button}`, padding 4px × 8px (measured), rounded `{rounded.xxl}` to read as a pill. Active/pressed companion uses `{colors.primary-strong}` (#9580ff).

**`button-text-link`** — Plain inline text action ("Login", "See demo"). Transparent background, label in `{colors.on-dark}` inside the dark nav or `{colors.ink}` on light bands.

### Hero & Mockups

**`hero-band`** — Centered white hero over the aurora gradient. Eyebrow badge, h1 in `{typography.display-xl}`, a `{colors.body}` sub-line, and a CTA row. Vertical padding `{spacing.section}` (64px) and up.

**`dashboard-mockup-card`** — The large product screenshot card directly under the hero — the live analytics dashboard with charts, source rows, and an experience-score gauge. Background `{colors.canvas}`, rounded `{rounded.lg}` (12px), padding `{spacing.md}` (16px), lifted soft shadow. The product chrome inside carries the full accent palette.

### Cards & Containers

**`feature-card`** — Used in the 2-up "Everything you need" grid (Revenue attribution, Realtime tracking, Visitor profiles, Performance metrics). Background `{colors.surface-softer}` (#fafafa), rounded `{rounded.xl}` (16px), padding `{spacing.xl}` (24px). Carries a small icon, a colored title, a `{typography.title-sm}` headline, a `{colors.body}` description, a checklist, and an embedded product fragment (bar list, globe, profile list, or gauge).

**`step-card`** — The 3-up "Get started in minutes" cards (01 Install script / 02 Connect revenue / 03 See insights). Background `{colors.surface-soft}` (#f5f5f5), rounded `{rounded.xl}`, padding `{spacing.md}` (16px). Each shows a small UI fragment above a numbered title + caption.

**`pricing-card`** — The "Simplified pricing" panel with an events slider, monthly/yearly toggle, the large "$9/mo" figure in `{typography.display-md}`, a feature checklist, and a primary CTA. Background `{colors.surface-soft}`, rounded `{rounded.xl}`, padding `{spacing.xl}` (24px). Includes an embedded realtime map fragment.

### Comparison & FAQ

**`comparison-table`** — The "How Visitors compares" matrix (Visitors / GA / Plausible / Fathom). Background `{colors.canvas}`, label text in `{colors.body}`, rounded `{rounded.lg}`. Positive cells use `{colors.accent-green}` check marks; partial/negative cells use `{colors.accent-orange}` and `{colors.hairline}` icons.

**`comparison-column-highlight`** — The boxed "Visitors" column in the comparison table — a rounded `{rounded.xl}` outline that lifts the brand's own column. Background `{colors.canvas}`, title in `{colors.ink}`.

**`faq-item`** — A collapsible FAQ accordion row. Background `{colors.surface-soft}` (#f5f5f5), question in `{typography.title-sm}` / `{colors.ink}`, chevron in `{colors.muted}`, expanded answer in `{typography.body-md}` / `{colors.body}`. Rounded `{rounded.lg}`, padding `{spacing.md}` (16px).

### Tags & Lists

**`badge-pill`** — Small eyebrow label above section heads ("FAQ", "Features", "How it works", "Comparison", "Pricing"). Background `{colors.surface-soft}`, text `{colors.body}` in `{typography.button}`, rounded `{rounded.sm}` (6px), padding 4px × 8px.

**`list-row`** — A single data row inside product fragments (source attribution, visitor profiles). Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body-md}`, rounded `{rounded.md}`, padding 8px × 12px. Source/channel icons inside use the accent palette.

### Footer

**`footer`** — Light footer that closes the page. Background `{colors.canvas}`, link/body text `{colors.muted}` in `{typography.button}`, padding `{spacing.section}` (64px). Multi-column link list (Product / Comparison / Features / Company) with an "Operational" status note and copyright at the bottom-left.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#918df6) for primary CTAs and the brand mark. Visitors is near-monochrome at the action layer — one purple, used sparingly.
- Set every text role in OpenRunde with negative tracking. The compact -3px / -1.8px headline tracking is core to the voice.
- Confine the rainbow accent set (`{colors.accent-green}`, `{colors.accent-blue}`, `{colors.accent-pink}`, etc.) to embedded product UI — charts, globe markers, comparison checks. Never on marketing CTAs or headlines.
- Use very-light gray cards (`{colors.surface-soft}` / `{colors.surface-softer}`) with whisper-soft shadows. Keep elevation barely-there.
- Embed real product fragments inside cards (dashboard, globe, bar lists, gauge) rather than illustrating the product abstractly.
- Keep the navigation as a floating dark pill — it's the single dark surface and the system's signature shape.
- Distinguish a card title from its body copy with color (`{colors.ink}` vs `{colors.body}`), since their type metrics are identical.

### Don't
- Don't introduce a second dark surface. Only the pill nav (`{colors.surface-dark}`) goes dark.
- Don't add heavy drop shadows or glows — every shadow stays at ≤0.08 alpha.
- Don't set headlines without negative letter-spacing; OpenRunde at 0 tracking reads as off-brand.
- Don't push card radius past `{rounded.xl}` (16px) except on pill shapes (nav, CTA) which use `{rounded.xxl}`.
- Don't paint marketing CTAs in the chart-accent colors; the action layer is purple-and-monochrome only.
- Don't repeat the same surface tone in adjacent product fragments — alternate `{colors.canvas}`, `{colors.surface-soft}`, and `{colors.surface-softer}` for separation.
- Don't document hover states — default and active/pressed only (primary darkens toward `{colors.primary-strong}`).

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Pill nav collapses to brand + menu trigger; hero h1 60→~36px; feature grid 2-up → 1-up; comparison table scrolls horizontally; pricing + FAQ stack full-width |
| Tablet | 768–1024px | Pill nav stays horizontal; feature cards 2-up; step cards may wrap to 2-up; comparison table tightens columns |
| Desktop | 1024–1440px | Full floating pill nav; 2-up feature grid; 3-up step cards; 5-column comparison table |
| Wide | > 1440px | Same as desktop with more outer breathing room; content column caps ~960px |

### Touch Targets
- `{component.button-primary}` renders as a pill; its padded height meets tap targets despite the tight 4px×8px measured padding.
- `{component.nav-link}` items inside the dark pill sit on the 8px×16px nav padding for comfortable tap area.
- `{component.faq-item}` rows are full-width tap zones at `{spacing.md}` (16px) padding.

### Collapsing Strategy
- Hero collapses to a single centered column; the dashboard-mockup-card scales proportionally and stays legible.
- Feature cards reduce columns (2 → 1) rather than shrinking their embedded product fragments past readability.
- The comparison table is the most fragile layout — it scrolls horizontally on mobile so the 5 columns stay aligned.
- FAQ accordions and pricing cards stack full-width; the floating pill nav remains pinned and centered.

### Image Behavior
- The aurora gradient hero background covers full-bleed and crops at the edges.
- Embedded product fragments (globe, charts, maps) retain native aspect ratios; their containing cards resize.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.feature-card}`, `{component.faq-item}`).
2. Variants (`-active`, `-disabled`, highlight column) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and active/pressed only (primary shifts toward `{colors.primary-strong}`).
5. Keep all type in OpenRunde with negative tracking; create hierarchy by size + color, not by family.
6. The dark pill nav is the only dark surface — don't add others casually.
7. Keep chromatic accents inside product fragments; the marketing chrome stays purple-and-monochrome.

## Known Gaps

- The measured `button-primary` reports `radius: 0px` and `padding: 4px 8px` with text color `#bbbcc3`, which conflicts with the screenshot — the visible "Register" / trial buttons are clearly rounded purple pills with white text. The pill radius (`{rounded.xxl}`) and white label (`{colors.on-dark}`) are documented from screenshot ground-truth; treat the radius as derived.
- Only one component (`button-primary`) was captured by the measurement pass; all other components (nav, cards, FAQ, comparison table, pricing) are reconstructed from screenshots plus the measured color/type/spacing/radius/shadow tokens.
- The primary purple's pressed/active tone (`{colors.primary-strong}` — #9580ff) is inferred as the active companion to `{colors.primary}`; the exact state mapping was not measured.
- Disabled, focus, and input/form states are not in the capture — no text-input or form-field tokens were measured.
- The accent palette's role assignments inside product UI (which color maps to which data series, gauge band, or globe marker) are observed approximately from screenshots and may shift in the live app.
- Footer background is documented as light (`{colors.canvas}`) from the screenshot; its exact divider tones were not individually measured.
- Animation/transition timings (FAQ expand, globe rotation, slider drag, realtime ticker) are out of scope.
- Exact max content width and per-breakpoint grid columns are estimated from screenshot proportions, not measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/visitors/design-md -->
