const n="./docs/en/cli/transform.md",t=`---
createdAt: 2024-08-11
updatedAt: 2025-11-22
title: Transform Components
description: Learn how to transform existing components to use Intlayer.
keywords:
  - Transform
  - Components
  - Migration
  - CLI
  - Intlayer
slugs:
  - doc
  - concept
  - cli
  - transform
---

# Transform components

\`\`\`bash
npx intlayer transform
\`\`\`

This command analyzes your code files to help migrate existing components to use Intlayer. It supports interactive file selection or specific file targeting.

## Aliases:

- \`npx intlayer trans\`

## Arguments:

**File selection options:**

- **\`-f, --file [files...]\`**: List of specific files to transform. If not provided, the CLI will scan for matching files (\`**/*.{tsx,jsx,vue,svelte,ts,js}\`) and prompt you to select which ones to transform.

  > Example: \`npx intlayer transform -f src/components/MyComponent.tsx\`

**Output options:**

- **\`-o, --output-content-declarations [outputContentDeclarations]\`**: Directory to save the generated content declaration files.

  > Example: \`npx intlayer transform -o src/content\`

- **\`--code-only\`**: Only transform the component code (do not write content declaration).

  > Example: \`npx intlayer transform --code-only\`

- **\`--declaration-only\`**: Only generate content declaration (do not rewrite component).

  > Example: \`npx intlayer transform --declaration-only\`

**Configuration options:**

- **\`--base-dir\`**: Specify the base directory for the project.
- **\`--env\`**: Specify the environment.
- **\`--env-file\`**: Provide a custom environment file.
- **\`--verbose\`**: Enable verbose logging.

**Required plugins:**

The transform command works without additional plugin on TypeScript / JSX files. However, it requires the following plugins to be installed for Vue and Svelte projects:

- **\`@intlayer/vue-transformer\`**: For Vue files.
- **\`@intlayer/svelte-transformer\`**: For Svelte files.
`,e="2024-08-11",o="2025-11-22",r="Transform Components",s="Learn how to transform existing components to use Intlayer.",i=["Transform","Components","Migration","CLI","Intlayer"],a=["doc","concept","cli","transform"],c="./docs/en/cli/transform.md",l="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/transform.md",m="/doc/concept/cli/transform",p="https://intlayer.org/doc/concept/cli/transform",f={id:n,content:t,createdAt:e,updatedAt:o,title:r,description:s,keywords:i,slugs:a,docKey:c,githubUrl:l,relativeUrl:m,url:p};export{t as content,e as createdAt,f as default,s as description,c as docKey,l as githubUrl,n as id,i as keywords,m as relativeUrl,a as slugs,r as title,o as updatedAt,p as url};
