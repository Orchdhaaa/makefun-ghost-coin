// Copies LAUNCH.json from the repo root into the output directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, "LAUNCH.json"), join(outputDir, "LAUNCH.json"));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`failed to copy LAUNCH.json: ${message}`);
  process.exit(1);
}
