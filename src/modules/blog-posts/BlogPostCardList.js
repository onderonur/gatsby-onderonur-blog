import React from 'react';
import GridList from '../common/GridList';
import BlogPostCard from '../blog-posts/BlogPostCard';

function BlogPostCardList({ postEdges }) {
  return (
    <GridList>
      {postEdges.map((edge) => (
        <li key={edge.node.id}>
          <BlogPostCard data={edge.node} />
        </li>
      ))}
    </GridList>
  );
}

export default BlogPostCardList;
