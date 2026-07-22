---
version: alpha
name: Contractbook-design-analysis
description: A warm, optimistic legal-SaaS interface built on a soft off-white canvas (#f7f7f3) with a confident amber-yellow primary CTA and near-black ink. The system reads as friendly and human rather than corporate-legal — large bold ABC Whyte display headlines, big-radius rounded content cards, pill-shaped buttons, and bold electric-blue full-bleed accent bands punctuated by hand-drawn doodle marks. Brand voltage comes from the yellow CTA, the deep electric-blue blocks, and playful sketch illustrations rather than dense UI chrome.

colors:
  ink: "#1a1a1a"
  ink-soft: "#252525"
  ink-333: "#333333"
  black: "#000000"
  canvas: "#f7f7f3"
  surface-offwhite: "#f9f9f6"
  surface-soft: "#f0f0ec"
  surface-faint: "#fafafa"
  white: "#ffffff"
  primary: "#ffba09"
  on-primary: "#222222"
  accent-blue: "#1009f6"
  accent-orange: "#ff3b09"
  accent-lightblue: "#add3e5"
  accent-navy: "#131e41"
  hairline: "#d4d4d0"
  neutral-300: "#cccccc"
  neutral-200: "#dddddd"
  muted: "#4d4d4d"
  muted-soft: "#6d6868"
  on-dark: "#ffffff"

typography:
  display:
    fontFamily: "ABC Whyte, Hanken Grotesk, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-lg:
    fontFamily: "ABC Whyte, Hanken Grotesk, Inter, sans-serif"
    fontSize: 31.5px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  heading-md:
    fontFamily: "ABC Whyte, Hanken Grotesk, Inter, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: "ABC Whyte, Hanken Grotesk, Inter, sans-serif"
    fontSize: 24.5px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  button:
    fontFamily: "ABC Whyte, Hanken Grotesk, Inter, sans-serif"
    fontSize: 12.257px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 40px
  pill: 999px
  full: 9999px

spacing:
  xxs: 7px
  xs: 10px
  sm: 14px
  md: 21px
  lg: 28px
  xl: 35px
  xxl: 38px

components:
  top-nav:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-nav-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 21px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.xl}"
    padding: 38px
  video-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  content-card:
    backgroundColor: "{colors.surface-offwhite}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.xxl}"
    padding: 35px
  card-feature:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  compliance-band:
    backgroundColor: "{colors.accent-lightblue}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.xl}"
    padding: 35px
  accent-band-blue:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-lg}"
    padding: 38px
  input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 14px 21px
  footer:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    padding: 38px
---

## Overview

Contractbook's marketing surface is a warm, optimistic legal-SaaS interface — a soft off-white canvas (`{colors.canvas}` — #f7f7f3) holding big-radius rounded content cards, with a confident amber-yellow primary CTA (`{colors.primary}` — #ffba09) and near-black ink (`{colors.ink}` — #1a1a1a). The system deliberately avoids the cold, navy-blue palette of typical contract-management software; instead it reads as friendly and human, with hand-drawn doodle marks (the sketched eye, the scribbled zigzag) scattered through the layout.

Type voice is single-family: **ABC Whyte** carries everything from the 48px hero headline down to the 12px button label. Headlines are bold (weight 700) and large; body copy runs at a generous 24.5px weight 400. There is no secondary type family — the whole system speaks in one grotesque voice, leaning on size and weight rather than typeface contrast for hierarchy.

