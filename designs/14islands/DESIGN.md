---
version: alpha
name: 14islands-design-analysis
description: "A minimal, editorial studio site built on a white canvas with near-black ink text and a small set of warm, desaturated neutral accents (sand, off-white) rather than a typical tech-blue palette. The measured capture is color-only — no typography, spacing, radius, shadow, or component data was extracted by the frequency analyzer, and a large share of the \"accent\" swatches trace back to an embedded Twitter/X widget's own brand palette rather than to 14islands' own design language. This entry documents what was measured faithfully and flags the rest as gaps."

colors:
  primary: "#070707"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-card: "#f2f2f2"
  hairline: "#eaeaea"
  muted: "#797979"
  muted-soft: "#a2a2a9"
  sand: "#a59d92"
  sand-soft: "#eae5df"
  embed-bg: "#15202b"
  embed-bg-elevated: "#1e2732"
  embed-muted: "#829aab"
  embed-muted-soft: "#8b98a5"
  embed-surface: "#f7f9f9"
  embed-link: "#1d9bf0"
  embed-link-active: "#1a8cd8"
  embed-like: "#f91880"
  embed-retweet: "#00ba7c"
  embed-sky: "#6bc9fb"
  embed-slate: "#425364"

typography:
  display-lg:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.5px
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 16px
  pill: 9999px

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
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: 80px
  content-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  divider-hairline:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  tweet-embed-card:
    backgroundColor: "{colors.embed-bg}"
    textColor: "{colors.embed-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  tweet-embed-action:
    backgroundColor: transparent
    textColor: "{colors.embed-link}"
    typography: "{typography.caption}"
  footer:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 48px

---

## Overview

