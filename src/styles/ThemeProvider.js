import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as TuiProvider } from 'theme-ui';

import { theme } from '../theme';
export default function ThemeProvider({ children }) {
  return <TuiProvider theme={theme}>{children}</TuiProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};
