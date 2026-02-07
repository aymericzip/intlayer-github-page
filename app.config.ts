import { defineConfig } from '@tanstack/start/config'
import tailwindcss from '@tailwindcss/vite'
import { intlayer } from 'vite-intlayer'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    preset: 'static'
  },
  vite: {
    plugins: [
      tsconfigPaths(),
      intlayer(),
      tailwindcss(),
    ]
  }
})
