const n="./docs/en/cli/sdk.md",t=`---
createdAt: 2024-08-11
updatedAt: 2025-11-22
title: CLI SDK
description: Learn how to use the Intlayer CLI SDK in your own code.
keywords:
  - SDK
  - CLI
  - Intlayer
  - Programmatic
slugs:
  - doc
  - concept
  - cli
  - sdk
---

# CLI SDK

The CLI SDK is a library that allows you to use the Intlayer CLI in your own code.

\`\`\`bash packageManager="npm"
npm install @intlayer/cli --save-dev
\`\`\`

\`\`\`bash packageManager="yarn"
yarn add @intlayer/cli --save-dev
\`\`\`

\`\`\`bash packageManager="pnpm"
pnpm add @intlayer/cli --save-dev
\`\`\`

\`\`\`bash packageManager="bun"
bun add @intlayer/cli --dev
\`\`\`

Example of usage:

\`\`\`ts
import {
  push,
  pull,
  fill,
  build,
  listContentDeclaration,
  testMissingTranslations,
  docTranslate,
  docReview,
  transform,
} from "@intlayer/cli";

push();
// ...
pull();
// ...
fill();
// ...
build();
// ...
listContentDeclaration();
// ...
testMissingTranslations();
// ...
docTranslate();
// ...
docReview();
// ...
transform();
// ...
\`\`\`
`,e="2024-08-11",a="2025-11-22",s="CLI SDK",o="Learn how to use the Intlayer CLI SDK in your own code.",c=["SDK","CLI","Intlayer","Programmatic"],l=["doc","concept","cli","sdk"],i="./docs/en/cli/sdk.md",r="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/sdk.md",d="/doc/concept/cli/sdk",p="https://intlayer.org/doc/concept/cli/sdk",u={id:n,content:t,createdAt:e,updatedAt:a,title:s,description:o,keywords:c,slugs:l,docKey:i,githubUrl:r,relativeUrl:d,url:p};export{t as content,e as createdAt,u as default,o as description,i as docKey,r as githubUrl,n as id,c as keywords,d as relativeUrl,l as slugs,s as title,a as updatedAt,p as url};
