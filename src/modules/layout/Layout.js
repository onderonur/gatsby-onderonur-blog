import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderOffset } from './Header';
import Footer from './Footer';
import { Box, Container, styled } from '@mui/material';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`;

const ContentContainer = styled(Container)({
  flexGrow: 1,
  position: 'relative',
});

const Layout = ({ hero, children }) => {
  const { site } = useStaticQuery(query);
  const { siteTitle } = site.siteMetadata;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header siteTitle={siteTitle} />
      {hero}
      {!hero && <HeaderOffset />}
      <ContentContainer maxWidth="lg" component="main">
        {children}
      </ContentContainer>
      <Footer />
    </Box>
  );
};

export default Layout;
