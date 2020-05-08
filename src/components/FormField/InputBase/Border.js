/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import { useRules } from '../../../styles';

export default function Border({
  active = false,
  focused = false,
  hasLabel = true,
  variant = 'outlined',
}) {
  const rules = useRules(`forms.field.${variant}.border`);

  return (
    <div
      sx={{
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
        transition: ({ helpers: { createTransition }, durations }) =>
          createTransition('all', {
            duration: durations.shorter,
          }),
        ...rules({
          active,
          focused,
          activeWithLabel: active && hasLabel,
        }),
      }}
    />
  );
}

Border.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hasLabel: PropTypes.bool,
  variant: PropTypes.string,
};
