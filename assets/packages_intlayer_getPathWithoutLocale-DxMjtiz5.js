const t="./docs/en/packages/intlayer/getPathWithoutLocale.md",o=`---
createdAt: 2025-08-23
updatedAt: 2025-08-23
title: getPathWithoutLocale Function Documentation | intlayer
description: See how to use the getPathWithoutLocale function for intlayer package
keywords:
  - getPathWithoutLocale
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
  - getPathWithoutLocale
history:
  - version: 5.5.10
    date: 2025-06-29
    changes: Init history
---

# Documentation: \`getPathWithoutLocale\` Functions in \`intlayer\`

## Description

Removes the locale segment from the given URL or pathname if present. It works with both absolute URLs and relative pathnames.

## Parameters

- \`inputUrl: string\`
  - **Description**: The complete URL string or pathname to process.
  - **Type**: \`string\`

- \`locales: Locales[]\`
  - **Description**: Optional array of supported locales. Defaults to the configured locales in the project.
  - **Type**: \`Locales[]\`

## Returns

- **Type**: \`string\`
- **Description**: The URL string or pathname without the locale segment.

## Example Usage

\`\`\`typescript codeFormat="typescript"
import { getPathWithoutLocale } from "intlayer";

console.log(getPathWithoutLocale("/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/en/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/fr/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("https://example.com/en/dashboard")); // Output: "https://example.com/dashboard"
\`\`\`

\`\`\`javascript codeFormat="esm"
import { getPathWithoutLocale } from "intlayer";

console.log(getPathWithoutLocale("/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/en/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/fr/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("https://example.com/en/dashboard")); // Output: "https://example.com/dashboard"
\`\`\`

\`\`\`javascript codeFormat="commonjs"
const { getPathWithoutLocale } = require("intlayer");

console.log(getPathWithoutLocale("/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/en/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("/fr/dashboard")); // Output: "/dashboard"
console.log(getPathWithoutLocale("https://example.com/en/dashboard")); // Output: "https://example.com/dashboard"
\`\`\`
`,e="2025-08-23",a="2025-08-23",n="getPathWithoutLocale Function Documentation | intlayer",s="See how to use the getPathWithoutLocale function for intlayer package",c=["getPathWithoutLocale","translation","Intlayer","intlayer","Internationalization","Documentation","Next.js","JavaScript","React"],i=["doc","packages","intlayer","getPathWithoutLocale"],h=[{version:"5.5.10",date:"2025-06-29",changes:"Init history"}],l="./docs/en/packages/intlayer/getPathWithoutLocale.md",r="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/intlayer/getPathWithoutLocale.md",u="/doc/packages/intlayer/getPathWithoutLocale",d="https://intlayer.org/doc/packages/intlayer/getPathWithoutLocale",p={id:t,content:o,createdAt:e,updatedAt:a,title:n,description:s,keywords:c,slugs:i,history:h,docKey:l,githubUrl:r,relativeUrl:u,url:d};export{o as content,e as createdAt,p as default,s as description,l as docKey,r as githubUrl,h as history,t as id,c as keywords,u as relativeUrl,i as slugs,n as title,a as updatedAt,d as url};
