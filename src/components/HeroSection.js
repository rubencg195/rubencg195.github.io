import React from 'react';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton, 
  technologies = [],
  className = '' 
}) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-surface-900 dark:via-surface-800 dark:to-surface-900 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 dark:from-primary-400/10 dark:to-secondary-400/10"></div>
      <div className="relative max-w-7xl mx-auto py-16 px-6 lg:py-24">
        <div className="text-center animate-fade-in">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-surface-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 bg-clip-text text-transparent animate-pulse">
                {subtitle}
              </span>
            )}
            <div className="mt-2 w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          {description && (
            <p className="mt-8 max-w-4xl mx-auto text-lg text-surface-700 dark:text-surface-300 sm:text-xl lg:text-2xl leading-relaxed font-light">
              {description}
            </p>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8 mt-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 shadow-material-1 hover:shadow-material-2 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton}
              {secondaryButton}
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200/30 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;
