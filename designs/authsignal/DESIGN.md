---
version: alpha
name: Authsignal-design-analysis
description: "A dark, security-software interface that opens on a near-black hero and resolves onto a warm cream canvas, accented by a single electric periwinkle purple. The system reads as enterprise-grade fintech infrastructure — confident Neue Montreal display headlines, Inter body copy, white pill-ish CTAs, and product UI fragments (passkey prompts, transaction cards) floated over purple feature panels. Brand voltage comes from the periwinkle accent (#8b7bff) and the dark-to-cream surface inversion rather than from decorative color."
colors:
  canvas: "#faf9f4"
  surface-soft: "#f0efe8"
  surface-light: "#f3f4f6"
  ink: "#313139"
  on-primary: "#000000"
  primary: "#ffffff"
  accent: "#8b7bff"
  accent-link: "#3898ec"
  muted: "#afb4c4"
  dark-canvas: "#1b1b20"
  dark-surface: "#24242c"
  dark-elevated: "#2d2d35"
  dark-muted: "#464654"
  near-black: "#141414"
typography:
  display-xl:
    fontFamily: "Neue Montreal, Inter, sans-serif"
    fontSize: 65px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: normal
  display-lg:
    fontFamily: "Neue Montreal, Inter, sans-serif"
    fontSize: 58px
    fontWeight: 500
    lineHeight: 1.207
    letterSpacing: normal
  display-md:
    fontFamily: "Neue Montreal, Inter, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: normal
  lead:
    fontFamily: "Neue Montreal, Inter, sans-serif"
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.524
    letterSpacing: normal
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: normal
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: normal
rounded:
  xs: 4px
  sm: 5px
  md: 8px
  pill: 48px
spacing:
  xxs: 6px
  xs: 8px
  sm: 10px
  base: 15px
  md: 16px
  lg: 20px
  xl: 32px
  xxl: 40px
components:
  top-nav:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    padding: 15px
  nav-utility-bar:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    padding: 8px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 15px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 15px
  button-outline-dark:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 15px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    padding: 40px
  feature-panel-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 32px
  product-mockup-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  content-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: 40px
  logo-bar:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    padding: 32px
  award-badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 10px
  text-link-accent:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  consent-modal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 32px
  modal-tab-active:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  inline-send-button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 8px
---

## Overview

Authsignal's marketing surface is a two-mode security-infrastructure interface. It opens on a near-black hero (`{colors.dark-canvas}` — #1b1b20) carrying a large Neue Montreal headline in white, then inverts to a warm cream canvas (`{colors.canvas}` — #faf9f4) for the long-scroll feature content below. A single electric periwinkle purple (`{colors.accent}` — #8b7bff) is the only chromatic voltage in the system — it drives the headline highlight word, the primary brand CTA, the accent feature panels, and inline product chrome.

