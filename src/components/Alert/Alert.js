import React from 'react';
import PropTypes from 'prop-types';
import { Alert as TuiAlert } from 'theme-ui';

import AlertContent from './AlertContent';

export default function Alert({ children, variant = 'success' }) {
  return (
    <TuiAlert
      sx={{
        borderRadius: 3,
        padding: 3,
        pointerEvents: 'auto',
        width: '100%',
        display: 'flex',
      }}
      variant={variant}
    >
      {typeof children === 'string' ? (
        <AlertContent>{children}</AlertContent>
      ) : (
        children
      )}
    </TuiAlert>
  );
}

Alert.propTypes = {
  /**
   * Elements that compose the alert content
   */
  children: PropTypes.node.isRequired,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['success', 'error', 'warning']),
};
