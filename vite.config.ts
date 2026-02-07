import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {intlayer} from 'vite-intlayer'


export default defineConfig({
  plugins: [
    react(),
    intlayer(),
  ],
  base: '/intlayer-github-page',
})
