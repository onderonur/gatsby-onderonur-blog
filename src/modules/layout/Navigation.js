import React from 'react';
import BaseButton from '../shared/BaseButton';
import GatsbyLink from '../shared/GatsbyLink';
import { Stack } from '@mui/material';

const menuItems = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
];

function Navigation() {
  return (
    <Stack component="nav" spacing={0.5} direction="row">
      {menuItems.map((item) => (
        <BaseButton
          key={item.path}
          component={GatsbyLink}
          to={item.path}
          color="primary"
        >
          {item.title}
        </BaseButton>
      ))}
    </Stack>
  );
}

export default Navigation;
