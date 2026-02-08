const t="./docs/en/packages/react-native-intlayer/exports.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: react-native-intlayer Package Documentation
description: React Native support for Intlayer, providing providers and polyfills.
keywords:
  - react-native-intlayer
  - react-native
  - internationalization
  - i18n
slugs:
  - doc
  - packages
  - react-native-intlayer
  - exports
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# react-native-intlayer Package

The \`react-native-intlayer\` package provides the necessary tools to integrate Intlayer into React Native applications. It includes a provider and polyfills for locale support.

## Installation

\`\`\`bash
npm install react-native-intlayer
\`\`\`

## Exports

### Provider

| Component          | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| \`IntlayerProvider\` | Provider component that wraps your application and provides the Intlayer context. |

Import:

\`\`\`tsx
import "react-native-intlayer";
\`\`\`

### Polyfill

| Function           | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| \`intlayerPolyfill\` | Function that applies necessary polyfills for React Native to support Intlayer. |

Import:

\`\`\`tsx
import "react-native-intlayer";
\`\`\`

### Metro Configuration

The \`react-native-intlayer\` package provides Metro configuration utilities to ensure that Intlayer works correctly with React Native.

| Function                  | Description                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| \`configMetroIntlayer\`     | Asynchronous function that prepares Intlayer and merges the Metro configuration.               |
| \`configMetroIntlayerSync\` | Synchronous function that merges the Metro configuration without preparing Intlayer resources. |
| \`exclusionList\`           | Creates a RegExp pattern for Metro's blockList to exclude content files from the bundle.       |

Import:

\`\`\`tsx
import "react-native-intlayer/metro";
\`\`\`
`,e="2026-01-21",a="2026-01-21",r="react-native-intlayer Package Documentation",o="React Native support for Intlayer, providing providers and polyfills.",i=["react-native-intlayer","react-native","internationalization","i18n"],c=["doc","packages","react-native-intlayer","exports"],s=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],l="./docs/en/packages/react-native-intlayer/exports.md",p="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/react-native-intlayer/exports.md",y="/doc/packages/react-native-intlayer/exports",d="https://intlayer.org/doc/packages/react-native-intlayer/exports",v={id:t,content:n,createdAt:e,updatedAt:a,title:r,description:o,keywords:i,slugs:c,history:s,docKey:l,githubUrl:p,relativeUrl:y,url:d};export{n as content,e as createdAt,v as default,o as description,l as docKey,p as githubUrl,s as history,t as id,i as keywords,y as relativeUrl,c as slugs,r as title,a as updatedAt,d as url};
