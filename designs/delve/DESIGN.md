---
version: alpha
name: Delve-design-analysis
description: A high-contrast compliance-software interface anchored on white canvas with pure-black ink and a hot-orange brand accent. The system reads as confident, technical, and modern-SaaS — crisp black headlines, near-white panel surfaces (#f7f8fa / #f0f1f5) for content blocks, faint cool-gray hairlines, and a small reserved set of saturated accents (orange, magenta, blue) used sparingly for emphasis, logos, and interactive cues against an otherwise monochrome editorial field.
colors:
  primary: "#000000"
  primary-active: "#0c0c0c"
  ink: "#000000"
  ink-soft: "#222222"
  body: "#444444"
  body-soft: "#333333"
  muted: "#666666"
  muted-violet: "#5f5a70"
  canvas: "#ffffff"
  surface-soft: "#f7f8fa"
  surface-soft-alt: "#fafafa"
  surface-card: "#f0f1f5"
  hairline-soft: "#eeeeee"
  hairline: "#dfe0e5"
  hairline-strong: "#dddddd"
  hairline-strongest: "#cccccc"
  brand-orange: "#ff4b0f"
  brand-orange-alt: "#fb4a02"
  brand-orange-active: "#e35b11"
  accent-magenta: "#bd35bd"
  accent-blue: "#3898ec"
  on-primary: "#ffffff"
typography:
  display-xl:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-accent:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-accent-active:
    backgroundColor: "{colors.brand-orange-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
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
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  panel-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 32px
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
    borderColor: "{colors.hairline}"
  cta-band:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Delve's marketing surface is a high-contrast, technical modern-SaaS interface built on a strict monochrome spine — pure white canvas (`{colors.canvas}` — #ffffff), pure black ink (`{colors.ink}` — #000000), and a small reserved set of saturated accents used sparingly. The measured palette is dominated by neutrals (white, cool grays, blacks), with the only chromatic voltage coming from a hot brand-orange (`{colors.brand-orange}` — #ff4b0f), a magenta (`{colors.accent-magenta}` — #bd35bd), and a Webflow-blue interaction color (`{colors.accent-blue}` — #3898ec).

The system reads as confident and engineering-minded: black headlines on white, near-white panel surfaces (`{colors.surface-soft}` — #f7f8fa and `{colors.surface-card}` — #f0f1f5) holding content blocks, and faint cool-gray hairlines (`{colors.hairline}` — #dfe0e5) separating regions. There is no dark theme in the measured surfaces — the contrast comes entirely from black-on-white, not from inverted bands.

Brand voltage is rationed: the orange appears on a small number of accent CTAs, highlights, and logo marks rather than across every band. The magenta and blue are even rarer — they read as logo/diagram colors and interactive-state cues, not as a general accent system.

**Key Characteristics:**
- Pure black-on-white contrast spine (`{colors.ink}` — #000000 on `{colors.canvas}` — #ffffff). The system never softens its primary contrast.
- A reserved hot-orange accent (`{colors.brand-orange}` — #ff4b0f) for emphasis CTAs and brand marks. Two near-identical oranges were measured (#ff4b0f and #fb4a02) plus a darker press tone (#e35b11).
- Near-white panel surfaces (`{colors.surface-soft}` — #f7f8fa, `{colors.surface-card}` — #f0f1f5, `{colors.surface-soft-alt}` — #fafafa) carry content blocks against the white canvas — a quiet, layered light-gray system.
- A graduated cool-gray hairline family (`{colors.hairline-soft}` — #eeeeee through `{colors.hairline-strongest}` — #cccccc) for dividers and borders.
- A graduated ink family for text: black (`{colors.ink}`), #222222 (`{colors.ink-soft}`), #444444 (`{colors.body}`), #666666 (`{colors.muted}`), and a muted violet-gray (`{colors.muted-violet}` — #5f5a70).
- Magenta (`{colors.accent-magenta}` — #bd35bd) and blue (`{colors.accent-blue}` — #3898ec) appear rarely — logo/diagram colors and interactive cues, never primary CTAs.

## Colors

### Brand & Accent
- **Brand Orange** (`{colors.brand-orange}` — #ff4b0f): The single dominant accent. Used on emphasis CTAs, brand marks, and highlight moments against the monochrome field. A second near-identical orange (`{colors.brand-orange-alt}` — #fb4a02) was measured — treat these as the same brand tone captured at slightly different rasterizations. Press/active state uses the darker `{colors.brand-orange-active}` (#e35b11).
- **Accent Magenta** (`{colors.accent-magenta}` — #bd35bd): A rare chromatic accent — appears in logo/diagram marks and small highlights, never on primary actions.
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): A blue interaction color (the standard Webflow link/interaction blue). Used on inline interactive cues and small accents only.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor — the most frequent color in the system.
- **Surface Soft** (`{colors.surface-soft}` — #f7f8fa): The primary panel/section background — used to lift content blocks off the white canvas.
- **Surface Soft Alt** (`{colors.surface-soft-alt}` — #fafafa): A barely-there alternate panel tone for subtle banding.
- **Surface Card** (`{colors.surface-card}` — #f0f1f5): A slightly deeper cool-gray fill for cards, badges, and nested panels.

### Hairline / Border
- **Hairline Soft** (`{colors.hairline-soft}` — #eeeeee): The faintest divider tone.
- **Hairline** (`{colors.hairline}` — #dfe0e5): The default 1px border on inputs, cards, and section dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — #dddddd): A slightly more visible border.
- **Hairline Strongest** (`{colors.hairline-strongest}` — #cccccc): The most visible neutral border tone — high frequency, used widely for outlines and dividers.

### Text
- **Ink** (`{colors.ink}` — #000000): All headlines and primary text. Pure black.
- **Ink Soft** (`{colors.ink-soft}` — #222222): Secondary headline / strong-body tone.
- **Body** (`{colors.body}` — #444444): Default running-text color.
- **Body Soft** (`{colors.body-soft}` — #333333): A slightly darker body alternate.
- **Muted** (`{colors.muted}` — #666666): Secondary text — captions, footer body, sub-labels.
- **Muted Violet** (`{colors.muted-violet}` — #5f5a70): A cool violet-gray tertiary tone used in fine print and supporting text.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on black and orange buttons.

### Note on Semantic Colors
No dedicated success / warning / error tones were isolated in the measured palette beyond the brand accents. Semantic states are listed in Known Gaps.

## Typography

### Font Family
No typography was captured in the measured analysis (the `typography` array was empty). The roles below are **derived** from screenshot ground-truth and standard modern-SaaS / Webflow baselines, using a neutral grotesque sans stack (`Inter, system-ui, sans-serif`) as a faithful open-source stand-in. No licensed typeface was flagged, so Inter is documented as the working family rather than a substitute for a proprietary face.

The split is functional:
- Headlines: weight 600, negative letter-spacing on display sizes (derived) — black, crisp, technical.
- Body + UI: weight 400–500, 0 letter-spacing — quiet supporting type.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -1.5px | Homepage h1 (derived) |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1px | Section heads (derived) |
| `{typography.display-md}` | 36px | 600 | 1.15 | -0.5px | Sub-section heads, CTA-band heads (derived) |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Card titles, feature heads (derived) |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Small card titles, intro lines (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, logo-strip captions (derived) |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items (derived) |

### Principles
Headlines stay pure black and weight 600 — never lighter on a hero. Body copy steps down into the gray family (`{colors.body}` → `{colors.muted}`) rather than reducing weight. The whole type system rides the monochrome spine; color is never used to create type hierarchy.

### Note on Font Substitutes
No licensed/custom typeface was flagged in the measured analysis. If the production face differs from Inter, swap `fontFamily` across the typography roles — the size/weight/tracking scale above is the load-bearing contract, not the specific family.

## Layout

### Spacing System
No spacing tokens were measured (the `spacing` array was empty). The scale below is **derived** from a standard 4px base, the common rhythm for Webflow-built modern-SaaS marketing pages.

- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards; `{spacing.lg}` (24px) for panel cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived — typical for this layout class).
- **Hero:** single-column centered or left-aligned headline + supporting copy + CTA row (derived).
- **Feature grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).

### Whitespace Philosophy
The monochrome system leans on whitespace and faint gray panels for structure rather than borders or color blocks. Generous section spacing keeps the high black-on-white contrast from feeling harsh.

## Elevation & Depth

No shadow tokens were measured (the `shadows` array was empty). The system reads as predominantly **flat** — depth comes from surface tone steps, not drop shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` (#dfe0e5) or `{colors.hairline-strongest}` (#cccccc) border | Inputs, dividers, card outlines |
| Panel surface | `{colors.surface-soft}` / `{colors.surface-card}` background — no shadow | Feature cards, content panels |

### Decorative Depth
Layering is achieved by stacking surface tones (`{colors.canvas}` → `{colors.surface-soft}` → `{colors.surface-card}`) rather than shadows. Any product-UI chrome shown inside cards may carry its own internal shadows; those are content, not system tokens.

## Shapes

### Border Radius Scale
No radius tokens were measured (the `radius` array was empty). The scale below is **derived** from standard modern-SaaS conventions and should be confirmed against production.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small accents, inline chips (derived) |
| `{rounded.sm}` | 6px | Small buttons, dropdown items (derived) |
| `{rounded.md}` | 8px | Buttons, text inputs (derived) |
| `{rounded.lg}` | 12px | Content cards, panels, CTA bands (derived) |
| `{rounded.xl}` | 16px | Large feature / mockup containers (derived) |
| `{rounded.pill}` | 9999px | Badge pills (derived) |
| `{rounded.full}` | 9999px | Avatars, icon buttons (derived) |

### Photography Geometry
Image and avatar geometry was not measured; treat avatar circles as `{rounded.full}` and content-image corners as `{rounded.lg}` pending confirmation (derived).

## Components

> Note: No components were captured in the measured analysis (the `components` array was empty). The entries below are **derived** from the measured color palette plus screenshot ground-truth. Color refs are faithful to declared tokens; sizes/padding are derived defaults.

### Navigation

**`top-nav`** — White nav bar pinned to the top of every page. `{colors.canvas}` background, `{colors.ink}` wordmark + menu, menu items in `{typography.nav-link}`. Right-side cluster carries a `{component.button-secondary}` and an emphasis `{component.button-accent}` (derived).

### Buttons

**`button-primary`** — The default action. Background `{colors.primary}` (#000000), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 20px, height 40px. Active state `button-primary-active` shifts to `{colors.primary-active}` (#0c0c0c).

**`button-accent`** — The emphasis CTA carrying the brand voltage. Background `{colors.brand-orange}` (#ff4b0f), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`. Active state `button-accent-active` shifts to `{colors.brand-orange-active}` (#e35b11).

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same padding + height + radius as primary.

**`text-link`** — Inline link in `{colors.ink}`; interactive states may pick up `{colors.accent-blue}` (the measured Webflow interaction blue).

### Cards & Containers

**`hero-band`** — White-canvas hero with the h1 in `{typography.display-xl}`, supporting copy in `{typography.body-md}`, and a CTA row. Vertical padding `{spacing.section}` (96px).

**`feature-card`** — Used in feature grids. Background `{colors.surface-soft}` (#f7f8fa), rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Title in `{typography.title-md}`, description in `{typography.body-md}`.

**`panel-card`** — A deeper cool-gray content panel. Background `{colors.surface-card}` (#f0f1f5), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Used for nested content blocks and stat panels.

**`logo-strip`** — Customer / integration logo row. Background `{colors.canvas}`, caption label in `{typography.caption}` / `{colors.muted}`, padding `{spacing.xl}`.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 40px, 1px `{colors.hairline}` border.

### Tags / Badges

**`badge-pill`** — Small pill label for category tags. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

### CTA / Footer

**`cta-band`** — Pre-footer CTA panel. Background `{colors.surface-soft}`, rounded `{rounded.lg}`, padding `{spacing.xxl}` (48px). Heading in `{typography.display-md}`, plus a `{component.button-accent}` or `{component.button-primary}`.

**`footer`** — Light footer on white. Background `{colors.canvas}`, text `{colors.muted}`, link rows in `{typography.body-sm}`, vertical padding 64px. Unlike many SaaS sites, Delve's measured surfaces carry no dark footer — the footer stays on the monochrome light field.

## Do's and Don'ts

### Do
- Keep the black-on-white contrast spine intact — `{colors.ink}` (#000000) headlines on `{colors.canvas}` (#ffffff). It is the brand's core signal.
- Reserve `{colors.brand-orange}` (#ff4b0f) for emphasis CTAs and brand marks only. It is rationed accent voltage, not a general fill.
- Use the surface-tone steps (`{colors.canvas}` → `{colors.surface-soft}` → `{colors.surface-card}`) to create layering instead of shadows.
- Step text hierarchy through the gray family (`{colors.body}` → `{colors.muted}` → `{colors.muted-violet}`) rather than reducing font weight.
- Use `{colors.hairline}` (#dfe0e5) / `{colors.hairline-strongest}` (#cccccc) for borders and dividers — keep them faint.

### Don't
- Don't use `{colors.accent-magenta}` or `{colors.accent-blue}` on primary CTAs — they are logo/diagram and interactive-cue colors, used rarely.
- Don't introduce dark-theme bands; the measured system is uniformly light. A dark surface would be off-system.
- Don't soften the headline contrast — avoid gray headlines on hero bands.
- Don't multiply the orange into large fills; it works because it is scarce.
- Don't add hover-state styling beyond default + active/pressed (primary → #0c0c0c, accent → #e35b11).

## Responsive Behavior

> Breakpoint specifics were not measured; the strategy below is **derived** from the layout class.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; CTA band padding tightens |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature grids |
| Wide | > 1440px | Same as desktop with more outer breathing room; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` and `{component.button-accent}` at minimum 40px height (derived).
- `{component.text-input}` height is 40px (derived).

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px (derived).
- Feature grids reduce columns rather than scaling cards down (derived).
- Surface-tone panels keep their fills at every breakpoint so the layering reads consistently.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.button-accent}`, `{component.feature-card}`).
2. Variants of an existing component (`-active`, `-secondary`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the monochrome spine: black ink, white canvas, gray panels — color is reserved accent only.
6. Confirm the **derived** typography, spacing, and radius scales against production before relying on exact values.
7. When in doubt about emphasis: bigger black headline before more orange.

## Known Gaps

- **Typography was not measured** (the `typography` array was empty). All type roles — family, sizes, weights, line-heights, letter-spacing — are derived from screenshot ground-truth and standard modern-SaaS baselines, using Inter as a neutral stand-in. The production face and scale must be confirmed.
- **Spacing was not measured** (the `spacing` array was empty). The 4px-based scale is derived and needs verification.
- **Radius was not measured** (the `radius` array was empty). The radius scale is derived; production corner values are unconfirmed.
- **Shadows were not measured** (the `shadows` array was empty). The system is documented as flat; any real elevation tokens are unknown.
- **Components were not measured** (the `components` array was empty). All component entries are derived from the measured palette plus screenshots; their dimensions, padding, and exact composition are inferred, not extracted.
- Two near-identical brand oranges were measured (`#ff4b0f` and `#fb4a02`); whether these are one intended tone captured at different rasterizations or two distinct values is unconfirmed.
- No dedicated semantic colors (success / warning / error) were isolated; form validation and status states would need a sign-up or product flow to confirm.
- The `#3898ec` blue is the standard Webflow interaction color, suggesting a Webflow-built site; its intended usage (link state vs. brand accent) should be confirmed against interaction behavior.
- Animation and transition timings are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/delve/design-md -->
