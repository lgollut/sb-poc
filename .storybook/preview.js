import React from 'react';
import { DecoratorThemeProvider } from './components';

export const decorators = [
  (story) => <DecoratorThemeProvider>{story()}</DecoratorThemeProvider>,
];

export const parameters = {
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  },
  passArgsFirst: true,
};
