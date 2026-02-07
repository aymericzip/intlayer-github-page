const e="./docs/en/packages/solid-intlayer/useRewriteURL.md",t=`---
updatedAt: 2025-08-23
createdAt: 2025-08-23
title: useRewriteURL Hook Documentation
description: Solid-specific hook for managing localized URL rewrites in Intlayer.
keywords:
  - useRewriteURL
  - solid-intlayer
  - solidjs
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - solid-intlayer
  - useRewriteURL
---

# useRewriteURL Hook

The \`useRewriteURL\` hook for SolidJS is designed to manage localized URL rewrites on the client side. It automatically corrects the browser's URL to its "pretty" localized version based on the current locale and the configuration in \`intlayer.config.ts\`.

By using \`window.history.replaceState\`, it avoids redundant Solid Router navigations.

## Usage

Call the hook within a component that is part of your application.

\`\`\`tsx
import { useRewriteURL } from "solid-intlayer";

const Layout = (props) => {
  // Automatically correct /fr/tests to /fr/essais in the address bar if a rewrite rule exists
  useRewriteURL();

  return <>{props.children}</>;
};
\`\`\`

## How it works

1. **Detection**: The hook uses \`createEffect\` to monitor changes in the reactive \`locale()\`.
2. **Matching**: It identifies if the current \`window.location.pathname\` corresponds to a canonical route that has a prettier localized alias for the current language.
3. **URL Correction**: If a prettier alias is found, the hook calls \`window.history.replaceState\` to update the address bar without affecting the internal navigation state or causing component re-renders.

## Why use it?

- **Authoritative URLs**: Enforces a single URL for each localized version of your content, which is crucial for SEO.
- **Developer Convenience**: Allows you to keep your internal route definitions canonical while exposing user-friendly, localized paths to the outside world.
- **Consistency**: Corrects URLs when users manually type a path that doesn't follow your preferred localization rules.

---
`,n="2025-08-23",o="2025-08-23",i="useRewriteURL Hook Documentation",s="Solid-specific hook for managing localized URL rewrites in Intlayer.",a=["useRewriteURL","solid-intlayer","solidjs","internationalization","i18n"],r=["doc","packages","solid-intlayer","useRewriteURL"],l="./docs/en/packages/solid-intlayer/useRewriteURL.md",c="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/useRewriteURL.md",d="/doc/packages/solid-intlayer/useRewriteURL",u="https://intlayer.org/doc/packages/solid-intlayer/useRewriteURL",h={id:e,content:t,updatedAt:n,createdAt:o,title:i,description:s,keywords:a,slugs:r,docKey:l,githubUrl:c,relativeUrl:d,url:u};export{t as content,o as createdAt,h as default,s as description,l as docKey,c as githubUrl,e as id,a as keywords,d as relativeUrl,r as slugs,i as title,n as updatedAt,u as url};
