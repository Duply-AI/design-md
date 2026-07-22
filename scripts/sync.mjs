// sync.mjs — (re)build this repo from the live duply.ai catalog.
// No dependencies; needs Node 18+ (native fetch).
//   node scripts/sync.mjs            # regenerate README from files on disk (fast)
//   node scripts/sync.mjs --refresh  # re-pull every DESIGN.md from duply.ai first
//
// It writes designs/<slug>/DESIGN.md and regenerates README.md, where every
// brand links back to its page on duply.ai.
import { mkdir, writeFile, rm, readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://duply.ai";
const IMG = "https://txwuabajsqfalejouhnc.supabase.co/storage/v1/object/public/screenshots";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESIGNS_DIR = join(ROOT, "designs");
const CONCURRENCY = 8;

// Curated flagships for the top gallery (real UI hero screenshots).
const FEATURED = [
  { slug: "cursor", name: "Cursor", img: `${IMG}/cursor/e2373bfe-01fb-4d46-bb49-6bb0099422c5/hero-1783401067.jpg` },
  { slug: "stripe", name: "Stripe", img: `${IMG}/stripe/523c81b7-7c51-4f70-b902-bb2dfb67ca27/hero-1781369808.jpg` },
  { slug: "linear", name: "Linear", img: `${IMG}/linear/93032f5c-e48b-4591-a0d4-2e47cecc435a/hero.jpg` },
  { slug: "anthropic", name: "Anthropic", img: `${IMG}/anthropic/ad75be5f-0ed4-4822-a50f-fe496efaf7ca/hero-1781384818.jpg` },
  { slug: "vercel", name: "Vercel", img: `${IMG}/vercel/d2b0ec4b-41d0-4a51-ac18-88257dfbfd86/hero.jpg` },
  { slug: "notion", name: "Notion", img: `${IMG}/notion/cfc73335-0805-4938-be37-d98739b86614/hero-1781385356.jpg` },
  { slug: "ramp", name: "Ramp", img: `${IMG}/ramp/fadcc6ab-4f04-412c-bd9d-73a08a033ae6/hero-1781384168.jpg` },
  { slug: "airbnb", name: "Airbnb", img: `${IMG}/airbnb/0009d53c-8ecc-40d0-b2d0-a05d72d8f9ea/hero-1783400302.jpg` },
];

async function getSlugs() {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  const slugs = [...xml.matchAll(/duply\.ai\/([a-z0-9-]+)\/design-md</g)].map((m) => m[1]);
  return [...new Set(slugs)].sort();
}

function parseFrontmatter(md) {
  const block = /^---\n([\s\S]*?)\n---/.exec(md)?.[1] ?? "";
  const pick = (key) =>
    (new RegExp(`^${key}:\\s*(.+)$`, "m").exec(block)?.[1] ?? "").trim().replace(/^["']|["']$/g, "");
  return { name: pick("name"), description: pick("description") };
}

const displayName = (name) => name.replace(/[-_ ]?design[-_ ]?analysis\s*$/i, "").trim() || name;

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    }),
  );
  return out;
}

async function fetchOne(slug) {
  const res = await fetch(`${SITE}/${slug}/design-md/raw`);
  if (!res.ok) {
    console.warn(`  skip ${slug}: HTTP ${res.status}`);
    return null;
  }
  const md = await res.text();
  const { name, description } = parseFrontmatter(md);
  const file = join(DESIGNS_DIR, slug, "DESIGN.md");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, md);
  return { slug, displayName: displayName(name || slug), description };
}

