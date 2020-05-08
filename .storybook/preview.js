import React from 'react';
import { DecoratorThemeProvider } from './components';

import { withThemeSwitch } from './addons/theme-switch';

export const globalArgTypes = {
  mode: {
    name: 'Color mode selector',
    description: 'Set the color mode of the application theme',
    defaultValue: 'light',
    toolbar: { icon: 'circlehollow', items: ['light', 'dark'] },
  },
};

export const decorators = [
  withThemeSwitch,
  (story, { globalArgs }) => {
    return (
      <DecoratorThemeProvider mode={globalArgs.mode}>
        {story()}
      </DecoratorThemeProvider>
    );
  },
];

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
