const n="./docs/en/packages/angular-intlayer/exports.md",a=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: angular-intlayer Package Documentation
description: Angular-specific integration for Intlayer, providing providers and services for Angular applications.
keywords:
  - angular-intlayer
  - angular
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - angular-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# angular-intlayer Package

The \`angular-intlayer\` package provides the necessary tools to integrate Intlayer into Angular applications. It includes providers and services for handling multilingual content.

## Installation

\`\`\`bash
npm install angular-intlayer
\`\`\`

## Exports

Import:

\`\`\`tsx
import "angular-intlayer";
\`\`\`

### Setup

| Function          | Description                                               |
| ----------------- | --------------------------------------------------------- |
| \`provideIntlayer\` | Function to provide Intlayer in your Angular application. |

### Hooks

| Hook                   | Description                                                                                                       | Related Doc |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------- |
| \`useIntlayer\`          | Based on \`useDictionary\`, but injects an optimized version of the dictionary from the generated declaration.      | -           |
| \`useDictionary\`        | Processes objects that look like dictionaries (key, content). It processes \`t()\` translations, enumerations, etc. | -           |
| \`useDictionaryAsync\`   | Same as \`useDictionary\`, but handles asynchronous dictionaries.                                                   | -           |
| \`useDictionaryDynamic\` | Same as \`useDictionary\`, but handles dynamic dictionaries.                                                        | -           |
| \`useLocale\`            | Returns the current locale and a function to set it.                                                              | -           |
| \`useIntl\`              | Returns the Intl object for the current locale.                                                                   | -           |
| \`useLoadDynamic\`       | Hook to load dynamic dictionaries.                                                                                | -           |

### Components

| Component                   | Description                                      |
| --------------------------- | ------------------------------------------------ |
| \`IntlayerMarkdownComponent\` | Angular component that renders markdown content. |
`,t="2026-01-21",e="2026-01-21",o="angular-intlayer Package Documentation",r="Angular-specific integration for Intlayer, providing providers and services for Angular applications.",i=["angular-intlayer","angular","internationalization","i18n"],s=["doc","packages","angular-intlayer","exports"],c=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],l="./docs/en/packages/angular-intlayer/exports.md",u="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/angular-intlayer/exports.md",d="/doc/packages/angular-intlayer/exports",p="https://intlayer.org/doc/packages/angular-intlayer/exports",g={id:n,content:a,createdAt:t,updatedAt:e,title:o,description:r,keywords:i,slugs:s,history:c,docKey:l,githubUrl:u,relativeUrl:d,url:p};export{a as content,t as createdAt,g as default,r as description,l as docKey,u as githubUrl,c as history,n as id,i as keywords,d as relativeUrl,s as slugs,o as title,e as updatedAt,p as url};
