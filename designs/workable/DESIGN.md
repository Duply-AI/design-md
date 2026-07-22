---
version: alpha
name: Workable-design-analysis
description: A confident HR-tech / recruiting-SaaS interface built on a white canvas with a deep forest-green brand anchor (#004038) and a bright mint-green action accent. The system reads as trustworthy enterprise software with a fresh edge — green-on-white hierarchy, soft mint surface tints, and occasional violet/cyan chromatic accents inside product UI. Brand voltage comes from the layered green palette (deep forest → teal → bright mint) rather than from heavy ornamentation.

colors:
  primary: "#004038"
  primary-active: "#00544c"
  teal: "#00756a"
  teal-deep: "#00665b"
  green: "#1fbc88"
  green-strong: "#009e6a"
  green-mid: "#18a369"
  mint: "#7edcaf"
  cyan: "#00f5dc"
  ink: "#0f161e"
  ink-deep: "#012620"
  body: "#3d3e45"
  slate: "#333e49"
  muted: "#6f7073"
  canvas: "#ffffff"
  surface-mint: "#f6fefb"
  surface-blue: "#dfe6f1"
  surface-blue-strong: "#c4cfde"
  accent-violet: "#8736dc"
  error: "#d5351a"
  on-primary: "#ffffff"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 500
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
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-accent:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.teal}"
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
    padding: 80px
  hero-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: 80px
  feature-card:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-blue:
    backgroundColor: "{colors.surface-blue}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  badge-pill:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-pill-violet:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Workable's marketing surface is a recruiting / HR-tech SaaS interface anchored on a white canvas (`{colors.canvas}` — #ffffff) with a deep forest-green brand color (`{colors.primary}` — #004038) carrying nearly all the brand weight. The palette layers green from deep forest through teal (`{colors.teal}` — #00756a) to a bright mint action accent (`{colors.green}` — #1fbc88), giving the system a fresh, growth-oriented feel without abandoning enterprise trust.

