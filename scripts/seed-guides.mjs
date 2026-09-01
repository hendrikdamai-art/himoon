#!/usr/bin/env node
/**
 * Validates commercial guide content used as the JSON-backed SEO CMS.
 * Run: node scripts/seed-guides.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/lib/seo/guides.ts"), "utf8");

function extractSpeakableBlocks(text) {
  const blocks = [];
  const regex = /speakable:\s*\{\s*id:\s*"([^"]*(?:\\.[^"]*)*)"/g;
  let match;
  while ((match = regex.exec(text))) {
    blocks.push(match[1].replace(/\\n/g, " "));
  }
  return blocks;
}

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const blocks = extractSpeakableBlocks(source);
if (blocks.length === 0) {
  console.error("No speakable blocks found in src/lib/seo/guides.ts");
  process.exit(1);
}

let failed = false;
for (const [index, block] of blocks.entries()) {
  const count = wordCount(block);
  const ok = count >= 130 && count <= 170;
  console.log(`speakable[${index}] words=${count} ${ok ? "OK" : "FAIL"}`);
  if (!ok) failed = true;
}

if (failed) {
  console.error("Speakable answers must be 130–170 words (Indonesian id field).");
  process.exit(1);
}

console.log(`Validated ${blocks.length} commercial speakable answers.`);
