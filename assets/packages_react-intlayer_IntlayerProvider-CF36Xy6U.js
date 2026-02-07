const e="./docs/en/packages/react-intlayer/IntlayerProvider.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: IntlayerProvider Component Documentation | react-intlayer
description: See how to use the IntlayerProvider component for react-intlayer package
keywords:
  - IntlayerProvider
  - react
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - react-intlayer
  - IntlayerProvider
history:
  - version: 7.5.14
    date: 2026-01-21
    changes: Init doc
---

# IntlayerProvider Component Documentation

The \`IntlayerProvider\` component is the main provider for Intlayer in React applications. It provides the Intlayer context to all its children.

## Usage

\`\`\`tsx
import { IntlayerProvider } from "react-intlayer";

const App = ({ children }) => <IntlayerProvider>{children}</IntlayerProvider>;
\`\`\`

## Props

| Prop              | Type                              | Description                                       |
| ----------------- | --------------------------------- | ------------------------------------------------- |
| \`locale\`          | \`LocalesValues\`                   | The initial locale to use.                        |
| \`defaultLocale\`   | \`LocalesValues\`                   | The default locale to use as a fallback.          |
| \`setLocale\`       | \`(locale: LocalesValues) => void\` | A custom function to set the locale.              |
| \`disableEditor\`   | \`boolean\`                         | Whether to disable the editor.                    |
| \`isCookieEnabled\` | \`boolean\`                         | Whether to enable cookies for storing the locale. |
`,t="2026-01-21",a="2026-01-21",o="IntlayerProvider Component Documentation | react-intlayer",r="See how to use the IntlayerProvider component for react-intlayer package",i=["IntlayerProvider","react","Intlayer","intlayer","Internationalization","Documentation"],c=["doc","packages","react-intlayer","IntlayerProvider"],l=[{version:"7.5.14",date:"2026-01-21",changes:"Init doc"}],s="./docs/en/packages/react-intlayer/IntlayerProvider.md",d="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/react-intlayer/IntlayerProvider.md",y="/doc/packages/react-intlayer/IntlayerProvider",p="https://intlayer.org/doc/packages/react-intlayer/IntlayerProvider",I={id:e,content:n,createdAt:t,updatedAt:a,title:o,description:r,keywords:i,slugs:c,history:l,docKey:s,githubUrl:d,relativeUrl:y,url:p};export{n as content,t as createdAt,I as default,r as description,s as docKey,d as githubUrl,l as history,e as id,i as keywords,y as relativeUrl,c as slugs,o as title,a as updatedAt,p as url};
