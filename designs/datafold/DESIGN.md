---
version: alpha
name: Datafold-design-analysis
description: A clean, technical B2B data-platform interface on white canvas with a single saturated royal-blue primary (#356fff) and an unusual all-monospace button/eyebrow voice. The system reads as engineering-credible and precise — oversized Aspekta display headlines set at a light 400 weight, near-monochrome neutrals, a tight 4px corner radius on every interactive element, and bold full-bleed blue and dark-navy bands that punctuate an otherwise white, airy scroll.
colors:
  canvas: "#ffffff"
  primary: "#356fff"
  accent-sky: "#40a9ff"
  accent-blue: "#1890ff"
  accent-blue-strong: "#096dd9"
  ink: "#151414"
  black: "#000000"
  body: "#3f3f3f"
  muted: "#bfbfbf"
  hairline: "#d9d9d9"
  hairline-soft: "#c7c7c7"
  surface-soft: "#f5f5f5"
  surface-softer: "#f0f0f0"
  surface-tint: "#f6f9fb"
  surface-navy: "#3d446a"
  on-primary: "#ffffff"
  success: "#52c41a"
  warning: "#faad14"
  error: "#ff4d4f"
  error-soft: "#ff7875"
  error-strong: "#d9363e"
typography:
  display-xl:
    fontFamily: "Aspekta, Inter, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  display-lg:
    fontFamily: "Aspekta, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  title-md:
    fontFamily: "Aspekta, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  body-sm:
    fontFamily: "Aspekta, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "LT Superior Mono, IBM Plex Mono, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: 0.48px
rounded:
  sm: 4px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  section: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12.8px 32px 11.2px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  nav-eyebrow:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  feature-tab:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
  feature-tab-active:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  feature-panel:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 40px
  product-diagram-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 32px
  testimonial-block:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 32px
  security-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: 72px
  accordion-row:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 24px
  cta-band:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: 72px
  footer:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 72px
---

## Overview

Datafold's marketing surface is a clean, engineering-credible B2B data-platform interface — white canvas (`{colors.canvas}` — #ffffff), a single saturated royal-blue primary (`{colors.primary}` — #356fff), and an unusual all-monospace voice on buttons and eyebrow labels. The page reads as precise and technical: oversized Aspekta display headlines set at a deliberately light 400 weight, near-monochrome neutrals for body text, and a tight 4px radius on every interactive element.

The type voice splits into two clear roles: **Aspekta** (a clean geometric sans, used at weight 400 across every headline AND body size — h1 down to 14px body) and **LT Superior Mono** (a monospace used exclusively for buttons, eyebrow labels, and nav micro-labels). The monospace is the brand's signature tic — small (12px), weight 600, with +0.48px letter-spacing and uppercase styling — it makes CTAs and section eyebrows read like terminal output, reinforcing the "for data engineers" positioning.

Brand voltage comes from full-bleed color bands rather than from decorated cards. The white scroll is punctuated by a bright-blue **Security & Governance** band (`{colors.primary}`), a blue product-diagram card holding integration logos around the Datafold mark, and a deep-navy CTA + footer zone (`{colors.surface-navy}`) that closes the page. There are no measured drop shadows anywhere — depth is carried entirely by flat color-block contrast.

**Key Characteristics:**
- White canvas with a single royal-blue primary (`{colors.primary}` — #356fff). All CTAs are flat blue with a tight `{rounded.sm}` (4px) radius.
- Monospace buttons and eyebrows (`{typography.button}` — LT Superior Mono, 12px / 600 / +0.48px). The terminal-style micro-label is the brand's distinguishing trait.
- Oversized light-weight Aspekta display (`{typography.display-xl}` — 72px at weight 400). The hero headline is huge but thin, reading as modern and unshouty.
- Flat, shadowless depth. The analysis captured zero shadow tokens — elevation is done with full-bleed color bands, not soft shadows.
- Full-bleed accent bands: bright-blue Security band, blue product-diagram card, deep-navy CTA + footer. White-to-color band alternation is the page rhythm.
- Single 4px radius across buttons, inputs, panels, and the diagram card — corners are crisp, never pill-soft.
- A near-monochrome neutral ramp (`{colors.body}` #3f3f3f, `{colors.muted}` #bfbfbf, `{colors.hairline}` #d9d9d9) supports a restrained, technical palette.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #356fff): The dominant action color. All primary CTAs (button-primary, "Request a demo"), the announcement bar, the Security & Governance band, and the product-diagram card. This is the brand's one true blue.
- **Accent Sky / Blue / Blue-Strong** (`{colors.accent-sky}` — #40a9ff, `{colors.accent-blue}` — #1890ff, `{colors.accent-blue-strong}` — #096dd9): A secondary blue ramp (Ant Design–derived) appearing on links, focus states, and small interactive accents inside product UI. These are support blues — never used on the marketing hero CTA, which stays on `{colors.primary}`.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and input background.
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): The Migrate/Build feature panel and testimonial block background — a very light gray that separates editorial content from white.
- **Surface Softer** (`{colors.surface-softer}` — #f0f0f0): Hairline dividers and subtle panel fills.
- **Surface Tint** (`{colors.surface-tint}` — #f6f9fb): A barely-blue-tinted surface used behind the hero region.
- **Surface Navy** (`{colors.surface-navy}` — #3d446a): The deep CTA band ("Ready to learn more?") and footer background — the only dark surface on the page.

### Text
- **Ink** (`{colors.ink}` — #151414): Display headlines and primary text.
- **Black** (`{colors.black}` — #000000): Used on the highest-contrast logo lockups and partner wordmarks.
- **Body** (`{colors.body}` — #3f3f3f): Default running-text color — the most frequent ink tone in the system.
- **Muted** (`{colors.muted}` — #bfbfbf): Secondary text, footer link rows, captions.
- **Hairline** (`{colors.hairline}` — #d9d9d9) / **Hairline Soft** (`{colors.hairline-soft}` — #c7c7c7): 1px border and divider tones on light surfaces (input borders, panel outlines).
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on blue and navy bands.

### Semantic
- **Success** (`{colors.success}` — #52c41a): Used on the green "Security" word in the Security & Governance heading and on positive/confirmation states.
- **Warning** (`{colors.warning}` — #faad14): Warning callouts inside product UI.
- **Error / Error-Soft / Error-Strong** (`{colors.error}` — #ff4d4f, `{colors.error-soft}` — #ff7875, `{colors.error-strong}` — #d9363e): Validation and destructive states (Ant Design red ramp).

## Typography

### Font Family
The system runs **Aspekta** for all editorial type (display headlines through body) and **LT Superior Mono** for buttons, eyebrow labels, and nav micro-labels. Aspekta is a commercial geometric sans; LT Superior Mono is a commercial monospace. Both are documented with open-source substitutes below.

The split is unusual and strict:
- Aspekta (weight 400, normal tracking) — every headline and body size, all the way down to 14px running text.
- LT Superior Mono (weight 600, +0.48px tracking, uppercase) — buttons, section eyebrows ("THE AI-POWERED PLATFORM FOR DATA TEAMS"), and nav micro-labels only.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 400 | 1.2 | normal | Hero h1 ("Automate Data Engineering") — Aspekta |
| `{typography.display-lg}` | 56px | 400 | 1.2 | normal | Section heads ("Security & Governance", "Ready to learn more?") — Aspekta |
| `{typography.title-md}` | 32px | 400 | 1.4 | normal | Sub-section heads, testimonial quote, panel titles — Aspekta |
| `{typography.body-sm}` | 14px | 400 | 1.4 | normal | Default running-text, panel copy, footer, captions — Aspekta |
| `{typography.button}` | 12px | 600 | 1.333 | 0.48px | Button labels, eyebrow labels, nav micro-labels — LT Superior Mono, uppercase |

### Principles
The headline weight stays at 400 across every display size — Datafold never bolds its display type. The lightness paired with very large sizes (72px / 56px) is the core typographic move: confident scale, thin stroke. Body type is also Aspekta 400 at 14px, keeping the editorial voice unified.

The monospace is reserved exclusively for the micro-label layer. Never set a headline in LT Superior Mono, and never set a button in Aspekta — the contrast between thin geometric display and tight uppercase monospace IS the brand voice.

### Note on Font Substitutes
**Aspekta** and **LT Superior Mono** are commercial typefaces and should not be assumed shippable. For Aspekta, **Inter** at weight 400 is the closest open-source approximation (geometric, neutral). For LT Superior Mono, **IBM Plex Mono** or **Space Mono** at weight 600 with +0.48px tracking, uppercased, preserves the terminal-label signature. The declared fallback stacks encode these substitutes.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.section}` 72px.
- **Section rhythm:** `{spacing.section}` (72px) is the dominant large-gap value — vertical padding inside the full-bleed bands and between major editorial blocks.
- **Panel internal padding:** `{spacing.xxl}` (40px) for the Migrate/Build feature panel; `{spacing.xl}` (32px) for the product-diagram card and testimonial block.
- **Tight rhythm:** `{spacing.xxs}` (4px) through `{spacing.md}` (16px) for inline element gaps, icon spacing, and form-field internals.

### Grid & Container
- **Max content width:** centered marketing column (~1200px) on the white editorial bands.
- **Hero:** single centered column — eyebrow, oversized h1, two-line sub-head, email input + button stacked, then a horizontal logo strip below.
- **Feature panel:** two-tab switcher (MIGRATE / BUILD) over a two-column body — text claims left, blue product-diagram card right.
- **Footer:** multi-column link list (Solutions / Product / Resources / Company) plus an email-capture column at right.

### Whitespace Philosophy
Datafold uses generous vertical whitespace on the white bands (72px section rhythm) to let the oversized thin headlines breathe, then switches to dense, edge-to-edge color bands for emphasis. The contrast between airy white scroll and saturated full-bleed bands is the page's primary pacing device.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `{colors.hairline}` / `{colors.hairline-soft}` border | Inputs, panel outlines, dividers |
| Tinted panel | `{colors.surface-soft}` background, no shadow | Feature panel, testimonial block |
| Color band | Full-bleed `{colors.primary}` or `{colors.surface-navy}` | Security band, product-diagram card, CTA band, footer |

The analysis captured **zero shadow tokens** — the system is deliberately flat. Depth and emphasis are carried entirely by full-bleed color-block contrast (white → blue → navy), not by drop shadows or blur. There is no neumorphism, no glassmorphism, no elevation ramp.

### Decorative Depth
- The blue product-diagram card holds white circular integration-logo chips arranged around the central Datafold mark — these chips carry the product's own internal styling, not system shadow tokens.
- The green "Security" accent word (`{colors.success}`) inside the otherwise-white Security & Governance heading adds a single chromatic flourish without breaking the monochrome-plus-blue voice.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 4px | Every interactive and container element — buttons, inputs, feature panel, product-diagram card |

Only one radius value (4px) was measured across the entire page. Datafold's geometry is uniformly crisp — corners are softened just enough to avoid sharp pixels, never rounded into pills or large-radius cards. This single-radius discipline reinforces the technical, no-nonsense voice.

### Photography Geometry
The testimonial author avatar ("Jon Medwig") renders as a small circle, and partner logos sit as flat monochrome wordmarks on white. No avatar/circle radius token was measured (see Known Gaps).

## Components

### Top Navigation

**`announcement-bar`** — A full-width blue strip pinned above the nav ("Data Engineering in 2026: 12 Predictions · Read the blog post"). Background `{colors.primary}`, text `{colors.on-primary}`, body type `{typography.body-sm}`.

**`top-nav`** — White nav bar carrying the Datafold wordmark + diamond logo at left, primary menu (Solutions, Product, Customers, Resources) center, and a "Log in" text-link plus a `{component.button-primary}` ("Request a demo") at right. Background `{colors.canvas}`, ink text.

**`nav-eyebrow`** — The uppercase monospace micro-label used for the hero eyebrow ("THE AI-POWERED PLATFORM FOR DATA TEAMS") and other section kickers. Transparent background, `{colors.ink}` text, `{typography.button}` (LT Superior Mono).

### Buttons & Inputs

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#356fff), text `{colors.on-primary}`, type `{typography.button}` (LT Superior Mono 12px / 600 uppercase), rounded `{rounded.sm}` (4px), padding 12.8px × 32px (top) / 11.2px (bottom) — the asymmetric vertical padding is measured from the live button. Used for "Request a demo" in nav, hero, CTA band, and footer.

**`text-input`** — The hero "Work email" capture field and the footer email field. Background `{colors.canvas}`, text `{colors.body}`, type `{typography.body-sm}`, rounded `{rounded.sm}`, 1px `{colors.hairline}` border.

### Tabs & Panels

**`feature-tab`** + **`feature-tab-active`** — The MIGRATE / BUILD switcher above the feature panel. Both use `{typography.button}` monospace labels. Inactive: `{colors.body}` text. Active: `{colors.primary}` text with a blue underline indicator. Transparent backgrounds.

**`feature-panel`** — The light-gray content panel holding the active tab's body. Background `{colors.surface-soft}` (#f5f5f5), `{colors.body}` text, type `{typography.body-sm}`, rounded `{rounded.sm}`, internal padding `{spacing.xxl}` (40px). Two-column: text claims left, product-diagram card right, with a quoted customer testimonial below a hairline divider.

**`product-diagram-card`** — The blue card showing source/destination integration logos (Oracle, SAP, Snowflake, etc.) as white circular chips arranged around the central Datafold mark, connected with flow lines. Background `{colors.primary}`, white chrome, rounded `{rounded.sm}`, padding `{spacing.xl}` (32px).

**`testimonial-block`** — A quoted customer endorsement with author name + role and a "Read the case study" link. Background `{colors.surface-soft}`, `{colors.body}` text, type `{typography.body-sm}`, padding `{spacing.xl}`.

### Color Bands

**`security-band`** — The full-bleed bright-blue "Security & Governance" section. Background `{colors.primary}`, text `{colors.on-primary}`, heading in `{typography.display-lg}` (the word "Security" rendered in `{colors.success}` green). Vertical padding `{spacing.section}` (72px). Contains stacked accordion rows.

**`accordion-row`** — Expandable rows inside the security band ("Single Tenant / VPC Deployment", "SOC 2 & HIPAA Compliance", "Governed LLM Inference") with a `+` toggle at right. Transparent background over the blue band, `{colors.on-primary}` text, `{typography.body-sm}`, padding `{spacing.lg}` (24px), separated by faint white hairlines.

### CTA & Footer

**`cta-band`** — The pre-footer "Ready to learn more?" band. Background `{colors.surface-navy}` (#3d446a), text `{colors.on-primary}`, heading in `{typography.display-lg}`, centered `{component.button-primary}` below. Vertical padding `{spacing.section}` (72px).

**`footer`** — The dark-navy footer that closes the page. Background `{colors.surface-navy}`, text `{colors.muted}`, type `{typography.body-sm}`. Carries the Datafold wordmark + social icons (LinkedIn, X, GitHub, YouTube) at left, four link columns (Solutions / Product / Resources / Company), and an email-capture column with a `{component.button-primary}` at right. Padding `{spacing.section}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#356fff) for primary CTAs and full-bleed accent bands. It is the one true brand blue.
- Set all buttons and eyebrow labels in `{typography.button}` (LT Superior Mono, 12px / 600 / +0.48px, uppercase). The terminal-style micro-label is the brand signature.
- Keep display headlines at weight 400. Datafold's confidence comes from huge thin Aspekta, never from bold.
- Use full-bleed color bands (`{colors.primary}`, `{colors.surface-navy}`) to punctuate the white scroll — that alternation is the page rhythm.
- Keep every corner at `{rounded.sm}` (4px). One radius, applied everywhere.
- Use `{colors.surface-soft}` (#f5f5f5) panels for editorial content blocks; reserve color bands for emphasis moments.
- Stay flat — no shadows. Depth is color-block contrast only.

### Don't
- Don't bold display type or introduce a heavier Aspekta weight. The thin 400 is the voice.
- Don't set headlines or body in the monospace, and don't set buttons in Aspekta — keep the two type roles strictly separate.
- Don't introduce a pill radius or large-radius cards. The 4px corner is uniform and intentional.
- Don't add drop shadows or glass effects — the system is deliberately shadowless.
- Don't use the support-blue ramp (`{colors.accent-sky}` / `{colors.accent-blue}`) on the primary hero CTA; that stays on `{colors.primary}`.
- Don't add hover-state documentation — default and active/pressed only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down from 72px; email input + button stack full-width; feature panel collapses to single column (text then diagram); footer columns stack |
| Tablet | 768–1024px | Top nav tightens; feature panel keeps two columns but narrows; logo strip wraps |
| Desktop | 1024–1440px | Full horizontal nav; hero at full 72px; two-column feature panel; multi-column footer |
| Wide | > 1440px | Same as desktop with more outer breathing room; content column caps centered |

### Touch Targets
- `{component.button-primary}` carries ~12.8/11.2px vertical and 32px horizontal padding, giving a comfortable ≥40px tap height.
- `{component.text-input}` and `{component.accordion-row}` (24px padding) meet tap-target minimums.
- Nav menu items in `{typography.body-sm}` get adequate hit area from surrounding nav padding.

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile.
- The hero stays a single centered column at all widths — it simply scales.
- The Migrate/Build feature panel drops from two columns to stacked (text claims, then the blue product-diagram card).
- The Security band's accordion rows remain full-width and stack vertically at every breakpoint.
- Footer link columns reflow from a multi-column row to stacked groups; the email-capture column moves below the link lists.

### Image Behavior
- Partner logo strips render as flat monochrome wordmarks and wrap/scroll horizontally on narrow widths.
- The product-diagram card's integration chips retain their circular arrangement; the card resizes proportionally.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-panel}`, `{component.security-band}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Aspekta 400; buttons/eyebrows stay LT Superior Mono 600 uppercase. The two roles never blur.
6. Keep the system shadowless — reach for color-band contrast, not elevation, when you need emphasis.
7. When in doubt about emphasis: bigger thin Aspekta, or a full-bleed `{colors.primary}` band — not a bolder weight.

## Known Gaps

- **Licensed typefaces:** `fonts_licensed` was empty in the analysis, but both **Aspekta** and **LT Superior Mono** are commercial faces, not open web fonts. Open-source substitutes (Inter / IBM Plex Mono) are documented in the Typography section; do not assume the originals ship.
- **Single radius only:** the analysis captured exactly one radius value (4px). The circular testimonial avatar and any pill/full-round shapes were not measured — an avatar/`full` radius token would need re-extraction.
- **No shadow tokens:** zero shadows were measured. If the live site uses faint elevation on inputs or cards, it was below the capture threshold; documented here as flat.
- **Footer/CTA navy approximation:** the deep CTA + footer band reads darker in the screenshots than the single measured navy (`{colors.surface-navy}` — #3d446a); the true footer floor may be a darker navy not captured in the palette.
- **Ant Design color ramp:** the blue/red/green/amber accent ramps (#1890ff, #ff4d4f, #faad14, #52c41a, etc.) match Ant Design defaults and likely originate from embedded product UI rather than the marketing surface; exact marketing usage of each was not fully mapped.
- **Single page captured:** only the landing page was analyzed. Solutions, Product, Customers, and Resources sub-pages may introduce additional components and tokens.
- **Interaction states:** button/input focus, active, and disabled states beyond the default were not extracted; animation and transition timings are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/datafold/design-md -->
