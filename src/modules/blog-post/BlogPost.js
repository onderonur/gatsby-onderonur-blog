import React, { useMemo } from 'react';
import Img from 'gatsby-image';
import { Typography, styled, Box } from '@mui/material';
import HtmlRenderer from '../common/HtmlRenderer';
import SEO from '../seo/SEO';
import { Bold } from '../common/StyledUtils';
import BlogPostPagination from './BlogPostPagination';
import BlogPostShareButtons from './BlogPostShareButtons';

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
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 2),
  },
}));

const ArticleHeading = styled('div')(({ theme }) => ({
  padding: theme.spacing(4, 0, 1, 0),
  textAlign: 'center',
}));

function BlogPost({ data, pageContext }) {
  const { markdownRemark, site } = data;
  const { frontmatter, html, excerpt, fields } = markdownRemark;
  const featuredImage = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : '';
  const { previous, next } = pageContext;

  const props = {
    previous,
    next,
  };

  const shareButtons = (
    <BlogPostShareButtons siteUrl={site.siteMetadata.siteUrl} />
  );

  // To strip HTML tags from the image caption
  const featuredImageAlt = useMemo(() => {
    const regexForStripHTML = /<([^</> ]+)[^<>]*?>[^<>]*?<\/\1> */gi;
    const stripContent = frontmatter.featuredImageCaption?.replace(
      regexForStripHTML,
      '',
    );
    return stripContent;
  }, []);

  return (
    <>
      <SEO
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        imageSrc={featuredImage.src}
        article
      />
      <Box component="article" sx={{ marginX: 'auto', maxWidth: 680 }}>
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
              <FeaturedImage fluid={featuredImage} alt={featuredImageAlt} />
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
      </Box>
      {(previous || next) && <BlogPostPagination {...props} />}
    </>
  );
}

export default BlogPost;
