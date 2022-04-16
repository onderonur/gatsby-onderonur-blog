import React from 'react';
import { Link as MuiLink, styled } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GatsbyLink from '../shared/GatsbyLink';

const Root = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== 'isNextLink',
})(({ isNextLink, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
  alignItems: isNextLink ? 'flex-end' : 'flex-start',
  textDecoration: 'none',
}));

const PaginationLinkTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
}));

const PaginationLinkSubtitle = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

function PaginationLink({ to, subtitle, direction }) {
  const isNextLink = direction === 'next';
  return (
    <Root
      component={GatsbyLink}
      to={to}
      rel={isNextLink ? 'next' : 'prev'}
      isNextLink={isNextLink}
    >
      <PaginationLinkTitle>
        {!isNextLink && <ArrowLeftIcon />}
        {isNextLink ? 'Next' : 'Previous'}
        {isNextLink && <ArrowRightIcon />}
      </PaginationLinkTitle>
      {subtitle && <PaginationLinkSubtitle>{subtitle}</PaginationLinkSubtitle>}
    </Root>
  );
}

export default PaginationLink;
