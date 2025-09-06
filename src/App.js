import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import { PrimaryButton, SecondaryButton } from './components/Button';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';

// Home page component
const Home = () => {
  const { mode, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900">
      {/* Navbar */}
      <Navbar mode={mode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <HeroSection 
        title={<>
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 bg-clip-text text-transparent animate-pulse">
            Ruben Chevez
          </span>
        </>}
        description={<>
          Director of Machine Learning Operations at{' '}
          <span className="font-semibold text-primary-700 dark:text-primary-400">Nasdaq Verafin</span>{' '}
          • Visionary technology leader specializing in{' '}
          <span className="font-semibold text-primary-700 dark:text-primary-400">MLOps, cloud infrastructure,</span>{' '}
          and scalable ML systems
        </>}
        primaryButton={
          <PrimaryButton href="#projects" icon="→">
            View My Work
          </PrimaryButton>
        }
        secondaryButton={
          <SecondaryButton href="#contact" icon="✉️">
            Get In Touch
          </SecondaryButton>
        }
        className="py-24 lg:py-32"
      />

      {/* About Section */}
      <Section id="about" background="white">
        <SectionHeader 
          title="About Me"
          description={<>
            Visionary and results-driven technology leader with deep expertise in{' '}
            <span className="font-semibold text-primary-700 dark:text-primary-400">Machine Learning Operations (MLOps)</span>,{' '}
            <span className="font-semibold text-primary-700 dark:text-primary-400">cloud infrastructure</span>, and{' '}
            <span className="font-semibold text-primary-700 dark:text-primary-400">scalable ML systems</span>. 
            Proven track record in designing, deploying, and managing ML pipelines from experimentation to production.
            Experienced in regulatory-grade financial technologies, fraud detection, and ML model governance.
          </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">Performance</h3>
            <p className="text-surface-600 dark:text-surface-300">Optimized solutions that scale</p>
          </div>
          <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">Cloud Native</h3>
            <p className="text-surface-600 dark:text-surface-300">AWS serverless architectures</p>
          </div>
          <div className="bg-surface-50 dark:bg-surface-800 p-6 rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-surface-600 dark:text-surface-300">Cutting-edge solutions</p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Projects />
      <ExperienceEducation />

      {/* Contact Section */}
      <Section id="contact" background="gradient">
        <SectionHeader 
          title="Get In Touch"
          description="Connect with me on LinkedIn to discuss Machine Learning Operations, technical leadership opportunities, or collaboration on innovative ML projects."
          descriptionClassName="max-w-2xl mx-auto mb-12"
        />
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <PrimaryButton 
            href="mailto:rubencg195@hotmail.com" 
            icon="📧" 
            iconPosition="left"
          >
            Send Email
          </PrimaryButton>
          <SecondaryButton 
            href="https://linkedin.com/in/rubenchevez" 
            target="_blank"
            rel="noopener noreferrer"
            icon="💼" 
            iconPosition="left"
          >
            Connect on LinkedIn
          </SecondaryButton>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white dark:bg-surface-900 border-t border-surface-200 dark:border-surface-700">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Ruben Chevez
              </span>
            </div>
            <p className="text-surface-600 dark:text-surface-400 mb-6">
              Director, Machine Learning Operations • Nasdaq Verafin • MLOps Expert
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:rubencg195@hotmail.com" className="text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors duration-200">
                <span className="text-2xl">📧</span>
              </a>
              <a href="https://linkedin.com/in/rubenchevez" target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors duration-200">
                <span className="text-2xl">💼</span>
              </a>
              <a href="https://github.com/rubencg195" target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors duration-200">
                <span className="text-2xl">🐙</span>
              </a>
            </div>
            <p className="text-surface-500 dark:text-surface-400 text-sm">
              &copy; 2024 Ruben Chevez. Crafted with ❤️ and ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
