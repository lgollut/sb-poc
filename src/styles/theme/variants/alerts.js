const defaults = {
  borderRadius: 3,
  padding: 3,
  pointerEvents: 'auto',
  width: '100%',
  display: 'flex',
};

export default {
  success: {
    ...defaults,
    backgroundColor: 'secondary',
  },
  error: {
    ...defaults,
    backgroundColor: 'error',
  },
  warning: {
    ...defaults,
    backgroundColor: 'warning',
  },
};
