---
version: alpha
name: lpalo-design-analysis
description: A playful, oversized-typography kids-podcast brand built on a warm pale-pink canvas with pure-black ink, heavy Manrope display headlines, and white pill-shaped navigation buttons outlined in black. The mood is friendly and exuberant — hand-drawn scientific doodles (robots, planets, microscopes) scatter across the canvas, a bright teal info-card sits rotated into the layout, and a small confetti palette of saturated accents punctuates an otherwise stark black-on-pink system.
colors:
  ink: "#000000"
  surface-pink: "#f6e0db"
  surface-white: "#ffffff"
  accent-coral: "#ef724f"
  accent-magenta: "#981082"
  accent-yellow: "#ffff00"
  accent-red: "#ff0000"
  accent-blue: "#84bfff"
  accent-gold: "#e7db4c"
  accent-teal: "#ace2df"
  accent-green: "#6ed311"
  accent-lilac: "#e69dff"
typography:
  display-hero:
    fontFamily: "Manrope, sans-serif"
    fontSize: 119.52px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: normal
  heading-lg:
    fontFamily: "Manrope, sans-serif"
    fontSize: 50px
    fontWeight: 800
    lineHeight: 1.16
    letterSpacing: normal
  heading-md:
    fontFamily: "Manrope, sans-serif"
    fontSize: 34px
    fontWeight: 800
    lineHeight: 1.235
    letterSpacing: normal
rounded:
  sm: 10px
  lg: 40px
  pill: 47px
spacing:
  xxs: 4px
  xs: 10px
  sm: 16px
  md: 20px
  lg: 25px
  xl: 30px
  xxl: 38px
  xxxl: 40px
  section: 80px
components:
  top-nav:
    backgroundColor: "{colors.surface-pink}"
    textColor: "{colors.ink}"
    padding: 30px
  logo-wordmark:
    backgroundColor: transparent
    textColor: "{colors.ink}"
  nav-pill-button:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 16px 30px
  nav-pill-tag:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 4px 16px
  nav-dropdown-caret:
    backgroundColor: transparent
    textColor: "{colors.accent-coral}"
  hero-band:
    backgroundColor: "{colors.surface-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.display-hero}"
    padding: 80px
  info-card:
    backgroundColor: "{colors.accent-teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 38px
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: 16px 30px
---

## Overview

lpalo ("La puce à l'oreille") is the marketing surface for a French-language children's podcast brand, and the design voice is unapologetically playful and loud. The page floor is a warm pale-pink canvas (`{colors.surface-pink}` — #f6e0db) carrying pure-black ink (`{colors.ink}` — #000000) at enormous scale. The hero headline runs at ~120px in Manrope ExtraBold (800), filling the viewport with stacked, tightly-leaded display type.

