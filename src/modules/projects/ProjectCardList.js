import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import GridList from '../common/GridList';
import ProjectCard from './ProjectCard';

function ProjectCardList() {
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
    <GridList>
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard data={project} />
        </li>
      ))}
    </GridList>
  );
}

export default ProjectCardList;
