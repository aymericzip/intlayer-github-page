export const urlRenamer = (content: string): string => {
  const intlayerBaseUrl = "https://intlayer.org";

  let updatedContent = content;

  // Replace GitHub links with intlayer.org links
  const githubLinkRegex = /https:\/\/github\.com\/aymericzip\/intlayer\/blob\/main\/docs\/en\/([^)]+)\.md/g;
  updatedContent = updatedContent.replace(
    githubLinkRegex,
    (_match, path) => `${intlayerBaseUrl}/en/doc/${path}`
  );

  // Also replace relative links like [text](./something.md) or [text](../something.md)
  // that point to other documentation files.
  const relativeLinkRegex = /\[([^\]]+)\]\((?:\.\/|\.\.\/)+([^)]+)\.md\)/g;
  updatedContent = updatedContent.replace(
    relativeLinkRegex,
    (_match, text, path) => {
      return `[${text}](${intlayerBaseUrl}/en/doc/${path})`;
    }
  );

  return updatedContent;
};
