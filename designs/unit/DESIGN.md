---
version: alpha
name: Unit.co-design-analysis
description: "A precise, fintech-infrastructure interface built on white canvas with pure-black display type and a signature pale-mint accent surface. The system reads as engineered-and-restrained — near-monochrome with Suisse-International-style grotesque headlines set at weight 400 with negative tracking, fully pill-shaped black CTAs, soft mint and cream tinted surfaces, and embedded product-dashboard mockups shown directly in-page. Brand voltage comes from the oversized light-weight display type and the mint/green accent moments rather than from saturated color."

colors:
  ink: "#000000"
  body: "#333333"
  neutral: "#4b5a59"
  canvas: "#ffffff"
  on-primary: "#ffffff"
  primary: "#222222"
  surface-dark: "#131313"
  surface-dark-elevated: "#1a1a1a"
  surface-mint: "#eff6f6"
  surface-mist: "#f9fbfb"
  surface-soft: "#fafafa"
  surface-cream: "#f1f1e8"
  surface-lilac: "#e6e2ff"
  highlight-green: "#ceffe5"
  accent-blue: "#3898ec"
  accent-orange: "#ff4c24"
  link-blue: "#0000ee"
  border: "#dddddd"
  border-strong: "#cccccc"
  border-soft: "#c8c8c8"

typography:
  display-xl:
    fontFamily: "Suisse International, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.56px
  display-lg:
    fontFamily: "Suisse International, Inter, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.4px
  title:
    fontFamily: "Suisse International, Inter, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.22px
  body:
    fontFamily: "Suisse International, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.16px
  button:
    fontFamily: "Suisse International, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 20px
  xl: 40px
  pill: 70px
  pill-full: 100px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    height: 60px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  badge-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  nav-pill-group:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill-full}"
    padding: 6px
  segment-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  segment-pill-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  product-mockup-card:
    backgroundColor: "{colors.surface-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.xs}"
    padding: 32px
  stat-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xs}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    padding: 40px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    padding: 40px
---

## Overview

Unit.co's marketing surface is a precise, fintech-infrastructure interface — white canvas (`{colors.canvas}` — #ffffff) with pure-black display type (`{colors.ink}` — #000000), Suisse-International-style grotesque headlines, and a signature pale-mint accent surface (`{colors.surface-mint}` — #eff6f6) that carries feature cards and input fields. The system reads as engineered-and-restrained: near-monochrome, generous whitespace, and a single fully-pill-shaped black CTA per band.

The type voice is the brand. Headlines run **Suisse International** (a licensed Swiss grotesque — substituted with **Inter** here) at weight **400** with negative letter-spacing (-0.22px to -0.56px). The oversized-but-light display type — 56px at weight 400 — is the system's signature move: it feels confident and modern without the bombast of a bold headline. Body, buttons, and nav all share the same family at 16px, keeping the whole page in one typographic register.

