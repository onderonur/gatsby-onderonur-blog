import React from 'react';
import GridList from '../shared/GridList';
import ProjectCard from './ProjectCard';

const ProjectCardList = ({ projects }) => {
  return (
    <section>
      <GridList
        data={projects}
        getItemKey={(project) => project.title}
        renderItem={(project) => <ProjectCard data={project} />}
      />
    </section>
  );
};

export default ProjectCardList;
