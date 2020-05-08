import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

export default function AlertContent({ children }) {
  return <Box sx={{ flex: '1 1 auto' }}>{children}</Box>;
}

AlertContent.propTypes = {
  /**
   * Content of the alert
   */
  children: PropTypes.node,
};
