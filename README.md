# bhm-hacknight-starter

A React single-page application presenting chronologically ordered mini biographies of Black History major figures and their contributions.

## Tech Stack

- **React** with **Vite** for fast development and builds
- **SCSS** for styling
- **Vercel** for deployment

## Getting Started

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment

This project is configured for Vercel. Push to your connected branch and Vercel will build and deploy automatically.

## Using This Repo with AI Assistants

This project includes a `CLAUDE.md` file that documents the full project structure, conventions, design system, and code standards. You can use it as a reference when working with any AI coding assistant.

### Quick Setup for Any AI Tool

1. **Share `CLAUDE.md`** at the start of your conversation to give the AI full project context.
2. **Specify the stack**: React + Vite + SCSS — no TypeScript, no Tailwind.
3. **Share `src/data/biographies.json`** when adding or editing biography entries so the AI matches the existing schema (`id`, `name`, `born`, `sortYear`, `description`).

### Google Gemini

- Import the repo into **Google IDX** or **AI Studio** for inline suggestions.
- Remind it to use SCSS variables (`$red`, `$green`, `$black`, `$white`) instead of hardcoded hex values.
- Works best with focused, single-file requests.

### ChatGPT

- Paste file contents directly — ChatGPT doesn't have filesystem access by default.
- Set a custom instruction: *"React + Vite + SCSS project. No TypeScript. Functional arrow components only. BEM naming. Colors: red #961d1d, black #000000, green #318540, white #F0F0F0."*
- Show an example biography entry when asking it to add new data.

### Claude / Claude Code

- Claude Code reads `CLAUDE.md` automatically — no extra setup needed.
- Use it via the CLI (`claude`) for direct filesystem access and git integration.

### Common Pitfalls

| Pitfall | What to tell the AI |
|---|---|
| Adds TypeScript | "This project uses plain JSX, not TSX" |
| Uses CSS modules or Tailwind | "Use SCSS with BEM naming in `styles.scss`" |
| Hardcodes colors | "Use SCSS variables from `_variables.scss`" |
| Creates class components | "Use functional arrow components only" |
| Puts data in components | "Data lives in `src/data/biographies.json`" |
