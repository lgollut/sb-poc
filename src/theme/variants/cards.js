const baseCard = {
  borderRadius: 2,
  boxShadow: 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

export const cards = {
  default: {
    ...baseCard,
    backgroundColor: 'surface',
    color: 'text',
  },
  primary: {
    ...baseCard,
    backgroundColor: 'primary',
    color: 'text',
  },
  secondary: {
    ...baseCard,
    backgroundColor: 'secondary',
    color: 'text',
  },
};
