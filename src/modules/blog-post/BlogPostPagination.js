import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import PaginationLink from '../blog-posts/PaginationLink';

function BlogPostPagination({ previous, next }) {
  return (
    <div>
      <Divider />
      <Box marginY={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {previous && (
              <PaginationLink
                direction="previous"
                to={previous.fields.route}
                subtitle={previous.frontmatter.title}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {next && (
              <PaginationLink
                direction="next"
                to={next.fields.route}
                subtitle={next.frontmatter.title}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BlogPostPagination;
