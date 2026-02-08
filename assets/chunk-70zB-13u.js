const e="./docs/en/packages/intlayer/getLocaleName.md",a=`---
createdAt: 2025-08-23
updatedAt: 2025-08-23
title: getLocaleName Function Documentation | intlayer
description: See how to use the getLocaleName function for intlayer package
keywords:
  - getLocaleName
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
  - getLocaleName
history:
  - version: 7.5.0
    date: 2025-12-18
    changes: Add polyfills for React Native and older environments
  - version: 5.5.10
    date: 2025-06-29
    changes: Init history
---

# Documentation: \`getLocaleName\` Function in \`intlayer\`

## Description

The \`getLocaleName\` function returns the localized name of a given locale (\`targetLocale\`) in the display locale (\`displayLocale\`). If no \`targetLocale\` is provided, it returns the name of the \`displayLocale\` in its own language.

## Parameters

- \`displayLocale: Locales\`
  - **Description**: The locale in which the name of the target locale will be displayed.
  - **Type**: Enum or string representing valid locales.

- \`targetLocale?: Locales\`
  - **Description**: The locale whose name is to be localized.
  - **Type**: Optional. Enum or string representing valid locales.

## Returns

- **Type**: \`string\`
- **Description**: The localized name of the \`targetLocale\` in the \`displayLocale\`, or the \`displayLocale\`'s own name if \`targetLocale\` is not provided. If no translation is found, it returns \`"Unknown locale"\`.

## Example Usage

\`\`\`typescript codeFormat="typescript"
import { Locales, getLocaleName } from "intlayer";

getLocaleName(Locales.ENGLISH); // Output: "English"
getLocaleName(Locales.ENGLISH, Locales.FRENCH); // Output: "Anglais"
getLocaleName(Locales.ENGLISH, Locales.ESPANOL); // Output: "Inglés"
getLocaleName(Locales.ENGLISH, Locales.ENGLISH); // Output: "English"

getLocaleName(Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.ESPANOL); // Output: "Francés"
getLocaleName(Locales.FRENCH, Locales.ENGLISH); // Output: "French"

getLocaleName(Locales.CHINESE); // Output: "中文"
getLocaleName(Locales.CHINESE, Locales.FRENCH); // Output: "Chinois"
getLocaleName(Locales.CHINESE, Locales.ESPANOL); // Output: "Chino"
getLocaleName(Locales.CHINESE, Locales.ENGLISH); // Output: "Chinese"

getLocaleName("unknown-locale"); // Output: "Unknown locale"
\`\`\`

\`\`\`javascript codeFormat="esm"
import { Locales, getLocaleName } from "intlayer";

getLocaleName(Locales.ENGLISH); // Output: "English"
getLocaleName(Locales.ENGLISH, Locales.FRENCH); // Output: "Anglais"
getLocaleName(Locales.ENGLISH, Locales.ESPANOL); // Output: "Inglés"
getLocaleName(Locales.ENGLISH, Locales.ENGLISH); // Output: "English"

getLocaleName(Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.ESPANOL); // Output: "Francés"
getLocaleName(Locales.FRENCH, Locales.ENGLISH); // Output: "French"

getLocaleName(Locales.CHINESE); // Output: "中文"
getLocaleName(Locales.CHINESE, Locales.FRENCH); // Output: "Chinois"
getLocaleName(Locales.CHINESE, Locales.ESPANOL); // Output: "Chino"
getLocaleName(Locales.CHINESE, Locales.ENGLISH); // Output: "Chinese"

getLocaleName("unknown-locale"); // Output: "Unknown locale"
\`\`\`

\`\`\`javascript codeFormat="commonjs"
const { Locales, getLocaleName } = require("intlayer");

getLocaleName(Locales.ENGLISH); // Output: "English"
getLocaleName(Locales.ENGLISH, Locales.FRENCH); // Output: "Anglais"
getLocaleName(Locales.ENGLISH, Locales.ESPANOL); // Output: "Inglés"
getLocaleName(Locales.ENGLISH, Locales.ENGLISH); // Output: "English"

getLocaleName(Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.FRENCH); // Output: "Français"
getLocaleName(Locales.FRENCH, Locales.ESPANOL); // Output: "Francés"
getLocaleName(Locales.FRENCH, Locales.ENGLISH); // Output: "French"

getLocaleName(Locales.CHINESE); // Output: "中文"
getLocaleName(Locales.CHINESE, Locales.FRENCH); // Output: "Chinois"
getLocaleName(Locales.CHINESE, Locales.ESPANOL); // Output: "Chino"
getLocaleName(Locales.CHINESE, Locales.ENGLISH); // Output: "Chinese"

getLocaleName("unknown-locale"); // Output: "Unknown locale"
\`\`\`

## Edge Cases

- **No \`targetLocale\` provided:**
  - The function defaults to returning the \`displayLocale\`'s own name.
- **Missing translations:**
  - If \`localeNameTranslations\` does not contain an entry for the \`targetLocale\` or the specific \`displayLocale\`, the function falls back to the \`ownLocalesName\` or returns \`"Unknown locale"\`.

## Polyfills for React Native and Older Environments

The \`getLocaleName\` function relies on the \`Intl.DisplayNames\` API, which is not available in React Native or older JavaScript environments. If you're using \`getLocaleName\` in these environments, you need to add polyfills.

Import the polyfills early in your application, ideally in your entry point file (e.g., \`index.js\`, \`App.tsx\`, or \`main.tsx\`):

\`\`\`typescript
import "intl";
import "@formatjs/intl-locale/polyfill";
import "@formatjs/intl-displaynames/polyfill";
\`\`\`

For more details, see the [FormatJS polyfills documentation](https://formatjs.io/docs/polyfills/intl-displaynames/).
`,n="2025-08-23",t="2025-08-23",o="getLocaleName Function Documentation | intlayer",l="See how to use the getLocaleName function for intlayer package",c=["getLocaleName","translation","Intlayer","intlayer","Internationalization","Documentation","Next.js","JavaScript","React"],s=["doc","packages","intlayer","getLocaleName"],i=[{version:"7.5.0",date:"2025-12-18",changes:"Add polyfills for React Native and older environments"},{version:"5.5.10",date:"2025-06-29",changes:"Init history"}],L="./docs/en/packages/intlayer/getLocaleName.md",r="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/intlayer/getLocaleName.md",N="/doc/packages/intlayer/getLocaleName",u="https://intlayer.org/doc/packages/intlayer/getLocaleName",p={id:e,content:a,createdAt:n,updatedAt:t,title:o,description:l,keywords:c,slugs:s,history:i,docKey:L,githubUrl:r,relativeUrl:N,url:u};export{a as content,n as createdAt,p as default,l as description,L as docKey,r as githubUrl,i as history,e as id,c as keywords,N as relativeUrl,s as slugs,o as title,t as updatedAt,u as url};
