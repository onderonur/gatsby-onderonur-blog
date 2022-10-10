import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import GridList from '../shared/GridList';
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
  const {
    markdownRemark: {
      frontmatter: { projects },
    },
  } = useStaticQuery(graphql`
    query ProjectsQuery {
      markdownRemark(fileAbsolutePath: { regex: "/common/projects.md/" }) {
        frontmatter {
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
  `);

  return (
    <GridList
      data={projects}
      getItemKey={(project) => project.title}
      renderItem={(project) => <ProjectCard data={project} />}
    />
  );
};

export default ProjectCardList;
