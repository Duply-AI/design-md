---
version: alpha
name: Relume-design-analysis
description: A confident, builder-tool marketing interface anchored on white canvas with near-black ink and a single electric-violet accent (#6248ff). The system reads as modern, design-system-native SaaS — warm-gray surface cards, monochrome typography at large display scale, and a tightly controlled accent palette where violet carries the brand and warm neutrals (#e4e2df, #f1f0ee) do the surface work. Secondary chromatic moments (orange, red, cream, lilac) appear only inside product/component showcases, never on primary actions.

colors:
  primary: "#6248ff"
  primary-active: "#563eeb"
  ink: "#161616"
  ink-soft: "#333333"
  black: "#000000"
  body: "#2e2e2e"
  muted: "#686868"
  hairline: "#d8d5d1"
  hairline-soft: "#dddddd"
  border-soft: "#cccccc"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-warm: "#f1f0ee"
  surface-warm-strong: "#e4e2df"
  surface-dark: "#222222"
  surface-dark-elevated: "#2e2e2e"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  accent-orange: "#ff7448"
  accent-red: "#ff4848"
  accent-cream: "#f9edd6"
  accent-lilac: "#dcd8eb"
  accent-blue: "#3898ec"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
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
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-accent-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 72px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  showcase-card:
    backgroundColor: "{colors.surface-warm-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  badge-pill:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-accent:
    backgroundColor: "{colors.accent-lilac}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Relume's marketing surface is a confident builder-tool interface — white canvas (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #161616), a single electric-violet accent (`{colors.primary}` — #6248ff), and warm-gray surface cards (`{colors.surface-warm}` — #f1f0ee, `{colors.surface-warm-strong}` — #e4e2df) that hold product fragments and feature claims. The system reads as design-system-native SaaS: it is the product of a company that sells component libraries, so the marketing surface looks like a tidy, well-tokenized design system itself.

The color story is deliberately disciplined. Violet is the one brand-carrying accent; everything else is monochrome (white → warm-gray → near-black). A small set of secondary chromatics — `{colors.accent-orange}` (#ff7448), `{colors.accent-red}` (#ff4848), `{colors.accent-cream}` (#f9edd6), `{colors.accent-lilac}` (#dcd8eb) — appears only inside product/component showcases and illustrative tiles, never on primary actions.

The warm neutral family is the system's signature. Instead of cold grays (#f5f5f5 territory), Relume uses warm, slightly-beige surfaces (`#f1f0ee`, `#e4e2df`, `#d8d5d1`) that give cards a paper-like, editorial calm. The contrast between warm-gray cards and the cold electric violet is what gives the brand its specific voltage.

**Key Characteristics:**
- White canvas with near-black ink (`{colors.ink}` — #161616, measured) and a single violet brand accent (`{colors.primary}` — #6248ff, measured).
- Warm-gray surface family (`{colors.surface-warm}` #f1f0ee → `{colors.surface-warm-strong}` #e4e2df → `{colors.hairline}` #d8d5d1) — the system's distinctive "paper" tone instead of cold gray.
- Electric violet reserved for accent CTAs, highlight badges, and brand moments; the press/active state shifts to the deeper `{colors.primary-active}` (#563eeb, measured — used here as the active tone).
- Secondary chromatics (orange #ff7448, red #ff4848, cream #f9edd6, lilac #dcd8eb) appear only inside product/component showcase tiles — never on primary actions.
- Near-black footer (`{colors.ink}` — #161616) closes the page; it is the only large dark surface in the body, with the dark featured-pricing tier as a deliberate exception.
- Typography, spacing, and radius were not captured by the analyzer (only colors were measured) — all type, spacing, and shape tokens below are **derived** from screenshot ground-truth and standard builder-tool baselines; see Known Gaps.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #6248ff): The electric-violet brand accent. Used on accent CTAs, highlight badges, and brand wordmark moments. Press/active state shifts to `{colors.primary-active}` (#563eeb) — derived as the active tone from the measured deeper violet.
- **Accent Orange** (`{colors.accent-orange}` — #ff7448): Appears inside product/component showcase tiles and illustrative accents only.
- **Accent Red** (`{colors.accent-red}` — #ff4848): Secondary chromatic, used inside showcase tiles and small status moments.
- **Accent Cream** (`{colors.accent-cream}` — #f9edd6): A warm pastel fill used on showcase/illustration backgrounds.
- **Accent Lilac** (`{colors.accent-lilac}` — #dcd8eb): A soft violet-tint fill used on accent badges and highlight chips.
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): A rarely-seen blue (likely a default UI/embed tone) — used only inside embedded product UI, not in the brand layer.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Barely-off-white band divider.
- **Surface Warm** (`{colors.surface-warm}` — #f1f0ee): Feature cards, badge pills, soft section fills — the lighter warm-gray.
- **Surface Warm Strong** (`{colors.surface-warm-strong}` — #e4e2df): Heavier warm-gray for showcase cards and emphasized surface blocks.
- **Surface Dark** (`{colors.surface-dark}` — #222222): The featured pricing tier card surface.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #2e2e2e): Nested blocks inside dark surfaces.

### Lines & Borders
- **Hairline** (`{colors.hairline}` — #d8d5d1): The warm 1px border tone on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #dddddd): Softer divider for low-emphasis splits.
- **Border Soft** (`{colors.border-soft}` — #cccccc): Neutral border alternative on inputs and dividers.

### Text
- **Ink** (`{colors.ink}` — #161616): All headlines and primary text; also the footer background.
- **Ink Soft** (`{colors.ink-soft}` — #333333): Slightly softened heading/body emphasis.
- **Black** (`{colors.black}` — #000000): Pure-black used on the primary button press state and high-contrast moments.
- **Body** (`{colors.body}` — #2e2e2e): Default running-text color.
- **Muted** (`{colors.muted}` — #686868): Secondary text — captions, sub-labels, footer body.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on accent buttons and dark surfaces.

## Typography

### Font Family
Typography was **not** measured by the analyzer (the typography array is empty); the families and sizes below are **derived** from screenshot ground-truth and standard builder-tool baselines. Relume's marketing surface runs a clean grotesque/neo-grotesque sans for both display and body. **Inter** is documented here as a faithful, open-source stand-in for that voice — it preserves the tight, slightly-condensed headline character and the neutral body texture. No licensed/custom typeface was flagged in `fonts_licensed`, so no proprietary-font substitution is required; the Inter mapping is a derived approximation, not a measured value.

The split is functional and monochrome:
- Display (large, weight 600, negative tracking) — h1, h2, h3
- Body + UI (weight 400–500, neutral tracking) — paragraphs, labels, buttons, nav

### Hierarchy

All sizes below are **derived** (not measured).

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.1 | -1.5px | Homepage h1 — derived |
| `{typography.display-lg}` | 48px | 600 | 1.15 | -1px | Section heads — derived |
| `{typography.display-md}` | 36px | 600 | 1.2 | -0.5px | Sub-section heads, card titles — derived |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.button}` | 15px | 500 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
The type system stays monochrome (`{colors.ink}`) — violet is almost never used on type, only on the accent button and badge surfaces. Display weight holds at 600 with negative letter-spacing for the modern, tightly-set headline character. Body stays at 400. The hierarchy is achieved through size and weight, not color.

### Note on Font Substitutes
**Inter** (weight 400–600) is the documented stand-in for Relume's grotesque sans. **Helvetica Now** or **Geist** are also close alternatives if a different texture is wanted. Because the actual face was not measured, treat the Inter mapping as a derived approximation to be confirmed against live CSS.

## Layout

### Spacing System
Spacing was **not** measured (the spacing array is empty); the scale below is **derived** from a standard 4px base and screenshot rhythm.

- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px — all derived.
- **Section padding:** `{spacing.section}` (96px) between major bands — derived.
- **Card internal padding:** `{spacing.xl}` (32px) for feature/pricing cards; `{spacing.lg}` (24px) for showcase + product-mockup cards — derived.
- **Gutters:** `{spacing.lg}` (24px) between cards in multi-up grids — derived.

### Grid & Container
- **Max content width:** ~1280px centered (derived).
- **Hero band:** single-column centered headline, or 7/5 split with a product/component artifact (derived from screenshots).
- **Feature/showcase grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Pricing grid:** 3-up at desktop, collapsing to 1-up (derived).

### Whitespace Philosophy
Relume's layout is generous and tidy — the marketing surface mirrors a clean design system. Bands alternate white canvas and warm-gray surface fills to pace the scroll. The rhythm favors clear scanning over density.

## Elevation & Depth

Shadows were **not** measured (the shadows array is empty); the treatments below are **derived** from screenshot ground-truth.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Warm hairline | 1px `{colors.hairline}` (#d8d5d1) border | Inputs, dividers, occasional card outlines |
| Surface block | `{colors.surface-warm}` / `{colors.surface-warm-strong}` fill, no shadow | Feature cards, showcase cards |
| Color-block invert | `{colors.surface-dark}` fill | Featured pricing tier; color contrast does the elevation work |

The elevation philosophy reads as **flat, color-blocked, and modern** — surface tone and warm hairlines carry the depth rather than drop shadows. Any drop shadows present in product-mockup screenshots are product chrome shown as content, not system tokens.

## Shapes

Radius was **not** measured (the radius array is empty); the scale below is **derived**.

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline accents — derived |
| `{rounded.sm}` | 6px | Dropdown items, small chips — derived |
| `{rounded.md}` | 8px | Buttons, text inputs — derived |
| `{rounded.lg}` | 12px | Content cards (feature, showcase, pricing) — derived |
| `{rounded.xl}` | 16px | Large hero/product mockup containers — derived |
| `{rounded.pill}` | 9999px | Badge pills — derived |
| `{rounded.full}` | 9999px | Avatars, icon dots — derived |

### Photography Geometry
Product/component showcase tiles retain their native chrome and aspect ratios; card containers carry `{rounded.lg}` corners (derived). Larger marquee artifacts use `{rounded.xl}` (derived).

## Components

All component specs reference measured colors; their typography, radius, padding, and sizing values are **derived** from screenshot ground-truth (no component metrics were captured by the analyzer).

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page, ~72px tall (derived), `{colors.canvas}` background. Carries the Relume wordmark at left, primary horizontal menu center, and a right-side cluster with a text sign-in and a primary CTA. Menu items in `{typography.nav-link}`.

### Buttons

**`button-primary`** — The default near-black CTA. Background `{colors.ink}` (#161616), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 22px, height 44px (derived). Active state `button-primary-active` shifts to `{colors.black}` (#000000).

**`button-accent`** — The violet brand CTA. Background `{colors.primary}` (#6248ff), text `{colors.on-primary}`, same geometry as primary. Active state `button-accent-active` shifts to `{colors.primary-active}` (#563eeb).

**`button-secondary`** — White button with a warm hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same padding/height/radius as primary.

**`button-text-link`** — Inline text button, no background, `{colors.ink}` label in `{typography.button}`.

### Cards & Containers

**`hero-band`** — White-canvas hero with a centered or 7/5-split headline and product/component artifact. Vertical padding `{spacing.section}` (96px, derived). H1 in `{typography.display-xl}`.

**`feature-card`** — Used in multi-up feature grids. Background `{colors.surface-warm}` (#f1f0ee), rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Title in `{typography.title-md}`, body in `{typography.body-md}`.

**`showcase-card`** — Heavier warm-gray card holding component/library previews. Background `{colors.surface-warm-strong}` (#e4e2df), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Secondary chromatics (orange, red, cream, lilac) appear inside these tiles.

**`product-mockup-card`** — A card showing real Relume product UI (component picker, sitemap builder, library grid). Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. The UI inside carries its own chrome.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Plan name in `{typography.title-lg}`, feature checklist in `{typography.body-md}`, CTA at the bottom.

**`pricing-tier-card-featured`** — The featured tier inverts to `{colors.surface-dark}` (#222222) with text in `{colors.on-dark}`. The dark surface IS the featured signal — no badge or scale shift required.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 12px × 16px, height 44px (derived), with a 1px `{colors.hairline}` border.

### Tags / Badges

**`badge-pill`** — Neutral pill label for category tags. Background `{colors.surface-warm}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-accent`** — Violet-tint highlight chip. Background `{colors.accent-lilac}` (#dcd8eb), text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.pill}`.

### Footer

**`footer`** — Near-black footer that closes every page. Background `{colors.ink}` (#161616), text `{colors.on-dark}`, body links in `{typography.body-sm}`, vertical padding 64px (derived). The only large dark surface in the body (aside from the featured pricing tier).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#6248ff) for the accent CTA, highlight badges, and brand moments. It is the single brand-carrying color.
- Use the warm-gray surface family (`{colors.surface-warm}`, `{colors.surface-warm-strong}`) for cards — the warm tone is the system's signature, distinct from cold-gray SaaS.
- Keep typography monochrome (`{colors.ink}`). Hierarchy comes from size and weight, not color.
- Confine secondary chromatics (orange, red, cream, lilac, blue) to product/component showcase tiles.
- End the page with the near-black footer (`{colors.ink}`). The light-to-dark close is part of the rhythm.
- Use `{component.button-primary}` (near-black) as the default action and `{component.button-accent}` (violet) for the highest-emphasis brand CTA.

### Don't
- Don't paint headlines or body copy violet — violet lives on surfaces and CTAs, not on type.
- Don't substitute cold gray for the warm-gray surfaces. The beige tone is intentional.
- Don't scatter secondary chromatics across primary actions or nav — they belong inside showcase tiles only.
- Don't add dark cards casually; the dark surface is reserved for the footer and the featured pricing tier.
- Don't document hover states — default and active/pressed only (`button-primary` → `button-primary-active`; `button-accent` → `button-accent-active`).

## Responsive Behavior

Breakpoint behavior below is **derived** from screenshot ground-truth (no responsive metrics were measured).

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature/showcase grids 1-up; pricing 1-up; footer columns stack |
| Tablet | 768–1024px | Nav tightens; feature/showcase cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature/showcase cards; 3-up pricing tiers |
| Wide | > 1440px | Same as desktop; content width caps ~1280px with added outer breathing room |

### Touch Targets
- `{component.button-primary}` and `{component.button-accent}` at ~44px height (derived) meet comfortable tap minimums.
- `{component.text-input}` height ~44px (derived).

### Collapsing Strategy
- Top nav collapses to a hamburger sheet on mobile.
- Hero split collapses to single column — headline + CTA first, artifact below.
- Feature/showcase grids reduce columns rather than shrinking cards.
- Pricing tiers collapse 3 → 2 → 1; the featured dark tier stays visually distinct at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants (`-active`, `-featured`, `-accent`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex in components.
4. Never document hover. Default and Active/Pressed states only.
5. Violet is the single brand accent — escalate emphasis with surface contrast and size before reaching for more color.
6. The warm-gray surfaces are the brand's texture; don't swap them for cold grays.
7. Replace any derived typography/spacing/radius value with measured values as soon as live CSS can be sampled (see Known Gaps).

## Known Gaps

- **Only colors were measured.** The analyzer returned empty `typography`, `spacing`, `radius`, `shadows`, and `components` arrays. Every type token, spacing value, radius value, shadow treatment, and component metric in this document is **derived** from screenshot ground-truth and standard builder-tool baselines — not measured. These must be confirmed against live CSS before being treated as authoritative.
- The actual typeface is unconfirmed. Inter is documented as a derived stand-in; no font was flagged in `fonts_licensed`, so no proprietary substitution was required, but the real family should be sampled and replaced.
- `{colors.primary-active}` (#563eeb) and `{colors.black}` (#000000) are assigned as button press/active tones by inference from the measured palette; the actual interaction-state mapping was not captured.
- The exact roles of `{colors.accent-blue}` (#3898ec), `{colors.accent-cream}` (#f9edd6), and `{colors.accent-orange}`/`{colors.accent-red}` are inferred as showcase-tile chromatics; their precise placements need confirmation. (#3898ec is likely a default embed/UI tone rather than a brand color.)
- Drop-shadow values, animation/transition timings, form validation states, and the dark-surface elevated nesting (`{colors.surface-dark-elevated}`) usage were not extracted.
- Only two pages were captured (`landing`, `pricing`); component coverage for deeper product, library, and account surfaces is out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/relume/design-md -->
