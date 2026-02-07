const e="./docs/en/packages/next-intlayer/intlayerMiddleware.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: intlayerMiddleware Documentation | next-intlayer
description: See how to use the intlayerMiddleware function for next-intlayer package
keywords:
  - intlayerMiddleware
  - nextjs
  - middleware
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - next-intlayer
  - intlayerMiddleware
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Init doc
---

# intlayerMiddleware Documentation

The \`intlayerMiddleware\` function is a Next.js middleware that handles locale-based routing and redirects. It automatically detects the user's preferred locale and redirects them to the appropriate localized path if necessary.

## Usage

\`\`\`ts
// middleware.ts
export { intlayerMiddleware as middleware } from "next-intlayer";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
\`\`\`

## Description

The middleware performs the following tasks:

1. **Locale Detection**: It checks the URL path, cookies, and \`Accept-Language\` header to determine the user's locale.
2. **Redirection**: If the URL does not contain a locale prefix and the configuration requires one (or based on the user's preferences), it redirects to the localized URL.
3. **Cookie Management**: It can store the detected locale in a cookie for future requests.

## Parameters

The function takes the standard Next.js \`NextRequest\` as a parameter when used directly, or it can be exported as shown above.
`,t="2026-01-21",a="2026-01-21",i="intlayerMiddleware Documentation | next-intlayer",r="See how to use the intlayerMiddleware function for next-intlayer package",o=["intlayerMiddleware","nextjs","middleware","Intlayer","intlayer","Internationalization","Documentation"],d=["doc","packages","next-intlayer","intlayerMiddleware"],l=[{version:"8.0.0",date:"2026-01-21",changes:"Init doc"}],s="./docs/en/packages/next-intlayer/intlayerMiddleware.md",c="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/next-intlayer/intlayerMiddleware.md",y="/doc/packages/next-intlayer/intlayerMiddleware",h="https://intlayer.org/doc/packages/next-intlayer/intlayerMiddleware",p={id:e,content:n,createdAt:t,updatedAt:a,title:i,description:r,keywords:o,slugs:d,history:l,docKey:s,githubUrl:c,relativeUrl:y,url:h};export{n as content,t as createdAt,p as default,r as description,s as docKey,c as githubUrl,l as history,e as id,o as keywords,y as relativeUrl,d as slugs,i as title,a as updatedAt,h as url};
