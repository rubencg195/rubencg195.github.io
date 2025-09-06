import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = PERSONAL_INFO.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes - Reduced for mobile performance */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-5 sm:opacity-10 animate-float hidden sm:block`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          >
            <div className={`w-${16 + i * 8} h-${16 + i * 8} bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-sm`}></div>
          </div>
        ))}
        
        {/* Grid Pattern - Hidden on mobile for cleaner look */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-primary-500/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-primary-600 dark:text-primary-400 font-semibold backdrop-blur-sm border border-primary-500/30 text-sm sm:text-base">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold animate-fade-in leading-tight" style={{animationDelay: '0.3s'}}>
            <span className="text-transparent bg-clip-text bg-gradient-google hover:scale-105 transition-transform duration-300 inline-block">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Animated Title */}
          <div className="h-16 sm:h-20 flex items-center justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-surface-700 dark:text-surface-300 px-2">
              <span className="border-r-2 border-primary-500 pr-2 animate-pulse">
                {displayedText}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-surface-600 dark:text-surface-400 leading-relaxed animate-fade-in px-2" style={{animationDelay: '0.9s'}}>
            Passionate about creating scalable, high-performance applications that solve real-world problems. 
            Specialized in modern web technologies and cloud architecture.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 animate-fade-in px-2" style={{animationDelay: '1.2s'}}>
            {PERSONAL_INFO.skills.slice(0, 6).map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-1.5 sm:px-4 sm:py-2 glass-effect rounded-full text-xs sm:text-sm font-medium text-surface-700 dark:text-surface-300 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4" style={{animationDelay: '1.5s'}}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <span className="text-lg sm:text-xl group-hover:animate-bounce">🚀</span>
              <span className="text-sm sm:text-base">View My Work</span>
              <div className="w-0 group-hover:w-4 h-0.5 bg-white rounded-full transition-all duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group glass-effect text-surface-900 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <span className="text-lg sm:text-xl group-hover:animate-bounce">💬</span>
              <span className="text-sm sm:text-base">Let's Talk</span>
              <div className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{animationDelay: '1.8s'}}>
            <button
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center gap-2 mt-16 hover:scale-110 transition-transform duration-300"
            >
              <span className="text-sm text-surface-500 dark:text-surface-400 font-medium">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-surface-400 dark:border-surface-500 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20 animate-fade-in px-4" style={{animationDelay: '2s'}}>
          {[
            { number: '8+', label: 'Years Experience', icon: '⏱️' },
            { number: '50+', label: 'Projects Completed', icon: '🎯' },
            { number: '99.9%', label: 'Uptime Achieved', icon: '📊' }
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-4 sm:p-6 hover:shadow-material-3 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-surface-600 dark:text-surface-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;