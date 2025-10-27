import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import { fetchReadmeWithImages } from '../utils/githubUtils';
import { useTheme } from '../contexts/ThemeContext';
import { PERSONAL_INFO, PROJECTS_FALLBACK } from '../constants';

// Mermaid Component
const MermaidDiagram = ({ chart, mode }) => {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    // Initialize mermaid with theme based on mode
    mermaid.initialize({
      startOnLoad: true,
      theme: mode === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
      fontFamily: 'Inter, system-ui, sans-serif',
      themeVariables: {
        primaryColor: mode === 'dark' ? '#3b82f6' : '#2563eb',
        primaryTextColor: mode === 'dark' ? '#e5e7eb' : '#1f2937',
        primaryBorderColor: mode === 'dark' ? '#60a5fa' : '#3b82f6',
        lineColor: mode === 'dark' ? '#6b7280' : '#9ca3af',
        secondaryColor: mode === 'dark' ? '#8b5cf6' : '#7c3aed',
        tertiaryColor: mode === 'dark' ? '#ec4899' : '#db2777',
        background: mode === 'dark' ? '#1f2937' : '#ffffff',
        mainBkg: mode === 'dark' ? '#1f2937' : '#ffffff',
        secondBkg: mode === 'dark' ? '#374151' : '#f3f4f6',
        textColor: mode === 'dark' ? '#e5e7eb' : '#1f2937',
        border1: mode === 'dark' ? '#4b5563' : '#d1d5db',
        border2: mode === 'dark' ? '#6b7280' : '#9ca3af',
      },
    });

    // Generate unique ID for this diagram
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

    // Render the diagram
    const renderDiagram = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        // Fallback to showing the raw code if rendering fails
        setSvg(`<pre class="text-red-500 dark:text-red-400">Error rendering diagram: ${error.message}</pre>`);
      }
    };

    renderDiagram();
  }, [chart, mode]);

  return (
    <div 
      ref={ref}
      className="mermaid-diagram my-6 p-4 bg-white dark:bg-surface-800 rounded-lg border border-surface-200 dark:border-surface-700 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mode, toggleTheme } = useTheme();
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [readmeLoading, setReadmeLoading] = useState(true);

  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const loadProject = async () => {
      try {
        // First try to find project in fallback data (for when GitHub API is unavailable)
        const fallbackProject = PROJECTS_FALLBACK.find(p => p.id === id);
        
        if (fallbackProject) {
          console.log('Using fallback project data for:', id);
          setProject(fallbackProject);
          
          // Try to load README from GitHub
          try {
            const readmeContent = await fetchReadmeWithImages(fallbackProject.html_url);
            setReadme(readmeContent);
          } catch (readmeError) {
            console.log('README not available for fallback project');
            setReadme('# ' + fallbackProject.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + '\n\n' + fallbackProject.description + '\n\nVisit the [GitHub repository](' + fallbackProject.html_url + ') for more details.');
          }
        } else {
          // Try GitHub API for numeric IDs
          const response = await fetch(`https://api.github.com/repositories/${id}`);
          if (response.ok) {
            const projectData = await response.json();
            setProject(projectData);
            
            // Load README
            const readmeContent = await fetchReadmeWithImages(projectData.html_url);
            setReadme(readmeContent);
          }
        }
      } catch (error) {
        console.error('Error loading project:', error);
        
        // Try fallback data as last resort
        const fallbackProject = PROJECTS_FALLBACK.find(p => p.id === id);
        if (fallbackProject) {
          setProject(fallbackProject);
          setReadme('# ' + fallbackProject.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + '\n\n' + fallbackProject.description + '\n\nVisit the [GitHub repository](' + fallbackProject.html_url + ') for more details.');
        }
      } finally {
        setLoading(false);
        setReadmeLoading(false);
      }
    };

    if (id) {
      loadProject();
    }
  }, [id]);

  useEffect(() => {
    // Scroll to top and apply theme
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const getProjectGradient = () => {
    const gradients = [
      'from-primary-500 to-secondary-500',
      'from-secondary-500 to-accent-500',
      'from-accent-500 to-warning-500',
      'from-warning-500 to-primary-500'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const getProjectIcon = (name) => {
    const icons = {
      'aws': '☁️',
      'backend': '⚙️',
      'frontend': '🎨',
      'cognito': '🔐',
      'auth': '🔑',
      'website': '🌐',
      'hosting': '🏠',
      'bedrock': '🤖',
      'database': '🗄️',
      'vector': '🔢',
      'agent': '🤖',
      'structured': '📊',
      'unstructured': '📄'
    };
    
    const lowerName = name?.toLowerCase() || '';
    for (const [key, icon] of Object.entries(icons)) {
      if (lowerName.includes(key)) {
        return icon;
      }
    }
    return '🚀';
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-surface-200 dark:border-surface-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-secondary-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          
          {/* Loading Text */}
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-4">
            {PERSONAL_INFO.name}
          </h1>
          
          {/* Loading Dots */}
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <p className="text-surface-600 dark:text-surface-400 mt-4">
            Loading project details...
          </p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
          : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
      }`}>
        <div className="glass-effect rounded-3xl p-12 text-center shadow-material-4 max-w-md">
          <div className="text-8xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500 mb-4">
            Project Not Found
          </h2>
          <p className="text-surface-600 dark:text-surface-300 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-material-2 hover:shadow-material-3 transition-all duration-300 hover:scale-105 group"
          >
            <span className="text-xl group-hover:animate-bounce">🏠</span>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      mode === 'dark' 
        ? 'bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900' 
        : 'bg-gradient-to-br from-surface-50 via-white to-surface-100'
    }`}>
      {/* Navbar - Matching Home Page Style */}
      <nav className="glass-effect shadow-material-3 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 py-3 xs:py-4">
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

            {/* Navigation Actions */}
            <div className="flex items-center space-x-2 xs:space-x-4">
              <Link
                to="/"
                className="group relative px-2 xs:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span className="flex items-center gap-1 xs:gap-2">
                  <span className="text-lg group-hover:animate-bounce">←</span>
                  <span className="hidden xs:inline">Back to Portfolio</span>
                  <span className="xs:hidden">Back</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-2 xs:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span className="flex items-center gap-1 xs:gap-2">
                  <span className="text-lg group-hover:animate-bounce">🐙</span>
                  <span className="hidden xs:inline">View on GitHub</span>
                  <span className="xs:hidden">GitHub</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Theme Toggle - Matching Home Page */}
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-xl glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110 animate-fade-in flex items-center justify-center"
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
            </div>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 xs:px-6 py-8 xs:py-12">
        {/* Project Header */}
        <div className="glass-effect rounded-2xl xs:rounded-3xl p-4 xs:p-8 sm:p-12 shadow-material-3 mb-6 xs:mb-8 animate-fade-in">
          <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 xs:gap-6">
            <div className={`w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-r ${getProjectGradient()} rounded-2xl xs:rounded-3xl flex items-center justify-center text-3xl xs:text-4xl shadow-material-2 animate-bounce-in flex-shrink-0`}>
              {project.icon ? (
                <span className="text-3xl xs:text-4xl">{project.icon}</span>
              ) : (
                getProjectIcon(project.name)
              )}
            </div>
            
            <div className="flex-1 text-center xs:text-left">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-3 xs:mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                {project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h1>
              
              {project.description && (
                <p className="text-lg xs:text-xl text-slate-900 dark:text-surface-300 leading-relaxed mb-4 xs:mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  {project.description}
                </p>
              )}

              {/* Project Stats */}
              <div className="flex flex-wrap justify-center xs:justify-start gap-3 xs:gap-6 mb-4 xs:mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-1 xs:gap-2">
                  <span className="text-xl xs:text-2xl">⭐</span>
                  <span className="font-semibold text-sm xs:text-base">{project.stargazers_count}</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">stars</span>
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <span className="text-xl xs:text-2xl">🍴</span>
                  <span className="font-semibold text-sm xs:text-base">{project.forks_count}</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">forks</span>
                </div>
                {project.language && (
                  <div className="flex items-center gap-1 xs:gap-2">
                    <span className="text-xl xs:text-2xl mr-1">💻</span>
                    {project.language.map((lang, langIndex) => (
                      <span key={langIndex} className="px-2 py-0.5 text-xs bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-700 dark:text-primary-300 rounded-full font-medium backdrop-blur-sm border border-primary-500/30">
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-1 xs:gap-2 w-full xs:w-auto justify-center xs:justify-start">
                  <span className="text-xl xs:text-2xl">📅</span>
                  <span className="text-slate-600 dark:text-surface-400 text-sm xs:text-base">
                    Updated {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Technology Tags */}
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap justify-center xs:justify-start gap-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  {project.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 xs:px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-xs xs:text-sm font-medium text-primary-600 dark:text-primary-400 border border-primary-500/30 hover:scale-110 transition-transform duration-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* README Content */}
        <div className="glass-effect rounded-2xl xs:rounded-3xl shadow-material-3 overflow-hidden animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="p-4 xs:p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-accent-500 mb-6 flex items-center gap-3">
              <span className="text-3xl">📖</span>
              Project Documentation
            </h2>
            
            {readmeLoading ? (
              <div className="space-y-4 animate-pulse">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-surface-200 dark:bg-surface-700 rounded w-full"></div>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none text-surface-900 dark:text-surface-100 dark:prose-invert">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    // Custom heading components with better styling
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-6 mt-8" {...props} />,
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-4 mt-8 border-b border-surface-200 dark:border-surface-700 pb-2" {...props} />,
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h3: ({node, ...props}) => <h3 className="text-2xl font-semibold text-surface-900 dark:text-white mb-3 mt-6" {...props} />,
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h4: ({node, ...props}) => <h4 className="text-xl font-semibold text-surface-900 dark:text-white mb-2 mt-4" {...props} />,
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h5: ({node, ...props}) => <h5 className="text-lg font-semibold text-surface-900 dark:text-white mb-2 mt-4" {...props} />,
                    // eslint-disable-next-line jsx-a11y/heading-has-content
                    h6: ({node, ...props}) => <h6 className="text-base font-semibold text-surface-900 dark:text-white mb-2 mt-4" {...props} />,
                    
                    // Paragraph with better spacing
                    p: ({node, ...props}) => <p className="text-surface-700 dark:text-surface-300 mb-4 leading-relaxed" {...props} />,
                    
                    // Links with hover effects
                    a: ({node, ...props}) => (
                      // eslint-disable-next-line jsx-a11y/anchor-has-content
                      <a 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline hover:no-underline transition-colors duration-200 font-medium" 
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props} 
                      />
                    ),
                    
                    // Code blocks with better styling and Mermaid support
                    code: ({node, inline, className, children, ...props}) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const language = match ? match[1] : '';
                      
                      // Check if it's a mermaid diagram
                      if (!inline && language === 'mermaid') {
                        return <MermaidDiagram chart={String(children).replace(/\n$/, '')} mode={mode} />;
                      }
                      
                      return inline ? (
                        <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 text-primary-600 dark:text-primary-400 rounded text-sm font-mono border border-surface-200 dark:border-surface-700" {...props}>
                          {children}
                        </code>
                      ) : (
                        <code className={`${className} block p-4 bg-surface-100 dark:bg-surface-800 rounded-lg overflow-x-auto text-sm font-mono border border-surface-200 dark:border-surface-700`} {...props}>
                          {children}
                        </code>
                      )
                    },
                    
                    // Pre blocks - Skip styling for mermaid diagrams
                    pre: ({node, children, ...props}) => {
                      // Check if this pre contains a mermaid diagram
                      const childElement = React.Children.toArray(children)[0];
                      if (childElement?.props?.className?.includes('language-mermaid')) {
                        return <>{children}</>;
                      }
                      return <pre className="bg-surface-100 dark:bg-surface-800 rounded-lg p-4 overflow-x-auto mb-4 border border-surface-200 dark:border-surface-700" {...props}>{children}</pre>;
                    },
                    
                    // Lists with better spacing
                    ul: ({node, ...props}) => {
                      const { ordered, depth, ...restProps } = props;
                      return <ul className="list-disc list-inside mb-4 space-y-2 text-surface-700 dark:text-surface-300" {...restProps} />;
                    },
                    ol: ({node, ...props}) => {
                      const { ordered, depth, ...restProps } = props;
                      return <ol className="list-decimal list-inside mb-4 space-y-2 text-surface-700 dark:text-surface-300" {...restProps} />;
                    },
                    li: ({node, ...props}) => {
                      const { ordered, depth, ...restProps } = props;
                      return <li className="ml-4" {...restProps} />;
                    },
                    
                    // Blockquotes
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 italic bg-surface-50 dark:bg-surface-800/50 rounded-r-lg" {...props} />
                    ),
                    
                    // Tables (GFM)
                    table: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return (
                        <div className="overflow-x-auto mb-4">
                          <table className="min-w-full divide-y divide-surface-200 dark:divide-surface-700 border border-surface-200 dark:border-surface-700 rounded-lg" {...restProps} />
                        </div>
                      );
                    },
                    thead: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return <thead className="bg-surface-100 dark:bg-surface-800" {...restProps} />;
                    },
                    tbody: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return <tbody className="divide-y divide-surface-200 dark:divide-surface-700" {...restProps} />;
                    },
                    tr: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return <tr className="hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors" {...restProps} />;
                    },
                    th: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return <th className="px-4 py-2 text-left text-sm font-semibold text-surface-900 dark:text-white" {...restProps} />;
                    },
                    td: ({node, ...props}) => {
                      const { isHeader, ...restProps } = props;
                      return <td className="px-4 py-2 text-sm text-surface-700 dark:text-surface-300" {...restProps} />;
                    },
                    
                    // Images with better styling
                    img: ({node, ...props}) => (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <img 
                        className="rounded-lg shadow-material-2 my-4 max-w-full h-auto" 
                        loading="lazy"
                        {...props} 
                      />
                    ),
                    
                    // Horizontal rule
                    hr: ({node, ...props}) => <hr className="my-8 border-surface-200 dark:border-surface-700" {...props} />,
                    
                    // Strong/Bold
                    strong: ({node, ...props}) => <strong className="font-bold text-surface-900 dark:text-white" {...props} />,
                    
                    // Emphasis/Italic
                    em: ({node, ...props}) => <em className="italic text-surface-800 dark:text-surface-200" {...props} />,
                    
                    // Strikethrough (GFM)
                    del: ({node, ...props}) => <del className="line-through text-surface-500 dark:text-surface-500" {...props} />,
                  }}
                >
                  {readme}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* Related Actions */}
        <div className="mt-6 xs:mt-8 text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="glass-effect rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500 mb-4">
              Interested in this project?
            </h3>
            <p className="text-slate-900 dark:text-surface-300 mb-6">
              Check out the live demo, explore the code, or get in touch to discuss similar projects.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-surface-900 to-surface-800 dark:from-white dark:to-surface-100 text-white dark:text-surface-900 px-6 py-3 rounded-2xl font-semibold shadow-material-3 hover:shadow-material-4 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl group-hover:animate-bounce">🐙</span>
                View Source Code
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 glass-effect text-surface-900 dark:text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-material-3 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl group-hover:animate-bounce">💬</span>
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
