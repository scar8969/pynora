# PYNORA

A design portfolio built as a **creative statement**. Rather than a neutral container for work samples, the site itself demonstrates design thinking, craft, and personality through its own execution — the portfolio is the proof of capability.

## Design Philosophy

> **The container is content.** Every design choice in the interface demonstrates capability; craft is proven through execution, not claimed in copy.

PYNORA treats the portfolio as **performance** — an artifact where the interface, interactions, and presentation are deliberate creative choices that reinforce the work they contain. The aesthetic is a fashion-lookbook editorial: off-white linen ground, refined grotesque sans, generous negative space, full-bleed project imagery, and scroll-as-page-turn. A dark mode inverts to deep charcoal with warm-white text.

## Features

- **Full-bleed project hero** — work is immediate, no hero section or cards
- **Project gallery & detail pages** — editorial spread layout with case-study depth (challenge, solution, role)
- **About & Contact** sections establishing designer identity
- **Custom cursor** and scroll-reveal micro-interactions for polish
- **Parallax** project hero for memorable motion
- **Responsive** — excellent mobile experience

## Tech Stack

- [Next.js](https://nextjs.org) 9 (React-based framework)
- [React](https://react.dev) 18
- [TypeScript](https://www.typescriptlang.org) 5
- CSS Modules for component-scoped styling

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the Next.js dev server       |
| `npm run build` | Build the production bundle        |
| `npm start`     | Start the production server        |
| `npm run lint`  | Run ESLint                         |

## Project Structure

```
pynora/
├── app/                  # App Router pages & layout
│   ├── about/            # About / bio section
│   ├── contact/          # Contact section
│   ├── project/[id]/     # Individual project detail pages
│   ├── layout.tsx        # Root layout (metadata, cursor)
│   └── page.tsx          # Home — project hero + grid
├── components/           # Navigation, Footer, Cursor, ProjectGrid,
│                         # ProjectHero, Parallax, ScrollReveal
├── lib/                  # Project data (projects.ts)
├── public/images/        # Project imagery
├── next.config.js
├── tsconfig.json
└── package.json
```

## License

[MIT](LICENSE)