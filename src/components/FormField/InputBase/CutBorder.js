/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

import { useRules } from '../../../styles';

export default function CutBorder({
  active = false,
  focused = false,
  label,
  variant = 'outlined',
}) {
  const rules = useRules(`forms.field.${variant}.fieldset`);

  return (
    label && (
      <fieldset
        sx={{
          position: 'absolute',
          top: variant === 'outlined' ? '-6px' : 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: 'none',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          zIndex: 0,
          margin: 0,
          padding: 0,
          transition: ({ helpers: { createTransition }, durations }) =>
            createTransition('all', {
              duration: durations.shorter,
            }),
          ...rules([
            {
              active,
              focused,
            },
          ]),
        }}
      >
        {variant === 'outlined' && (
          <legend sx={{ px: 2, ml: '7px', mt: -1, visibility: 'hidden' }}>
            <span
              sx={{ fontSize: 0, fontFamily: 'heading', fontWeight: 'bold' }}
            >
              {label}
            </span>
          </legend>
        )}
      </fieldset>
    )
  );
}

CutBorder.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  label: PropTypes.string.isRequired,
  focused: PropTypes.bool,
  variant: PropTypes.string,
};
