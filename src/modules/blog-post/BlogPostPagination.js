import React from 'react';
import { Divider, styled } from '@mui/material';
import PaginationLink from '../blog-posts/PaginationLink';

const PaginationWrapper = styled('div')(({ theme, hasPrevious }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: hasPrevious ? 'space-between' : 'flex-end',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

function BlogPostPagination({ previous, next }) {
  return (
    <div>
      <Divider />
      <PaginationWrapper hasPrevious={!!previous}>
        {previous && (
          <PaginationLink
            direction="previous"
            to={previous.fields.route}
            subtitle={previous.frontmatter.title}
          />
        )}
        {next && (
          <PaginationLink
            direction="next"
            to={next.fields.route}
            subtitle={next.frontmatter.title}
          />
        )}
      </PaginationWrapper>
    </div>
  );
}

export default BlogPostPagination;
