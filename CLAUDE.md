# CLAUDE.md

## Project Overview

**bhm-hacknight-starter** is a static web project that presents chronologically ordered Black history facts for open use. It is built with vanilla HTML, JavaScript, and SCSS — no frameworks.

## Repository Structure

```
bhm-hacknight-starter/
├── README.md          # Project description
└── CLAUDE.md          # This file — AI assistant guidelines
```

This is a starter/template repository in early stages. As the project grows, expect the following conventional structure:

```
bhm-hacknight-starter/
├── index.html         # Main HTML entry point
├── css/               # Compiled CSS output (do not edit directly)
├── scss/              # SCSS source files
│   └── styles.scss    # Main stylesheet
├── js/                # JavaScript source files
│   └── main.js        # Main script
├── assets/            # Images, fonts, and other static assets
├── data/              # Black history facts data (JSON or similar)
├── README.md
└── CLAUDE.md
```

## Tech Stack

- **HTML** — page structure and markup
- **JavaScript** — vanilla JS, no frameworks
- **SCSS** — styling via Sass preprocessor (compiles to CSS)

## Development Workflow

### Prerequisites

- A modern web browser
- An SCSS compiler (e.g., `sass` CLI, or a VS Code extension like "Live Sass Compiler")
- Optionally, a local dev server (e.g., `live-server`, `python -m http.server`, or the VS Code Live Server extension)

### Getting Started

1. Clone the repository
2. Compile SCSS to CSS: `sass scss/styles.scss css/styles.css` (or use a watch mode)
3. Open `index.html` in a browser or start a local dev server

### No Build System Yet

There is no `package.json`, bundler, or task runner configured. If one is added later, update this section accordingly.

## Code Conventions

### HTML
- Use semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, etc.)
- Keep markup accessible (use `alt` attributes on images, proper heading hierarchy, ARIA labels where needed)

### JavaScript
- Write vanilla ES6+ JavaScript (no jQuery, no frameworks)
- Use `const` and `let` — never `var`
- Use descriptive variable and function names
- Keep functions small and focused

### SCSS
- Write styles in `.scss` files under the `scss/` directory
- Never edit compiled CSS files directly
- Use variables for colors, fonts, and repeated values
- Use nesting sparingly (max 3 levels deep)

### Data
- Black history facts should be stored as structured data (e.g., JSON) rather than hardcoded in HTML
- Facts should include a date or year for chronological ordering
- Each fact entry should have at minimum: date/year, title, and description

## Git Conventions

- Branch names should be descriptive (e.g., `feature/add-timeline`, `fix/mobile-layout`)
- Write clear commit messages in imperative mood (e.g., "Add timeline component", "Fix date sorting")
- Keep commits focused — one logical change per commit

## Key Decisions

- **No framework** — this project intentionally uses vanilla HTML, JS, and SCSS for simplicity and accessibility to contributors of all skill levels
- **Chronological ordering** — facts are presented in date order; this is a core design requirement
- **Open use** — the project and its content are intended for open/public use
