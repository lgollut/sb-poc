import React from 'react';
import PropTypes from 'prop-types';
import { Alert as TuiAlert, Close } from '@theme-ui/components';

export default function Alert({ onClose, children, variant = 'success' }) {
  return (
    <TuiAlert variant={variant}>
      <div>{children}</div>
      {onClose && <Close onClick={onClose} sx={{ flex: '0 0 auto' }} />}
    </TuiAlert>
  );
}

Alert.propTypes = {
  /**
   * Content of the alert
   */
  children: PropTypes.node.isRequired,

  /**
   * Click handler to respond to user action
   */
  onClose: PropTypes.func,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['success', 'error', 'warning']),
};
