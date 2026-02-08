const t="./docs/en/packages/fastify-intlayer/intlayer.md",n=`---
createdAt: 2026-01-21
updatedAt: 2026-01-21
title: intlayer Fastify Plugin Documentation | fastify-intlayer
description: See how to use the intlayer plugin for fastify-intlayer package
keywords:
  - intlayer
  - fastify
  - plugin
  - Intlayer
  - intlayer
  - Internationalization
  - Documentation
slugs:
  - doc
  - packages
  - fastify-intlayer
  - intlayer
history:
  - version: 8.0.0
    date: 2026-01-21
    changes: Init doc
---

# intlayer Fastify Plugin Documentation

The \`intlayer\` plugin for Fastify detects the user's locale and decorates the request object with Intlayer functions. It also enables the use of global translation functions within the request context.

## Usage

\`\`\`ts
import Fastify from "fastify";
import { intlayer } from "fastify-intlayer";

const fastify = Fastify();

fastify.register(intlayer);

fastify.get("/", async (req, reply) => {
  const content = req.intlayer.t({
    en: "Hello",
    fr: "Bonjour",
  });

  return content;
});
\`\`\`

## Description

The plugin performs the following tasks:

1. **Locale Detection**: It analyzes the request (headers, cookies, etc.) to determine the user's preferred locale.
2. **Request Decoration**: It adds an \`intlayer\` property to the \`FastifyRequest\` object, containing:
   - \`locale\`: The detected locale.
   - \`t\`: A translation function.
   - \`getIntlayer\`: A function to retrieve dictionaries.
3. **Context Management**: It uses \`cls-hooked\` to manage an asynchronous context, allowing global Intlayer functions to access the request-specific locale.
`,e="2026-01-21",a="2026-01-21",i="intlayer Fastify Plugin Documentation | fastify-intlayer",o="See how to use the intlayer plugin for fastify-intlayer package",s=["intlayer","fastify","plugin","Intlayer","intlayer","Internationalization","Documentation"],r=["doc","packages","fastify-intlayer","intlayer"],l=[{version:"8.0.0",date:"2026-01-21",changes:"Init doc"}],c="./docs/en/packages/fastify-intlayer/intlayer.md",y="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/fastify-intlayer/intlayer.md",f="/doc/packages/fastify-intlayer/intlayer",u="https://intlayer.org/doc/packages/fastify-intlayer/intlayer",d={id:t,content:n,createdAt:e,updatedAt:a,title:i,description:o,keywords:s,slugs:r,history:l,docKey:c,githubUrl:y,relativeUrl:f,url:u};export{n as content,e as createdAt,d as default,o as description,c as docKey,y as githubUrl,l as history,t as id,s as keywords,f as relativeUrl,r as slugs,i as title,a as updatedAt,u as url};