The system reads as confident B2B software: clean hierarchy, soft mint-tinted surface cards (`{colors.surface-mint}` — #f6fefb), product UI shown directly inside white mockup cards, and a deep near-black-green footer (`{colors.ink-deep}` — #012620) that closes long pages. Brand voltage comes from the green palette itself — there is no need for loud display typography or heavy ornament.

Chromatic accents appear sparingly: a violet (`{colors.accent-violet}` — #8736dc) and a bright cyan (`{colors.cyan}` — #00f5dc) surface inside product UI fragments and occasional category badges, providing momentary color pop against the otherwise green-and-white field.

**Key Characteristics:**
- White canvas with a deep forest-green primary (`{colors.primary}` — #004038). Primary CTAs and dark hero bands both use this anchor color.
- A bright mint-green action accent (`{colors.green}` — #1fbc88) for high-emphasis "try / start" buttons and chart highlights — the brand's energetic note.
- Soft mint surface tint (`{colors.surface-mint}` — #f6fefb) and a cool blue tint (`{colors.surface-blue}` — #dfe6f1) for content cards, alternating to keep bands distinct.
- Product UI fragments shown directly inside white cards — recruiting pipelines, candidate cards, dashboards — rather than abstract illustration.
- A deep green-black footer (`{colors.ink-deep}` — #012620) closing every page; the system's only fully dark surface aside from dark hero bands.
- Occasional violet and cyan accents (`{colors.accent-violet}`, `{colors.cyan}`) for badges and in-product highlights.

Note: typography, spacing, radius, and shadow tokens were **not** captured by the measured analysis. The values documented below are **derived** from reference-screenshot ground-truth and standard SaaS baselines — see Known Gaps.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #004038): The dominant brand color — deep forest green. Carries primary CTAs, dark hero bands, the featured pricing tier, and headline emphasis. The single highest-frequency accent in the measured palette.
- **Primary Active** (`{colors.primary-active}` — #00544c): A slightly lighter measured green used as the pressed/active state of the primary button (derived selection from the measured green ramp).
- **Teal** (`{colors.teal}` — #00756a) and **Teal Deep** (`{colors.teal-deep}` — #00665b): Mid-greens used for inline links, secondary fills, and gradient steps within the green ramp.
- **Green** (`{colors.green}` — #1fbc88): The bright mint action accent — energetic, used on high-emphasis buttons and chart/data highlights.
- **Green Strong** (`{colors.green-strong}` — #009e6a) and **Green Mid** (`{colors.green-mid}` — #18a369): Supporting greens for icons, progress indicators, and product UI accents.
- **Mint** (`{colors.mint}` — #7edcaf): A soft pastel green used for subtle fills, illustration shapes, and avatar/badge tints.
- **Cyan** (`{colors.cyan}` — #00f5dc): A bright cyan that surfaces inside product UI fragments and accent flourishes.
- **Accent Violet** (`{colors.accent-violet}` — #8736dc): The lone off-green chromatic accent — used on category badges and product UI highlights for contrast.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Mint** (`{colors.surface-mint}` — #f6fefb): Barely-tinted mint background for feature cards and soft section bands.
- **Surface Blue** (`{colors.surface-blue}` — #dfe6f1): Cool blue-tinted card surface used to alternate against the mint cards.
- **Surface Blue Strong** (`{colors.surface-blue-strong}` — #c4cfde): A deeper blue-gray for nested fills, dividers, and product-chrome shading.
- **Ink Deep** (`{colors.ink-deep}` — #012620): The deepest green-black — used for the footer background.

### Text
- **Ink** (`{colors.ink}` — #0f161e): Headlines and primary text — a near-black with a cool tint.
- **Body** (`{colors.body}` — #3d3e45): Default running-text color.
- **Slate** (`{colors.slate}` — #333e49): A secondary dark text / icon tone.
- **Muted** (`{colors.muted}` — #6f7073): Tertiary text — captions, fine print, secondary labels.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on green buttons, dark hero bands, and the footer.

### Semantic
- **Error** (`{colors.error}` — #d5351a): The single measured semantic warning/error tone — validation errors and destructive accents. No measured success/warning tokens exist beyond the brand greens (see Known Gaps).

## Typography

### Font Family
The measured analysis captured **no typography data** (no font family, size, or weight). The values here are **derived** from reference screenshots and a standard sans-serif SaaS baseline. Workable's marketing site renders a clean humanist sans; **Inter** is documented as the working substitute with a system fallback stack (`-apple-system, BlinkMacSystemFont, sans-serif`). No licensed/custom typefaces were flagged.

The hierarchy is a single-family system: weight and size carry hierarchy, with weight 700 reserved for the largest display sizes, 600 for titles and buttons, and 400 for body.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 1.1 | -1px | Hero h1 (derived) |
| `{typography.display-lg}` | 40px | 700 | 1.15 | -0.5px | Section heads (derived) |
| `{typography.display-md}` | 32px | 600 | 1.2 | -0.3px | Sub-section heads, card titles (derived) |
| `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Pricing plan names (derived) |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions (derived) |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav menu items (derived) |

### Principles
Hierarchy comes from size and weight, not from a second typeface. Keep body copy at weight 400 and reserve 600–700 for headings and actions. Because all type values are derived, treat the table above as a working baseline to refine against the live site, not a measured ground truth.

### Note on Font Substitutes
No custom or licensed typeface was flagged in the analysis. **Inter** is documented as the working sans. If a closer match to Workable's marketing face is needed, **Manrope** or **Plus Jakarta Sans** at comparable weights are reasonable alternatives — confirm against live-site computed styles before shipping.

## Layout

The measured analysis captured **no spacing data**. The tokens below are **derived** from a standard 4px-base SaaS rhythm and reference screenshots.

### Spacing System
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Section padding:** `{spacing.section}` (80px) between major editorial bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature and pricing cards; `{spacing.lg}` (24px) for product-mockup cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Pricing grid:** 3–4-up at desktop, collapsing toward 1-up on mobile (derived).
- **Footer:** multi-column link list collapsing to single column on mobile (derived).

### Whitespace Philosophy
Generous, modern-SaaS whitespace with clear single-action bands. The mint and blue tinted surfaces alternate against white to pace the page without hard dividers.

## Elevation & Depth

The measured analysis captured **no shadow data**. The treatments below are **derived** from reference screenshots.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Body sections, top nav, hero bands |
| Tinted surface | `{colors.surface-mint}` or `{colors.surface-blue}` background, no shadow | Feature cards |
| Subtle drop shadow | Faint low-alpha shadow (derived) | Product-mockup cards, elevated pricing tiers |
| Dark inversion | `{colors.primary}` / `{colors.ink-deep}` fill | Dark hero bands, featured pricing tier, footer |

The depth philosophy is soft and color-driven: tinted surfaces and dark inversions do most of the elevation work; literal shadows are subtle where present.

### Decorative Depth
- Product UI fragments inside mockup cards carry their own internal chrome and shading (product UI, not system tokens).
- Mint and cyan illustration shapes add light chromatic depth against the white canvas.

## Shapes

The measured analysis captured **no radius data**. The scale below is **derived** from reference screenshots.

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small inline elements, dropdown items (derived) |
| `{rounded.md}` | 8px | Buttons and text inputs (derived) |
| `{rounded.lg}` | 12px | Content cards, pricing tiers (derived) |
| `{rounded.xl}` | 16px | Larger feature / mockup containers (derived) |
| `{rounded.pill}` | 9999px | Badge pills (derived) |
| `{rounded.full}` | 9999px | Avatars, icon buttons (derived) |

### Photography Geometry
Avatars render as circles (`{rounded.full}`). Product UI fragments inside cards retain native chrome radii. Illustration zones use rounded corners at `{rounded.lg}`–`{rounded.xl}`.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page. `{colors.canvas}` background, `{colors.ink}` text, `{typography.nav-link}` menu items. Carries the Workable wordmark at left, primary horizontal menu center, and a right-side cluster with a login link plus a `{component.button-primary}` (or `{component.button-accent}`) CTA. Height derived at 72px.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#004038), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`. Padding and height derived (14px × 24px, 48px). Active state `button-primary-active` shifts to `{colors.primary-active}` (#00544c).

**`button-accent`** — The high-emphasis mint action button. Background `{colors.green}` (#1fbc88), text `{colors.ink-deep}` for contrast on the bright fill, same shape as primary. Used for "start free / try Workable" moments where extra energy is wanted.

**`button-secondary`** — White button with green label. Background `{colors.canvas}`, text `{colors.primary}`, same shape as primary. Used as the lower-emphasis pair to a primary CTA.

**`button-text-link`** — Inline text button, no background, `{colors.primary}` label. Used for "Log in" and inline card CTAs.

**`text-link`** — Inline body link in `{colors.teal}` (#00756a), the readable mid-green for in-paragraph links.

### Cards & Containers

**`hero-band`** — White-canvas hero carrying h1 in `{typography.display-xl}`, sub-headline, and a button row. Vertical padding `{spacing.section}` (derived).

**`hero-band-dark`** — The inverted hero variant: background `{colors.primary}` (#004038), text `{colors.on-primary}`. Used for high-impact statement bands and product callouts.

**`feature-card`** — Used in feature grids. Background `{colors.surface-mint}` (#f6fefb), rounded `{rounded.lg}`, padding `{spacing.xl}`. Carries an icon, a `{typography.title-md}` headline, and body copy in `{typography.body-md}`.

**`feature-card-blue`** — The cool-tinted card variant. Background `{colors.surface-blue}` (#dfe6f1), otherwise identical to `{component.feature-card}`. Alternated against mint cards to pace bands.

**`product-mockup-card`** — A white card showing actual Workable product UI fragments (candidate pipelines, dashboards, hiring stages). Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. The product chrome inside carries its own accents (green, cyan, violet).

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`. Plan name in `{typography.title-lg}`, feature list in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier inverts to `{colors.primary}` (#004038) with `{colors.on-primary}` text. The dark green surface IS the featured signal.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding and height derived (12px × 16px, 48px).

### Tags / Badges

**`badge-pill`** — Small category/status pill. Background `{colors.surface-mint}`, text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.pill}`. The default green-on-mint badge.

**`badge-pill-violet`** — The accent badge variant. Background `{colors.accent-violet}` (#8736dc), text `{colors.on-primary}`. Used to flag "new" or distinct categories with off-green contrast.

### Footer

**`footer`** — Deep green-black footer closing every page. Background `{colors.ink-deep}` (#012620), text `{colors.on-primary}`, body in `{typography.body-sm}`. Multi-column link list with the Workable wordmark at top-left. The only fully dark surface besides dark hero bands.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#004038) for primary CTAs, dark hero bands, and the featured pricing tier — it is the brand anchor.
- Use `{colors.green}` (#1fbc88) for high-energy action buttons and data highlights, with dark text (`{colors.ink-deep}`) on the bright fill for contrast.
- Alternate `{component.feature-card}` (mint) and `{component.feature-card-blue}` (cool blue) to pace bands without hard dividers.
- Embed real product UI inside `{component.product-mockup-card}` rather than abstract illustration.
- Keep inline links in `{colors.teal}` (#00756a) for legibility on white.
- Use `{colors.accent-violet}` and `{colors.cyan}` sparingly — they are chromatic punctuation, not primary surfaces.
- Close every page with the deep green-black `{component.footer}`.

### Don't
- Don't use the violet or cyan accents on primary CTAs — the action layer stays green.
- Don't place bright mint (`{colors.green}`) text on white without enough size/weight; it is an accent fill, not a body color.
- Don't introduce additional dark surfaces casually — dark green is reserved for hero bands, the featured tier, and the footer.
- Don't repeat the same tinted surface in two consecutive bands; alternate mint, blue, and white.
- Don't add hover-state styling beyond what is encoded — primary shifts to `{colors.primary-active}` on press; nothing else changes.

## Responsive Behavior

All breakpoint behavior below is **derived** — the analysis did not measure responsive rules.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; pricing 1-up; footer collapses to single column |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3–4-up pricing tiers |
| Wide | > 1440px | Same as desktop with more outer breathing room; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` and `{component.button-accent}` at derived 48px height — comfortably above 44px.
- `{component.text-input}` at derived 48px height.

### Collapsing Strategy
- Top nav collapses to a hamburger sheet on mobile.
- Hero bands stack content above any adjacent product mockup.
- Feature and pricing grids reduce column count rather than shrinking cards.
- Featured-tier dark green surface stays visually distinct at every breakpoint.

### Image Behavior
- Product UI fragments retain native aspect ratios; cards resize around them.
- Avatars crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-active`, `-accent`, `-violet`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. The green ramp is the brand: deep forest (`{colors.primary}`) for anchors, mint (`{colors.green}`) for energy, teal (`{colors.teal}`) for links. Keep the roles distinct.
6. Replace derived typography, spacing, radius, and shadow values with measured values as soon as they can be captured from the live site.
7. When in doubt about emphasis: bigger before bolder, dark-green inversion before extra accent color.

## Known Gaps

- **Typography was not measured.** No font family, size, weight, line-height, or letter-spacing data was captured. All typography tokens are derived from reference screenshots and a standard SaaS baseline, with **Inter** documented as the working substitute. Confirm against live computed styles.
- **Spacing was not measured.** The 4px-base scale and section rhythm are derived.
- **Radius was not measured.** The radius scale is derived from screenshot ground-truth.
- **Shadows were not measured.** Elevation treatments are derived; no shadow blur/alpha values are confirmed.
- **No component metrics were captured.** All padding, height, and size values on components are derived; only color references are grounded in measured tokens.
- **Semantic palette is incomplete.** Only `{colors.error}` (#d5351a) was measured as an off-brand semantic tone. Dedicated success/warning tokens are not confirmed — the brand greens may double as success signals.
- **`{colors.primary-active}` is a derived selection** from the measured green ramp (#00544c); the true pressed-state color was not isolated.
- Animation/transition timings, form validation states beyond the default input, and the authenticated product UI (the actual recruiting app) are out of scope.
- No licensed/custom font was flagged; if Workable ships a proprietary marketing face, it must be confirmed and substituted before production use.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/workable/design-md -->
