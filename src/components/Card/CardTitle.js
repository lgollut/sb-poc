import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'theme-ui';

export default function CardTitle({ primary, secondary }) {
  return (
    <Box px={3} py={4}>
      <Heading>{primary}</Heading>
      {secondary && <Text>{secondary}</Text>}
    </Box>
  );
}

CardTitle.propTypes = {
  /**
   * The card title
   */
  primary: PropTypes.string.isRequired,

  /**
   * Secondary text beneath the title
   */
  secondary: PropTypes.string,
};
