const n="./docs/en/packages/vite-intlayer/intlayer.md",t=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: intlayer Vite Plugin Documentation | vite-intlayer
description: See how to use the intlayer plugin for vite-intlayer package
keywords:
  - intlayer
  - vite
  - plugin
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - vite-intlayer
  - intlayer
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Init doc
---

# intlayer Vite Plugin Documentation

The \`intlayer\` Vite plugin integrates Intlayer configuration into the build process. It handles dictionary aliases, starts the dictionary watcher in development mode, and prepares dictionaries for the build.

## Usage

\`\`\`ts
// vite.config.ts
import { defineConfig } from "vite";
import { intlayer } from "vite-intlayer";

export default defineConfig({
  plugins: [intlayer()],
});
\`\`\`

## Description

The plugin performs the following tasks:

1. **Prepare Dictionaries**: It compiles the dictionaries into optimized files at the start of the build or dev process.
2. **Watch Mode**: In development mode, it watches for changes in dictionary files and recompiles them automatically.
3. **Aliases**: it provides aliases for accessing the dictionaries in your application.
4. **Tree-shaking**: it supports tree-shaking unused translations through the \`intlayerPrune\` plugin.
`,e="2026-01-21",i="2026-01-21",a="intlayer Vite Plugin Documentation | vite-intlayer",o="See how to use the intlayer plugin for vite-intlayer package",r=["intlayer","vite","plugin","Intlayer","intlayer","Internationalization","Documentation"],s=["doc","packages","vite-intlayer","intlayer"],l=[{version:"8.0.0",date:"2026-01-21",changes:"Init doc"}],c="./docs/en/packages/vite-intlayer/intlayer.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/intlayer.md",y="/doc/packages/vite-intlayer/intlayer",p="https://intlayer.org/doc/packages/vite-intlayer/intlayer",g={id:n,content:t,createdAt:e,updatedAt:i,title:a,description:o,keywords:r,slugs:s,history:l,docKey:c,githubUrl:d,relativeUrl:y,url:p};export{t as content,e as createdAt,g as default,o as description,c as docKey,d as githubUrl,l as history,n as id,r as keywords,y as relativeUrl,s as slugs,a as title,i as updatedAt,p as url};
