import React, { useEffect } from 'react';
import { Flex } from '@theme-ui/components';
import { useColorMode } from '@theme-ui/color-modes';

import ThemeProvider from '../src/styles';

export const globalArgTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: { icon: 'circlehollow', items: ['light', 'dark'] },
  },
};

const ColorModeDecorator = ({ theme }) => {
  const [_, setMode] = useColorMode();

  useEffect(() => {
    setMode(theme);
  }, [setMode, theme]);

  return null;
};

const ThemeProviderDecorator = (story, { globalArgs: { theme } }) => {
  return (
    <ThemeProvider>
      <ColorModeDecorator theme={theme} />
      <Flex p={4} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        {story()}
      </Flex>
    </ThemeProvider>
  );
};

export const decorators = [ThemeProviderDecorator];

export const parameters = {
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
  // actions: { argTypesRegex: '^on.*' },
  passArgsFirst: true,
};
