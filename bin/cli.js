#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const AdmZip = require("adm-zip");

const SKILLS = [
  {
    archive: "readme-updater.skill",
    output: "readme-updater.md",
  },
  {
    archive: "readme-generator.skill",
    output: "readme-generator.md",
  },
];

function parseArgs(argv) {
  const args = { target: null, help: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "-h" || a === "--help") args.help = true;
    else if (a === "-t" || a === "--target") {
      args.target = argv[i + 1];
      i++;
    } else if (!args.target && !a.startsWith("-")) {
      args.target = a;
    }
  }
  return args;
}

function usage() {
  console.log(
    `readme-skills\n\nUsage:\n  npx readme-skills [target-directory]\n  npx readme-skills --target <directory>\n\nDefault target:\n  ./.agent/skills\n`,
  );
}

function findSkillMd(zip) {
  const entries = zip.getEntries();
  const entry = entries.find((e) => e.entryName.endsWith("SKILL.md"));
  if (!entry) return null;
  return { entry, content: zip.readAsText(entry, "utf8") };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    usage();
    process.exit(0);
  }

  const targetRoot = path.resolve(
    args.target || path.join(process.cwd(), ".agent", "skills"),
  );
  const skillsDir = path.join(__dirname, "..", "skills");

  ensureDir(targetRoot);

  for (const skill of SKILLS) {
    const archivePath = path.join(skillsDir, skill.archive);
    if (!fs.existsSync(archivePath)) {
      throw new Error(`Missing bundled archive: ${skill.archive}`);
    }

    const zip = new AdmZip(archivePath);
    const found = findSkillMd(zip);
    if (!found) {
      throw new Error(`No SKILL.md found inside ${skill.archive}`);
    }

    const destPath = path.join(targetRoot, skill.output);
    fs.writeFileSync(destPath, found.content, "utf8");
    console.log(`Installed ${skill.output} -> ${destPath}`);
  }

  console.log(`\nDone. Skills installed in ${targetRoot}`);
}

try {
  main();
} catch (error) {
  console.error(`\nError: ${error.message}`);
  process.exit(1);
}
