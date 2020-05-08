const baseCard = (backgroundColor) => ({
  backgroundColor: backgroundColor,
  color: ({ helpers: { contrastedTextColor }, colors }) =>
    contrastedTextColor(colors[backgroundColor], ['text', 'contrastText']),
  borderRadius: 2,
  boxShadow: 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const cards = {
  default: {
    ...baseCard('surface'),
  },
  primary: {
    ...baseCard('primary'),
  },
  secondary: {
    ...baseCard('secondary'),
  },
};
