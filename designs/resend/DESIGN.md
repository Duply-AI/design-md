---
version: alpha
name: Resend-Forward-design-analysis
description: "A dark, cinematic event landing page for Resend's \"Forward\" conference — pure-black canvas washed with a blue-and-chartreuse gradient glow, monospace supporting type (Commit Mono), a single towering condensed display headline, and one white pill-shaped primary CTA. The system is near-monochrome and confident: black surfaces, off-white text, and a scarce mint-green brand accent, with all voltage coming from the oversized headline and the atmospheric background gradient."

colors:
  primary: "#ffffff"
  canvas: "#000000"
  surface: "#05050a"
  surface-dark: "#111111"
  surface-elevated: "#191919"
  surface-strong: "#1d1c1b"
  surface-line: "#2a2a2a"
  surface-line-strong: "#323232"
  border: "#4b4b4b"
  on-primary: "#ffffff"
  white-soft: "#fdfdfd"
  ink: "#f0f0f0"
  muted: "#a1a4a5"
  muted-strong: "#8c8c8c"
  accent-green: "#62ffb3"
  accent-emerald: "#22c55e"
  accent-blue: "#70b8ff"
  accent-cyan: "#2bf2ff"
  accent-orange: "#f76004"
  accent-amber: "#9c6b2e"
  accent-rust: "#8f3e1e"

typography:
  body:
    fontFamily: "Commit Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.231
    letterSpacing: normal
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.429
    letterSpacing: normal

rounded:
  lg: 16px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 32px
  xxl: 40px
  xxxl: 64px
  huge: 80px
  edge: 220px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 0px 16px
  button-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 0px 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 80px
  event-label:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
---

## Overview

Resend's **Forward** event page is a single-screen, dark, cinematic landing surface. The floor is pure black (`{colors.canvas}` — #000000), washed with an atmospheric radial gradient that fades from chartreuse-yellow at the left edge through deep blue to black — a mood-setting glow rather than a functional color field. On top of that darkness sits one enormous condensed display headline ("AN EVENT FOR BUILDERS"), a monospace date/location stack, and a single white pill CTA.

The type voice is deliberately split: a **condensed heavyweight display face** carries the marquee headline (not captured in the measured tokens — see Known Gaps), while **Commit Mono** (`{typography.body}` — 13px / 500) handles every small supporting label: the date "OCT 21, 2026", the venue "SFJAZZ CENTER / SAN FRANCISCO, CA", and the top-nav wordmark cluster. **Inter** (`{typography.button}` — 14px / 600) handles buttons and nav items.

