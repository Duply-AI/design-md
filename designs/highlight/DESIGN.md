---
version: alpha
name: Highlight.io-design-analysis
description: "A dark, developer-tooling marketing interface built on a deep indigo-purple canvas (#0d0225) with white Poppins headlines, a single lime-yellow highlight color for emphasis words, and a bright cyan as the primary action + link color. The system reads as a confident open-source observability product — near-black purple surfaces, neon accent voltage on a small set of words, purple offset drop-shadows on feature cards, and white testimonial cards that pop against the dark field."

colors:
  primary: "#72e4fc"
  on-primary: "#0d0225"
  ink: "#ffffff"
  canvas: "#0d0225"
  body: "#dfdfdf"
  neutral-soft: "#e4e2e4"
  muted: "#9d97aa"
  muted-strong: "#6f6e77"
  muted-grey: "#645d74"
  muted-cool: "#9ca3af"
  accent-lime: "#ebff5e"
  purple: "#5420d1"
  purple-bright: "#6c37f4"
  purple-soft: "#744ed4"
  surface: "#1a1523"
  surface-elevated: "#30294e"
  surface-deep: "#1d0a26"
  surface-light: "#f9f9f9"
  hairline: "#34343a"
  blue: "#26a7de"
  black: "#000000"

typography:
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: 58px
    fontWeight: 600
    lineHeight: 1.31
    letterSpacing: -0.5px
  subhead:
    fontFamily: "Poppins, sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.227
    letterSpacing: -0.25px
  button:
    fontFamily: "Poppins, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  xxs: 3px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 24px
  blob: 35px
  pill: 44px
  full: 100px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  ml: 20px
  lg: 24px
  xl: 32px
  xxl: 44px
  xxxl: 64px
  section: 96px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 32px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 32px
  button-cta-purple:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 32px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  product-tab:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px
  product-tab-active:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px
  feature-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-row-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: 12px
  badge-pill:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  testimonial-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: 24px
  integration-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 20px
  course-card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 44px
  cta-band:
    backgroundColor: "{colors.purple-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.xl}"
    padding: 96px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    padding: 64px
---

## Overview

Highlight.io's marketing surface is a dark, developer-tooling interface anchored on a deep indigo-purple canvas (`{colors.canvas}` — #0d0225). Headlines are white Poppins at weight 600, with a single neon **lime-yellow** (`{colors.accent-lime}` — #ebff5e) used to spotlight emphasis words inside the hero ("Monitoring Platform.", "today's", "visibility"). The primary action color is a bright **cyan** (`{colors.primary}` — #72e4fc) — used for the "Get started" CTA fill, outline-button text, and inline links alike.

