const t="./docs/en/packages/fastify-intlayer/exports.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: fastify-intlayer Package Documentation
description: Fastify plugin for Intlayer, providing translation functions and locale detection.
keywords:
  - fastify-intlayer
  - fastify
  - plugin
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - fastify-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# fastify-intlayer Package

The \`fastify-intlayer\` package provides a plugin for Fastify applications to handle internationalization. It detects the user's locale and decorates the request object.

## Installation

\`\`\`bash
npm install fastify-intlayer
\`\`\`

## Exports

### Plugin

Import:

\`\`\`tsx
import "fastify-intlayer";
\`\`\`

| Function   | Description                                                                                                                                                                                                                                                                                                            | Related Doc                                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| \`intlayer\` | Fastify plugin that integrates Intlayer into your Fastify application. Handles locale detection from storage (cookies, headers), decorates the request object with \`intlayer\` data containing \`t\`, \`getIntlayer\`, and \`getDictionary\`, and sets up CLS namespace for programmatic access during the request lifecycle. | [intlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/fastify-intlayer/intlayer.md) |

### Functions

Import:

\`\`\`tsx
import "fastify-intlayer";
\`\`\`

| Function        | Description                                                                                                                                                                                                                                       | Related Doc                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| \`t\`             | Global translation function that retrieves content for the current locale in Fastify. Utilizes CLS (Async Local Storage) and must be used within a request context managed by the \`intlayer\` plugin. Can also be accessed via \`req.intlayer.t\`.   | [translation](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/dictionary/translation.md) |
| \`getIntlayer\`   | Retrieves a dictionary by its key from the generated declaration and returns its content for the specified locale. Optimized version of \`getDictionary\`. Uses CLS to access request context. Can also be accessed via \`req.intlayer.getIntlayer\`. | -                                                                                                      |
| \`getDictionary\` | Processes dictionary objects and returns content for the specified locale. Processes \`t()\` translations, enumerations, markdown, HTML, etc. Uses CLS to access request context. Can also be accessed via \`req.intlayer.getDictionary\`.            | -                                                                                                      |
`,e="2026-01-21",a="2026-01-21",i="fastify-intlayer Package Documentation",s="Fastify plugin for Intlayer, providing translation functions and locale detection.",o=["fastify-intlayer","fastify","plugin","internationalization","i18n"],r=["doc","packages","fastify-intlayer","exports"],c=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],l="./docs/en/packages/fastify-intlayer/exports.md",y="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/fastify-intlayer/exports.md",d="/doc/packages/fastify-intlayer/exports",f="https://intlayer.org/doc/packages/fastify-intlayer/exports",p={id:t,content:n,createdAt:e,updatedAt:a,title:i,description:s,keywords:o,slugs:r,history:c,docKey:l,githubUrl:y,relativeUrl:d,url:f};export{n as content,e as createdAt,p as default,s as description,l as docKey,y as githubUrl,c as history,t as id,o as keywords,d as relativeUrl,r as slugs,i as title,a as updatedAt,f as url};
