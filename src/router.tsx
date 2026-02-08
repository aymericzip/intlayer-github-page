import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';

// Import the LIGHTWEIGHT index (Menu structure only)
import docsIndex from './generated/docsIndex.json';

export const queryClient = new QueryClient();

// Pre-calculate the context data
const docKeys = Object.keys(docsIndex);
const docsMetadata = Object.values(docsIndex);

export const getRouter = () => {
  const router = createRouter({
    routeTree,
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