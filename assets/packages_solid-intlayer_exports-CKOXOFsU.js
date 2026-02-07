const n="./docs/en/packages/solid-intlayer/exports.md",t=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: solid-intlayer Package Documentation
description: Solid-specific integration for Intlayer, providing providers and hooks for Solid applications.
keywords:
  - solid-intlayer
  - solidjs
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - solid-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# solid-intlayer Package

The \`solid-intlayer\` package provides the necessary tools to integrate Intlayer into Solid applications. It includes providers and hooks for handling multilingual content.

## Installation

\`\`\`bash
npm install solid-intlayer
\`\`\`

## Exports

### Provider

Import:

\`\`\`tsx
import "solid-intlayer";
\`\`\`

| Component          | Description                                                                      | Related Doc                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| \`IntlayerProvider\` | The main provider that wraps your application and provides the Intlayer context. | [IntlayerProvider](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/IntlayerProvider.md) |

### Hooks

Import:

\`\`\`tsx
import "solid-intlayer";
\`\`\`

| Hook                   | Description                                                                                                       | Related Doc                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \`useIntlayer\`          | Based on \`useDictionary\`, but injects an optimized version of the dictionary from the generated declaration.      | [useIntlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/useIntlayer.md)     |
| \`useDictionary\`        | Processes objects that look like dictionaries (key, content). It processes \`t()\` translations, enumerations, etc. | -                                                                                                                       |
| \`useDictionaryAsync\`   | Same as \`useDictionary\`, but handles asynchronous dictionaries.                                                   | -                                                                                                                       |
| \`useDictionaryDynamic\` | Same as \`useDictionary\`, but handles dynamic dictionaries.                                                        | -                                                                                                                       |
| \`useLocale\`            | Returns the current locale and a function to set it.                                                              | [useLocale](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/useLocale.md)         |
| \`useRewriteURL\`        | Client-side hook to manage URL rewrites. Automatically updates the URL if a localized rewrite rule exists.        | [useRewriteURL](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/useRewriteURL.md) |
| \`useIntl\`              | Returns the Intl object for the current locale.                                                                   | -                                                                                                                       |
| \`useLoadDynamic\`       | Hook to load dynamic dictionaries.                                                                                | -                                                                                                                       |
| \`t\`                    | Picks content based on the current locale.                                                                        | [translation](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/dictionary/translation.md)                  |

### Components

Import:

\`\`\`tsx
import "solid-intlayer";
\`\`\`

| Component          | Description                              |
| ------------------ | ---------------------------------------- |
| \`MarkdownProvider\` | Provider for markdown rendering context. |
`,e="2026-01-21",o="2026-01-21",i="solid-intlayer Package Documentation",a="Solid-specific integration for Intlayer, providing providers and hooks for Solid applications.",s=["solid-intlayer","solidjs","internationalization","i18n"],r=["doc","packages","solid-intlayer","exports"],l=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],c="./docs/en/packages/solid-intlayer/exports.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/exports.md",p="/doc/packages/solid-intlayer/exports",y="https://intlayer.org/doc/packages/solid-intlayer/exports",m={id:n,content:t,createdAt:e,updatedAt:o,title:i,description:a,keywords:s,slugs:r,history:l,docKey:c,githubUrl:d,relativeUrl:p,url:y};export{t as content,e as createdAt,m as default,a as description,c as docKey,d as githubUrl,l as history,n as id,s as keywords,p as relativeUrl,r as slugs,i as title,o as updatedAt,y as url};
