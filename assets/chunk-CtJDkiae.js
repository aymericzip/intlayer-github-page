const n="./docs/en/packages/vite-intlayer/exports.md",t=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: vite-intlayer Package Documentation
description: Vite plugin for Intlayer, providing dictionary aliases and watchers.
keywords:
  - vite-intlayer
  - vite
  - plugin
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - vite-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# vite-intlayer Package

The \`vite-intlayer\` package provides a Vite plugin to integrate Intlayer into your Vite-based application.

## Installation

\`\`\`bash
npm install vite-intlayer
\`\`\`

## Exports

### Plugin

Import:

\`\`\`tsx
import "vite-intlayer";
\`\`\`

| Function             | Description                                                           | Related Doc                                                                                                            |
| -------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| \`intlayer\`           | Main Vite plugin that integrates Intlayer into the build process.     | [intlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/intlayer.md)           |
| \`intlayerPlugin\`     | (**Deprecated**) Alias for \`intlayer\`.                                | [intlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/intlayer.md)           |
| \`intlayerProxy\`      | Development middleware plugin to handle locale detection and routing. | -                                                                                                                      |
| \`intlayerMiddleware\` | (**Deprecated**) Alias for \`intlayerProxy\`.                           | -                                                                                                                      |
| \`intlayerPrune\`      | Plugin to tree-shake and prune unused dictionaries during build.      | [intlayerPrune](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/intlayerPrune.md) |
`,e="2026-01-21",i="2026-01-21",a="vite-intlayer Package Documentation",r="Vite plugin for Intlayer, providing dictionary aliases and watchers.",o=["vite-intlayer","vite","plugin","internationalization","i18n"],l=["doc","packages","vite-intlayer","exports"],s=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],c="./docs/en/packages/vite-intlayer/exports.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/exports.md",p="/doc/packages/vite-intlayer/exports",y="https://intlayer.org/doc/packages/vite-intlayer/exports",g={id:n,content:t,createdAt:e,updatedAt:i,title:a,description:r,keywords:o,slugs:l,history:s,docKey:c,githubUrl:d,relativeUrl:p,url:y};export{t as content,e as createdAt,g as default,r as description,c as docKey,d as githubUrl,s as history,n as id,o as keywords,p as relativeUrl,l as slugs,a as title,i as updatedAt,y as url};
