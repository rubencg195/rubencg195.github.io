import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './index.css';

// Import components
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Timeline from './components/Timeline';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollProgress from './components/ScrollProgress';

// Import constants
import { EXPERIENCE_FALLBACK, EDUCATION_FALLBACK, PERSONAL_INFO, HERO_SKILL_HIGHLIGHTS, SKILLS_SUB_MATRICES } from './constants';

// Import hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Import Firebase Analytics
import { logPageView, logCtaClick, logNavigationClick, logExternalLink, logPageNotFound, logThemeChange } from './utils/firebaseConfig';
import { usePortfolioAnalytics } from './hooks/usePortfolioAnalytics';
import { createCardHoverHandler } from './hooks/useCardHoverTracking';

// Import Firebase Debug Tools
// Note: Debug tools are DISABLED by default. To enable them:
// 1. Open src/constants.js
// 2. Set ENABLE_FIREBASE_DEBUG = true
// 3. Restart dev server
// 4. Debug tools will appear in browser console as window.firebaseDebug
import { enableEventMonitoring } from './utils/firebaseDebug';

// Theme Context
import { ThemeProvider } from './contexts/ThemeContext';

// Scroll-animated About Cards component
const AboutCards = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  const cards = [
    { icon: '🎯', title: 'Product Strategy', description: 'Enterprise roadmaps, stakeholder alignment, and go-to-market execution', delay: '0.1s' },
    { icon: '🏗️', title: 'Product Development', description: 'End-to-end delivery of scalable platforms and customer-facing products', delay: '0.3s' },
    { icon: '🏦', title: 'Enterprise FinTech', description: 'KYC fraud detection and financial threat intelligence', delay: '0.5s' },
    { icon: '☁️', title: 'Technical Architecture', description: 'Cloud infrastructure, MLOps, and production-grade systems', delay: '0.7s' }
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={createCardHoverHandler('about', card.title)}
          className={`bg-slate-50 dark:bg-surface-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-material-2 hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 active:scale-95 border border-slate-100 dark:border-surface-700 ${
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
          <p className="text-sm sm:text-base text-slate-900 dark:text-surface-300 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

// Scroll-animated About narrative paragraphs
const AboutNarrative = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  const paragraphs = [
    {
      delay: '0.1s',
      content: (
        <>
          Product-minded engineering leader with formal training in mechatronics engineering and computer science. Eight years of experience delivering enterprise products and scalable platforms for financial services, with a consistent record of building capabilities from the ground up.
        </>
      )
    },
    {
      delay: '0.25s',
      content: (
        <>
          At <strong>Nasdaq Verafin</strong>, I established the company&apos;s first MLOps platform and currently lead engineering for Onboarding Threat Intelligence—delivering KYC fraud detection to regulated financial institutions.
        </>
      )
    },
    {
      delay: '0.4s',
      content: (
        <>
          Scope of work includes stakeholder roadmaps, MVP definition, and platform engineering at enterprise scale. Expertise in cloud architecture and fraud detection supports aligned product strategy and technical execution.
        </>
      )
    }
  ];

  return (
    <div ref={ref} className="max-w-4xl mx-auto text-left mb-12 sm:mb-16 px-4 space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-base sm:text-lg lg:text-xl text-slate-900 dark:text-surface-300 leading-relaxed transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? paragraph.delay : '0s' }}
        >
          {paragraph.content}
        </p>
      ))}
    </div>
  );
};

// Technical Skills — categorized sub-matrices
const SkillsSubMatrices = () => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  const colorPalette = [
    'from-orange-500/20 to-orange-600/20 dark:from-orange-400/20 dark:to-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-200/50 dark:border-orange-700/50',
    'from-blue-500/20 to-blue-600/20 dark:from-blue-400/20 dark:to-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50',
    'from-red-500/20 to-red-600/20 dark:from-red-400/20 dark:to-red-500/20 text-red-700 dark:text-red-300 border-red-200/50 dark:border-red-700/50',
    'from-violet-500/20 to-violet-600/20 dark:from-violet-400/20 dark:to-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-200/50 dark:border-violet-700/50'
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
    >
      {SKILLS_SUB_MATRICES.map((matrix, matrixIdx) => {
        const colorClass = colorPalette[matrixIdx % colorPalette.length];
        const cardDelay = `${0.1 + matrixIdx * 0.15}s`;

        return (
          <div
            key={matrix.title}
            className={`min-w-0 bg-slate-50 dark:bg-surface-800 p-6 sm:p-8 rounded-2xl shadow-material-2 border border-slate-100 dark:border-surface-700/50 hover:shadow-material-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isVisible ? cardDelay : '0s' }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-5 flex items-center gap-2">
              <span>{matrix.icon}</span>
              {matrix.title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {matrix.subgroups.map((subgroup, subgroupIdx) => (
                <React.Fragment key={subgroup.title || `subgroup-${subgroupIdx}`}>
                  {subgroup.title && (
                    <h4 className="w-full basis-full text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-surface-400 pt-1 first:pt-0">
                      {subgroup.title}
                    </h4>
                  )}
                  {subgroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex shrink-0 items-center justify-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-gradient-to-r rounded-lg text-xs sm:text-sm font-medium leading-snug text-center transition-colors duration-300 cursor-default backdrop-blur-sm border ${colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
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
        onClick={() => logExternalLink(`mailto:${PERSONAL_INFO.email}`, 'email')}
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
        onClick={() => logExternalLink(PERSONAL_INFO.linkedin, 'linkedin')}
        className={`group bg-slate-100 dark:bg-surface-800 text-slate-700 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-700 ease-out hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 border border-slate-200 dark:border-surface-700 w-full sm:w-auto justify-center hover:bg-slate-200 dark:hover:bg-surface-700 ${
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

// Component to handle redirects from 404 page
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a stored redirect path from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      // Clear the stored path and navigate to it
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath);
    }
  }, [navigate]);

  return null;
};

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    logPageNotFound(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-surface-900 dark:text-white mb-4">404</h1>
        <p className="text-surface-600 dark:text-surface-400 mb-8">Page not found</p>
        <a href="/" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
};

// Component to handle analytics and routing (inside Router context)
const AppContent = ({ mode, toggleTheme }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  usePortfolioAnalytics(isHomePage);

  useEffect(() => {
    const pageTitle = location.pathname.startsWith('/project/')
      ? `project:${location.pathname.split('/').pop()}`
      : location.pathname || 'home';
    logPageView(pageTitle, location.pathname);
  }, [location]);

  return (
    <>
      {isHomePage && <ScrollProgress />}
      {/* Redirect Handler */}
      <RedirectHandler />
      
      {/* Navigation - Only show on non-project pages */}
      {!location.pathname.startsWith('/project/') && <Navbar />}
      
      {/* Routes */}
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
              <div className="max-w-6xl mx-auto text-center relative z-10">

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-fade-in mb-4 sm:mb-6 mt-16 leading-tight" style={{animationDelay: '0.3s'}}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-105 transition-transform duration-300 inline-block">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>

                {/* Title */}
                <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-surface-700 dark:text-surface-300 mb-6 sm:mb-8 animate-fade-in px-2 leading-tight" style={{animationDelay: '0.6s'}}>
                  {PERSONAL_INFO.title}
                </h2>

                {/* Description */}
                <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-slate-900 dark:text-surface-400 leading-relaxed mb-8 sm:mb-12 animate-fade-in px-2 text-center" style={{animationDelay: '0.9s'}}>
                  {PERSONAL_INFO.bio}
                </p>

                {/* Hero skill highlights */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fade-in px-4" style={{animationDelay: '1.2s'}}>
                  {HERO_SKILL_HIGHLIGHTS.flatMap(({ skills, color }) => {
                    const colorClasses = {
                      red: 'from-red-500/20 to-red-600/20 dark:from-red-400/20 dark:to-red-500/20 text-red-700 dark:text-red-300 border-red-200/50 dark:border-red-700/50',
                      orange: 'from-orange-500/20 to-orange-600/20 dark:from-orange-400/20 dark:to-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-200/50 dark:border-orange-700/50',
                      blue: 'from-blue-500/20 to-blue-600/20 dark:from-blue-400/20 dark:to-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50',
                      green: 'from-green-500/20 to-green-600/20 dark:from-green-400/20 dark:to-green-500/20 text-green-700 dark:text-green-300 border-green-200/50 dark:border-green-700/50',
                      purple: 'from-purple-500/20 to-purple-600/20 dark:from-purple-400/20 dark:to-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-700/50'
                    };
                    const colorClass = colorClasses[color] || colorClasses.blue;

                    return skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r rounded-full text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-300 cursor-default backdrop-blur-sm border ${colorClass}`}
                      >
                        {skill}
                      </span>
                    ));
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in px-4" style={{animationDelay: '1.5s'}}>
                  <a
                    href="#projects"
                    onClick={() => logCtaClick('view_work', 'projects')}
                    className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                  >
                    <span className="text-lg sm:text-xl group-hover:animate-bounce">🚀</span>
                    <span className="text-sm sm:text-base">View My Work</span>
                  </a>
                  
                  <a
                    href="#contact"
                    onClick={() => logCtaClick('lets_talk', 'contact')}
                    className="group bg-slate-100 dark:bg-surface-800/80 text-slate-700 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 sm:gap-3 backdrop-blur-sm border border-slate-200 dark:border-surface-700/50 w-full sm:w-auto justify-center hover:bg-slate-200 dark:hover:bg-surface-700"
                  >
                    <span className="text-lg sm:text-xl group-hover:animate-bounce">💬</span>
                    <span className="text-sm sm:text-base">Let's Talk</span>
                  </a>
                </div>


                {/* Scroll Indicator */}
                <div className="animate-fade-in mt-12 sm:mt-16 pb-16 sm:pb-20 lg:pb-24" style={{animationDelay: '2s'}}>
                  <a
                    href="#about"
                    onClick={() => logNavigationClick('about', 'hero_scroll')}
                    className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-surface-400 font-medium">
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
                  description="Product strategy, enterprise fintech, and technical leadership at scale."
                />
                
                <AboutNarrative />

                <AboutCards />
              </div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <SectionHeader 
                  title="Technical Skills"
                  icon="🛠️"
                  description="Cloud platforms, core engineering, executive leadership, and data/ML—organized in a four-domain grid."
                />

                <SkillsSubMatrices />
              </div>
            </section>

            {/* Projects Section */}
            <Projects />
            
            {/* Experience Timeline */}
            <section id="experience">
              <Timeline 
                title="Professional Experience" 
                description="Progression at Nasdaq Verafin—from ML pipelines and fraud detection to MLOps infrastructure and product leadership."
                data={EXPERIENCE_FALLBACK}
                icon="💼"
                sectionType="experience"
              />
            </section>
            
            {/* Education Timeline */}
            <section id="education">
              <Timeline 
                title="Education & Awards" 
                description="Academic foundation in mechatronics and computer science, with graduate-level recognition."
                data={EDUCATION_FALLBACK}
                icon="🎓"
                sectionType="education"
              />
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-surface-100/50 dark:bg-surface-800/50">
              <div className="max-w-4xl mx-auto text-center">
                <SectionHeader 
                  title="Let's Connect"
                  icon="📬"
                  description="Focused on product development at the intersection of MLOps, platform engineering, and regulated financial technology—welcome to connect on leadership, architecture, and enterprise delivery."
                />
                <ContactButtons />
              </div>
            </section>
            
            {/* Footer */}
            <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-surface-200 dark:border-surface-700">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm sm:text-base text-slate-900 dark:text-surface-400">
                  © 2026 {PERSONAL_INFO.name}
                </p>
              </div>
            </footer>
          </>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
};

function App() {
  const [mode, setMode] = useState('dark'); // Default to dark theme

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
    logThemeChange(newMode);
  };

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark');
    // Enable Firebase event monitoring
    enableEventMonitoring();
  }, []);

  return (
    <ThemeProvider value={{ mode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <Router>
          <AppContent mode={mode} toggleTheme={toggleTheme} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;