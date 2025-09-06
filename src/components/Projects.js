import React from 'react';
import ProjectCard from './ProjectCard';
import { REPOSITORIES } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REPOSITORIES.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
