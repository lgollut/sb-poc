import React, { useContext, useEffect } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';

import { Flex, useColorMode } from 'theme-ui';

import { ThemeProvider } from '../../src/styles';
import { InitializeColorMode } from '../addons/theme-switch/InitializeColorMode';

function ColorModeProvider({ mode = 'light', children }) {
  const [_, setMode] = useColorMode();

  useEffect(() => {
    setMode(mode);
  }, [setMode, mode]);

  return children;
}

export function DecoratorThemeProvider({ mode, children }) {
  return (
    <>
      <InitializeColorMode mode={mode} />
      <ThemeProvider>
        <ColorModeProvider mode={mode}>
          <Flex
            sx={{
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </Flex>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export function DocOnlyThemeProvider({ children }) {
  const { storyStore, id } = useContext(DocsContext);
  const { globalArgs } = storyStore.fromId(id);

  return (
    <DecoratorThemeProvider mode={globalArgs.mode}>
      {children}
    </DecoratorThemeProvider>
  );
}
