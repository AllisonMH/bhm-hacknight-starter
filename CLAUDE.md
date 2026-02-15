# CLAUDE.md

## Project Overview

**bhm-hacknight-starter** is a React single-page application that presents chronologically ordered mini biographies of Black History major figures and their contributions. It is built with React, Vite, and SCSS, and deployed to Vercel.

## Repository Structure

```
bhm-hacknight-starter/
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── vercel.json                   # Vercel deployment config
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component
│   ├── components/
│   │   ├── Header.jsx            # Page header with title
│   │   ├── Timeline.jsx          # Timeline layout, loads and sorts biographies
│   │   ├── BiographyCard.jsx     # Individual biography card
│   │   └── Footer.jsx            # Page footer
│   ├── data/
│   │   └── biographies.json      # All biography entries (sorted by sortYear)
│   └── scss/
│       ├── _variables.scss       # Colors, spacing, breakpoints
│       └── styles.scss           # All component styles (BEM naming)
├── README.md
└── CLAUDE.md
```

## Tech Stack

- **React** — UI components (functional components, no class components)
- **Vite** — build tool and dev server
- **SCSS** — styling via Sass preprocessor (Vite handles compilation)
- **Vercel** — hosting and deployment

## Design System

### Color Palette
- **Red:** `#961d1d` — accents, timeline dots, card badges
- **Black:** `#000000` — page background
- **Green:** `#318540` — accents, alternating card elements
- **White:** `#F0F0F0` — all text

### SCSS Variables
All design tokens are defined in `src/scss/_variables.scss`. Use these variables rather than hardcoding values.

### CSS Architecture
- BEM naming convention (`.block__element--modifier`)
- Component styles live in `src/scss/styles.scss`
- Max 3 levels of SCSS nesting

## Development Workflow

### Prerequisites

- Node.js (LTS)
- npm

### Getting Started

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

Output goes to `dist/`.

### Deployment

The project is configured for Vercel via `vercel.json`. Push to the connected branch and Vercel builds and deploys automatically.

## Code Conventions

### React / JavaScript
- Functional components only (arrow functions)
- Use `const` and `let` — never `var`
- Props are destructured in function parameters
- Keep components small and focused
- Data lives in `src/data/` as JSON, not hardcoded in components

### SCSS
- Write styles in `.scss` files under `src/scss/`
- Use variables from `_variables.scss` for colors, spacing, and breakpoints
- BEM naming convention
- Nesting max 3 levels deep

### Data
- Biographies are stored in `src/data/biographies.json`
- Each entry has: `id`, `name`, `born`, `sortYear`, `description`
- `sortYear` determines chronological display order
- The `Timeline` component sorts entries by `sortYear` ascending

## Git Conventions

- Branch names should be descriptive (e.g., `feature/add-timeline`, `fix/mobile-layout`)
- Write clear commit messages in imperative mood (e.g., "Add timeline component", "Fix date sorting")
- Keep commits focused — one logical change per commit

## Key Decisions

- **React + Vite** — chosen for fast development, component-based architecture, and easy Vercel deployment
- **Chronological ordering** — biographies are presented in date order via `sortYear`; this is a core design requirement
- **Open use** — the project and its content are intended for open/public use
- **Red/Black/Green palette** — intentional Pan-African color scheme
