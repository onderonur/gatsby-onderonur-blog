import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderOffset } from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

function Layout({ hero, children }) {
  const { site } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header siteTitle={site.siteMetadata.title} />
      {hero}
      {!hero && <HeaderOffset />}
      <Container maxWidth="lg" component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
