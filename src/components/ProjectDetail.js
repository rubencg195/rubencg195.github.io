import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { PrimaryButton, ActionButton } from './Button';
import { ArrowLeftIcon, WarningIcon } from './UnicodeIcons';
import { REPOSITORIES } from '../constants';
import { fetchReadmeWithImages } from '../utils/githubUtils';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { mode, toggleTheme } = useTheme();

  const project = REPOSITORIES.find(repo => repo.id === projectId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!project) {
      setError('Project not found');
      setLoading(false);
      return;
    }

    const fetchReadme = async () => {
      try {
        setLoading(true);
        const readmeContent = await fetchReadmeWithImages(project.owner, project.repo);
        // Store current scroll position before setting content
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        setReadme(readmeContent);
        // Restore scroll position after React re-renders
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPosition);
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface-50 dark:bg-surface-800">
        <Navbar mode={mode} toggleTheme={toggleTheme} showBackButton={true} />
        <div className="min-h-screen bg-surface-50 dark:bg-surface-800 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <SectionHeader 
              icon="🔍"
              title="Project Not Found"
              description="The project you're looking for doesn't exist or has been moved."
              className="mb-8"
            />
            <PrimaryButton 
              onClick={() => navigate('/')}
              icon={<ArrowLeftIcon />}
              iconPosition="left"
            >
              Back to Portfolio
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-800">
      {/* Navbar */}
      <Navbar 
        mode={mode} 
        toggleTheme={toggleTheme} 
        showBackButton={true} 
        showGitHubLink={true} 
        gitHubUrl={project.url}
      />

      {/* Project Header */}
      <HeroSection 
        title={project.name}
        description={project.description}
        technologies={project.technologies}
        className="py-16"
      />

      {/* README Content */}
      <Section background="grey" padding="default">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-surface-900 rounded-3xl shadow-material-3 p-8 lg:p-12 border border-surface-200/50 dark:border-surface-700/50">
            <SectionHeader 
              icon="📖"
              title="Project Documentation"
              className="mb-8"
            />
            
            {loading && (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-200 border-t-primary-600"></div>
                <span className="ml-4 text-xl text-surface-600 dark:text-surface-300 font-medium">Loading documentation...</span>
              </div>
            )}
            
            {error && (
              <div className="text-center py-16">
                <div className="mb-6">
                  <span className="text-6xl mb-4 block">
                    <WarningIcon />
                  </span>
                  <p className="text-2xl font-bold text-surface-900 dark:text-white mb-2">Error loading README</p>
                  <p className="text-surface-600 dark:text-surface-400">{error}</p>
                </div>
                <ActionButton 
                  onClick={() => window.location.reload()}
                  variant="primary"
                  icon="🔄"
                >
                  Try Again
                </ActionButton>
              </div>
            )}
            
            {readme && !loading && !error && (
              <div className="prose prose-lg prose-primary max-w-none dark:prose-invert text-surface-900 dark:text-surface-100">
                <ReactMarkdown>{readme}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetail;