Component voltage comes from three sources: the **amber-yellow CTA** (the single loudest action color), **full-bleed electric-blue bands** (`{colors.accent-blue}` — #1009f6) that interrupt the off-white scroll with bold color blocks, and **playful hand-drawn illustrations** that keep the tone light. Cards round generously — `{rounded.xl}` (24px) and `{rounded.xxl}` (40px) on content blocks, and full pill radius (`{rounded.pill}` — 999px) on buttons and badge cards.

**Key Characteristics:**
- Soft off-white canvas (`{colors.canvas}` — #f7f7f3) rather than pure white — the whole page feels warm and paper-like.
- Amber-yellow primary CTA (`{colors.primary}` — #ffba09) with dark text (`{colors.on-primary}` — #222222), fully pill-shaped (`{rounded.full}`). This is the single signature action color.
- Single typeface: ABC Whyte (a licensed grotesque) for headlines, body, and buttons — substituted with Hanken Grotesk / Inter here. Hierarchy comes from size + weight, not family contrast.
- Big-radius rounded content cards — `{rounded.xl}` (24px) is the dominant card radius, with `{rounded.xxl}` (40px) on larger blocks.
- Full-bleed electric-blue accent bands (`{colors.accent-blue}` — #1009f6) that break up the off-white scroll with bold color blocks.
- Light-blue compliance/feature bands (`{colors.accent-lightblue}` — #add3e5) used for the security/trust section.
- Hand-drawn doodle illustrations (sketched eye, scribbles) as the brand's playful signature.
- Dark near-black footer (`{colors.black}` — #000000) closing the page.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #ffba09): The signature amber-yellow action color. Drives the "Request a demo" CTA and the yellow feature/badge cards. Always paired with dark text (`{colors.on-primary}` — #222222) — never white-on-yellow.
- **Accent Blue** (`{colors.accent-blue}` — #1009f6): A bold electric blue used for full-bleed accent bands that interrupt the scroll. White text sits on top. This is the second-loudest color in the system.
- **Accent Orange** (`{colors.accent-orange}` — #ff3b09): A hot orange-red used sparingly for small accents and illustration highlights.
- **Accent Light Blue** (`{colors.accent-lightblue}` — #add3e5): A soft sky blue for the compliance/trust band — calmer than the electric blue.
- **Accent Navy** (`{colors.accent-navy}` — #131e41): A deep ink-navy used in small accents and badge chrome (e.g. the Capterra rating badge).

### Surface
- **Canvas** (`{colors.canvas}` — #f7f7f3): The default off-white page floor.
- **Surface Off-white** (`{colors.surface-offwhite}` — #f9f9f6): Slightly lighter card surface for content blocks.
- **Surface Soft** (`{colors.surface-soft}` — #f0f0ec): Input backgrounds and the muted video-card surface.
- **Surface Faint** (`{colors.surface-faint}` — #fafafa): A barely-tinted near-white used for subtle nested fills.
- **White** (`{colors.white}` — #ffffff): The top-nav bar and the highest-elevation chrome.
- **Black** (`{colors.black}` — #000000): The footer background — the only fully dark surface on the page.

### Text
- **Ink** (`{colors.ink}` — #1a1a1a): All headlines and primary text.
- **Ink Soft** (`{colors.ink-soft}` — #252525) / **Ink 333** (`{colors.ink-333}` — #333333): Slightly softened text tones for secondary headings and dense copy.
- **Muted** (`{colors.muted}` — #4d4d4d): Secondary running text and sub-labels.
- **Muted Soft** (`{colors.muted-soft}` — #6d6868): Tertiary captions and fine-print.
- **On Primary** (`{colors.on-primary}` — #222222): Dark text on the yellow CTA and yellow cards.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the electric-blue bands and the black footer.

### Hairline & Neutral
- **Hairline** (`{colors.hairline}` — #d4d4d0): The 1px divider tone on off-white surfaces.
- **Neutral 300 / 200** (`{colors.neutral-300}` — #cccccc, `{colors.neutral-200}` — #dddddd): Lighter divider and disabled-state grays.

## Typography

### Font Family
The system runs a single typeface: **ABC Whyte** — a commercial grotesque by Dinamo — for every text role, from the 48px hero headline down to the 12px button label. There is no secondary family; the whole interface speaks in one voice and builds hierarchy through size and weight (700 for headlines and buttons, 400 for body) rather than typeface contrast.

ABC Whyte is a licensed/commercial face and cannot be shipped freely. The fallback stack walks `Hanken Grotesk, Inter, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 48px | 700 | 1.25 | 0 | Hero h1 ("Control your contracts with confidence & ease") |
| `{typography.heading-lg}` | 31.5px | 700 | 1.3 | 0 | Section heads ("Lose your headaches…") |
| `{typography.heading-md}` | 28px | 700 | 1.3 | 0 | Sub-section heads, card titles |
| `{typography.body}` | 24.5px | 400 | 1.3 | 0 | Default running-text, hero sub-headline |
| `{typography.button}` | 12.257px | 700 | 1.0 | 0 | Button labels, nav links |

### Principles
Headlines are large, bold (700), and tightly leaded — the display size at 48px dominates the hero with confidence. Body copy is unusually large (24.5px weight 400), which keeps the page feeling open and conversational rather than dense. The contrast between the big bold headline weight and the lighter, large body weight is the whole hierarchy — there is no third family to lean on.

The single dramatic jump in scale is from body (24.5px) down to the button label (12.257px / 700) — buttons read as small, tight, capsule labels against the generous surrounding type.

### Note on Font Substitutes
ABC Whyte is a commercial typeface and is not bundled here. **Hanken Grotesk** (open-source, available via Google Fonts) at weight 700 for headlines and 400 for body is the closest free approximation of its neutral-grotesque character. **Inter** at the same weights is a secondary fallback. Both preserve the size + weight signature, though the precise letterforms of ABC Whyte differ.

## Layout

### Spacing System
- **Base rhythm:** measured spacing clusters strongly around **14px** (the dominant value) and **28px** (its double), suggesting a roughly 7px/14px modular rhythm.
- **Tokens:** `{spacing.xxs}` 7px · `{spacing.xs}` 10px · `{spacing.sm}` 14px · `{spacing.md}` 21px · `{spacing.lg}` 28px · `{spacing.xl}` 35px · `{spacing.xxl}` 38px.
- **Card internal padding:** `{spacing.xl}` (35px) for content cards and compliance bands; `{spacing.lg}` (28px) for tighter blocks.
- **Button padding:** ~`{spacing.sm}` × `{spacing.lg}` (14px × 28px) — derived from the measured spacing scale (the button's own padding read as 0px because labels are flex-centered).

### Grid & Container
- **Editorial body:** Single centered column of rounded content cards stacked vertically on the off-white canvas.
- **Hero band:** Headline + sub-headline + button row on the left, doodle illustration top-right.
- **Footer:** Multi-column link list (Product / Use cases / By industry / Integrate / Resources) at desktop, collapsing on smaller widths.

### Whitespace Philosophy
The page leans on large type and generous vertical spacing between stacked rounded cards. The off-white canvas keeps the whole surface feeling warm and paper-like, and the big-radius cards float on it with clear separation. Color bands (electric blue, light blue) interrupt the rhythm to re-anchor attention.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow — color-block separation | Most content cards, accent bands, footer |
| Subtle glow | `rgb(136,136,136) 0px 0px 1px 0px` (1px soft halo) | The single measured shadow — a faint outline on an elevated chrome element |
| Color-block | Full-bleed `{colors.accent-blue}` / `{colors.accent-lightblue}` bands | Depth comes from saturated color contrast, not shadow |

The elevation philosophy is **flat with color-block contrast**. Only one faint 1px shadow was measured in the whole capture; the system relies on the off-white-vs-card and off-white-vs-saturated-band contrast to create separation rather than drop shadows.

### Decorative Depth
- Hand-drawn doodle illustrations (the sketched eye, the yellow scribble zigzag) sit on top of color bands as playful depth cues.
- The top-nav bar floats on the white surface with rounded lower corners (`{rounded.xl}`), separating it from the canvas below.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Inputs (measured ~4.375px) |
| `{rounded.sm}` | 10px | Small nested elements |
| `{rounded.md}` | 16px | Mid-size cards, image containers |
| `{rounded.lg}` | 20px | Cards |
| `{rounded.xl}` | 24px | Dominant content-card radius (most frequent) |
| `{rounded.xxl}` | 40px | Large content blocks and bands |
| `{rounded.pill}` | 999px | Pill buttons, yellow badge cards |
| `{rounded.full}` | 9999px | Fully-round CTA buttons, circular chips |

A handful of one-off radii were also measured (32px, 35px, 96px, 99px) — these appear on individual large blocks and are not part of the core scale; treat them as derived variants of `{rounded.xxl}` / `{rounded.pill}`.

### Photography & Illustration Geometry
- Video thumbnails and image cards use large rounded corners (`{rounded.xl}` / `{rounded.md}`).
- Hand-drawn doodle marks are loose vector sketches with no container radius.
- Rating badges (G2, Capterra) sit in small pill/rounded chips.

## Components

### Top Navigation

**`top-nav`** — White nav bar (`{colors.white}`) floating on the off-white canvas with rounded lower corners (`{rounded.xl}`). Carries the Contractbook wordmark + "By scrive" lockup at left, primary horizontal menu (Product, Templates, Packages, Customers, Learn) center, and a right-side cluster with "Login" text-link and a "Book demo" pill button. A utility row above holds Help Centre / Contact sales / language selector / Log in.

**`nav-link`** — Inline nav menu items, transparent background, `{colors.ink}` text, `{typography.button}` weight.

**`button-nav-pill`** — The "Book demo" button: transparent fill with a dark 1px outline, fully pill-shaped (`{rounded.pill}`), `{colors.ink}` label.

### Buttons

**`button-primary`** — The signature amber CTA ("Request a demo"). Background `{colors.primary}` (#ffba09), text `{colors.on-primary}` (#222222), type `{typography.button}`, fully pill-shaped (`{rounded.full}`). Padding ~14px × 28px (derived from the spacing scale — the measured inner padding read 0px due to flex-centered labels).

**`button-secondary`** — The outline CTA ("Start free trial"). Transparent background, `{colors.ink}` text, 1px dark outline, same pill radius and padding as primary.

### Cards & Containers

**`hero-band`** — Off-white hero (`{colors.canvas}`) holding the 48px display headline, large body sub-headline, the button row, social-proof rating badges, and a doodle illustration top-right. Rounded `{rounded.xl}`.

**`video-card`** — The product-walkthrough video block. Muted `{colors.surface-soft}` surface, rounded `{rounded.xl}`, with a centered "Play" control overlaid on the thumbnail.

**`content-card`** — Generic stacked content block. Background `{colors.surface-offwhite}` (#f9f9f6), rounded `{rounded.xxl}` (40px), padding `{spacing.xl}` (35px). Carries `{typography.heading-md}` titles and large body copy.

**`card-feature`** — Small yellow badge/feature card. Background `{colors.primary}` (#ffba09), dark text (`{colors.on-primary}`), fully pill-shaped (`{rounded.pill}`). Used for highlight chips and yellow accent moments.

**`compliance-band`** — The "Stay secure, safe and compliant" trust block. Background `{colors.accent-lightblue}` (#add3e5), rounded `{rounded.xl}`, padding `{spacing.xl}` (35px). Holds certification logos (SOC 2, GDPR, eIDAS) and an embedded `{component.button-primary}`.

**`accent-band-blue`** — Full-bleed electric-blue interruption band. Background `{colors.accent-blue}` (#1009f6), white text (`{colors.on-dark}`), holding a light-blue inner card with headline, body, and an inline video. The boldest color moment in the system.

### Inputs & Forms

**`input`** — Standard text input. Background `{colors.surface-soft}` (#f0f0ec), `{colors.ink}` text, `{typography.body}`, rounded `{rounded.xs}` (~4px — measured 4.375px). Padding ~14px × 21px.

### Footer

**`footer`** — Near-black footer (`{colors.black}` — #000000) closing the page. White text (`{colors.on-dark}`), multi-column link list (Product / Use cases / By industry / Integrate / Resources). The only fully dark surface on the page — the inversion visually closes the long scroll.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#ffba09) for the primary CTA and small highlight chips. The amber yellow is the single loudest action color — keep it scarce and intentional.
- Always pair yellow with dark text (`{colors.on-primary}` — #222222). Never white-on-yellow.
- Build the page on the warm off-white canvas (`{colors.canvas}` — #f7f7f3), not pure white. The warmth is part of the brand voice.
- Use big radii — `{rounded.xl}` (24px) for content cards, `{rounded.full}` for buttons. The generous rounding keeps the tone friendly.
- Use full-bleed `{colors.accent-blue}` bands to interrupt the scroll and re-anchor attention — but sparingly.
- Keep hierarchy in ABC Whyte (Hanken Grotesk / Inter substitute) via size + weight, since there is no second family.
- End the page with the near-black footer.

### Don't
- Don't introduce a second typeface — the system is single-family by design.
- Don't put white text on the yellow CTA — contrast and brand both break.
- Don't use the electric blue (`{colors.accent-blue}`) on buttons or large body backgrounds; it's reserved for full-bleed interruption bands.
- Don't reach for heavy drop shadows — the system is flat and relies on color-block and rounded-card contrast for depth.
- Don't use tight radii on cards; the warm, friendly tone depends on the large `{rounded.xl}` / `{rounded.xxl}` rounding.
- Don't add hover-state styling beyond default + pressed.

## Responsive Behavior

### Breakpoints

The capture includes a desktop and a narrow/long mobile composition; precise breakpoint widths were not measured. Inferred behavior:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to a compact bar; hero headline scales down; stacked content cards run full-width; footer columns stack |
| Tablet | 768–1024px | Nav tightens; cards remain single-column or 2-up |
| Desktop | > 1024px | Full horizontal nav; hero headline at 48px display; doodle illustration sits top-right of hero |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` are pill-shaped with ~14px × 28px padding — comfortably above minimum tap size.
- `{component.button-nav-pill}` ("Book demo") sits in the nav with adequate padding.
- Exact pixel touch-target dimensions were not measured — see Known Gaps.

### Collapsing Strategy
- Stacked content cards reduce to full-width single column on mobile.
- The hero's headline + sub-headline + button row stack vertically; the doodle illustration shrinks or drops.
- Full-bleed accent bands remain full-width at every breakpoint.
- Footer link columns collapse from multi-column to stacked.

### Image Behavior
- Video and image cards retain rounded corners and scale proportionally.
- Doodle illustrations are vector sketches and scale freely.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.content-card}`, `{component.button-primary}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep all type in ABC Whyte (Hanken Grotesk / Inter substitute) — hierarchy is size + weight, not family.
6. The yellow CTA and electric-blue band are the two voltage moments; don't dilute them by spreading those colors across many elements.
7. When in doubt about emphasis: bigger ABC Whyte before introducing a new color.

## Known Gaps

- ABC Whyte is a licensed commercial typeface (Dinamo); it was not flagged in `fonts_licensed` but cannot be shipped freely — an open-source substitute (Hanken Grotesk / Inter) is documented in the Typography section. Exact weights beyond 400 and 700 were not measured.
- Smaller type roles (nav links, captions, fine-print) were not individually measured; `{typography.button}` (12.257px / 700) is used as the nearest measured small-text role and may not match all small-text instances.
- The primary button's internal padding read as 0px (flex-centered labels), so button padding (14px × 28px) is **derived** from the measured spacing scale rather than directly captured.
- The button-primary background color (#ffba09) is inferred from the measured card background and screenshot ground-truth; only the button text color (#222222) was directly measured on the button element.
- Only one box-shadow was captured (`rgb(136,136,136) 0px 0px 1px 0px`); the full elevation system (if any cards carry shadows) is otherwise undocumented.
- Several one-off radii (32px, 35px, 96px, 99px) were measured but not mapped to core tokens; they're treated as derived variants of `{rounded.xxl}` / `{rounded.pill}`.
- Responsive breakpoint widths and touch-target pixel dimensions were not measured; the responsive table is inferred from the captured desktop and long-scroll compositions.
- Form validation, focus, disabled, and active/pressed component states were not extracted — they would require interacting with the demo/sign-up flow.
- Animation and transition timings (video play, accent-band reveals, doodle motion) are not in scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/contractbook/design-md -->
