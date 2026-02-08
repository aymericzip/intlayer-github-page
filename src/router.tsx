import { routeTree } from './routeTree.gen'
import { createRouter } from '@tanstack/react-router';

// Import the LIGHTWEIGHT index (Menu structure only)
import docsIndex from './generated/docsIndex.json';


// Pre-calculate the context data
const docKeys = Object.keys(docsIndex);
const docsMetadata = Object.values(docsIndex);

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    basepath: '/intlayer-github-page',
    scrollRestoration: true,
    context: {
      docKeys,
      docsMetadata,
    },
  });

  return router;
};

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}