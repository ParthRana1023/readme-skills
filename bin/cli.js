#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const childProcess = require("child_process");

const SKILLS = [
  { file: "readme-updater.skill", name: "readme-updater" },
  { file: "readme-generator.skill", name: "readme-generator" },
];

// Change this to the folder your editor/IDE expects.
const targetBase = process.argv[2] || path.join(process.cwd(), ".skills");

function extractSkillArchive(archivePath, destDir) {
  fs.mkdirSync(destDir, { recursive: true });

  // Uses system unzip. Works on most macOS/Linux environments.
  // For cross-platform packaging, swap this for a JS zip library.
  childProcess.execFileSync("unzip", ["-o", archivePath, "-d", destDir], {
    stdio: "inherit",
  });
}

function main() {
  const skillsDir = path.join(__dirname, "..", "skills");

  for (const skill of SKILLS) {
    const archivePath = path.join(skillsDir, skill.file);
    const installDir = path.join(targetBase, skill.name);

    if (!fs.existsSync(archivePath)) {
      console.error(`Missing skill archive: ${skill.file}`);
      process.exit(1);
    }

    console.log(`Installing ${skill.name}...`);
    extractSkillArchive(archivePath, installDir);
  }

  console.log(`Done. Installed skills to: ${targetBase}`);
}

main();
