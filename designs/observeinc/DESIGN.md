---
version: alpha
name: ObserveInc-design-analysis
description: An observability-platform marketing site built on a warm cream canvas (#f5f5ed) with near-black green ink headlines, a signature emerald-green accent on display type, and an electric-violet primary CTA. The system reads as confident modern-infra SaaS — oversized Tt Interphases Pro display headlines, pill-shaped navigation and buttons with extreme corner radii (up to 280px), and dark organic gradient product sections that show real product UI fragments at small scale against glowing green blobs.

colors:
  ink: "#273027"
  neutral-black: "#000000"
  accent-green: "#46b47f"
  accent-green-dark: "#3c5a3c"
  accent-violet: "#4c3dec"
  accent-blue: "#3898ec"
  accent-slate: "#5d6c7b"
  canvas: "#f5f5ed"
  surface-soft: "#e9e9e1"
  surface-white: "#ffffff"
  surface-faint: "#fafafa"
  on-primary: "#222222"
  on-dark: "#ffffff"
  muted: "#adadad"
  neutral-700: "#333333"
  neutral-500: "#999999"
  hairline: "#dddddd"
  hairline-soft: "#eeeeee"
  neutral-300: "#cccccc"

typography:
  display-xl:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 96px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -2.4px
  display-lg:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.8px
  display-md:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.48px
  title:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.48px
  body:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Tt Interphases Pro, Inter, sans-serif"
    fontSize: 25.6px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  sm: 12px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 96px
  huge: 160px
  pill: 280px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 38px

components:
  announcement-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  nav-pill-group:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
  button-primary:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  product-section:
    backgroundColor: "{colors.accent-green-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.huge}"
  product-card:
    backgroundColor: "{colors.neutral-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  logo-pill:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
---

## Overview

Observe (by Snowflake) presents a confident modern-infrastructure marketing surface built on a warm cream canvas (`{colors.canvas}` — #f5f5ed) rather than the usual white. Headlines render in near-black green ink (`{colors.ink}` — #273027), with a signature emerald (`{colors.accent-green}` — #46b47f) painting the second line of the hero headline. The single loud action color is an electric violet (`{colors.accent-violet}` — #4c3dec) reserved for the primary CTA.

The type voice is **Tt Interphases Pro** carried across every role — display headlines, titles, body, and buttons all use it. The hero h1 is enormous (96px, weight 600, -2.4px tracking), and display sizes lean on tight negative letter-spacing to keep the oversized type cohesive. There is no separate body typeface; the brand commits to one family at multiple weights.

The signature structural move is **extreme corner radius**. Navigation wrappers and CTAs are full pills (`{rounded.pill}` — 280px), trusted-by logo chips are pills, and the dark product sections sit inside giant 160px-radius (`{rounded.huge}`) rounded containers. Inside those dark sections, organic glowing green gradient blobs back real product UI fragments — chat panels, context-graph diagrams, ingest-pipeline visualizations — shown at small scale rather than as marketing illustration.

**Key Characteristics:**
- Warm cream canvas (`{colors.canvas}` — #f5f5ed) instead of white — the page floor reads soft and editorial.
- Two-tone hero headline: line one in `{colors.ink}` (#273027), line two in `{colors.accent-green}` (#46b47f). The green is the brand voltage.
- Electric violet (`{colors.accent-violet}` — #4c3dec) is the only loud action color, reserved for the primary CTA pill.
- Single typeface across all roles — Tt Interphases Pro (substituted with Inter here). Display sizes use tight negative letter-spacing.
- Pill geometry everywhere — `{rounded.pill}` (280px) on nav wrappers, buttons, and logo chips.
- Dark organic gradient product sections (`{colors.accent-green-dark}` — #3c5a3c) inside 160px-radius containers, holding near-black product cards (`{colors.neutral-black}` — #000000).
- Product UI fragments embedded directly in cards — telemetry charts, context-graph node diagrams, ingest pipelines.

## Colors

### Brand & Accent
- **Accent Green** (`{colors.accent-green}` — #46b47f): The brand's signature emerald. Paints the second line of the hero headline and accent links ("Watch the recording"). The dominant chromatic identity.
- **Accent Green Dark** (`{colors.accent-green-dark}` — #3c5a3c): The deep forest-green base of the dark product sections and gradient blobs.
- **Accent Violet** (`{colors.accent-violet}` — #4c3dec): The single loud action color — the primary CTA pill ("GET A DEMO" top-right, "WHY OBSERVE?", "SEE ALL FEATURES").
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): A secondary accent appearing in product-UI fragments (node icons, data-lake diagram).
- **Accent Slate** (`{colors.accent-slate}` — #5d6c7b): A muted blue-gray used in product chrome and secondary diagram elements.

### Surface
- **Canvas** (`{colors.canvas}` — #f5f5ed): The warm cream page floor.
- **Surface Soft** (`{colors.surface-soft}` — #e9e9e1): The nav-pill-group background — a slightly deeper cream.
- **Surface White** (`{colors.surface-white}` — #ffffff): Trusted-by logo chips and input backgrounds.
- **Surface Faint** (`{colors.surface-faint}` — #fafafa): Very-soft section dividers / near-white panels.
- **Neutral Black** (`{colors.neutral-black}` — #000000): The product-card background inside dark sections.

### Text
- **Ink** (`{colors.ink}` — #273027): All headlines and primary text on the cream canvas — a near-black green.
- **On Primary** (`{colors.on-primary}` — #222222): Button label color on outlined CTAs (dark text on cream).
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the violet CTA and on dark product sections.
- **Muted** (`{colors.muted}` — #adadad): Secondary text, captions inside product chrome.
- **Neutral 700** (`{colors.neutral-700}` — #333333): Darker secondary text.
- **Neutral 500** (`{colors.neutral-500}` — #999999): Tertiary / fine-print text.

### Lines & Neutrals
- **Hairline** (`{colors.hairline}` — #dddddd): 1px border tone on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #eeeeee): Barely-visible dividers on the cream canvas.
- **Neutral 300** (`{colors.neutral-300}` — #cccccc): Subtle borders / disabled tones.

## Typography

### Font Family
The system runs **Tt Interphases Pro** across every typographic role — there is no secondary body face. It is a commercial geometric sans (TypeType foundry); it was not flagged in `fonts_licensed`, but because it is a paid/custom face it should not be assumed shippable. The display headlines use weight 600 with aggressive negative tracking; body and button labels use weight 500.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 96px | 600 | 1.1 | -2.4px | Hero h1 ("Observability / Engineered for Scale") |
| `{typography.display-lg}` | 48px | 600 | 1.15 | -0.8px | Major section heads (h3) |
| `{typography.display-md}` | 40px | 600 | 1.15 | -0.48px | Sub-section heads (h4) |
| `{typography.title}` | 32px | 500 | 1.35 | -0.48px | In-section titles ("Scale without compromise", "The modern observability stack") — h2 |
| `{typography.body}` | 24px | 500 | 1.4 | 0 | Running text, sub-headlines, nav links |
| `{typography.button}` | 25.6px | 500 | 1.0 | 0 | CTA labels (uppercase, letter-tracked in render) |

### Principles
Display sizes commit to weight 600 with negative letter-spacing (-0.48px to -2.4px) — the tighter tracking is what keeps the 96px hero from feeling loose. Body and buttons stay at weight 500. Note the semantic inversion: the rendered h2 (32px) is smaller than h3 (48px) and h4 (40px) — heading levels here track visual size, not source order, so map by measured size rather than tag name when reusing.

### Note on Font Substitutes
Tt Interphases Pro is a commercial typeface and not freely distributable. A usable open-source substitute is **Inter** at the matching weights with the documented negative letter-spacing applied; **Hanken Grotesk** is a closer geometric alternative for the display sizes. Substitutes preserve the weight + tracking signature but not the exact letterforms.

## Layout

### Spacing System
- **Base unit:** ~4px, though the measured set is irregular (4, 8, 12, 16, 24, 32, 38 dominate).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 38px.
- **Most common gaps:** 16px (frequency 23) and 32px (frequency 22) carry the dominant rhythm; 24px (frequency 16) is the card/grid gutter.

### Grid & Container
- **Hero:** Single centered column — oversized stacked h1, sub-headline, mascot graphic, then CTA row.
- **Product sections:** Full-bleed dark gradient container with product cards positioned asymmetrically within (chat panel upper-left, context-graph card mid-right, data-lake card lower-left).
- **Trusted-by:** A horizontal row of pill logo chips.

### Whitespace Philosophy
The cream canvas carries generous vertical breathing room around the oversized hero type. The dominant 16px/32px rhythm keeps in-card content tight while the large section radii (96–160px) create soft transitions between cream editorial bands and dark product bands.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, cream canvas | Hero, top nav, editorial bands |
| Pill chip | `{colors.surface-white}` fill on cream | Trusted-by logo chips, nav-pill-group |
| Product card | `{colors.neutral-black}` fill, measured drop shadow | Product UI fragment cards inside dark sections |
| Dark section | `{colors.accent-green-dark}` gradient field | Full product bands with glowing organic blobs |

The one measured shadow is `rgba(0,0,0,0.05) -1px -1px 4px 0px, rgba(0,0,0,0.16) 3px 6px 16px 3px` — a layered double-shadow used on the elevated product cards. There is no neumorphism or glassmorphism; depth comes from the dark gradient fields and the single layered card shadow.

### Decorative Depth
- Organic glowing green gradient blobs fill the dark product sections — these are decorative background fields, not token-driven surfaces.
- A friendly robot/mascot graphic anchors the hero and recurs at section transitions.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 12px | Inputs |
| `{rounded.md}` | 24px | Product cards inside dark sections |
| `{rounded.lg}` | 32px | Larger nested cards / panels |
| `{rounded.xl}` | 48px | Section container corners (most frequent radius, frequency 16) |
| `{rounded.xxl}` | 96px | Large rounded section corners |
| `{rounded.huge}` | 160px | Giant dark product-section container corners |
| `{rounded.pill}` | 280px | Full-pill nav wrapper, CTA buttons, logo chips |

The radius scale is unusually large — corner softness is a primary brand signal. The 48px section radius (frequency 16) and the 280px pill radius (frequency 6) are the load-bearing values; intermediate measured values (45, 54, 64) cluster around these and are treated as derived approximations of the same intent.

### Graphic Geometry
Product UI fragments retain their own native chrome (chart axes, node-graph cells) at 24px card radius. The hero mascot and gradient blobs are free-form organic shapes, not radius-bound.

## Components

### Announcement & Navigation

**`announcement-bar`** — A slim dark green (`{colors.ink}` — #273027) bar pinned above the nav, carrying webinar text in `{colors.on-dark}` with an accent-green "Watch the recording" link.

**`top-nav`** — Sits on the cream canvas (`{colors.canvas}`). Carries the "OBSERVE / BY SNOWFLAKE" wordmark at left, a centered `{component.nav-pill-group}`, and a right cluster with a search icon, the outlined "TRY FREE" button, and the violet "GET A DEMO" `{component.button-primary}`.

**`nav-pill-group`** — A full-pill wrapper (`{rounded.pill}` — 280px) around the primary menu items (Platform, AI, Pricing, Customers, Learn, Docs). Background `{colors.surface-soft}` (#e9e9e1), labels in `{typography.body}` ink.

### Buttons

**`button-primary`** — The single loud CTA. Background `{colors.accent-violet}` (#4c3dec), label `{colors.on-dark}` (white), type `{typography.button}`, rounded `{rounded.pill}`. Used for "GET A DEMO" (top-right), "WHY OBSERVE?", and "SEE ALL FEATURES". The pill radius is taken from the measured 280px radius; the button selector reported a 0px radius (see Known Gaps), so the pill is derived from screenshot ground-truth plus the measured pill token.

**`button-outline`** — The secondary CTA. Transparent background with a hairline outline, label `{colors.on-primary}` (#222222), type `{typography.button}`, rounded `{rounded.pill}`. Used for "TRY FREE" in the nav and the hero "GET A DEMO".

### Sections & Cards

**`hero-band`** — Cream-canvas hero with a single centered column: oversized two-tone h1 in `{typography.display-xl}` (ink line + accent-green line), a sub-headline in `{typography.body}`, the robot mascot graphic, and a CTA row (`{component.button-outline}` + a "TRY FREE" play link).

**`product-section`** — Full-bleed dark band, background `{colors.accent-green-dark}` (#3c5a3c) with organic glowing gradient blobs, rounded at the corners with `{rounded.huge}` (160px). Holds section titles in `{typography.display-md}` / `{typography.title}` and embedded product cards. Text inverts to `{colors.on-dark}`.

**`product-card`** — Near-black card (`{colors.neutral-black}` — #000000) positioned within the dark section, rounded `{rounded.md}` (24px), carrying the measured layered drop shadow. Holds real product UI fragments — telemetry chart panels, context-graph node diagrams, the data-lake ingest visualization. Captions in `{typography.body}`, `{colors.on-dark}`.

**`logo-pill`** — Trusted-by logo chips. Background `{colors.surface-white}` (#ffffff), full-pill radius `{rounded.pill}`. Each chip holds a single customer logo (Capital One, Topgolf, Dialpad, Breeze, HPE, Life360).

### Inputs

**`input`** — Text input. Background `{colors.surface-white}` (#ffffff), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.sm}` (12px). The only component measured at a small radius.

## Do's and Don'ts

### Do
- Use the warm cream canvas (`{colors.canvas}` — #f5f5ed) as the default floor, not white.
- Reserve `{colors.accent-violet}` (#4c3dec) for the single primary CTA. It is the only loud action color.
- Paint the hero headline two-tone — `{colors.ink}` line over `{colors.accent-green}` line.
- Apply tight negative letter-spacing on display sizes (-0.48px to -2.4px). Tt Interphases Pro at display size needs it.
- Commit to full-pill geometry on nav wrappers, buttons, and logo chips (`{rounded.pill}` — 280px).
- Show real product UI fragments inside `{component.product-card}` on the dark sections — don't illustrate the product abstractly.
- Use the giant `{rounded.huge}` (160px) corners on the dark `{component.product-section}` containers — the soft transition is a brand signal.

### Don't
- Don't introduce additional loud action colors. The action layer is violet-only.
- Don't put body text in a weight above 500 or display text below 600.
- Don't render CTAs or nav wrappers with sharp/small corners — pill geometry is the identity.
- Don't place product cards on the cream canvas; they belong inside the dark gradient sections.
- Don't document hover states — only default and active/pressed are in scope.
- Don't map heading hierarchy by tag name — the measured h2 (32px) is smaller than h3 (48px); use measured size.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down dramatically from 96px; CTAs stack; product cards stack vertically within the dark section; logo pills wrap |
| Tablet | 768–1024px | Nav tightens, may collapse the pill group; product cards reflow to fewer per row |
| Desktop | 1024–1440px | Full nav-pill-group visible; asymmetric product-card layout within dark sections |
| Wide | > 1440px | Same as desktop with more outer breathing room around the centered hero |

The captured mobile screenshot confirms the hero collapses to a single centered column, product sections stack their cards vertically, and the dark gradient bands run full-bleed with their large rounded corners preserved.

### Touch Targets
- `{component.button-primary}` and `{component.button-outline}` render at generous pill sizes well above 44px.
- `{component.input}` uses `{typography.body}` (24px) text, implying a tall comfortable field.

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile; the pill group becomes a sheet/stack.
- Product sections keep their dark gradient field and large corner radii but stack the embedded cards.
- Trusted-by logo pills wrap to multiple rows.

### Image Behavior
- Product UI fragments inside cards retain native aspect ratios; cards resize around them.
- The robot mascot and gradient blobs scale proportionally.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key (`{component.product-card}`, `{component.button-primary}`).
2. Variants of a component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Document default and active/pressed only — never hover.
5. Keep the action layer violet-only; keep the hero two-tone ink/green.
6. When scaling type, preserve the negative letter-spacing signature.
7. Default to pill or large-radius geometry — sharp corners read as off-brand here.

## Known Gaps

- The button selector measured `radius: 0px` and `padding: 0px` for `button-primary` — clearly an inner-element capture, not the rendered pill. Button radius (`{rounded.pill}`) and the violet fill are documented from screenshot ground-truth plus the measured 280px pill radius and `{colors.accent-violet}` token; exact button padding/height were not reliably measured.
- The `card` component measured `radius: 0px, shadow: none`, conflicting with the visibly rounded, shadowed product cards in the screenshots. `product-card` radius (`{rounded.md}`) and shadow are derived from the radius/shadow token sets and screenshot evidence.
- Background colors for several components (nav, sections) are inferred from the measured color palette by role; per-element background measurements were not all captured.
- The dark product-section gradient (forest-green blobs) is a multi-stop radial gradient not expressible as a single token; only the base `{colors.accent-green-dark}` is recorded.
- Tt Interphases Pro is a commercial typeface; it was not flagged in `fonts_licensed`, but an open-source substitute is documented and should be used unless a license is held.
- Intermediate radius values (45, 54, 64px) were measured but folded into the nearest named tokens as derived approximations.
- Pricing-page specific components were captured in scope (`pricing` page) but no pricing-card tokens were measured; that surface's spec is a gap.
- Animation, transition, and gradient-blob motion timings are not in scope.
- Footer structure and tokens were not measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/observeinc/design-md -->
