import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { PERSONAL_INFO } from '../constants';

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If we're on a project detail page, navigate to home first
      navigate(`/#${sectionId}`);
      return;
    }
    
    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're on a different page (like project detail), navigate to home
      navigate('/');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📬' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-effect shadow-material-3 backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Profile Section */}
          <div 
            className="flex items-center space-x-4 animate-fade-in cursor-pointer"
            onClick={handleHomeClick}
          >
            <div className="relative group">
              <img
                src="/images/profile/profile.jpeg"
                alt={PERSONAL_INFO.name}
                className="w-12 h-12 rounded-full ring-2 ring-primary-500 ring-offset-2 ring-offset-transparent transition-all duration-300 group-hover:ring-4 group-hover:ring-primary-400 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg hidden">
                {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform duration-300">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 animate-fade-in ${
                  activeSection === item.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg group-hover:animate-bounce">{item.icon}</span>
                  {item.label}
                </span>
                
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'w-8' : 'w-0 group-hover:w-6'
                }`}></div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group p-3 rounded-xl glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110 animate-fade-in flex items-center justify-center"
            style={{animationDelay: '0.5s'}}
            aria-label="Toggle theme"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute text-2xl transition-all duration-500 group-hover:animate-spin ${
                mode === 'dark' 
                  ? 'opacity-100 rotate-0' 
                  : 'opacity-0 rotate-180'
              }`}>
                🌙
              </span>
              <span className={`absolute text-2xl transition-all duration-500 group-hover:animate-spin ${
                mode === 'light' 
                  ? 'opacity-100 rotate-0' 
                  : 'opacity-0 -rotate-180'
              }`}>
                ☀️
              </span>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute text-xl transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'opacity-0 rotate-90' 
                  : 'opacity-100 rotate-0'
              }`}>
                ☰
              </span>
              <span className={`absolute text-xl transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'opacity-100 rotate-0' 
                  : 'opacity-0 -rotate-90'
              }`}>
                ✕
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-surface-50/95 dark:bg-surface-900/95 backdrop-blur-xl rounded-2xl p-4 mx-2 shadow-material-3 border border-surface-200/30 dark:border-surface-700/30">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 w-full ${
                    activeSection === item.id
                      ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400 shadow-material-2'
                      : 'bg-white/50 dark:bg-surface-800/50 hover:bg-primary-50 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  style={{
                    animationDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s',
                    animation: mobileMenuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="text-lg xs:text-xl">{item.icon}</span>
                  <span className="text-sm xs:text-base font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;