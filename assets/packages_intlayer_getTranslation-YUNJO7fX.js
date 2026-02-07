const n="./docs/en/packages/intlayer/getTranslation.md",t=`---
createdAt: 2025-08-23
updatedAt: 2025-08-23
title: getTranslation Function Documentation | intlayer
description: See how to use the getTranslation function for intlayer package
keywords:
  - getTranslation
  - translation
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
  - Next.js
  - JavaScript
  - React
slugs:
  - doc
  - packages
  - intlayer
  - getTranslation
history:
  - version: 5.5.10
    date: 2025-06-29
    changes: Init history
---

# Documentation: \`getTranslationContent\` Function in \`intlayer\`

## Description

The \`getTranslation\` function (also aliased as \`t\`) retrieves the content corresponding to a specific locale from a set of customizable language content. If the specified locale is not found, it defaults to returning the content for the default locale configured in the project.

For more details on how to declare translations, see the [Translation documentation](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/dictionary/translation.md).

## Parameters

- \`languageContent: CustomizableLanguageContent<Content>\`
  - **Description**: An object containing translations for various locales. Each key represents a locale, and its value is the corresponding content.
  - **Type**: \`CustomizableLanguageContent<Content>\`
    - \`Content\` can be any type, defaulting to \`string\`.

- \`locale: Locales\`
  - **Description**: The locale for which content is to be retrieved.
  - **Type**: \`Locales\`

## Returns

- **Type**: \`Content\`
- **Description**: The content corresponding to the specified locale. If the locale is not found, the content of the default locale is returned.

## Example Usage

### Basic Usage

\`\`\`typescript codeFormat="typescript"
import { getTranslationContent, Locales } from "intlayer";

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.ENGLISH
);

console.log(content); // Output: "Bonjour"
\`\`\`

\`\`\`javascript codeFormat="esm"
import { getTranslationContent, Locales } from "intlayer";

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.ENGLISH
);

console.log(content); // Output: "Bonjour"
\`\`\`

\`\`\`javascript codeFormat="commonjs"
const { getTranslationContent, Locales } = require("intlayer");

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.ENGLISH
);

console.log(content); // Output: "Bonjour"
\`\`\`

### Missing Locale:

\`\`\`typescript codeFormat="typescript"
import { getTranslationContent, Locales } from "intlayer";

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.SPANISH
);

console.log(content); // Output: "Hello" (default locale content)
\`\`\`

\`\`\`javascript codeFormat="esm"
import { getTranslationContent, Locales } from "intlayer";

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.SPANISH
);

console.log(content); // Output: "Hello" (default locale content)
\`\`\`

\`\`\`javascript codeFormat="commonjs"
const { getTranslationContent, Locales } = require("intlayer");

const content = getTranslationContent(
  {
    en: "Hello",
    fr: "Bonjour",
  },
  Locales.SPANISH
);

console.log(content); // Output: "Hello" (default locale content)
\`\`\`

### Using Custom Content Types:

\`\`\`typescript codeFormat="typescript"
import { getTranslationContent, Locales } from "intlayer";

const customContent = getTranslationContent<Record<string, string>>(
  {
    en: { greeting: "Hello" },
    fr: { greeting: "Bonjour" },
  },
  Locales.FRENCH
);

console.log(customContent.greeting); // Output: "Bonjour"
\`\`\`

\`\`\`javascript codeFormat="esm"
import { getTranslationContent, Locales } from "intlayer";

const customContent = getTranslationContent<Record<string, string>>(
  {
    en: { greeting: "Hello" },
    fr: { greeting: "Bonjour" },
  },
  Locales.FRENCH
);

console.log(customContent.greeting); // Output: "Bonjour"
\`\`\`

\`\`\`javascript codeFormat="commonjs"
const { getTranslationContent, Locales } = require("intlayer");

const customContent = getTranslationContent<Record<string, string>>(
  {
    en: { greeting: "Hello" },
    fr: { greeting: "Bonjour" },
  },
  Locales.FRENCH
);

console.log(customContent.greeting); // Output: "Bonjour"
\`\`\`

## Edge Cases

- **Locale Not Found:**
  - When the \`locale\` is not found in the \`languageContent\`, the function returns the content for the default locale.
- **Incomplete Language Content:**
  - If a locale is partially defined, the function does not merge contents. It strictly retrieves the value of the specified locale or falls back to the default.
- **TypeScript Enforcement:**
  - If the locales in \`languageContent\` do not match the project configuration, TypeScript will enforce all required locales to be defined, ensuring the content is complete and type-safe.
`,e="2025-08-23",o="2025-08-23",a="getTranslation Function Documentation | intlayer",r="See how to use the getTranslation function for intlayer package",s=["getTranslation","translation","Intlayer","intlayer","Internationalization","Documentation","Next.js","JavaScript","React"],c=["doc","packages","intlayer","getTranslation"],l=[{version:"5.5.10",date:"2025-06-29",changes:"Init history"}],i="./docs/en/packages/intlayer/getTranslation.md",g="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/intlayer/getTranslation.md",u="/doc/packages/intlayer/getTranslation",p="https://intlayer.org/doc/packages/intlayer/getTranslation",d={id:n,content:t,createdAt:e,updatedAt:o,title:a,description:r,keywords:s,slugs:c,history:l,docKey:i,githubUrl:g,relativeUrl:u,url:p};export{t as content,e as createdAt,d as default,r as description,i as docKey,g as githubUrl,l as history,n as id,s as keywords,u as relativeUrl,c as slugs,a as title,o as updatedAt,p as url};
