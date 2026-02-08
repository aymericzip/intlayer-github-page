const n="./docs/en/cli/test.md",e=`---
createdAt: 2024-08-11
updatedAt: 2025-11-22
title: Test Missing Translations
description: Learn how to test and identify missing translations in your dictionaries.
keywords:
  - Test
  - Missing Translations
  - CLI
  - Intlayer
slugs:
  - doc
  - concept
  - cli
  - test
---

# Test missing translations

\`\`\`bash
npx intlayer test
\`\`\`

## Aliases:

- \`npx intlayer content test\`

This command analyzes your content declaration files to identify missing translations across all configured locales. It provides a comprehensive report showing which translation keys are missing for which locales, helping you maintain consistency across your multilingual content.

## Example output:

\`\`\`bash
npx intlayer content test

Missing translations:
 - home-page                      - tr         - src/components/HomePage/homePage.content.ts
 - server-component               - es, tr     - src/components/ServerComponent/serverComponent.content.ts
 - client-component               - pl, tr     - src/components/ClientComponent/clientComponent.content.ts
Locales: en, ru, ja, fr, ko, zh, es, de, ar, it, en-GB, pt, hi, tr, pl
Required locales: en
Missing locales: pl, tr, es
Missing required locales: -
Total missing locales: 3
Total missing required locales: 0
\`\`\`

## Arguments:

**Configuration options:**

- **\`--env\`**: Specify the environment (e.g., \`development\`, \`production\`).
- **\`--env-file [envFile]\`**: Provide a custom environment file to load variables from.
- **\`--base-dir\`**: Specify the base directory for the project.

  > Example: \`npx intlayer content test --base-dir ./src --env-file .env.production.local\`

- **\`--no-cache\`**: Disable the cache.

  > Example: \`npx intlayer build --no-cache\`

**Preparation options:**

- **\`--build\`**: Build the dictionaries before pushing to ensure the content is up to date. True will force the build, false will skip the build, undefined will allow using the cache of the build.

**Log options:**

- **\`--verbose\`**: Enable verbose logging for debugging. (default to true using CLI)

  > Example: \`npx intlayer content test --verbose\`

## Example:

\`\`\`bash
npx intlayer content test --verbose
\`\`\`

The output helps you quickly identify which translations need to be completed to ensure your application works properly across all configured locales.
`,t="2024-08-11",s="2025-11-22",o="Test Missing Translations",i="Learn how to test and identify missing translations in your dictionaries.",l=["Test","Missing Translations","CLI","Intlayer"],a=["doc","concept","cli","test"],c="./docs/en/cli/test.md",r="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/cli/test.md",d="/doc/concept/cli/test",p="https://intlayer.org/doc/concept/cli/test",u={id:n,content:e,createdAt:t,updatedAt:s,title:o,description:i,keywords:l,slugs:a,docKey:c,githubUrl:r,relativeUrl:d,url:p};export{e as content,t as createdAt,u as default,i as description,c as docKey,r as githubUrl,n as id,l as keywords,d as relativeUrl,a as slugs,o as title,s as updatedAt,p as url};
