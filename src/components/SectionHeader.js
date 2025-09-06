import React from 'react';

const SectionHeader = ({ 
  title, 
  description, 
  icon = '',
  className = '',
  titleClassName = '',
  descriptionClassName = '' 
}) => {
  return (
    <div className={`text-center animate-slide-up mb-16 ${className}`}>
      <h2 className={`text-4xl font-bold text-surface-900 dark:text-white mb-4 flex items-center justify-center ${titleClassName}`}>
        {icon && <span className="mr-3 text-3xl">{icon}</span>}
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-8"></div>
      {description && (
        <p className={`max-w-4xl mx-auto text-xl text-surface-700 dark:text-surface-300 leading-relaxed ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