The interface chrome is built from **white pill-shaped buttons outlined in black** (`{component.nav-pill-button}`) — soft 47px-radius capsules that read as friendly, tappable, and slightly toy-like. Around the type, hand-drawn line doodles of scientific objects (a robot, a ringed planet, microscopes, a thermometer) scatter freely across the canvas, and a bright teal info-card (`{colors.accent-teal}` — #ace2df) is rotated into the lower hero to break the grid.

The color story is stark-plus-confetti: black-on-pink does almost all the structural work, while a small saturated accent set (coral, magenta, yellow, red, blue, green, lilac) appears in tiny doses — on doodle highlights, the dropdown caret, and decorative moments — never on large surfaces. Brand voltage comes from **scale and personality**, not from color fields.

**Key Characteristics:**
- Warm pale-pink canvas (`{colors.surface-pink}` — #f6e0db) instead of white — soft, childlike, distinctive.
- Massive Manrope ExtraBold (800) display type — the hero headline runs ~120px with 1.0 line-height for a dense, stacked block.
- White pill navigation buttons (`{rounded.pill}` — 47px) with black outlines — the signature interactive shape.
- Scattered hand-drawn line doodles (robot, planet, microscope) as decorative content layered onto the canvas.
- A rotated teal info-card (`{colors.accent-teal}`) that deliberately breaks the orthogonal grid.
- Near-monochrome structure (black on pink) with a small confetti accent palette used only in tiny decorative doses.
- Flat system — no shadows measured; depth comes from rotation and overlap, not elevation.

## Colors

### Structural
- **Ink** (`{colors.ink}` — #000000): The dominant color. All headlines, body, nav labels, button outlines, and doodle linework. Black does nearly all the structural work.
- **Surface Pink** (`{colors.surface-pink}` — #f6e0db): The page canvas — a warm pale-pink that replaces white as the system floor. Sets the entire friendly tone.
- **Surface White** (`{colors.surface-white}` — #ffffff): The fill of pill navigation buttons and tags. The only true-white surface in the system, used to lift the pills off the pink canvas.

### Accent (confetti palette)
A small set of saturated accents appears in low frequency, used on doodle highlights and small decorative moments — never on large surfaces or primary type:
- **Coral** (`{colors.accent-coral}` — #ef724f): The most-used accent — the "Explorer" dropdown caret and doodle accents.
- **Magenta** (`{colors.accent-magenta}` — #981082): Secondary accent on illustrations.
- **Teal** (`{colors.accent-teal}` — #ace2df): The rotated info-card fill in the hero.
- **Yellow** (`{colors.accent-yellow}` — #ffff00), **Red** (`{colors.accent-red}` — #ff0000), **Blue** (`{colors.accent-blue}` — #84bfff), **Gold** (`{colors.accent-gold}` — #e7db4c), **Green** (`{colors.accent-green}` — #6ed311), **Lilac** (`{colors.accent-lilac}` — #e69dff): Rare doodle and decorative highlights, each appearing only a handful of times across the page.

The discipline is strict: structure is black-on-pink, and the confetti palette only flickers in at the illustration and micro-accent layer.

## Typography

### Font Family
The system runs a single typeface — **Manrope** — everywhere, at ExtraBold (800) for all measured display roles. Manrope is an open-source geometric-humanist sans (available on Google Fonts), so no substitution is required; the fallback stack walks `Manrope, sans-serif`. The brand voice is carried entirely by weight and scale: heavy 800-weight Manrope set very large with tight leading.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-hero}` | 119.52px | 800 | 1.0 | normal | Hero headline ("Balados décalés pour enfants allumés") |
| `{typography.heading-lg}` | 50px | 800 | 1.16 | normal | Large section headings (h3) |
| `{typography.heading-md}` | 34px | 800 | 1.235 | normal | Sub-headings (h2) |

Note: the measured h3 (50px) is larger than the measured h2 (34px) — a non-standard ordering preserved here from ground-truth rather than normalized. Treat the tokens by size, not by HTML tag name.

### Principles
Everything is Manrope ExtraBold. The hierarchy is built purely through size and line-height — the hero compresses to 1.0 line-height for a dense stacked block, while smaller headings open up to ~1.2. There is no measured light or regular weight; if body copy is added it should remain Manrope, but its size and weight were not captured (see Known Gaps).

## Layout

### Spacing System
- **Base unit:** approximately 4–5px, with a 10px step appearing most frequently.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 10px · `{spacing.sm}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 25px · `{spacing.xl}` 30px · `{spacing.xxl}` 38px · `{spacing.xxxl}` 40px · `{spacing.section}` 80px.
- **Most common steps:** 10px (highest frequency), then 16px and 30px — these carry most internal padding and gaps.
- **Section rhythm:** `{spacing.section}` (80px) marks the large vertical breathing room around the hero.

### Grid & Container
- The hero is center-aligned: the wordmark sits top-left, the pill nav runs across the top, and the oversized headline is centered in the canvas.
- Decorative doodles are absolutely positioned around the central type block — they do not sit in a column grid.
- The teal info-card is rotated and overlapped into the lower hero, intentionally breaking the orthogonal layout.

### Whitespace Philosophy
Whitespace is generous around the type but the headline itself is dense — the 1.0 line-height stacks the four hero lines into a single tight mass. The surrounding pink canvas gives the doodles room to float, reinforcing the playful, scattered energy without crowding.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Hero band, canvas |
| Outlined | 1px black outline on white fill | Pill nav buttons and tags |
| Overlap / rotation | Element rotated and layered over the canvas | Teal info-card |

No shadows were measured anywhere in the system (`shadows: []`). Depth is created entirely through **rotation and overlap** — the teal card is tilted and pushed partly off the bottom of the hero, and doodles layer over the pink ground. This is a deliberately flat, illustrative depth model rather than a shadow-driven one.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Soft-cornered cards and small containers (most frequent radius) |
| `{rounded.lg}` | 40px | Larger rounded containers |
| `{rounded.pill}` | 47px | Pill navigation buttons and tags — the signature capsule shape (highest frequency) |

The shape language is round and soft. The 47px pill radius dominates the interactive layer (the nav buttons are full capsules), while 10px handles softer card corners. The combination of full pills and oversized heavy type gives the brand its toy-like, kid-friendly character.

### Illustration Geometry
Hand-drawn line doodles (robot, ringed planet, microscopes, thermometer) are scattered across the canvas as decorative content. They carry their own organic linework and small confetti-accent fills rather than conforming to the radius scale.

## Components

### Navigation

**`top-nav`** — The top bar sits directly on the pink canvas (`{colors.surface-pink}`), no separate background fill. The "La Puce à l'oreille" wordmark anchors the top-left in `{colors.ink}`; a row of white pill buttons runs across the top-center and right. Padding around the bar is roughly `{spacing.xl}` (30px).

**`nav-pill-button`** — The signature interactive shape. White fill (`{colors.surface-white}`), black outline, ink label, full pill radius `{rounded.pill}` (47px). Used for the primary nav items: "Explorer", "Événements", "Affiches amplifiées". Padding approximately `{spacing.sm}` × `{spacing.xl}` (16px × 30px). Larger and heavier-set than the tags.

**`nav-pill-tag`** — A smaller version of the pill used for secondary links ("À propos", "Médiation", "Confidentialité"). Same white fill, black outline, ink label, and pill radius, but at reduced scale with tighter padding (~`{spacing.xxs}` × `{spacing.sm}`, 4px × 16px).

**`nav-dropdown-caret`** — The downward caret beside "Explorer", rendered in `{colors.accent-coral}` (#ef724f) — one of the few places an accent color appears in the chrome.

**`logo-wordmark`** — The "La Puce à l'oreille" mark, set in `{colors.ink}` on the canvas, top-left.

### Hero

**`hero-band`** — The full-canvas hero. Background `{colors.surface-pink}`, ink type, headline in `{typography.display-hero}` (Manrope 800 / ~120px / 1.0 line-height). The headline ("Balados décalés pour enfants allumés") stacks across four tight lines, centered, surrounded by scattered doodles. Vertical padding around `{spacing.section}` (80px).

### Cards

**`info-card`** — A bright teal card (`{colors.accent-teal}` — #ace2df) carrying intro copy ("La puce à l'oreille crée des balados…") in `{colors.ink}`. It is rotated and overlapped into the lower hero, breaking the grid. Soft corners at `{rounded.sm}` (10px), internal padding around `{spacing.xxl}` (38px).

### Buttons

**`button-primary`** — A solid black CTA pill: `{colors.ink}` fill, `{colors.surface-white}` label, `{rounded.pill}` (47px) radius, padding ~`{spacing.sm}` × `{spacing.xl}` (16px × 30px). Note: the automated button capture returned an anomalous flat/zero-radius/zero-padding reading (see Known Gaps); this spec is reconstructed from the system's observed pill geometry.

## Do's and Don'ts

### Do
- Keep the canvas pale-pink (`{colors.surface-pink}`). It is the brand's identity floor — not white.
- Set headlines in Manrope ExtraBold (800) at large scale. Scale and weight are the entire type voice.
- Use full pill buttons (`{rounded.pill}` — 47px) with white fill and black outline for navigation.
- Reserve the confetti accents (coral, magenta, teal, yellow, etc.) for doodles and micro-moments only.
- Use rotation and overlap (like the teal info-card) to create depth and energy — the system is flat by design.
- Keep linework doodles black with tiny accent fills, scattered freely around the central type.

### Don't
- Don't paint large surfaces with the saturated accents — they belong only at the illustration and micro-accent layer.
- Don't add drop shadows; the system has none and relies on overlap/rotation for depth.
- Don't switch the canvas to white — it removes the brand's warmth.
- Don't reduce the headline weight below 800 or tighten its scale — the oversized heavy type is the brand.
- Don't square off the nav pills — the 47px capsule is the signature shape.
- Don't document hover states; default and pressed only.

## Responsive Behavior

### Breakpoints
Only a desktop landing capture and a narrow-width render were observed, so breakpoints are inferred from the two captured widths.

| Name | Observed Behavior |
|---|---|
| Mobile (narrow) | Wordmark, pill nav, and pill tags shrink and stay on a single top row; the hero headline scales down substantially but keeps its stacked four-line block; the teal info-card stays rotated and overlapped below the headline. |
| Desktop | Full-scale ~120px hero headline; pill nav spread across the top; doodles scattered across the wide canvas. |

### Touch Targets
- `{component.nav-pill-button}` is comfortably large at desktop (16px × 30px padding inside a full pill); the smaller `{component.nav-pill-tag}` (4px × 16px) is below typical 44px minimums and may need enlargement on touch devices.

### Collapsing Strategy
- The pill nav appears to scale rather than collapse into a hamburger at the captured narrow width.
- The hero headline scales down but retains its tight stacked structure.
- Decorative doodles reduce in size and stay positioned around the type.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key (`{component.nav-pill-button}`, `{component.info-card}`).
2. Variants live as separate `components:` entries.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Document default and active/pressed states only — never hover.
5. Headlines stay Manrope 800; the type voice is scale + weight, not family changes.
6. Keep the confetti accents scarce — structure is black-on-pink.
7. When adding depth, prefer rotation/overlap over shadow — the system is intentionally flat.

## Known Gaps

- **No body/paragraph typography was measured** — only h1/h2/h3 (display roles) were captured. Body, nav-label, button-label, and caption sizes and weights are unknown and should be confirmed against the live site before building. They are likely Manrope but the size/weight are not in scope here.
- **The automated button capture is anomalous** — `button-primary` returned `radius: 0px, padding: 0px`, which contradicts the visible pill geometry in the screenshots (likely a styled link element rather than a `<button>`). The button spec is reconstructed from observed pill shapes; verify against source.
- **No shadows were detected** (`shadows: []`); the flat depth model is treated as intentional, but any subtle elevation on cards would need confirmation.
- **The measured h3 (50px) is larger than h2 (34px)** — preserved from ground-truth; the heading scale may be applied by visual size rather than semantic tag.
- **Only the landing page was captured** — footer, interior pages, episode listings, and any form/input components are out of scope.
- **The exact canvas color** (`{colors.surface-pink}` — #f6e0db) was recorded at low frequency (1); confirm it is the true global background rather than a localized fill.
- **Animation, transitions, and the "Explorer" dropdown expanded state** were not captured.
- **Confetti accent usage** is inferred from low-frequency samples on doodles; exact placement rules are not measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/lpalo/design-md -->
