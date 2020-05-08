import React from 'react';
import PropTypes from 'prop-types';
import { Button as TuiButton, Text } from 'theme-ui';
import { lighten, alpha } from '@theme-ui/color';

/**
 * Buttons allow users to take actions, and make choices, with a single tap
 */
export default function Button({
  children,
  color = 'default',
  onClick,
  variant = 'contained',
  disabled = false,
}) {
  return (
    <TuiButton
      disabled={disabled}
      onClick={onClick}
      sx={{
        alignItems: 'center',
        borderRadius: 2,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 6,
        paddingLeft: 3,
        paddingRight: 3,
        '&:disabled': {
          backgroundColor: lighten('muted', 0.075),
          color: alpha('text', 0.4),
          cursor: 'default',
          boxShadow: 0,
        },
        variant: `buttons.${variant}.${color}`,
      }}
    >
      <Text variant="button">{children}</Text>
    </TuiButton>
  );
}

Button.propTypes = {
  /**
   * The color of the button
   */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'warning',
    'error',
  ]),

  /**
   * Whether or not the button is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Content of the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Click handler to respond to user action
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']),
};
