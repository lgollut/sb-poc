import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'theme-ui';

export default function CardContent({ children }) {
  return (
    <Box px={3} pb={3}>
      {children}
    </Box>
  );
}

CardContent.propTypes = {
  /**
   * The card content
   */
  children: PropTypes.node,
};
