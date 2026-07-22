---
version: alpha
name: Quizlet-design-analysis
description: A bright, education-first interface anchored on white canvas with an electric indigo primary (#4255ff) and a near-black indigo ink for type. The system reads as confident, playful EdTech — bold geometric headlines, high-contrast indigo CTAs, soft off-white card surfaces, and small pops of yellow and coral that keep the brand feeling energetic rather than corporate. Brand voltage comes from the saturated #4255ff action color and the deep indigo ink (#0a092d) rather than from photography.

colors:
  primary: "#4255ff"
  primary-active: "#423ed8"
  primary-deep: "#1f1c8b"
  ink: "#0a092d"
  ink-soft: "#1a1d28"
  body: "#2e3856"
  body-soft: "#282e3e"
  muted: "#586380"
  muted-soft: "#939bb4"
  hairline: "#d9dde8"
  hairline-soft: "#edeff4"
  canvas: "#ffffff"
  surface-soft: "#f6f7fb"
  surface-tint: "#edeff4"
  indigo-100: "#dbdfff"
  indigo-150: "#edefff"
  indigo-300: "#a8b1ff"
  indigo-400: "#7583ff"
  accent-yellow: "#ffcd1f"
  accent-coral: "#ff725b"
  success: "#23b26d"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Hurme Geometric Sans, Poppins, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 44px
  button-secondary-active:
    backgroundColor: "{colors.indigo-150}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 80px
  feature-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-tinted:
    backgroundColor: "{colors.indigo-150}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.indigo-150}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-yellow:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  avatar-circle:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  cta-band:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 48px
---

## Overview

Quizlet's marketing surface is a bright, education-first interface — white canvas (`{colors.canvas}` — #ffffff) carrying an electric indigo primary action color (`{colors.primary}` — #4255ff) and a deep near-black indigo ink (`{colors.ink}` — #0a092d) for headlines and body type. The system reads as confident, playful EdTech: bold geometric headlines, high-contrast rounded CTAs, soft off-white card surfaces, and disciplined pops of yellow and coral that keep the brand energetic rather than corporate.

Color is where the voltage lives. The measured palette is dominated by white and a tightly graded indigo family — from the saturated action blue (`{colors.primary}` — #4255ff) and its pressed darker tone (`{colors.primary-active}` — #423ed8) through a deep brand indigo (`{colors.primary-deep}` — #1f1c8b), down to soft tints (`{colors.indigo-100}` — #dbdfff, `{colors.indigo-150}` — #edefff) used for fills and quiet badges. The ink ramp also leans indigo — `{colors.ink}` (#0a092d), `{colors.ink-soft}` (#1a1d28), `{colors.body}` (#2e3856) — so even the "black" text carries the brand hue.

Accent moments are scarce and deliberate: `{colors.accent-yellow}` (#ffcd1f) and `{colors.accent-coral}` (#ff725b) appear as small highlight chips and illustration fills, never on primary CTAs. `{colors.success}` (#23b26d) marks confirmation states inside product UI.

> Note: Typography, spacing, radius, shadow, and component specs were **not** present in the measured analysis (those arrays were empty). The values documented here are **derived** from the reference screenshots and standard Quizlet baselines — they are best-effort approximations, not measured tokens, and are flagged again in Known Gaps.

**Key Characteristics:**
- White canvas with a saturated indigo primary CTA (`{colors.primary}` — #4255ff), rendered as a fully-rounded pill (`{rounded.pill}`) — the signature Quizlet button shape (derived from screenshots).
- A deep indigo ink ramp (`{colors.ink}` — #0a092d through `{colors.body}` — #2e3856) so type reads as near-black-with-brand-hue, never pure neutral gray.
- Soft off-white card surfaces (`{colors.surface-soft}` — #f6f7fb) and pale indigo tints (`{colors.indigo-150}` — #edefff) for feature cards and quiet badges.
- Scarce accent pops — yellow (`{colors.accent-yellow}` — #ffcd1f) and coral (`{colors.accent-coral}` — #ff725b) on illustration and highlight chips only.
- Bold geometric display headlines (substituted with Poppins here — see Typography).

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #4255ff): The dominant action color. All primary CTAs, active nav indicators, inline links. Press state shifts to `{colors.primary-active}` (#423ed8).
- **Primary Deep** (`{colors.primary-deep}` — #1f1c8b): A deep indigo used for emphasis fills, illustration shadows, and occasionally large display type on tinted bands.
- **Accent Yellow** (`{colors.accent-yellow}` — #ffcd1f): A high-energy highlight used on small chips, illustration fills, and emphasis marks. Never on primary CTAs.
- **Accent Coral** (`{colors.accent-coral}` — #ff725b): A warm secondary accent for illustration and occasional highlight chips.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor — by far the most frequent measured color.
- **Surface Soft** (`{colors.surface-soft}` — #f6f7fb): Feature card and CTA band backgrounds — a barely-tinted off-white.
- **Surface Tint** (`{colors.surface-tint}` — #edeff4): Slightly stronger neutral fill for dividers and avatar backgrounds.
- **Indigo 150** (`{colors.indigo-150}` — #edefff): Pale indigo fill for badges and tinted feature cards.
- **Indigo 100** (`{colors.indigo-100}` — #dbdfff): A soft indigo fill, one step stronger than 150.
- **Indigo 300 / 400** (`{colors.indigo-300}` — #a8b1ff, `{colors.indigo-400}` — #7583ff): Mid indigo tones for illustration accents and hover-tint fills.
- **Hairline** (`{colors.hairline}` — #d9dde8): 1px border tone on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #edeff4): A barely-visible divider between sections sharing the white canvas.

### Text
- **Ink** (`{colors.ink}` — #0a092d): Headlines and primary text — the deepest indigo-black.
- **Ink Soft** (`{colors.ink-soft}` — #1a1d28): Secondary headline / strong-body tone.
- **Body** (`{colors.body}` — #2e3856): Default running-text color (the most frequent accent tone measured).
- **Body Soft** (`{colors.body-soft}` — #282e3e): An alternate body tone.
- **Muted** (`{colors.muted}` — #586380): Secondary text — sub-headings, footer body.
- **Muted Soft** (`{colors.muted-soft}` — #939bb4): Tertiary text — captions, fine-print, placeholder text.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on indigo buttons and saturated fills.

### Semantic
- **Success** (`{colors.success}` — #23b26d): Confirmation states and correct-answer marks inside product UI.

> The analysis did not surface dedicated warning/error tokens; `{colors.accent-coral}` is the closest measured warm tone but is documented as a brand accent, not a semantic error color.

## Typography

### Font Family
Quizlet's brand typeface is **Hurme Geometric Sans**, a licensed geometric sans. Because it is not a freely-distributable web font, this spec substitutes **Poppins** (open-source, geometric, Google Fonts) as the production fallback. **Montserrat** is a second acceptable substitute. The fallback stack walks `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

The voice is single-family: the same geometric face carries display, body, buttons, and nav, differentiated by weight (700 for display, 600 for titles/buttons/nav, 400 for body).

> All sizes, weights, line-heights, and letter-spacing below are **derived** from the reference screenshots — typography was not measured in the analysis.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 1.1 | -1px | Homepage hero headline — derived |
| `{typography.display-lg}` | 40px | 700 | 1.15 | -0.5px | Section heads — derived |
| `{typography.display-md}` | 32px | 700 | 1.2 | -0.5px | Sub-section heads, CTA-band heads — derived |
| `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Large card titles — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 14px | 600 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
The system uses one geometric family throughout; hierarchy comes from weight and size, not from a second typeface. Display sizes use 700 with slight negative tracking for a tight, confident headline; body stays 400 for readability.

### Note on Font Substitutes
**Hurme Geometric Sans** is licensed and not shipped here. **Poppins** at 700 (display) / 600 (titles & buttons) / 400 (body) is the documented substitute and preserves the geometric, rounded character. **Montserrat** is a close second.

## Layout

> Spacing was not measured (the analysis spacing array was empty). The scale below is **derived** from screenshot rhythm and a standard 4px base.

### Spacing System
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Section padding:** `{spacing.section}` (80px) between major bands (derived).
- **Card internal padding:** `{spacing.lg}` (24px) for feature cards; `{spacing.xxl}` (48px) for CTA bands (derived).
- **Gutters:** `{spacing.lg}` (24px) between cards in grids (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Hero band:** left-text / right-illustration split at desktop.
- **Feature grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).

### Whitespace Philosophy
Generous, scan-first whitespace with a single primary action per band. White canvas dominates; tinted cards and indigo CTAs provide the focal points.

## Elevation & Depth

> Shadows were not measured (the analysis shadow array was empty). Treatments below are inferred from screenshots and flagged as derived.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero band |
| Card surface | `{colors.surface-soft}` background, no shadow | Feature cards |
| Tinted card | `{colors.indigo-150}` background, no shadow | Highlighted feature cards |
| Subtle drop shadow (derived) | Faint low-alpha shadow | Product-mockup cards, floating UI fragments |

The elevation philosophy is soft and modern — color-block contrast (white vs. soft-indigo tints) does most of the depth work; shadows, where present, are faint. No measured shadow tokens exist, so exact blur/alpha values are a Known Gap.

### Decorative Depth
- Product UI fragments (flashcard stacks, study-mode screens) carry their own internal chrome shown as content.
- Accent yellow and coral appear as flat illustration fills, not as shadows or glows.

## Shapes

> Radius was not measured (the analysis radius array was empty). The scale below is **derived** from screenshots.

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small inline elements, dropdown items — derived |
| `{rounded.md}` | 8px | Text inputs — derived |
| `{rounded.lg}` | 12px | Feature cards — derived |
| `{rounded.xl}` | 16px | Product-mockup cards, CTA bands — derived |
| `{rounded.pill}` | 9999px | Primary/secondary buttons, badges — derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons — derived |

### Photography Geometry
Avatars render as perfect circles (`{rounded.full}`). Product UI fragments retain native chrome; illustration zones sit inside `{rounded.xl}` cards (derived).

## Components

> No component specs were measured (the analysis components array was empty). Every component below is **derived** from the reference screenshots; only the color references resolve to measured tokens.

### Top Navigation

**`top-nav`** — White nav bar pinned to the top. ~64px tall, `{colors.canvas}` background, menu items in `{typography.nav-link}`. Carries the Quizlet wordmark at left, primary menu center, and a sign-in text link plus a `{component.button-primary}` ("Sign up") at right.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#4255ff), text `{colors.on-primary}`, type `{typography.button}`, fully rounded `{rounded.pill}`, padding 14px × 24px, height 44px. Active state `button-primary-active` shifts to `{colors.primary-active}` (#423ed8).

**`button-secondary`** — White pill with indigo label. Background `{colors.canvas}`, text `{colors.primary}`, 1px hairline border, `{rounded.pill}`. Active state `button-secondary-active` fills with `{colors.indigo-150}`.

**`button-text-link`** — Inline text button, no background, label in `{colors.primary}`.

**`text-link`** — Inline body links in `{colors.primary}`.

### Cards & Containers

**`hero-band`** — White-canvas hero with text-left / illustration-right split. Vertical padding `{spacing.section}` (80px), headline in `{typography.display-xl}`.

**`feature-card`** — Used in feature grids. Background `{colors.surface-soft}` (#f6f7fb), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px), title in `{typography.title-md}`.

**`feature-card-tinted`** — A highlighted variant. Background `{colors.indigo-150}` (#edefff), otherwise identical to `feature-card`.

**`product-mockup-card`** — Shows actual Quizlet product UI fragments (flashcards, study modes). Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.lg}`.

### Inputs & Forms

**`text-input`** — Standard input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 12px × 16px, height 44px, 1px hairline border in `{colors.hairline}`.

**`text-input-focused`** — Focus state; border shifts to `{colors.primary}` for emphasis (derived).

### Tags / Badges

**`badge-pill`** — Small pill label. Background `{colors.indigo-150}`, text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-yellow`** — High-energy chip. Background `{colors.accent-yellow}`, text `{colors.ink}`, otherwise as `badge-pill`.

**`avatar-circle`** — 40px diameter, rounded `{rounded.full}`, fill `{colors.surface-tint}`.

### CTA / Footer

**`cta-band`** — Pre-footer CTA. Background `{colors.surface-soft}`, rounded `{rounded.xl}`, padding `{spacing.xxl}` (48px), headline in `{typography.display-md}`, plus a centered `{component.button-primary}`.

**`footer`** — White footer with muted link columns. Background `{colors.canvas}`, text `{colors.muted}`, type `{typography.body-sm}`, vertical padding 48px.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#4255ff) for primary CTAs, active states, and inline links. It is the brand's defining color.
- Keep ink indigo-tinted — use `{colors.ink}` (#0a092d) and `{colors.body}` (#2e3856) rather than pure neutral black/gray.
- Use the indigo tint ramp (`{colors.indigo-150}`, `{colors.indigo-100}`) for quiet fills and badges.
- Keep primary buttons fully rounded (`{rounded.pill}`) — the pill shape is the signature button silhouette (derived).
- Use yellow and coral sparingly, on illustration and highlight chips only.

### Don't
- Don't put `{colors.accent-yellow}` or `{colors.accent-coral}` on primary CTAs — the action layer stays indigo.
- Don't use pure-gray text; the brand ink carries an indigo hue.
- Don't introduce a second typeface — hierarchy comes from weight, not family.
- Don't claim to ship Hurme Geometric Sans; use the documented Poppins substitute.
- Don't add hover-state styling beyond default + press; primary darkens to `{colors.primary-active}` on press, nothing else.

## Responsive Behavior

> Breakpoints and collapsing strategy are **derived** from standard responsive patterns; no responsive metrics were measured.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero text + illustration stack; feature grids 1-up |
| Tablet | 768–1024px | Tightened horizontal nav; feature cards 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature grids |
| Wide | > 1440px | Same as desktop, content capped ~1200px |

### Touch Targets
- `{component.button-primary}` at 44px height (derived) — meets WCAG minimum.
- `{component.text-input}` height 44px (derived).

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px.
- Hero band's text/illustration split stacks to single column on mobile.
- Feature grids reduce columns rather than shrinking cards.

### Image Behavior
- Product UI fragments retain native aspect ratios; cards resize around them.
- Avatars crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.button-primary}`).
2. Variants of an existing component (`-active`, `-tinted`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. The indigo primary (#4255ff) is the brand's anchor — don't dilute the action layer with accents.
6. Replace derived typography/spacing/radius values with measured ones as soon as a deeper capture is available.

## Known Gaps

- **Typography was not measured** — the analysis `typography` array was empty. All font sizes, weights, line-heights, and letter-spacing are derived from screenshots and standard Quizlet baselines; they need a real type capture to confirm.
- **Spacing, radius, and shadow arrays were all empty** — the entire spacing scale, border-radius scale, and all elevation treatments are derived, not measured. Pill-button radius, card radii, and shadow blur/alpha values are best-effort approximations.
- **No component metrics were measured** — the `components` array was empty. Padding, height, and size values on every component are derived from screenshot ground-truth; only color references resolve to measured tokens.
- **Hurme Geometric Sans is licensed** and not flagged in `fonts_licensed`, but is Quizlet's known brand face; it is documented here with a Poppins / Montserrat open-source substitute. The exact production font stack was not captured.
- **Semantic warning/error colors** were not surfaced; only `{colors.success}` (#23b26d) was measured. `{colors.accent-coral}` is documented as a brand accent, not confirmed as an error token.
- **Animation and transition timings** are out of scope.
- **Form validation states** beyond a derived focus state are not extracted — they would require a sign-up or study-creation flow to confirm.
- The two captured pages (landing, features-how-quizlet-works) do not include the authenticated study/product surfaces, so in-app component specs are inferred from marketing-embedded fragments only.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/quizlet/design-md -->
