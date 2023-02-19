import React from 'react';
import BlogPost from '../modules/blog-post/BlogPost';
import Layout from '../modules/layout/Layout';
import { graphql } from 'gatsby';
import SEO from '../modules/seo/SEO';

export const pageQuery = graphql`
  query BlogPostQuery($route: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { route: { eq: $route } }) {
      id
      html
      excerpt(pruneLength: 148)
      fields {
        route
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 680
              maxHeight: 280
              cropFocus: CENTER
              quality: 80
              srcSetBreakpoints: [350, 700, 1050, 1400]
            ) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        featuredImageCaption
      }
    }
  }
`;

function BlogPostPage(props) {
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
}

export default BlogPostPage;

export function Head({ location, data }) {
  const { frontmatter, excerpt } = data.markdownRemark;

  return (
    <SEO
      title={frontmatter.title}
      description={frontmatter.description || excerpt}
      imageSrc={frontmatter.featuredImage.childImageSharp.fluid.src}
      pathname={location.pathname}
      article
    />
  );
}
