---
version: alpha
name: Depot-design-analysis
description: A dark-mode developer-infrastructure interface built on a near-black canvas (#04040b) with terminal-green accents and the Red Hat type family. The system reads as engineered-for-engineers — high-contrast off-white headlines, dense product UI fragments (CI workflow panels, code blocks, benchmark bars) shown directly inside cards, green as the single brand action color, and tight modular radii (2–10px) that signal precision tooling rather than consumer softness.

colors:
  canvas: "#04040b"
  surface-card: "#0c0c0c"
  surface: "#121113"
  surface-elevated: "#1a191b"
  hairline-soft: "#2b292d"
  hairline: "#323035"
  border: "#3c393f"
  border-strong: "#49474e"
  ink: "#eeeef0"
  white: "#ffffff"
  on-primary: "#b5b2bc"
  muted: "#7c7a85"
  muted-soft: "#6f6d78"
  muted-strong: "#625f69"
  accent-green: "#71d083"
  accent-green-mid: "#46a758"
  accent-green-dark: "#1d3a24"
  accent-green-darker: "#1b2a1e"
  accent-blue: "#70b8ff"
  accent-violet-dark: "#1a192b"

typography:
  display:
    fontFamily: "Red Hat Display Variable, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.5px
  body:
    fontFamily: "Red Hat Display Variable, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: -0.45px
  button:
    fontFamily: "Red Hat Text Variable, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: normal

rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  xxl: 14px
  pill: 24px

spacing:
  xxxs: 4px
  xxs: 6px
  xs: 8px
  sm: 10px
  smd: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section-sm: 64px
  section: 96px
  section-lg: 128px

components:
  announcement-bar:
    backgroundColor: "{colors.accent-violet-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 8px 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 24px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.accent-green-dark}"
    textColor: "{colors.accent-green}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  button-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body}"
  feature-tab:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-tab-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-green}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  code-block:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px
  benchmark-bar:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  badge-green:
    backgroundColor: "{colors.accent-green-darker}"
    textColor: "{colors.accent-green}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
  logo-cloud:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 32px
  integration-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 12px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    padding: 64px
---

## Overview

Depot's marketing surface is a dark-mode developer-infrastructure interface — a near-black canvas (`{colors.canvas}` — #04040b) carrying high-contrast off-white headlines (`{colors.ink}` — #eeeef0), terminal-green accents (`{colors.accent-green}` — #71d083), and the Red Hat type family. The system reads as built-for-engineers: dense, precise, and confident, with product UI fragments (CI workflow panels, code blocks, live benchmark bars) embedded directly into the marketing flow rather than abstracted into illustrations.

