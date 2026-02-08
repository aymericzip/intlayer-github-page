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
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: `(function(l) {
              if (l.search[1] === '/' ) {
                var decoded = l.search.slice(1).split('&').map(function(s) { 
                  return s.replace(/~and~/g, '&')
                }).join('?');
                window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                );
              }
            }(window.location))`,
          }}
        />
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