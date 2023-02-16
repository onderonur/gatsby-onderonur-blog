import { Box } from '@mui/material';
import React from 'react';
import SocialAccounts from '../social-accounts/SocialAccounts';

const initialYear = 2020;

function getYearRange() {
  const currentYear = new Date().getFullYear();
  if (currentYear === initialYear) {
    return 2020;
  }
  return `${initialYear} - ${currentYear}`;
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row' },
        alignItems: 'center',
        gap: 1,
        backgroundColor: (theme) => theme.palette.grey[200],
        paddingX: 3,
        paddingY: 1,
        zIndex: 1,
      }}
    >
      <Box flexGrow={1}>© {getYearRange()} All rights reserved</Box>
      <SocialAccounts />
    </Box>
  );
}

export default Footer;
