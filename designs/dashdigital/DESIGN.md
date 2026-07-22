---
version: alpha
name: DashDigital-design-analysis
description: "A quiet, editorial digital-studio portfolio built on a warm light-gray canvas (#f0f0f0) with near-black ink type and a single warm-stone accent. The system is austere and typographic — enormous Founders Grotesk display headlines set at ultra-tight leading (0.8) with negative tracking, flat zero-radius work-cards holding full-bleed project imagery, and small uppercase grotesque labels for navigation and metadata. There are no shadows, no rounded cards, and no color voltage — brand presence comes entirely from scale contrast between a wall-sized hero headline and hairline-thin caption labels, plus the occasional beige-stone tone borrowed from the photography."
colors:
  primary: "#2a2a2a"
  ink: "#2a2a2a"
  near-black: "#0f0f0f"
  black: "#000000"
  muted: "#757575"
  muted-soft: "#949494"
  canvas: "#f0f0f0"
  surface: "#fafafa"
  surface-strong: "#d6d6d6"
  accent-stone: "#ccc4b9"
  on-dark: "#ffffff"
typography:
  display-hero:
    fontFamily: "Founders Grotesk, Space Grotesk, sans-serif"
    fontSize: 100.8px
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.03em"
  title-md:
    fontFamily: "Founders Grotesk, Space Grotesk, sans-serif"
    fontSize: 21.6px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  label:
    fontFamily: "Founders Grotesk, Space Grotesk, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Founders Grotesk, Space Grotesk, sans-serif"
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "normal"
  button:
    fontFamily: "Founders Grotesk, Space Grotesk, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.02em"
rounded:
  none: 0px
  pill: 999px
spacing:
  xxs: 4px
  xs: 12px
  sm: 20px
  md: 24px
  lg: 29px
  xl: 32px
  xxl: 58px
  section: 86px
components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  button-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0px
  button-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-hero}"
    padding: 86px
  work-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  work-card-media:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.none}"
  client-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  placeholder-media:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

## Overview

