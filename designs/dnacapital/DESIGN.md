---
version: alpha
name: DNA-Capital-design-analysis
description: A dark, cinematic venture-capital landing surface built on a near-black charcoal canvas (#1f1f26) with full-white display headlines set in a light-weight condensed display face. The system reads as quiet, premium, and editorial — a single hero band over a particle/wireframe space render, minimal flat text-buttons, a thin crimson scroll rule as the only chromatic accent above the fold, and a deeper black footer that closes the long single-column scroll. Voltage comes almost entirely from typography contrast (large light-weight white display over dark) rather than from color.

colors:
  ink: "#ffffff"
  muted: "#c0c9df"
  accent: "#0000ee"
  accent-magenta: "#b51244"
  on-primary: "#000000"
  canvas: "#1f1f26"
  neutral: "#070708"

typography:
  heading-xl:
    fontFamily: "Darius, Georgia, serif"
    fontSize: 54px
    fontWeight: 300
    lineHeight: 1.34
    letterSpacing: normal
  heading-lg:
    fontFamily: "Darius, Georgia, serif"
    fontSize: 45px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: normal
  body:
    fontFamily: "Graphik, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: normal

rounded:
  none: 0px
  sm: 4px

spacing:
  xs: 8px
  sm: 22px
  md: 25px
  lg: 72px
  xl: 94px
  xxl: 126px
  huge: 245px
  section: 351px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
  hero-headline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
  body-text:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 0px
  scroll-rule:
    backgroundColor: "{colors.accent-magenta}"
    rounded: "{rounded.none}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
  footer:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"

---

## Overview

DNA Capital's landing surface is a dark, cinematic venture-capital page anchored on a near-black charcoal canvas (`{colors.canvas}` — #1f1f26). The single captured page is a hero-led, single-column long-scroll: a full-white light-weight display headline ("We empower exceptional teams and companies in healthcare and healthtech") sits left over a particle/wireframe space render that bleeds off the right and top edges. The voice is quiet, premium, and editorial — restraint over decoration.

Type carries the entire identity. Headlines use **Darius** — a light-weight (300) condensed display face — set in pure white (`{colors.ink}` — #ffffff) for maximum contrast against the dark canvas. Body and supporting copy use **Graphik** at weight 300 in a soft cool-gray (`{colors.muted}` — #c0c9df), with very open 1.8 line-height that reinforces the airy, unhurried tone.

Color is almost entirely absent above the fold. The only chromatic accent is a thin vertical crimson rule (`{colors.accent-magenta}` — #b51244) beneath the "SCROLL TO EXPLORE" label. A blue (`{colors.accent}` — #0000ee) appears in the measured palette but is used sparingly (link tone). The footer drops to an even deeper black (`{colors.neutral}` — #070708), closing the long scroll below the lighter charcoal body.

Components are minimal and flat: text-only navigation, flat text-buttons with no fill and no radius, and a thin accent rule. No shadows were measured anywhere — depth is created purely by the layered space render behind the headline.

**Key Characteristics:**
- Near-black charcoal canvas (`{colors.canvas}` — #1f1f26) with full-white display type (`{colors.ink}` — #ffffff). Maximum type-on-dark contrast.
- Light-weight (300) display typography in **Darius** — large, condensed, editorial. The headline is the hero, not an image.
- Soft cool-gray body copy (`{colors.muted}` — #c0c9df) in **Graphik** at 300 weight with open 1.8 line-height.
- Single chromatic accent above the fold: a thin crimson vertical scroll rule (`{colors.accent-magenta}` — #b51244).
- Flat, fill-less text-buttons with 0px radius and 0px padding (`{component.button-primary}`) — interaction reads as labels + thin underline rules rather than as filled chips.
- No shadows measured — depth is entirely from the layered particle/wireframe background render.
- Footer drops to a deeper black (`{colors.neutral}` — #070708) — a second, darker surface that closes the page.

## Colors

### Accent
- **Accent Crimson** (`{colors.accent-magenta}` — #b51244): The thin vertical scroll rule beneath "SCROLL TO EXPLORE" and the small underline accents under text-buttons (e.g. "APPROACH"). The single visible chromatic spark above the fold. Frequency 1 in the measured set — used as a precise highlight, not a fill.
- **Accent Blue** (`{colors.accent}` — #0000ee): Present in the palette as the link/interaction tone (frequency 43 in the measured analysis). Reserved for inline link affordances rather than surface fills.

### Surface
- **Canvas** (`{colors.canvas}` — #1f1f26): The charcoal page floor for the hero and body bands.
- **Neutral / Footer** (`{colors.neutral}` — #070708): A deeper near-black used for the footer surface — darker than the body canvas, which visually closes the long scroll.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All display headlines and high-contrast labels (nav, footer links). The dominant text color (frequency 200 in the measured set).
- **Muted** (`{colors.muted}` — #c0c9df): Body / supporting copy — a soft cool gray for paragraphs and footer text.
- **On Primary** (`{colors.on-primary}` — #000000): The measured button text color. See Components + Known Gaps — the rendered text-buttons read white against the dark canvas, so this measured value is documented but flagged.

## Typography

### Font Family
The system runs two families: **Darius** for all display headlines (h1, h2, h3) and **Graphik** for body / supporting copy. Both are commercial / custom typefaces — neither was flagged in `fonts_licensed`, but neither is a public web font, so open-source substitutes are documented below.

Darius is set at a light weight (300) — the headline reads as condensed, editorial, and airy rather than bold. Graphik is also set at 300 with a notably open 1.8 line-height, which gives the body copy a calm, premium cadence.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.heading-xl}` | Darius | 54px | 300 | 1.34 | normal | Hero h1 ("We empower exceptional teams…") |
| `{typography.heading-lg}` | Darius | 45px | 300 | 1.13 | normal | Section heads (h2 / h3 — identical measured spec) |
| `{typography.body}` | Graphik | 18px | 300 | 1.8 | normal | Body copy, supporting paragraphs, footer text |

### Principles
The hierarchy is intentionally shallow — one display weight (300) across all heading sizes, one body weight (300). Emphasis is created by size (54px vs 45px) and color contrast (white headline vs gray body), never by adding weight. The open 1.8 line-height on body copy is part of the voice: keep it generous.

### Note on Font Substitutes
- **Darius** (display) — a light-weight condensed display face. If unavailable, a light-weight high-contrast serif such as **Spectral Light** or **PT Serif** approximates the editorial, condensed character. The fallback stack here walks `Georgia, serif`.
- **Graphik** (body) — a neutral grotesque. **Inter** at weight 300 is the closest open-source substitute and is named in the fallback stack. **Work Sans** Light is another viable alternative.

The exact identity of "Darius" could not be verified against an open library — see Known Gaps.

## Layout

### Spacing System
The measured spacing values do not snap to a clean 4/8 grid; they were captured directly from computed padding/margin/gap and are preserved verbatim.
- **Tokens:** `{spacing.xs}` 8px · `{spacing.sm}` 22px · `{spacing.md}` 25px · `{spacing.lg}` 72px · `{spacing.xl}` 94px · `{spacing.xxl}` 126px · `{spacing.huge}` 245px · `{spacing.section}` 351px.
- **Micro spacing:** `{spacing.xs}` (8px), `{spacing.sm}` (22px), `{spacing.md}` (25px) handle inline label gaps and small stacks.
- **Band spacing:** the large tokens (`{spacing.huge}` 245px, `{spacing.section}` 351px) reflect the very tall empty vertical runs in the single-column scroll between the hero, the mid-page copy block, and the footer.

### Grid & Container
- The hero is a left-aligned single-column layout: headline + scroll label anchored left, the particle/wireframe render bleeding off the right and top.
- The mid-page copy block ("With our capital, experienced partners…") sits left-aligned in a narrow measure with the "APPROACH" text-button below it.
- The footer uses a multi-column link list (Our DNA / Approach, Team / Companies, Contact / LinkedIn) above a legal row.

### Whitespace Philosophy
This page is built on negative space — long empty vertical runs (hundreds of px) separate the few content blocks. The emptiness is the design: it gives the light-weight white headline and the dark render room to breathe and reinforces the premium, unhurried tone.

## Elevation & Depth

No shadow tokens were measured (`shadows: []`). The system is flat by token definition.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Nav, text-buttons, copy blocks, footer |
| Background render | Layered particle / wireframe space image | Hero — provides the only sense of depth on the page |

Depth on this page comes entirely from the layered atmospheric background render (a glowing particle wave that recedes into the dark) behind the white headline — not from drop shadows, borders, or elevation tokens. The white type sits flat on top; the render does the spatial work.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Text-buttons and labels — measured button radius is 0px (sharp, flat) |
| `{rounded.sm}` | 4px | The only non-zero radius measured (frequency 3) — small inline elements / minor UI chrome |

The system is essentially square-cornered. The only soft radius found is a 4px corner used on minor elements; the primary interactive elements (text-buttons) have 0px radius.

### Background Geometry
The hero's particle/wireframe render fills the upper-right of the viewport and bleeds off the top and right edges — an organic, asymmetric mass set against the otherwise empty dark canvas. It is content imagery, not a tokenized shape.

## Components

### Navigation

**`top-nav`** — Flat top bar on the `{colors.canvas}` charcoal surface. Carries the "DNA CAPITAL" wordmark + glyph at left and a "MENU" label with a diamond glyph at right. Text in `{colors.ink}` (white). No fill, no border, no measured height — it floats over the hero render.

**`nav-link`** — Text-only navigation and footer links in `{colors.ink}` (white), transparent background. Used for "MENU", footer columns (Our DNA, Approach, Team, Companies, Contact).

### Hero

**`hero-band`** — The full-viewport hero on `{colors.canvas}` (#1f1f26). Left-anchored white headline in `{typography.heading-xl}` (Darius 54px / 300) over the particle render. No fill or border on the band itself.

**`hero-headline`** — The display headline element. Transparent background, `{colors.ink}` text, `{typography.heading-xl}`. The page's primary visual.

### Content

**`body-text`** — Supporting paragraphs in `{typography.body}` (Graphik 18px / 300, 1.8 line-height) in `{colors.muted}` (#c0c9df). Used for the mid-page copy block. Transparent background.

### Buttons & Accents

**`button-primary`** — A flat text-button. Background transparent, text `{colors.on-primary}` (measured #000000), rounded `{rounded.none}` (0px), padding 0px. Rendered as a label with a thin underline accent (e.g. "APPROACH"). Note: the measured text color is black; on the dark canvas the visible labels read white — see Known Gaps for this discrepancy.

**`scroll-rule`** — The thin vertical crimson rule beneath the "SCROLL TO EXPLORE" label. Background `{colors.accent-magenta}` (#b51244), rounded `{rounded.none}`. The single chromatic accent above the fold and a scroll affordance.

### Footer

**`footer`** — The page-closing footer on `{colors.neutral}` (#070708) — a deeper black than the body canvas. Carries the wordmark, a multi-column link list (`{component.footer-link}`), a LinkedIn icon, and a legal row ("LEGAL AND REGULATORY INFORMATION", "TERMS & CONDITIONS", copyright). Text in `{colors.muted}`, links in `{colors.ink}`, type `{typography.body}`.

**`footer-link`** — White (`{colors.ink}`) text links inside the footer columns, transparent background.

## Do's and Don'ts

### Do
- Keep the canvas dark charcoal (`{colors.canvas}` — #1f1f26) and headlines pure white (`{colors.ink}`). The contrast is the brand.
- Set display type in Darius at weight 300 — light, condensed, editorial. Use size, not weight, for hierarchy.
- Set body copy in Graphik at 300 with the open 1.8 line-height. Keep it generous.
- Reserve crimson (`{colors.accent-magenta}`) for the thin scroll rule and small underline accents only.
- Use abundant negative space between content blocks — the emptiness is intentional.
- Drop the footer to the deeper black (`{colors.neutral}` — #070708) to close the scroll.
- Keep buttons flat: no fill, no radius (`{rounded.none}`), labels with thin underline accents.

### Don't
- Don't add bold display weights — the system lives at weight 300. Heavier weights break the editorial calm.
- Don't introduce drop shadows or elevation chrome — no shadows were measured; depth comes from the background render only.
- Don't flood the page with the accent colors. Crimson is a single spark; blue is link-only.
- Don't fill or round the buttons — they are flat text labels with 0px radius.
- Don't crowd the bands — the long vertical whitespace runs are part of the design.

## Responsive Behavior

The analysis captured a single desktop landing page; responsive breakpoints were not measured. Documented behavior below is inferred from the captured layout and flagged as such.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | captured | Left-anchored hero headline; particle render bleeds off top + right; multi-column footer |
| Tablet / Mobile | not measured | Inferred (derived): headline reduces from 54px; footer columns likely stack; render likely recedes behind copy |

### Touch Targets
- Text-buttons (`{component.button-primary}`) measured at 0px padding — effective tap area depends on the underline-rule hit zone, which is below standard 44px minimums. Padding would need to be increased for reliable touch use (derived recommendation; not measured).

### Collapsing Strategy
- Inferred (derived): the single-column hero + copy stack remains single-column at narrower widths; the footer's multi-column link list collapses toward fewer columns.
- Inferred (derived): the hero background render scales / crops to keep the headline legible.

These are inferences — the live responsive behavior was not captured.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.hero-band}`, `{component.footer}`).
2. Variants of an existing component live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display stays Darius 300; body stays Graphik 300. Hierarchy comes from size and color, never weight.
6. Keep the page flat — no shadows. Depth is the background render's job.
7. When adding color, default to none — crimson and blue are scarce, deliberate sparks.

## Known Gaps

- **Button text color discrepancy:** the measured `button-primary` color is #000000 (`{colors.on-primary}`), but the rendered text-buttons in the screenshots ("MENU", "SCROLL TO EXPLORE", "APPROACH") read white on the dark canvas. The measured value is preserved faithfully but flagged — the live default text color likely resolves to white (`{colors.ink}`) and could not be reconciled from the computed capture alone.
- **Typeface identity:** "Darius" (display) could not be verified against a known open-source or commercial library; its exact source and licensing are unconfirmed. An open-source substitute is documented, but the substitution may not match the original's character.
- **Graphik licensing:** Graphik is a commercial typeface (not flagged in `fonts_licensed`); the build should ship the documented Inter substitute rather than claim Graphik.
- **Spacing scale:** measured spacing values (8, 22, 25, 72, 94, 126, 245, 351px) do not form a clean modular scale; they were captured per-element and may include one-off layout values rather than a true design token set.
- **Single page captured:** only the landing page was analyzed. Interior pages (Approach, Team, Companies, Contact), the menu overlay, and any sub-page component vocabulary are out of scope.
- **Responsive behavior:** no breakpoints, mobile layouts, or collapsing rules were measured — responsive notes are inferred (derived).
- **Animation & transitions:** scroll-triggered reveals, the particle render motion, and menu transitions were not captured.
- **Blue accent usage:** `{colors.accent}` (#0000ee) appears with high frequency in the measured palette but no on-page instance was confirmed in the captured screenshots; its exact application (link tone) is inferred.
- **No shadow / radius depth:** `shadows: []` and only two radius values (0px, 4px) were measured; any subtle elevation or rounding on interior surfaces is undocumented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dnacapital/design-md -->
