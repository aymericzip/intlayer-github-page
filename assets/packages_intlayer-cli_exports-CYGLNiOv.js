const n="./docs/en/packages/intlayer-cli/exports.md",t=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: intlayer-cli Package Documentation
description: CLI tool for Intlayer, providing commands for building and auditing dictionaries.
keywords:
  - cli
  - tools
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - intlayer-cli
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# intlayer-cli Package

The \`intlayer-cli\` package provides a set of commands to manage Intlayer dictionaries and configuration.

## Installation

\`\`\`bash
npm install intlayer-cli
\`\`\`

## Exports

### CLI Commands (Functions)

The package exports functions that power the CLI commands, allowing you to trigger Intlayer operations programmatically.

Import:

\`\`\`tsx
import "intlayer-cli";
\`\`\`

| Function       | Description                                            |
| -------------- | ------------------------------------------------------ |
| \`build\`        | Builds the Intlayer dictionaries.                      |
| \`audit\`        | Audits the dictionaries for missing translations.      |
| \`liveSync\`     | Synchronizes dictionaries in real-time.                |
| \`pull\`         | Pulls dictionaries from a remote source.               |
| \`push\`         | Pushes dictionaries to a remote source.                |
| \`test\`         | Runs tests on dictionaries.                            |
| \`transform\`    | Transforms dictionaries between formats.               |
| \`fill\`         | Fills dictionaries with missing translations using AI. |
| \`reviewDoc\`    | Reviews documentation for internationalization.        |
| \`translateDoc\` | Translates documentation using AI.                     |
`,i="2026-01-21",o="2026-01-21",e="intlayer-cli Package Documentation",a="CLI tool for Intlayer, providing commands for building and auditing dictionaries.",s=["cli","tools","internationalization","i18n"],r=["doc","packages","intlayer-cli","exports"],c=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],l="./docs/en/packages/intlayer-cli/exports.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/intlayer-cli/exports.md",p="/doc/packages/intlayer-cli/exports",m="https://intlayer.org/doc/packages/intlayer-cli/exports",g={id:n,content:t,createdAt:i,updatedAt:o,title:e,description:a,keywords:s,slugs:r,history:c,docKey:l,githubUrl:d,relativeUrl:p,url:m};export{t as content,i as createdAt,g as default,a as description,l as docKey,d as githubUrl,c as history,n as id,s as keywords,p as relativeUrl,r as slugs,e as title,o as updatedAt,m as url};
