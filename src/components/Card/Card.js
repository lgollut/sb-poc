import React from 'react';
import PropTypes from 'prop-types';
import { Card as TuiCard } from 'theme-ui';

/**
 * Cards are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 */
export default function Card({ children, variant = 'default' }) {
  return <TuiCard variant={variant}>{children}</TuiCard>;
}

Card.propTypes = {
  /**
   * Elements composing the card component
   */
  children: PropTypes.node,

  /**
   * Style presets applied to the component
   */
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
};
