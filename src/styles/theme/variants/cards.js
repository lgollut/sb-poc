const baseCard = {
  borderRadius: 2,
  boxShadow:
    '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

export default {
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
