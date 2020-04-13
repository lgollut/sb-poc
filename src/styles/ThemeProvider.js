import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as Provider } from '@theme-ui/core';
import { ColorModeProvider } from '@theme-ui/color-modes';

import theme from './theme';
import GlobalStyles from './GlobalStyles';

export default function ThemeProvider({ children }) {
  return (
    <Provider theme={theme}>
      <ColorModeProvider>
        <GlobalStyles />
        {children}
      </ColorModeProvider>
    </Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
