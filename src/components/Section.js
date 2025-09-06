import React from 'react';

const Section = ({ 
  children, 
  id, 
  className = '', 
  background = 'transparent',
  padding = 'py-24'
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'grey':
        return 'bg-surface-100/50 dark:bg-surface-800/50';
      case 'primary':
        return 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20';
      case 'accent':
        return 'bg-gradient-to-br from-accent-50 to-warning-50 dark:from-accent-900/20 dark:to-warning-900/20';
      default:
        return 'bg-transparent';
    }
  };

  return (
    <section 
      id={id}
      className={`${padding} px-6 relative ${getBackgroundClass()} ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
