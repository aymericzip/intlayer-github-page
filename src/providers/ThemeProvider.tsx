import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';
import type { FC, PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeAttributes: FC = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme || 'system');
  }, [resolvedTheme]);

  return (
    <></>
  )
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  ...props
}) => (
  <NextThemesProvider
    storageKey="intlayer-theme"
    attribute="class"
    defaultTheme="system"
    enableSystem
    {...props}
  >
    <ThemeAttributes />
    {children}
  </NextThemesProvider>
);
