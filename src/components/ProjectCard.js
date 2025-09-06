import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, gradient, icon, index = 0 }) => {
  if (!project) return null;

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block animate-fade-in hover:scale-105 transition-all duration-300"
      style={{animationDelay: `${0.2 + index * 0.1}s`}}
    >
      <div className="glass-effect rounded-3xl p-8 h-full shadow-material-2 hover:shadow-material-4 transition-all duration-500 relative overflow-hidden">
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Project Icon */}
        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:animate-bounce shadow-material-2`}>
            {icon}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
            {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h3>

          {/* Project Description */}
          <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 line-clamp-3">
            {project.description || 'No description available'}
          </p>

          {/* Project Stats */}
          <div className="flex items-center gap-4 mb-6 text-sm text-surface-500 dark:text-surface-400">
            <div className="flex items-center gap-1">
              <span className="text-warning-500">⭐</span>
              <span>{project.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-secondary-500">🍴</span>
              <span>{project.forks_count}</span>
            </div>
            {project.language && (
              <div className="flex items-center gap-1">
                <span className="text-primary-500">💻</span>
                <span>{project.language}</span>
              </div>
            )}
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.topics?.slice(0, 3).map((topic, topicIndex) => (
              <span
                key={topicIndex}
                className="px-3 py-1 bg-surface-200/50 dark:bg-surface-700/50 rounded-full text-xs font-medium text-surface-700 dark:text-surface-300 backdrop-blur-sm"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <div className="flex items-center justify-between">
            <span className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-secondary-500 transition-colors duration-300">
              View Project →
            </span>
            
            {/* Last Updated */}
            <span className="text-xs text-surface-400 dark:text-surface-500">
              Updated {new Date(project.updated_at).toLocaleDateString()}
            </span>
          </div>

          {/* Progress Bar Animation */}
          <div className={`w-full h-1 bg-gradient-to-r ${gradient} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div className={`w-8 h-8 bg-gradient-to-r ${gradient} rounded-full animate-pulse-soft`}></div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;