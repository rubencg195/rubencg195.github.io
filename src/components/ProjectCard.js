import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GitHubIcon, ArrowRightIcon } from './UnicodeIcons';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="group cursor-pointer rounded-3xl bg-white dark:bg-surface-900 shadow-material-2 hover:shadow-material-4 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-surface-200/50 dark:border-surface-700/50"
    >
      {/* Header with gradient and icon */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
        <div className="absolute top-4 right-4 opacity-30">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-3xl">⚡</span>
          </div>
        </div>
        <div className="relative text-center z-10">
          <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
            <GitHubIcon />
          </div>
          <div className="text-sm font-medium opacity-90 uppercase tracking-wider">
            GitHub Repository
          </div>
        </div>
        {/* Floating particles */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-12 left-12 w-3 h-3 bg-white/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-16 right-20 w-1.5 h-1.5 bg-white/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-surface-600 dark:text-surface-300 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 hover:shadow-material-1 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-100 dark:border-surface-800">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 group/link"
          >
            <span className="mr-2">🔗</span>
            View on GitHub
            <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">↗</span>
          </a>
          <div className="flex items-center text-surface-400 dark:text-surface-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            <span className="text-sm font-medium mr-2">Explore</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
