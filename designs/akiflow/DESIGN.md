---
version: alpha
name: Akiflow-design-analysis
description: "A productivity-app marketing surface built on a near-white canvas (#f8fafc) with crisp black headlines, a single electric-purple brand action (#9000ff), and large rounded product-mockup cards that show the actual Akiflow calendar/task UI inside the page. The system reads as modern, focused, slightly playful SaaS — Inter throughout with tight negative letter-spacing, generous rounded corners, soft purple-tinted shadows, and integration-tile clusters floating around the hero product shot."

colors:
  primary: "#9000ff"
  primary-active: "#550097"
  primary-deep: "#420075"
  plum: "#340d3f"
  accent-blue: "#5c76ff"
  accent-cyan: "#d7f1fe"
  ink: "#000000"
  ink-soft: "#050505"
  body: "#323b4a"
  muted: "#5e687b"
  muted-soft: "#8694a6"
  hairline: "#b3becc"
  hairline-soft: "#cbd5e1"
  surface-soft: "#dfe7f0"
  surface-softer: "#eaf0f6"
  canvas: "#f8fafc"
  neutral: "#ffffff"
  on-primary: "#ffffff"
  navy: "#212833"
  deep-blue: "#01334b"

typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: 54.4px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.632px
  heading:
    fontFamily: "Inter, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.96px
  subtitle:
    fontFamily: "Inter, sans-serif"
    fontSize: 18.08px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.7232px
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.45px
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.45px
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.45px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  x2: 20px
  x3: 24px
  x4: 32px
  x5: 40px
  pill: 50px

spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 22px
  xxxl: 24px

components:
  top-banner:
    backgroundColor: "{colors.surface-softer}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 8px 16px
  top-nav:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.x3}"
    padding: 16px 24px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
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
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  cta-primary-large:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.xl}"
    padding: 24px
  feature-section-heading:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
  integration-tile:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 10px
  pill-badge:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  avatar-circle:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: 24px
  list-item-row:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  task-input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
---

## Overview

Akiflow's marketing surface is a focused productivity-app interface — a near-white canvas (`{colors.canvas}` — #f8fafc) carrying crisp black headlines (`{colors.ink}` — #000000), a single electric-purple brand action (`{colors.primary}` — #9000ff), and large rounded white cards that show the actual Akiflow product UI (calendar grid, inbox, task lists) embedded directly inside the page. The system reads as modern, confident, lightly playful SaaS — the kind of tool that wants to look fast and organized.

Type runs entirely on **Inter**. There is no display/secondary split here — the brand voice comes from one family at varied weights with consistently tight negative letter-spacing (-0.45px on body up to -1.632px on the hero h1). Headlines are weight 600; body and sub-heads sit at weight 500. The negative tracking is part of the voice — it makes the type feel engineered and dense rather than airy.