The system is near-monochrome. Text is off-white (`{colors.ink}` — #f0f0f0), the primary CTA is a white pill (`{colors.primary}` — #ffffff) with black label, and the secondary/nav ticket button sits on a dark surface (`{colors.surface-dark}` — #111111). The measured accent palette — mint green (`{colors.accent-green}` — #62ffb3), emerald, blue, cyan, orange, amber — appears at very low frequency and lives almost entirely inside the background gradient and the logo mark, never on the primary action.

**Key Characteristics:**
- Pure-black canvas (`{colors.canvas}`) with a blue-and-chartreuse gradient glow as the only large chromatic moment.
- One towering condensed display headline dominates the composition; everything else is small and quiet.
- Monospace (`Commit Mono`) supporting type for date, venue, and wordmark — gives the page a technical, ticketed, developer-event feel.
- A single white pill primary CTA ("Get your ticket") repeated in the nav as a dark-surface variant.
- Scarce mint-green brand accent (`{colors.accent-green}`) — reserved for the logo mark and gradient, never the button.
- Consistent 16px corner radius (`{rounded.lg}`) on interactive elements.

## Colors

### Brand & Accent
- **Accent Green** (`{colors.accent-green}` — #62ffb3): The Resend mint-green brand accent. Appears in the logo mark and gradient wash; low frequency (measured 20).
- **Accent Emerald** (`{colors.accent-emerald}` — #22c55e): A deeper green measured in the gradient/atmosphere.
- **Accent Blue** (`{colors.accent-blue}` — #70b8ff) and **Accent Cyan** (`{colors.accent-cyan}` — #2bf2ff): The blue register of the background gradient glow.
- **Accent Orange / Amber / Rust** (`{colors.accent-orange}` — #f76004, `{colors.accent-amber}` — #9c6b2e, `{colors.accent-rust}` — #8f3e1e): A warm sub-set measured at low frequency — the chartreuse-to-warm edge of the gradient bloom. Never used on text or CTAs.

All accents are atmospheric — they build the gradient mood but stay off the action layer.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The page floor — pure black.
- **Surface** (`{colors.surface}` — #05050a): The near-black base beneath the gradient bloom.
- **Surface Dark** (`{colors.surface-dark}` — #111111): The nav ticket button background.
- **Surface Elevated** (`{colors.surface-elevated}` — #191919) and **Surface Strong** (`{colors.surface-strong}` — #1d1c1b): Slightly lifted dark tones for nested/elevated chrome.
- **Surface Line** (`{colors.surface-line}` — #2a2a2a) and **Surface Line Strong** (`{colors.surface-line-strong}` — #323232): Hairline/divider tones on dark surfaces.
- **Border** (`{colors.border}` — #4b4b4b): The lightest structural line tone.

### Text
- **Ink** (`{colors.ink}` — #f0f0f0): Off-white — the default text color for headline, labels, and nav.
- **White Soft** (`{colors.white-soft}` — #fdfdfd): A near-pure white used on high-emphasis text.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text where it sits on dark buttons (the nav ticket button).
- **Muted** (`{colors.muted}` — #a1a4a5): Secondary/nav-link text.
- **Muted Strong** (`{colors.muted-strong}` — #8c8c8c): Tertiary text and de-emphasized labels.

### Primary
- **Primary** (`{colors.primary}` — #ffffff): The white pill CTA background. On this dark system, white is the primary action color; its label renders in `{colors.canvas}` (black).

## Typography

### Font Family
The system runs two families. **Commit Mono** carries all small supporting copy — the date label, venue stack, and the "Forward" wordmark — giving the page its technical, ticketed register. **Inter** (weight 600) handles buttons and nav items. Both are open-source, so no licensed substitution is required.

The marquee display headline ("AN EVENT FOR BUILDERS") uses a condensed heavyweight sans that was **not captured** in the measured analysis — it is documented as a gap below rather than guessed.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.body}` | 13px | 500 | 1.231 | normal | Date label, venue stack, wordmark — Commit Mono |
| `{typography.button}` | 14px | 600 | 1.429 | normal | CTA labels, nav items — Inter |

### Principles
The monospace body voice is the signature. Small labels stay in Commit Mono at 13px / 500 with normal tracking — they read like ticket metadata. Inter handles anything interactive. The measured type set is intentionally minimal: this is a single-purpose event page, so only two roles were captured.

### Note on Font Substitutes
`fonts_licensed` is empty — both Commit Mono and Inter are open-source and can ship directly. If Commit Mono is unavailable, `ui-monospace` / `SFMono-Regular` are acceptable fallbacks (already in the stack). The display headline face is undocumented; a condensed grotesque such as **Anton** or a heavy width of **Inter Tight** would approximate the visual weight, but this is unmeasured and should be confirmed against the source before shipping.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.xxxl}` 64px · `{spacing.huge}` 80px · `{spacing.edge}` 220px.
- **Dominant rhythm:** `{spacing.md}` (16px) is the most frequent measured value (frequency 19) — the base gap for stacked labels and button padding.
- **Section rhythm:** `{spacing.huge}` (80px) and `{spacing.xxxl}` (64px) space the hero content vertically.
- **Edge gutter:** `{spacing.edge}` (220px, frequency 4) is the large outer horizontal margin that centers the hero content on wide screens.

### Grid & Container
- Single centered column. The hero content (date → headline → venue → CTA) is vertically stacked and horizontally centered on the canvas.
- The top-nav is a three-part row: wordmark left, "Overview / FAQ" links center, "Get your ticket" button right.
- Large `{spacing.edge}` (220px) side gutters keep the composition centered and let the gradient breathe at the edges.

### Whitespace Philosophy
The page is mostly negative space and darkness. A single dominant headline occupies the optical center, framed by generous black margins and the soft gradient bloom. The restraint is the point — one message, one action.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Canvas, headline, labels |
| Gradient bloom | Radial blue-to-chartreuse glow over black | Atmospheric depth behind the hero |
| Subtle drop shadow | `rgba(0,0,0,0.1) 0px 1px 3px` + `0px 1px 2px` (measured) | The one measured elevation, applied to the pill CTA / nav button |

The measured shadow is very soft and low-alpha — depth on this page comes almost entirely from the **gradient bloom** (light-source glow) rather than from cast shadows. The bloom is a decorative lighting effect, not a token.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.lg}` | 16px | Buttons (primary CTA + nav ticket button) |

Only one radius value (16px, frequency 3) was measured. On the ~40px-tall buttons this reads as a near-pill silhouette. A dedicated pill/full radius was **not** measured — see Known Gaps.

### Photography Geometry
No photography or imagery is present on this surface — the composition is type-on-gradient only.

## Components

### Navigation

**`top-nav`** — Transparent-over-black top bar. Background reads as `{colors.canvas}`, text `{colors.ink}`. Left: the "Forward" wordmark with the Resend mark. Center: `{component.nav-link}` items ("Overview", "FAQ"). Right: `{component.button-nav}`.

**`nav-link`** — Inline text nav items. Transparent background, `{colors.muted}` text, `{typography.button}` (Inter 14px / 600).

### Buttons

**`button-primary`** — The signature CTA ("Get your ticket") in the hero. Background `{colors.primary}` (white), label in `{colors.canvas}` (black — derived from the white-pill/black-text pairing visible in the screenshot), typography `{typography.button}`, rounded `{rounded.lg}` (16px), horizontal padding 16px (`0px 16px` measured).

**`button-nav`** — The nav-corner ticket button. Background `{colors.surface-dark}` (#111111), label `{colors.ink}`, typography `{typography.button}`, rounded `{rounded.lg}`, padding `0px 16px`. Same shape as the primary CTA but inverted onto a dark surface for the nav context.

### Hero

**`hero-band`** — The full-screen dark hero. Background `{colors.canvas}` with the gradient bloom overlay, vertical padding `{spacing.huge}` (80px). Stacks, centered: `{component.event-label}` (date) → the condensed display headline → `{component.event-label}` (venue) → `{component.button-primary}`.

**`event-label`** — Monospace metadata labels ("OCT 21, 2026", "SFJAZZ CENTER", "SAN FRANCISCO, CA"). Transparent background, `{colors.ink}` text, `{typography.body}` (Commit Mono 13px / 500).

## Do's and Don'ts

### Do
- Keep the canvas pure black (`{colors.canvas}`) and let the gradient bloom supply all large-scale color.
- Use `{colors.primary}` (white) for the single primary action; keep the nav ticket button on `{colors.surface-dark}`.
- Set all supporting labels in `{typography.body}` (Commit Mono) — the monospace voice is the brand signature here.
- Keep the accent palette (`{colors.accent-green}` and the blue/warm set) atmospheric — in the gradient and logo only.
- Maintain the 16px (`{rounded.lg}`) radius on all buttons.
- Keep the composition centered with generous `{spacing.edge}` gutters and a single dominant headline.

### Don't
- Don't put accent colors on the primary CTA — the action layer stays white-on-dark.
- Don't add a second competing headline; the page is built around one marquee statement.
- Don't switch supporting labels out of monospace — losing Commit Mono breaks the ticketed technical voice.
- Don't introduce light surfaces; this is an all-dark system.
- Don't document hover states — only default and active/pressed are in scope.

## Responsive Behavior

Only a desktop landing capture was measured, so responsive rules below are inferred from the single-column, centered structure and are otherwise a gap.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥ 1024px | Full three-part nav; centered hero with `{spacing.edge}` (220px) side gutters; large display headline |
| Tablet / Mobile | < 1024px | Not captured — the centered single-column stack should scale down and the `{spacing.edge}` gutter should shrink (unverified) |

### Touch Targets
- `{component.button-primary}` and `{component.button-nav}` use 16px horizontal padding; measured height was not captured, so tap-area compliance is unverified.

### Collapsing Strategy
- The single centered column naturally reduces to a narrower stack on smaller viewports; the display headline would need to scale down substantially. Exact behavior is unmeasured.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key (`{component.button-primary}`, `{component.event-label}`).
2. Variants (`-active`, nav variant) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Never document hover — default and active/pressed only.
5. Keep the two-voice type system: Commit Mono for labels, Inter for buttons. The display headline is a third, undocumented voice — confirm it before extending.
6. Accents stay in the gradient; the action layer stays monochrome.
7. When emphasis is needed, grow the display headline before adding color.

## Known Gaps

- **Display headline face is unmeasured.** The dominant "AN EVENT FOR BUILDERS" condensed heavyweight face was not captured in `typography` — no fontFamily, size, weight, or tracking was measured. It is intentionally omitted from tokens; a substitute (Anton / Inter Tight heavy) is suggested but unverified.
- **Button height is unmeasured.** Only padding (`0px 16px`) and radius (16px) were captured for `{component.button-primary}`; height and vertical padding are gaps, so touch-target compliance is unverified.
- **Only one radius (16px) was measured.** The buttons read as near-pill in the screenshots, but no dedicated pill/full radius token was captured.
- **Nav-link and wordmark typography inferred.** Nav items reference `{typography.button}` (Inter) as the closest measured role; the exact nav-link size/weight and the "Forward" wordmark treatment were not individually measured.
- **Gradient bloom is not tokenized.** The blue-to-chartreuse radial glow is documented as a decorative lighting effect; its exact color stops, angles, and opacities were not measured (the accent hexes listed are frequency samples, not gradient stops).
- **Single page, single viewport.** Only the desktop landing page was captured — responsive breakpoints, FAQ/Overview sub-pages, and any form or checkout surfaces are out of scope.
- **Animation/transition timings** (gradient motion, CTA press) were not extracted.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/resend/design-md -->
