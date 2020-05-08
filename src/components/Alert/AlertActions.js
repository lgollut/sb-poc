import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'theme-ui';

export default function AlertActions({ children }) {
  return <Flex sx={{ flex: '0 0 auto', marginRight: -1 }}>{children}</Flex>;
}

AlertActions.propTypes = {
  /**
   * Actions of the alert
   */
  children: PropTypes.node,
};