DashDigital is a design-studio portfolio built as a quiet, typography-first editorial surface. The page floor is a warm light-gray canvas (`{colors.canvas}` — #f0f0f0), the dominant type color is near-black ink (`{colors.ink}` — #2a2a2a), and the entire system is set in one typeface — **Founders Grotesk** — across every role. There is no color voltage: the palette is a monochrome gray-scale run with a single warm-stone accent (`{colors.accent-stone}` — #ccc4b9) that appears to be sampled from the project photography rather than applied as a brand hue.

The brand's whole presence comes from **scale contrast**. The hero headline is set enormous — `{typography.display-hero}` measures ~100.8px with an ultra-tight 0.8 line-height and -0.03em tracking — so a three-line headline fills the viewport like a poster. Directly beneath it sit tiny uppercase grotesque labels (`{typography.label}` — 14px) for sub-copy and metadata. There is no mid-size type doing gentle transitions; the system jumps straight from wall-sized display to hairline caption.

Structure is austere and flat. Work is shown in **zero-radius cards** (`{rounded.none}` — measured 0px on both button and card) holding full-bleed project imagery, laid out in a 2-up grid. There are **no shadows anywhere** (the analyzer captured an empty shadow set), no rounded card corners, and no elevation tricks — depth is communicated purely by the imagery inside cards and by generous whitespace between bands.

**Key Characteristics:**
- Warm light-gray canvas (`{colors.canvas}` — #f0f0f0) instead of pure white — a subtle, gallery-like neutral.
- One typeface everywhere — Founders Grotesk (substituted with Space Grotesk here). Display at weight 400, body at weight 300.
- Wall-sized hero headline at ~100.8px with 0.8 line-height — the dominant brand gesture.
- Flat, zero-radius, shadowless work-cards holding full-bleed project photography.
- Small uppercase grotesque labels (14px) for navigation, section titles, and metadata rows.
- Pill-radius (`{rounded.pill}` — 999px) reserved for outlined text CTAs like "VIEW CASE STUDY", "ABOUT US", "CONTACT US".
- Single warm-stone accent (`{colors.accent-stone}` — #ccc4b9) sampled from photography — not applied to UI chrome.

## Colors

### Brand & Accent
- **Primary / Ink** (`{colors.primary}` / `{colors.ink}` — #2a2a2a): The single dominant color — used for all headlines, body text, nav, labels, and the outlined-pill CTA text. This is a near-black, not pure black; it reads slightly softer against the warm-gray canvas. It was the overwhelmingly most frequent computed text color (frequency 769).
- **Accent Stone** (`{colors.accent-stone}` — #ccc4b9): A warm beige-stone tone that appears in low frequency (23). It reads as sampled from the project photography (concrete, skin, warm surfaces) rather than as a deliberate UI accent. Use it sparingly, never on interactive chrome.

### Neutrals
- **Black** (`{colors.black}` — #000000) and **Near-Black** (`{colors.near-black}` — #0f0f0f): Deep tones used in imagery mattes and occasional strong type/dividers.
- **Canvas** (`{colors.canvas}` — #f0f0f0): The universal page floor — a warm light gray.
- **Surface** (`{colors.surface}` — #fafafa): A very-slightly-lighter neutral used for interior panels.
- **Surface Strong** (`{colors.surface-strong}` — #d6d6d6): Medium gray used for image placeholders and empty-media blocks (the large grayscale about-image block).
- **Muted** (`{colors.muted}` — #757575) and **Muted Soft** (`{colors.muted-soft}` — #949494): Secondary and tertiary text tones — metadata, fine-print, faded labels.
- **On Dark** (`{colors.on-dark}` — #ffffff): White used only atop dark project imagery (e.g., the "Healthy Wealth" overlay wordmark).

### Semantic
No semantic status colors (success / warning / error) were measured — this is a portfolio surface with no forms captured. See Known Gaps.

## Typography

### Font Family
The entire system runs on **Founders Grotesk** — a single commercial neo-grotesque used across display, titles, body, navigation, labels, and buttons. There is no secondary family. Founders Grotesk is a licensed retail typeface (Klim Type Foundry) and is **not** an open-source webfont; the frontmatter documents an open substitute stack.

The differentiation between roles is achieved through **size and weight**, not through family switching:
- Display + titles + labels + buttons use weight **400**.
- Body copy drops to weight **300** (light) at 16px — a subtle textural softening for running text.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 100.8px | 400 | 0.8 | -0.03em | The wall-sized hero headline ("A DIGITAL DESIGN STUDIO DRIVEN BY RESEARCH & STRATEGY") |
| `{typography.title-md}` | 21.6px | 400 | 0.9 | -0.03em | Section headings / h3 ("ABOUT", "FEATURED CLIENTS", "AWARDS & RECOGNITIONS") |
| `{typography.label}` | 14px | 400 | 1.0 | -0.02em | Uppercase nav items, section labels, metadata rows, client-list rows (h2/h4 roles) |
| `{typography.body}` | 16px | 300 | 1.2 | normal | Running paragraph copy — the About and intro descriptions |
| `{typography.button}` | 14px | 400 | 1.0 | -0.02em | Pill CTA labels and text-button labels |

### Principles
The signature move is the ultra-tight leading on display type — a 0.8 line-height means the three hero lines nearly touch, forming a solid typographic block. Negative tracking (-0.03em on display and titles, -0.02em on labels) tightens the grotesque forms further. Body copy is the only place weight drops to 300, giving paragraphs a lighter, more open texture than the confident 400 used everywhere else.

Note that the label role (14px, -0.02em) is rendered visually uppercase in nav and metadata rows, but its measured letter-spacing is negative — so it is documented as `label`, not as a tracked caption-uppercase role.

### Note on Font Substitutes
**Founders Grotesk is a commercial license and cannot be shipped as a webfont.** The closest open-source substitute is **Space Grotesk** (a free grotesque with similarly tight, slightly mechanical forms) at weight 400 for display/labels and 300 for body. **Archivo** (weights 300/400) is an alternate open substitute with a similar neo-grotesque character. Preserve the negative tracking and 0.8-ish display leading with either substitute to keep the poster-like hero gesture.

## Layout

### Spacing System
- **Base unit:** 4px (the most frequent small increment, frequency 36).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 12px · `{spacing.sm}` 20px · `{spacing.md}` 24px · `{spacing.lg}` 29px · `{spacing.xl}` 32px · `{spacing.xxl}` 58px · `{spacing.section}` 86px.
- **Section rhythm:** `{spacing.section}` (86px) separates major editorial bands (hero → work grid → about → clients → awards → footer).
- **`{spacing.lg}` (29px)** is a high-frequency (36) internal padding/gap value — it appears to govern grid gutters and label-to-content spacing.
- **Small increments** (12px / 20px / 24px) govern metadata rows, label stacks, and inline spacing.

### Grid & Container
- **Work grid:** 2-up at desktop — two full-bleed project cards per row.
- **Client / brand lists:** Full-width rows with a left name column and right tag column ("RESEARCH · STRATEGY", etc.), separated by hairline dividers.
- **Hero:** Full-width headline block, left-aligned, with a small label stack ("DESIGNED TO ENGAGE / BUILT TO CONNECT") beneath.
- **Footer:** Multi-column meta layout (business enquiries, hours, address, social links) at the base of the page.

### Whitespace Philosophy
DashDigital uses whitespace as the primary compositional tool. Bands are widely separated (86px), and the hero leaves large empty margins around the type block so the headline reads as a poster. The austerity is deliberate — the layout never crowds, and imagery is the only chromatic content on an otherwise monochrome page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border, no radius | Every surface — cards, buttons, nav, footer |
| Media block | Full-bleed imagery inside zero-radius frames | Work cards, team photos, article thumbnails |
| Placeholder | `{colors.surface-strong}` (#d6d6d6) fill | Empty/loading media blocks (the large gray about-image) |

The analyzer captured **zero shadows** — the system is entirely flat. Depth is communicated only by the photography inside cards and by whitespace between bands. There is no drop-shadow, no border elevation, no glass or neumorphism. This is a gallery-flat aesthetic where the imagery does all the visual lifting.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Work cards, media frames, and text buttons — the default. Measured 0px on both `button-primary` and `card`. |
| `{rounded.pill}` | 999px | Outlined text CTAs ("VIEW CASE STUDY", "ABOUT US", "CONTACT US", "VIEW ALL"). This was the only non-zero radius measured (frequency 33). |

The shape language is binary: everything structural is a hard 0px rectangle, and the only rounded element is the pill CTA. There is no intermediate radius scale — the contrast between razor-sharp cards and fully-round pill buttons is itself a stylistic signal.

### Photography Geometry
Project imagery fills zero-radius rectangular frames edge-to-edge. There is no image rounding, no circular crop, and no aspect-ratio masking beyond the rectangular card. Overlay wordmarks (e.g. "The Healthy Wealth") sit directly on the photography in `{colors.on-dark}`.

## Components

### Navigation

**`top-nav`** — A minimal top bar on the `{colors.canvas}` floor. The "DashDigital®" wordmark sits at left; the menu (WORK, CASE STUDIES, SERVICES, ABOUT, INSIGHTS, CONTACT) spreads across the right in `{typography.label}` (uppercase 14px). No background fill distinct from the canvas, no border, no shadow.

**`nav-link`** — Individual uppercase menu items. Transparent background, `{colors.ink}` text, `{typography.label}`, `{rounded.none}`. Measured with 0px radius and 0px padding — these are pure text links, not chips.

### Buttons

**`button-text`** — The measured default button (`button-primary` in the analyzer): transparent background, `{colors.primary}` text, `{rounded.none}`, 0px padding. Used for inline text actions.

**`button-pill`** — The outlined pill CTA seen throughout ("VIEW CASE STUDY", "ABOUT US", "CONTACT US", "VIEW ALL"). Transparent fill with a thin ink outline, `{colors.ink}` text, `{typography.button}`, `{rounded.pill}` (999px). Padding is derived at ~12px × 24px from measured spacing tokens (`{spacing.xs}` / `{spacing.md}`) to match the observed pill proportions — derived. This is the only rounded interactive element in the system.

### Cards & Media

**`hero-band`** — The full-width opening band on `{colors.canvas}`. Carries the `{typography.display-hero}` headline left-aligned with a small `{typography.label}` sub-stack beneath. Vertical padding at `{spacing.section}` (86px).

**`work-card`** — A flat, zero-radius project card in the 2-up work grid. `{colors.canvas}` container, `{rounded.none}`, no shadow. Below the media sits a `{typography.label}` metadata row (e.g. "CREATIVE DIRECTION · DIGITAL DESIGN · WEB DEVELOPMENT") and the project name.

**`work-card-media`** — The full-bleed image frame inside a work card. `{colors.surface-strong}` placeholder fill before the image loads, `{rounded.none}`, no radius or shadow.

**`placeholder-media`** — Large empty gray media block (`{colors.surface-strong}` — #d6d6d6) used in the About band as an image placeholder. Zero radius, no shadow.

### Lists

**`client-row`** — A full-width row in the "BRANDS WE'VE WORKED WITH" list. Left column holds the client name, right column holds tags ("RESEARCH · STRATEGY") in `{typography.label}`, with a "MORE +" affordance at the far right. `{colors.canvas}` background, `{rounded.none}`, hairline dividers between rows.

### Footer

**`footer`** — The closing meta band on `{colors.canvas}`. Multi-column layout carrying business enquiries, business hours, address, and social links (DRIBBBLE, INSTAGRAM, LINKEDIN) in `{typography.label}`. No dark inversion — the footer stays on the same warm-gray canvas as the rest of the page.

## Do's and Don'ts

### Do
- Set the hero headline enormous with tight leading (`{typography.display-hero}`, 0.8 line-height, -0.03em). The poster-scale headline is the entire brand gesture.
- Keep everything in Founders Grotesk (or the Space Grotesk substitute). One family, differentiated only by size and weight.
- Use warm light-gray canvas (`{colors.canvas}` — #f0f0f0), never pure white. The subtle warmth is part of the gallery mood.
- Keep work-cards flat, zero-radius, and shadowless. Let the project photography carry all visual weight.
- Reserve `{rounded.pill}` exclusively for outlined text CTAs. Nothing else is rounded.
- Use `{typography.label}` uppercase for nav, metadata, and list rows — the tiny caps are the counterweight to the giant hero.
- Drop body copy to weight 300 for its lighter running texture; keep everything else at 400.

### Don't
- Don't introduce color voltage. The system is monochrome — the only non-gray tone (`{colors.accent-stone}`) comes from photography, not from painted UI.
- Don't add shadows or card borders. The analyzer measured zero elevation; flat is the aesthetic.
- Don't round card corners. The hard-rectangle vs. pill-button contrast is intentional.
- Don't add mid-size headings to "smooth" the hierarchy jump. The leap from ~100px display to 14px labels is the intended tension.
- Don't set body copy at 400 or display type below 400. The weight split (300 body / 400 everything else) is deliberate.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

### Breakpoints
No breakpoint values were measured (only the desktop landing page was captured). The following is inferred from the desktop layout and marked as guidance, not measured spec.

| Name | Width | Key Changes (inferred) |
|---|---|---|
| Mobile | < 768px | Hero headline scales down from ~100px; work grid collapses 2-up → 1-up; nav likely collapses to a menu trigger; client rows stack name-over-tags |
| Tablet | 768–1024px | Work grid may stay 2-up but tighten gutters; hero scales proportionally |
| Desktop | > 1024px | Full 2-up work grid, wall-sized hero, horizontal nav |

### Touch Targets
- `{component.button-pill}` padding is derived at ~12px × 24px — adequate for tap targets at the pill height observed.
- `{component.nav-link}` items are pure text with 0px measured padding; on touch they would need enlarged hit areas (see Known Gaps).

### Collapsing Strategy
- The 2-up work grid is the primary responsive pressure point; it collapses to a single column on narrow viewports.
- The hero headline's font size must scale fluidly — at 100px it would overflow small viewports.
- Client / brand list rows collapse their name/tag two-column layout to a stacked arrangement.

## Iteration Guide

1. Focus on ONE component at a time; reference its YAML key directly (`{component.work-card}`, `{component.button-pill}`).
2. Variants (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the single-family discipline: Founders Grotesk (or Space Grotesk substitute) at 400 for display/UI, 300 for body.
6. Preserve the flat, shadowless, zero-radius surface language — the only rounded element is the pill CTA.
7. When in doubt about emphasis: bigger display type before any color or shadow. Scale is the only lever this system uses.

## Known Gaps

- **Founders Grotesk is a commercial license** (Klim Type Foundry) and cannot be shipped as a webfont; the `fonts_licensed` array was empty in the analysis, but the substitution requirement still applies — Space Grotesk / Archivo are documented as open replacements.
- **Radius conflict:** the analyzer measured 0px radius on both `button-primary` and `card`, yet the screenshots clearly show pill-shaped outlined CTAs and the radius set contains a 999px value (frequency 33). This was reconciled as `button-text` (0px, the captured default) vs. `button-pill` (999px, the visible outlined CTA). The exact border weight and padding of the pill CTA were not measured and are derived.
- **No shadow tokens** were captured (empty shadow set) — confirmed flat, but any subtle image-matte shadows inside photography are product content, not system tokens.
- **No breakpoints, transitions, or animation timings** were measured — only the desktop landing page was captured. Responsive behavior is inferred.
- **No semantic status colors** (success / warning / error) or form/input components were captured — this is a portfolio surface with no forms in scope.
- **Accent-stone (`{colors.accent-stone}`) origin is ambiguous** — it appears at low frequency and reads as sampled from photography rather than applied as a deliberate UI hue; treat with caution before promoting it to a brand token.
- **Low-frequency neutrals** (#161616, #3c3c3c, #a8acaa, #65756b, #bcbcb4, #cecece, #cccccc) were measured but not promoted to named roles; they likely originate from imagery and anti-aliasing rather than the design system.
- **Nav / link touch-target sizing** was measured at 0px padding (pure text), so mobile hit-area treatment is undocumented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dashdigital/design-md -->
