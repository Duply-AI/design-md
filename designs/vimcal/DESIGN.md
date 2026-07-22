---
version: alpha
name: Vimcal-design-analysis
description: "A dark, cinematic calendar-software landing experience built on a near-black canvas (#0a0a0a) with luminous purple-to-pink gradient lighting and a single white pill CTA. The system reads as premium-fast productivity software — Plus Jakarta Sans headlines with tight negative tracking, a glowing product mockup of the actual calendar UI floating against a dark glow field, and saturated event tiles (electric blue, hot pink, coral) borrowed directly from the product chrome. Brand voltage comes from the gradient light streaks and the colored calendar-event blocks rather than from chrome or borders."

colors:
  ink: "#ffffff"
  body: "#b0b1b4"
  muted: "#8786a0"
  slate: "#475467"
  canvas: "#0a0a0a"
  surface-black: "#000000"
  surface-dark: "#1a1b1f"
  surface-deep: "#050012"
  surface-navy: "#101828"
  surface-navy-soft: "#181d27"
  surface-navy-deep: "#0d1420"
  surface-blue-deep: "#30356d"
  surface-blue-mid: "#202555"
  surface-light: "#e4ebf3"
  surface-lavender: "#e0e3ff"
  on-light: "#f9fafb"
  accent-purple: "#6a35ff"
  accent-indigo: "#6072ff"
  accent-pink: "#ff67ca"
  accent-pink-deep: "#e35294"

typography:
  heading-lg:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 51.84px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -1.5552px
  heading-md:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 43.2px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.296px
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: 13.6px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0

rounded:
  xs: 5px
  sm: 6px
  md: 7px
  lg: 8px
  xl: 10px

spacing:
  xxs: 8px
  xs: 12px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  xxl: 64px
  section: 96px
  section-lg: 128px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    height: 64px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  button-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: 96px
  hero-subhead:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  fine-print:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
  product-mockup-card:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  event-tile-blue:
    backgroundColor: "{colors.accent-indigo}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  event-tile-pink:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  event-tile-pink-deep:
    backgroundColor: "{colors.accent-pink-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
---

## Overview

Vimcal's marketing surface is a dark, cinematic calendar-software interface — a near-black canvas (`{colors.canvas}` — #0a0a0a) lit from the right edge by a luminous purple-to-pink gradient streak, with the actual product UI (a calendar grid carrying saturated event tiles) floating in the glow. The system reads as premium-fast productivity software for power users: confident, sparse, and lit like a product hero shot rather than a SaaS template.

The type voice is **Plus Jakarta Sans** throughout — a geometric humanist sans used for both display headlines and body text. Headlines run at weight 400 with aggressive negative letter-spacing (-1.5552px at the largest size), giving the hero a tight, modern, slightly editorial feel rather than a heavy bold-marketing tone.

