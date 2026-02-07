const e="./docs/en/packages/solid-intlayer/IntlayerProvider.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: IntlayerProvider Component Documentation | solid-intlayer
description: See how to use the IntlayerProvider component for solid-intlayer package
keywords:
  - IntlayerProvider
  - provider
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
  - Solid
  - Solid.js
slugs:
  - doc
  - packages
  - solid-intlayer
  - IntlayerProvider
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Unified documentation for all exports
---

# IntlayerProvider Component Documentation

The \`IntlayerProvider\` is the root component that provides the internationalization context to your Solid application. It manages the current locale state and ensures that all child components can access translations.

## Usage

\`\`\`tsx
import { IntlayerProvider } from "solid-intlayer";

const App = () => (
  <IntlayerProvider>
    <MyComponent />
  </IntlayerProvider>
);
\`\`\`

## Description

The \`IntlayerProvider\` performs the following roles:

1. **State Management**: It initializes and stores the current locale, using signals for reactivity.
2. **Locale Resolution**: It determines the initial locale based on cookies, browser preferences, or the default configuration.
3. **Context Injection**: It makes the locale and the \`setLocale\` function available to any component via hooks like \`useIntlayer\` or \`useLocale\`.
4. **Persistence**: It automatically syncs locale changes with cookies or local storage to maintain the user's preference across sessions.

## Props

- **locale** (optional): Manually set the current locale.
- **defaultLocale** (optional): Override the default locale from the configuration.
- **setLocale** (optional): Provide a custom locale setter function.
- **disableEditor** (optional): Disable the visual editor integration.
- **isCookieEnabled** (optional): Enable or disable cookie persistence.
`,o="2026-01-21",t="2026-01-21",a="IntlayerProvider Component Documentation | solid-intlayer",r="See how to use the IntlayerProvider component for solid-intlayer package",i=["IntlayerProvider","provider","Intlayer","intlayer","Internationalization","Documentation","Solid","Solid.js"],l=["doc","packages","solid-intlayer","IntlayerProvider"],s=[{version:"8.0.0",date:"2026-01-21",changes:"Unified documentation for all exports"}],c="./docs/en/packages/solid-intlayer/IntlayerProvider.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/IntlayerProvider.md",y="/doc/packages/solid-intlayer/IntlayerProvider",p="https://intlayer.org/doc/packages/solid-intlayer/IntlayerProvider",u={id:e,content:n,createdAt:o,updatedAt:t,title:a,description:r,keywords:i,slugs:l,history:s,docKey:c,githubUrl:d,relativeUrl:y,url:p};export{n as content,o as createdAt,u as default,r as description,c as docKey,d as githubUrl,s as history,e as id,i as keywords,y as relativeUrl,l as slugs,a as title,t as updatedAt,p as url};
