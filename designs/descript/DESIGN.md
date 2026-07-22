---
version: alpha
name: Descript-design-analysis
description: "A warm, editorial marketing surface for an AI video editor — built on a soft blush canvas (#fff7fa) with deep-maroon hero bands (#390a1a), a large Brett serif display voice, Booton geometric-sans body copy, and a single hot-red primary CTA (#f73b3b). The system reads as confident-creative-software: warm off-white surfaces, product-UI mockups shown in-card, small tracked red eyebrow labels, and near-square 4px card corners rather than heavy rounding."
colors:
  primary: "#f73b3b"
  primary-soft: "#ff5340"
  ink: "#1a1a1a"
  body: "#26171d"
  canvas: "#fff7fa"
  surface-dark: "#390a1a"
  surface-warm: "#fff8f4"
  surface-warm-alt: "#faf8f7"
  surface-muted: "#f1eaed"
  accent-blue: "#0085ff"
  hairline: "#d1c7cb"
  hairline-soft: "#c4b5bb"
  muted: "#8b6f7a"
  muted-strong: "#583f4a"
  on-primary: "#ffffff"
  on-dark: "#fff8f4"
  white: "#ffffff"
  black: "#000000"
  neutral-100: "#f2f2f2"
  neutral-300: "#cccccc"
  neutral-600: "#4d4d4d"
  neutral-700: "#343434"

typography:
  display:
    fontFamily: "Brett, Georgia, serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.04em
  heading:
    fontFamily: "Brett, Georgia, serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  title:
    fontFamily: "Booton, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "Booton, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px

components:
  top-nav:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-signup-pill:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  eyebrow-label:
    backgroundColor: transparent
    textColor: "{colors.primary-soft}"
    typography: "{typography.display}"
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading}"
  dark-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading}"
  feature-card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  product-mockup-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    shadow: "rgba(0,0,0,0.16) 0px 2px 4px 0px"
  testimonial-card:
    backgroundColor: "{colors.surface-warm-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  badge-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
---

## Overview

Descript's marketing surface is a warm, editorial software page — a soft blush canvas (`{colors.canvas}` — #fff7fa) punctuated by deep-maroon full-bleed bands (`{colors.surface-dark}` — #390a1a) and anchored by a single hot-red primary CTA (`{colors.primary}` — #f73b3b). The tone is confident-creative-tool: it uses a large **Brett** serif for headlines against **Booton** geometric-sans body copy, and it shows the actual Descript editor UI as in-card artifacts rather than illustrating around the product.

