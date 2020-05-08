import React from 'react';
import { addons, types } from '@storybook/addons';

import SwitchListener from './SwitchListener';

const ADDON_ID = 'theme-switcher';

addons.register(ADDON_ID, (api) => {
  addons.add(`${ADDON_ID}/listener`, {
    title: 'Theme switch listener',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <SwitchListener />,
  });
});
