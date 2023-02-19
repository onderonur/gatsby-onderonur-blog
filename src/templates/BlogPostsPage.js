import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../modules/layout/Layout';
import BlogPosts from '../modules/blog-posts/BlogPosts';
import SEO from '../modules/seo/SEO';

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      limit: $limit
      skip: $skip
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
`;

function BlogPostsPage(props) {
  return (
    <Layout>
      <BlogPosts {...props} />
    </Layout>
  );
}

export default BlogPostsPage;

export function Head({ pageContext, location }) {
  const { currentPage, pagesCount } = pageContext;

  return (
    <SEO
      title={`Blog - Page ${currentPage} of ${pagesCount}`}
      description={`Onur Önder's blog page ${currentPage} of ${pagesCount}`}
      pathname={location.pathname}
    />
  );
}
