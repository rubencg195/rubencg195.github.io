import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-surface-200/20 dark:bg-surface-700/20">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-150 ease-out shadow-lg"
        style={{
          width: `${scrollProgress * 100}%`,
          boxShadow: '0 0 10px rgba(66, 133, 244, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
