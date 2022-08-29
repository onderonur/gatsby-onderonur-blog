import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../modules/layout/Layout';
import { Typography, Stack, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeaderOffset } from '../modules/layout/Header';
import BackgroundImage from 'gatsby-background-image';
import BaseButton from '../modules/shared/BaseButton';
import SEO from '../modules/seo/SEO';
import HtmlRenderer from '../modules/shared/HtmlRenderer';
import { Bold } from '../modules/shared/StyledUtils';
import ProjectCardList from '../modules/projects/ProjectCardList';
import Section from '../modules/shared/Section';
import LatestBlogPosts from '../modules/blog-posts/LatestBlogPosts';
import SkillsList from '../modules/skills/SkillsList';
import EducationTimeline from '../modules/education/EducationTimeline';
import ExperienceTimeline from '../modules/experience/ExperienceTimeline';
import SocialAccounts from '../modules/social-accounts/SocialAccounts';

export const pageQuery = graphql`
  query HomeQuery($route: String!) {
    heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(fields: { route: { eq: $route } }) {
      id
      html
      fields {
        route
      }
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(
              maxWidth: 360
              maxHeight: 360
              cropFocus: CENTER
              quality: 80
              srcSetBreakpoints: [960, 1440]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        skills {
          icon {
            childImageSharp {
              fixed(width: 30, height: 30, quality: 80, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          name
        }
        experience {
          dateRange
          jobTitle
          company
          description
          location
        }
        education {
          startYear
          endYear
          school
          fieldOfStudy
          grade
          location
        }
        projects {
          title
          description
          featuredImage {
            childImageSharp {
              fluid(quality: 80) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          demoUrl
          sourceCodeUrl
          techStack {
            name
          }
        }
      }
    }
  }
`;

const HeroBgImage = styled(BackgroundImage)({
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const HeroBanner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  textAlign: 'center',
});

const Tagline = styled(Typography)({
  opacity: 0.7,
});

const SmoothImage = styled(Img)(({ theme }) => ({
  borderRadius: '50%',
  height: '12rem',
  width: '12rem',
  margin: 'auto',
  [theme.breakpoints.down('lg')]: {
    height: '11rem',
    width: '11rem',
  },
  [theme.breakpoints.down('md')]: {
    height: '10rem',
    width: '10rem',
  },
  [theme.breakpoints.down('sm')]: {
    height: '9rem',
    width: '9rem',
  },
}));

const HeroBannerContent = styled('div')(({ theme }) => ({
  boxShadow: theme.shadows[6],
  padding: theme.spacing(3),
  position: 'relative',
  '&:before': {
    content: '""',
    background: '#ededed',
    position: 'absolute',
    inset: 0,
    opacity: 0.9,
    zIndex: -1,
  },
}));

const HomePage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : undefined;

  const aboutRef = useRef(null);

  return (
    <>
      <SEO title="Home" />
      <Layout
        hero={
          <HeroBgImage
            Tag="section"
            fluid={data.heroImage.childImageSharp.fluid}
          >
            <HeroBanner>
              <HeaderOffset />
              <HeroBannerContent>
                <SmoothImage
                  fluid={image}
                  alt={`${frontmatter.title} - Featured image`}
                />
                <Stack marginY={2} spacing={1} alignItems="center">
                  <div>
                    <Typography variant="h3" component="h1">
                      <Bold>{frontmatter.title}</Bold>
                    </Typography>
                    <Tagline variant="h4">{frontmatter.tagline}</Tagline>
                  </div>
                  <SocialAccounts />
                  <BaseButton
                    endIcon={<ExpandMoreIcon />}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      aboutRef.current?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Find Out More
                  </BaseButton>
                </Stack>
              </HeroBannerContent>
            </HeroBanner>
          </HeroBgImage>
        }
      >
        <Section ref={aboutRef} title="About">
          <HtmlRenderer html={html} />
        </Section>
        <Section title="Skills">
          <SkillsList skills={frontmatter.skills} />
        </Section>
        <Section title="Experience">
          <ExperienceTimeline items={frontmatter.experience} />
        </Section>
        <Section title="Education">
          <EducationTimeline items={frontmatter.education} />
        </Section>
        <Section title="Projects">
          <ProjectCardList projects={frontmatter.projects} />
        </Section>
        <Section title="Latest in Blog">
          <LatestBlogPosts />
        </Section>
      </Layout>
    </>
  );
};

export default HomePage;
