import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { REPOSITORIES } from '../constants';

const Projects = () => {
  return (
    <Section id="projects" background="grey">
      <SectionHeader 
        title="Featured Projects"
        description={<>
          Here are some of my recent projects that showcase my skills and experience in 
          <span className="font-semibold text-primary-700 dark:text-primary-400"> modern web development</span> and 
          <span className="font-semibold text-primary-700 dark:text-primary-400"> cloud architecture</span>.
        </>}
        descriptionClassName="max-w-3xl mx-auto"
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {REPOSITORIES.map((project, index) => (
          <div key={project.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
