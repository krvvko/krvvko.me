import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public/projects";
const DESKTOP_MAX = 1800;
const MOBILE_MAX = 1400;
const QUALITY = 82;

const isPhoneShot = (w, h) => h > w;

async function listDirs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => join(dir, e.name));
}

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && /\.(png|jpe?g)$/i.test(e.name))
    .map((e) => join(dir, e.name))
    .sort();
}

async function optimize(file, index) {
  const input = sharp(file);
  const { width, height } = await input.metadata();
  const phone = isPhoneShot(width, height);
  const max = phone ? MOBILE_MAX : DESKTOP_MAX;

  const beforeBytes = (await stat(file)).size;
  const outPath = join(file, "..", `${index + 1}.webp`);

  await input
    .resize({
      width: phone ? undefined : max,
      height: phone ? max : undefined,
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outPath);

  const afterBytes = (await stat(outPath)).size;
  return { outPath, beforeBytes, afterBytes };
}

const dirs = await listDirs(ROOT);
let totalBefore = 0;
let totalAfter = 0;

for (const dir of dirs) {
  const files = await listImages(dir);
  if (!files.length) continue;
  console.log(`\n${dir}`);

  const results = [];
  for (let i = 0; i < files.length; i++) {
    const r = await optimize(files[i], i);
    results.push(r);
    totalBefore += r.beforeBytes;
    totalAfter += r.afterBytes;
    const pct = (100 * (1 - r.afterBytes / r.beforeBytes)).toFixed(1);
    console.log(
      `  ${files[i].split("/").pop()} → ${r.outPath.split("/").pop()}  ${(r.beforeBytes / 1024).toFixed(0)}KB → ${(r.afterBytes / 1024).toFixed(0)}KB  (-${pct}%)`,
    );
  }

  for (const f of files) await unlink(f);
}

const saved = (1 - totalAfter / totalBefore) * 100;
console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (-${saved.toFixed(1)}%)`,
);
