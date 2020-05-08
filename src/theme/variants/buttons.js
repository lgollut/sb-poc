import { alpha, lighten } from '@theme-ui/color';

const containedDefault = (color) => ({
  boxShadow: 2,
  backgroundColor: color,
  color: ({ helpers: { contrastedTextColor }, colors }) =>
    contrastedTextColor(colors[color], ['text', 'contrastText']),
  transition: ({ helpers: { createTransition }, durations, eases }) =>
    createTransition(['box-shadow'], {
      duration: durations.shorter,
      easing: eases.sharp,
    }),
  '&:hover:not(:disabled)': {
    boxShadow: 4,
  },
  '&:active:not(:disabled)': {
    boxShadow: 2,
  },
  '&:disabled': {
    backgroundColor: lighten('muted', 0.075),
    color: alpha('text', 0.4),
    cursor: 'default',
    boxShadow: 0,
  },
});

const textDefault = (color) => ({
  backgroundColor: 'transparent',
  color,
  transition: ({ helpers: { createTransition }, durations, eases }) =>
    createTransition(['background-color'], {
      duration: durations.shorter,
      easing: eases.sharp,
    }),
  '&:hover:not(:disabled)': {
    backgroundColor: alpha(color, 0.05),
  },
  '&:active:not(:disabled)': {},
  '&:disabled': {
    color: alpha('text', 0.4),
    cursor: 'default',
  },
});

const outlinedDefault = (color) => ({
  backgroundColor: 'transparent',
  borderColor: color,
  borderWidth: 1,
  borderStyle: 1,
  color,
  '&:hover:not(:disabled)': {
    backgroundColor: alpha(color, 0.05),
  },
  '&:active:not(:disabled)': {},
  '&:disabled': {
    borderColor: lighten('muted', 0.075),
    color: alpha('text', 0.4),
    cursor: 'default',
  },
});

export const buttons = {
  contained: {
    default: containedDefault('muted'),
    primary: containedDefault('primary'),
    secondary: containedDefault('secondary'),
    warning: containedDefault('warning'),
    error: containedDefault('error'),
  },
  text: {
    default: {
      ...textDefault('muted'),
      color: 'text',
    },
    primary: textDefault('primary'),
    secondary: textDefault('secondary'),
    warning: textDefault('warning'),
    error: textDefault('error'),
  },
  outlined: {
    default: {
      ...outlinedDefault('muted'),
      color: 'text',
    },
    primary: outlinedDefault('primary'),
    secondary: outlinedDefault('secondary'),
    warning: outlinedDefault('warning'),
    error: outlinedDefault('error'),
  },
};
