const e="./docs/en/packages/next-intlayer/useRewriteURL.md",t=`---
updatedAt: 2025-08-23
createdAt: 2025-08-23
title: useRewriteURL Hook Documentation
description: Next.js-specific hook for managing localized URL rewrites in Intlayer.
keywords:
  - useRewriteURL
  - next-intlayer
  - nextjs
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - next-intlayer
  - useRewriteURL
---

# useRewriteURL Hook

The \`useRewriteURL\` hook for Next.js is a client-side hook that automatically manages localized URL rewrites. It ensures that the browser URL always reflects the "pretty" localized path defined in your \`intlayer.config.ts\`, even if the user manually types a canonical path with a locale prefix.

This hook works silently by using \`window.history.replaceState\`, avoiding redundant Next.js router navigations or page refreshes.

## Usage

Simply call the hook in a Client Component that is part of your layout.

\`\`\`tsx
"use client";

import { useRewriteURL } from "next-intlayer";

const MyClientComponent = () => {
  // Automatically correct /fr/privacy-notice to /fr/politique-de-confidentialite in the address bar
  useRewriteURL();

  return null;
};
\`\`\`

## How it works

1. **Path Monitoring**: The hook listens for changes in the user's \`locale\`.
2. **Rewrite Detection**: It checks the current \`window.location.pathname\` against the rewrite rules in your configuration.
3. **URL Correction**: If a prettier localized alias is found for the current path, the hook triggers a \`window.history.replaceState\` to update the address bar while keeping the user on the same internal page.

## Why use it in Next.js?

While the \`intlayerMiddleware\` handles server-side rewrites and initial redirects, the \`useRewriteURL\` hook ensures that the browser URL stays consistent with your preferred SEO structure even after client-side transitions.

- **Clean URLs**: Enforces the use of localized segments like \`/fr/essais\` instead of \`/fr/tests\`.
- **Performance**: Updates the address bar without triggering a full router cycle or re-fetching data.
- **SEO Alignment**: Prevents duplicate content issues by ensuring only one URL version is visible to the user and search engine bots.
`,n="2025-08-23",i="2025-08-23",r="useRewriteURL Hook Documentation",s="Next.js-specific hook for managing localized URL rewrites in Intlayer.",a=["useRewriteURL","next-intlayer","nextjs","internationalization","i18n"],o=["doc","packages","next-intlayer","useRewriteURL"],l="./docs/en/packages/next-intlayer/useRewriteURL.md",c="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/next-intlayer/useRewriteURL.md",u="/doc/packages/next-intlayer/useRewriteURL",d="https://intlayer.org/doc/packages/next-intlayer/useRewriteURL",h={id:e,content:t,updatedAt:n,createdAt:i,title:r,description:s,keywords:a,slugs:o,docKey:l,githubUrl:c,relativeUrl:u,url:d};export{t as content,i as createdAt,h as default,s as description,l as docKey,c as githubUrl,e as id,a as keywords,u as relativeUrl,o as slugs,r as title,n as updatedAt,d as url};
