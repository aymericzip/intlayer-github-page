import { useMemo } from "react";
import { Link, useRouteContext } from "@tanstack/react-router";
import { Button } from "@intlayer/design-system";
import { SwitchThemeSwitcher } from "../ThemeSwitcher/SwitchThemeSwitcher";
import { SearchTrigger } from "../Search/SearchTrigger";
import packageJson from "../../../package.json";

const formatName = (name: string) =>
  name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

type NavItem = {
  label: string;
  path?: string;
  children?: NavItem[];
  order?: number; // Optional: if you want to support ordering via frontmatter later
};

const buildTree = (
  keys: string[],
  metadataMap: Record<string, any>
): NavItem[] => {
  const root: NavItem[] = [];

  keys.forEach((key) => {
    const fullPath = key.replace("./docs/en/", "").replace(".md", "");
    const segments = fullPath.split("/");
    const docMeta = metadataMap[key];
    let currentLevel = root;

    segments.forEach((segment, index) => {
      const isLast = index === segments.length - 1;
      
      // Default label from filename, override with metadata title if it's the leaf file
      let label = formatName(segment);
      if (isLast && docMeta?.title) {
        label = docMeta.title;
      }

      let existing = currentLevel.find((item) => 
        // Match by label (if generated) or if it's the folder name matching the segment
        item.label === label || formatName(segment) === item.label
      );

      // Special handling: if we are building a folder node, we want to keep the generated name 
      // initially. The merge step will rename it if it finds an index file.
      if (!existing) {
        // If it's a folder (not last), use generated name. If last, use title.
        const nodeLabel = isLast && docMeta?.title ? docMeta.title : formatName(segment);
        existing = { label: nodeLabel };
        currentLevel.push(existing);
      }

      if (isLast) {
        existing.path = fullPath;
        // Update label to specific title if it was created as a folder previously
        if (docMeta?.title) existing.label = docMeta.title;
      } else {
        if (!existing.children) {
          existing.children = [];
        }
        currentLevel = existing.children;
      }
    });
  });

  const mergeIndexFiles = (items: NavItem[]) => {
    items.forEach((item) => {
      if (item.children) {
        mergeIndexFiles(item.children);

        const indexItem = item.children.find(
          (child) => {
             const lower = child.label.toLowerCase();
             // Check against common index names or the path ending
             return lower === "index" || lower === "readme" || child.path?.endsWith('/index') || child.path?.endsWith('/readme');
          }
        );

        if (indexItem && !item.path) {
          item.path = indexItem.path;
          // Adopt the index file's title for the folder
          item.label = indexItem.label; 
          item.children = item.children.filter((child) => child !== indexItem);
        }
      }
    });
  };

  mergeIndexFiles(root);

  return root;
};

const NavGroup = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isHeader = !item.path && hasChildren;

  return (
    <li className={depth === 0 ? "mb-6" : "mb-1"}>
      {item.path ? (
        <Link to="/$" params={{ _splat: item.path }} className="block">
          {({ isActive }) => (
            <Button
              variant="hoverable"
              isActive={isActive}
              size="sm"
              label={item.label}
              color="text"
              isFullWidth
              textAlign="left"
              type="button"
              style={{
                paddingLeft: depth > 0 ? `${depth * 1 + 0.5}rem` : "0.5rem",
              }}
            >
              {item.label}
            </Button>
          )}
        </Link>
      ) : (
        <div
          className={`font-semibold mb-2 px-2 text-neutral/60 uppercase tracking-wider ${
            depth === 0 ? "text-sm" : "text-xs mt-2"
          }`}
          style={{ paddingLeft: depth > 0 ? `${depth * 1 + 0.5}rem` : "0.5rem" }}
        >
          {item.label}
        </div>
      )}
      {hasChildren && (
        <ul className="list-none p-0">
          {item.children!.map((child, index) => (
            <NavGroup
              key={`${child.label}-${child.path || 'group'}-${index}`}
              item={child}
              depth={isHeader ? depth : depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Sidebar = () => {
  const { docKeys, docsMetadata } = useRouteContext({ from: "__root__" });

  const navTree = useMemo(() => {
    // Create a quick lookup map for metadata
    const metadataMap = docsMetadata.reduce((acc: any, meta: any) => {
      if (meta.id) acc[meta.id] = meta;
      return acc;
    }, {});
    
    return buildTree(docKeys, metadataMap);
  }, [docKeys, docsMetadata]);

  return (
    <aside className="w-64 border-r border-card py-4 bg-card/50 flex flex-col h-screen shrink-0 sticky top-0">
      <h3 className="font-bold mb-4 px-4 text-lg dark:text-white shrink-0">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          Documentation
        </Link>
      </h3>
          <SearchTrigger />
      <nav className="flex-1 overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-neutral/20 hover:scrollbar-thumb-neutral/40">
        <ul className="list-none p-0 px-4 pb-8">
          {navTree.map((item, index) => (
            <NavGroup key={`${item.label}-${index}`} item={item} />
          ))}
        </ul>
      </nav>
      <div className="p-4 pb-0 border-t flex justify-between items-center border-neutral/20 shrink-0 bg-card/50 backdrop-blur-sm">
        <SwitchThemeSwitcher />
        <span className="px-4 ml-auto text-xs font-mono text-neutral/50">
          v{packageJson.version}
        </span>
      </div>
    </aside>
  );
};