import { useLoaderData } from "@tanstack/react-router";
import { type ComponentProps } from "react";
import { MarkdownRenderer } from "@intlayer/design-system";
import { useLocale } from "react-intlayer";
import { useTheme } from "next-themes";
import { TableOfContents } from "../components/TableOfContents/TableOfContents";
import { urlRenamer } from "../utils/markdown";

const tocLevels = [2, 3, 4];
const tocMaxDepth = 4;

export const DocPage = () => {
  const { doc: currentDoc } = useLoaderData({ from: "/$" });
  const { locale } = useLocale();
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  if (!currentDoc) {
    return (
      <div className="p-8">
        <p className="italic text-red-500">Document not found.</p>
      </div>
    );
  }

  const sanitizedContent = urlRenamer(currentDoc.content);

  return (
    <div className="p-8">
      <MarkdownRenderer
        locale={locale}
        isDarkMode={isDarkMode}
        components={{
          TOC: (props: ComponentProps<typeof TableOfContents>) => (
            <TableOfContents
              {...props}
              levels={props.levels ?? tocLevels}
              maxDepth={props.maxDepth ?? tocMaxDepth}
            />
          ),
        }}
        wrapper={(props) => (
          <div
            {...props}
            className="mx-auto max-w-3xl w-full flex flex-col gap-4 py-10"
          />
        )}
      >
        {sanitizedContent}
      </MarkdownRenderer>
    </div>
  );
};
