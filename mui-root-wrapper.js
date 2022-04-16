import React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#00a0c0',
    },
    secondary: {
      main: '#ee08d5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
