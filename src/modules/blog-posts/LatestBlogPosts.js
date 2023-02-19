import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box } from '@mui/material';
import BaseButton from '../common/BaseButton';
import BlogPostCardList from './BlogPostCardList';
import GatsbyLink from '../common/GatsbyLink';

function LatestBlogPosts() {
  const data = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
            fields {
              route
            }
          }
        }
      }
    }
  `);

  const postEdges = data.allMarkdownRemark.edges.filter(
    (edge) => !!edge.node.frontmatter.date,
  );

  return (
    <div>
      <BlogPostCardList postEdges={postEdges} />
      <Box marginTop={3} display="flex" justifyContent="flex-end">
        <BaseButton
          component={GatsbyLink}
          to="/blog"
          color="primary"
          variant="outlined"
          endIcon={<ArrowRightIcon />}
        >
          See more
        </BaseButton>
      </Box>
    </div>
  );
}

export default LatestBlogPosts;
