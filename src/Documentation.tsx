import { useState, useEffect } from 'react';
import { useLocale } from 'react-intlayer';
import { MarkdownRenderer } from 'react-intlayer/markdown';
import docsData from './generated/docs.json';

// Define types based on the JSON structure
type DocsData = {
  keys: string[];
  docs: Record<string, string>;
};

const { keys, docs } = docsData as DocsData;

export const Documentation = () => {
  const { locale } = useLocale();
  const [currentDoc, setCurrentDoc] = useState<string | null>(null);
  const [selectedKey, setSelectedKey] = useState<string | null>(keys[0] || null);

  useEffect(() => {
    if (selectedKey && docs[selectedKey]) {
      setCurrentDoc(docs[selectedKey]);
    }
  }, [selectedKey]);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <aside style={{ width: '250px', borderRight: '1px solid #eee', overflowY: 'auto', padding: '1rem', background: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '1rem' }}>Documentation</h3>
        <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
          {keys.map(key => (
            <li key={key} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => setSelectedKey(key)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  padding: '8px',
                  fontWeight: selectedKey === key ? 'bold' : 'normal',
                  color: selectedKey === key ? '#646cff' : '#333',
                  borderRadius: '4px',
                  backgroundColor: selectedKey === key ? '#e0e0e0' : 'transparent',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '0.9rem'
                }}
                title={key}
              >
                {key.replace('./docs/en/', '').replace('.md', '').replace(/\//g, ' / ')}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {currentDoc ? (
          <div
            style={{
              margin: 'auto',
              maxWidth: '800px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: '2.5rem 0',
            }}
          >
            <MarkdownRenderer
              locale={locale}
              components={{
                a: (props) => (
                  <a
                    {...props}
                    style={{ color: '#646cff', textDecoration: 'underline' }}
                  />
                ),
              }}
            >
              {currentDoc}
            </MarkdownRenderer>
          </div>
        ) : (
          <p>Select a document to view.</p>
        )}
      </main>
    </div>
  );
};
