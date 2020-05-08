import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'theme-ui';

export default function CardMedia({ image }) {
  return <Image src={image} />;
}

CardMedia.propTypes = {
  /**
   * The image source to render
   */
  image: PropTypes.string.isRequired,
};
