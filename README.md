# nailtosun.github.io

Personal academic website of **Nail Tosun** — <https://nailtosun.github.io>

Built with the [Showlit](https://github.com/pm25/showlit) template (React, Vite, Tailwind CSS, shadcn/ui), using the light theme by default.

## Editing content

All content lives in YAML files under [`config/`](config). Edit them, commit, and push to `master`; GitHub Actions builds the site and deploys it to the `gh-pages` branch.

| File | What it controls |
| --- | --- |
| [`config/profile.yaml`](config/profile.yaml) | Name, photo, links, biography, research interests, Google Scholar metrics, education, work experience, skills, awards, courses |
| [`config/publications.yaml`](config/publications.yaml) | Publication list (`featured: true` → shown on the homepage) |
| [`config/projects.yaml`](config/projects.yaml) | Research / industrial projects (`featured: true` → shown on the homepage) |
| [`config/homepage.yaml`](config/homepage.yaml) | Order and visibility of homepage sections |
| [`config/sidebar.yaml`](config/sidebar.yaml) | Sidebar pages and profile picture |
| [`config/site.yaml`](config/site.yaml) | Site title and description |

Images go in [`public/images/`](public/images) and are referenced as `/images/<file>`.

The TypeScript files in `src/data/` are generated from the YAML files on every build — edit the YAML, not the generated files.

## Local development

Requires Node.js 22+.

```sh
npm install
npm run build:site-json && npm run convert:config   # regenerate data from config/*.yaml
npm run dev                                          # http://localhost:5173
```

`npm run build` produces the static site in `dist/`.

## Credits

Template: [Showlit](https://github.com/pm25/showlit) by Pin-Yen Huang (MIT License).
