import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Layout from '../modules/layout/Layout';
import BaseButton from '../modules/common/BaseButton';
import SEO from '../modules/seo/SEO';
import GatsbyLink from '../modules/common/GatsbyLink';
import { Bold } from '../modules/common/StyledUtils';
import HomeIcon from '@mui/icons-material/HomeOutlined';

const PageContent = styled('div')({
  textAlign: 'center',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

function NotFound() {
  return (
    <Layout>
      <PageContent>
        <Box marginBottom={6}>
          <header>
            <Typography variant="h2" component="h1">
              <Bold>404 Not Found</Bold>
            </Typography>
            <Typography variant="h6" component="h3">
              The page you are looking for does not exist or is not accessible
              at the moment.
            </Typography>
          </header>
          <Box marginTop={2}>
            <BaseButton
              component={GatsbyLink}
              to="/"
              variant="outlined"
              color="primary"
              startIcon={<HomeIcon />}
            >
              Back to Homepage
            </BaseButton>
          </Box>
        </Box>
      </PageContent>
    </Layout>
  );
}

export default NotFound;

export function Head({ location }) {
  return <SEO title="Page not found" pathname={location.pathname} />;
}
