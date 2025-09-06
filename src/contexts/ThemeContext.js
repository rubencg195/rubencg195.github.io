import React, { createContext, useContext, useState } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    mode,
    toggleTheme,
    isDark: mode === 'dark',
    isLight: mode === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={mode === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
