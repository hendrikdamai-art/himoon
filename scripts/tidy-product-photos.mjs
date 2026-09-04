#!/usr/bin/env node
/**
 * Tidies product photos cropped from Shopee screenshots:
 * - Detects the white gutter between the promo graphic and Shopee UI
 * - Trims empty white margins
 * - Outputs clean 900×900 edge-to-edge JPEGs
 *
 * Usage: node scripts/tidy-product-photos.mjs
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "..", "public", "products");
const OUT = 900;

function nearWhite(r, g, b) {
  return r >= 242 && g >= 242 && b >= 242;
}

function findPanel(data, w, h, ch) {
  const whiteCol = new Array(w);
  const contentCol = new Array(w);
  for (let x = 0; x < w; x++) {
    let white = 0;
    let content = 0;
    for (let y = 0; y < h; y++) {
      const i = (y * w + x) * ch;
      if (nearWhite(data[i], data[i + 1], data[i + 2])) white++;
      else content++;
    }
    whiteCol[x] = white / h;
    contentCol[x] = content / h;
  }

  let gutterStart = -1;
  for (let x = Math.floor(w * 0.52); x < w - 4; x++) {
    let run = 0;
    for (let k = x; k < Math.min(w, x + 10); k++) {
      if (whiteCol[k] > 0.9) run++;
      else break;
    }
    if (run >= 3) {
      let afterWhite = 0;
      let afterN = 0;
      for (let k = x + run; k < w; k++) {
        afterWhite += whiteCol[k];
        afterN++;
      }
      if (afterN > 0 && afterWhite / afterN > 0.75) {
        gutterStart = x;
        break;
      }
    }
  }

  let right = gutterStart > 0 ? gutterStart - 1 : w - 1;
  if (gutterStart < 0) {
    for (let x = w - 1; x >= Math.floor(w * 0.45); x--) {
      if (contentCol[x] > 0.12) {
        right = x;
        break;
      }
    }
  }
  while (right > w * 0.4 && whiteCol[right] > 0.88) right--;

  let left = 0;
  while (left < right - 40 && whiteCol[left] > 0.9) left++;

  const whiteRow = new Array(h);
  for (let y = 0; y < h; y++) {
    let white = 0;
    const span = right - left + 1;
    for (let x = left; x <= right; x++) {
      const i = (y * w + x) * ch;
      if (nearWhite(data[i], data[i + 1], data[i + 2])) white++;
    }
    whiteRow[y] = white / span;
  }

  let top = 0;
  while (top < h * 0.4 && whiteRow[top] > 0.9) top++;
  let bottom = h - 1;
  while (bottom > h * 0.45 && whiteRow[bottom] > 0.9) bottom--;

  const inset = 3;
  left = Math.min(right - 40, left + inset);
  top = Math.min(bottom - 40, top + inset);
  right = Math.max(left + 40, right - inset);
  bottom = Math.max(top + 40, bottom - inset);

  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

async function processFile(file) {
  const input = path.join(DIR, file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const panel = findPanel(data, info.width, info.height, info.channels);

  await sharp(input)
    .extract(panel)
    .resize(OUT, OUT, { fit: "cover", position: "centre", kernel: "lanczos3" })
    .extract({ left: 5, top: 5, width: OUT - 10, height: OUT - 10 })
    .resize(OUT, OUT, { fit: "fill", kernel: "lanczos3" })
    .modulate({ brightness: 1.02, saturation: 1.025 })
    .sharpen({ sigma: 0.4 })
    .jpeg({ quality: 93, mozjpeg: true })
    .toFile(input + ".tmp");

  fs.renameSync(input + ".tmp", input);
  console.log(`✓ ${file}  ${panel.width}x${panel.height} → ${OUT}²`);
}

const files = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith(".jpg"))
  .sort();

for (const f of files) {
  await processFile(f);
}
console.log(`\nTidied ${files.length} product photos`);
