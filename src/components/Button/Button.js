import React from 'react';
import PropTypes from 'prop-types';
import { Button as TuiButton } from '@theme-ui/components';

/**
 * Buttons allow users to take actions, and make choices, with a single tap
 */
export default function Button({
  children,
  onClick = (e) => {
    e.preventDefault();
  },
  variant = 'default',
}) {
  return (
    <TuiButton onClick={onClick} variant={variant}>
      {children}
    </TuiButton>
  );
}

Button.propTypes = {
  /**
   * Content of the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Click handler to respond to user action
   */
  onClick: PropTypes.func,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['default', 'primary']),
};
