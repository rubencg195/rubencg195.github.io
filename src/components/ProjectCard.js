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
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <GitHubIcon className="text-4xl mb-2 mx-auto block" />
          <div className="text-sm font-medium">GitHub Repository</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub →
          </a>
          <button className="text-gray-400 hover:text-gray-600">
            <ArrowRightIcon className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
