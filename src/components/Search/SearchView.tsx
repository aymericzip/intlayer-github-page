import {
  Breadcrumb,
  type BreadcrumbLink,
  Input,
  Link,
} from '@intlayer/design-system';
import Fuse, { type IFuseOptions } from 'fuse.js';
import { ArrowRight, Search } from 'lucide-react';
import { useIntlayer } from 'react-intlayer';
import { useNavigate, useRouteContext } from '@tanstack/react-router';
import { type FC, useEffect, useRef, useState, useMemo } from 'react';

type DocMetadata = {
  content?: string;
  githubUrl?: string;
  relativeUrl: string;
  title?: string;
  description?: string;
  keywords?: string[];
};

const fuseOptions: IFuseOptions<DocMetadata> = {
  keys: [
    { name: 'title', weight: 0.8 },
    { name: 'description', weight: 0.1 },
    { name: 'keywords', weight: 0.1 },
  ],
  threshold: 0.2,
};

const SearchResultItem: FC<{
  doc: DocMetadata;
  onClickLink: () => void;
  isSelected: boolean;
}> = ({ doc, onClickLink, isSelected }) => {
  const { searchResultItemButton } = useIntlayer('doc-search-view');
  const itemRef = useRef<HTMLAnchorElement>(null);

  const breadcrumbLinks: BreadcrumbLink[] = doc.relativeUrl
    .split('/')
    .filter(Boolean)
    .slice(1) // Remove locale
    .map((path) => ({ text: path }));

  useEffect(() => {
    if (isSelected && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isSelected]);

  return (
    <Link
      ref={itemRef}
      href={doc.relativeUrl}
      label={searchResultItemButton.label.value}
      variant="hoverable"
      color="text"
      isActive={isSelected}
      onClick={(e) => {
        e.preventDefault();
        onClickLink();
      }}
      className="text-wrap w-full block"
    >
      <div className="flex items-center justify-between gap-2 w-full p-3">
        <div className="flex flex-1 flex-col gap-2 text-left">
          <strong className="text-base">{doc.title}</strong>
          {doc.description && (
            <p className="text-neutral text-sm line-clamp-2">
              {doc.description}
            </p>
          )}
          <Breadcrumb links={breadcrumbLinks} className="text-xs opacity-30" />
        </div>
        <ArrowRight size={24} className="shrink-0" />
      </div>
    </Link>
  );
};

export const SearchView: FC<{
  onClickLink?: () => void;
  isOpen?: boolean;
}> = ({ onClickLink = () => {}, isOpen = false }) => {
  const { docsMetadata } = useRouteContext({ from: '__root__' });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<DocMetadata[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const { noContentText, searchInput } = useIntlayer('doc-search-view');

  const filesData = useMemo(() => docsMetadata.filter((doc) => doc.title), [docsMetadata]);
  const fuse = useMemo(() => new Fuse(filesData, fuseOptions), [filesData]);

  useEffect(() => {
    if (search.trim() === '') {
      setResults([]);
    } else {
      const fuseSearchResults = fuse
        .search(search)
        .map((result) => result.item);
      setResults(fuseSearchResults);
    }
    setSelectedIndex(-1);
  }, [search, fuse]);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        const selectedDoc = results[selectedIndex];
        if (selectedDoc) {
          const path = selectedDoc.relativeUrl.replace(/^\/en\/doc\//, '');
          navigate({ to: '/$', params: { _splat: path } });
          onClickLink();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results, selectedIndex, navigate, onClickLink]);

  const isNoResult = results.length === 0 && search.trim().length > 0;

  return (
    <div className="flex flex-col h-full max-h-[80vh]">
      <div className="relative flex w-full items-center gap-1 border-b border-neutral/10 p-2">
        <Search className="ml-2 text-neutral" size={20} />
        <Input
          type="search"
          placeholder={searchInput.placeholder.value}
          aria-label={searchInput.label.value}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          variant="invisible"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {isNoResult && (
          <p className="text-center text-neutral text-sm py-10">{noContentText}</p>
        )}
        {results.length > 0 && (
          <ul className="flex flex-col gap-10">
            {results.map((result, index) => (
              <li key={result.relativeUrl}>
                <SearchResultItem
                  doc={result}
                  onClickLink={() => {
                    const path = result.relativeUrl.replace(/^\/en\/doc\//, '');
                    navigate({ to: '/$', params: { _splat: path } });
                    onClickLink();
                  }}
                  isSelected={index === selectedIndex}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
