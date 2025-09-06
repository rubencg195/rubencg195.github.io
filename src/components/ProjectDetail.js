import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchReadmeWithImages } from '../utils/githubUtils';
import { useTheme } from '../contexts/ThemeContext';
import { PERSONAL_INFO, PROJECTS_FALLBACK } from '../constants';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mode, toggleTheme } = useTheme();
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [readmeLoading, setReadmeLoading] = useState(true);

  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const loadProject = async () => {
      try {
        // First try to find project in fallback data (for when GitHub API is unavailable)
        const fallbackProject = PROJECTS_FALLBACK.find(p => p.id === id);
        
        if (fallbackProject) {
          console.log('Using fallback project data for:', id);
          setProject(fallbackProject);
          
          // Try to load README from GitHub
          try {
            const readmeContent = await fetchReadmeWithImages(fallbackProject.html_url);
            setReadme(readmeContent);
          } catch (readmeError) {
            console.log('README not available for fallback project');
            setReadme('# ' + fallbackProject.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + '\n\n' + fallbackProject.description + '\n\nVisit the [GitHub repository](' + fallbackProject.html_url + ') for more details.');
          }
        } else {
          // Try GitHub API for numeric IDs
          const response = await fetch(`https://api.github.com/repositories/${id}`);
          if (response.ok) {
            const projectData = await response.json();
            setProject(projectData);
            
            // Load README
            const readmeContent = await fetchReadmeWithImages(projectData.html_url);
            setReadme(readmeContent);
          }
        }
      } catch (error) {
        console.error('Error loading project:', error);
        
        // Try fallback data as last resort
        const fallbackProject = PROJECTS_FALLBACK.find(p => p.id === id);
        if (fallbackProject) {
          setProject(fallbackProject);
          setReadme('# ' + fallbackProject.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + '\n\n' + fallbackProject.description + '\n\nVisit the [GitHub repository](' + fallbackProject.html_url + ') for more details.');
        }
      } finally {
        setLoading(false);
        setReadmeLoading(false);
      }
    };

    if (id) {
      loadProject();
    }
  }, [id]);

  useEffect(() => {
    // Scroll to top and apply theme
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const getProjectGradient = () => {
    const gradients = [
      'from-primary-500 to-secondary-500',
      'from-secondary-500 to-accent-500',
      'from-accent-500 to-warning-500',
      'from-warning-500 to-primary-500'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
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
    
    const lowerName = name?.toLowerCase() || '';
    for (const [key, icon] of Object.entries(icons)) {
      if (lowerName.includes(key)) {
        return icon;
      }
    }
    return '🚀';
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-surface-200 dark:border-surface-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-secondary-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          
          {/* Loading Text */}
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-4">
            {PERSONAL_INFO.name}
          </h1>
          
          {/* Loading Dots */}
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <p className="text-surface-600 dark:text-surface-400 mt-4">
            Loading project details...
          </p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <div className="glass-effect rounded-3xl p-12 text-center shadow-material-4 max-w-md">
          <div className="text-8xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500 mb-4">
            Project Not Found
          </h2>
          <p className="text-surface-600 dark:text-surface-300 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-material-2 hover:shadow-material-3 transition-all duration-300 hover:scale-105 group"
          >
            <span className="text-xl group-hover:animate-bounce">🏠</span>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      mode === 'dark' 
        ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
        : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
    }`}>
      {/* Navbar - Matching Home Page Style */}
      <nav className="glass-effect shadow-material-3 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 py-3 xs:py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Profile Section */}
            <div 
              className="flex items-center space-x-4 animate-fade-in cursor-pointer"
              onClick={handleHomeClick}
            >
              <div className="relative group">
                <img
                  src="/images/profile/profile.jpeg"
                  alt={PERSONAL_INFO.name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary-500 ring-offset-2 ring-offset-transparent transition-all duration-300 group-hover:ring-4 group-hover:ring-primary-400 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg hidden">
                  {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform duration-300">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm text-surface-600 dark:text-surface-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-2 xs:space-x-4">
              <Link
                to="/"
                className="group relative px-2 xs:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span className="flex items-center gap-1 xs:gap-2">
                  <span className="text-lg group-hover:animate-bounce">←</span>
                  <span className="hidden xs:inline">Back to Portfolio</span>
                  <span className="xs:hidden">Back</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-2 xs:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span className="flex items-center gap-1 xs:gap-2">
                  <span className="text-lg group-hover:animate-bounce">🐙</span>
                  <span className="hidden xs:inline">View on GitHub</span>
                  <span className="xs:hidden">GitHub</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Theme Toggle - Matching Home Page */}
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-xl glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110 animate-fade-in flex items-center justify-center"
                aria-label="Toggle theme"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute text-2xl transition-all duration-500 group-hover:animate-spin ${
                    mode === 'dark' 
                      ? 'opacity-100 rotate-0' 
                      : 'opacity-0 rotate-180'
                  }`}>
                    🌙
                  </span>
                  <span className={`absolute text-2xl transition-all duration-500 group-hover:animate-spin ${
                    mode === 'light' 
                      ? 'opacity-100 rotate-0' 
                      : 'opacity-0 -rotate-180'
                  }`}>
                    ☀️
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 xs:px-6 py-8 xs:py-12">
        {/* Project Header */}
        <div className="glass-effect rounded-2xl xs:rounded-3xl p-4 xs:p-8 sm:p-12 shadow-material-3 mb-6 xs:mb-8 animate-fade-in">
          <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 xs:gap-6">
            <div className={`w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-r ${getProjectGradient()} rounded-2xl xs:rounded-3xl flex items-center justify-center text-3xl xs:text-4xl shadow-material-2 animate-bounce-in flex-shrink-0`}>
              {getProjectIcon(project.name)}
            </div>
            
            <div className="flex-1 text-center xs:text-left">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-3 xs:mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h1>
              
              {project.description && (
                <p className="text-lg xs:text-xl text-surface-600 dark:text-surface-300 leading-relaxed mb-4 xs:mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  {project.description}
                </p>
              )}

              {/* Project Stats */}
              <div className="flex flex-wrap justify-center xs:justify-start gap-3 xs:gap-6 mb-4 xs:mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-1 xs:gap-2">
                  <span className="text-xl xs:text-2xl">⭐</span>
                  <span className="font-semibold text-sm xs:text-base">{project.stargazers_count}</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">stars</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <span className="text-xl xs:text-2xl">🍴</span>
                  <span className="font-semibold text-sm xs:text-base">{project.forks_count}</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">forks</span>
                </div>
                {project.language && (
                  <div className="flex items-center gap-1 xs:gap-2">
                    <span className="text-xl xs:text-2xl">💻</span>
                    <span className="font-semibold text-sm xs:text-base">{project.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 xs:gap-2 w-full xs:w-auto justify-center xs:justify-start">
                  <span className="text-xl xs:text-2xl">📅</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">
                    Updated {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Technology Tags */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap justify-center xs:justify-start gap-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  {project.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 xs:px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-xs xs:text-sm font-medium text-primary-600 dark:text-primary-400 border border-primary-500/30 hover:scale-110 transition-transform duration-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* README Content */}
        <div className="glass-effect rounded-2xl xs:rounded-3xl shadow-material-3 overflow-hidden animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="p-4 xs:p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-accent-500 mb-6 flex items-center gap-3">
              <span className="text-3xl">📖</span>
              Project Documentation
            </h2>
            
            {readmeLoading ? (
              <div className="space-y-4 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-full"></div>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-surface-900 dark:text-surface-100 dark:prose-invert">
                <ReactMarkdown
                  className="prose-headings:text-surface-900 dark:prose-headings:text-white prose-p:text-surface-700 dark:prose-p:text-surface-300 prose-strong:text-surface-900 dark:prose-strong:text-white prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-pre:bg-surface-100 dark:prose-pre:bg-surface-800"
                >
                  {readme}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* Related Actions */}
        <div className="mt-6 xs:mt-8 text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="glass-effect rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500 mb-4">
              Interested in this project?
            </h3>
            <p className="text-surface-600 dark:text-surface-300 mb-6">
              Check out the live demo, explore the code, or get in touch to discuss similar projects.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-surface-900 to-surface-800 dark:from-white dark:to-surface-100 text-white dark:text-surface-900 px-6 py-3 rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl group-hover:animate-bounce">🐙</span>
                View Source Code
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 glass-effect text-surface-900 dark:text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl group-hover:animate-bounce">💬</span>
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
