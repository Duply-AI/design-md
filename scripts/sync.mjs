// sync.mjs — (re)build this repo from the live duply.ai catalog.
// No dependencies; needs Node 18+ (native fetch).  Run:  node scripts/sync.mjs
//
// It reads every /{slug}/design-md/raw file from duply.ai (public, keyless),
// writes designs/<slug>/DESIGN.md, and regenerates README.md with an index
// where every brand links back to its page on duply.ai.
import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://duply.ai";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DESIGNS_DIR = join(ROOT, "designs");
const CONCURRENCY = 8;

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

// The README is our own copy, and duply's house style avoids em dashes — swap
// them for commas in the index blurbs (the mirrored DESIGN.md files are left
// verbatim). Also escape pipes so a stray "|" can't break the markdown table.
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

function renderReadme(entries) {
  const sorted = [...entries].sort((a, b) =>
    a.displayName.localeCompare(b.displayName, "en", { sensitivity: "base" }),
  );
  const rows = sorted
    .map(
      (e) =>
        `| [${e.displayName}](${SITE}/${e.slug}/design-md) | ${truncate(e.description, 96)} | [DESIGN.md](designs/${e.slug}/DESIGN.md) |`,
    )
    .join("\n");

  return `# DESIGN.md — real product design systems for AI coding agents

> The largest open collection of real-world design systems as ready-to-use **DESIGN.md** files. Copy one file, hand it to Cursor, Claude Code, v0, Lovable or Bolt, and your AI agent builds in that visual language, accurately.

![DESIGN.md count](https://img.shields.io/badge/DESIGN.md-${sorted.length}-10b981?style=flat)
[![Browse with previews](https://img.shields.io/badge/browse%20with%20previews-duply.ai-111827?style=flat)](${SITE}/library)

**Every system with live previews, color tokens, type scales and one-click exports lives at [duply.ai/library](${SITE}/library).**

## What is a DESIGN.md?

A DESIGN.md is a single plain-text markdown file that captures a real product's design system, its colors, typography, spacing, radii and component rules, in the format LLMs read best. Drop it into your project root, point your AI coding agent at it, and the UI it generates stays visually consistent with that design language. No Figma exports, no JSON schemas, no tooling.

The DESIGN.md idea was introduced by Google Stitch. This repo focuses on ready-to-use files decoded from real, well-designed products.

| File | Who reads it | What it defines |
|------|--------------|-----------------|
| \`AGENTS.md\` | Coding agents | How to build the project |
| \`DESIGN.md\` | Design agents | How the project should look and feel |

## How to use

1. Pick a design you like from the list below, or browse them with live previews at [duply.ai/library](${SITE}/library).
2. Copy its \`DESIGN.md\` into your project root.
3. Tell your agent: **"Build this to match DESIGN.md."** That is the whole workflow.

Each file is also available with screenshots, a copy button, and Tailwind v4 / CSS variables / design-token exports on its page at duply.ai.

## The collection (${sorted.length} design systems)

Every entry links to its full page on duply.ai (previews, tokens, downloads) and to the raw file in this repo.

| Design system | About | File |
|---------------|-------|------|
${rows}

## Missing a design?

New systems are added regularly. Browse the full, always-current library at [duply.ai/library](${SITE}/library).

## License

These DESIGN.md analyses are original documentation of publicly observable design decisions, provided under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): free to use, including commercially, with attribution to [duply.ai](${SITE}). See [duply.ai/terms](${SITE}/terms).

---

Built by [duply](${SITE}) — design systems as DESIGN.md for AI coding agents.
`;
}

console.log("Fetching slugs from sitemap…");
const slugs = await getSlugs();
console.log(`Rebuilding designs/ from ${slugs.length} entries…`);
await rm(DESIGNS_DIR, { recursive: true, force: true });
const entries = (await pool(slugs, CONCURRENCY, fetchOne)).filter(Boolean);
await writeFile(join(ROOT, "README.md"), renderReadme(entries));
console.log(`Done: ${entries.length} DESIGN.md files + README.md (${slugs.length - entries.length} skipped).`);
