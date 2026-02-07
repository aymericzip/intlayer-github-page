import {
  Modes,
  SwitchSelector,
  type SwitchSelectorChoices,
} from '@intlayer/design-system';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, type FC } from 'react';

export const SwitchThemeSwitcher: FC = () => {
  const [theme, setCurrentTheme] = useState<Modes>(Modes.light);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setCurrentTheme(resolvedTheme === 'dark' ? Modes.dark : Modes.light);
  }, [resolvedTheme]);

  const themeSwitcher = [
    {
      content: (
        <SunIcon
          size={20}
          data-mode="light"
          aria-label="Switch to light mode"
        />
      ),
      value: Modes.light,
    },
    {
      content: (
        <MoonIcon size={20} data-mode="dark" aria-label="Switch to dark mode" />
      ),
      value: Modes.dark,
    },
  ] as SwitchSelectorChoices<Modes>;

  return (
    <SwitchSelector
      choices={themeSwitcher}
      value={theme}
      onChange={(val) => setTheme(val)}
      color="text"
      size='sm'
      className='scale-75'
    />
  );
};
