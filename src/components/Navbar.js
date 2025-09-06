import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced scroll detection for dynamic navbar effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-material-4 dark:bg-surface-900/90 dark:shadow-material-5' 
          : 'bg-white/95 backdrop-blur-sm shadow-material-2 dark:bg-surface-900/95 dark:shadow-material-3'
      } ${
        isHovered 
          ? 'shadow-material-5 dark:shadow-material-5 transform scale-[1.02]' 
          : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
        isScrolled ? 'h-14' : 'h-16'
      }`}>
        {/* Logo/Brand */}
        <div className="font-bold text-xl flex items-center text-surface-900 dark:text-white group cursor-pointer" onClick={() => navigate('/')}>
          <div className="relative mr-3 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <img 
              src="/images/profile/profile.jpeg" 
              alt="Ruben Chevez" 
              className={`rounded-full object-cover shadow-material-2 group-hover:shadow-material-3 transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
            />
          </div>
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Ruben Chevez
          </span>
        </div>

        {/* Navigation Links with enhanced animations */}
        <div className="flex items-center gap-8 text-sm font-medium">
          {/* Conditional Back Button */}
          {showBackButton && (
            <button 
              onClick={() => navigate('/')}
              className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-all duration-300 relative group animate-fade-in"
              style={{animationDelay: '0.3s', animationFillMode: 'both'}}
            >
              ← Back to Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          )}

          {/* Conditional GitHub Link */}
          {showGitHubLink && gitHubUrl && (
            <a 
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-600 hover:text-primary-700 dark:!text-surface-300 dark:hover:!text-primary-400 transition-all duration-300 relative group animate-fade-in"
              style={{animationDelay: '0.4s', animationFillMode: 'both'}}
            >
              🐙 View on GitHub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          )}

          {/* Main Navigation Links */}
          {!showBackButton && (
            <>
              <a href="#about" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-all duration-300 relative group px-3 py-2 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-all duration-300 relative group px-3 py-2 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-surface-600 hover:text-primary-700 dark:text-surface-300 dark:hover:text-primary-400 transition-all duration-300 relative group px-3 py-2 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </>
          )}

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className={`inline-flex items-center justify-center rounded-full bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 shadow-material-1 hover:shadow-material-2 transition-all duration-300 text-lg hover:scale-110 animate-fade-in ${
              isScrolled ? 'w-8 h-8 text-base' : 'w-10 h-10'
            }`}
            style={{animationDelay: '0.6s', animationFillMode: 'both'}}
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