async function loadFromDisk() {
  const slugs = (await readdir(DESIGNS_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  const out = [];
  for (const slug of slugs) {
    try {
      const md = await readFile(join(DESIGNS_DIR, slug, "DESIGN.md"), "utf8");
      const { name, description } = parseFrontmatter(md);
      out.push({ slug, displayName: displayName(name || slug), description });
    } catch {
      /* skip unreadable */
    }
  }
  return out;
}

// The README is our own copy, and duply's house style avoids em dashes — swap
// them for commas in the index blurbs (the mirrored DESIGN.md files are left
// verbatim). Also unescape frontmatter-escaped quotes and escape table pipes.
function deDash(s) {
  return (s || "")
    .replace(/\\(["'\\])/g, "$1")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/\s*,\s*,\s*/g, ", ")
    .replace(/\|/g, "\\|")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(s, n) {
  const t = deDash(s);
  if (t.length <= n) return t;
  return t.slice(0, t.lastIndexOf(" ", n)).replace(/[.,;:]+$/, "") + "…";
}

function gallery() {
  let rows = "";
  for (let i = 0; i < FEATURED.length; i += 2) {
    const cells = FEATURED.slice(i, i + 2)
      .map(
        (f) =>
          `    <td width="50%"><a href="${SITE}/${f.slug}/design-md"><img src="${f.img}" width="400" alt="${f.name} design system preview" /></a><br /><sub><b>${f.name}</b> · <a href="${SITE}/${f.slug}/design-md">DESIGN.md</a></sub></td>`,
      )
      .join("\n");
    rows += `  <tr>\n${cells}\n  </tr>\n`;
  }
  return `<table>\n${rows}</table>`;
}

function renderReadme(entries) {
  const sorted = [...entries].sort((a, b) =>
    a.displayName.localeCompare(b.displayName, "en", { sensitivity: "base" }),
  );
  const rows = sorted
    .map(
      (e) =>
        `| [${e.displayName}](${SITE}/${e.slug}/design-md) | ${truncate(e.description, 90)} | [DESIGN.md](designs/${e.slug}/DESIGN.md) |`,
    )
    .join("\n");

  return `<div align="center">

# DESIGN.md

**Real product design systems, as ready-to-use files for AI coding agents.**

Copy one file. Hand it to Cursor, Claude Code, v0, Lovable or Bolt.
Your agent builds in that visual language, accurately, instead of generic AI defaults.

![Systems](https://img.shields.io/badge/design%20systems-${sorted.length}-10b981?style=flat-square)
![License](https://img.shields.io/badge/license-CC%20BY%204.0-3b82f6?style=flat-square)
[![Made by duply](https://img.shields.io/badge/made%20by-duply.ai-111827?style=flat-square)](${SITE})

### [Browse all ${sorted.length} with live previews, tokens and one-click exports →](${SITE}/library)

</div>

## Featured

${gallery()}

<div align="center"><a href="${SITE}/library"><b>See all ${sorted.length} design systems →</b></a></div>

## What is a DESIGN.md?

A DESIGN.md is a single plain-text markdown file that captures a real product's design system, its colors, typography, spacing, radii and component rules, in the format LLMs read best. Drop it into your project root, point your AI coding agent at it, and the UI it generates stays visually consistent with that design language. No Figma exports, no JSON schemas, no tooling.

The DESIGN.md idea was introduced by Google Stitch. This repo focuses on ready-to-use files decoded from real, well-designed products.

## How it works

\`\`\`bash
# 1. Pick a design and copy its file into your project root
curl -o DESIGN.md https://duply.ai/stripe/design-md/raw

# 2. Tell your AI agent
#    "Build this page to match DESIGN.md."
\`\`\`

That is the whole workflow. Browse every system with live previews at [duply.ai/library](${SITE}/library).

## Why these stand out

- **Deeper than a token dump.** Each file is ~360 lines: structured tokens **plus** real guidance, component specs (nav, buttons, cards, footer), do's and don'ts, responsive breakpoints, and open font substitutes for licensed typefaces.
- **The largest open collection.** ${sorted.length} systems and growing. Most curated lists stop well under 100.
- **Not just markdown.** On [duply.ai](${SITE}) every design also exports to **Tailwind v4**, **CSS variables**, and **design-token JSON**, plus a downloadable bundle.
- **See before you copy.** Live scroll-through previews, one-click copy, and per-token detail on every page.
- **Open.** CC BY 4.0, no paywalls, no paid placement slots. Just attribution back to duply.ai.

## The collection

Every entry links to its full page on duply.ai (previews, tokens, downloads) and to the raw file here.

<details>
<summary><b>Browse all ${sorted.length} design systems (A to Z)</b></summary>

| Design system | About | File |
|---------------|-------|------|
${rows}

</details>

## Missing a design?

New systems are added regularly. Browse the full, always-current library at [duply.ai/library](${SITE}/library).

## License

These DESIGN.md analyses are original documentation of publicly observable design decisions, provided under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): free to use, including commercially, with attribution to [duply.ai](${SITE}). See [duply.ai/terms](${SITE}/terms).

<div align="center">

---

Built by [**duply**](${SITE}). Design systems as DESIGN.md for AI coding agents.

</div>
`;
}

const refresh = process.argv.includes("--refresh");
let entries;
if (!refresh && existsSync(DESIGNS_DIR)) {
  console.log("Regenerating README from files on disk (pass --refresh to re-pull)…");
  entries = await loadFromDisk();
} else {
  console.log("Fetching slugs from sitemap…");
  const slugs = await getSlugs();
  console.log(`Pulling ${slugs.length} DESIGN.md files…`);
  await rm(DESIGNS_DIR, { recursive: true, force: true });
  entries = (await pool(slugs, CONCURRENCY, fetchOne)).filter(Boolean);
}
await writeFile(join(ROOT, "README.md"), renderReadme(entries));
console.log(`Done: README.md with ${entries.length} design systems.`);
