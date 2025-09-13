import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useTheme();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Adjust scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-material-3 transition-all duration-300 transform
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        ${mode === 'dark' ? 'bg-surface-700 hover:bg-surface-600 text-white' : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'}
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${mode === 'dark' ? 'focus:ring-surface-500' : 'focus:ring-primary-400'}
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
