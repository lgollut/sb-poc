/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Input({
  value,
  onFocus,
  onBlur,
  onChange,
  name,
  variant = 'outlined',
  ...props
}) {
  return (
    <input
      {...props}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      sx={{
        variant: 'forms.field.input',
        height: '100%',
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        padding: 3,
        paddingTop: variant === 'outlined' ? 3 : 5,
        fontFamily: 'body',
        fontSize: 2,
        position: 'absolute',
      }}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
