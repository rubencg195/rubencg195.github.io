import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeftIcon, GitHubIcon, WarningIcon } from './UnicodeIcons';
import { REPOSITORIES } from '../constants';
import { fetchReadmeWithImages } from '../utils/githubUtils';
import { parseUnicodeIcons, UnicodeIcon } from '../utils/unicodeParser';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const project = REPOSITORIES.find(repo => repo.id === projectId);

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
        setReadme(readmeContent);
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-500"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon className="mr-2" />
              Back to Portfolio
            </button>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
            >
              <GitHubIcon className="mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* README Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading README...</span>
            </div>
          )}
          
                     {error && (
             <div className="text-center py-12">
               <div className="text-red-600 mb-4">
                 <WarningIcon className="text-4xl mx-auto mb-4 block" />
                 <p className="text-lg font-medium">Error loading README</p>
                 <p className="text-sm text-gray-500">{error}</p>
               </div>
               <button 
                 onClick={() => window.location.reload()}
                 className="text-blue-600 hover:text-blue-500"
               >
                 Try Again
               </button>
             </div>
           )}
          
          {readme && !loading && !error && (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
