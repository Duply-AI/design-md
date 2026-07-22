---
version: alpha
name: Samara-design-analysis
description: "A cinematic, product-marketing interface for prefab backyard homes (ADUs) built on a pure-black canvas that hands off to warm cream and cool-blue editorial sections. The system reads as calm, architectural, and premium — light-weight Regola display typography set large, sharp zero-radius image cards, and a single bright-blue pill CTA punctuated by a hot-orange accent action. Brand voltage comes from full-bleed product photography and oversized thin headlines rather than from chrome."
colors:
  canvas: "#000000"
  primary: "#0096f7"
  on-primary: "#ffffff"
  accent-orange: "#ff4000"
  accent-amber: "#ffbd00"
  accent-blue-deep: "#263db5"
  surface-cream: "#f7f7f0"
  surface-cream-soft: "#fdfdf7"
  surface-warm: "#e0ded4"
  surface-warm-alt: "#d7d5cb"
  surface-light: "#f7f7f7"
  ink: "#333333"
  body: "#666666"
  muted: "#808080"
  hairline: "#d3d3d3"
  hairline-soft: "#cccccc"
typography:
  display:
    fontFamily: "regola-light, Archivo, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.03em
  title:
    fontFamily: "regola-light, Archivo, sans-serif"
    fontSize: 23.04px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  heading:
    fontFamily: "regola-light, Archivo, sans-serif"
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  body:
    fontFamily: "regola-book, Archivo, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
rounded:
  none: 0px
  xs: 2px
  sm: 6px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 32px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 13.5px 18px 14px
  button-cta-orange:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 13.5px 18px 14px
  button-pill-light:
    backgroundColor: "{colors.surface-cream-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 13.5px 18px 14px
  image-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    shadow: none
  input:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  section-band-cream:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 24px
  section-band-blue:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display}"
    padding: 24px
  configurator-panel:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-cream-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 18px
  step-tile:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 18px
---

## Overview

Samara's landing page is a cinematic product-marketing surface for prefab backyard homes (ADUs). It opens on a pure-black canvas (`{colors.canvas}` — #000000) carrying a thin white wordmark, an inline nav, and two contrasting pill CTAs — a bright blue "Design yours" (`{colors.primary}` — #0096f7) and a hot-orange "Find out more" (`{colors.accent-orange}` — #ff4000). Below the black masthead the page hands off to full-bleed product photography and then to warm cream and cool-blue editorial bands.

The type voice is a single family — **Regola** — used almost entirely at weight 400 in its light and book cuts. Headlines are set large and thin with tight negative tracking (down to -0.03em), giving the page an architectural, understated confidence. There is no bold weight anywhere in the measured type; hierarchy comes from size and from the enormous product-name display treatment ("XL 10") laid over hero imagery.

