import { create } from '@storybook/theming/create';

import { colors } from '../../src/theme/scales';

export const light = create({
  base: 'light',

  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.background,
  appContentBg: colors.background,
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // // Fonts
  // fontBase: typography.fonts.base,
  // fontCode: typography.fonts.mono,

  // Text colors
  textColor: colors.text,
  textInverseColor: colors.contrastText,

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: colors.secondary,
  barBg: colors.background,

  // Form colors
  inputBg: colors.background,
  inputBorder: colors.muted,
  inputTextColor: colors.text,
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://www.liip.ch',
  brandImage: 'https://www.liip.ch/assets/dist/favicon.ico?v=1587109866',
});
