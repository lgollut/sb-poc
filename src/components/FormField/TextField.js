import React from 'react';
import PropTypes from 'prop-types';

import { FieldContainer, Input, Label, CutBorder, Border } from './InputBase';

export default function TextField({
  label,
  variant = 'outlined',
  field,
  meta: { focused, active },
}) {
  const controlsProps = {
    focused,
    active,
    variant,
  };

  return (
    <FieldContainer>
      <CutBorder {...controlsProps} label={label} />
      <Border {...controlsProps} hasLabel={!!label} />
      <Input {...field} variant={variant} />
      <Label {...controlsProps} name={field.name}>
        {label}
      </Label>
    </FieldContainer>
  );
}

TextField.propTypes = {
  /**
   * Helpers used by the field
   */
  field: PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,

  /**
   * Text label
   */
  label: PropTypes.string,

  /**
   * Meta information of the current state
   */
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    focused: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['outlined', 'filled']),
};