Structurally, the page alternates surface temperatures: black masthead → photographic hero → cream editorial bands (`{colors.surface-cream}` — #f7f7f0) → a saturated blue band (`{colors.primary}`) → warm-grey configurator panels (`{colors.surface-warm}` — #e0ded4). Image cards are sharp-cornered (`{rounded.none}` — 0px) full-bleed rectangles; UI chrome (buttons, small panels) carries the rounded radii. Brand voltage is entirely photographic and typographic — the chrome stays quiet.

**Key Characteristics:**
- Pure-black masthead (`{colors.canvas}` — #000000) with white thin-weight text — the darkest surface, used to frame the top of the page.
- Bright-blue pill CTA (`{colors.primary}` — #0096f7) as the primary action, contrasted with a scarce hot-orange action (`{colors.accent-orange}` — #ff4000).
- Thin Regola display type set large with negative letter-spacing (-0.01em to -0.03em). No bold weights measured.
- Full-bleed, zero-radius (`{rounded.none}`) product photography — image cards are sharp rectangles, not rounded.
- Warm cream / off-white editorial surfaces (`{colors.surface-cream}`, `{colors.surface-cream-soft}`, `{colors.surface-warm}`) alternating with a saturated blue band.
- Very subtle elevation — the strongest measured shadow is `rgba(0,0,0,0.2) 0px 2px 4px`; most chrome uses `rgba(0,0,0,0.12) 0px 0.5px 2px`.
- Rounded radii are reserved for interactive chrome: pill buttons at `{rounded.xl}` (24px), small panels at `{rounded.md}` (12px); content imagery stays square.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #0096f7): The dominant action color — the "Design yours" pill CTA and the saturated mid-page band. This bright blue is the brand's signature interactive hue.
- **Accent Orange** (`{colors.accent-orange}` — #ff4000): A scarce, high-voltage secondary action ("Find out more" in the masthead). Used sparingly for a single alternate CTA — never as a surface.
- **Accent Amber** (`{colors.accent-amber}` — #ffbd00): A small accent hue observed at low frequency; a warm highlight moment.
- **Accent Blue Deep** (`{colors.accent-blue-deep}` — #263db5): A deep indigo appearing rarely — a secondary accent distinct from the bright primary.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The masthead / hero framing surface and the page floor at the top. This is a black-first page.
- **Surface Cream** (`{colors.surface-cream}` — #f7f7f0): The primary warm editorial band background.
- **Surface Cream Soft** (`{colors.surface-cream-soft}` — #fdfdf7): A near-white warm tone used for light pill buttons and testimonial cards.
- **Surface Warm** (`{colors.surface-warm}` — #e0ded4): The warm-grey configurator / "Peek inside" panel background.
- **Surface Warm Alt** (`{colors.surface-warm-alt}` — #d7d5cb): A slightly deeper warm-grey used in nested panel moments.
- **Surface Light** (`{colors.surface-light}` — #f7f7f7): A cool near-white used for step tiles and input fields.

### Text
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the black masthead, on blue/orange buttons, and over dark photography.
- **Ink** (`{colors.ink}` — #333333): Primary text on light editorial surfaces.
- **Body** (`{colors.body}` — #666666): Secondary running text and de-emphasized headline halves (e.g., "Unlock the potential of your yard").
- **Muted** (`{colors.muted}` — #808080): Tertiary text, captions, fine print.

### Lines
- **Hairline** (`{colors.hairline}` — #d3d3d3): 1px dividers and borders on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #cccccc): A slightly lighter divider tone.

## Typography

### Font Family
The system runs a single typeface — **Regola** — in two cuts: `regola-light` (headlines, h1–h3) and `regola-book` (body). Regola is a commercial neo-grotesque; it is not an open web font. Both cuts are used at weight 400, so hierarchy is carried by size and letter-spacing rather than weight contrast. The measured letter-spacing tightens as type gets larger (-0.01em on h1, -0.03em on h2), a hallmark of large thin-set display typography.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 30px | 400 | 1.2 | -0.03em | Largest editorial headlines (h2) — "Backyard is the super simple… ADU from Samara." |
| `{typography.title}` | 23.04px | 400 | 1.25 | 0 | Sub-section titles (h3) |
| `{typography.heading}` | 21px | 400 | 1.2 | -0.01em | Standalone headings / eyebrow statements (h1) |
| `{typography.body}` | 18px | 400 | 1.33 | 0 | Running text, descriptions, button + nav labels |

### Principles
Everything is weight 400 — the design never bolds for emphasis. Emphasis comes from scale (large thin headlines), from the two-tone headline treatment (ink for the active phrase, body-grey for the trailing phrase), and from photography. Keep the negative tracking on display sizes — thin Regola loosely tracked reads as generic; the tight tracking is the voice.

### Note on Font Substitutes
Regola is a licensed commercial typeface and cannot be shipped as a public web font. The closest open-source substitute is **Archivo** (Google Fonts) at its lighter weights, or **Inter** at weight 300–400 with -0.02em tracking. Both preserve the neo-grotesque character and thin-set feel, though Regola's specific proportions will not match exactly.

## Layout

### Spacing System
- **Base unit:** the measured scale clusters around a 6px rhythm.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 18px · `{spacing.xl}` 24px.
- **Most frequent gaps:** 12px (`{spacing.md}`) is the dominant internal gap, followed by 8px (`{spacing.sm}`) and 18px (`{spacing.lg}`).
- **Panel padding:** configurator and "Peek inside" panels use `{spacing.xl}` (24px); testimonial + step tiles use `{spacing.lg}` (18px).
- Larger section-band vertical rhythm (the tall photographic and blue bands) was not measured at the token level — see Known Gaps.

### Grid & Container
- **Masthead:** wordmark left, horizontal nav center, CTA cluster right.
- **Hero:** three-zone overlay — left caption ("Small living, supersized."), center oversized product name ("XL 10"), right descriptor + pill button.
- **Editorial bands:** centered single-column headlines with supporting body beneath.
- **Feature/step grids:** multi-up tiles (two-up cards, four-up numbered steps) on light surfaces.

### Whitespace Philosophy
The page is generous and calm — large thin headlines float in open space, and full-bleed photography carries the visual weight. Chrome is minimal and quiet, letting the product imagery and the alternating surface temperatures create rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Editorial bands, image cards, black masthead |
| Hairline lift | `rgba(0,0,0,0.12) 0px 0.5px 2px` | The most common chrome shadow — small panels, pill buttons |
| Soft card | `rgba(0,0,0,0.08) 0px 2px 10px` | Floating cards over photography (e.g., "Read the customer profile") |
| Contact shadow | `rgba(0,0,0,0.2) 0px 2px 4px` | Slightly stronger lift on interactive chrome |
| Inset highlight | `rgb(255,255,255) 0px 0.25px 0.5px inset` | A subtle top highlight on some raised chrome |

The elevation philosophy is **whisper-soft** — the strongest shadow measured is a 4px blur at 0.2 alpha. There is no heavy drop-shadow, no glassmorphism. Depth comes primarily from surface-color layering and full-bleed imagery, not from shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Image cards and text inputs — sharp rectangles |
| `{rounded.xs}` | 2px | Very small chrome accents |
| `{rounded.sm}` | 6px | Small buttons / chips |
| `{rounded.md}` | 12px | Panels, testimonial cards, step tiles (most common non-zero radius) |
| `{rounded.lg}` | 18px | Larger panels |
| `{rounded.xl}` | 24px | Pill CTA buttons |
| `{rounded.xxl}` | 32px | Largest rounded containers |

### Photography Geometry
Product photography is presented full-bleed and square-cornered (`{rounded.none}`). The sharp rectangle is deliberate — it reads architectural and editorial. Rounded corners are reserved entirely for interactive chrome (buttons at 24px, panels at 12–18px).

## Components

### Navigation

**`top-nav`** — Black masthead bar. Background `{colors.canvas}` (#000000), thin white "Samara" wordmark at left, horizontal nav links (Backyard, Models, How it works, Showrooms, Multifamily) in `{typography.body}`, and a right-side CTA cluster. Text is `{colors.on-primary}` throughout.

### Buttons

**`button-primary`** — The signature pill CTA ("Design yours"). Background `{colors.primary}` (#0096f7), text `{colors.on-primary}`, rounded `{rounded.xl}` (24px), padding 13.5px 18px 14px, `{typography.body}` label.

**`button-cta-orange`** — A scarce alternate action ("Find out more") in the masthead. Same pill geometry as primary but background `{colors.accent-orange}` (#ff4000). Used at most once per band for a high-voltage alternate CTA.

**`button-pill-light`** — A light pill used over photography ("Learn more →"). Background `{colors.surface-cream-soft}` (#fdfdf7), text `{colors.ink}`, rounded `{rounded.xl}`, same padding as primary. Sits on the hero photo where a solid color CTA would be too loud.

### Cards & Panels

**`image-card`** — Full-bleed product photography container. Background `{colors.canvas}`, rounded `{rounded.none}` (0px), no shadow. Holds the hero house shot, gallery images, and the two-up feature cards ("Experience Backyard in person", "Learn how we squeeze a whole house into your yard").

**`section-band-cream`** — Warm editorial band. Background `{colors.surface-cream}` (#f7f7f0), text `{colors.ink}`, large `{typography.display}` headlines. The primary storytelling surface.

**`section-band-blue`** — A single saturated band ("Life with Backyard — Taking the leap"). Background `{colors.primary}` (#0096f7), text `{colors.on-primary}`, `{typography.display}` headline. The one full-color band in the flow.

**`configurator-panel`** — The "Five sizes. Tons of possibility." / "Peek inside." panels. Background `{colors.surface-warm}` (#e0ded4), text `{colors.ink}`, rounded `{rounded.md}` (12px), padding `{spacing.xl}` (24px). Holds the color-swatch selector and 3D-tour CTA.

**`testimonial-card`** — Customer-quote card ("Going with Samara was, hands down, the best decision…"). Background `{colors.surface-cream-soft}` (#fdfdf7), text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.lg}` (18px), with a small star rating.

**`step-tile`** — Numbered step tile in the "Get Backyard in four simple steps" grid. Background `{colors.surface-light}` (#f7f7f7), text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

### Inputs

**`input`** — Text field. Background `{colors.surface-light}`, text `{colors.ink}`, `{typography.body}`, rounded `{rounded.none}` (0px) — inputs match the sharp-rectangle geometry of image cards.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#0096f7) for the main CTA and the one saturated band. It is the interactive signature.
- Use `{colors.accent-orange}` (#ff4000) sparingly — a single alternate action, never a surface fill.
- Set headlines large and thin (Regola weight 400) with negative tracking. Let size, not weight, carry hierarchy.
- Keep product photography full-bleed and square-cornered (`{rounded.none}`). The sharp rectangle is the editorial signature.
- Alternate surface temperatures band to band — black → photo → cream → blue → warm-grey — to pace the scroll.
- Keep shadows whisper-soft (0.5–2px blur, ≤0.2 alpha). Depth comes from color layering, not heavy drop-shadow.
- Round only interactive chrome: pills at `{rounded.xl}` (24px), panels at `{rounded.md}` (12px).

### Don't
- Don't bold headlines — the system has no measured bold cut. Emphasis is scale + color, not weight.
- Don't round image cards or inputs. They stay `{rounded.none}`.
- Don't add more than one saturated blue band or one orange CTA per view — the color accents are scarce by design.
- Don't loosely track large display type; the tight negative letter-spacing is part of the voice.
- Don't introduce heavy shadows or glass effects — the elevation ceiling is `rgba(0,0,0,0.2) 0px 2px 4px`.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

### Breakpoints
The capture covers a single desktop landing render, so exact breakpoint values are not measured. The observed structure implies:

| Name | Behavior (inferred) |
|---|---|
| Mobile | Masthead nav collapses to the hamburger already present at right; hero three-zone overlay stacks; two-up feature cards go one-up; four-up step grid goes one-up |
| Tablet | Nav tightens; feature grids reduce to two-up; hero product name scales down |
| Desktop | Full inline nav, three-zone hero overlay, multi-up grids as captured |

Precise breakpoint widths and per-breakpoint type scaling are not in the measured data — see Known Gaps.

### Touch Targets
- `{component.button-primary}` uses 13.5–14px vertical padding on an 18px body label — comfortably tappable.
- Nav links and the hamburger toggle in `{component.top-nav}` are the primary small targets; exact hit areas were not measured.

### Collapsing Strategy
- The masthead already renders a hamburger glyph beside the inline nav, implying nav collapses into a sheet at narrow widths.
- Full-bleed image cards scale proportionally; the oversized "XL 10" product name likely reduces with viewport width.
- Editorial bands remain single-column and simply reflow.

## Iteration Guide

1. Focus on ONE component at a time; reference its YAML key directly (`{component.button-primary}`, `{component.configurator-panel}`).
2. Variants live as separate entries in `components:` (e.g., `button-cta-orange`, `button-pill-light`).
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover; default and active/pressed only.
5. Headlines stay Regola weight 400 with negative tracking; body stays regola-book. Do not add bold cuts.
6. Keep imagery square (`{rounded.none}`) and chrome rounded — the geometry split is intentional.
7. When emphasis is needed: bigger thin headline before any bold, and color-block band before shadow.

## Known Gaps

- **Font licensing:** `fonts_licensed` was reported empty, but Regola (`regola-light`, `regola-book`) is a commercial neo-grotesque, not a public web font. An open-source substitute (Archivo / Inter) is documented in Typography; do not claim to ship Regola.
- **Section-band vertical rhythm:** the large vertical padding on the tall photographic, cream, and blue bands was not captured at the token level; only chrome-level spacing (4–24px) was measured. The `padding` values on band components are derived from the measured spacing scale, not directly measured on the bands.
- **Hero display type:** the oversized "XL 10" product-name treatment and the "Small living, supersized." caption were not returned as measured typography roles; only h1–h3 + body were captured. Their exact sizes are unknown.
- **Button typography:** button label type was not separately measured; components reference `{typography.body}` as the nearest measured role — the true button size/weight may differ.
- **Amber and deep-blue accents** (`{colors.accent-amber}`, `{colors.accent-blue-deep}`) appear at very low frequency; their exact placement on the page is not confirmed from the single capture.
- **Breakpoints & responsive scaling:** only a desktop landing render was captured; breakpoint widths, mobile nav sheet, and per-breakpoint type scaling are inferred, not measured.
- **Interaction states** (focus, active/pressed, form validation) and animation/transition timings are out of scope.
- **Additional pages** (Models, How it works, Showrooms, Multifamily) were not captured; component coverage reflects the landing page only.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/samara/design-md -->
