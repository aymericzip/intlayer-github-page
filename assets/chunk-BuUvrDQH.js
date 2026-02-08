const n="./docs/en/packages/hono-intlayer/exports.md",t=`---
createdAt: 2026-01-29
updatedAt: 2026-01-29
title: hono-intlayer Package Documentation
description: Hono middleware for Intlayer, providing translation functions and locale detection.
keywords:
  - hono-intlayer
  - hono
  - middleware
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - hono-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-29
    changes: Unified documentation for all exports
---

# hono-intlayer Package

The \`hono-intlayer\` package provides a middleware for Hono applications to handle internationalization. It detects the user's locale and populates the context object.

## Installation

\`\`\`bash
npm install hono-intlayer
\`\`\`

## Exports

### Middleware

Import:

\`\`\`tsx
import { intlayer } from "hono-intlayer";
\`\`\`

| Function   | Description                                                                                                                                                                                                                                                                        | Related Doc                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| \`intlayer\` | Hono middleware that integrates Intlayer into your Hono application. Handles locale detection from storage (cookies, headers), populates the context with \`t\`, \`getIntlayer\`, and \`getDictionary\`, and sets up CLS namespace for programmatic access during the request lifecycle. | [intlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/hono-intlayer/intlayer.md) |

### Functions

Import:

\`\`\`tsx
import { t, getIntlayer, getDictionary } from "hono-intlayer";
\`\`\`

| Function        | Description                                                                                                                                                                                                                             | Related Doc                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| \`t\`             | Global translation function that retrieves content for the current locale in Hono. Utilizes CLS (Async Local Storage) and must be used within a request context managed by the \`intlayer\` middleware. Can also be accessed via context. | [translation](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/dictionary/translation.md) |
| \`getIntlayer\`   | Retrieves a dictionary by its key from the generated declaration and returns its content for the specified locale. Optimized version of \`getDictionary\`. Uses CLS to access request context. Can also be accessed via context.          | -                                                                                                      |
| \`getDictionary\` | Processes dictionary objects and returns content for the specified locale. Processes \`t()\` translations, enumerations, markdown, HTML, etc. Uses CLS to access request context. Can also be accessed via context.                       | -                                                                                                      |
`,e="2026-01-29",o="2026-01-29",a="hono-intlayer Package Documentation",i="Hono middleware for Intlayer, providing translation functions and locale detection.",r=["hono-intlayer","hono","middleware","internationalization","i18n"],s=["doc","packages","hono-intlayer","exports"],c=[{version:"8.0.0",date:"2026-01-29",changes:"Unified documentation for all exports"}],l="./docs/en/packages/hono-intlayer/exports.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/hono-intlayer/exports.md",p="/doc/packages/hono-intlayer/exports",y="https://intlayer.org/doc/packages/hono-intlayer/exports",h={id:n,content:t,createdAt:e,updatedAt:o,title:a,description:i,keywords:r,slugs:s,history:c,docKey:l,githubUrl:d,relativeUrl:p,url:y};export{t as content,e as createdAt,h as default,i as description,l as docKey,d as githubUrl,c as history,n as id,r as keywords,p as relativeUrl,s as slugs,a as title,o as updatedAt,y as url};
