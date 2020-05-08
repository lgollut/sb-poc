import React from 'react';
import PropTypes from 'prop-types';
import { Link as TuiLink } from 'theme-ui';

/**
 * Links allow users to navigation throughout the application
 */
export default function Link({ children, href, variant = 'default' }) {
  return (
    <TuiLink href={href} variant={variant}>
      {children}
    </TuiLink>
  );
}

Link.propTypes = {
  /**
   * Content of the link
   */
  children: PropTypes.node.isRequired,

  /**
   * Actual link of the component
   */
  href: PropTypes.string.isRequired,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['default', 'secondary']),
};
