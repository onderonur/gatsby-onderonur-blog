import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import slugify from 'slugify';

const Section = React.forwardRef(function Section(
  { title, titleComponent, children },
  ref,
) {
  const [observerRef, { wasEverVisible }] = useTrackVisibility();

  const sectionSlug = slugify(title, { lower: true });

  return (
    <Fade ref={observerRef} in={wasEverVisible} timeout={1000}>
      <Box
        ref={ref}
        component="section"
        sx={{ paddingY: 2, scrollMarginTop: '4rem' }}
      >
        <Typography
          id={sectionSlug}
          variant="h4"
          component={titleComponent ?? 'h2'}
          gutterBottom
          sx={{
            fontWeight: (theme) => theme.typography.fontWeightBold,
            scrollMarginTop: '5rem',
          }}
        >
          <Box component="a" href={`#${sectionSlug}`} sx={{ color: 'inherit' }}>
            {title}
          </Box>
        </Typography>
        {children}
      </Box>
    </Fade>
  );
});

export default Section;
