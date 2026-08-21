# Salwa Qadir Personal Website

The source for Salwa Qadir's personal website, including the homepage, contact page, approved photography, responsive styling, and the From Bodyweight to Barbells program.

## Automatic publishing

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the website to GitHub Pages whenever a commit is pushed to `main`. It can also be run manually from the repository's **Actions** tab.

Published site: `https://salwaqadir.com/`

The `www.salwaqadir.com` variant redirects to the canonical apex domain through
GitHub Pages.

## Local development

Requirements: Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

## Production builds

- `npm run build` builds the existing hosted Sites version.
- `npm run build:github-pages` creates a static export in `out/` when the GitHub Pages environment variables are supplied.

## Repository visibility

The repository is private because it contains licensed photography. GitHub Pages hosting from a private repository requires an eligible GitHub plan.
