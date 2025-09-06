import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeIcon, UserIcon, CodeIcon, EnvelopeIcon } from './components/UnicodeIcons';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';

// Home page component
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <HomeIcon className="text-xl mr-2" />
              <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 flex items-center">
                <UserIcon className="mr-1" />
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 flex items-center">
                <CodeIcon className="mr-1" />
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 flex items-center">
                <EnvelopeIcon className="mr-1" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-blue-600">Ruben Chávez</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Full Stack Developer passionate about creating amazing web experiences with AWS and modern technologies
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  View My Work
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              I'm a passionate developer with experience in modern web technologies, AWS cloud services, and infrastructure as code. 
              I love building scalable applications and solving complex problems with serverless architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <div className="mt-8">
              <a
                href="mailto:rubencg195@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <EnvelopeIcon className="mr-2" />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">&copy; 2024 Ruben Chávez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
