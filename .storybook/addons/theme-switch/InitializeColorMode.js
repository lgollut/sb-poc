import { store } from './SwitchListener';

export function InitializeColorMode({ mode }) {
  document.body.classList.add(`theme-ui-${mode || store.get().mode}`);
  return null;
}
