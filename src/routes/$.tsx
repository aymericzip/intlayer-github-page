import { createFileRoute } from '@tanstack/react-router'
import { DocPage } from '../pages/DocPage'
import docsIndex from '../generated/docsIndex.json'

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const docPath = params._splat || 'readme'
    const docKey = `./docs/en/${docPath}.md`
    
    const indexEntry = docsIndex[docKey as keyof typeof docsIndex];
    
    if (!indexEntry) return { doc: null }

    try {
      // FIX: Strip the extension from the variable, then add it explicitly in the string
      // This allows Vite to match the pattern `../generated/docs/*.json`
      const fileName = indexEntry.file.replace('.json', '');
      
      const docData = await import(`../generated/docs/${fileName}.json`)
      
      return {
        doc: docData.default || docData
      }
    } catch (error) {
      console.error('Failed to load doc chunk', error)
      return { doc: null }
    }
  },
  head: ({ loaderData }) => {
    const doc = loaderData?.doc;
    if (!doc) return { meta: [{ title: 'Intlayer Documentation' }] };
    return {
      meta: [
        { title: doc.title ? `${doc.title}` : 'Intlayer Documentation' },
        { name: 'description', content: doc.description || '' },
        { name: 'keywords', content: doc.keywords?.join(', ') || '' },
      ],
    };
  },
  component: DocPage,
})