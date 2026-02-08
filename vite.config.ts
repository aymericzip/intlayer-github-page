import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { intlayer } from 'vite-intlayer';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  const domain = env.NEXT_PUBLIC_DOMAIN || 'localhost';
  const backendUrl = env.NEXT_PUBLIC_BACKEND_URL || '';
  const scannerApiUrl = env.NEXT_PUBLIC_SCANNER_API_URL || '';
  const publicUrl = env.NEXT_PUBLIC_URL || '';

  // Construct CSP Directives
  const cspDirectives = {
    'default-src': ["'self'"],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      "'report-sample'",
      `*.${domain}`,
      "fonts.googleapis.com",
    ],
    'style-src-elem': [
      "'self'",
      "'report-sample'",
      `*.${domain}`,
      "fonts.googleapis.com",
      "cdn.jsdelivr.net",
      "'unsafe-inline'",
    ],
    'script-src': [
      "'self'",
      "'unsafe-eval'",
      "'unsafe-inline'",
      "*.youtube.com",
    ],
    'script-src-elem': [
      "'self'",
      "data:",
      "'report-sample'",
      "'unsafe-inline'",
      "blob:", 
      `*.${domain}`,
      "cdn.jsdelivr.net",
      "*.ahrefs.com",
      "*.youtube.com",
    ],
    'connect-src': [
      "'self'",
      "data:",
      `*.${domain}`,
      backendUrl,
      scannerApiUrl,
      "fonts.googleapis.com",
      "github.com",
      "api.github.com",
      "raw.githubusercontent.com",
      "*.producthunt.com",
      "cdn.jsdelivr.net",
      "*.ahrefs.com",
      "*.star-history.com",
      "*.vercel.app",
      "img.shields.io",
      "*.googleusercontent.com",
      "*.githubusercontent.com",
    ],
    'img-src': [
      "'self'",
      "https:",
      "data:",
      backendUrl,
    ],
    'worker-src': [
      publicUrl,
      "blob:",
      `*.${domain}`,
    ],
    'media-src': ["'self'"],
    'form-action': ["'self'"],
    'font-src': ["'self'", "cdn.jsdelivr.net"],
    'object-src': [
      "'self'",
      "data:",
      "blob:",
      `*.${domain}`,
    ],
    'frame-src': [
      "'self'",
      "*.youtube.com",
      "github.dev",
      "github.com",
      "*.github.com",
      "stackblitz.com",
    ],
    'frame-ancestors': [
      "'self'",
      "intlayer.org",
      "app.intlayer.org",
      "localhost:*",
    ],
    'manifest-src': ["'self'"],
    'child-src': ["'self'"],
  };

  // Convert directives object to CSP string
  const contentSecurityPolicy = Object.entries(cspDirectives)
    .map(([key, values]) => {
      // Filter out empty strings and join with space
      const valueString = values.filter(Boolean).join(' ');
      return `${key} ${valueString}`;
    })
    .join('; ');

  // Define global security headers
  const securityHeaders = {
    'Content-Security-Policy': contentSecurityPolicy,
    'Cache-Control': 'public, max-age=1800, stale-while-revalidate=86400',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'same-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-XSS-Protection': '0',
    'Permissions-Policy': 'fullscreen=(self)',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
  };

  return {
    plugins: [
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      intlayer(),
      tailwindcss(),
      tanstackStart({
        prerender: {
          enabled: true, // This tells Start to generate static HTML
          crawlLinks: true, // Automatically finds routes to prerender
        },
      }),
      viteReact(),
    ],
    base: '/intlayer-github-page/',
    server: {
      headers: securityHeaders,
    },
    preview: {
      headers: securityHeaders,
    },
  };
});