export const forms = {
  field: {
    outlined: {
      label: {
        '': {
          top: '20px',
        },
        active: {
          top: -2,
          fontSize: 0,
          fontWeight: 'bold',
          color: 'text',
        },
        focused: {
          color: 'secondary',
        },
      },
      border: {
        '': {
          borderRadius: 2,
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '1px',
          backgroundColor: 'transparent',
        },
        active: {
          borderColor: 'transparent',
          borderWidth: '1px',
        },
        focused: {
          borderColor: 'secondary',
          borderWidth: '2px',
        },
        activeWithLabel: {
          borderColor: 'transparent',
        },
      },
      fieldset: {
        '': {
          borderRadius: 2,
        },
        active: {
          borderColor: 'muted',
          borderWidth: '1px',
        },
        focused: {
          borderColor: 'secondary',
          borderWidth: '2px',
        },
      },
    },
    filled: {
      label: {
        '': {
          top: '20px',
        },
        active: {
          top: 2,
          fontSize: 0,
          fontWeight: 'bold',
          color: 'text',
        },
        focused: {
          color: 'secondary',
        },
      },
      border: {
        '': {
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomStyle: 'solid',
          borderBottomColor: 'muted',
          borderBottomWidth: '1px',
          backgroundColor: 'muted',
        },
        active: {
          borderBottomColor: 'muted',
          borderBottomWidth: '1px',
        },
        focused: {
          borderBottomColor: 'transparent',
          borderBottomWidth: '2px',
        },
        activeWithLabel: {
          borderColor: 'transparent',
        },
      },
      fieldset: {
        '': {
          transform: 'scaleX(0)',
          zIndex: 10,
        },
        active: {
          borderBottomColor: 'muted',
          borderBottomWidth: '1px',
          transform: 'scaleX(1)',
        },
        focused: {
          borderBottomColor: 'secondary',
          borderBottomWidth: '2px',
          transform: 'scaleX(1)',
        },
      },
    },
    input: {
      color: 'text',
    },
  },
};
