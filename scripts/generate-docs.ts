import { getDocs, getDocsKeys, getDocMetadata } from '@intlayer/docs';
import { writeFile, mkdir, rm } from 'fs/promises';
import { join } from 'path';

const run = async () => {
  console.log('Generating docs...');
  try {
    const docs = await getDocs('en');
    
    // clean previous generation
    await rm('src/generated', { recursive: true, force: true });
    await mkdir('src/generated/docs', { recursive: true });

    const docsIndex: Record<string, {
      id: string;
      content: string;
      title: string;
      description: string;
      keywords: string[];
      relativeUrl: string;
    }> = {};

    await Promise.all(
      Object.entries(docs).map(async ([key, content]) => {
        const relativePath = key.replace('./docs/en/', '').replace('.md', '');
        
        // Create a safe filename for the generated JSON (flattened structure)
        const safeFileName = relativePath.replace(/\//g, '_');

        const metadata = await getDocMetadata(
          key as keyof typeof docs
        );

        const docData = {
            id: key,
            content,
            ...metadata,
        };

        // Write heavy content to individual files
        await writeFile(
            `src/generated/docs/${safeFileName}.json`, 
            JSON.stringify(docData, null, 2)
        );

        // Add lightweight metadata to index
        docsIndex[key] = {
            id: key,
            title: metadata.title,
            description: metadata.description,
            keywords: metadata.keywords,
            relativeUrl: `/en/doc/${relativePath}`,
            file: `${safeFileName}.json` // Reference for the loader
        };
      })
    );

    // Write the lightweight index
    await writeFile('src/generated/docsIndex.json', JSON.stringify(docsIndex, null, 2));
    
    console.log('Docs generated successfully:');
    console.log(`- Index: src/generated/docsIndex.json`);
    console.log(`- Chunks: src/generated/docs/*.json`);
  } catch (error) {
    console.error('Error generating docs:', error);
    process.exit(1);
  }
};

run();