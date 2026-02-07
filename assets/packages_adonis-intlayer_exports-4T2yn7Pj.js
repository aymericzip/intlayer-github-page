const n="./docs/en/packages/adonis-intlayer/exports.md",e=`---
createdAt: 2026-01-30
updatedAt: 2026-01-30
title: adonis-intlayer Package Documentation
description: AdonisJS middleware for Intlayer, providing translation functions and locale detection.
keywords:
  - adonis-intlayer
  - adonisjs
  - middleware
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - adonis-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-30
    changes: Initial documentation
---

# adonis-intlayer Package

The \`adonis-intlayer\` package provides a middleware for AdonisJS applications to handle internationalization. It detects the user's locale and provides translation functions.

## Installation

\`\`\`bash
npm install adonis-intlayer
\`\`\`

## Exports

### Middleware

The package provides an AdonisJS middleware to handle internationalization.

| Function             | Description                                                                                                                                                                                                                                                     | Related Doc                                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| \`IntlayerMiddleware\` | AdonisJS middleware that detects the user's locale and populates the request context with Intlayer data. It also sets up a CLS (Async Local Storage) namespace for request lifecycle access, enabling the use of global functions like \`t\`, \`getIntlayer\`, etc. | [intlayer](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/adonis-intlayer/intlayer.md) |

### Functions

| Function        | Description                                                                                                                                                                                            | Related Doc                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| \`t\`             | Translation function that retrieves content for the current locale. Works within the request lifecycle managed by the \`intlayer\` middleware. Uses CLS (Async Local Storage) to access request context. | [translation](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/dictionary/translation.md) |
| \`getIntlayer\`   | Retrieves a dictionary by its key from the generated declaration and returns its content for the specified locale. Optimized version of \`getDictionary\`. Uses CLS to access request context.           | -                                                                                                      |
| \`getDictionary\` | Processes dictionary objects and returns content for the specified locale. Processes \`t()\` translations, enumerations, markdown, HTML, etc. Uses CLS to access request context.                        | -                                                                                                      |
| \`getLocale\`     | Retrieves the current locale from the request context using CLS.                                                                                                                                       | -                                                                                                      |
`,t="2026-01-30",a="2026-01-30",o="adonis-intlayer Package Documentation",i="AdonisJS middleware for Intlayer, providing translation functions and locale detection.",s=["adonis-intlayer","adonisjs","middleware","internationalization","i18n"],r=["doc","packages","adonis-intlayer","exports"],c=[{version:"8.0.0",date:"2026-01-30",changes:"Initial documentation"}],d="./docs/en/packages/adonis-intlayer/exports.md",l="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/adonis-intlayer/exports.md",p="/doc/packages/adonis-intlayer/exports",y="https://intlayer.org/doc/packages/adonis-intlayer/exports",u={id:n,content:e,createdAt:t,updatedAt:a,title:o,description:i,keywords:s,slugs:r,history:c,docKey:d,githubUrl:l,relativeUrl:p,url:y};export{e as content,t as createdAt,u as default,i as description,d as docKey,l as githubUrl,c as history,n as id,s as keywords,p as relativeUrl,r as slugs,o as title,a as updatedAt,y as url};
