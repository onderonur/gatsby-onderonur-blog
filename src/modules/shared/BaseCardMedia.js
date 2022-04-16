import React from 'react';
import Img from 'gatsby-image';
import { Box, CardMedia, styled } from '@mui/material';

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingBottom: '68%',
});

const ImgOverlay = styled('div')({
  position: 'absolute',
  inset: 0,
  boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.17)',
});

const BaseCardMedia = ({ src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <Box position="relative">
      <StyledCardMedia
        component={Img}
        fluid={src}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={alt}
      />
      <ImgOverlay />
    </Box>
  );
};

export default BaseCardMedia;
