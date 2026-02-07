const n="./docs/en/cli/list.md",t=`---
createdAt: 2024-08-11
updatedAt: 2026-01-06
title: List Content Declaration Files
description: Learn how to list all content declaration files in your project.
keywords:
  - List
  - Content Declaration
  - CLI
  - Intlayer
slugs:
  - doc
  - concept
  - cli
  - list
history:
  - version: 7.5.12
    date: 2026-01-06
    changes: Add absolute output option to list command
  - version: 7.5.11
    date: 2026-01-06
    changes: Add JSON output option to list command
---

# List content declaration files

\`\`\`bash
npx intlayer content list
\`\`\`

## Aliases:

- \`npx intlayer list\`

This command displays all content declaration files in your project, showing their dictionary keys and file paths. It's useful for getting an overview of all your content files and verifying that they are properly discovered by Intlayer.

## Arguments:

- **\`--json\`**: Output the results as JSON instead of formatted text. Useful for scripting and programmatic access.

  > Example: \`npx intlayer content list --json\`

## Examples:

### List content declaration files:

\`\`\`bash
npx intlayer content list
\`\`\`

### Output as JSON:

\`\`\`bash
npx intlayer content list --json
\`\`\`

### Output as absolute paths:

\`\`\`bash
npx intlayer content list --absolute
\`\`\`

## Example output:

### Formatted output:

\`\`\`bash
npx intlayer content list
Content declaration files:
 - home-page        - src/components/HomePage/homePage.content.ts
 - server-component - src/components/ServerComponent/serverComponent.content.ts
 - client-component - src/components/ClientComponent/clientComponent.content.ts

Total content declaration files: 3
\`\`\`

### JSON output:

\`\`\`bash
$ npx intlayer content list --json

[{"key":"home-page","path":"src/components/HomePage/homePage.content.ts"},{"key":"server-component","path":"src/components/ServerComponent/serverComponent.content.ts"},{"key":"client-component","path":"src/components/ClientComponent/clientComponent.content.ts"}]
\`\`\`

This command will output:

- A formatted list of all content declaration files with their keys and relative file paths
- The total count of content declaration files found

The output helps you verify that all your content files are properly configured and discoverable by the Intlayer system.
`,e="2024-08-11",o="2026-01-06",s="List Content Declaration Files",i="Learn how to list all content declaration files in your project.",c=["List","Content Declaration","CLI","Intlayer"],a=["doc","concept","cli","list"],l=[{version:"7.5.12",date:"2026-01-06",changes:"Add absolute output option to list command"},{version:"7.5.11",date:"2026-01-06",changes:"Add JSON output option to list command"}],r="./docs/en/cli/list.md",p="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/list.md",d="/doc/concept/cli/list",m="https://intlayer.org/doc/concept/cli/list",u={id:n,content:t,createdAt:e,updatedAt:o,title:s,description:i,keywords:c,slugs:a,history:l,docKey:r,githubUrl:p,relativeUrl:d,url:m};export{t as content,e as createdAt,u as default,i as description,r as docKey,p as githubUrl,l as history,n as id,c as keywords,d as relativeUrl,a as slugs,s as title,o as updatedAt,m as url};
