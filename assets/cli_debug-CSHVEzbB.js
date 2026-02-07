const n="./docs/en/cli/debug.md",e=`---
createdAt: 2024-08-11
updatedAt: 2025-11-22
title: Debug Intlayer Command
description: Learn how to debug and troubleshoot Intlayer CLI issues.
keywords:
  - Debug
  - Troubleshoot
  - CLI
  - Intlayer
slugs:
  - doc
  - concept
  - cli
  - debug
---

# Debug intlayer command

## 1. **Ensure you're using the latest version**

Run:

\`\`\`bash
npx intlayer --version                  # current locale intlayer version
npx intlayer@latest --version           # current latest intlayer version
\`\`\`

## 2. **Check if the command is registered**

You can check with:

\`\`\`bash
npx intlayer --help                     # Shows the list of available commands and usage information
npx intlayer dictionary build --help    # Shows the list of available options for a command
\`\`\`

## 3. **Restart your terminal**

Sometimes a terminal restart is needed to recognize new commands.

## 4. **Clear npx cache (if you're stuck with an older version)**

\`\`\`bash
npx clear-npx-cache
\`\`\`
`,t="2024-08-11",o="2025-11-22",s="Debug Intlayer Command",c="Learn how to debug and troubleshoot Intlayer CLI issues.",a=["Debug","Troubleshoot","CLI","Intlayer"],r=["doc","concept","cli","debug"],i="./docs/en/cli/debug.md",l="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/debug.md",d="/doc/concept/cli/debug",u="https://intlayer.org/doc/concept/cli/debug",b={id:n,content:e,createdAt:t,updatedAt:o,title:s,description:c,keywords:a,slugs:r,docKey:i,githubUrl:l,relativeUrl:d,url:u};export{e as content,t as createdAt,b as default,c as description,i as docKey,l as githubUrl,n as id,a as keywords,d as relativeUrl,r as slugs,s as title,o as updatedAt,u as url};
