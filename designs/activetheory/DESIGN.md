---
version: alpha
name: ActiveTheory-design-analysis
description: "A stark, cinematic black-canvas fallback experience — near-total darkness punctuated by a single glowing chrome ring emblem and a small monospace, uppercase system message. The only page captured is Active Theory's WebGL-unsupported fallback screen, so the measured token set is intentionally minimal — pure black canvas, pure white ink, and one large spacing gap governing the vertical rhythm of the centered composition."

colors:
  ink: "#ffffff"
  canvas: "#000000"

typography:
  caption-uppercase:
    fontFamily: "ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 2px

rounded:
  full: 9999px

spacing:
  section: 225px

components:
  fallback-screen:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    padding: "{spacing.section}"
  unsupported-message:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
  logo-mark:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"

---

## Overview

The only page the crawler was able to capture from activetheory.net is the studio's **WebGL-unsupported fallback screen** — a full-viewport black canvas (`{colors.canvas}` — #000000) with a single centered composition: a glowing chrome ring/logomark, a small blue-tinted jellyfish silhouette, drifting particle debris, and one line of small monospace, uppercase system copy ("YOUR BROWSER IS NOT SUPPORTED") rendered in `{colors.ink}` (#ffffff). Because the crawl did not reach the studio's real WebGL-driven case-study experience, the measured token set here is deliberately thin: **two colors, one spacing value, zero measured type/radius/shadow tokens**. Everything beyond that thin set is inference from the screenshot and is called out explicitly as derived, or left in Known Gaps.

What the fallback screen does confirm about the brand: Active Theory operates in **pure black-and-white contrast** at the fallback layer, uses a **monospace, tracked, all-caps** voice for system/status messaging (fits the `caption-uppercase` role), and treats its own logomark as a luminous, holographic-chrome object rather than a flat icon — consistent with a WebGL/interactive-experience studio's brand register. This document captures only what was measured; the studio's actual case-study pages, navigation, and content typography are unknown and flagged in Known Gaps.

## Colors

