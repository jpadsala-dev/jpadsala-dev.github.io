# Jay Padsala — Portfolio

Static portfolio site built with [Astro](https://astro.build). Styling follows the Wise `design.md`
from superdesign.dev: lime opening band, heavy condensed display type, pill controls,
hairlines instead of shadows, and one deep-forest band.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

Requires Node 22+. Astro is pinned to v5 because Astro 6 needs Node ≥ 22.23.4.

## Where things live

| What | File |
| --- | --- |
| Résumé content (intro, experience, stack, links) | `src/data/profile.ts` |
| **Personal** demo projects | `src/data/projects.ts` |
| Design tokens + type scale + buttons | `src/styles/global.css` |
| Sections | `src/components/*.astro` |
| Downloadable résumé | `public/jay-padsala-resume.pdf` |

## Adding a personal project

Append an entry to `projects` in `src/data/projects.ts` (the commented example shows every field).
Drop a screenshot in `public/projects/` and reference it as `/projects/<file>`.
The home page switches from the "on the way" panel to project cards automatically, and each
project gets its own page at `/projects/<slug>`.

Employer and client apps stay in `profile.ts → experience[].companyWork`; they are never shown as
personal work.

## Before deploying

- Set `site` in `astro.config.mjs` to the real domain.
- Add your GitHub URL in `profile.ts → links.github` (the link is hidden while it's empty).
- Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Fonts

Wise Sans is proprietary, so headlines use **Archivo** (variable, 900 weight at 75% width) as the
condensed display face. Body copy is **Inter**. Both are self-hosted via Fontsource.
