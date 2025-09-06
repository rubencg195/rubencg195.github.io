import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ 
  mode, 
  toggleTheme, 
  showBackButton = false, 
  showGitHubLink = false, 
  gitHubUrl = '', 
  className = '' 
}) => {
  const navigate = useNavigate();

  return (
    <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-material-2 dark:bg-surface-900/95 dark:shadow-material-3 transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="font-bold text-xl flex items-center text-surface-900 dark:text-white">
          <img 
            src="images/profile/profile.jpeg" 
            alt="Ruben Chevez" 
            className="mr-3 w-10 h-10 rounded-full object-cover shadow-material-2"
          />
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Ruben Chevez
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {/* Conditional Back Button */}
          {showBackButton && (
            <button 
              onClick={() => navigate('/')}
              className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-colors duration-200 relative group"
            >
              ← Back to Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </button>
          )}

          {/* Conditional GitHub Link */}
          {showGitHubLink && gitHubUrl && (
            <a 
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-600 hover:text-primary-700 dark:!text-surface-300 dark:hover:!text-primary-400 transition-colors duration-200 relative group"
            >
              🐙 View on GitHub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
            </a>
          )}

          {/* Main Navigation Links (only show on home page) */}
          {!showBackButton && (
            <>
              <a href="#about" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
              </a>
              <a href="#projects" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-colors duration-200 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
              </a>
              <a href="#contact" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
              </a>
            </>
          )}

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 shadow-material-1 hover:shadow-material-2 transition-all duration-200 text-lg"
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
