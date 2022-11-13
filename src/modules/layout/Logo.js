import React from 'react';
import { Typography } from '@mui/material';
import { Bold } from '../common/StyledUtils';
import GatsbyLink from '../common/GatsbyLink';

function Logo({ title }) {
  return (
    <Typography component={GatsbyLink} to="/" color="primary">
      <Bold>{title}</Bold>
    </Typography>
  );
}

export default Logo;
