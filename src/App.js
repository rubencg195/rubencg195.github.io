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
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? card.delay : '0s'
          }}
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
            {card.title}
          </h3>
          <p className="text-surface-600 dark:text-surface-300">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

// Scroll-animated Contact Buttons component
const ContactButtons = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  return (
    <div ref={ref} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className={`group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-material-2 hover:shadow-material-4 transition-all duration-700 ease-out hover:scale-105 flex items-center gap-3 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{transitionDelay: isVisible ? '0.1s' : '0s'}}
      >
        <span className="text-2xl group-hover:animate-bounce">📧</span>
        Send Email
      </a>
      <a
        href={PERSONAL_INFO.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`group bg-surface-50 dark:bg-surface-800 text-surface-900 dark:text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 flex items-center gap-3 border border-surface-200 dark:border-surface-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{transitionDelay: isVisible ? '0.3s' : '0s'}}
      >
        <span className="text-2xl group-hover:animate-bounce">💼</span>
        Connect on LinkedIn
      </a>
    </div>
  );
};

// Scroll-animated Section Header component
const SectionHeader = ({ title, icon, description, delay = '0s' }) => {
  const [ref, isVisible] = useScrollAnimation(0.3, '100px', true);

  return (
    <div ref={ref} className="text-center mb-16">
      <h2 className={`text-4xl font-bold text-surface-900 dark:text-white mb-4 flex items-center justify-center transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{transitionDelay: isVisible ? '0.1s' : '0s'}}>
        {icon && <span className="mr-3 text-3xl">{icon}</span>}
        {title}
      </h2>
      <div className={`w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`} style={{transitionDelay: isVisible ? '0.3s' : '0s'}}></div>
      {description && (
        <p className={`max-w-4xl mx-auto text-xl text-surface-700 dark:text-surface-300 leading-relaxed transition-all duration-700 ease-out ${
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
                <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
                  <div className="max-w-6xl mx-auto text-center relative z-10">

                    {/* Name */}
                    <h1 className="text-6xl md:text-8xl font-bold animate-fade-in mb-6 mt-16" style={{animationDelay: '0.3s'}}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform duration-300 inline-block">
                        {PERSONAL_INFO.name}
                      </span>
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl md:text-4xl font-semibold text-surface-700 dark:text-surface-300 mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
                      {PERSONAL_INFO.title}
                    </h2>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-xl text-surface-600 dark:text-surface-400 leading-relaxed mb-12 animate-fade-in" style={{animationDelay: '0.9s'}}>
                      {PERSONAL_INFO.bio}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{animationDelay: '1.2s'}}>
                      {PERSONAL_INFO.skills.slice(0, 6).map((skill, index) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-surface-100/80 dark:bg-surface-800/80 rounded-full text-sm font-medium text-surface-700 dark:text-surface-300 hover:scale-110 transition-transform duration-300 cursor-default backdrop-blur-sm border border-surface-200/50 dark:border-surface-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '1.5s'}}>
                      <a
                        href="#projects"
                        className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                      >
                        <span className="text-xl group-hover:animate-bounce">🚀</span>
                        View My Work
                      </a>
                      
                      <a
                        href="#contact"
                        className="group bg-surface-100/80 dark:bg-surface-800/80 text-surface-900 dark:text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 flex items-center gap-3 backdrop-blur-sm border border-surface-200/50 dark:border-surface-700/50"
                      >
                        <span className="text-xl group-hover:animate-bounce">💬</span>
                        Let's Talk
                      </a>
                    </div>


                    {/* Scroll Indicator */}
                    <div className="animate-fade-in mt-16" style={{animationDelay: '2s'}}>
                      <a
                        href="#about"
                        className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                      >
                        <span className="text-sm text-surface-500 dark:text-surface-400 font-medium">
                          Scroll to explore
                        </span>
                        <div className="w-6 h-10 border-2 border-surface-400 dark:border-surface-500 rounded-full flex justify-center">
                          <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-bounce"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
                
                {/* About Section */}
                <section id="about" className="py-24 px-6 bg-surface-100/50 dark:bg-surface-800/50">
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
                <section id="contact" className="py-24 px-6 bg-surface-100/50 dark:bg-surface-800/50">
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
                <footer className="py-12 px-6 border-t border-surface-200 dark:border-surface-700">
                  <div className="max-w-6xl mx-auto text-center">
                    <p className="text-surface-600 dark:text-surface-400">
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