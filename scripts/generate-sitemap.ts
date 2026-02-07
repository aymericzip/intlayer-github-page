import { getDocsKeys } from '@intlayer/docs';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const run = async () => {
  console.log('Generating sitemap...');
  try {
    const keys = getDocsKeys();

    const urls = keys.map((key: string) => {
      const slug = key.replace("./docs/en/", "").replace(".md", "");
      
      // If the slug is 'index', it represents the root of the documentation
      const urlPath = slug === 'index' ? '' : slug;
      
      return `https://aymericzip.github.io/intlayer-github-page/${urlPath}`;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url: string) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    await writeFile(join(process.cwd(), 'public/sitemap.xml'), sitemap);
    console.log('Sitemap generated at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

run();
