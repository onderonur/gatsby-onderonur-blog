import React from 'react';
import GridList from '../shared/GridList';
import BlogPostCard from '../blog-posts/BlogPostCard';

function BlogPostCardList({ postEdges }) {
  return (
    <GridList
      data={postEdges}
      getItemKey={(edge) => edge.node.id}
      renderItem={(edge) => <BlogPostCard data={edge.node} />}
    />
  );
}

export default BlogPostCardList;
