/** @jsx jsx */
import { jsx } from '@theme-ui/core';
import { Label as ThemedLabel } from '@theme-ui/components';
import PropTypes from 'prop-types';

import { useRules } from '../../../styles';

export default function Label({
  active = false,
  focused = false,
  name,
  children = '',
  variant = 'outlined',
}) {
  const rules = useRules(`forms.field.${variant}.label`);

  return (
    children && (
      <ThemedLabel
        sx={{
          fontFamily: 'heading',
          position: 'absolute',
          left: 3,
          pointerEvents: 'none',
          fontSize: 2,
          width: 'auto',
          px: 2,
          mx: -2,
          transition: ({ transitions }) =>
            transitions.create('all', {
              duration: transitions.duration.short,
            }),
          ...rules({ active, focused }),
        }}
        htmlFor={name}
      >
        {children}
      </ThemedLabel>
    )
  );
}

Label.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  variant: PropTypes.string,
};
