import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { defaultLocale, getHTMLTextDir  } from 'intlayer';
import { type ReactNode } from 'react';
import { IntlayerProvider } from 'react-intlayer';
import { ThemeProvider } from '../providers/ThemeProvider';
import { MainLayout } from '../components/Layout/MainLayout';
import appCss from '../index.css?url';

// Import the generated index directly
import docsIndex from '../generated/docsIndex.json';

interface RouterContext {
  docKeys: string[];
  docsMetadata: any[];
}

export const Route = createRootRouteWithContext<RouterContext>()({
  loader: async () => {
    // Transform the index object into the arrays expected by the UI
    const docKeys = Object.keys(docsIndex);
    const docsMetadata = Object.values(docsIndex);

    return {
      docKeys,
      docsMetadata,
    };
  },
  head: () => ({
    links: [
      {
        href: appCss,
        rel: 'stylesheet',
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        title: 'Intlayer Documentation',
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {

  return (
    <html dir={getHTMLTextDir(defaultLocale)} lang={defaultLocale}>
      <head>
        <HeadContent />

      </head>
      <body>
        <IntlayerProvider locale={defaultLocale}>
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </IntlayerProvider>
        <Scripts />
      </body>
    </html>
  );
}