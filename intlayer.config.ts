import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH],
    defaultLocale: Locales.ENGLISH,
  },
  content:{
    codeDir: ['./src', '@intlayer/design-system'],
    contentDir: ['./src', '@intlayer/design-system'],
  }
};

export default config;