- **Ink** (`{colors.ink}` — #ffffff): The maximum-contrast color measured against the canvas. Used for the fallback message text and (visually, unmeasured) reads as the base ink color for the ring logomark's white highlight sweep.
- **Canvas** (`{colors.canvas}` — #000000): The measured `body.background` — true black. This is the entire page floor for the captured screen; no secondary surface color was measured.

No accent, semantic, or surface-tier colors were measured. The screenshot shows a multicolor holographic/chrome effect on the ring logomark (blue, violet, gold particle tones) and a teal-tinted jellyfish silhouette, but these read as decorative WebGL/shader effects rather than flat UI color tokens, and no computed hex values were captured for them — they are not included as tokens per the faithfulness rule (see Known Gaps).

## Typography

No typography was captured by the computed-style pass (`typography: []` in the source analysis). One text element is visible in the reference screenshot: "YOUR BROWSER IS NOT SUPPORTED," set in a monospaced, uppercase, letter-spaced style.

- `{typography.caption-uppercase}` — **derived**: fontFamily, fontSize (14px), fontWeight (400), lineHeight (1.4), and letterSpacing (2px) are estimated from the screenshot's apparent character proportions and tracking, not from a computed CSS read. This is the only typography role in this entry, and it is flagged derived rather than presented as measured fact. The visual monospace form resembles common UI-monospace stacks (e.g., an open-source substitute such as **JetBrains Mono** or **Space Mono** would be a reasonable stand-in) — no font-family was actually served or confirmed, so no specific typeface name is claimed.

No display, body, button, or nav type roles could be captured — the fallback screen does not expose a full type hierarchy. See Known Gaps.

## Layout

The only measured spacing value is **225px** (`{spacing.section}`), captured from a padding/margin/gap computation on the page. In the reference screenshot this plausibly corresponds to the vertical gap between the uppercase message line and the top of the ring logomark, or to overall vertical centering padding on the fallback composition — the source measurement doesn't disambiguate which, so it is treated generically as the page's one large spacing token rather than assigned a specific micro-role.

The composition itself is a single centered column: message text, then logomark, both horizontally centered on the black canvas, with particle/debris elements scattered asymmetrically around it. No grid, container width, or column system could be measured from a one-element fallback screen.

## Elevation & Depth

No shadow values were measured (`shadows: []`). Visually, the ring logomark reads as strongly lit and reflective — a holographic chrome/glass material with bloom and light-streak effects — but these are WebGL shader/render effects rather than CSS box-shadow tokens, and no elevation system (card shadows, layered surfaces) could be measured from this single fallback screen.

## Shapes

No radius values were measured (`radius: []`). The one clearly circular form in the composition is the ring element of the logomark. `{rounded.full}` (9999px) is included here only as the geometric description of that circular mark — it is not a general-purpose UI radius token (no buttons, cards, or inputs were present to measure a radius scale from). Treat this as a single derived observation, not a system-wide shape scale.

## Components

Because the crawled page is a fallback/error state rather than a marketing or product surface, the component inventory is minimal and describes only what is visible on screen:

**`fallback-screen`** — The full-viewport container. Background `{colors.canvas}`, text color `{colors.ink}`, type `{typography.caption-uppercase}`, with `{spacing.section}` (225px) governing the composition's vertical spacing. This is effectively the entire "page" captured.

**`unsupported-message`** — The single line of system copy ("YOUR BROWSER IS NOT SUPPORTED"). Transparent background, `{colors.ink}` text, set in `{typography.caption-uppercase}` — small, monospaced, uppercase, letter-spaced. This is the fallback screen's only content element besides the logomark.

**`logo-mark`** — The circular chrome ring emblem with the Active Theory glyph at its center. Transparent background, `{colors.ink}` as the nominal foreground reference color, `{rounded.full}` describing its circular geometry. The mark's holographic, multicolor lighting effect is a rendered/shader treatment, not a flat fill — no additional color tokens are declared for it since no computed values were captured.

No buttons, inputs, navigation, cards, or any other interactive component were present on the captured page (`components: []` in the source analysis).

## Do's and Don'ts

### Do
- Treat `{colors.canvas}` (#000000) and `{colors.ink}` (#ffffff) as the confirmed floor of the brand's fallback/error-state palette — true black, true white, maximum contrast.
- Use `{typography.caption-uppercase}` sparingly, for terse system/status messaging only — it reads as a technical, monospaced register, not a body-copy voice.
- Keep the fallback screen's composition centered and minimal — a single message plus a single emblem, with generous surrounding space (`{spacing.section}`).

### Don't
- Don't assume this fallback screen represents Active Theory's full brand system. It is an error/unsupported-browser state, not the studio's case-study or marketing surface.
- Don't invent secondary colors, additional type sizes, button styles, or a radius scale to "fill out" the system — none of that was measured here.
- Don't present the logomark's holographic shader coloring as a fixed set of brand hex values; it is a rendered effect, not measured flat color data.

## Responsive Behavior

No responsive/breakpoint data was captured — only a single desktop-width screenshot pair of the same fallback screen was provided, with no visible layout change between the two captures. Breakpoint behavior, mobile layout, and touch-target sizing are unknown.

## Iteration Guide

1. This entry should be treated as a **placeholder/fallback-state record**, not a full design system. Re-crawl the site with a supported browser/user-agent to reach the actual WebGL experience and re-run analysis before treating this as canonical.
2. Any new tokens added later (accent colors, a real type hierarchy, card/button components) must come from a fresh measured pass — do not backfill guesses into this entry.
3. Keep `{typography.caption-uppercase}` flagged as derived until a computed-style capture confirms actual font-family, size, weight, and tracking.
4. If the real site is captured in a future pass, this document should likely be superseded entirely rather than incrementally patched, given how little of the actual product surface is represented here.

## Known Gaps

- **Only one page/state was captured**: the WebGL-unsupported fallback screen. Active Theory's actual portfolio, case studies, navigation, and interactive WebGL content were never rendered or measured.
- **Typography**: the source analysis returned zero measured typography entries. The single `caption-uppercase` role in this document is a visual estimate from the screenshot (font-size, weight, line-height, letter-spacing), explicitly marked derived, not a computed-style capture. No font-family could be confirmed or attributed.
- **Fonts licensed**: `fonts_licensed` was empty in the source data; no licensing claims are made, and no specific typeface name is asserted for the monospace text.
- **Radius**: no radius values were measured. `{rounded.full}` is a geometric description of the visible circular logomark only, not a confirmed UI radius scale.
- **Shadows/elevation**: no shadow values were measured. The logomark's glow/bloom/reflection appearance is a WebGL/shader render effect, not a captured CSS token.
- **Components**: the source analysis returned zero measured components. Buttons, navigation, cards, forms, and any interactive UI patterns used elsewhere on activetheory.net are entirely unknown.
- **Color palette depth**: only two colors were measured (pure black canvas, pure white ink). The holographic/multicolor lighting on the logomark and the teal jellyfish silhouette visible in the screenshot were not captured as computed color values and are therefore excluded from the `colors` token set.
- **Spacing scale**: only one spacing value (225px) was measured, with an ambiguous role (likely vertical gap or centering padding). No broader spacing scale (xs/sm/md/lg) could be derived from a single fallback screen.
- **Layout/grid/breakpoints**: no responsive or grid data exists in the source analysis; this document makes no claims about the real site's layout system.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/activetheory/design-md -->
