import React from 'react';

// Primary button with gradient background
export const PrimaryButton = ({ 
  children, 
  onClick, 
  href, 
  className = '', 
  icon = '', 
  iconPosition = 'right',
  ...props 
}) => {
  const baseClasses = "group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-material-3 hover:shadow-material-4 transform hover:-translate-y-1 transition-all duration-300";
  const combinedClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-3 group-hover:-translate-x-1 transition-transform duration-200">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

// Secondary button with border and transparent background
export const SecondaryButton = ({ 
  children, 
  onClick, 
  href, 
  className = '', 
  icon = '', 
  iconPosition = 'right',
  ...props 
}) => {
  const baseClasses = "group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-primary-600 text-primary-700 dark:text-primary-400 bg-white dark:bg-surface-800 hover:bg-primary-50 dark:hover:bg-surface-700 shadow-material-2 hover:shadow-material-3 transform hover:-translate-y-1 transition-all duration-300";
  const combinedClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-3 group-hover:-translate-x-1 transition-transform duration-200">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

// Small button for actions
export const ActionButton = ({ 
  children, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = '', 
  iconPosition = 'right',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-material-2 hover:shadow-material-3',
    secondary: 'border-2 border-primary-600 text-primary-700 dark:text-primary-400 bg-white dark:bg-surface-800 hover:bg-primary-50 dark:hover:bg-surface-700 shadow-material-1 hover:shadow-material-2',
    ghost: 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-surface-700'
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]}`;
  const combinedClasses = `${baseClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default { PrimaryButton, SecondaryButton, ActionButton };
