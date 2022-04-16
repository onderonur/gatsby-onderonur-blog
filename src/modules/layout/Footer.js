import { Box, styled } from '@mui/material';
import React from 'react';
import SocialAccounts from '../social-accounts/SocialAccounts';

const initialYear = 2020;

const getYearRange = () => {
  const currentYear = new Date().getFullYear();
  if (currentYear === initialYear) {
    return 2020;
  }
  return `${initialYear} - ${currentYear}`;
};

const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.grey[200],
  padding: theme.spacing(1, 3),
  zIndex: 1,
}));

const Footer = () => (
  <StyledFooter>
    <Box flexGrow={1}>© {getYearRange()} All rights reserved</Box>
    <SocialAccounts />
  </StyledFooter>
);

export default Footer;
