import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionHeader = ({ 
  title, 
  description, 
  icon = '',
  className = '',
  titleClassName = '',
  descriptionClassName = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.3, '100px', true);

  return (
    <div ref={ref} className={`text-center mb-16 ${className}`}>
      <h2 className={`text-4xl font-bold text-surface-900 dark:text-white mb-4 flex items-center justify-center transition-all duration-700 ease-out ${titleClassName} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{transitionDelay: isVisible ? '0.1s' : '0s'}}>
        {icon && <span className="mr-3 text-3xl">{icon}</span>}
        {title}
      </h2>
      <div className={`w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`} style={{transitionDelay: isVisible ? '0.3s' : '0s'}}></div>
      {description && (
        <p className={`max-w-4xl mx-auto text-xl text-surface-700 dark:text-surface-300 leading-relaxed transition-all duration-700 ease-out ${descriptionClassName} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: isVisible ? '0.5s' : '0s'}}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
