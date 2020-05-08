import { useEffect } from 'react';
import { useStorybookApi } from '@storybook/api';
import { UPDATE_GLOBAL_ARGS, STORY_RENDER } from '@storybook/core-events';

import * as themes from '../../themes';

const STORAGE_KEY = 'theme-switch-mode';

export const store = {
  set: (state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
  get: () => {
    const storedMode = window.localStorage.getItem(STORAGE_KEY);
    const { mode = 'light' } = JSON.parse(storedMode);
    return { mode };
  },
};

export default function SwitchListener() {
  const api = useStorybookApi();

  useEffect(() => {
    api.setOptions({ theme: themes[store.get().mode] });
  }, []);

  api.on(UPDATE_GLOBAL_ARGS, ({ mode }) => {
    if (mode) {
      store.set({ mode });
    }

    api.setOptions({ theme: themes[mode || store.get().mode] });
  });

  return null;
}