Brand voltage is concentrated in two places: the **purple** (`{colors.primary}` — #9000ff), which appears on the primary CTA, the gradient word "powered by AI", and the soft purple-tinted shadows (`rgba(144,0,255,0.2)`); and the **product-mockup cards**, where Akiflow shows its real calendar/inbox UI surrounded by floating integration tiles (Slack, Gmail, Notion, GitHub, Outlook). Akiflow doesn't illustrate the product — it shows the product chrome at scale, ringed by the apps it connects to.

**Key Characteristics:**
- Near-white canvas (`{colors.canvas}` — #f8fafc) with pure-black headlines and a single purple CTA. Restrained, near-monochrome at the action layer except for the purple.
- Inter everywhere, weight 500–600, negative letter-spacing at every size. No secondary typeface.
- Large rounded white cards (`{rounded.xl}` 16px and up) holding live product UI — the hero is a wide product-mockup card with floating integration tiles around it.
- Soft, low-alpha shadows — both neutral (`rgba(0,0,0,0.08)`) and purple-tinted (`rgba(144,0,255,0.2)`) — give cards and CTAs a gentle lift without heaviness.
- Floating "white nav pill" — the top navigation sits on a rounded white bar (`{rounded.x3}` 24px) above the canvas, with a sale-announcement banner pinned above it.
- Cool-grey neutral ladder (`{colors.surface-soft}`, `{colors.hairline}`, `{colors.muted}`) for secondary text, dividers, and quiet card fills.
- Generous rounded geometry across the radius scale — buttons at `{rounded.md}` (8px), cards at `{rounded.xl}` (16px), pill badges and avatars at `{rounded.pill}` (50px).

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #9000ff): The dominant action color. The primary CTA ("Try Akiflow for free"), the gradient headline accent, and the purple-tinted glow shadows. This is the only saturated color in the system.
- **Primary Active** (`{colors.primary-active}` — #550097): Darker purple used for the pressed/active CTA state and deeper brand moments.
- **Primary Deep** (`{colors.primary-deep}` — #420075) and **Plum** (`{colors.plum}` — #340d3f): The darkest purples — used in gradient ramps and dark promotional panels (the deep-purple "Capture tasks" band near the page foot).
- **Accent Blue** (`{colors.accent-blue}` — #5c76ff) and **Accent Cyan** (`{colors.accent-cyan}` — #d7f1fe): Small chromatic accents inside the product UI — calendar event tints, the Aki assistant ring, soft event blocks. The cyan also appears as a low-alpha glow shadow.

### Surface
- **Canvas** (`{colors.canvas}` — #f8fafc): The default page floor — a barely-cool off-white.
- **Neutral / White** (`{colors.neutral}` — #ffffff): Card surfaces, the floating nav pill, integration tiles, product-mockup chrome.
- **Surface Soft** (`{colors.surface-soft}` — #dfe7f0): Quiet pill-badge and avatar fills, soft section blocks.
- **Surface Softer** (`{colors.surface-softer}` — #eaf0f6): The top sale banner and the lightest quiet fills.
- **Navy** (`{colors.navy}` — #212833) and **Deep Blue** (`{colors.deep-blue}` — #01334b): Dark cool tones used in product-UI chrome and icon details.

### Text
- **Ink** (`{colors.ink}` — #000000): All headlines and primary text.
- **Ink Soft** (`{colors.ink-soft}` — #050505): A near-black variant in the neutral ramp.
- **Body** (`{colors.body}` — #323b4a): Default running-text color (low-contrast cool slate).
- **Muted** (`{colors.muted}` — #5e687b): Secondary text — captions, sub-labels, list metadata.
- **Muted Soft** (`{colors.muted-soft}` — #8694a6): Tertiary text — placeholder input text, fine print.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the purple CTA.

### Lines
- **Hairline** (`{colors.hairline}` — #b3becc) and **Hairline Soft** (`{colors.hairline-soft}` — #cbd5e1): The 1px divider/border tones on light surfaces — used on inputs, list rows, and card outlines.

## Typography

### Font Family
The system runs **Inter** end to end — there is no display or monospace companion in the measured set. The fallback stack walks `Inter, sans-serif`. Inter is open-source (OFL), so it ships as-is; no substitution is required.

The voice is created through weight + tracking rather than a second face:
- Headlines (h1/h3): Inter weight 600 with aggressive negative letter-spacing (-0.96px to -1.632px) — engineered, dense, confident.
- Sub-heads and body: Inter weight 500 with mild negative tracking (-0.45px to -0.72px) — quietly tight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 54.4px | 600 | 1.1 | -1.632px | Hero h1 ("One app for tasks & calendars powered by AI") |
| `{typography.heading}` | 32px | 600 | 1.2 | -0.96px | Section headings ("The All-in-One Productivity Suite") |
| `{typography.subtitle}` | 18.08px | 500 | 1.5 | -0.7232px | Sub-heads, feature-card titles, supporting lead lines |
| `{typography.body}` | 15px | 500 | 1.5 | -0.45px | Default running-text, list rows, captions |
| `{typography.button}` | 15px | 600 | 1.0 | -0.45px | Button labels — derived from body at heavier weight (not separately measured) |
| `{typography.nav-link}` | 15px | 500 | 1.5 | -0.45px | Top-nav menu items — derived from body (not separately measured) |

### Principles
Negative letter-spacing is the signature. Every role tracks tighter than default — never set Akiflow type at 0 tracking. Headlines stay at weight 600 (never 700); body and sub-heads stay at 500. The single-family discipline means hierarchy is carried by size and weight, not by typeface contrast.

### Note on Font Substitutes
No licensed/custom faces were detected (`fonts_licensed` is empty). Inter is freely available under the SIL Open Font License and is shipped directly. If unavailable, the system stack falls back to the platform sans-serif (`sans-serif`), accepting minor tracking drift.

## Layout

### Spacing System
- **Base unit:** 4px (the most frequent step, with 8 and 16 the next-densest).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 22px · `{spacing.xxxl}` 24px.
- **Component padding:** 10–12px is the dominant internal padding for list rows, inputs, and small controls; 16–24px for cards.
- The 10px step (frequency 177) and 16px step (frequency 123) carry most of the layout rhythm — Akiflow packs UI tightly inside cards.

### Grid & Container
- **Hero:** Single centered column — headline + sub-line + CTA stacked, with a full-width product-mockup card beneath.
- **Feature grid:** 2-up at desktop ("One calendar that syncs Work & Life" / "Task Manager for Mindful Planning"), reducing on smaller widths.
- **Product feature bands:** Alternating split layouts — product card on one side, a short feature checklist on the other.

> Note: exact container max-width and grid column counts were not captured by the measurement pass — see Known Gaps.

### Whitespace Philosophy
The page alternates roomy vertical breathing between editorial bands with dense, tightly-packed product cards. Inside cards, spacing collapses to 10–12px to mimic real app UI density; between sections, whitespace opens up so each feature claim stands alone.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Canvas sections, body bands |
| Soft ambient | `rgba(0,0,0,0.08) 0px 1px 20px` | Cards, product-mockup chrome, the floating nav pill |
| Tight contact | `rgba(0,0,0,0.16) 0px 1px 6px` | Smaller floating elements, integration tiles |
| Purple glow | `rgba(144,0,255,0.2) 0px 1px 16px` | Primary CTA and brand-accented cards — the purple lift |
| Purple glow strong | `rgba(144,0,255,0.24) 0px 1px 20px` | Emphasized purple CTA states |
| Cyan glow | `rgb(215,241,254) ±5px 1px 22px` | Soft cyan halo behind product/assistant artifacts |
| Layered drop | `rgba(0,0,0,0.12/0.1/0.04)` 3-stop stack | A single deeper card with realistic multi-layer shadow |

The elevation philosophy is **soft and colored** — low-alpha ambient shadows for lift, plus chromatic glows (purple and cyan) that tie depth back to the brand palette. No hard borders carry the weight; the floating cards rely on shadow and rounding instead.

### Decorative Depth
- Integration tiles (Slack, Gmail, Notion, GitHub, Outlook, Google Calendar) float around the hero product card, each on its own white tile with a tight contact shadow — the "ringed by your apps" motif.
- The Aki assistant artifact carries a cyan/purple glow halo distinct from card shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Tiny inline accents, checkboxes |
| `{rounded.sm}` | 6px | Small chips, dropdown items |
| `{rounded.md}` | 8px | Buttons, inputs, list rows |
| `{rounded.lg}` | 12px | Integration tiles, small cards |
| `{rounded.xl}` | 16px | Standard content cards and product-mockup cards |
| `{rounded.x2}` | 20px | Larger feature cards |
| `{rounded.x3}` | 24px | The floating top-nav pill, large panels |
| `{rounded.x4}` | 32px | Hero/promotional container blocks |
| `{rounded.x5}` | 40px | Largest rounded panels |
| `{rounded.pill}` | 50px | Pill badges, avatars, fully-rounded chips |

### Photography & Artifact Geometry
Avatars in the trust/testimonial rows render as full circles via `{rounded.pill}` at ~24px. Product-mockup cards retain their native app chrome (calendar grid cells, inbox rows) with their own internal radii. The page leans heavily on rounded corners everywhere — the smallest sharp edge in the system is 4px.

## Components

### Top Banner & Navigation

**`top-banner`** — A slim full-width promo bar pinned above the nav ("Spring Reset Sale – 20% off Yearly plan"). Light fill (`{colors.surface-softer}`), ink text, `{typography.body}`, ~8px vertical padding. Carries the seasonal sale message centered.

**`top-nav`** — A floating white pill bar (`{colors.neutral}`) sitting on the canvas, rounded `{rounded.x3}` (24px), with the Akiflow wordmark + logo at left, center menu (Why Akiflow?, Akiflow For, Resources, Your Team, Pricing) in `{typography.nav-link}`, and a right cluster: `{component.button-secondary}` ("Log in") + `{component.button-primary}` ("Try for free").

**`nav-link`** / **`nav-link-active`** — Inactive nav items render in `{colors.ink}`; the active item ("Your Team" in the capture) shifts to `{colors.primary}` (#9000ff). Both use `{typography.nav-link}`, transparent background.

### Buttons

**`button-primary`** — The signature purple CTA. Background `{colors.primary}` (#9000ff), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}` (8px), padding ~12px × 20px, lifted by the purple glow shadow (`rgba(144,0,255,0.2)`). Active state `button-primary-active` shifts to `{colors.primary-active}` (#550097).

**`button-secondary`** — White "Log in" button. Background `{colors.neutral}`, text `{colors.ink}`, hairline outline, same radius and padding as primary.

**`cta-primary-large`** — The larger in-body repeating CTA ("Try Akiflow for free") that closes most feature bands. Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.lg}` (12px), padding ~16px × 24px, with a small "7 days free. Cancel anytime." caption beneath in `{colors.muted}`.

### Cards & Containers

**`hero-band`** — The centered hero: h1 in `{typography.display}` (with "powered by AI" set in `{colors.primary}`), a `{typography.subtitle}` lead line, the `{component.cta-primary-large}`, and beneath it the wide product-mockup card. Background `{colors.canvas}`.

**`product-mockup-card`** — The marquee component. A wide white card (`{colors.neutral}`) rounded `{rounded.xl}` (16px), lifted by the soft ambient shadow, showing the actual Akiflow UI — left inbox/task rail, a weekly calendar grid, and the Aki assistant panel. Floating `{component.integration-tile}` chips ring its top edge. Padding ~16px.

**`feature-card`** — Used in the 2-up productivity-suite grid. White surface (`{colors.neutral}`), rounded `{rounded.xl}`, padding `{spacing.xxxl}` (24px), with a `{typography.subtitle}` title above an embedded product fragment (calendar sync, task manager, inbox, AI assistant).

**`feature-section-heading`** — Section titles ("The All-in-One Productivity Suite", "Turn your tasks into a clear Plan") in `{typography.heading}`, `{colors.ink}`, often with a one-line `{colors.primary}` eyebrow above.

### Product-UI Fragments

**`integration-tile`** — Small white tiles (`{colors.neutral}`) rounded `{rounded.lg}` (12px), padding ~10px, each holding a third-party app logo (Slack, Gmail, Notion, GitHub, Outlook, Google Calendar). They float around the hero card with tight contact shadows.

**`list-item-row`** — Task/inbox rows inside product cards. White background, `{colors.body}` text, `{typography.body}`, rounded `{rounded.md}` (8px), padding ~10px × 12px, with a leading checkbox and small app glyph.

**`task-input`** — The "Add new task" input inside the inbox panel. White fill, placeholder in `{colors.muted-soft}`, `{typography.body}`, rounded `{rounded.md}`, padding ~10px × 12px, hairline border.

### Badges & Avatars

**`pill-badge`** — Small rounded chips ("Designed in Italy", "Backed by Y Combinator", week labels). Background `{colors.surface-soft}`, text `{colors.muted}`, `{typography.body}`, rounded `{rounded.pill}`, padding ~4px × 12px.

**`avatar-circle`** — Circular avatars in the trust row ("Trusted by 10,000+…") and calendar attendee stacks. Background `{colors.surface-soft}`, rounded `{rounded.pill}`, ~24px diameter.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#9000ff) for the primary CTA, the gradient headline accent, and brand glow shadows. It is the only saturated color in the system.
- Keep all type in Inter with negative letter-spacing — headlines at 600, body/sub-heads at 500.
- Embed real product UI inside cards (`{component.product-mockup-card}`, `{component.feature-card}`). Akiflow shows the actual app, not illustrations of it.
- Ring the hero product card with `{component.integration-tile}` chips — the "connected to your tools" motif is signature.
- Use soft, low-alpha shadows for lift — the neutral `rgba(0,0,0,0.08)` ambient and the purple `rgba(144,0,255,0.2)` glow.
- Lean rounded everywhere — `{rounded.md}` for controls, `{rounded.xl}` for cards, `{rounded.pill}` for badges and avatars.
- Pair every in-body CTA with the "7 days free. Cancel anytime." reassurance caption in `{colors.muted}`.

### Don't
- Don't set Akiflow type at 0 letter-spacing — the tight negative tracking is the voice.
- Don't introduce a second typeface; the system is Inter-only.
- Don't use the blue/cyan accents (`{colors.accent-blue}`, `{colors.accent-cyan}`) on CTAs — they belong to product-UI tints only.
- Don't render the primary action in any color but `{colors.primary}` (pressed → `{colors.primary-active}`).
- Don't use hard heavy borders for elevation — depth comes from soft shadows and rounding.
- Don't document hover states — primary darkens on press; nothing else changes.

## Responsive Behavior

The reference set includes a desktop landing capture and a full-length scroll. Specific breakpoint widths and collapse rules were not captured by the measurement pass; the guidance below is inferred from the layout structure and should be confirmed against live builds.

### Breakpoints (inferred)

| Name | Behavior |
|---|---|
| Mobile | Nav collapses to a compact bar; hero h1 scales down from 54.4px; product-mockup card and feature grids stack to 1-up; floating integration tiles reduce in count |
| Tablet | Feature grid drops from 2-up toward 1-up; nav menu tightens |
| Desktop | Full floating nav pill with all menu items; 2-up feature grid; wide hero product-mockup card with surrounding integration tiles |

### Touch Targets
- `{component.button-primary}` and `{component.cta-primary-large}` carry ~12–16px vertical padding, comfortably exceeding minimum tap height.
- `{component.list-item-row}` and `{component.task-input}` at ~10–12px padding are tight for touch and may need expansion on mobile.

### Image / Artifact Behavior
- The product-mockup card scales proportionally; the calendar grid and inbox rows must stay legible at smaller widths.
- Integration tiles likely reduce in count or reflow on narrow screens.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.cta-primary-large}`).
2. Variants of an existing component (`-active`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Type stays Inter with negative letter-spacing; headlines 600, body 500. Don't blur the weights.
6. Purple is scarce and load-bearing — keep it on the CTA, the headline accent, and glow shadows.
7. When in doubt about emphasis: bigger Inter at 600 before any color change.

## Known Gaps

- The measured `button-primary` component returned `color #000000, radius 0px, padding 0px` — this is an unstyled/inner-element capture and contradicts the screenshot ground-truth (purple pill, white text, soft glow). Button specs here are documented from the screenshots plus the measured purple (`#9000ff`) and radius scale; exact CTA radius and padding need confirmation.
- A `#0000ee` "link" color was measured — this is the browser-default unstyled-anchor blue, treated as measurement noise and not declared as a token. Real link styling should be confirmed against the live CSS.
- `{typography.button}` and `{typography.nav-link}` are derived from the measured body role (Inter 15px, -0.45px tracking) at adjusted weights — they were not separately measured.
- Container max-width, grid column counts, and section vertical padding were not captured; the Layout and Responsive sections are partially inferred.
- The deep-purple promotional band ("Capture tasks at the speed of thoughts") and its dark-surface CTA were visible in the long-scroll screenshot but not isolated as a measured component; `{colors.primary-deep}` and `{colors.plum}` are documented from the color frequency table.
- Pricing and Features pages were captured in the crawl but no page-specific components (pricing tier cards, comparison tables) were isolated in the measurement set.
- Animation, transition timings, and the Aki assistant interaction states are out of scope.
- Exact avatar/integration-tile pixel sizes are estimated from the screenshots, not measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/akiflow/design-md -->
