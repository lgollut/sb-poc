/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function FieldContainer({ children, className = '' }) {
  return (
    <div className={className} sx={{ height: 7, position: 'relative' }}>
      {children}
    </div>
  );
}

FieldContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