The system reads as a confident open-source observability product. The page is almost entirely dark — near-black purple surfaces (`{colors.surface}` — #1a1523, `{colors.surface-elevated}` — #30294e) hold product tabs, feature panels, and integration tiles. The two moments of brightness are deliberate: lime-yellow on a handful of words, and white testimonial cards (`{colors.surface-light}` — #f9f9f9) that pop against the dark field.

Type voice is single-family: **Poppins** carries headlines (58px / 44px, weight 600, slight negative tracking) and buttons (16px, weight 400). The geometric, rounded Poppins forms give the dark UI a friendly, approachable edge rather than a severe enterprise tone.

Component voltage comes from a **signature purple offset drop-shadow** — `rgb(108, 55, 244) 8px 8px 0px -2px` (`{colors.purple-bright}`), a hard, un-blurred shadow that sits down-right of elevated cards (the OpenTelemetry course card). The mid-page CTA band flips to a saturated purple (`{colors.purple-bright}` — #6c37f4), the loudest surface on the page.

**Key Characteristics:**
- Deep indigo-purple canvas (`{colors.canvas}` — #0d0225) across the entire page; this is a dark-first system with no light body sections.
- Bright cyan (`{colors.primary}` — #72e4fc) does triple duty: primary CTA fill, outline-button text/border, and inline links.
- Lime-yellow (`{colors.accent-lime}` — #ebff5e) reserved exclusively for emphasis words inside white headlines — never on buttons or large surfaces.
- Single typeface: Poppins, weight 600 for display, weight 400 for buttons. Negative letter-spacing on headlines (-0.5px / -0.25px).
- Layered dark surfaces: `{colors.surface}` (#1a1523) for panels, `{colors.surface-elevated}` (#30294e) for active tabs and the course card, `{colors.surface-deep}` (#1d0a26) as a deeper variant.
- A hard, offset purple drop-shadow (`8px 8px 0px -2px` in `{colors.purple-bright}`) as the signature elevation device.
- White testimonial cards (`{colors.surface-light}`) as the only light surface — the contrast does the visual lifting.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons/tabs/cards (the dominant radius), `{rounded.lg}` (16px) for integration tiles, `{rounded.xl}` (24px) for the course card, `{rounded.pill}` (44px) for tag pills.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #72e4fc): The cyan action color. "Get started" button fill, outline-button text and border, and all inline links. The most-clicked color in the system.
- **Accent Lime** (`{colors.accent-lime}` — #ebff5e): Neon highlight reserved for emphasis words inside white headlines. Used sparingly — three or four words per page.
- **Purple Bright** (`{colors.purple-bright}` — #6c37f4): The mid-page CTA band background and the signature hard offset shadow color.
- **Purple** (`{colors.purple}` — #5420d1): Tag pills (e.g., "Star us on GitHub") and secondary purple accents.
- **Purple Soft** (`{colors.purple-soft}` — #744ed4): A lighter purple used in gradients/borders around the course card.
- **Blue** (`{colors.blue}` — #26a7de): A secondary blue measured in iconography/accents — used rarely.

### Surface
- **Canvas** (`{colors.canvas}` — #0d0225): The deep indigo page floor — used everywhere, including the footer.
- **Surface** (`{colors.surface}` — #1a1523): Feature panels, integration/framework tiles, inactive product chrome.
- **Surface Elevated** (`{colors.surface-elevated}` — #30294e): Active product tab, the OpenTelemetry course card, raised feature rows.
- **Surface Deep** (`{colors.surface-deep}` — #1d0a26): A deeper purple-black variant for nested fills.
- **Surface Light** (`{colors.surface-light}` — #f9f9f9): Testimonial cards — the only light surface in the system.
- **Hairline** (`{colors.hairline}` — #34343a): Subtle 1px dividers/borders on dark panels.
- **Black** (`{colors.black}` — #000000): Pure-black accents inside iconography.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All headlines and primary text on the dark canvas.
- **Body** (`{colors.body}` — #dfdfdf): Default running-text and paragraph copy.
- **Neutral Soft** (`{colors.neutral-soft}` — #e4e2e4): A near-white secondary text tone.
- **Muted** (`{colors.muted}` — #9d97aa): Secondary text — nav items, footer links, sub-labels.
- **Muted Strong** (`{colors.muted-strong}` — #6f6e77): Tertiary text — fine print.
- **Muted Grey** (`{colors.muted-grey}` — #645d74) / **Muted Cool** (`{colors.muted-cool}` — #9ca3af): Additional measured neutral tones for low-emphasis copy.
- **On Primary** (`{colors.on-primary}` — #0d0225): Dark text placed on the cyan primary button — re-uses the canvas indigo for contrast against the bright fill.

## Typography

### Font Family
The system runs **Poppins** for everything — a geometric, rounded sans-serif that gives the dark observability UI a friendly approachability. Headlines use weight 600 with negative letter-spacing; buttons use weight 400. The fallback stack is `Poppins, sans-serif`. Poppins is freely available (Google Fonts / SIL Open Font License), so no substitute is required.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.headline}` | 58px | 600 | 1.31 | -0.5px | Hero h2 ("The open source, fullstack Monitoring Platform.") and major band heads |
| `{typography.subhead}` | 44px | 600 | 1.227 | -0.25px | Section sub-heads ("Web application monitoring for today's developer.", "Get the visibility you need") |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button labels, nav items, inline links, footer text |

### Principles
Headlines stay Poppins 600 with negative tracking — the geometric rounded forms are the brand's only typographic signature, so the weight and tracking are consistent across sizes. Emphasis is created by color (lime-yellow on a key word), not by a heavier weight or a different face. Buttons and supporting UI text drop to weight 400 at 16px, keeping the chrome quiet so the headlines carry the page.

### Note on Font Substitutes
Poppins is open-source (SIL OFL) and ships directly — no substitution needed. If unavailable, **Inter** or **Montserrat** at the same weights are acceptable geometric fallbacks, though both shift the rounded-character feel of Poppins.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.ml}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 44px · `{spacing.xxxl}` 64px · `{spacing.section}` 96px.
- **Most common spacing:** 8px (highest measured frequency) for tight internal gaps, with 12px / 20px / 24px / 32px forming the mid-range rhythm.
- **Section padding:** `{spacing.section}` (96px) for major vertical band separation.
- **Card internal padding:** `{spacing.xl}` (32px) for feature panels; `{spacing.lg}` (24px) for testimonial cards; `{spacing.xxl}` (44px) for the course card.

### Grid & Container
- **Editorial body:** Centered single-column hero (headline + button row centered), transitioning to two-column feature bands (text left / product visual right, alternating).
- **Product tab bar:** 6-up horizontal tab strip (Session Replay / Error Monitoring / Logging / Traces / Dashboards / Self-Hosting) at desktop.
- **Integration & framework grids:** 3-up tile grids at desktop.
- **Testimonial row:** 3-up cards at desktop.
- **Footer:** Multi-column link list (Product / Competitors / Developers / Frameworks / Contact & Legal).

### Whitespace Philosophy
The dark canvas uses generous section padding (96px) to let the few bright accents breathe. Hero content is vertically centered with abundant negative space around the CTA cluster. Feature bands alternate text/visual to keep the long dark scroll legible without dense list-packing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, surface color only | Body sections, nav, hero |
| Dark panel | `{colors.surface}` / `{colors.surface-elevated}` fill against canvas | Feature panels, integration tiles, active tabs |
| Light pop | `{colors.surface-light}` white card on dark canvas | Testimonial cards — contrast does the elevation work |
| Offset shadow | `rgb(108, 55, 244) 8px 8px 0px -2px` — hard, un-blurred purple | The OpenTelemetry course card (signature elevation device) |

The elevation philosophy is **color-contrast-first**: dark surfaces layer by lightening the purple (canvas → surface → surface-elevated), and the one explicit shadow is the hard offset purple block — a deliberate, retro/brutalist accent rather than a soft modern drop-shadow.

### Decorative Depth
- The hero's product-tab panel and the feature visuals carry product UI chrome (screenshots of dashboards, error cards) with their own internal styling.
- The mid-page CTA band (`{component.cta-band}`) uses a saturated purple fill (`{colors.purple-bright}`) as its own depth device — the brightest surface closing the editorial flow before the footer.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xxs}` | 3px | Smallest accents (measured, minor use) |
| `{rounded.xs}` | 4px | Small inline elements |
| `{rounded.sm}` | 6px | Minor inputs/chips |
| `{rounded.md}` | 8px | Dominant radius — buttons, product tabs, feature panels, testimonial cards |
| `{rounded.lg}` | 16px | Integration / framework tiles |
| `{rounded.xl}` | 24px | Course card, CTA band |
| `{rounded.blob}` | 35px | A single observed large-radius element (measured, rare) |
| `{rounded.pill}` | 44px | Tag pills ("Star us on GitHub", "Try Highlight Today") |
| `{rounded.full}` | 100px | Fully-rounded chip/avatar accents |

### Geometry
The 8px radius dominates the system (highest measured frequency), giving buttons and cards a gentle, consistent softness. Tag pills jump to a 44px pill radius. Integration tiles and the course card step up to 16px / 24px for larger surfaces.

## Components

### Navigation

**`top-nav`** — Horizontal nav on the `{colors.canvas}` floor. Carries the logo at left, primary menu (Product, Integrations, Pricing, Resources) center in `{colors.muted}` (`{component.nav-link}`), and a right-side cluster: "Docs", "Sign in" text-links, a cyan-outline "Sign up" button (`{component.button-outline}`), and GitHub/Discord icon links. Menu text uses `{typography.button}` (Poppins 16px / 400).

**`nav-link`** — Inline nav menu item. Transparent background, `{colors.muted}` text.

### Buttons

**`button-primary`** — The signature cyan CTA ("Get started"). Background `{colors.primary}` (#72e4fc), dark text `{colors.on-primary}` (#0d0225), type `{typography.button}`, rounded `{rounded.md}` (8px, derived — the raw measurement captured 0px from a wrapping element; the visual rendering and the system's dominant 8px radius justify the value). Padding `12px 32px` is derived from measured spacing tokens.

**`button-outline`** — Cyan-outline button ("Live demo", "Sign up"). Transparent background, `{colors.primary}` text and 1px `{colors.primary}` border, same radius and padding as primary.

**`button-cta-purple`** — The "Get started for free" / "Start Learning" buttons sitting on purple bands. Cyan fill (`{colors.primary}`) with dark text, `{rounded.md}`.

**`text-link`** — Inline link in `{colors.primary}` (cyan). Used for "Learn More", "Request a Demo Call", "View all frameworks", and footer-adjacent CTAs.

### Product Tabs

**`product-tab`** — Inactive tab in the hero product-feature strip. Transparent background, `{colors.body}` text, icon above label, rounded `{rounded.md}`, padding `{spacing.md}` (16px).

**`product-tab-active`** — Active tab (e.g., "Session Replay"). Background fills to `{colors.surface-elevated}` (#30294e), text brightens to `{colors.ink}`. The fill is the only active-state signal.

### Cards & Containers

**`feature-panel`** — The dark panel beneath the product tab strip (holds the "Session Replay" title, description, and feature rows). Background `{colors.surface}` (#1a1523), text `{colors.body}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px).

**`feature-row-pill`** — Inline feature rows inside the panel ("Console and Network Recording", "Comprehensive Session Search"). Background `{colors.surface-elevated}`, text `{colors.body}`, rounded `{rounded.md}`, padding `{spacing.sm}` (12px).

**`testimonial-card`** — Customer-quote cards. Background `{colors.surface-light}` (#f9f9f9) — the only light card in the system — with dark text `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Carries the quote plus a bold name + role line.

**`integration-tile`** — Square tiles in the framework/integration grids holding a single logo. Background `{colors.surface}`, rounded `{rounded.lg}` (16px), padding `{spacing.ml}` (20px).

**`course-card`** — The "Master OpenTelemetry" pre-CTA card. Background `{colors.surface-elevated}` with a purple-soft border and the signature hard offset purple shadow (`8px 8px 0px -2px` in `{colors.purple-bright}`), rounded `{rounded.xl}` (24px), padding `{spacing.xxl}` (44px). Holds a headline with a lime-yellow emphasis word, body copy, and a cyan CTA button.

### Tags / Badges

**`badge-pill`** — Small purple pill ("Star us on GitHub", "Try Highlight Today"). Background `{colors.purple}` (#5420d1), text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.pill}` (44px), padding `8px 16px`.

### CTA / Footer

**`cta-band`** — The full-width "Get the visibility you need" band near page end. Background flips to saturated `{colors.purple-bright}` (#6c37f4) — the loudest surface on the page — text `{colors.ink}`, headline in `{typography.subhead}` with a lime-yellow emphasis word, a cyan CTA button centered, rounded `{rounded.xl}`, padding `{spacing.section}` (96px).

**`footer`** — Dark footer on the same `{colors.canvas}` floor (no surface inversion — the whole page is already dark). Multi-column link list in `{colors.muted}` text, type `{typography.button}`, padding `{spacing.xxxl}` (64px). Logo + social icons at top-left.

## Do's and Don'ts

### Do
- Keep `{colors.canvas}` (#0d0225) as the universal floor — this is a dark-first system with no light body sections.
- Use `{colors.primary}` (cyan #72e4fc) for primary CTAs, outline buttons, and inline links — it's the single action color.
- Reserve `{colors.accent-lime}` (#ebff5e) for a handful of emphasis words inside white headlines. Never put lime on a button or large surface.
- Layer dark surfaces by lightening the purple: canvas → `{colors.surface}` → `{colors.surface-elevated}`.
- Use white testimonial cards (`{colors.surface-light}`) deliberately — they are the only light pop and should stay scarce.
- Apply the hard offset purple shadow (`8px 8px 0px -2px`) only on signature elevated cards; it's a brand accent, not a default.
- Keep Poppins headlines at weight 600 with negative tracking; create emphasis with lime color, not heavier weight.

### Don't
- Don't introduce soft blurred drop-shadows; the system's elevation is color-contrast plus one hard offset shadow.
- Don't use lime-yellow on buttons or fills — it lives only on text.
- Don't put body copy or buttons in a face other than Poppins.
- Don't scatter white surfaces; the dark canvas is the identity and white cards are a scarce signal.
- Don't add hover-state styling beyond default + active; active product tabs simply fill with `{colors.surface-elevated}`.
- Don't exceed `{rounded.xl}` (24px) on standard cards except for pill tags.

## Responsive Behavior

### Breakpoints
The measured capture shows a desktop layout and a narrow stacked layout. Exact breakpoint pixel values were not measured.

| Name | Behavior (observed) |
|---|---|
| Mobile / narrow | Hero headline scales down; CTA buttons stack; product tab strip compresses; feature bands collapse to single column; integration/testimonial grids go 1-up; footer columns stack |
| Desktop | Full horizontal nav; centered hero; 6-up product tab strip; two-column alternating feature bands; 3-up tile and testimonial grids |

### Touch Targets
- `{component.button-primary}` and `{component.button-outline}` carry generous `12px 32px` padding (derived), comfortably exceeding minimum tap sizes.
- `{component.product-tab}` uses 16px padding plus icon + label, yielding a large tap area.
- Exact rendered button/input heights were not measured.

### Collapsing Strategy
- Two-column feature bands (text + product visual) collapse to single column on narrow screens.
- The 6-up product tab strip compresses/wraps.
- Integration, framework, and testimonial grids reduce columns rather than scaling cards down.
- Footer link columns stack vertically.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-panel}`, `{component.cta-band}`).
2. Variants of an existing component (`-active`, `-outline`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active states only (e.g., `{component.product-tab-active}`).
5. Headlines stay Poppins 600 with negative tracking; emphasis comes from `{colors.accent-lime}`, not weight.
6. The cyan `{colors.primary}` is the one action color; the lime is text-only; purple bands are scarce loud moments.
7. The hard offset purple shadow is a signature device — apply it intentionally, not by default.

## Known Gaps

- The top "Migrate your Highlight account to LaunchDarkly" banner is a saturated red that was **not captured** in the measured color palette; its exact hex is unconfirmed and is therefore not tokenized.
- The `button-primary` component was measured with `radius: 0px` and `padding: 0px` — these reflect a wrapping/anchor element rather than the rendered button. Radius (`{rounded.md}`) and padding values are derived from the system's dominant 8px radius and observed screenshot proportions.
- Only three typography roles were measured (h2, h3, button). Body-copy, caption, nav-label, and small-text sizes were not extracted — they are approximated via `{typography.button}` where needed and should be confirmed.
- The exact text color inside testimonial cards (dark text on the white surface) was not directly measured; `{colors.canvas}` is used as the documented dark-on-light value.
- Responsive breakpoint pixel values and rendered component heights were not measured.
- The signature offset shadow (`rgb(108, 55, 244) 8px 8px 0px -2px`) was measured exactly once; its full distribution across components is unconfirmed.
- Minor measured spacing values (10px, 14px, 40px, 50px, 52px) and the 35px radius were observed at very low frequency and are not promoted to primary tokens.
- Animation, transition timings, and form/input states were not in scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/highlight/design-md -->
