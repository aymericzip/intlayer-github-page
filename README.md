# Intlayer Documentation Site

This repository contains the source code for the official [Intlayer](https://intlayer.org) documentation website. See [GitHub Project](https://github.com/aymericzip/intlayer) 

It is a modern, high-performance Single Page Application (SPA) built with **React**, **Vite**, and **TanStack Router**, designed to serve documentation with near-instant navigation and minimal initial bundle size.

## 🛠 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Routing**: TanStack Router (with file-based routing)
- **Styling**: Tailwind CSS v4
- **I18n**: Intlayer
- **Deployment**: GitHub Pages (Static Hosting)

## Architecture Overview

The documentation content flow works as follows:

1.  **Source**: Documentation lives as Markdown (`.md`) files in `../docs/en/`.
2.  **Generation**: The `scripts/generate-docs.ts` script runs before the build.
    - It creates `src/generated/docsIndex.json`: A map of titles and URLs for the sidebar.
    - It creates `src/generated/docs/*.json`: Individual files containing the compiled Markdown content.
3.  **Runtime**:
    - The **Router** loads the index immediately to build the sidebar.
    - When a user clicks a link, the **Loader** dynamically imports the specific JSON chunk for that page.

## Getting Started

### Prerequisites

- Node.js (v18+) or Bun
- Git

### Installation

```bash
git clone [https://github.com/aymericzip/intlayer-docs-site.git](https://github.com/aymericzip/intlayer-docs-site.git)
cd intlayer-docs-site
bun install

```

### Running Locally

Start the development server:

```bash
bun run dev

```

The site will be available at `http://localhost:3000`.

## Building & Deployment

### Build Process

To create a production build:

```bash
# 1. Generates the JSON docs and sitemap
# 2. Builds the Vite application
bun run build

```

This will output the static site to the `.output/public` directory.

### Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages via the `gh-pages` branch.

**Important**:

* The `vite.config.ts` is set with `base: '/intlayer-github-page/'`.
* The `router.tsx` is set with `basepath: '/intlayer-github-page'`.

To deploy manually:

```bash
bun run deploy

```

This script performs the following steps:

1. Builds the application.
2. Creates a `.nojekyll` file to bypass GitHub's default Jekyll processing (allowing `_assets` folders).
3. Copies `index.html` to `404.html` to support client-side routing on reload.
4. Pushes the `.output/public` folder to the `gh-pages` branch.

## Contributing

Contributions are welcome! If you find a bug or want to improve the documentation:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some improvement'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License.

