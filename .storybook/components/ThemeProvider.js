import React from 'react';

import { Flex } from 'theme-ui';

import { ThemeProvider } from '../../src/styles';

export function DecoratorThemeProvider({ children }) {
  return (
    <ThemeProvider>
      <Flex
        sx={{
          padding: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Flex>
    </ThemeProvider>
  );
}
