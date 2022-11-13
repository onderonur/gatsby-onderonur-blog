import { Typography } from '@mui/material';
import React from 'react';

function BaseCardSubtitle({ children }) {
  return (
    <Typography variant="subtitle2" component="div" color="textSecondary">
      {children}
    </Typography>
  );
}

export default BaseCardSubtitle;
