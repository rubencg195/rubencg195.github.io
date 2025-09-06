import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRepoInfo } from '../utils/githubUtils';
import { GITHUB_REPOS, PROJECTS_FALLBACK, ENABLE_GITHUB_API } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Scroll animation for the CTA card - simplified
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1, '100px', false);
  const [fallbackVisible, setFallbackVisible] = useState(false);

  // Fallback to show CTA after 3 seconds if scroll animation doesn't work
  useEffect(() => {
    const timer = setTimeout(() => {
      setFallbackVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadProjects = async () => {
      if (!ENABLE_GITHUB_API) {
        // Use fallback data immediately when GitHub API is disabled
        setProjects(PROJECTS_FALLBACK);
        setLoading(false);
        return;
      }

      // Try GitHub API when enabled
      try {
        const projectPromises = GITHUB_REPOS.map(async (repoUrl) => {
          const repoInfo = await fetchRepoInfo(repoUrl);
          return repoInfo ? {
            ...repoInfo,
            repoUrl,
            id: repoInfo.id || repoInfo.name
          } : null;
        });

        const projectResults = await Promise.all(projectPromises);
        const validProjects = projectResults.filter(project => project !== null);
        
        // If GitHub API failed for all repos, use fallback data
        if (validProjects.length === 0) {
          console.log('GitHub API unavailable, using fallback project data');
          setProjects(PROJECTS_FALLBACK);
        } else {
          setProjects(validProjects);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        // Use fallback data on error
        console.log('Using fallback project data due to error');
        setProjects(PROJECTS_FALLBACK);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const getProjectGradient = (index) => {
    const gradients = [
      'from-primary-500 to-secondary-500',
      'from-secondary-500 to-accent-500',
      'from-accent-500 to-warning-500',
      'from-warning-500 to-primary-500'
    ];
    return gradients[index % gradients.length];
  };

  const getProjectIcon = (name) => {
    const icons = {
      'aws': '☁️',
      'backend': '⚙️',
      'frontend': '🎨',
      'cognito': '🔐',
      'auth': '🔑',
      'website': '🌐',
      'hosting': '🏠',
      'bedrock': '🤖',
      'database': '🗄️',
      'vector': '🔢',
      'agent': '🤖',
      'structured': '📊',
      'unstructured': '📄'
    };
    
    const lowerName = name.toLowerCase();
    for (const [key, icon] of Object.entries(icons)) {
      if (lowerName.includes(key)) {
        return icon;
      }
    }
    return '🚀';
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 animate-pulse">
                <div className="w-12 h-12 bg-surface-300 dark:bg-surface-600 rounded-full mb-4"></div>
                <div className="h-6 bg-surface-300 dark:bg-surface-600 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded"></div>
                  <div className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-3/4"></div>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-6 w-16 bg-surface-200 dark:bg-surface-700 rounded-full"></div>
                  <div className="h-6 w-20 bg-surface-200 dark:bg-surface-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8 animate-scale-in" 
               style={{animationDelay: '0.3s'}}></div>
          <p className="max-w-4xl mx-auto text-xl text-surface-600 dark:text-surface-300 leading-relaxed animate-fade-in"
             style={{animationDelay: '0.5s'}}>
            A showcase of my recent work featuring modern web applications, cloud solutions, and AI-powered systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block animate-fade-in"
              style={{animationDelay: `${0.7 + index * 0.2}s`}}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`glass-effect rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-material-4 hover:scale-105 relative overflow-hidden ${
                hoveredProject === project.id ? 'shadow-material-4' : 'shadow-material-2'
              }`}>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getProjectGradient(index)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Project Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getProjectGradient(index)} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:animate-bounce shadow-material-2`}>
                    {getProjectIcon(project.name)}
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
                  <div className={`w-full h-1 bg-gradient-to-r ${getProjectGradient(index)} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-r ${getProjectGradient(index)} rounded-full animate-pulse-soft`}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            (ctaVisible || fallbackVisible) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-4">
              Want to see more?
            </h3>
            <p className="text-surface-600 dark:text-surface-300 mb-6">
              Check out my GitHub profile for additional projects and open-source contributions.
            </p>
            <a
              href="https://github.com/rubencg195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-surface-900 to-surface-800 dark:from-white dark:to-surface-100 text-white dark:text-surface-900 px-8 py-4 rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-2xl group-hover:animate-bounce">🐙</span>
              Visit GitHub Profile
              <div className="w-0 group-hover:w-4 h-0.5 bg-white dark:bg-surface-900 rounded-full transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;