Component voltage comes from two places: the **gradient light field** (the purple/indigo/pink streaks measured as `{colors.accent-purple}` #6a35ff, `{colors.accent-indigo}` #6072ff, `{colors.accent-pink}` #ff67ca) and the **colored calendar-event tiles** shown directly inside the product mockup — electric blue, hot pink, and deep-coral blocks lifted straight from Vimcal's product chrome. The only solid UI control is a single white pill CTA ("Try for free") that repeats in the nav and the hero.

There is no light mode on the captured pages — the entire surface is dark, anchored on `{colors.canvas}` (#0a0a0a) with pure-black (`{colors.surface-black}` — #000000) deep zones and near-black navy surfaces (`{colors.surface-navy}` — #101828) where product UI sits.

**Key Characteristics:**
- Dark canvas (`{colors.canvas}` — #0a0a0a) with a single white pill CTA (`{component.button-primary}`). The white button is the only high-contrast solid control in the system.
- `Plus Jakarta Sans` for everything — display headlines at weight 400 with tight negative tracking (-1.5552px / -1.296px) and body at 18px / 1.6 line-height.
- Gradient light field — purple (`{colors.accent-purple}`), indigo (`{colors.accent-indigo}`) and pink (`{colors.accent-pink}`) streaks light the right side of the hero where the product mockup sits.
- Real product UI shown in-hero — a floating calendar grid carrying colored event tiles (`{component.event-tile-blue}`, `{component.event-tile-pink}`, `{component.event-tile-pink-deep}`) rather than a marketing illustration.
- Saturated event tiles are the chromatic accent — Vimcal keeps the marketing chrome monochrome (white-on-black) and lets the product's own event colors carry the brand.
- Small, tight radii — measured 5–10px, with `{rounded.lg}` (8px) on cards and the CTA.
- Generous vertical rhythm — `{spacing.section}` (96px) and `{spacing.section-lg}` (128px) between bands, breathing space befitting a hero-led dark page.

## Colors

### Brand & Accent
- **Accent Purple** (`{colors.accent-purple}` — #6a35ff): The dominant gradient-light hue lighting the hero's right edge.
- **Accent Indigo** (`{colors.accent-indigo}` — #6072ff): Secondary gradient tone; also the fill of the blue calendar event tiles ("Design Sync", "Lunch").
- **Accent Pink** (`{colors.accent-pink}` — #ff67ca): The hot-pink gradient highlight and the "Growth" event tile fill.
- **Accent Pink Deep** (`{colors.accent-pink-deep}` — #e35294): A deeper magenta variant used in event tiles and the lower gradient streaks.
- **Surface Blue Deep / Mid** (`{colors.surface-blue-deep}` — #30356d, `{colors.surface-blue-mid}` — #202555): Deep desaturated blues used in the product UI background grid and glow falloff.

These accents are near-exclusively reserved for the gradient light field and the product's own event tiles — the marketing chrome (nav, CTA, headlines) stays monochrome.

### Surface
- **Canvas** (`{colors.canvas}` — #0a0a0a): The default page floor for the entire dark site.
- **Surface Black** (`{colors.surface-black}` — #000000): Pure-black deep zones at the bottom of the long-scroll page.
- **Surface Deep** (`{colors.surface-deep}` — #050012): A near-black purple-tinted surface behind the product mockup.
- **Surface Dark** (`{colors.surface-dark}` — #1a1b1f): Slightly raised dark surface for cards.
- **Surface Navy / Soft / Deep** (`{colors.surface-navy}` — #101828, `{colors.surface-navy-soft}` — #181d27, `{colors.surface-navy-deep}` — #0d1420): The dark blue-gray surfaces inside the calendar mockup chrome.
- **Surface Light** (`{colors.surface-light}` — #e4ebf3) and **Surface Lavender** (`{colors.surface-lavender}` — #e0e3ff): Light tints measured in small UI fragments (likely event-tile labels or light chips inside product UI).
- **On Light** (`{colors.on-light}` — #f9fafb): Off-white used in light UI fragments.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All headlines and primary text on the dark canvas.
- **Body** (`{colors.body}` — #b0b1b4): Default running-text color — a soft gray for the hero sub-headline and body paragraphs.
- **Muted** (`{colors.muted}` — #8786a0): Tertiary text — fine print ("*No credit card required"), captions.
- **Slate** (`{colors.slate}` — #475467): A desaturated slate used for low-emphasis labels inside product UI.

## Typography

### Font Family
The system runs **Plus Jakarta Sans** for everything — display headlines, body copy, and button labels. Plus Jakarta Sans is an open-source geometric humanist sans (available on Google Fonts), so no substitution is required — it ships as-is. The recommended fallback stack is `Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

The system uses a single weight strategy: headlines and body all measured at weight 400, with only the button stepping up to 500. The headline character comes from size and aggressive negative tracking rather than from bold weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.heading-lg}` | 51.84px | 400 | 1.2 | -1.5552px | Hero h1/h2 ("The calendar for people with too many meetings") |
| `{typography.heading-md}` | 43.2px | 400 | 1.1 | -1.296px | Secondary section heads |
| `{typography.body}` | 18px | 400 | 1.6 | 0 | Hero sub-headline, running text |
| `{typography.button}` | 13.6px | 500 | 1.6 | 0 | Button labels, nav links, fine print |

### Principles
The headline voice is defined by **negative letter-spacing at weight 400** — never bolder. The tight tracking (roughly -3% of the font size) gives the large headlines a precise, condensed-modern feel. Body copy stays at 18px with a relaxed 1.6 line-height for legible reading against the dark canvas. The only weight bump is the button label at 500 — keeping interactive labels slightly more assertive than body text.

### Note on Font Substitutes
No licensed typefaces were detected (`fonts_licensed` is empty). Plus Jakarta Sans is open-source and ships directly; no substitute is needed. If unavailable, **Inter** at weight 400 with -0.03em tracking is an acceptable fallback, though it loses Plus Jakarta Sans' slightly geometric character.

## Layout

### Spacing System
- **Tokens:** `{spacing.xxs}` 8px · `{spacing.xs}` 12px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 96px · `{spacing.section-lg}` 128px.
- **Section padding:** `{spacing.section}` (96px) and `{spacing.section-lg}` (128px) for the major vertical rhythm of the long-scroll dark page.
- **Component internal padding:** `{spacing.md}` (24px) for the product mockup; smaller `{spacing.xxs}`–`{spacing.xs}` (8–12px) inside event tiles.
- **Note:** A handful of off-grid measured values (5px, 10px, 14px, 18px, 43px, 86px, 115px) appear in product-chrome fragments; the clean tokens above represent the marketing-layout rhythm.

### Grid & Container
- **Hero:** A two-zone split — headline + sub-head + CTA on the left, the floating calendar product mockup on the right edge bleeding into the gradient light field.
- **Top nav:** Logo at left, two center menu items ("For Executive Assistants", "Pricing"), and a right-side "Try for free" pill.
- **Container:** Content left-aligned within a wide centered container; the product mockup extends past the right edge into the glow.

### Whitespace Philosophy
Vimcal uses dramatic whitespace — the hero occupies a full viewport with vast dark negative space below the fold (visible in the full-page capture). The dark canvas plus generous 96–128px band spacing makes the lit hero feel like a product spotlight rather than a dense marketing page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border on `{colors.canvas}` | Body sections, top nav, headlines |
| Inset highlight | `rgba(255,255,255,0.1) 0px 2px 5px 0px inset` | A subtle top-edge inner highlight on a raised surface (measured) |
| Glow rim | `rgba(23,144,255,0.5) 4px 0px 11px 0px inset, rgba(255,89,193,0.5) -4px 0px 11px 0px inset` | A blue-left / pink-right dual inset glow rim — the signature lit edge on a hero element (measured) |
| Gradient light field | Purple/indigo/pink radial glow behind the product mockup | Decorative depth from light, not shadow |

The elevation philosophy is **light, not shadow** — depth comes from the gradient glow field and the dual-color inset glow rim rather than from conventional drop shadows. The measured `card` carries `shadow: none`; surfaces separate by tone (`{colors.canvas}` vs `{colors.surface-dark}` vs `{colors.surface-deep}`) and by the glow.

### Decorative Depth
- The right-edge gradient streak (purple → indigo → pink) is the primary depth device — it lights the floating calendar mockup as if from a hidden source.
- The dual-color inset glow rim (blue-left / pink-right) gives the lit hero element a neon-edge quality consistent with the gradient palette.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 5px | Small UI chips, measured card radius |
| `{rounded.sm}` | 6px | Calendar event tiles |
| `{rounded.md}` | 7px | Mid-size UI fragments |
| `{rounded.lg}` | 8px | CTA pill, product mockup card |
| `{rounded.xl}` | 10px | Largest measured radius — outer mockup containers |

Radii are uniformly small and tight (5–10px) — the system never uses large pill rounding or fully-rounded corners on the captured surfaces. The white CTA appears slightly rounded in the screenshots; its rounded value is documented as `{rounded.lg}` (8px) **derived** from screenshot ground-truth, since the measured anchor reported a 0px radius (see Known Gaps).

### Photography / Product Geometry
The hero's product mockup is the only imagery — a calendar grid with rounded event tiles (`{rounded.sm}`) shown at a slight perspective tilt, floating in the gradient glow. No avatars or photographic imagery were captured.

## Components

### Top Navigation

**`top-nav`** — Dark nav bar on `{colors.canvas}`, 64px tall (derived from the `{spacing.xxl}` rhythm). Carries the Vimcal wordmark + logo at left, two center menu items in `{component.nav-link}` ("For Executive Assistants", "Pricing"), and a right-side `{component.button-nav}` ("Try for free"). All nav text is `{colors.ink}` white in `{typography.button}`.

**`nav-link`** — Transparent inline nav item, `{colors.ink}` text, `{typography.button}` (Plus Jakarta Sans 13.6px / 500).

### Buttons

**`button-primary`** — The signature white pill CTA. Background `{colors.ink}` (#ffffff), text `{colors.canvas}` (#0a0a0a), type `{typography.button}`, rounded `{rounded.lg}` (8px, derived), with a trailing arrow icon. Padding 16px × 24px (derived from spacing tokens). The only high-contrast solid control in the system; repeats in the hero ("Try for free") above the "*No credit card required" fine print.

**`button-nav`** — The nav-bar variant of the white CTA. Same white-on-dark treatment, slightly tighter padding (12px × 16px), rounded `{rounded.lg}`.

### Hero & Content

**`hero-band`** — Full-viewport dark hero on `{colors.canvas}`. Left zone carries the `{typography.heading-lg}` headline in `{colors.ink}`, a `{component.hero-subhead}` paragraph, the `{component.button-primary}`, and `{component.fine-print}`. Right zone holds the `{component.product-mockup-card}` lit by the gradient field. Vertical padding `{spacing.section}` (96px).

**`hero-subhead`** — Sub-headline paragraph in `{colors.body}` (#b0b1b4), `{typography.body}` (18px / 1.6). Describes the product beneath the headline.

**`fine-print`** — Low-emphasis caption in `{colors.muted}` (#8786a0), `{typography.button}`. Used for "*No credit card required" below the CTA.

**`product-mockup-card`** — The floating calendar UI shown in the hero. Background `{colors.surface-deep}` (#050012) blending into the dark navy product chrome (`{colors.surface-navy}`), rounded `{rounded.lg}`, padding `{spacing.md}` (24px). Holds the calendar grid with day columns and the colored event tiles. This is the real product UI shown directly, not a marketing illustration.

**`card`** — Generic dark surface card. Background `{colors.surface-dark}` (#1a1b1f), rounded `{rounded.xs}` (5px, measured), `shadow: none` (measured). The base container for non-hero content sections.

### Calendar Event Tiles

**`event-tile-blue`** — Electric-blue event block. Background `{colors.accent-indigo}` (#6072ff), text `{colors.ink}`, `{typography.button}`, rounded `{rounded.sm}` (6px), padding 8px × 12px. Used for "Design Sync" and "Lunch" tiles.

**`event-tile-pink`** — Hot-pink event block. Background `{colors.accent-pink}` (#ff67ca), text `{colors.ink}`, rounded `{rounded.sm}`. Used for "Growth".

**`event-tile-pink-deep`** — Deep-magenta event block. Background `{colors.accent-pink-deep}` (#e35294), text `{colors.ink}`, rounded `{rounded.sm}`. A deeper variant within the same tile family.

## Do's and Don'ts

### Do
- Keep the marketing chrome monochrome — white text and a single white CTA on `{colors.canvas}`. Let the product's event-tile colors and the gradient glow carry the chroma.
- Use `Plus Jakarta Sans` at weight 400 with negative letter-spacing for headlines. The tight tracking is the type voice.
- Reserve the white pill (`{component.button-primary}`) for the single primary action per band.
- Show the real product UI (`{component.product-mockup-card}`) rather than abstract illustrations — Vimcal's brand is the speed and beauty of its actual calendar.
- Light the hero from the right edge with the purple-indigo-pink gradient field — it's the system's signature depth device.
- Keep radii small (5–10px). The system never uses large rounding.

### Don't
- Don't introduce a light mode — the entire captured surface is dark, anchored on #0a0a0a.
- Don't bold headlines beyond weight 400 — emphasis comes from size and tracking, not weight.
- Don't use the accent colors (purple/indigo/pink) on chrome buttons or text — they belong to the gradient field and event tiles only.
- Don't add drop shadows to cards — depth is built with tone and glow; the measured card carries `shadow: none`.
- Don't crowd the hero — the dramatic dark negative space below the fold is intentional.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses; hero headline scales down from ~52px; product mockup shrinks and may shift below the headline |
| Tablet | 768–1024px | Nav stays horizontal; hero retains two-zone split with a smaller mockup |
| Desktop | 1024–1440px | Full hero split — headline left, product mockup bleeding off the right edge into the gradient |
| Wide | > 1440px | Same as desktop with more outer breathing room around the lit hero |

*Breakpoint specifics are inferred from the two captured page widths; exact thresholds were not measured (see Known Gaps).*

### Touch Targets
- `{component.button-primary}` carries ~16px × 24px padding around a 13.6px label — comfortably above minimum tap size.
- `{component.nav-link}` items sit in the 64px nav bar with adequate vertical hit area.

### Collapsing Strategy
- The hero's two-zone split collapses to single-column on narrow viewports — headline + sub-head + CTA first, product mockup below or scaled.
- The gradient light field and product mockup scale proportionally; the calendar grid stays legible.

### Image Behavior
- The product mockup retains its native perspective and aspect ratio while scaling with the viewport.
- The gradient glow extends edge-to-edge regardless of width.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.event-tile-blue}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Plus Jakarta Sans 400 with negative tracking. Body stays 18px / 1.6. The white pill stays the only solid CTA.
6. Chroma belongs to the gradient field and event tiles — keep the chrome monochrome.
7. When in doubt about emphasis: bigger headline before bolder headline.

## Known Gaps

- The measured `button-primary` reported `radius: 0px` and `padding: 0px` — Vimcal renders its CTA as a styled anchor/flex element whose padding and rounding sit on inner wrappers the analyzer didn't capture. The pill rounding (`{rounded.lg}`) and padding values are documented as **derived** from screenshot ground-truth.
- Only two states (landing + pricing) were captured; the pricing page's specific components (tier cards, plan tables) were not measured and are absent from the component set.
- No active/pressed/disabled button states were extracted — only the default white CTA.
- Exact responsive breakpoints are inferred from two capture widths, not measured.
- The light tints (`{colors.surface-light}` #e4ebf3, `{colors.surface-lavender}` #e0e3ff, `{colors.on-light}` #f9fafb) were measured in small UI fragments; their precise application inside the product chrome is not confirmed.
- An orange/coral event tile is visible in the screenshots ("Adam 1:1", "Work") but no matching warm hex was measured; it is therefore not tokenized.
- Animation, scroll, and gradient-motion timings are not in scope.
- Off-grid spacing values (5, 10, 14, 18, 43, 86, 115px) were measured inside product-UI fragments and are not part of the documented marketing-layout scale.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/vimcal/design-md -->
