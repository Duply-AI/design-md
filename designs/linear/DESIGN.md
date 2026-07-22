---
version: alpha
name: Linear-design-analysis
description: The canonical dark product-tool aesthetic — a near-black canvas (#08090a) with layered graphite surfaces, precise Inter Variable typography at custom axis weights (510/590/680), and a restrained indigo accent family (#5e6ad2 brand, #828fff links). Surfaces stack through translucent white overlays and hairline borders rather than shadows; app screenshots sit in glassy panel frames. The system reads as engineered software minimalism — quiet, dense, obsessively tuned, with a serif display face (Tiempos) reserved for rare editorial moments.
colors:
  brand: "#5e6ad2"
  accent: "#7170ff"
  accent-bright: "#828fff"
  accent-tint: "#18182f"
  link: "#828fff"
  canvas: "#08090a"
  canvas-deep: "#010102"
  surface: "#1c1c1f"
  surface-raised: "#232326"
  surface-high: "#28282c"
  surface-panel: "#0f1011"
  surface-tint: "#141516"
  overlay-soft: "rgba(255,255,255,0.05)"
  header-veil: "rgba(11,11,11,0.8)"
  inverse: "#ffffff"
  ink: "#f7f8f8"
  body: "#d0d6e0"
  muted: "#8a8f98"
  quiet: "#62666d"
  hairline: "#23252a"
  hairline-strong: "#34343a"
  hairline-bright: "#3e3e44"
  hairline-veil: "rgba(255,255,255,0.08)"
  on-brand: "#ffffff"
  plan-green: "#68cc58"
  build-yellow: "#d4b144"
  security-slate: "#7a7fad"
  success: "#27a644"
  error: "#eb5757"
typography:
  display-xl:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 56px
    fontWeight: 590
    lineHeight: 1.06
    letterSpacing: -0.022em
  display-lg:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 48px
    fontWeight: 590
    lineHeight: 1.08
    letterSpacing: -0.022em
  display-md:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 40px
    fontWeight: 590
    lineHeight: 1.1
    letterSpacing: -0.022em
  display-sm:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 32px
    fontWeight: 590
    lineHeight: 1.12
    letterSpacing: -0.022em
  serif-accent:
    fontFamily: "Tiempos Headline, ui-serif, Georgia, serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  title-lg:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 24px
    fontWeight: 590
    lineHeight: 1.25
    letterSpacing: -0.012em
  title-md:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 20px
    fontWeight: 510
    lineHeight: 1.3
    letterSpacing: -0.012em
  title-sm:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 17px
    fontWeight: 510
    lineHeight: 1.4
    letterSpacing: -0.012em
  body-lg:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 12px
    fontWeight: 510
    lineHeight: 1.4
    letterSpacing: 0
  micro:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 11px
    fontWeight: 510
    lineHeight: 1.35
    letterSpacing: 0
  code:
    fontFamily: "Berkeley Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 15px
    fontWeight: 510
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter Variable, SF Pro Display, sans-serif"
    fontSize: 14px
    fontWeight: 510
    lineHeight: 1.4
    letterSpacing: 0
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  section-lg: 160px
components:
  button-primary:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 16px
    height: 36px
  button-secondary:
    backgroundColor: "{colors.overlay-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 16px
    height: 36px
  button-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 16px
    height: 36px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.header-veil}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 160px
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    padding: 96px
  eyebrow-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
  product-frame:
    backgroundColor: "{colors.surface-panel}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-glass:
    backgroundColor: "{colors.overlay-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-pill:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent-bright}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  keyboard-key:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.xs}"
    padding: 2px 6px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    height: 36px
  testimonial-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  code-block:
    backgroundColor: "{colors.surface-panel}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  footer:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Linear's marketing surface is the genre-defining dark product site: a near-black canvas (`{colors.canvas}` — #08090a, dropping to `{colors.canvas-deep}` #010102 on marketing bands) where hierarchy is built from *layers of faint light* — graphite surfaces (#1c1c1f → #28282c), translucent white overlays (`{colors.overlay-soft}`), and hairline borders — rather than shadows or saturated color.