The color story alternates between warmth and depth. The hero opens on the deep maroon band with a cream serif headline, then the page drops onto blush and warm-white surfaces (`{colors.surface-warm}` — #fff8f4, `{colors.surface-warm-alt}` — #faf8f7) for feature and use-case cards, and returns to maroon dark-bands ("Work smarter. Finish faster." / "Whatever your business needs") to re-establish rhythm. Red appears only as accent — the primary CTA, the tracked eyebrow labels (`{colors.primary-soft}` — #ff5340), and small interface highlights.

Type voice splits cleanly into two families: **Brett** (a serif display face, used for headlines and eyebrow labels — warm, editorial, slightly literary) and **Booton** (a geometric sans, weight 600, used for body copy, UI labels, and buttons). The eyebrow labels ("AI VIDEO EDITOR", "TRANSCRIPTION EDITOR", "BEST AI TOOLS") are uppercase, tracked (letterSpacing 0.04em, measured), and rendered in the soft red.

**Key Characteristics:**
- Warm blush canvas (`{colors.canvas}` — #fff7fa) rather than pure white — the whole system reads warm, never clinical.
- Deep-maroon full-bleed bands (`{colors.surface-dark}` — #390a1a) frame the hero and recurring feature sections; cream text sits on top.
- Single hot-red primary CTA (`{colors.primary}` — #f73b3b) — the only saturated action color in the system.
- Brett serif headlines paired with Booton geometric-sans body — an editorial/utility split.
- Near-square card corners: `{rounded.sm}` (4px) is the dominant radius (measured 60×), with `{rounded.lg}` (12px) on larger content and mockup cards.
- Product UI fragments (the transcript editor, timeline, Underlord AI chat) shown directly in-card.
- Soft single drop shadow (`rgba(0,0,0,0.16) 0px 2px 4px`) reserved for floating product-mockup cards.
- Tracked red uppercase eyebrow labels above every section headline.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #f73b3b): The signature hot-red CTA color — "Get started for free", "Get started" buttons. The only saturated fill in the system.
- **Primary Soft** (`{colors.primary-soft}` — #ff5340): The slightly lighter red used on tracked uppercase eyebrow labels and low-contrast section headers (measured as the low-contrast h2 color).
- **Accent Blue** (`{colors.accent-blue}` — #0085ff): A rarely-used interface accent — appears inside product-UI mockups (e.g., the Underlord send button). Never used on marketing CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #fff7fa): The default page floor — a warm blush off-white.
- **Surface Dark** (`{colors.surface-dark}` — #390a1a): The deep-maroon full-bleed band background — the hero and recurring feature sections.
- **Surface Warm** (`{colors.surface-warm}` — #fff8f4): Feature-card fills and warm section blocks.
- **Surface Warm Alt** (`{colors.surface-warm-alt}` — #faf8f7): Testimonial cards and alternate warm surfaces.
- **Surface Muted** (`{colors.surface-muted}` — #f1eaed): A muted rose surface used for the nav "Sign up" pill and low-emphasis chips.
- **White** (`{colors.white}` — #ffffff): Product-mockup card backgrounds — the actual editor UI is shown on true white to distinguish it from the warm marketing surfaces.
- **Black** (`{colors.black}` — #000000): Used inside product-UI fragments (video canvas, timeline chrome).

### Text
- **Ink** (`{colors.ink}` — #1a1a1a): Primary text and headlines on light surfaces.
- **Body** (`{colors.body}` — #26171d): Running paragraph text (measured `p.color`) — a warm near-black.
- **Muted** (`{colors.muted}` — #8b6f7a): Secondary text — a dusty mauve for captions and supporting copy.
- **Muted Strong** (`{colors.muted-strong}` — #583f4a): Slightly darker mauve for secondary text on light surfaces.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the red CTA.
- **On Dark** (`{colors.on-dark}` — #fff8f4): Cream text on the maroon bands.

### Neutral Scale
- `{colors.neutral-100}` (#f2f2f2), `{colors.neutral-300}` (#cccccc), `{colors.neutral-600}` (#4d4d4d), `{colors.neutral-700}` (#343434) — grays measured inside product-UI chrome and dividers.
- `{colors.hairline}` (#d1c7cb) / `{colors.hairline-soft}` (#c4b5bb): Warm rose hairline tones for borders and outlined chips.

## Typography

### Font Family
The system runs two custom webfonts: **Brett** (a serif display face — headlines, hero copy, and tracked eyebrow labels) and **Booton** (a geometric sans — body, UI labels, buttons). Both were served under hashed font names (`__brett_006a88`, `__booton_10e94d`) — they are custom/licensed faces and are not distributable, so open-source substitutes are documented below.

The split is functional:
- Brett (serif, 400 weight) — hero headlines, section headlines, eyebrow labels
- Booton (geometric sans, 600 weight) — body copy, card titles, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 18px | 400 | 1.0 | 0.04em | Tracked uppercase eyebrow labels — Brett serif (measured `h1`) |
| `{typography.heading}` | 18px | 400 | 1.0 | 0 | Section headlines — Brett serif (measured `h2`) |
| `{typography.title}` | 20px | 600 | 1.5 | 0 | Card titles, feature labels — Booton |
| `{typography.body}` | 16px | 600 | 1.5 | 0 | Body copy, buttons, nav — Booton |

> Note: the measured display/heading sizes (18px) reflect the values the analyzer resolved for the `h1`/`h2` nodes at capture time. The large serif hero headline ("AI-editing for every kind of video") visibly renders far larger in the reference screenshots; that display size was **not** reliably measured and is recorded in Known Gaps rather than guessed.

### Principles
Brett serif carries the brand's editorial warmth — headlines and eyebrow labels both use it. Booton (weight 600) carries everything utilitarian. The boundary is strict: serif for expressive headlines, geometric sans for functional copy. The eyebrow labels are the one place the serif goes uppercase and tracked (0.04em) in the soft red.

### Note on Font Substitutes
Neither Brett nor Booton ships as an open web font.
- **Brett** (serif display): substitute with a warm transitional serif — **Fraunces** (opsz-variable, weight 400) or **Georgia** as a system fallback preserves the editorial tone.
- **Booton** (geometric sans): substitute with **Inter** or **Poppins** at weight 600 — both preserve the geometric-utility character used for body and UI copy.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 28px.
- **Most frequent measured steps:** 24px (55×) and 28px (32×) dominate the layout rhythm — these are the primary block/gap sizes. 8px (30×), 16px (29×), and 12px (26×) handle intra-component spacing.
- **Card internal padding:** clusters around `{spacing.lg}` (24px) / `{spacing.xl}` (28px).

### Grid & Container
- **Feature card grids:** 3-up at desktop (the "Less work, more flow" band), 4-up at desktop for the maroon tool band ("Work smarter. Finish faster.").
- **Use-case grids:** 3-up cards ("One video editor for all this"), 4-up image tiles ("Whatever your business needs").
- **Testimonial grid:** multi-column quote cards under "Don't just take our word for it".
- **Hero:** centered single-column headline + CTA, with product-mockup cards floating below.

### Whitespace Philosophy
The page uses generous vertical spacing between full-bleed bands, alternating warm-light and deep-maroon surfaces to pace the long scroll. Card grids sit inside warm blocks with 24–28px gutters. The rhythm reads as confident editorial software — roomy but not sparse.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Warm section bands, maroon bands, feature cards |
| Soft drop shadow | `rgba(0,0,0,0.16) 0px 2px 4px 0px` (measured) | Floating product-mockup cards (Underlord chat card, transcript editor card) |
| Color-block band | Full-bleed `{colors.surface-dark}` maroon | Hero + recurring feature bands — contrast, not shadow, does the depth work |

The elevation philosophy is **mostly flat with a single soft shadow**. Depth on this page comes primarily from surface-color contrast (blush vs. maroon vs. white product cards) rather than from stacked shadows. The one measured shadow is low and soft — reserved for the floating product-UI cards that overlap the hero.

### Decorative Depth
- Product-UI mockup cards (the editor timeline, Underlord AI chat) overlap each other and the hero band, using the soft shadow to lift off the maroon backdrop.
- Photographic tiles in the "business needs" band sit flush in a tight grid with no shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 4px | The dominant radius (measured 60×) — cards, chips, most containers |
| `{rounded.md}` | 8px | Buttons and mid-size UI elements |
| `{rounded.lg}` | 12px | Larger content cards and product-mockup cards (measured 30×) |
| `{rounded.pill}` | 100px | Pill buttons and outlined tag chips |
| `{rounded.full}` | 9999px | Fully-round elements (avatars, circular controls) |

The shape language is restrained — 4px is by far the most common corner, giving the system a crisp, near-square, editorial feel rather than the soft consumer-app rounding.

### Photography Geometry
Photographic tiles (the "business needs" grid) and use-case cards use `{rounded.lg}` (12px) corners. Product-UI fragments retain their native chrome radii. Avatars/circular controls use `{rounded.full}`.

## Components

### Top Navigation

**`top-nav`** — Warm-white nav bar pinned to the top of every page. Background `{colors.surface-warm}` (#fff8f4), text `{colors.ink}`, type `{typography.body}` (Booton 600). Carries the red Descript wordmark + icon at left, a horizontal menu (Features, Underlord, Solutions, Resources, Pricing) center, and a right cluster with "Contact sales", "Sign in" text-links plus the **`button-signup-pill`**. The bar has rounded lower corners (`{rounded.lg}`) where it meets the maroon hero.

**`nav-link`** — Inline menu item, transparent background, `{colors.ink}` text, `{typography.body}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#f73b3b), text `{colors.on-primary}`, type `{typography.body}` (Booton 600), rounded `{rounded.md}` (8px, derived — the analyzer returned a 0px radius for the button node, but the reference screenshots show a clearly rounded rectangle so the token is set from screenshot ground-truth). Padding ~16px × 24px (derived from measured spacing steps). Used for "Get started for free" / "Get started".

**`button-signup-pill`** — The nav "Sign up" button. Background `{colors.surface-muted}` (#f1eaed rose), text `{colors.ink}`, rounded `{rounded.pill}` (100px). A muted, low-voltage pill that defers to the red primary CTA elsewhere on the page.

### Labels

**`eyebrow-label`** — The tracked uppercase section label ("AI VIDEO EDITOR", "TRANSCRIPTION EDITOR", "BEST AI TOOLS"). Transparent background, text `{colors.primary-soft}` (#ff5340), type `{typography.display}` (Brett serif, 0.04em tracking). Sits directly above each section headline.

### Bands & Cards

**`hero-band`** — Full-bleed deep-maroon band. Background `{colors.surface-dark}` (#390a1a), text `{colors.on-dark}` (cream), headline in `{typography.heading}` (Brett serif). Carries eyebrow label + serif headline + supporting `{typography.body}` copy + `{component.button-primary}`, centered, with product-mockup cards floating below.

**`dark-band`** — The recurring maroon feature bands ("Work smarter. Finish faster. Create more.", "Whatever your business needs"). Same surface + text tokens as the hero, hosting card grids of product tiles.

**`feature-card`** — Cards in the "Less work, more flow" 3-up grid. Background `{colors.surface-warm}` (#fff8f4), text `{colors.ink}`, title in `{typography.title}` (Booton 600 / 20px), rounded `{rounded.lg}` (12px). Carries a product-UI thumbnail, a title, and a `{typography.body}` description.

**`card`** — Generic small container (measured radius 4px). Background `{colors.surface-warm}`, text `{colors.ink}`, rounded `{rounded.sm}` (4px), no shadow.

**`product-mockup-card`** — The floating editor-UI cards (transcript editor, Underlord AI chat). Background `{colors.white}` (true white to distinguish product chrome from warm marketing surfaces), text `{colors.ink}`, rounded `{rounded.lg}` (12px), with the measured soft shadow `rgba(0,0,0,0.16) 0px 2px 4px 0px`. These show the actual Descript product UI at small scale.

**`testimonial-card`** — Quote cards in "Don't just take our word for it". Background `{colors.surface-warm-alt}` (#faf8f7), text `{colors.ink}`, quote in `{typography.body}`, rounded `{rounded.lg}`.

**`badge-pill`** — Outlined category chips ("Video Editing", "AI Video Generators", "Text to Speech"). Transparent background, `{colors.ink}` text, `{typography.body}`, rounded `{rounded.pill}` (100px), thin `{colors.hairline}` border.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#f73b3b) for the single primary CTA. It is the only saturated fill in the system.
- Alternate warm-light bands and deep-maroon `{colors.surface-dark}` bands to pace the long scroll — the maroon band is the recurring structural rhythm.
- Use Brett serif for headlines and eyebrow labels; use Booton (600) for all body and UI copy. Keep the split strict.
- Set eyebrow labels in `{colors.primary-soft}`, uppercase, tracked (0.04em). They precede every section headline.
- Show real product UI inside `{component.product-mockup-card}` on true white — the white surface signals "this is the actual editor".
- Keep card corners crisp — `{rounded.sm}` (4px) is the house radius; reserve `{rounded.lg}` (12px) for larger content/mockup cards.
- Use the single soft shadow only on floating product-mockup cards; keep everything else flat.

### Don't
- Don't use `{colors.accent-blue}` on marketing CTAs — it lives inside product UI only.
- Don't put warm-marketing surfaces behind product-UI mockups; those go on `{colors.white}` to read as real chrome.
- Don't round buttons into full pills except the nav "Sign up" — the primary CTA is a modest 8px rectangle.
- Don't add extra dark surfaces beyond the maroon band family; the depth comes from color-block contrast, not stacked shadows.
- Don't set body or UI copy in Brett serif, and don't set headlines in Booton.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

### Breakpoints
Exact breakpoints were not measured. From the captured landing / product-demo / pricing pages, the following behavior is inferred:

| Name | Width | Key Changes (inferred) |
|---|---|---|
| Mobile | < 768px | Nav collapses to a menu control; hero headline stacks and scales down; card grids collapse to 1-up; product-mockup cards stack vertically |
| Tablet | 768–1024px | Feature grids 2-up; maroon tool band 2-up; nav tightens |
| Desktop | 1024–1440px | Full horizontal nav; 3-up feature grids; 4-up maroon tool/image grids |
| Wide | > 1440px | Same as desktop with more outer margin; centered max-width content |

### Touch Targets
- `{component.button-primary}` and `{component.button-signup-pill}` carry ~12–16px vertical padding — adequate tap area at the measured spacing steps.
- Nav links sit in the warm-white bar with generous horizontal spacing.

### Collapsing Strategy
- The alternating warm/maroon bands stack in order on mobile; the maroon band remains the recurring visual break.
- Feature and use-case grids reduce columns (3→2→1) rather than shrinking cards below legibility.
- Floating product-mockup cards, which overlap on desktop, are expected to stack cleanly on narrow viewports.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.product-mockup-card}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Brett serif; body/UI stays Booton 600. The two-family split does not blur.
6. Red (`{colors.primary}`) stays scarce — one primary CTA per view. The maroon band, not more red, carries emphasis.
7. When adding surfaces, prefer the existing warm/maroon/white trio; don't introduce a new dark tone.

## Known Gaps

- **Display headline sizing is unresolved.** The analyzer returned 18px for both `h1` and `h2`, but the reference screenshots clearly show a much larger serif hero headline. The true display size, line-height, and letter-spacing at hero scale were not reliably measured and are not guessed here — they should be re-measured directly from a rendered hero node.
- The `button-primary` node reported `radius: 0px` and `padding: 0px`, which contradicts the visibly rounded, padded red button in the screenshots. Button radius (`{rounded.md}`) and padding are documented as derived from screenshot ground-truth; exact values need re-measurement.
- **Custom fonts:** Brett (serif) and Booton (sans) were served under hashed names and were NOT in `fonts_licensed`, but they are non-distributable custom faces. Open-source substitutes (Fraunces / Georgia; Inter / Poppins) are documented in Typography.
- No footer tokens were captured — the footer surface, columns, and link styles are out of scope.
- Active/pressed and disabled button colors were not measured; only the default primary red is documented. No darkened press state exists in the data.
- The nav "Sign up" pill fill (`{colors.surface-muted}`) is inferred from the rose tone in screenshots; its exact measured value was not isolated as a button property.
- Semantic states (success / warning / error) and form-input styling were not present in the captured pages.
- Animation and transition timings (band reveals, mockup-card float, carousel arrows in the tool band) are not in scope.
- Pricing-page-specific components (plan tables, tier cards) were captured as a page but not resolved into distinct component tokens in the analysis.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/descript/design-md -->
