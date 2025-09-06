import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { REPOSITORIES } from '../constants';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  // Intersection Observer for scroll-triggered animations with fade-out
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="projects" background="grey">
      <SectionHeader 
        title="Featured Projects"
        description={<>
          Here are some of my recent projects that showcase my skills and experience in 
          <span className="font-semibold text-primary-700 dark:text-primary-400"> modern web development</span> and 
          <span className="font-semibold text-primary-700 dark:text-primary-400"> cloud architecture</span>.
        </>}
        descriptionClassName="max-w-3xl mx-auto"
      />
      
      {/* Enhanced grid with scroll animations */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {REPOSITORIES.map((project, index) => (
          <div 
            key={project.id}
            ref={el => cardRefs.current[index] = el}
            data-index={index}
            className={`transition-all duration-500 ease-out ${
              visibleCards.has(index) 
                ? 'animate-fade-in opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both'
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Floating decorative elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-200/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary-200/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </Section>
  );
};

export default Projects;
