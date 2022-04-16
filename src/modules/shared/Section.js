import React from 'react';
import { Box, Typography, Fade, styled } from '@mui/material';
import { useTrackVisibility } from 'react-intersection-observer-hook';
import slugify from 'slugify';
import { Bold } from './StyledUtils';

const scrollMarginTop = '5rem';

const StyledTypography = styled(Typography)({
  scrollMarginTop,
});

const SectionTitle = React.forwardRef(function SectionTitle(
  { children, ...rest },
  ref,
) {
  return (
    <StyledTypography
      ref={ref}
      {...rest}
      variant="h4"
      component="h2"
      gutterBottom
    >
      <Bold>{children}</Bold>
    </StyledTypography>
  );
});

const StyledAnchor = styled('a')({
  color: 'inherit',
});

const StyledFade = styled(Fade)`
  scroll-margin-top: ${scrollMarginTop};
`;

const Section = React.forwardRef(function Section({ title, children }, ref) {
  const [observerRef, { wasEverVisible }] = useTrackVisibility();

  const sectionSlug = slugify(title, { lower: true });

  return (
    <StyledFade
      ref={(node) => {
        observerRef(node);
        if (ref) {
          ref.current = node;
        }
      }}
      in={wasEverVisible}
      timeout={1000}
    >
      <Box marginTop={3} marginBottom={4}>
        <StyledAnchor href={`#${sectionSlug}`}>
          <SectionTitle id={sectionSlug}>{title}</SectionTitle>
        </StyledAnchor>
        {children}
      </Box>
    </StyledFade>
  );
});

export default Section;