Typography is **Inter Variable** tuned at custom axis weights: 510 ("medium"), 590 ("semibold"), 680 ("bold") — deliberately off the standard 500/600/700 stops. Display headlines run 590 with −0.022em tracking; body text sits at Linear's famous 15px/1.6. A licensed serif, **Tiempos Headline**, appears rarely as an editorial accent (`{typography.serif-accent}`); **Berkeley Mono** handles code and keyboard keys.

Color is rationed: the indigo brand family (`{colors.brand}` #5e6ad2, `{colors.accent}` #7170ff, links `{colors.link}` #828fff) plus three product-area accents (plan green, build yellow, security slate) that tint icons and diagrams — never large surfaces. Primary CTAs invert to **white** (`{component.button-primary}`), the brightest object on any page.

**Key Characteristics:**
- Near-black layered canvas: #010102 → #08090a → #0f1011 → #1c1c1f → #232326 → #28282c; elevation = lighter surface, not shadow.
- Inter Variable at precision weights 510/590/680; display tracking −0.022em; body 15px at 1.6.
- White primary buttons (`{colors.inverse}` on `{colors.canvas}`) at compact 36px, radius `{rounded.md}` (8px) — never pill.
- Indigo accent family for links/badges only; `{colors.accent-tint}` (#18182f) for badge fills.
- Translucent, blurred top nav (`{colors.header-veil}` — rgba(11,11,11,0.8)).
- App screenshots in `{component.product-frame}` glassy panels (#0f1011, 16px radius, hairline border) — the product is the imagery.
- `{component.keyboard-key}` chips (Berkeley Mono on #232326) — the keyboard-first identity rendered as UI.
- Massive vertical rhythm on marketing bands (~96–160px) against dense 15px body text.

## Colors

### Brand & Accent
- **Brand** (`{colors.brand}` — #5e6ad2): the Linear indigo — logo, brand badges, occasional filled buttons (`{component.button-brand}`). Muted by design; never neon.
- **Accent** (`{colors.accent}` — #7170ff) and **Accent Bright** (`{colors.accent-bright}` — #828fff): interactive accents and links (`{colors.link}`); bright variant also serves as the link tone. **Accent Tint** (`{colors.accent-tint}` — #18182f): badge/selection fills.
- **Product-area accents**: `{colors.plan-green}` #68cc58 (Plan), `{colors.build-yellow}` #d4b144 (Build), `{colors.security-slate}` #7a7fad (Security) — icon and diagram tints for product pillars.

### Surface (the elevation ramp)
- **Canvas Deep** (`{colors.canvas-deep}` — #010102): marketing hero/footer floor.
- **Canvas** (`{colors.canvas}` — #08090a): default page floor.
- **Surface Panel** (`{colors.surface-panel}` — #0f1011): screenshot frames, code panels.
- **Surface Tint** (`{colors.surface-tint}` — #141516): cards one step above canvas.
- **Surface / Raised / High** (#1c1c1f / #232326 / #28282c): menus, inputs, keys, hover layers — each step is "closer to the light".
- **Overlay Soft** (`{colors.overlay-soft}` — rgba(255,255,255,0.05)): glassy card fill over any surface.
- **Header Veil** (`{colors.header-veil}` — rgba(11,11,11,0.8)): the blurred sticky-nav background.

### Text
- **Ink** (`{colors.ink}` — #f7f8f8): headlines, button-secondary labels. Not pure white.
- **Body** (`{colors.body}` — #d0d6e0): running text — a cool, slightly blue light gray.
- **Muted / Quiet** (`{colors.muted}` #8a8f98, `{colors.quiet}` #62666d): secondary copy, eyebrows, fine print.
- **Inverse** (`{colors.inverse}` — #ffffff): primary-button surface; the only pure white in the system.

### Borders
- **Hairline ramp** (`{colors.hairline}` #23252a → `{colors.hairline-strong}` #34343a → `{colors.hairline-bright}` #3e3e44) plus `{colors.hairline-veil}` (rgba(255,255,255,0.08)) for glass edges.

### Semantic
- **Success** (`{colors.success}` — #27a644), **Error** (`{colors.error}` — #eb5757): mostly inside product UI screenshots; marketing chrome stays neutral.

## Typography

### Font Family
- **Inter Variable** (`"Inter Variable","SF Pro Display",…`) for everything — with OpenType settings `cv01, ss03` (alternate glyphs) and custom variable weights.
- **Tiempos Headline** (Klim Type Foundry, licensed) — rare serif editorial accents.
- **Berkeley Mono** (U.S. Graphics, licensed) — code, keyboard keys, terminal frames.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 590 | 1.06 | -0.022em | Homepage h1 ("The product development system…") |
| `{typography.display-lg}` | 48px | 590 | 1.08 | -0.022em | Section heads |
| `{typography.display-md}` | 40px | 590 | 1.1 | -0.022em | Sub-section heads |
| `{typography.display-sm}` | 32px | 590 | 1.12 | -0.022em | Feature-block heads |
| `{typography.serif-accent}` | 48px | 400 | 1.1 | -0.01em | Rare editorial serif moments — Tiempos |
| `{typography.title-lg}` | 24px | 590 | 1.25 | -0.012em | Card/feature titles |
| `{typography.title-md}` | 20px | 510 | 1.3 | -0.012em | Sub-titles |
| `{typography.title-sm}` | 17px | 510 | 1.4 | -0.012em | List titles, dense headers |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Hero sub-copy |
| `{typography.body-md}` | 15px | 400 | 1.6 | 0 | Default running text — the Linear 15px |
| `{typography.body-sm}` | 13px | 400 | 1.5 | 0 | Captions, footer links |
| `{typography.caption}` | 12px | 510 | 1.4 | 0 | Eyebrows, badges |
| `{typography.micro}` | 11px | 510 | 1.35 | 0 | Tags, metadata |
| `{typography.code}` | 13px | 400 | 1.5 | 0 | Code, keyboard keys — Berkeley Mono |
| `{typography.button}` | 15px | 510 | 1.0 | 0 | Button labels |
| `{typography.nav-link}` | 14px | 510 | 1.4 | 0 | Top-nav items |

### Principles
The weight system is *custom-stop variable*: 510/590/680 instead of 500/600/700 — a half-step heavier than defaults, which is part of why Linear type feels dense and machined. Tracking tightens with size (−0.012em titles, −0.022em display). Hierarchy comes from weight + tone (ink vs body vs muted), rarely from size jumps.

### Note on Font Substitutes
- **Inter Variable** is free (SIL OFL) — use it directly; enable `cv01`/`ss03` and use 510/590/680 axis weights (static Inter: round to 500/600/700, slightly lighter than the original).
- **Tiempos Headline is licensed** (Klim). Substitutes: **Source Serif 4** (free) or Georgia at 400 with tight leading.
- **Berkeley Mono is licensed**. Substitutes: **JetBrains Mono** or **IBM Plex Mono** at 13px.

## Layout

### Spacing System
- **Base unit**: 4px grid; controls sit on 8px steps.
- **Tokens**: `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px · `{spacing.section-lg}` 160px.
- Marketing bands breathe at 96–160px; inside cards everything is dense (24px padding, 8–12px gaps).

### Grid & Container
- **Max content width**: ~1024–1200px centered; hero text columns cap narrower (~640px) for measure.
- **Hero**: centered or left-aligned headline + sub-copy + button pair, with a full-width product screenshot panel below.
- **Feature grids**: 2–3-up `{component.feature-card}` / glass cards; bento-style mixed-size grids on product pages.
- **Footer**: 5–6 link columns of `{typography.body-sm}` on `{colors.canvas-deep}`.

### Whitespace Philosophy
Inverted density: enormous space *between* bands, high density *inside* components. The dark canvas makes 160px gaps feel like silence rather than emptiness; 15px/1.6 body keeps reading-line rhythm tight and product-like.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Floor | `{colors.canvas-deep}` / `{colors.canvas}` | Page background |
| Tint | `{colors.surface-tint}` | Cards one step up |
| Panel | `{colors.surface-panel}` + 1px `{colors.hairline}` | Screenshot/code frames |
| Glass | `{colors.overlay-soft}` fill + `{colors.hairline-veil}` border | Feature cards, hover layers |
| Raised | `{colors.surface}` → `{colors.surface-high}` | Menus, inputs, keys |
| Veil | `{colors.header-veil}` + backdrop blur | Sticky navigation |

**Light is elevation.** Almost no drop shadows on the dark theme — a surface is "higher" because it is lighter and/or carries a brighter hairline. Subtle glows (accent at low alpha) appear behind hero product frames.

### Decorative Depth
- Product screenshots emit faint indigo glow halos.
- Thin gradient strokes (accent → transparent) trace diagram lines and connector paths in feature illustrations.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Keyboard keys, tiny chips |
| `{rounded.sm}` | 6px | Small controls, inline tags |
| `{rounded.md}` | 8px | Buttons, inputs — the workhorse |
| `{rounded.lg}` | 12px | Cards |
| `{rounded.xl}` | 16px | Screenshot panels, large frames |
| `{rounded.xxl}` | 24px | Oversized bento tiles |
| `{rounded.pill}` | 9999px | Badge pills only |
| `{rounded.full}` | 9999px / 50% | Avatars |

Buttons are **not** pills — 8px radius at 36px height is a Linear signature (compact, squared, machine-like). Pills are reserved for small badges.

## Components

### Navigation

**`top-nav`** — Sticky, translucent (`{colors.header-veil}`) with backdrop blur, 64px, hairline bottom edge. Wordmark left; center menu (Product, Resources, Pricing, Customers, Blog…) in `{typography.nav-link}`; right cluster "Log in" text-link + `{component.button-primary}` ("Sign up").

### Buttons & Links

**`button-primary`** — White (`{colors.inverse}`) with near-black text (`{colors.canvas}`), `{typography.button}` (15px/510), `{rounded.md}`, 36px tall, 0×16px padding. The brightest element on the page — used once or twice per band.

**`button-secondary`** — Glass: `{colors.overlay-soft}` fill, `{colors.ink}` label, `{colors.hairline-veil}` border, same geometry as primary.

**`button-brand`** — Indigo fill (`{colors.brand}`) with white label; used for product-context CTAs and in-app-style moments, not the main marketing CTA.

**`text-link`** — `{colors.link}` (#828fff) inline links; no underline at rest.

### Bands & Content

**`hero-band`** — `{colors.canvas-deep}` floor, `{typography.display-xl}` ink headline, `{typography.body-lg}` sub-copy in `{colors.body}`, button pair, then a full-width `{component.product-frame}` screenshot.

**`section-band`** — Default band: canvas floor, `{component.eyebrow-label}` caption in muted, display-md/lg headline, supporting copy and card grids. Bands separate by `{spacing.section}`–`{spacing.section-lg}`.

**`eyebrow-label`** — Small `{typography.caption}` label in `{colors.muted}` above headlines, often with a product-area accent dot.

**`product-frame`** — The screenshot vessel: `{colors.surface-panel}`, `{rounded.xl}`, 1px `{colors.hairline}`, faint accent glow. Holds full app captures; inner chrome is the product's own.

**`feature-card`** / **`feature-card-glass`** — Bento tiles: tint fill (`{colors.surface-tint}`) or glass fill (`{colors.overlay-soft}` + `{colors.hairline-veil}`), `{rounded.lg}`, `{spacing.lg}` padding, `{typography.title-md}` title + `{typography.body-md}` copy in `{colors.muted}`, often with an embedded mini-diagram.

**`badge-pill`** — `{colors.accent-tint}` fill, `{colors.accent-bright}` caption text: "New", release tags, plan labels.

**`keyboard-key`** — Berkeley Mono on `{colors.surface-raised}` with `{rounded.xs}` and a bright top hairline; used in copy whenever a shortcut is referenced (⌘K everywhere).

**`testimonial-card`** — `{colors.surface-tint}` card with quote in `{typography.body-md}` body color, name + role in `{colors.muted}`, logo top-right.

### Forms & Code

**`text-input`** — `{colors.surface}` fill, `{colors.hairline-strong}` border, `{rounded.md}`, 36px, `{typography.body-md}`.

**`code-block`** — `{colors.surface-panel}` panel, `{rounded.lg}`, `{spacing.lg}` padding, Berkeley Mono 13px with indigo/green syntax tints.

### Footer

**`footer`** — `{colors.canvas-deep}`, 5–6 columns of `{typography.body-sm}` links in `{colors.muted}` (hover ink), status indicator with `{colors.success}` dot, fine print in `{colors.quiet}`.

## Do's and Don'ts

### Do
- Build elevation with lighter surfaces and hairlines — `{colors.surface-tint}` → `{colors.surface-high}` — not shadows.
- Keep primary CTAs white, compact (36px), and 8px-cornered; ration them to one or two per band.
- Use the custom weights (510/590/680) — standard 500/600/700 reads slightly thin against the original.
- Keep body at 15px/1.6 in `{colors.body}`; reserve `{colors.ink}` for headlines and labels.
- Tint icons/diagrams with the product-area accents (plan/build/security); keep large surfaces neutral.
- Frame every screenshot in `{component.product-frame}`; let the app be the artwork.
- Use Berkeley-Mono keyboard keys whenever shortcuts appear in copy.

### Don't
- Don't use pure black (#000) or pure-white text; the system lives between #010102 and #f7f8f8.
- Don't make buttons pills, and don't exceed `{rounded.xxl}` on tiles.
- Don't use the indigo accent for large fills or headline text — it's for links, badges, and glows.
- Don't add heavy drop shadows; a glow or brighter hairline is the maximum depth cue.
- Don't bold beyond 680, and don't use the serif outside rare editorial accents.
- Don't brighten the canvas per-section; bands vary by content, not background hue.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; display-xl → ~36–40px; bento grids stack 1-up; product frames bleed edge-to-edge |
| Tablet | 640–1024px | 2-up grids; nav keeps core items; section spacing compresses toward 64–96px |
| Desktop | 1024–1440px | Full bento layouts, 3-up grids, 96–160px rhythm |
| Wide | > 1440px | Content capped ~1200px; canvas keeps full-bleed darkness |

### Touch Targets
- Their CSS sets `--min-tap-size: 44px` — controls grow to ≥44px on touch even though desktop buttons render 36px.
- Keyboard-key chips are decorative on touch; tap targets defer to surrounding rows.

### Collapsing Strategy
- Bento grids reduce column count; tiles never shrink type below 15px body.
- Screenshot panels switch from framed (inset with radius) to full-bleed on mobile.
- The blurred header stays sticky at all sizes; menu opens as a full-screen dark sheet.

### Image Behavior
- App screenshots keep aspect ratio, cropping right-side panels first on narrow screens.
- Glows and gradient strokes scale down or drop on mobile for performance.

## Iteration Guide

1. One component at a time, by key (`{component.feature-card-glass}`, `{component.keyboard-key}`).
2. Variants are separate entries; no hover documentation (the CSS's `-hover` tokens are intentionally not specced here).
3. `{token.refs}` everywhere — never inline hex.
4. When something needs emphasis: raise its surface one step or brighten its hairline before reaching for color.
5. Accent color budget per band: links + one badge + one glow. More indigo than that reads off-system.
6. Type emphasis ladder: muted → body → ink → weight 590. Size is the last resort.
7. If a button looks friendly rather than machined, check: it should be 36px, 8px radius, weight 510.

## Known Gaps

- **Spacing scale is observational**: unlike colors/typography/radii (extracted from `--color-*`, `--font-*`, `--radius-*` variables), Linear's CSS exposes no named spacing scale; the `{spacing.*}` tokens document the observed 4/8px grid and 96–160px band rhythm from layout inspection, not from tokens.
- **Display sizes**: the marketing title scale (`--title-1` 17px … `--title-7` 56px) is extracted, but fluid scaling between breakpoints (clamp behavior) was not fully resolved; values documented at desktop rendering.
- **Hero headline weight**: rendered between 538–590 on the variable axis depending on element; documented uniformly as 590.
- **Animation**: scroll-reveals, glow pulses, and the product-tour transitions are out of scope.
- **Light theme**: linear.app's marketing surface ships dark-only — `colors` documents the dark canvas as the site's default; there is no `colors-dark` set because dark IS the default (the format's optional dark set is for light-default sites).
- **Product/dashboard UI**: the Linear app itself (its `--color-*` product tokens overlap with what's documented) deserves a separate dashboard-surface analysis — high-value future entry.
- **Translucent values**: rgba overlay values are documented as authored in their CSS; compositing against different canvases shifts perceived tone.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/linear/design-md -->
