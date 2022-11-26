import React from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import slugify from 'slugify';
import { Bold } from './StyledUtils';

const scrollMarginTop = '5rem';

const SectionTitle = React.forwardRef(function SectionTitle(
  { children, component = 'h2', ...rest },
  ref,
) {
  return (
    <Typography
      ref={ref}
      {...rest}
      sx={{ ...rest.sx, scrollMarginTop }}
      component={component}
      variant="h4"
      gutterBottom
    >
      <Bold>{children}</Bold>
    </Typography>
  );
});

const Section = React.forwardRef(function Section(
  { title, titleComponent, children },
  ref,
) {
  const [observerRef, { wasEverVisible }] = useTrackVisibility();

  const sectionSlug = slugify(title, { lower: true });

  return (
    <Fade
      ref={(node) => {
        observerRef(node);
        if (ref) {
          ref.current = node;
        }
      }}
      in={wasEverVisible}
      timeout={1000}
      sx={{ scrollMarginTop }}
    >
      <Box
        component="section"
        // Since this component is wrapped with `Fade`,
        // `sx` prop is not working on this somehow.
        // So the system props are used here.
        // https://mui.com/system/react-box/#system-props
        marginTop={3}
        marginBottom={4}
      >
        <SectionTitle id={sectionSlug} component={titleComponent}>
          <Box component="a" href={`#${sectionSlug}`} sx={{ color: 'inherit' }}>
            {title}
          </Box>
        </SectionTitle>
        {children}
      </Box>
    </Fade>
  );
});

export default Section;
