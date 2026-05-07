# readme-skills

> Bootstrap your project with professional AI-powered README generation and updating skills.

[![npm version](https://img.shields.io/npm/v/readme-skills.svg)](https://www.npmjs.com/package/readme-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dt/readme-skills.svg)](https://www.npmjs.com/package/readme-skills)

`readme-skills` is a CLI utility designed to quickly install high-quality agentic "skills" into your repository. These skills provide your AI coding assistants (like Antigravity, Cursor, or Windsurf) with the logic and templates needed to generate and maintain professional documentation.

## Table of Contents

- [About](#about)
- [Features](#features)
- [How it Works](#how-it-works)
- [Included Skills](#included-skills)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

Writing a good README is time-consuming. `readme-skills` solves this by providing your AI agent with a specialized "skill" file. Once installed, you can simply ask your agent to "generate a readme" or "update the docs", and it will follow the embedded instructions to produce production-quality results.

This project extracts pre-configured skill sets from bundled archives and places them in your project's `.agent/skills` directory, making them immediately accessible to AI tools that scan for local context.

## Features

- **🚀 Instant Setup** — Bootstrap your documentation workflow in seconds using `npx`.
- **✍️ Readme Generator** — A comprehensive skill for building polished READMEs from scratch.
- **🔄 Readme Updater** — A specialized skill for scanning code changes and keeping your documentation in sync.
- **📂 Standardized Pathing** — Automatically defaults to `./.agent/skills`, the emerging standard for agentic context.
- **🛠️ Zero Config** — Works out of the box with no complex setup or environment variables required.

## How it Works

The utility bundles specific `.skill` files which are compressed archives containing the skill's logic. When you run the CLI:

1. It identifies the bundled skills (`readme-generator` and `readme-updater`).
2. It extracts the core `SKILL.md` logic from each archive.
3. It saves them as clean, readable Markdown files in your target directory (default: `./.agent/skills/`).

Your AI agent can then "see" these files and use them as instructions for its own documentation tasks.

## Included Skills

### ✍️ Readme Generator

The `readme-generator` skill is designed for high-quality, zero-to-one documentation.

- **Auto-Tiering**: Automatically selects a "Minimal", "Standard", or "Full" template based on project complexity signals.
- **Context Awareness**: Infers project type, tech stack, and audience from your existing files.
- **Professional Sections**: Generates badges, TOCs, feature lists, installation guides, usage examples, and more.
- **Consistency**: Ensures every project has a standardized, premium look and feel.

### 🔄 Readme Updater

The `readme-updater` skill prevents "documentation rot" by syncing your README with the current state of your code.

- **Stale Content Audit**: Systematically checks versions, badges, installation steps, and API examples against the actual source code.
- **Surgical Edits**: Updates only the sections that have changed, preserving the original author's voice and structure.
- **Flagging**: Can be run in "Flag Mode" to simply report what's out of date without making changes.
- **Verification**: Checks for broken relative links and deprecated badge services.

## Installation

You don't need to install `readme-skills` globally. Simply run it via `npx`:

```bash
npx readme-skills
```

If you prefer a global installation:

```bash
npm install -g readme-skills
```

## Usage

Run the command in your project root to install the skills:

```bash
npx readme-skills
```

### Custom Target Directory

By default, skills are installed to `./.agent/skills`. You can specify a different directory if needed:

```bash
npx readme-skills ./my-custom-skills
# OR
npx readme-skills --target ./custom/path
```

### Using the Skills with Agents

Once installed, you can mention the skills to your AI agent. For example:

- "Use the @readme-generator skill to build a README for this repo."
- "Update the usage section of my README using the @readme-updater skill."

## Contributing

Contributions are welcome! If you have ideas for new skills or improvements to existing ones:

1. Fork the repo.
2. Create your branch (`git checkout -b feature/amazing-skill`).
3. Commit your changes (`git commit -m 'Add some amazing skill'`).
4. Push to the branch (`git push origin feature/amazing-skill`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Built with ❤️ by [ParthRana1023](https://github.com/ParthRana1023)
