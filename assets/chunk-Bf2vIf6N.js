const e="./docs/en/packages/vue-intlayer/useRewriteURL.md",t=`---
updatedAt: 2025-08-23
createdAt: 2025-08-23
title: useRewriteURL Composable Documentation
description: Vue-specific composable for managing localized URL rewrites in Intlayer.
keywords:
  - useRewriteURL
  - vue-intlayer
  - vue
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - vue-intlayer
  - useRewriteURL
---

# useRewriteURL Composable

The \`useRewriteURL\` composable for Vue 3 is designed to handle localized URL rewrites on the client side. It automatically corrects the browser's URL to its "pretty" localized version based on the user's current locale and the configuration in \`intlayer.config.ts\`.

It works by using \`window.history.replaceState\`, which avoids triggering unwanted Vue Router navigations.

## Usage

Call the composable within your \`setup()\` function or \`<script setup>\`.

\`\`\`vue
<script setup>
import { useRewriteURL } from "vue-intlayer";

// Automatically correct /fr/tests to /fr/essais in the address bar if a rewrite rule exists
useRewriteURL();
<\/script>

<template>
  <router-view />
</template>
\`\`\`

## How it works

1. **Reactive Monitoring**: The composable sets up a \`watch\` on the user's \`locale\`.
2. **Rewrite Matching**: Whenever the locale changes (or on mount), it checks if the current \`window.location.pathname\` matches a canonical route that has a prettier localized alias.
3. **URL Correction**: If a prettier alias is found, the composable calls \`window.history.replaceState\` to update the address bar without reloading the page or losing router state.

## Why use it?

- **SEO Optimization**: Ensures search engines index the authoritative localized version of your URLs.
- **Improved UX**: Corrects manually entered URLs to reflect your preferred naming (e.g., \`/fr/a-propos\` instead of \`/fr/about\`).
- **Low Overhead**: Silently updates the URL without re-triggering component lifecycles or navigation guards.

---
`,n="2025-08-23",i="2025-08-23",a="useRewriteURL Composable Documentation",o="Vue-specific composable for managing localized URL rewrites in Intlayer.",r=["useRewriteURL","vue-intlayer","vue","internationalization","i18n"],s=["doc","packages","vue-intlayer","useRewriteURL"],c="./docs/en/packages/vue-intlayer/useRewriteURL.md",l="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vue-intlayer/useRewriteURL.md",u="/doc/packages/vue-intlayer/useRewriteURL",d="https://intlayer.org/doc/packages/vue-intlayer/useRewriteURL",p={id:e,content:t,updatedAt:n,createdAt:i,title:a,description:o,keywords:r,slugs:s,docKey:c,githubUrl:l,relativeUrl:u,url:d};export{t as content,i as createdAt,p as default,o as description,c as docKey,l as githubUrl,e as id,r as keywords,u as relativeUrl,s as slugs,a as title,n as updatedAt,d as url};