Type voice splits into two roles: **Neue Montreal** (the brand's display face — weight 500, used for h1/h3/h4 headlines and the 21px lead paragraph) and **Inter** (body copy, buttons, navigation). Neue Montreal at weight 500 with normal letter-spacing reads as precise, modern, slightly geometric — the kind of face that signals "infrastructure for serious teams." There is no 700-weight shouting; the whole system stays at 400–600.

Component voltage comes from **real product UI fragments floated over purple panels** — passkey biometric prompts, "Authorize the transaction" verification cards, a "Send Now" payment form. Authsignal shows the actual authentication chrome at small scale rather than illustrating it, reinforcing the developer-infrastructure positioning.

**Key Characteristics:**
- Dark hero (`{colors.dark-canvas}` — #1b1b20) over cream content canvas (`{colors.canvas}` — #faf9f4). The dark-to-light inversion is the system's primary structural move.
- Single periwinkle accent (`{colors.accent}` — #8b7bff) used sparingly: highlight word in the headline, brand CTA, accent feature panels, inline send buttons.
- White primary CTA (`{colors.primary}` — #ffffff) with black label (`{colors.on-primary}` — #000000) — buttons are nearly square-cornered (`{rounded.xs}` — ~4px, measured 3.75px derived).
- Neue Montreal display headlines at weight 500 — large (65px h1), confident, normal letter-spacing.
- Product UI fragments (passkey prompt, transaction card, send-money form) shown as white cards over purple panels — the product is the marketing imagery.
- Subtle, hierarchical radii: `{rounded.xs}` (4px) for buttons, `{rounded.sm}` (5px) for panels/badges, `{rounded.md}` (8px) for product cards, `{rounded.pill}` (48px) for the lone pill element.
- One deep drop shadow (`rgba(0,0,0,0.3) 0px 32px 68px`) reserved for the floating hero product card.

## Colors

### Brand & Accent
- **Accent** (`{colors.accent}` — #8b7bff): The single brand voltage color. The highlight word in the hero headline ("custom…"), the "Try Authsignal" CTA, the purple feature panels, the inline "Send Now" button, "Trusted by" label, and the "Use PIN" link. Authsignal is a near-monochrome brand — this periwinkle is the only chromatic moment.
- **Accent Link** (`{colors.accent-link}` — #3898ec): A blue used on a small subset of inline links/controls. Appears far less than the periwinkle.

### Surface — Light Mode
- **Canvas** (`{colors.canvas}` — #faf9f4): The warm cream page floor for all content below the hero.
- **Surface Soft** (`{colors.surface-soft}` — #f0efe8): A barely-warmer cream used for soft section blocks and dividers on the cream canvas.
- **Surface Light** (`{colors.surface-light}` — #f3f4f6): A cool near-white used inside product cards and light UI fragments.
- **Primary / White** (`{colors.primary}` — #ffffff): Product mockup cards, the primary CTA fill, and the consent modal surface.

### Surface — Dark Mode
- **Dark Canvas** (`{colors.dark-canvas}` — #1b1b20): The hero band, top nav, and logo bar background.
- **Near Black** (`{colors.near-black}` — #141414): The thin utility bar at the very top (Contact sales / Sign in / Sign up).
- **Dark Surface** (`{colors.dark-surface}` — #24242c) and **Dark Elevated** (`{colors.dark-elevated}` — #2d2d35): Nested dark blocks and card layers inside dark bands.
- **Dark Muted** (`{colors.dark-muted}` — #464654): Borders and hairlines on dark surfaces.

### Text
- **Ink** (`{colors.ink}` — #313139): Default running text and headlines on the cream canvas.
- **On Primary** (`{colors.on-primary}` — #000000): Label color on the white primary CTA.
- **Primary / White** (`{colors.primary}` — #ffffff): Text on dark hero, nav, and accent panels.
- **Muted** (`{colors.muted}` — #afb4c4): Secondary / de-emphasized text — captions, sub-labels.

## Typography

### Font Family
The system runs **Neue Montreal** for display + lead copy and **Inter** for body, buttons, and navigation. Neue Montreal is a commercially licensed display typeface (Pangram Pangram); it is not bundled here and must be substituted in any reproduction (see Note on Font Substitutes). The measured button role reported a generic `sans-serif` family — it is documented here as Inter to match the rest of the UI type, pending confirmation (see Known Gaps).

The split is functional:
- Neue Montreal (display + lead, weight 500, normal tracking) — h1, h3, h4, and the 21px lead paragraph
- Inter (body + UI, weight 400–600) — paragraphs, labels, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 65px | 500 | 1.1 | normal | Hero h1 ("Enterprise…customer…without…") — Neue Montreal |
| `{typography.display-lg}` | 58px | 500 | 1.207 | normal | Major section heads (h3) — Neue Montreal |
| `{typography.display-md}` | 40px | 500 | 1.25 | normal | Sub-section heads (h4) — Neue Montreal |
| `{typography.lead}` | 21px | 500 | 1.524 | normal | Lead / intro paragraphs, section sub-heads (h2 role) — Neue Montreal |
| `{typography.body}` | 16px | 400 | 1.45 | normal | Default running text — Inter |
| `{typography.button}` | 15px | 600 | 1.6 | normal | Button + nav labels — Inter |

### Principles
Neue Montreal is the brand voice — every display headline and lead paragraph uses it at weight 500. Inter handles the supporting type. Weight never climbs past 600; the system relies on size jumps (16 → 21 → 40 → 58 → 65) rather than weight for hierarchy. Letter-spacing stays normal throughout — there is no condensed/tracked treatment.

### Note on Font Substitutes
**Neue Montreal** is a paid, licensed typeface and is not shipped. The closest open-source substitute is **Inter** at weight 500 (which already carries the body stack here), or **Space Grotesk** / **Hanken Grotesk** at weight 500 for a closer geometric-grotesque display character. Any substitute should preserve the weight-500 + normal-tracking signature; do not bold display headlines to 700.

## Layout

### Spacing System
- **Base unit:** the system clusters around a loose ~4px grid, but the single most frequent measured value is `{spacing.sm}` (10px), followed by `{spacing.md}` (16px) and `{spacing.lg}` (20px).
- **Tokens:** `{spacing.xxs}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.base}` 15px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px.
- **Button padding:** `{spacing.base}` (15px) — the measured uniform padding on the primary CTA.
- **Panel / card padding:** `{spacing.xl}` (32px) for accent feature panels; `{spacing.lg}` (20px) for product mockup cards.
- **Section padding:** `{spacing.xxl}` (40px) is the largest measured spacing token; larger editorial gaps were not captured (see Known Gaps).

### Grid & Container
- **Hero:** a two-zone split — headline + body + CTA row on the left, floating product mockup card on the right over a purple panel.
- **Content bands:** single-column editorial flow on the cream canvas, with feature blocks (Passkeys, Biometrics, SMS OTP, Authenticator apps, Push notifications) stacked vertically.
- **Logo bar:** horizontal trust-logo strip (Hnry, Air New Zealand, Trade Me, First Credit Union, MoneyGram, Qualys) on the dark canvas.

### Whitespace Philosophy
The cream content canvas uses generous vertical breathing room between stacked feature blocks. The dark hero is dense at the top (utility bar + nav + headline) then opens into a large product-card showcase. Exact section rhythm beyond 40px was not measured.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat dark | No shadow | Hero band, top nav, logo bar |
| Flat light | No shadow | Cream content bands, accent feature panels |
| Hairline | 1px `{colors.dark-muted}` on dark / soft border on light | Dividers, card outlines |
| Deep float | `rgba(0,0,0,0.3) 0px 32px 68px 0px` | The floating hero product card ("Authorize the transaction") |

The system uses exactly one measured shadow — a large, soft, 30%-alpha drop reserved for the marquee floating product card in the hero. Everything else is flat, relying on the dark-vs-cream surface contrast and the purple accent panels to carry depth.

### Decorative Depth
- Product UI fragments (passkey biometric prompt, transaction card, send-money form) carry their own internal chrome and are layered over flat purple panels — the layering reads as depth without additional system shadows.
- The purple feature panel (`{colors.accent}`) sitting behind white product cards is itself a depth device: the colored block recedes, the white card advances.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Buttons (measured 3.75px — rounds to 4px, derived), small controls |
| `{rounded.sm}` | 5px | Accent feature panels, award badge |
| `{rounded.md}` | 8px | Product mockup cards, consent modal |
| `{rounded.pill}` | 48px | The single large-radius element measured (one rounded pill/block) |

Radii are small and restrained — the system favors near-square corners (4–8px). The 48px pill appears once and is the only large-radius element. No fully circular tokens were measured.

### Geometry
Product mockup cards use `{rounded.md}` (8px) corners and retain their native internal chrome (biometric fingerprint ring, transaction rows, send button). The award badge ("Rising Star — KuppingerCole 2025") uses a small `{rounded.sm}` rounded rectangle.

## Components

### Navigation

**`nav-utility-bar`** — A thin top strip on `{colors.near-black}` (#141414) carrying right-aligned "Contact sales / Sign in / Sign up" links in `{colors.primary}` white, `{typography.body}`. Padding `{spacing.xs}` (8px).

**`top-nav`** — The main nav bar on `{colors.dark-canvas}` (#1b1b20). Authsignal wordmark + logo at left; horizontal menu (Product ▾, Solutions ▾, Pricing, About, Case studies, Docs, Blog) center; right cluster with `{component.button-outline-dark}` ("Schedule a call") and `{component.button-accent}` ("Try Authsignal"). Menu items use `{typography.button}` (Inter 15px / 600) in `{colors.primary}`.

**`nav-link`** — Inline nav item, transparent background, `{colors.primary}` text on the dark nav.

### Buttons

**`button-primary`** — The white CTA ("Create free account"). Background `{colors.primary}` (#ffffff), label `{colors.on-primary}` (#000000), type `{typography.button}`, padding `{spacing.base}` (15px), rounded `{rounded.xs}` (measured 3.75px, derived to 4px).

**`button-accent`** — The brand CTA ("Try Authsignal ›"). Background `{colors.accent}` (#8b7bff), label `{colors.primary}` (white), padding `{spacing.base}` (15px), rounded `{rounded.xs}`.

**`button-outline-dark`** — Outlined CTA on the dark nav ("Schedule a call"). Transparent background, `{colors.primary}` white label + border, padding `{spacing.base}`, rounded `{rounded.xs}`. The "Passkey demo" hero button shares this treatment.

**`inline-send-button`** — A small accent button inside the product mockup ("Send Now"). Background `{colors.accent}`, label `{colors.primary}`, rounded `{rounded.xs}`, padding `{spacing.xs}` (8px).

**`text-link-accent`** — Inline periwinkle link ("Use PIN", "Trusted by"). Transparent background, `{colors.accent}` text, `{typography.body}`.

### Bands & Containers

**`hero-band`** — The opening near-black hero. Background `{colors.dark-canvas}`, headline in `{typography.display-xl}` (65px Neue Montreal) with the highlight word in `{colors.accent}`, supporting body in `{typography.body}` / `{colors.muted}`, then the CTA row. Padding `{spacing.xxl}` (40px).

**`feature-panel-accent`** — A solid periwinkle panel (`{colors.accent}`) that hosts floated product mockup cards in the hero and feature sections. Rounded `{rounded.sm}` (5px), padding `{spacing.xl}` (32px), text `{colors.primary}`.

**`product-mockup-card`** — White cards showing real authentication UI ("Authorize the transaction" with fingerprint sensor, the "Send Now" payment form, the Simplify passkey screen). Background `{colors.primary}` (#ffffff), text `{colors.ink}`, rounded `{rounded.md}` (8px), padding `{spacing.lg}` (20px). The hero instance carries the deep float shadow.

**`content-band`** — Cream-canvas editorial section hosting the stacked feature blocks (Passkeys, Biometrics, SMS OTP, Authenticator apps, Push notifications). Background `{colors.canvas}`, text `{colors.ink}`, section heads in `{typography.display-md}`. Padding `{spacing.xxl}` (40px).

**`logo-bar`** — Dark trust-logo strip. Background `{colors.dark-canvas}`, white logos, padding `{spacing.xl}` (32px).

**`award-badge`** — Small periwinkle award marker ("Rising Star — Authsignal, KuppingerCole 2025"). Background `{colors.accent}`, text `{colors.primary}`, rounded `{rounded.sm}`, padding `{spacing.sm}` (10px).

### Overlay

**`consent-modal`** — The Cookiebot consent dialog. White surface (`{colors.primary}`), ink text, rounded `{rounded.md}` (8px), padding `{spacing.xl}` (32px). Contains a tabbed header (Consent / Details / About) with `{component.modal-tab-active}` underlined in `{colors.accent}`, and a button row: a `{component.button-outline-dark}`-style "Customize ›" plus an accent "Allow all" (`{component.button-accent}`). This is a third-party widget shown as-is.

**`modal-tab-active`** — Active modal tab: transparent background, `{colors.accent}` text + underline.

## Do's and Don'ts

### Do
- Reserve `{colors.accent}` (#8b7bff) for the highlight headline word, the brand CTA, accent panels, and inline product chrome. It is the only chromatic voltage — keep it scarce.
- Use the dark-hero → cream-canvas inversion as the page's primary structural rhythm.
- Set every display headline in Neue Montreal weight 500 (or substitute at 500). Use size, not weight, for hierarchy.
- Float real product UI fragments (passkey prompts, transaction cards) over `{component.feature-panel-accent}` purple blocks. Show the product, don't illustrate it.
- Keep button corners small — `{rounded.xs}` (4px). Authsignal's buttons are near-square, not pill-shaped.
- Use the one deep float shadow only on the marquee hero product card.

### Don't
- Don't introduce additional accent colors. `{colors.accent-link}` blue already appears rarely; the system is otherwise monochrome + periwinkle.
- Don't bold display headlines past weight 500–600. Neue Montreal at 700 reads off-brand.
- Don't put the white primary CTA on the cream canvas without contrast — it reads cleanest on the dark hero.
- Don't apply the deep drop shadow to ordinary cards; reserve it for the floating hero artifact.
- Don't add hover-state styling beyond default + pressed.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses; hero h1 scales down from 65px; floating product card stacks below the headline; feature blocks go 1-up; logo bar wraps |
| Tablet | 768–1024px | Nav tightens; hero split may stack; feature blocks 1-up |
| Desktop | 1024px+ | Full horizontal nav; hero two-zone split (headline left, floating product card right over purple panel); stacked feature bands on cream canvas |

The second screenshot (mobile-width render) confirms the hero compresses, the trust logo bar wraps to a single scrolling row, and the cream-canvas feature blocks (Passkeys, Biometrics, SMS OTP, Authenticator apps, Push notifications) stack vertically. Exact breakpoint values were not measured.

### Touch Targets
- `{component.button-primary}` and `{component.button-accent}` carry 15px padding on `{typography.button}` (15px / 1.6 line-height) — comfortably tappable.
- Nav links inherit the utility/main nav padding; exact tap dimensions were not measured.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-panel-accent}`, `{component.product-mockup-card}`).
2. Variants live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Neue Montreal (or substitute) weight 500. Body stays Inter 400. Hierarchy comes from size, not weight.
6. The periwinkle accent is scarce by design — adding it to more surfaces dilutes the brand.
7. The dark-hero / cream-content inversion is the page's backbone — don't flatten both into one surface mode.

## Known Gaps

- The button typography role reported a generic `sans-serif` family rather than a named face; it is documented as Inter to match the surrounding UI, but the exact button typeface is unconfirmed.
- Only one shadow was captured (`rgba(0,0,0,0.3) 0px 32px 68px`). Lighter card/elevation shadows, if any, were not measured.
- `fonts_licensed` came back empty, but **Neue Montreal** is a commercially licensed face — it is treated as licensed and a substitute is documented in Typography.
- Measured radius values cap at 48px with a sparse set (4, 5, 8, 48); intermediate or large card radii beyond these were not observed.
- Spacing measurements top out at 40px; large editorial section rhythm (e.g. 64–96px band padding) was not captured, so section spacing is inferred from screenshots only.
- The cookie-consent dialog is a third-party Cookiebot widget; its styling is documented as observed but is not part of Authsignal's own design tokens.
- Footer styling, form/input states, pricing-table components, and the features-passkeys page detail were captured in the page list but not measured into tokens.
- The hero headline was partially occluded by the consent modal in the capture; full headline wording and the exact accent-highlight extent are inferred.
- Animation, transition, and scroll-reveal timings are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/authsignal/design-md -->
