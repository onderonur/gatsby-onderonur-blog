import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { styled } from '@mui/material';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const GatsbyLink = React.forwardRef(function GatsbyLink(
  { to, onClick, ...rest },
  ref,
) {
  const location = useLocation();
  return (
    <StyledLink
      ref={ref}
      to={to}
      {...rest}
      onClick={(e) => {
        if (location.pathname === to) {
          window.scrollTo({ top: 0 });
        }
        onClick?.(e);
      }}
    />
  );
});

export default GatsbyLink;
