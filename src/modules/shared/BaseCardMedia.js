import React from 'react';
import Img from 'gatsby-image';
import { CardMedia, styled } from '@mui/material';

const StyledCardMedia = styled(CardMedia)({
  aspectRatio: '100 / 68',
  position: 'relative',
  '&:after': {
    content: "''",
    position: 'absolute',
    inset: 0,
    boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.17)',
  },
});

const BaseCardMedia = ({ src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <StyledCardMedia
      component={Img}
      fluid={src}
      objectFit="cover"
      objectPosition="50% 50%"
      alt={alt}
    />
  );
};

export default BaseCardMedia;
