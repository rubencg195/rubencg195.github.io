import React from 'react';

const Section = ({ 
  id, 
  children, 
  className = '', 
  background = 'default', // 'default' | 'gradient' | 'white' | 'grey'
  padding = 'default' // 'default' | 'large' | 'small' | 'none'
}) => {
  const backgroundClasses = {
    default: 'bg-surface-50 dark:bg-surface-800',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-surface-800 dark:to-surface-900',
    white: 'bg-white dark:bg-surface-900',
    grey: 'bg-surface-50 dark:bg-surface-800'
  };

  const paddingClasses = {
    none: '',
    small: 'py-12',
    default: 'py-20',
    large: 'py-32'
  };

  const combinedClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section id={id} className={combinedClasses}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
