---
version: alpha
name: MeshConnect-design-analysis
description: "A bold, fintech-grade crypto-payments interface built on a warm light-gray canvas (#efeeee) with pure-black ink, sharp-cornered black CTAs, and a single high-voltage chartreuse-yellow accent (#f9ff4d). The system reads as confident infrastructure software — oversized Stabilgrotesk display headlines set tight (line-heights below 1.0), near-square radii (2-3px), flat gray content cards, and alternating black / yellow / light-gray bands. Brand voltage comes from the giant grotesk type and the electric-yellow announcement + CTA moments against an otherwise monochrome surface."
colors:
  primary: "#000000"
  ink: "#000000"
  body: "#0f0f0f"
  link: "#333333"
  muted: "#545464"
  muted-soft: "#787a87"
  canvas: "#efeeee"
  surface: "#cccccc"
  surface-soft: "#f3f3f5"
  surface-hairline: "#e4ebf3"
  surface-dark: "#1e1e24"
  surface-darker: "#141418"
  surface-dark-soft: "#33333e"
  neutral: "#ffffff"
  on-dark: "#ffffff"
  accent-yellow: "#f9ff4d"
  accent-blue: "#037fff"
  accent-blue-dark: "#0072e8"
  accent-teal: "#15e6cd"
typography:
  h1:
    fontFamily: "Stabilgrotesk, Space Grotesk, Arial, sans-serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: normal
  h2:
    fontFamily: "Stabilgrotesk, Space Grotesk, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: normal
  h3:
    fontFamily: "Stabilgrotesk, Space Grotesk, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.071
    letterSpacing: normal
  body:
    fontFamily: "Stabilgrotesk, Space Grotesk, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: normal
  button:
    fontFamily: "Stabilgrotesk, Space Grotesk, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.086
    letterSpacing: normal
rounded:
  none: 0px
  xs: 2px
  sm: 3px
  pill: 100px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 30px
  huge: 40px
components:
  top-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 24px
  announcement-bar:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px 24px
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 40px
  button-accent:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 40px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.body}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h1}"
    rounded: "{rounded.none}"
    padding: 40px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 24px
  use-case-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.sm}"
    padding: 20px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h3}"
    rounded: "{rounded.sm}"
    padding: 24px
  product-mockup-panel:
    backgroundColor: "{colors.surface-darker}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: 20px
  feature-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h2}"
    rounded: "{rounded.none}"
    padding: 40px
  accent-band:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.h2}"
    rounded: "{rounded.none}"
    padding: 40px
  tab-row-item:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  tab-row-item-active:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  pill-label:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 40px
---

## Overview

