const t="./docs/en/packages/intlayer/getLocale.md",e=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: getLocale Function Documentation | intlayer
description: See how to use the getLocale function for intlayer package
keywords:
  - getLocale
  - translation
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - intlayer
  - getLocale
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Init doc
---

# getLocale Function Documentation

The \`getLocale\` function allows you to detect the locale from a given string, such as a URL or a path.

## Usage

\`\`\`ts
import { getLocale } from "intlayer";

const locale = getLocale("/fr/about");

// Output: 'fr'
\`\`\`

## Parameters

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \`path\`    | \`string\` | The path or string to extract the locale from. |

## Returns

The detected locale, or the default locale if no locale is detected.
`,n="2026-01-21",a="2026-01-21",o="getLocale Function Documentation | intlayer",c="See how to use the getLocale function for intlayer package",l=["getLocale","translation","Intlayer","intlayer","Internationalization","Documentation"],i=["doc","packages","intlayer","getLocale"],r=[{version:"8.0.0",date:"2026-01-21",changes:"Init doc"}],s="./docs/en/packages/intlayer/getLocale.md",g="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/intlayer/getLocale.md",d="/doc/packages/intlayer/getLocale",u="https://intlayer.org/doc/packages/intlayer/getLocale",y={id:t,content:e,createdAt:n,updatedAt:a,title:o,description:c,keywords:l,slugs:i,history:r,docKey:s,githubUrl:g,relativeUrl:d,url:u};export{e as content,n as createdAt,y as default,c as description,s as docKey,g as githubUrl,r as history,t as id,l as keywords,d as relativeUrl,i as slugs,o as title,a as updatedAt,u as url};
