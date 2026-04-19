# RenanMSV.github.io

Personal portfolio and projects page, built with [Eleventy](https://www.11ty.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/).

## Stack

- **Eleventy** - Static site generator
- **Nunjucks** - Templating
- **Tailwind CSS** - Styling via CDN

## Structure

```
src/
  _data/              # JSON data files (projects, tech stack, tag colors)
  _includes/          # Nunjucks partials (card, tag)
  public/             # Static assets (JS, CSS, images)
  index.njk           # Main page template
eleventy.config.js    # Eleventy config
```

## Development

```bash
npm install
npm start       # serves at localhost:8080 with live reload
npm run build   # builds to dist/
```

## Updating content

All content is data-driven. To add or update projects, edit `src/_data/projects.json`. No template changes needed.

## Deployment

Pushing to `main` automatically triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages.
