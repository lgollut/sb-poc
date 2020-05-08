import { create } from '@storybook/theming/create';

import { colors } from '../../src/theme/scales';

export const dark = create({
  base: 'dark',

  colorPrimary: colors.modes.dark.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.modes.dark.background,
  appContentBg: colors.modes.dark.background,
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // // Fonts
  // fontBase: typography.fonts.base,
  // fontCode: typography.fonts.mono,

  // Text colors
  textColor: colors.modes.dark.text,
  textInverseColor: colors.modes.dark.contrastText,

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: colors.modes.dark.secondary,
  barBg: colors.modes.dark.background,

  // Form colors
  inputBg: colors.modes.dark.background,
  inputBorder: colors.modes.dark.muted,
  inputTextColor: colors.modes.dark.text,
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://www.liip.ch',
  brandImage: 'https://www.liip.ch/assets/dist/favicon.ico?v=1587109866',
});
