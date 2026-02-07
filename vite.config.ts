import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { intlayer } from 'vite-intlayer';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
  
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    intlayer(),
    tailwindcss(),
    tanstackStart({
      router: {
        routeFileIgnorePattern:
          '.content.(ts|tsx|js|mjs|cjs|jsx|json|jsonc|json5)$',
      },
    }),
    viteReact(),
  ],
  base: '/intlayer-github-page/',
});