Mesh (meshpay / Mesh Connect) is the marketing surface for a crypto-payments network, and it reads exactly like confident fintech infrastructure software: a warm light-gray canvas (`{colors.canvas}` — #efeeee), pure-black ink (`{colors.ink}` — #000000), sharp-cornered black CTAs, and a single electric chartreuse-yellow accent (`{colors.accent-yellow}` — #f9ff4d) that supplies all the brand voltage. The page alternates between light-gray editorial bands, black feature bands, and full-bleed yellow bands — a high-contrast rhythm that keeps the eye moving down a long scroll.

The type voice is dominated by **Stabilgrotesk**, a custom grotesk display face used at every level — h1 at 72px, h2 at 64px — set extremely tight, with line-heights *below 1.0* (0.95 for h1, 0.92 for h2). The headlines pack onto two or three lines with almost no leading, producing the dense, oversized statement typography that defines the brand ("The first global crypto payments network"). Everything — headlines, body, buttons — runs the same family at a single weight (400); hierarchy is created entirely through size and color, not weight.

Component voltage comes from two places: the **electric-yellow moments** (the announcement bar, the active state of the deposits/payments tab list, the "GET STARTED" buttons, the "Featured in" band) and the **flat gray content cards** (`{colors.surface}` — #cccccc) that hold use-case tiles and product UI fragments. Cards are nearly square — radius is just 2-3px, never soft. Buttons have radius `0px` (perfectly sharp corners), reinforcing the engineered, no-nonsense tone.

**Key Characteristics:**
- Warm light-gray canvas (`{colors.canvas}` — #efeeee) instead of pure white — softens the otherwise stark monochrome system.
- Oversized Stabilgrotesk display type set tight (h1 72px / 0.95, h2 64px / 0.92). A single custom grotesk face at weight 400 carries the whole page.
- Pure-black CTA buttons with **sharp 0px corners** and light text (`{colors.canvas}`). The square corners are a deliberate engineered signal.
- One high-voltage accent: chartreuse yellow (`{colors.accent-yellow}` — #f9ff4d) for the announcement bar, active tabs, secondary CTAs, and the "Featured in" band.
- Flat gray content cards (`{colors.surface}` — #cccccc) at near-square radius (`{rounded.sm}` — 3px), no shadow. Used for use-case tiles and product mockup framings.
- Dark feature bands (`{colors.ink}` / `{colors.surface-dark}` — #1e1e24) holding product UI mockups (the Transfer panel, the iPhone payment screen).
- Secondary chromatic accents — blue (`{colors.accent-blue}` — #037fff) and teal (`{colors.accent-teal}` — #15e6cd) — appear only inside product UI fragments and wallet-logo orbits, never on hero chrome.
- A near-grid spacing rhythm built on 12px (`{spacing.sm}`) and 40px (`{spacing.huge}`) — the two most-measured spacing values.

## Colors

### Brand & Accent
- **Accent Yellow** (`{colors.accent-yellow}` — #f9ff4d): The brand's single high-voltage color. Carries the top announcement bar, the active payments/deposits tab, the "GET STARTED" CTAs in select bands, and the full-bleed "Featured in" / "Stability. Not volatility." accent bands. This is where all the energy lives in an otherwise monochrome system.
- **Accent Blue** (`{colors.accent-blue}` — #037fff) and **Accent Blue Dark** (`{colors.accent-blue-dark}` — #0072e8): Appear inside product UI fragments (links, status chips in the Transfer mockup) and the wallet-orbit logos. Never on hero chrome.
- **Accent Teal** (`{colors.accent-teal}` — #15e6cd): A minor chromatic accent used inside the wallet-orbit graphic and product fragments.

### Surface
- **Canvas** (`{colors.canvas}` — #efeeee): The default page floor — a warm light gray, not white.
- **Neutral White** (`{colors.neutral}` — #ffffff): Used for the phone-mockup screen chrome and small inset surfaces.
- **Surface** (`{colors.surface}` — #cccccc): The flat gray content-card background — use-case tiles, the "Mesh streamlines the process" panel.
- **Surface Soft** (`{colors.surface-soft}` — #f3f3f5): A barely-lighter neutral used on subtle inset zones.
- **Surface Hairline** (`{colors.surface-hairline}` — #e4ebf3): A faint cool-tinted divider/border tone.
- **Surface Dark** (`{colors.surface-dark}` — #1e1e24): The dark feature-panel background (the right-side Deposits panel).
- **Surface Darker** (`{colors.surface-darker}` — #141418): Deeper near-black used inside product mockup panels.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #33333e): Nested dark surfaces inside the product UI.

### Text
- **Ink** (`{colors.ink}` — #000000): All headlines and primary text; also the primary button + nav + footer background.
- **Body** (`{colors.body}` — #0f0f0f): Default running-text color — a near-black measured on low-contrast body copy.
- **Link** (`{colors.link}` — #333333): Inline anchor text.
- **Muted** (`{colors.muted}` — #545464): Secondary text — captions, sub-labels.
- **Muted Soft** (`{colors.muted-soft}` — #787a87): Tertiary text — fine print, the lighter card descriptions.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on black nav, dark feature bands, and footer.

## Typography

### Font Family
The system runs a single typeface, **Stabilgrotesk**, across every role — headlines, body, and buttons. It is a custom grotesk display face: geometric, tight, and used here at weight 400 only. The defining trait is the *negative-feeling* leading on display sizes — line-heights of 0.92–0.95 stack the oversized headlines into dense blocks.

Hierarchy is built entirely from **size and color**, never weight. There is no bold; the brand relies on scale jumps (72 → 64 → 28 → 18 → 14px) to separate levels.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 72px | 400 | 0.95 | normal | Hero headline ("The first global crypto payments network") |
| `{typography.h2}` | 64px | 400 | 0.92 | normal | Section heads ("Mesh streamlines the process.", "Powering swift, safe and secure movement.") |
| `{typography.h3}` | 28px | 400 | 1.071 | normal | Sub-heads, card titles, tab-row labels, big stat numbers |
| `{typography.body}` | 18px | 400 | 1.25 | normal | Default running text, descriptions, footer links |
| `{typography.button}` | 14px | 400 | 1.086 | normal | Button labels, nav items, pill labels |

### Principles
Keep Stabilgrotesk at weight 400 everywhere. The brand never bolds — emphasis is a size jump, not a weight jump. Preserve the sub-1.0 line-heights on h1/h2; loosening the leading destroys the dense statement look. Body copy stays at 18px / 1.25 for comfortable reading against the gray canvas.

### Note on Font Substitutes
**Stabilgrotesk is a custom/commercial typeface** and is not available as an open web font. Do not claim to ship it. The closest open-source substitute is **Space Grotesk** (which shares the squared, geometric grotesk character) at weight 400-500; **Archivo** or **Arial** at weight 400 are acceptable fallbacks. When substituting, tighten the display line-heights manually to ~0.92–0.95 to preserve the stacked-headline rhythm — the substitute fonts default to looser leading.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 30px · `{spacing.huge}` 40px.
- **Dominant rhythm:** 12px (`{spacing.sm}`) is by far the most-measured gap, used for tight inline groupings; 40px (`{spacing.huge}`) is the most-measured large value, used for band padding and large blocks.
- **Card internal padding:** ~24px (`{spacing.xl}`) on content cards, ~20px (`{spacing.lg}`) on use-case tiles.

### Grid & Container
- **Hero band:** Two-column split — oversized h1 + sub-copy + CTA on the left, phone-mockup graphic on the right. A faint background grid overlay is visible behind the hero.
- **Logo strips:** "Trusted by 100+" and "Featured in" run as single horizontal rows of grayscale partner logos.
- **Use-case grid:** 5-up row of equal gray tiles ("PSPs / Gaming / Web3 / Luxury / Travel") at desktop.
- **Stats band:** Left text column + right column of stacked big-number rows (300+ / 100+ / 100+).
- **Footer:** Multi-column link list (Solutions / Use Cases / Resources / About Us / Social / Audited By) on a black ground.

### Whitespace Philosophy
Mesh uses tight, high-density layout — large type fills the space rather than whitespace. Bands butt directly against each other with hard color transitions (gray → black → yellow → gray) rather than soft gradients. The grid overlay in the hero reinforces the engineered, blueprint-like feel.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Editorial bands, gray content cards, nav, footer |
| Soft ambient | `rgba(150, 163, 181, 0.08) 0px 4px 24px 0px` | Faint lift on a floating UI surface (very subtle) |
| Standard drop | `rgba(0, 0, 0, 0.2) 0px 4px 8px 0px` | Elevated elements such as the AI-assistant chat popover |
| Glow / halo | `rgba(0, 0, 0, 0.2) 0px 0px 18px 0px` | Floating action / chat button halo |

The elevation philosophy is **mostly flat** — content cards carry no shadow at all (`shadow: none`); contrast between the gray, black, and yellow bands does the visual separation work. The only shadowed elements are floating overlays (the chat assistant popover and its launcher button).

### Decorative Depth
- The phone mockup in the hero carries its own internal product-UI chrome (status bar, converting animation) — shown as content, not as a system shadow.
- A faint blueprint grid sits behind the hero and the dark "Stability. Not volatility." band, supplying texture without depth.
- The wallet-orbit graphic ("All wallets welcome.") uses circular logo chips arranged on a wireframe globe — decorative, with the brand colors appearing only here at small scale.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Buttons — sharp, square corners are the signature CTA shape |
| `{rounded.xs}` | 2px | Minor inset elements, small chips |
| `{rounded.sm}` | 3px | Content cards, use-case tiles, product mockup panels — the dominant card radius |
| `{rounded.pill}` | 100px | Small pill labels ("THE MESH STACK", "INSTANT PAYMENTS", "YOUR TRUSTED PARTNER" tag chips) |

The system is **near-square**. Cards barely round (3px), buttons don't round at all (0px), and only the small section-label tags go fully pill-shaped (100px). The hard geometry reinforces the infrastructure/engineering tone.

### Photography & Graphic Geometry
- The phone mockup retains its native device rounding (rendered as product chrome, not a system token).
- Use-case tiles are flat gray rectangles with simple line-icon illustrations and short captions.
- The wallet logos in the orbit graphic are perfect circles.

## Components

### Navigation

**`top-nav`** — Black bar (`{colors.ink}`) pinned to the top. Carries the "meshpay" wordmark at left (with the yellow "mesh" / white "pay" treatment seen in the logo), a horizontal menu (Solutions, MAP, Use Cases, Resources, About Us), a "Log In" link, and a "REQUEST DEMO" CTA at right. Menu items use `{typography.button}` in `{colors.on-dark}`.

**`announcement-bar`** — Full-bleed yellow strip (`{colors.accent-yellow}`) directly under the nav, carrying the "Mesh Alliance Program Launches…" message in `{colors.ink}` with a trailing arrow. Sharp corners, `{typography.body}` scale.

**`nav-link`** — Transparent inline nav item, `{colors.on-dark}` text, `{typography.button}`.

### Buttons

**`button-primary`** — The signature CTA ("SPEAK WITH AN EXPERT", "GET STARTED" in dark contexts). Background `{colors.ink}` (#000000), text `{colors.canvas}` (light gray), type `{typography.button}` (14px / 400), **rounded `{rounded.none}` (0px — sharp corners)**, vertical padding 16px. Square corners are the defining trait.

**`button-accent`** — Yellow CTA variant ("GET STARTED" on dark or gray bands). Background `{colors.accent-yellow}`, text `{colors.ink}`, same square corners and label scale as the primary.

**`text-link`** — Inline link in `{colors.link}` (#333333), `{typography.body}` scale (e.g., the Privacy Policy / Terms links in the chat popover).

### Cards & Containers

**`card`** — The base content card. Background `{colors.surface}` (#cccccc), rounded `{rounded.sm}` (3px), no shadow. Used for the "Mesh streamlines the process." panel and gray content blocks.

**`use-case-card`** — The 5-up tile used in the "Powering swift, safe and secure movement." grid (PSPs / Gaming / Web3 / Luxury / Travel). Background `{colors.surface}`, rounded `{rounded.sm}`, padding `{spacing.lg}` (20px). Each tile carries a line-icon, an `{typography.h3}` label, and a short `{colors.muted-soft}` description.

**`card-dark`** — A dark content panel (the right-side "Deposits — Faster, more secure deposits from 300+ platforms"). Background `{colors.surface-dark}` (#1e1e24), text `{colors.on-dark}`, rounded `{rounded.sm}`.

**`product-mockup-panel`** — Holds product UI fragments such as the "Transfer" funding-methods panel. Background `{colors.surface-darker}` (#141418), text `{colors.on-dark}`, rounded `{rounded.sm}`. The UI inside (network rows, status chips) carries its own chrome including the blue/teal accents.

### Bands

**`hero-band`** — Light-gray hero (`{colors.canvas}`) with the two-column split: oversized `{typography.h1}` headline + `{typography.body}` sub-copy + `{component.button-primary}` on the left, phone mockup on the right. A faint grid overlay sits behind it.

**`feature-band-dark`** — Full-width black band (`{colors.ink}`) holding centered `{typography.h2}` statements (e.g., "Stability. Not volatility.") with a `{component.button-accent}`.

**`accent-band`** — Full-bleed yellow band (`{colors.accent-yellow}`) used for the "Featured in" logo strip and yellow callout zones. Text in `{colors.ink}`.

### Tabs / Lists

**`tab-row-item`** + **`tab-row-item-active`** — The stacked feature switcher under "Mesh streamlines the process." (Payments / Deposits / Verifications). Inactive rows are transparent with `{colors.ink}` text; the active row fills with `{colors.accent-yellow}` and keeps `{colors.ink}` text. Labels in `{typography.h3}`, sharp corners.

**`pill-label`** — Small uppercase section-tag chip ("THE MESH STACK", "INSTANT PAYMENTS", "YOUR TRUSTED PARTNER"). Transparent fill with a hairline border, `{colors.ink}` text, `{typography.button}`, rounded `{rounded.pill}` (100px), padding 8px × 16px.

### Footer

**`footer`** — Black footer (`{colors.ink}`) closing the page. Multi-column link list (Solutions / Use Cases / Resources / About Us / Social / Audited By) in `{colors.on-dark}`, `{typography.body}`. A large decorative line-burst graphic sits behind the columns; copyright + legal links run along the bottom.

## Do's and Don'ts

### Do
- Keep `{colors.canvas}` (#efeeee — warm gray) as the default page floor, not white. The slight warmth is part of the brand.
- Reserve `{colors.accent-yellow}` (#f9ff4d) for the announcement bar, active tab states, secondary CTAs, and full-bleed accent bands. It is the only loud color in the system.
- Use square corners (`{rounded.none}`) on all buttons. The sharp CTA is a deliberate engineered signal.
- Set display headlines in Stabilgrotesk at weight 400 with sub-1.0 line-height. Stack them dense.
- Build hierarchy through size jumps (72 → 64 → 28 → 18 → 14), never weight.
- Keep content cards flat gray (`{colors.surface}`) at 3px radius with no shadow. Let band contrast do the separation work.
- Confine the blue and teal accents to product UI fragments and the wallet-orbit graphic.
- Alternate band surfaces (gray → black → yellow → gray) with hard transitions for scroll rhythm.

### Don't
- Don't bold the type. Stabilgrotesk runs at 400 only — emphasis is size, not weight.
- Don't soften button corners. 0px radius is the brand's signature.
- Don't round cards beyond `{rounded.sm}` (3px). Soft cards read off-brand.
- Don't add drop shadows to content cards — only floating overlays (chat popover) carry shadow.
- Don't introduce the blue/teal accents onto hero chrome or CTAs; they belong inside product fragments.
- Don't use multiple accent colors in one band — the yellow stands alone.
- Don't add hover-state styling beyond the default and active/pressed states the system encodes.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to hamburger; hero h1 drops from 72px and phone mockup stacks below copy; use-case grid 5-up → 1-up; stats stack; footer columns wrap to 1-2 |
| Tablet | 768–1024px | Nav tightens; hero stays two-column or stacks; use-case tiles 2–3-up; footer columns 2–3-up |
| Desktop | 1024–1440px | Full horizontal nav; two-column hero; 5-up use-case grid; multi-column footer |
| Wide | > 1440px | Same as desktop with additional outer margin around the centered content |

### Touch Targets
- `{component.button-primary}` carries ~16px vertical padding, comfortably exceeding 44px tap height.
- `{component.tab-row-item}` rows are full-width with generous vertical padding — easy targets.
- Nav links rely on the surrounding bar height for adequate tap area.

*(Note: exact mobile breakpoint values and type-scaling ratios were not measured — see Known Gaps.)*

### Collapsing Strategy
- Top nav collapses to a hamburger sheet at mobile widths.
- The hero's two-column split stacks to single column — headline + copy + CTA first, then the phone mockup.
- The 5-up use-case grid reduces column count rather than shrinking tiles to illegibility.
- The stats band stacks the big numbers vertically.
- Footer link columns wrap from 6 → 2 → 1.

### Image Behavior
- The phone mockup scales proportionally and moves below copy on mobile.
- Grayscale partner-logo strips wrap or scroll horizontally on narrow widths.
- The wallet-orbit graphic scales down while keeping logo chips circular.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.use-case-card}`, `{component.tab-row-item-active}`).
2. Variants (`-active`, `-dark`, `-accent`) live as separate entries under `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Stabilgrotesk 400 with tight line-height; the substitute (Space Grotesk) needs manual line-height tightening.
6. The yellow accent is scarce and loud — don't dilute it across multiple simultaneous uses in one band.
7. When in doubt about emphasis: bigger Stabilgrotesk before bolder — the system has no bold.

## Known Gaps

- **Stabilgrotesk is a custom/commercial typeface** and cannot be shipped; the Typography section documents Space Grotesk / Archivo as open-source substitutes. Only weight 400 was measured — other weights (if any in the live site) are unconfirmed.
- The analyzer captured only `button-primary` (the dark, sharp CTA) and `card` as measured components. The "GET STARTED" yellow CTA, top-nav, announcement bar, tabs, pill labels, and bands are documented from screenshot ground-truth and reference only declared tokens — their exact padding/measurements are approximate.
- `button-primary` was measured with `padding: 16px 0px` (vertical only); the horizontal padding shown in the spec (40px) is **derived** from the visible button width in the hero screenshot and should be confirmed.
- Letter-spacing measured as `normal` for all roles — no explicit tracking value was captured.
- Exact responsive breakpoints and the mobile type-scaling ratios were not measured; the Responsive table reflects standard inference from the desktop + full-page screenshots.
- The blue (`{colors.accent-blue}`), teal (`{colors.accent-teal}`), and cool-neutral tones appear largely inside product UI fragments and the wallet-orbit graphic; their precise usage roles outside those fragments are not fully confirmed.
- Animation/transition timings (the hero "Converting…" payment animation, tab switching, the AI chat popover) are out of scope.
- Form/input states were not present on the captured landing page (only CTAs and the embedded chat assistant) — input tokens are not documented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/meshconnect/design-md -->
