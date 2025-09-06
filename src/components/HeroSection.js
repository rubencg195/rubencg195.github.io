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
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 dark:from-primary-400/10 dark:to-secondary-400/10"></div>
      
      {/* Simple floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary-300/20 rounded-full blur-lg animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-6 lg:py-24">
        <div className="text-center">
          {/* Title */}
          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <h1 className="text-4xl font-bold text-surface-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 bg-clip-text text-transparent">
                {subtitle}
              </span>
            )}
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          {description && (
            <div className="mt-8 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <p className="text-lg text-surface-700 dark:text-surface-300 sm:text-xl lg:text-2xl leading-relaxed font-light">
                {description}
              </p>
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8 mt-8 animate-fade-in" style={{animationDelay: '1.0s', animationFillMode: 'both'}}>
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 shadow-material-1 hover:shadow-material-3 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
              {primaryButton}
              {secondaryButton}
            </div>
          )}

          {/* Scroll Indicator */}
          <div className="mt-16 animate-fade-in" style={{animationDelay: '1.8s', animationFillMode: 'both'}}>
            <div className="mx-auto w-6 h-10 border-2 border-primary-300 dark:border-primary-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-bounce"></div>
            </div>
            <p className="text-xs text-surface-500 dark:text-surface-400 mt-2">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