Component voltage comes from **embedded product-dashboard mockups shown directly in-page** — a banking dashboard with available balance, card art, and recent-activity tables sits immediately below the hero. Unit shows the actual product chrome at scale rather than painting abstract illustration. Accent color is scarce and deliberate: a mint highlight (`{colors.highlight-green}` — #ceffe5) marks the "HERO" wordmark, soft lilac/mint glows sit behind card art, and green stat figures punctuate the dark stat cards.

The page closes with deep near-black bands (`{colors.surface-dark}` — #131313) — a trust section ("People and infrastructure you can trust") and a final CTA band. These are the only dark surfaces; everything above stays white-with-tinted-cards.

**Key Characteristics:**
- White canvas with pure-black ink and a fully pill-shaped black CTA (`{colors.primary}` — #222222, `{rounded.pill}` — 70px). The pill button is the system's only button shape.
- Suisse International display type at weight **400** with negative tracking — oversized but light. Substituted with Inter (see Typography).
- Pale-mint accent surface (`{colors.surface-mint}` — #eff6f6) used for feature cards and input fields — the dominant tinted surface in the system.
- Segmented pill nav-group (Capital / Banking / Bill Pay) with an active dark pill — a signature interactive control above the product mockup.
- Embedded product-dashboard mockups (balance, card art, transaction tables) shown directly in-page.
- Dark stat cards (`{colors.surface-dark}`) with oversized figures ("4x", "2.5x", "50%") — green-tinted numerals appear here.
- Flat system — no measured shadows. Depth comes from tinted-surface contrast, not elevation.
- Dark near-black closing bands (`{colors.surface-dark}` — #131313) for the trust and final-CTA sections.

## Colors

### Brand & Accent
- **Ink** (`{colors.ink}` — #000000): The dominant color — all display headlines and high-contrast text sit in pure black.
- **Primary** (`{colors.primary}` — #222222): The near-black surface of pill CTAs and the active segment pill. Reads as black against the white canvas.
- **Highlight Green** (`{colors.highlight-green}` — #ceffe5): The mint highlight behind the "HERO" wordmark in the product mockup, and green stat figures on dark cards. The brightest accent in the system, used sparingly.
- **Accent Orange** (`{colors.accent-orange}` — #ff4c24): A scarce warm accent observed in small UI moments.
- **Accent Blue** (`{colors.accent-blue}` — #3898ec) and **Link Blue** (`{colors.link-blue}` — #0000ee): Low-frequency blues; see Known Gaps — these are likely platform-default form/link colors rather than intentional brand hues.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Mint** (`{colors.surface-mint}` — #eff6f6): The signature tinted surface — feature cards and input fields.
- **Surface Mist** (`{colors.surface-mist}` — #f9fbfb): A barely-there cool tint used on the product-mockup container.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Near-white neutral panel tint.
- **Surface Cream** (`{colors.surface-cream}` — #f1f1e8): A warm off-white tint used as a secondary card/accent surface.
- **Surface Lilac** (`{colors.surface-lilac}` — #e6e2ff): A pale violet tint observed in the soft card-art glows.
- **Surface Dark** (`{colors.surface-dark}` — #131313): The deep near-black trust and final-CTA bands, and the dark stat cards.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a1a1a): A slightly lifted dark tone for nested elements inside dark bands.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text.
- **Body** (`{colors.body}` — #333333): Default running-text and link color.
- **Neutral** (`{colors.neutral}` — #4b5a59): A muted slate-green for secondary text and quieter labels.
- **On Primary / On Dark** (`{colors.on-primary}` — #ffffff): Text on pill CTAs and dark bands.

### Borders
- **Border** (`{colors.border}` — #dddddd), **Border Strong** (`{colors.border-strong}` — #cccccc), **Border Soft** (`{colors.border-soft}` — #c8c8c8): The 1px hairline tones used on badge pills, segmented controls, and card outlines.

## Typography

### Font Family
The system runs **Suisse International** for every text role — headlines, body, buttons, and nav all share the same Swiss grotesque. Suisse International is a licensed typeface and is **not shipped here**; the documented substitute is **Inter**, which shares the neutral grotesque proportions. The fallback stack is `Suisse International, Inter, sans-serif`.

The defining trait is uniform weight: everything sits at **400**. There is no bold tier. Hierarchy is created entirely through size and negative letter-spacing on the display sizes — never through weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 400 | 1.0 | -0.56px | Hero h1 ("Elevate your platform with embedded finance.") |
| `{typography.display-lg}` | 40px | 400 | 1.1 | -0.4px | Section heads ("One platform, every core financial product"), oversized stat figures |
| `{typography.title}` | 22px | 400 | 1.2 | -0.22px | Card titles, sub-section heads |
| `{typography.body}` | 16px | 400 | 1.4 | 0.16px | Default running-text, nav links, descriptions |
| `{typography.button}` | 16px | 400 | 1.3 | 0 | Button and pill labels |

### Principles
Weight stays at 400 everywhere — the light-but-large display type is the brand voice. Negative letter-spacing (-0.22px to -0.56px, scaling with size) tightens headlines into a precise, engineered feel; body text uses slightly positive tracking (0.16px) for legibility at small size. Never substitute a bold weight to create emphasis — bigger before bolder is the rule, because the system has no bold.

### Note on Font Substitutes
**Suisse International** is a licensed commercial typeface flagged in the analysis; it must not be bundled. **Inter** at weight 400 with matching negative letter-spacing is the documented substitute and the closest open-source approximation of Suisse's neutral grotesque forms. **Helvetica Now** or **Neue Haas Grotesk** are closer paid alternatives if licensing is available.

## Layout

### Spacing System
- **Base unit:** 4px (the most frequent measured step), with a strong secondary cadence at 6px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 40px.
- **Card internal padding:** `{spacing.xxl}` (32px) for feature cards; `{spacing.xl}` (24px) for the product-mockup card and dark stat cards.
- **Component padding:** measured steps cluster at 10–16px for pills and inputs.

Intermediate measured values (6px, 10px, 14px, 28px, 36px) exist in the wild between these tokens; the scale above represents the dominant rhythm.

### Grid & Container
- **Hero:** an asymmetric split — oversized h1 at left, sub-headline + CTA cluster at upper-right.
- **Feature grids:** 2-up at desktop ("Accounts and wallets", "Money movement", "Card issuing", "Capital").
- **Stat row:** 3-up dark stat cards ("4x", "2.5x", "50%").
- **Solutions grid:** mixed 1-up / 2-up tinted cards (Businesses / Independent Workers / Consumers).
- **Logo strip:** single row of partner logos (worldpay, Wix, Relay, Honeybook, Roofstock).

### Whitespace Philosophy
Unit uses wide editorial whitespace with full-width tinted bands. Each band carries one section head, a short supporting line, and a card grid — never densely packed. The result reads as confident infrastructure documentation, not a busy marketing page.

## Elevation & Depth

The analysis measured **no shadows** — this is a flat system. Depth is created entirely through surface-tone contrast, not drop shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Tinted surface | `{colors.surface-mint}` / `{colors.surface-mist}` / `{colors.surface-cream}` fill | Feature cards, product mockup, inputs |
| Hairline | 1px `{colors.border}` / `{colors.border-strong}` | Badge pills, segmented control, card outlines |
| Dark band | `{colors.surface-dark}` fill | Trust section, final CTA, dark stat cards |

### Decorative Depth
- Soft mint/lilac (`{colors.surface-lilac}`) gradient glows sit behind the physical/virtual card art inside the product mockup — a subtle chromatic flourish.
- The embedded product dashboard carries its own internal UI chrome (sidebars, tables, card faces) shown as content, not as system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Measured default for the product-mockup container and base card chrome |
| `{rounded.xs}` | 4px | The most common radius — inputs, small cards, stat cards |
| `{rounded.sm}` | 6px | Minor inline elements |
| `{rounded.md}` | 8px | Slightly larger card/panel corners |
| `{rounded.lg}` | 20px | Large rounded panels |
| `{rounded.xl}` | 40px | Extra-large rounded surfaces |
| `{rounded.pill}` | 70px | Pill CTAs, segment pills, badge pills |
| `{rounded.pill-full}` | 100px | The segmented-control wrapper (fully rounded) |

The shape language is bimodal: tight 4px on rectangular surfaces and full pill (70–100px) on all interactive buttons and chips. There is no mid-radius "soft card" idiom — corners are either nearly square or fully rounded.

### Photography & Card Geometry
Product card art (the Visa debit faces inside the dashboard) uses native rounded-rectangle chrome. The mockup container itself is measured at `{rounded.none}`.

## Components

### Top Navigation

**`top-nav`** — White nav bar across the top. Carries the lowercase "unit" wordmark at left, a horizontal menu (Platform, Customers, Developers, Resources) center-left, and a right-side cluster ("Sandbox" text link + "Chat with an expert" pill CTA). Menu items in `{typography.body}` (16px / 400). Background `{colors.canvas}`.

### Buttons & Pills

**`button-primary`** — The signature CTA ("Chat with an expert"). Background `{colors.primary}` (#222222 — reads black), text `{colors.on-primary}`, type `{typography.button}`, fully pill-shaped at `{rounded.pill}` (70px). Padding is derived (14px 28px) — see Known Gaps; the measured value captured the inner anchor at 0px.

**`button-text-link`** — Inline text action with a chevron ("See a demo", "Sandbox"). Transparent background, `{colors.ink}` text, underline on the active label. Used as the quieter secondary action beside the primary pill.

**`badge-pill`** — Outlined announcement pill ("Read more: Enterprise-grade APIs ↗"). Background `{colors.canvas}`, 1px `{colors.border}` outline, `{colors.ink}` text, `{rounded.pill}`, padding ~10px 16px.

### Segmented Control

**`nav-pill-group`** — The fully-rounded wrapper (`{rounded.pill-full}` — 100px) holding the Capital / Banking / Bill Pay segments above the product mockup. Background `{colors.canvas}` with hairline outline, internal padding ~6px.

**`segment-pill`** / **`segment-pill-active`** — Inactive segments are transparent with `{colors.ink}` text; the active segment ("Banking") fills with `{colors.primary}` and flips text to `{colors.on-primary}`, rounded `{rounded.pill}`. The dark-pill-in-light-wrapper is one of Unit's signature interactive treatments.

### Cards & Containers

**`product-mockup-card`** — The large embedded banking dashboard below the hero — available balance, "Pay someone" / "Get paid" pills, routing/account fields, physical & virtual card art, and a recent-activity table. Background `{colors.surface-mist}`, rounded `{rounded.none}` (measured), padding `{spacing.xl}`. The product UI inside carries its own chrome.

**`feature-card`** — Used in the 2-up product grids ("Accounts and wallets", "Money movement", "Card issuing", "Capital") and the solutions grid. Background `{colors.surface-mint}` (#eff6f6), rounded `{rounded.xs}`, padding `{spacing.xxl}` (32px). Carries a `{typography.title}` headline and a `{typography.body}` description with a small corner arrow.

**`stat-card-dark`** — Dark proof-point cards ("4x customer lifetime value", "2.5x engagement increase", "50% lower acquisition costs"). Background `{colors.surface-dark}`, text `{colors.canvas}`, oversized figure in `{typography.display-lg}` (some figures rendered in `{colors.highlight-green}`), rounded `{rounded.xs}`, padding `{spacing.xl}`.

### Inputs & Forms

**`input`** — Text field. Background `{colors.surface-mint}` (#eff6f6), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xs}` — note the measured radius is applied only on the left edge (`4px 0 0 4px`), indicating an attached field/button group. Padding ~12px 16px.

### Dark Bands

**`cta-band-dark`** — The final full-width CTA ("Launch money solutions for your customers. Unlock new revenue for your business.") with a centered pill CTA. Background `{colors.surface-dark}`, text `{colors.canvas}`, heading in `{typography.display-lg}`, padding `{spacing.xxxl}` (40px).

**`footer`** — Dark closing region built on `{colors.surface-dark}`, text `{colors.canvas}`, body in `{typography.body}`. The trust band ("People and infrastructure you can trust", 5M+ accounts / $80B+ volume / 12M+ daily API calls) and final CTA sit in this dark register that closes the page.

## Do's and Don'ts

### Do
- Keep all display type at weight 400 with negative letter-spacing. The oversized-but-light headline is the brand.
- Reserve `{colors.primary}` (#222222) for the pill CTA and active segment. The button is always a full pill (`{rounded.pill}`).
- Use `{colors.surface-mint}` (#eff6f6) as the default tinted card and input surface — it is the system's signature accent surface.
- Show real product chrome (`{component.product-mockup-card}`) in-page rather than abstract illustration.
- Use `{colors.highlight-green}` sparingly — the "HERO" highlight and green stat figures are the brightest moments and lose impact if overused.
- Close long pages with the dark band (`{colors.surface-dark}`). The light-to-dark transition is the editorial rhythm.

### Don't
- Don't introduce a bold weight to create emphasis — the system has no bold; scale up instead.
- Don't put saturated accent color on CTAs — the action layer is monochrome black-on-white.
- Don't add drop shadows; depth comes from tinted-surface contrast (the analysis measured zero shadows).
- Don't mix mid-radius corners on buttons — interactive elements are full pills (70–100px), not 8–12px soft corners.
- Don't place dark surfaces casually mid-page; the dark register is reserved for stat cards and the closing bands.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses; hero h1 scales down from 56px; hero split stacks to single column; feature grids 1-up; product mockup scales/scrolls; stat cards stack |
| Tablet | 768–1024px | Nav tightens; feature grids 2-up; segmented control stays inline |
| Desktop | 1024–1440px | Full nav; asymmetric hero split; 2-up feature grids; 3-up stat row |
| Wide | > 1440px | Same as desktop with added outer breathing room |

The captured screenshots show desktop and a full-page tall composite; the mobile/tablet behavior above is inferred from the grid structure (see Known Gaps).

### Touch Targets
- `{component.button-primary}` pill provides a comfortable tap target via its 14px+ vertical padding.
- `{component.segment-pill}` segments and `{component.badge-pill}` carry ~10–16px padding; effective tap area meets target with surrounding pill geometry.

### Collapsing Strategy
- The asymmetric hero (oversized h1 left / sub-head + CTA right) stacks to a single column on mobile.
- Feature and solutions grids reduce columns rather than shrinking cards.
- The product-mockup dashboard scales proportionally and may scroll horizontally to keep the dashboard chrome legible.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.stat-card-dark}`).
2. Variants (`-active`, etc.) live as separate entries in `components:` — e.g., `{component.segment-pill-active}`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and active/pressed states only.
5. Display type stays Suisse International (Inter substitute) at weight 400 with negative tracking. Body stays the same family at 16px. There is no bold tier.
6. CTAs are always full pills (`{rounded.pill}` / `{rounded.pill-full}`); rectangular surfaces stay near-square (`{rounded.xs}`).
7. Keep accent color scarce — mint surface for cards, highlight-green for rare emphasis, everything else monochrome.

## Known Gaps

- **Suisse International is a licensed typeface** flagged in `fonts_licensed`; it is not shipped. Inter is the documented substitute throughout.
- `button-primary` measured `radius: 0px` and `padding: 0px` — this captured an inner anchor element, not the rendered pill. Screenshots show a fully pill-shaped CTA, so `{rounded.pill}` and a derived padding (14px 28px) are documented from screenshot ground-truth.
- `card` measured `radius: 0px` while the radius histogram is dominated by 4px (42 occurrences); feature cards are documented at `{rounded.xs}` from visual evidence. The product-mockup container is documented at `{rounded.none}` per measurement.
- The `input` radius was measured as `4px 0px 0px 4px` (left-edge only), implying an attached field/button group; the full input-group counterpart was not separately captured.
- The blue values `{colors.link-blue}` (#0000ee) and `{colors.accent-blue}` (#3898ec) are low-frequency and likely platform-default link/form colors rather than intentional brand hues; treat as candidates for removal pending confirmation.
- No shadow tokens were measured; the system is treated as flat. If subtle elevation exists on hover/scroll it was not captured.
- Only the landing page was captured; responsive breakpoints, mobile nav behavior, and interior-page patterns are inferred from grid structure, not measured.
- Animation, transition timings, and form validation/error states are out of scope for this capture.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/unit/design-md -->
