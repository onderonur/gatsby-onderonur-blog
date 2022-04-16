import { Button } from '@mui/material';
import React from 'react';

function BaseButton(props) {
  return <Button {...props} disableElevation={true} />;
}

export default BaseButton;
