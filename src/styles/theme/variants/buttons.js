const baseButton = {
  textTransform: 'uppercase',
  fontSize: 1,
  fontFamily: 'heading',
  borderRadius: 2,
  cursor: 'pointer',
  paddingRight: 3,
  paddingLeft: 3,
  minHeight: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  default: {
    ...baseButton,
    backgroundColor: 'muted',
    color: 'text',
  },
  primary: {
    ...baseButton,
    backgroundColor: 'primary',
    '&:disabled': {
      backgroundColor: 'surface',
      color: 'muted',
      cursor: 'default',
    },
  },
  icon: {
    width: 6,
    height: 6,
    margin: '-12px',
    cursor: 'pointer',
    borderRadius: 5,
    ':hover': {
      bg: 'surface',
    },
  },
  close: {
    cursor: 'pointer',
    width: 6,
    height: 6,
    right: 2,
  },
};
