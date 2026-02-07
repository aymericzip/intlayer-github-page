const n="./docs/en/packages/vite-intlayer/intlayerPrune.md",e=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: intlayerPrune Vite Plugin Documentation | vite-intlayer
description: See how to use the intlayerPrune plugin for vite-intlayer package
keywords:
  - intlayerPrune
  - vite
  - plugin
  - tree-shaking
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - vite-intlayer
  - intlayerPrune
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Init doc
---

# intlayerPrune Vite Plugin Documentation

The \`intlayerPrune\` Vite plugin is used to tree-shake and prune unused dictionaries from your application bundle. This helps reduce the final bundle size by only including the necessary multilingual content.

## Usage

\`\`\`ts
// vite.config.ts
import { defineConfig } from "vite";
import { intlayer, intlayerPrune } from "vite-intlayer";

export default defineConfig({
  plugins: [intlayer(), intlayerPrune()],
});
\`\`\`

## Description

The plugin analyzes your source code to identify which dictionary keys are actually used. It then removes any unused content from the bundled dictionary files. This is particularly useful for large projects with many dictionaries where only a subset is used in specific pages or components.
`,t="2026-01-21",i="2026-01-21",a="intlayerPrune Vite Plugin Documentation | vite-intlayer",r="See how to use the intlayerPrune plugin for vite-intlayer package",o=["intlayerPrune","vite","plugin","tree-shaking","Intlayer","intlayer","Internationalization","Documentation"],l=["doc","packages","vite-intlayer","intlayerPrune"],s=[{version:"8.0.0",date:"2026-01-21",changes:"Init doc"}],c="./docs/en/packages/vite-intlayer/intlayerPrune.md",u="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vite-intlayer/intlayerPrune.md",y="/doc/packages/vite-intlayer/intlayerPrune",d="https://intlayer.org/doc/packages/vite-intlayer/intlayerPrune",p={id:n,content:e,createdAt:t,updatedAt:i,title:a,description:r,keywords:o,slugs:l,history:s,docKey:c,githubUrl:u,relativeUrl:y,url:d};export{e as content,t as createdAt,p as default,r as description,c as docKey,u as githubUrl,s as history,n as id,o as keywords,y as relativeUrl,l as slugs,a as title,i as updatedAt,d as url};
