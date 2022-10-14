import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from '@reach/router';
import ShareButtons from './ShareButtons';

function BlogPostShareButtons({ siteUrl }) {
  const location = useLocation();

  return (
    <Box display="flex" justifyContent="flex-end">
      <ShareButtons url={`${siteUrl}${location.pathname}`} />
    </Box>
  );
}

export default BlogPostShareButtons;
