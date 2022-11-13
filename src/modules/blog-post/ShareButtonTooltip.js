import React from 'react';
import { Tooltip } from '@mui/material';

function ShareButtonTooltip({ name, children }) {
  const title = `Share on ${name}`;

  return (
    <Tooltip title={title} placement="top" arrow>
      {children}
    </Tooltip>
  );
}

export default ShareButtonTooltip;
