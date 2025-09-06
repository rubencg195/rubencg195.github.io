import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import components
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Timeline from './components/Timeline';

// Import constants
import { EXPERIENCE_FALLBACK, EDUCATION_FALLBACK, PERSONAL_INFO } from './constants';

// Import hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Theme Context
import { ThemeProvider } from './contexts/ThemeContext';

// Scroll-animated About Cards component
const AboutCards = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  const cards = [
    { icon: '🚀', title: 'Performance', description: 'Optimized solutions that scale', delay: '0.1s' },
    { icon: '☁️', title: 'Cloud Native', description: 'AWS serverless architectures', delay: '0.3s' },
    { icon: '💡', title: 'Innovation', description: 'Cutting-edge solutions', delay: '0.5s' }
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-surface-50 dark:bg-surface-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 active:scale-95 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? card.delay : '0s'
          }}
        >
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{card.icon}</div>
          <h3 className="text-base sm:text-lg font-semibold text-surface-900 dark:text-white mb-2 leading-tight">
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

// Scroll-animated Contact Buttons component
const ContactButtons = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  return (
    <div ref={ref} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className={`group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-material-2 hover:shadow-material-4 transition-all duration-700 ease-out hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{transitionDelay: isVisible ? '0.1s' : '0s'}}
      >
        <span className="text-lg sm:text-2xl group-hover:animate-bounce">📧</span>
        <span className="text-sm sm:text-base">Send Email</span>
      </a>
      <a
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 border border-surface-200 dark:border-surface-700 w-full sm:w-auto justify-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{transitionDelay: isVisible ? '0.3s' : '0s'}}
      >
        <span className="text-lg sm:text-2xl group-hover:animate-bounce">💼</span>
        <span className="text-sm sm:text-base">Connect on LinkedIn</span>
      </a>
    </div>
  );
};

// Scroll-animated Section Header component
const SectionHeader = ({ title, icon, description, delay = '0s' }) => {
  const [ref, isVisible] = useScrollAnimation(0.3, '100px', true);

  return (
    <div ref={ref} className="text-center mb-12 sm:mb-16 px-4">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-white mb-3 sm:mb-4 flex items-center justify-center transition-all duration-700 ease-out leading-tight ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{transitionDelay: isVisible ? '0.1s' : '0s'}}>
        {icon && <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">{icon}</span>}
        {title}
      </h2>
      <div className={`w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6 sm:mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`} style={{transitionDelay: isVisible ? '0.3s' : '0s'}}></div>
      {description && (
        <p className={`max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-surface-700 dark:text-surface-300 leading-relaxed transition-all duration-700 ease-out px-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: isVisible ? '0.5s' : '0s'}}>
          {description}
        </p>
      )}
    </div>
  );
};

function App() {
  const [mode, setMode] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
  };

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider value={{ mode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <Router>
          <Routes>
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/" element={
              <>
                {/* Navigation */}
                <Navbar />
                
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
                  <div className="max-w-6xl mx-auto text-center relative z-10">

                    {/* Name */}
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold animate-fade-in mb-4 sm:mb-6 mt-16 leading-tight" style={{animationDelay: '0.3s'}}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform duration-300 inline-block">
                        {PERSONAL_INFO.name}
                      </span>
                    </h1>

                    {/* Title */}
                    <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-surface-700 dark:text-surface-300 mb-6 sm:mb-8 animate-fade-in px-2 leading-tight" style={{animationDelay: '0.6s'}}>
                      {PERSONAL_INFO.title}
                    </h2>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-surface-600 dark:text-surface-400 leading-relaxed mb-8 sm:mb-12 animate-fade-in px-2" style={{animationDelay: '0.9s'}}>
                      {PERSONAL_INFO.bio}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in px-4" style={{animationDelay: '1.2s'}}>
                      {PERSONAL_INFO.skills.slice(0, 6).map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-surface-100/80 dark:bg-surface-800/80 rounded-full text-xs sm:text-sm font-medium text-surface-700 dark:text-surface-300 hover:scale-110 transition-transform duration-300 cursor-default backdrop-blur-sm border border-surface-200/50 dark:border-surface-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4" style={{animationDelay: '1.5s'}}>
                      <a
                        href="#projects"
                        className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                      >
                        <span className="text-lg sm:text-xl group-hover:animate-bounce">🚀</span>
                        <span className="text-sm sm:text-base">View My Work</span>
                      </a>
                      
                      <a
                        href="#contact"
                        className="group bg-surface-100/80 dark:bg-surface-800/80 text-surface-900 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 backdrop-blur-sm border border-surface-200/50 dark:border-surface-700/50 w-full sm:w-auto justify-center"
                      >
                        <span className="text-lg sm:text-xl group-hover:animate-bounce">💬</span>
                        <span className="text-sm sm:text-base">Let's Talk</span>
                      </a>
                    </div>


                    {/* Scroll Indicator */}
                    <div className="animate-fade-in mt-12 sm:mt-16" style={{animationDelay: '2s'}}>
                      <a
                        href="#about"
                        className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                      >
                        <span className="text-xs sm:text-sm text-surface-500 dark:text-surface-400 font-medium">
                          Scroll to explore
                        </span>
                        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-surface-400 dark:border-surface-500 rounded-full flex justify-center">
                          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
                
                {/* About Section */}
                <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-surface-100/50 dark:bg-surface-800/50">
                  <div className="max-w-6xl mx-auto">
                    <SectionHeader 
                      title="About Me"
                      icon="👨‍💻"
                      description="Passionate about creating scalable, high-performance applications that solve real-world problems."
                    />
                    <AboutCards />
                  </div>
                </section>

                {/* Projects Section */}
                <Projects />
                
                {/* Experience Timeline */}
                <section id="experience">
                  <Timeline 
                    title="Professional Experience" 
                    data={EXPERIENCE_FALLBACK}
                    icon="💼"
                  />
                </section>
                
                {/* Education Timeline */}
                <section id="education">
                  <Timeline 
                    title="Education & Certifications" 
                    data={EDUCATION_FALLBACK}
                    icon="🎓"
                  />
                </section>
                
                {/* Contact Section */}
                <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-surface-100/50 dark:bg-surface-800/50">
                  <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader 
                      title="Let's Connect"
                      icon="📬"
                      description="Always open to connecting with fellow technologists and exploring innovative opportunities in machine learning and cloud architecture."
                    />
                    <ContactButtons />
                  </div>
                </section>
                
                {/* Footer */}
                <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-surface-200 dark:border-surface-700">
                  <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm sm:text-base text-surface-600 dark:text-surface-400">
                      © 2024 {PERSONAL_INFO.name}
                    </p>
                  </div>
                </footer>
              </>
            } />
          </Routes>
        </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;