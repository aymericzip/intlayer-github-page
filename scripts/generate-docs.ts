import { getDocs, getDocsKeys } from '@intlayer/docs';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const run = async () => {
  console.log('Generating docs...');
  try {
    const docs = await getDocs('en' as any);
    const keys = getDocsKeys();
    
    const output = {
      keys,
      docs
    };
    
    await mkdir('src/generated', { recursive: true });
    await writeFile('src/generated/docs.json', JSON.stringify(output, null, 2));
    console.log('Docs generated at src/generated/docs.json');
  } catch (error) {
    console.error('Error generating docs:', error);
    process.exit(1);
  }
};

run();
