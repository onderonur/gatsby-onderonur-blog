import { Typography } from '@mui/material';
import React from 'react';
import { Bold } from './StyledUtils';

function BaseCardTitle({ children }) {
  return (
    <Typography variant="subtitle1" component="div">
      <Bold>{children}</Bold>
    </Typography>
  );
}

export default BaseCardTitle;