The page is overwhelmingly monochrome-on-black. Green is the single brand action color — it lights up primary CTAs, active feature tabs, success/"parallel" badges inside the CI panels, and the small status dot before section eyebrows. A secondary blue (`{colors.accent-blue}` — #70b8ff) appears only on inline text links ("Developer docs", "Learn about Depot CI"). Everything else is a graded neutral ramp running from #ffffff down through a stack of warm-gray surfaces to the #04040b floor.

Type is a single family used at two cuts: **Red Hat Display** for headlines and body (heavy negative tracking on the display cut — -1.5px), and **Red Hat Text** for UI labels and buttons. Both are open-source, so the system ships exactly what it shows.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #04040b) with off-white headlines (`{colors.ink}` — #eeeef0). The whole site is one continuous dark surface — there is no light mode.
- Single brand action color: terminal green (`{colors.accent-green}` — #71d083), used on primary CTAs over a dark-green fill (`{colors.accent-green-dark}` — #1d3a24).
- Red Hat Display for headlines and body copy; Red Hat Text for buttons. The display cut runs heavy negative letter-spacing (-1.5px at 60px).
- Product UI fragments shown in-card — CI workflow comparison panels, `docker build` → `depot build` code blocks, live benchmark bars. Depot shows the actual tooling chrome, not marketing illustration.
- Tight modular radii: `{rounded.xs}` (2px) through `{rounded.lg}` (8px) dominate, signalling precision tooling rather than consumer softness.
- Subtle depth — a faint inset top-highlight (`rgba(255,255,255,0.06)`) on raised surfaces, and a blue glow ring on focused/active elements.
- A graded warm-gray surface ramp (#0c0c0c → #121113 → #1a191b) stacks panels and cards above the canvas with very low contrast steps.

## Colors

### Brand & Accent
- **Accent Green** (`{colors.accent-green}` — #71d083): The single brand action color. Primary CTA labels, active feature-tab titles, success badges ("parallel"), and the status dot before eyebrow labels.
- **Accent Green Mid** (`{colors.accent-green-mid}` — #46a758): A mid-tone green used for secondary green moments and small markers inside the product UI.
- **Accent Green Dark** (`{colors.accent-green-dark}` — #1d3a24): The fill behind primary green CTAs — a deep desaturated green that lets the brighter green label read on top.
- **Accent Green Darker** (`{colors.accent-green-darker}` — #1b2a1e): Used on small green badge fills and tinted backgrounds inside the CI panels.
- **Accent Blue** (`{colors.accent-blue}` — #70b8ff): Inline text links only ("Developer docs", "Learn about Depot CI"). Never used on buttons.
- **Accent Violet Dark** (`{colors.accent-violet-dark}` — #1a192b): The top announcement-bar background tint — a near-black violet that subtly separates the launch banner from the canvas.

### Surface
- **Canvas** (`{colors.canvas}` — #04040b): The page floor. Every band sits on it.
- **Surface Card** (`{colors.surface-card}` — #0c0c0c): Lowest-contrast raised surface — feature-tab cards, code blocks, testimonial cards.
- **Surface** (`{colors.surface}` — #121113): Product panels (the CI workflow comparison), active tab, integration tiles.
- **Surface Elevated** (`{colors.surface-elevated}` — #1a191b): The most-raised neutral — secondary buttons, benchmark bars.
- **Hairline Soft** (`{colors.hairline-soft}` — #2b292d): Faintest divider between sections sharing the dark canvas.
- **Hairline** (`{colors.hairline}` — #323035): The standard 1px border tone on panels and cards.
- **Border** (`{colors.border}` — #3c393f): A slightly stronger divider for nested panel chrome.
- **Border Strong** (`{colors.border-strong}` — #49474e): The strongest neutral outline, used sparingly on emphasized inputs/panels.

### Text
- **Ink** (`{colors.ink}` — #eeeef0): All headlines and primary high-contrast text. The max-contrast tone against the canvas.
- **White** (`{colors.white}` — #ffffff): Pure white, used for select icons and the highest-emphasis marks.
- **On Primary** (`{colors.on-primary}` — #b5b2bc): Secondary-button label color and high-level UI text — a soft light-gray.
- **Muted** (`{colors.muted}` — #7c7a85): Body running-text and supporting paragraphs.
- **Muted Soft** (`{colors.muted-soft}` — #6f6d78): Captions, fine-print, footer body.
- **Muted Strong** (`{colors.muted-strong}` — #625f69): Lowest-emphasis labels — eyebrows, timestamps, disabled text.

### Semantic
The system encodes status entirely through the green ramp (success/active) — no measured red/amber error or warning tokens were captured. See Known Gaps.

## Typography

### Font Family
The system runs the **Red Hat** family at two cuts: **Red Hat Display Variable** for headlines and body copy, and **Red Hat Text Variable** for buttons and UI labels. Both are open-source (SIL OFL) typefaces, so Depot ships exactly the fonts it displays — no substitution required. The fallback stack walks `sans-serif`.

The split is functional:
- Red Hat Display (700 display / 500 body, heavy negative tracking) — h1 headlines, paragraph copy
- Red Hat Text (500, neutral tracking) — buttons, nav links, UI chrome

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 60px | 700 | 1.0 | -1.5px | Hero h1 ("Build faster. Waste less time.") — Red Hat Display |
| `{typography.body}` | 18px | 500 | 1.375 | -0.45px | Running paragraph copy, card descriptions — Red Hat Display |
| `{typography.button}` | 15px | 500 | 1.0 | normal | Button labels, nav links, UI chrome — Red Hat Text |

### Principles
The display cut carries aggressive negative letter-spacing (-1.5px at 60px) — the headline reads tight and engineered. Body copy keeps a softer -0.45px tracking at 18px/1.375. The boundary between display and text cuts is functional: Display for narrative type (headlines + body), Text for interactive labels.

Only three type roles were measured (hero h1, body, button). Intermediate heading sizes — section titles like "From commit to production, faster." and card titles like "Depot CI" — are rendered in Red Hat Display at sizes between 18px and 60px but were not individually captured. See Known Gaps before specifying those sizes.

### Note on Font Substitutes
No licensed/custom typefaces are in use (`fonts_licensed` is empty). Both Red Hat Display and Red Hat Text are freely available via Google Fonts. If a fallback is needed, **Inter** (for the Text cut) and **Inter Display** or **Manrope** (for the Display cut) approximate the geometric-humanist character, but no substitution is necessary to ship faithfully.

## Layout

### Spacing System
- **Base unit:** effectively 2px, with an 8px-dominant rhythm (8px and 16px are by far the most frequent measured steps).
- **Tokens:** `{spacing.xxxs}` 4px · `{spacing.xxs}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.smd}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 48px · `{spacing.section-sm}` 64px · `{spacing.section}` 96px · `{spacing.section-lg}` 128px.
- **Micro-rhythm:** `{spacing.xs}` (8px) and `{spacing.md}` (16px) dominate internal component padding and gaps.
- **Section padding:** `{spacing.section-sm}` (64px) and `{spacing.section-lg}` (128px) set the vertical rhythm between major editorial bands; `{spacing.section}` (96px) appears once.
- **Card internal padding:** `{spacing.xl}` (24px) on feature-tab cards; `{spacing.md}` (16px) on panels, code blocks, and testimonial cards.

### Grid & Container
- **Editorial body:** Centered single-column narrative with multi-up card grids inside bands.
- **Hero:** Left-aligned h1 + sub-head + button row, full-width feature-tab strip below.
- **Feature-tab strip:** 3-up at desktop (Depot CI / Container Builds / GitHub Actions).
- **Platform section:** 2-up split panels (Remote container builds / GitHub Actions runners, Depot Cache / Build API).
- **Benchmark grid:** 2-up rows of with-Depot / without-Depot bars.
- **Testimonial wall:** Multi-column masonry of quote cards.
- **Footer:** Multi-column link list (Product / Support / Company).

### Whitespace Philosophy
Depot packs density without clutter — internal padding stays tight (8–24px) while band-to-band spacing opens up to 64–128px. The effect is a series of dense, scannable product panels separated by generous dark breathing room. Content-first, illustration-light.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, sits on `{colors.canvas}` | Body sections, hero, logo cloud |
| Inset top-highlight | `rgba(255,255,255,0.06) 0px 1px 0px 0px inset` | Raised buttons and panel tops — a 1px light edge that lifts the surface off the black |
| Surface step | Warm-gray fill ramp (`{colors.surface-card}` → `{colors.surface}` → `{colors.surface-elevated}`) | Cards and panels rise through low-contrast fill steps rather than shadow |
| Focus / active glow | `rgb(34,153,221) 0px 0px 10px, rgb(34,153,221) 0px 0px 5px` | Blue glow ring on a focused/active element |
| Drop shadow | `rgba(0,0,0,0.1) 0px 10px 15px -3px` (+ stacked layers) | Floating overlay / elevated popover surface |

The elevation philosophy is **dark-mode layering** — depth comes mainly from stepping a warm-gray surface ramp upward and from a faint inset top-highlight, not from heavy shadows. A blue glow marks focus/active states; a single soft drop shadow handles floating overlays.

### Decorative Depth
- Product UI fragments (CI workflow panels, code blocks) carry their own internal chrome and dividers — these are content, not system tokens.
- The announcement bar tints toward `{colors.accent-violet-dark}` (#1a192b), a barely-perceptible lift off the canvas that frames the launch banner.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Small badge fills, inline tags inside product UI |
| `{rounded.sm}` | 4px | Buttons (primary + secondary), benchmark bars |
| `{rounded.md}` | 6px | Code blocks, small panel chrome — the most frequent radius |
| `{rounded.lg}` | 8px | Feature-tab cards, product panels, integration tiles, testimonial cards |
| `{rounded.xl}` | 10px | Larger panels and image containers |
| `{rounded.xxl}` | 14px | Rare — a single larger container |
| `{rounded.pill}` | 24px | Rare — one large/rounded element |

### Geometry
Radii stay tight and modular — 2px through 8px carry almost all of the UI, reinforcing the precision-tooling character. There are no fully-circular pill buttons in the measured set; the largest measured radius (24px) appears once. Logos, integration tiles, and product chrome retain their native rectangular geometry with small `{rounded.lg}` corners.

## Components

### Top Bar & Navigation

**`announcement-bar`** — A full-width launch banner pinned above the nav ("🚀 Just launched: the Depot CI API →"). Background tints to `{colors.accent-violet-dark}`, text in `{colors.ink}`, type `{typography.button}`, padding 8px × 16px. The only violet-tinted surface on the page.

**`top-nav`** — Dark nav bar on `{colors.canvas}`. Carries the green-tile Depot wordmark at left, primary menu (Products, Resources, Customers, Blog, Docs, Pricing) center, and a right cluster of "Sign In" (`{component.button-secondary}`) + "Get started" (`{component.button-primary}`). Menu items render as `{component.nav-link}` in `{typography.button}`.

**`nav-link`** — Inline menu item, no background, `{colors.on-primary}` text in `{typography.button}`.

### Buttons

**`button-primary`** — The green CTA ("Get started", "Start a free trial"). Background `{colors.accent-green-dark}` (#1d3a24), label `{colors.accent-green}` (#71d083), type `{typography.button}` (Red Hat Text 15px / 500), rounded `{rounded.sm}` (4px), padding 8px × 12px. Carries an inset top-highlight (`rgba(255,255,255,0.06)`) for a subtle lift.

**`button-secondary`** — The neutral button ("Sign In", "Talk to a human"). Background `{colors.surface-elevated}` (#1a191b), label `{colors.on-primary}` (#b5b2bc), same type, radius, and padding as primary. This is the measured button capture (color #b5b2bc, 4px radius, 8px × 12px padding).

**`text-link`** — Inline link in `{colors.accent-blue}` ("Developer docs", "Learn about Depot CI"). The only place blue appears.

### Cards & Panels

**`feature-tab`** — The 3-up tab strip below the hero (Depot CI / Container Builds / GitHub Actions). Background `{colors.surface-card}`, headline + description, rounded `{rounded.lg}` (8px), padding `{spacing.xl}` (24px). Eyebrow label in `{colors.muted-strong}`, title in `{colors.ink}`.

**`feature-tab-active`** — The selected tab (Depot CI). Background lifts to `{colors.surface}`, the eyebrow/title accent shifts to `{colors.accent-green}`, same radius + padding. The green title is the active signal.

**`product-panel`** — The embedded CI workflow comparison panel (GitHub Actions vs Depot CI, job rows with "pending"/"parallel" states). Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px). Holds real product chrome — job rows, progress bars, status badges.

**`code-block`** — Terminal/code fragments (`docker build` → `depot build`, cache env exports, API service definitions). Background `{colors.surface-card}`, monospace-style text in `{colors.muted}`, rounded `{rounded.md}` (6px), padding `{spacing.md}`. Green and blue tokens inside the code echo the accent palette.

**`benchmark-bar`** — Live performance bars ("With Depot" / "Without Depot"). Background `{colors.surface-elevated}`, label in `{colors.ink}`, rounded `{rounded.sm}`, padding 8px × 12px. The "With Depot" bar carries the green fill; "Without Depot" stays neutral.

**`badge-green`** — Small inline status badge inside product panels ("parallel"). Background `{colors.accent-green-darker}`, text `{colors.accent-green}`, type `{typography.button}`, rounded `{rounded.xs}` (2px), padding 4px × 8px.

**`integration-tile`** — Square tiles in the Integrations grid (GitHub, AWS, etc.). Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.smd}` (12px). Holds a single service logo.

**`testimonial-card`** — Quote cards in the testimonial wall. Background `{colors.surface-card}`, body text in `{colors.muted}`, type `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.md}`. Top row carries an avatar + handle.

### Bands

**`logo-cloud`** — A row of customer/partner wordmarks (Semgrep, PostHog, Astral, etc.) on `{colors.canvas}`, rendered in `{colors.muted}`, padding `{spacing.xxl}` (32px). Monochrome — logos sit in low-contrast gray.

**`footer`** — Closes the page on `{colors.canvas}`. Multi-column link list (Product / Support / Company) in `{colors.muted}`, type `{typography.button}`, padding `{spacing.section-sm}` (64px). The green-tile Depot wordmark sits top-left. There is no surface inversion — the footer stays on the same dark floor as the body.

## Do's and Don'ts

### Do
- Keep the whole interface on the dark canvas (`{colors.canvas}` — #04040b). There is no light mode in this system.
- Reserve green (`{colors.accent-green}` over `{colors.accent-green-dark}`) for primary actions, active tabs, and success states. Green is the only action color.
- Use blue (`{colors.accent-blue}`) exclusively for inline text links — never on buttons.
- Build depth by stepping the warm-gray surface ramp (`{colors.surface-card}` → `{colors.surface}` → `{colors.surface-elevated}`) and applying the inset top-highlight, not by adding heavy shadows.
- Keep radii tight — `{rounded.sm}` (4px) on buttons, `{rounded.md}` (6px) on code, `{rounded.lg}` (8px) on cards. The small radii are part of the precision-tooling voice.
- Embed real product UI (CI panels, code blocks, benchmark bars) directly in the page rather than illustrating around it.
- Apply heavy negative tracking (-1.5px) on the display headline. Red Hat Display without it reads off-brand.

### Don't
- Don't introduce a second action color. The system is green-on-black at the action layer.
- Don't put body copy or headlines in Red Hat Text — that cut is for buttons and UI labels only.
- Don't add large pill radii to buttons; the measured button radius is 4px.
- Don't invert the footer to a light surface — Depot closes on the same dark canvas it opens with.
- Don't rely on shadow for elevation; the system layers with surface fill steps and a faint inset highlight.
- Don't document hover state styling beyond default + active/pressed.

## Responsive Behavior

### Breakpoints
No breakpoint widths were measured in the analysis. The captured desktop pages (landing, pricing) imply standard collapsing behavior, documented here as intent rather than measured fact:

| Name | Width | Key Changes (inferred — not measured) |
|---|---|---|
| Mobile | < 768px | Nav collapses to a menu trigger; hero h1 scales down from 60px; feature-tab strip stacks 1-up; benchmark/testimonial grids go 1-up |
| Tablet | 768–1024px | Tab strip and platform panels go 2-up; nav tightens |
| Desktop | ≥ 1024px | Full nav, 3-up feature-tab strip, 2-up platform panels |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` carry 8px × 12px padding on a 15px label — effective height is modest; verify against a 44px minimum before shipping touch surfaces.
- Specific touch-target sizing was not measured. See Known Gaps.

### Collapsing Strategy
Collapsing rules are inferred from the screenshots, not measured. The feature-tab strip and platform split-panels are the natural reflow points (3-up → 1-up). Product UI fragments (CI panels, code blocks) should scroll horizontally or scale proportionally rather than reflow their internal chrome.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-tab}`, `{component.button-primary}`).
2. Variants of an existing component (`-active`, `-secondary`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Green is the only action color; blue is link-only. Don't blur the two.
6. Headlines and body stay in Red Hat Display; buttons/labels stay in Red Hat Text. The cut boundary is functional.
7. Build elevation with the surface fill ramp + inset highlight before reaching for shadow.
8. When adding intermediate heading sizes, measure them first — only h1 (60px), body (18px), and button (15px) are confirmed.

## Known Gaps

- Only three typography roles were measured (hero h1 60px, body 18px, button 15px). Intermediate heading sizes — section titles ("From commit to production, faster.") and card titles ("Depot CI", "Remote container builds") — are rendered in Red Hat Display at unmeasured sizes between 18px and 60px and must be measured before specifying.
- The measured button component returned a gray label (#b5b2bc, 4px radius, 8px × 12px padding) which maps to `{component.button-secondary}`; the green `{component.button-primary}` background (`{colors.accent-green-dark}`) and label (`{colors.accent-green}`) are inferred from screenshot ground-truth using only measured token values — verify the exact fill against production CSS.
- No semantic error/warning tokens (red/amber) were captured. Status in the measured set is encoded entirely through the green ramp; validation/error states would need a sign-up or form flow to confirm.
- Breakpoint widths, responsive reflow rules, and touch-target sizing were not measured — the Responsive Behavior section is inferred from desktop captures and marked as such.
- Body text color is documented from the neutral ramp (`{colors.muted}` / `{colors.on-primary}`); the exact computed color of paragraph copy was not isolated in the analysis (only family/size/weight for the body role were measured).
- The blue focus glow (`rgb(34,153,221)`) uses a blue close to but not identical to `{colors.accent-blue}` (#70b8ff); it is documented as a raw shadow value in Elevation & Depth rather than tokenized.
- Animation and transition timings (tab switching, benchmark bar fills, code-block reveals) are out of scope.
- The pricing page was captured but no pricing-specific components (tier cards, toggles) were surfaced in the measured component set; those would need a dedicated extraction.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/depot/design-md -->
