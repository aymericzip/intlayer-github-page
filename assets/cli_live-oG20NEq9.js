const e="./docs/en/cli/live.md",n=`---
createdAt: 2024-08-11
updatedAt: 2025-11-22
title: Live Sync Commands
description: Learn how to use Live Sync to reflect CMS content changes at runtime.
keywords:
  - Live Sync
  - CMS
  - Runtime
  - CLI
  - Intlayer
slugs:
  - doc
  - concept
  - cli
  - live
---

# Live Sync commands

Live Sync lets your app reflect CMS content changes at runtime. No rebuild or redeploy required. When enabled, updates are streamed to a Live Sync server that refreshes the dictionaries your application reads. See [Intlayer CMS](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/intlayer_CMS.md) for more details.

\`\`\`json fileName="package.json"
"scripts": {
  "intlayer:live:start": "npx intlayer live start --with 'next dev --turbopack'"
}
\`\`\`

## Arguments:

**Configuration options:**

- **\`--base-dir\`**: Specify the base directory for the project. To retrieve the intlayer configuration, the command will look for the \`intlayer.config.{ts,js,json,cjs,mjs}\` file in the base directory.

- **\`--no-cache\`**: Disable the cache.

  > Example: \`npx intlayer dictionary push --env-file .env.production.local\`

**Log options:**

- **\`--verbose\`**: Enable verbose logging for debugging. (default to true using CLI)
`,t="2024-08-11",o="2025-11-22",i="Live Sync Commands",c="Learn how to use Live Sync to reflect CMS content changes at runtime.",r=["Live Sync","CMS","Runtime","CLI","Intlayer"],s=["doc","concept","cli","live"],a="./docs/en/cli/live.md",l="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/live.md",d="/doc/concept/cli/live",y="https://intlayer.org/doc/concept/cli/live",p={id:e,content:n,createdAt:t,updatedAt:o,title:i,description:c,keywords:r,slugs:s,docKey:a,githubUrl:l,relativeUrl:d,url:y};export{n as content,t as createdAt,p as default,c as description,a as docKey,l as githubUrl,e as id,r as keywords,d as relativeUrl,s as slugs,i as title,o as updatedAt,y as url};
