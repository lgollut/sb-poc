import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as TuiProvider } from 'theme-ui';

import { theme } from '../theme';

import { components } from './MdxComponents';
export default function ThemeProvider({ children }) {
  return (
    <TuiProvider components={components} theme={theme}>
      {children}
    </TuiProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  components: PropTypes.object,
  theme: PropTypes.object,
};
