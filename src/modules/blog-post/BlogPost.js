import React from 'react';
import Img from 'gatsby-image';
import { Box, Typography, styled } from '@mui/material';
import { useLocation } from '@reach/router';
import HtmlRenderer from '../shared/HtmlRenderer';
import ShareButtons from './ShareButtons';
import SEO from '../seo/SEO';
import { Bold } from '../shared/StyledUtils';
import BlogPostPagination from './BlogPostPagination';

const StyledArticle = styled('article')({
  margin: '0 auto',
  maxWidth: '85ch',
});

const StyledFigure = styled('figure')({
  margin: 0,
});

const StyledFigcaption = styled('figcaption')(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: 'gray',
  textAlign: 'center',
  a: {
    color: 'inherit',
    textDecoration: 'underline',
  },
}));

const FeaturedImage = styled(Img)(({ theme }) => ({
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius * 2,
}));

const BlogPostContent = styled(HtmlRenderer)(({ theme }) => ({
  padding: theme.spacing(2),
  img: {
    width: '100%',
  },
  a: {
    textDecoration: 'underline',
    color: theme.palette.primary.main,
  },
  '*:not(pre) code': {
    padding: theme.spacing(0.2, 0.4),
    backgroundColor: theme.palette.grey[300],
  },
}));

const ArticleHeading = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0, 1, 0),
  textAlign: 'center',
}));

function BlogPostShareButtons({ siteUrl }) {
  const location = useLocation();
  return (
    <Box display="flex" justifyContent="flex-end">
      <ShareButtons url={`${siteUrl}${location.pathname}`} />
    </Box>
  );
}

function BlogPost({ data, pageContext }) {
  const { markdownRemark, site } = data; // data.markdownRemark contains your post data
  const { frontmatter, html, excerpt, fields } = markdownRemark;
  const featuredImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : '';
  const { previous, next } = pageContext;

  let props = {
    previous,
    next,
  };

  const shareButtons = (
    <BlogPostShareButtons siteUrl={site.siteMetadata.siteUrl} />
  );

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        imageSrc={featuredImage.src}
        article={true}
      />
      <StyledArticle>
        <header>
          <ArticleHeading>
            <Typography component="h1" variant="h4">
              <Bold>{frontmatter.title}</Bold>
            </Typography>
            <Typography component="p" color="textSecondary" variant="subtitle2">
              <time>{frontmatter.date}</time> · {fields.readingTime.text}
            </Typography>
          </ArticleHeading>
          {shareButtons}
          {featuredImage && (
            <StyledFigure>
              <FeaturedImage
                fluid={featuredImage}
                alt={`${frontmatter.title} - Featured image`}
              />
              {frontmatter.featuredImageCaption && (
                <StyledFigcaption>
                  <HtmlRenderer
                    html={frontmatter.featuredImageCaption}
                    variant="subtitle2"
                  />
                </StyledFigcaption>
              )}
            </StyledFigure>
          )}
        </header>

        <BlogPostContent html={html} />

        {shareButtons}
      </StyledArticle>
      {(previous || next) && <BlogPostPagination {...props} />}
    </>
  );
}

export default BlogPost;
