---
version: alpha
name: AuthKit-design-analysis
description: A dark, cinematic developer-auth interface built on a near-black canvas (#05060f) with cool blue-periwinkle glows and a luminous glass login box as the hero artifact. The system reads as premium dev-tooling — spotlit headline wordmark, layered translucent auth cards with soft blue inset borders, and a restrained near-monochrome blue palette where color appears almost entirely as glow and light rather than fills. Brand voltage comes from the giant gradient "AuthKit" wordmark and the floating product login boxes lit from above.
colors:
  ink: "#ffffff"
  canvas: "#05060f"
  neutral-black: "#000000"
  primary: "#bad6f7"
  on-primary: "#ffffff"
  accent-periwinkle: "#c7d3ea"
  accent-periwinkle-soft: "#c8d4ea"
  accent-sky: "#d1e4fa"
  accent-ice: "#d8ecf8"
  accent-blue: "#bacff7"
  accent-blue-soft: "#bbd0f7"
  accent-blue-mid: "#bbd7f7"
  accent-blue-deep: "#98c0ef"
  accent-blue-bright: "#8ebbff"
  accent-blue-pale: "#bedefc"
  accent-blue-alt: "#bad7f7"
  accent-violet: "#b3b3ff"
  accent-mint: "#c9ffd5"
  accent-cyan: "#caf1fd"
  accent-magenta: "#ed98ef"
  accent-peach: "#fde9ca"
typography:
  display:
    fontFamily: "Aeonik Pro, Inter, sans-serif"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.159
    letterSpacing: normal
  body:
    fontFamily: "Untitled Sans, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: normal
  button:
    fontFamily: "Untitled Sans, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2.571
    letterSpacing: normal
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  xl: 12px
  xxl: 16px
  pill: 999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px
  nav-button:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  login-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
  input:
    backgroundColor: "{colors.accent-periwinkle}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
  social-button:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
---

## Overview

AuthKit (a WorkOS + Radix product) is a dark, cinematic developer-tooling marketing surface. The entire page sits on `{colors.canvas}` (#05060f) — a near-black, slightly blue-tinted floor — with white text (`{colors.ink}` — #ffffff) and a cool periwinkle-blue accent family that appears almost entirely as **glow and light** rather than as solid fills.

The hero is a giant spotlit "AuthKit" wordmark lit from a single overhead source, with three floating translucent login boxes layered beneath it. The product — a customizable login box — is shown directly as the hero artifact rather than illustrated. This is the system's central voltage move: the product chrome IS the marketing imagery.

Type runs on two licensed faces: **Aeonik Pro** (the geometric display face used for section headlines at weight 500) and **Untitled Sans** (body + UI labels). Both are documented with open-source substitutes (Inter) below. Headlines are calm and mid-weight (500), never heavy — the drama comes from lighting and glow, not type weight.

The accent palette is a near-monochrome blue: from `{colors.accent-periwinkle}` (#c7d3ea) through `{colors.accent-blue-bright}` (#8ebbff) to the primary CTA `{colors.primary}` (#bad6f7). A small set of secondary accents (`{colors.accent-violet}`, `{colors.accent-mint}`, `{colors.accent-cyan}`, `{colors.accent-magenta}`, `{colors.accent-peach}`) appears only inside the in-product color-swatch customizer — never on the marketing surface itself.

**Key Characteristics:**
- Near-black blue-tinted canvas (`{colors.canvas}` — #05060f) with white ink. The whole system is dark-mode-first.
- A near-monochrome blue accent family used primarily as glow, soft inset borders, and gradient light — rarely as solid fill.
- Glass/translucent login cards lit from above with soft blue inset borders and outer glows (e.g. `rgba(186, 207, 247, 0.32) 0px 0px 6px`).
- Pill-shaped primary CTA (`{rounded.pill}` — 999px) in pale blue `{colors.primary}` (#bad6f7) with white label.
- Mid-weight display type (Aeonik Pro 500) — calm, geometric, never bold.
- The product login box shown directly as the hero artifact and again inside the customization demo.
- Tight micro-radius (`{rounded.xs}` — 2px is the most frequent radius by far) on small UI fragments, scaling up to `{rounded.xxl}` (16px) on the larger login cards.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #bad6f7): The pale-blue primary CTA fill (measured from `button.background`). Carries white text. This is the one place blue becomes a solid fill on the marketing surface.
- **Blue accent family** — A near-monochrome cool-blue set used for glows, gradient wordmark fills, inset borders, and link tones: `{colors.accent-periwinkle}` (#c7d3ea), `{colors.accent-periwinkle-soft}` (#c8d4ea), `{colors.accent-sky}` (#d1e4fa), `{colors.accent-ice}` (#d8ecf8), `{colors.accent-blue}` (#bacff7), `{colors.accent-blue-soft}` (#bbd0f7), `{colors.accent-blue-mid}` (#bbd7f7), `{colors.accent-blue-deep}` (#98c0ef), `{colors.accent-blue-bright}` (#8ebbff), `{colors.accent-blue-pale}` (#bedefc), `{colors.accent-blue-alt}` (#bad7f7). These are the colors that build the spotlit "AuthKit" gradient and the card glows.
- **Customizer accents** — `{colors.accent-violet}` (#b3b3ff), `{colors.accent-mint}` (#c9ffd5), `{colors.accent-cyan}` (#caf1fd), `{colors.accent-magenta}` (#ed98ef), `{colors.accent-peach}` (#fde9ca): low-frequency accents that appear only inside the in-product "Colour" swatch picker in the customization demo. Not used on the marketing chrome.

### Surface
- **Canvas** (`{colors.canvas}` — #05060f): The page floor — a near-black with a faint blue cast. The only background of the marketing page.
- **Neutral Black** (`{colors.neutral-black}` — #000000): Pure black, used in small UI fills and deep shadows.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All headlines, body copy, and primary labels. White-on-near-black is the universal text relationship. Measured as the max-contrast color against canvas.

The system has no measured mid-gray body tone — secondary/muted text in the screenshots appears to be white at reduced opacity rather than a distinct hex. See Known Gaps.

## Typography

### Font Family
Two licensed faces drive the system:
- **Aeonik Pro** — a geometric grotesque used for display headlines (h3, measured at 44px / weight 500). It carries the calm, precise dev-tooling voice.
- **Untitled Sans** — used for body copy and UI/button labels.

Both are commercial licensed typefaces. The shipped substitute for both is **Inter** (Untitled Sans is explicitly flagged with Inter as substitute; Aeonik Pro is also licensed and should fall back to Inter). Use Inter weight 500 to approximate Aeonik Pro display headlines and Inter for body/buttons.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display}` | Aeonik Pro → Inter | 44px | 500 | 1.159 | normal | Section headlines ("Your users. Your data.", "Your brand. Your style.") |
| `{typography.body}` | Untitled Sans → Inter | 16px | 500 | 1.5 | normal | Body copy, sub-headlines, form labels |
| `{typography.button}` | Untitled Sans → Inter | 14px | 400 | 2.571 | normal | Button and CTA labels |

### Principles
Display type stays at weight 500 — mid-weight, never bold. The hero's visual drama comes from the spotlit gradient wordmark and overhead lighting, not from heavy type. Body and labels run on Untitled Sans (Inter substitute). The button line-height of 2.571 reflects buttons whose vertical rhythm is carried by line-height rather than measured padding (see Components / Known Gaps).

### Note on Font Substitutes
Both Aeonik Pro and Untitled Sans are licensed and are NOT shipped. Use **Inter** as the open-source substitute for both. Inter at weight 500 is a reasonable stand-in for Aeonik Pro's mid-weight geometric display; Inter at 400–500 covers body and UI labels. The giant hero "AuthKit" wordmark was not measured — its exact face, size, and gradient are documented as a gap.

## Layout

### Spacing System
- **Base unit:** small, with strong clustering at 8px and 16px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px.
- **Most frequent steps:** 16px (31 occurrences) and 8px (26) are the workhorses for internal padding and gaps; 6px and 10px handle tight UI spacing.

### Grid & Container
- Centered single-column editorial flow on the dark canvas.
- The hero stacks a centered wordmark over three overlapping login cards (center card foregrounded).
- Lower bands (feature icon row, "Extensible by design" diagram, "Your brand. Your style." customizer) are centered full-width blocks with a single headline + supporting artifact.

### Whitespace Philosophy
Generous vertical breathing room with dark negative space doing most of the layout work. The near-black canvas and spotlight lighting make whitespace read as depth rather than emptiness — content emerges from darkness rather than sitting in clearly-bounded sections.

## Elevation & Depth

The system's depth model is **glow-based**, not shadow-based. Measured box-shadows are almost all colored blue/periwinkle glows and inset borders rather than dark drop shadows:

| Treatment | Measured Value | Use |
|---|---|---|
| Soft blue glow | `rgba(186, 207, 247, 0.32) 0px 0px 6px 0px` | Card and button outer glow |
| Bright blue glow | `rgba(186, 207, 247, 0.72) 0px 0px 12px 0px, rgba(186, 214, 247, 0.06) 0px 1px 0.5px 0px inset` | Active/focused emphasis glow |
| Blue inset hairline | `rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset` | Translucent card borders |
| Faint inset hairline | `rgba(186, 214, 247, 0.06) 0px 0px 0px 1px inset` | Subtle card edge |
| Inner ambient glow | `rgba(199, 211, 234, 0.12) -0.5px 0.5px 1px 0px inset, rgba(186, 215, 247, 0.08) 0px 0px 96px 0px inset` | Large soft interior light inside login cards |
| Magenta/pink glow | `rgba(237, 152, 239, 0.32) 0px 0px 12px 0px` · `rgba(238, 186, 247, 0.24) 0px 0px 12px 0px` | Accent glow on select decorative elements |
| Animated inset (off→on) | `rgba(199, 211, 234, 0) 0px -6px 12px 0px inset, rgba(199, 211, 234, 0) 0px 1px 1px 0px inset` | Transition/zero-state inset glow |

The depth philosophy: cards are **lit from within and outlined with translucent blue hairlines**, then surrounded by soft outer glows. There are no opaque dark drop shadows — depth is created by light, not by cast shadow. This produces the "glass floating in space" quality of the hero login boxes.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | The dominant micro-radius (most frequent) — small UI fragments, swatch chips, fine controls |
| `{rounded.sm}` | 4px | Inputs (`{component.input}`) |
| `{rounded.md}` | 6px | Small buttons, list items |
| `{rounded.lg}` | 10px | Mid-size cards and tiles |
| `{rounded.xl}` | 12px | Cards |
| `{rounded.xxl}` | 16px | Large login cards (`{component.login-card}`) |
| `{rounded.pill}` | 999px | Primary CTA, nav buttons, social-login buttons |
| `{rounded.full}` | 9999px | Fully-round elements (avatar/icon circles) |

### Geometry
Small UI elements stay tight (2px) while the larger floating login cards round to 16px. Buttons are fully pill-shaped (999px). Logo and icon marks in the feature row and circuit-board diagram are circular/rounded-square tiles.

## Components

### Buttons

**`button-primary`** — The primary CTA. Background `{colors.primary}` (#bad6f7), text `{colors.on-primary}` (#ffffff), type `{typography.button}` (14px / 400), rounded `{rounded.pill}` (999px). Measured padding is `0px` — the button relies on line-height (2.571) and explicit sizing for its tap area rather than padding (see Known Gaps).

**`nav-button`** — The top-right "Get started" pill in the header. Transparent/outlined on the dark canvas, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.pill}`.

**`social-button`** — "Continue with Google" / "Continue with Microsoft" buttons inside the login card. Transparent fill on the card surface, `{colors.ink}` text, type `{typography.button}`, rounded `{rounded.pill}`, with a leading provider glyph.

### Cards & Containers

**`login-card`** — The hero artifact: a translucent "Sign in to SuperApp" login box floating on the canvas. Background reads as a translucent layer over `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.xxl}` (16px), outlined with a blue inset hairline (`rgba(186, 215, 247, 0.12) inset`) and lit by an inner ambient glow plus a soft outer glow. Contains an icon mark, an "Email" label + input, a primary "Continue" action, an "OR" divider, and social-login buttons. The same card recurs in the customization demo with editable color/radius/logo controls.

**`card`** — Generic content card (measured: rounded `{rounded.xs}` / 2px, no shadow). Used for small content tiles; the measured radius is the tight micro-radius the system favors on small fragments. Note the visible login cards use larger radii — see Known Gaps for the radius discrepancy.

### Inputs & Forms

**`input`** — Email/password fields inside the login card. Background `{colors.accent-periwinkle}` (#c7d3ea, measured), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.sm}` (4px). On the dark card these read as low-luminance translucent fields; the measured fill is the periwinkle accent.

## Do's and Don'ts

### Do
- Keep the canvas near-black (`{colors.canvas}` — #05060f). The system is dark-mode-first; white surfaces are off-brand.
- Build depth with blue glows and translucent inset hairlines, not dark drop shadows.
- Use the pale-blue `{colors.primary}` (#bad6f7) pill as the single primary action color.
- Keep display headlines mid-weight (Aeonik Pro / Inter 500). Let lighting carry the drama, not type weight.
- Show the actual login box as the hero artifact — the product is the imagery.
- Reserve the multi-hue customizer accents (`{colors.accent-violet}`, `{colors.accent-mint}`, `{colors.accent-cyan}`, `{colors.accent-magenta}`, `{colors.accent-peach}`) for the in-product color picker only.
- Use pill radius (`{rounded.pill}`) for all marketing CTAs and tight 2px (`{rounded.xs}`) for small UI fragments.

### Don't
- Don't fill large areas with the blue accents — they belong as glow, light, and hairline, not as solid panels.
- Don't bold display type beyond 500.
- Don't introduce a light-canvas section; the page stays dark throughout.
- Don't add opaque black drop shadows — they break the lit-from-within glass aesthetic.
- Don't scatter the warm/multi-hue accents onto marketing chrome; they read as product-config swatches, not brand color.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

No responsive breakpoints, touch-target sizes, or reflow rules were measured (single landing page captured at desktop width). The following is the inferred intent from the captured layout — treat as derived, not measured:

- The centered single-column editorial flow should collapse gracefully to a narrower column on mobile.
- The three overlapping hero login cards (derived) would likely reduce to the single foreground "Sign in to SuperApp" card on small screens.
- Pill buttons and inputs should retain `{rounded.pill}` / `{rounded.sm}` at all widths.
- The feature icon row ("Single Sign-On / Password / Multi-Factor Auth / Social Login / Role-Based Access Control / Magic Auth") would wrap to multiple rows on narrow viewports.

Confirm all responsive behavior against additional captured breakpoints before implementing.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.login-card}`, `{component.button-primary}`).
2. Variants of an existing component live as separate entries in `components:` (e.g. `-active`, `-disabled`).
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Depth is glow, not shadow — when adding elevation, reach for the measured blue glow/inset values in Elevation & Depth.
6. The canvas stays near-black; primary action stays pale-blue pill. Don't drift toward light surfaces or saturated fills.
7. When in doubt about emphasis: brighter glow before heavier type.

## Known Gaps

- The giant hero "AuthKit" wordmark — its typeface, size, weight, and gradient fill — was not measured. Only the h3 display role (44px Aeonik Pro 500) was captured; the wordmark is documented as a gap.
- Both shipped display and body faces (Aeonik Pro, Untitled Sans) are licensed; only Untitled Sans carried an explicit substitute flag (Inter). Aeonik Pro substitution (Inter 500) is derived and approximate.
- No mid-gray/muted text tone was measured — secondary copy in screenshots appears to be white at reduced opacity rather than a distinct hex. The exact muted value is unknown.
- `{component.button-primary}` measured `padding: 0px`, which is implausible for the rendered pill — the real tap area is likely created by sizing/line-height. Exact button padding/height needs re-measurement.
- The generic `{component.card}` measured `radius: 0px → 2px` with `shadow: none`, which conflicts with the visibly rounded (≈16px), glowing login cards. The login-card radius/treatment is documented from screenshot ground-truth; the flat card token reflects a different (smaller) element.
- Only the landing page was captured; the "Light and dark modes supported" toggle implies a full light theme that was not measured.
- Animation/transition timings (the spotlight reveal, card glow transitions, customizer interactions) are out of scope.
- Responsive breakpoints, container max-widths, and touch-target sizes were not measured.
- Many accent hexes are near-duplicate blues (e.g. #bacff7 / #bbd0f7 / #bad7f7) captured at low frequency; they may collapse into fewer canonical tokens with cleaner extraction.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/authkit/design-md -->