The 14islands capture is unusually thin: the dembrandt frequency pass returned **colors only** — no typography, spacing, radius, shadow, or component measurements were extracted for this page. What the color pass does show is a mostly-white canvas (`{colors.canvas}` — #ffffff, frequency 9) paired with a near-black ink (`{colors.primary}` — #070707) and a small cluster of warm, desaturated neutrals (`{colors.sand}` — #a59d92, `{colors.sand-soft}` — #eae5df) that read as editorial/organic rather than typical SaaS-blue. Grays (`{colors.surface-soft}`, `{colors.surface-card}`, `{colors.hairline}`, `{colors.muted}`, `{colors.muted-soft}`) round out a quiet, low-chroma neutral system.

Notably, roughly half of the measured "accent" swatches — `{colors.embed-bg}` (#15202b), `{colors.embed-bg-elevated}` (#1e2732), `{colors.embed-muted}` (#829aab), `{colors.embed-surface}` (#f7f9f9), `{colors.embed-link}` (#1d9bf0), `{colors.embed-link-active}` (#1a8cd8), `{colors.embed-like}` (#f91880), `{colors.embed-retweet}` (#00ba7c), `{colors.embed-muted-soft}` (#8b98a5), `{colors.embed-sky}` (#6bc9fb), `{colors.embed-slate}` (#425364) — are unmistakably Twitter/X's own dark-mode brand palette (Twitter blue #1d9bf0, like-pink #f91880, retweet-green #00ba7c, dark surfaces #15202b/#1e2732). This strongly indicates the page embeds a live tweet or social-proof widget, and the frequency analyzer captured that third-party widget's CSS variables alongside the site's own tokens. This entry documents them as `embed-*` roles — real, measured colors, but **not** part of 14islands' own brand system — rather than mislabeling them as studio-authored accents.

Because typography, spacing, radius, and components were not captured, every value in those sections below is a **derived** placeholder built to satisfy the required schema shape, not a measured fact. They are flagged inline and again in Known Gaps. Treat this entry as a color-verified, structure-only skeleton — re-run extraction against rendered DOM (not just computed-style frequency) to fill in real type and layout tokens before treating this as production-ready.

## Colors

### Brand & Ink
- **Primary** (`{colors.primary}` — #070707): The only true near-black neutral captured (frequency 1). Assumed to double as the primary text/ink color and, by inference, the primary CTA fill — this inference is thin (single low-frequency sample) and should be reconfirmed against an actual button element (see Known Gaps).
- **Canvas** (`{colors.canvas}` — #ffffff): The dominant background, frequency 9 — clearly the page floor.

### Neutral Surfaces
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): A barely-off-white surface, frequency 2 — likely a section band or footer background.
- **Surface Card** (`{colors.surface-card}` — #f2f2f2): A slightly deeper gray, frequency 1 — candidate card/content-block fill.
- **Hairline** (`{colors.hairline}` — #eaeaea): Frequency 2 — likely a border/divider tone.
- **Muted** (`{colors.muted}` — #797979): Frequency 1 — candidate secondary text tone.
- **Muted Soft** (`{colors.muted-soft}` — #a2a2a9): Frequency 1 — candidate tertiary/placeholder text tone.

### Warm Neutrals
- **Sand** (`{colors.sand}` — #a59d92): Frequency 1 — a warm, desaturated tan that breaks from pure grayscale; likely used in an imagery treatment or a warm background block.
- **Sand Soft** (`{colors.sand-soft}` — #eae5df): Frequency 1 — a lighter warm-neutral companion to Sand, likely a soft section background.

### Embedded Widget Palette (not brand-authored)
- **Embed Background** (`{colors.embed-bg}` — #15202b) and **Embed Background Elevated** (`{colors.embed-bg-elevated}` — #1e2732): Twitter/X dark-mode surface colors, frequency 6 each — almost certainly the chrome of an embedded tweet card.
- **Embed Link** (`{colors.embed-link}` — #1d9bf0) / **Embed Link Active** (`{colors.embed-link-active}` — #1a8cd8): Twitter's signature blue and its pressed variant, frequency 3 each.
- **Embed Like** (`{colors.embed-like}` — #f91880) and **Embed Retweet** (`{colors.embed-retweet}` — #00ba7c): Twitter's like/retweet action colors, frequency 3 each.
- **Embed Muted / Muted Soft** (`{colors.embed-muted}` — #829aab, `{colors.embed-muted-soft}` — #8b98a5): Twitter's secondary-text grays inside the embed, frequency 4 and 2.
- **Embed Surface** (`{colors.embed-surface}` — #f7f9f9): A near-white surface used inside the embed widget in light mode, frequency 3.
- **Embed Sky / Slate** (`{colors.embed-sky}` — #6bc9fb, `{colors.embed-slate}` — #425364): Supporting tints inside the embed widget, frequency 2 each.

These eleven tokens should **not** be used when designing 14islands' own UI — they exist only because a third-party embed was present on the captured page.

## Typography

**No font-face, size, weight, or line-height data was measured** for this page — the typography block below is entirely **derived** to satisfy the schema, using a generic system-font stack since no actual family was detected. None of these values should be treated as ground truth.

| Token | Size | Weight | Line Height | Letter Spacing | Status |
|---|---|---|---|---|---|
| `{typography.display-lg}` | 56px | 600 | 1.1 | -0.5px | derived — placeholder headline scale, no font measured |
| `{typography.title}` | 24px | 600 | 1.3 | 0 | derived — placeholder sub-head scale |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | derived — standard body-copy default |
| `{typography.caption}` | 13px | 400 | 1.4 | 0 | derived — standard caption default |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | derived — standard button-label default |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | derived — standard nav-label default |

### Note on Font Substitutes
Because no font family was captured (and nothing indicates a licensed/custom face was in use), `system-ui, -apple-system, "Segoe UI", sans-serif` is used as a safe, license-free placeholder stack. If a real webfont is confirmed on re-extraction, replace this stack and the sizes above with measured values — do not carry these placeholders into implementation as-is.

## Layout

**No spacing or grid data was measured.** The spacing scale below is a generic 4px-base progression supplied only to satisfy the schema — every value is derived, not observed.

- **Base unit (derived):** 4px.
- **Tokens (all derived):** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Grid/container width:** not measured — no known gap value available; do not assume a max-width until re-extracted.

Given the color evidence (a quiet white/near-black/sand palette with no bright brand accent outside the third-party embed), the layout is likely to favor a spacious, editorial rhythm typical of design-studio sites — but this is an inference from the palette alone, not a layout measurement, and should be verified visually before committing to the derived spacing scale above.

## Elevation & Depth

**No shadow data was measured.** No shadow tokens are declared in the frontmatter because none can be faithfully sourced. Based on the flat, low-contrast neutral palette (no measured elevated/shadow surface beyond `{colors.surface-card}`), the system likely favors flat, borderless surfaces with `{colors.hairline}` dividers rather than drop shadows — but this is inferred from color data alone, not confirmed shadow measurements.

| Level | Treatment | Confidence |
|---|---|---|
| Flat | No shadow, `{colors.canvas}` background | Inferred from dominant white frequency |
| Hairline | 1px `{colors.hairline}` border | Inferred from measured #eaeaea frequency-2 swatch |
| Embed widget | Native Twitter/X widget shadow/border chrome | Out of scope — belongs to third-party embed, not the design system |

## Shapes

**No border-radius data was measured.** The radius scale below is a generic derived set for schema completeness only:

| Token | Value | Status |
|---|---|---|
| `{rounded.sm}` | 4px | derived — no radius measured |
| `{rounded.md}` | 8px | derived — no radius measured |
| `{rounded.lg}` | 16px | derived — no radius measured |
| `{rounded.pill}` | 9999px | derived — no radius measured |

Do not assume 14islands actually uses rounded corners at these values — verify against the real DOM before using in production.

## Components

**No component instances were extracted by the frequency analyzer** (buttons, inputs, cards, nav — all empty in analysis.json). The components below are structural placeholders wired to the measured color tokens so the schema is satisfiable; their sizing, padding, and typography references are derived, not observed.

- **`button-primary`** / **`button-primary-active`** — Dark fill using `{colors.primary}` (#070707, the only measured near-black) with `{colors.canvas}` text. Padding and radius are derived; the color choice is the most defensible part of this component given the palette evidence.
- **`button-secondary`** — Transparent background, `{colors.primary}` text — a standard outline/ghost pairing, entirely derived.
- **`top-nav`** — `{colors.canvas}` background, `{colors.primary}` text, derived 64px height.
- **`hero-band`** — `{colors.canvas}` background, derived 80px section padding, using the derived `{typography.display-lg}` headline role.
- **`content-card`** — `{colors.surface-card}` (#f2f2f2, frequency 1) fill — the only measured neutral surface distinct from canvas/soft, used here as the most likely card background.
- **`divider-hairline`** — `{colors.hairline}` (#eaeaea) — a measured swatch, used as a section/border divider.
- **`tweet-embed-card`** / **`tweet-embed-action`** — The one component group with genuinely measured color grounding: `{colors.embed-bg}` fill, `{colors.embed-surface}` text, `{colors.embed-link}` for inline actions. This models the actual embedded Twitter/X widget seen in the color data — sizing/radius/padding are still derived, but the color choices are directly sourced from measured frequency data.
- **`footer`** — `{colors.surface-soft}` (#fafafa) background, `{colors.muted}` text — inferred from the second-most-frequent neutral swatch typically sitting at the page's edges.

## Do's and Don'ts

### Do
- Treat `{colors.primary}` (#070707) and `{colors.canvas}` (#ffffff) as the only two colors with strong measured evidence (frequency 9 and a clear near-black outlier) — anchor any new UI to this pairing first.
- Keep the warm-neutral pair (`{colors.sand}`, `{colors.sand-soft}`) distinct from the cooler grays (`{colors.surface-soft}`, `{colors.surface-card}`, `{colors.hairline}`) — they were measured as separate swatches and likely serve separate purposes (e.g. imagery backdrop vs. UI chrome).
- Keep the `embed-*` token group scoped strictly to the embedded Twitter/X widget (`{component.tweet-embed-card}`). Never reuse `{colors.embed-link}` or `{colors.embed-like}` on native 14islands buttons or links.
- Re-run extraction with a DOM-aware pass (not just CSS frequency) before treating the typography, spacing, radius, or component sections of this entry as final — they are all derived placeholders.

### Don't
- Don't assume 14islands' brand accent is Twitter blue (#1d9bf0) or Twitter pink (#f91880) — these are third-party widget colors that happened to be captured by the frequency scan, not studio-authored brand hues.
- Don't ship the derived typography scale, spacing scale, or radius scale as measured fact — they exist only to satisfy the schema and must be replaced once real values are extracted.
- Don't invent shadow or elevation styling beyond the flat/hairline pattern implied by the color data — no shadow was measured.
- Don't merge the `embed-*` tokens into the core neutral/primary palette — keep the provenance boundary explicit in any implementation.

## Responsive Behavior

**No responsive/breakpoint data was measured** — analysis.json contains no viewport-scoped captures beyond a single "landing" page pass. No breakpoint table, touch-target sizing, or collapsing strategy can be faithfully documented from this dataset. Do not infer responsive behavior from the single-viewport color capture; a multi-viewport re-run is required before this section can be completed.

## Iteration Guide

1. This entry is a **color-verified, structure-derived skeleton** — treat every non-color token as a placeholder pending re-extraction.
2. Re-run the analyzer capturing computed typography (font-family, size, weight, line-height, letter-spacing) directly from headline/body/button DOM nodes, not just CSS-variable frequency.
3. Re-run the analyzer capturing spacing (margin/padding) and border-radius from real layout nodes, and shadow values from `box-shadow` computed styles.
4. When real component data becomes available, replace the derived `button-primary`, `content-card`, `top-nav`, `hero-band`, and `footer` entries with measured equivalents — keep `tweet-embed-card` as-is since its colors are already grounded.
5. Keep the `embed-*` token group intact and clearly separated even after re-extraction — it documents third-party content, not the site's own system, and should stay documented that way for provenance.
6. Never promote a derived value to "measured" status in a future revision without an actual DOM/CSS source backing it.

## Known Gaps

- **Typography was not measured.** No font-family, size, weight, line-height, or letter-spacing data exists in analysis.json. The entire Typography section above is derived placeholder content using a generic system-font stack.
- **Spacing was not measured.** No margin/padding/grid data exists. The spacing scale is a generic derived 4px-base progression.
- **Border radius was not measured.** The `rounded` scale is a generic derived set.
- **Shadows were not measured.** No elevation tokens are declared; the Elevation & Depth section is inference from color data only, not real shadow capture.
- **Components were not measured.** analysis.json's `components` array is empty; every component in this entry is a derived structural placeholder wired to measured colors where possible.
- **Responsive/breakpoint data was not captured** — only a single "landing" page viewport pass exists.
- **A large share of the measured colors (11 of 20 tokens) belong to an embedded third-party Twitter/X widget**, not to 14islands' own brand system. This entry documents them under `embed-*` roles to preserve faithfulness to the measured data without misattributing them as brand accents.
- **The `{colors.primary}` assignment (#070707) rests on a single frequency-1 sample** — there is no measured button, link, or heading element confirming this is the actual primary action/ink color. This should be reconfirmed against real component capture.
- **No `fonts_licensed` entries were present**, so no licensed-typeface substitution was required — but this also means no font was positively identified at all.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/14islands/design-md -->
