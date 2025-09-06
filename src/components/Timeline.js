import React from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Scroll-animated Timeline Items component
const TimelineItems = ({ data }) => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  return (
    <div ref={ref} className="space-y-6 md:-space-y-6">
      {data.slice(0, 6).map((item, idx) => (
        <div 
          key={idx} 
          className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transform: `translateY(${idx * 1}px)`,
            transitionDelay: isVisible ? `${idx * 0.2}s` : '0s'
          }}
        >
          {/* Mobile Layout */}
          <div className="md:hidden flex items-start pl-16 relative z-10" style={{marginTop: `${idx * 8}px`}}>
            {/* Mobile Timeline Circle */}
            <div className="absolute left-6 top-2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-2 border-white dark:border-surface-900 shadow-material-1 z-10">
              </div>
            </div>
            
            {/* Mobile Timeline Card */}
            <div className="w-full">
              <MobileTimelineCard 
                title={item.title} 
                subtitle={item.company || item.institution} 
                footnote={item.period || item.year}
                index={idx}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative" style={{zIndex: 10 - idx}}>
            <div className="relative flex items-center">
              {/* Left Side (Even indices) */}
              {idx % 2 === 0 && (
                <div className="w-1/2 pr-8">
                  <TimelineCard 
                    title={item.title} 
                    subtitle={item.company || item.institution} 
                    footnote={item.period || item.year}
                    isLeft={true}
                    index={idx}
                  />
                </div>
              )}
              
              {/* Center Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-surface-900 shadow-material-2 hover:scale-125 transition-transform duration-300">
                </div>
              </div>
              
              {/* Right Side (Odd indices) */}
              {idx % 2 === 1 && (
                <div className="w-1/2 ml-auto pl-8">
                  <TimelineCard 
                    title={item.title} 
                    subtitle={item.company || item.institution} 
                    footnote={item.period || item.year}
                    isLeft={false}
                    index={idx}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineCard = ({ title, subtitle, footnote, isLeft, index = 0 }) => (
  <div className={`group relative ${isLeft ? 'text-right' : 'text-left'}`}>
    {/* Connection Line to Center */}
    <div className={`absolute top-4 ${isLeft ? '-right-8 translate-x-full' : '-left-8 -translate-x-full'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-primary-300 to-transparent' : 'from-transparent to-primary-300'} dark:${isLeft ? 'from-primary-600 to-transparent' : 'from-transparent to-primary-600'}`}></div>
    
    {/* Card */}
    <div className="bg-white dark:bg-surface-900 p-3 rounded-xl shadow-material-2 hover:shadow-material-3 border border-surface-200/50 dark:border-surface-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 transform hover:scale-105">
      {/* Period Badge */}
      {footnote && (
        <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 mb-2 hover:scale-105 transition-transform duration-300 ${isLeft ? '' : ''}`}>
          <span className="mr-1.5">📅</span>
          {footnote}
        </div>
      )}
      
      {/* Title */}
      <h4 className={`font-bold text-lg text-surface-900 dark:text-white mb-1 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300 ${isLeft ? 'text-right' : 'text-left'}`}>
        {title}
      </h4>
      
      {/* Subtitle */}
      {subtitle && (
        <div className={`flex items-center text-surface-600 dark:text-surface-300 font-medium ${isLeft ? 'justify-end' : 'justify-start'}`}>
          {!isLeft && <span className="mr-2">🏢</span>}
          {subtitle}
          {isLeft && <span className="ml-2">🏢</span>}
        </div>
      )}
      
      {/* Decorative Element */}
      <div className={`absolute -top-1.5 ${isLeft ? '-left-1.5' : '-right-1.5'} w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
    </div>
  </div>
);

const MobileTimelineCard = ({ title, subtitle, footnote, index = 0 }) => (
  <div className="group relative">
    {/* Connection Line to Timeline */}
    <div className="absolute top-2 -left-16 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-600 dark:to-transparent"></div>
    
    {/* Card */}
    <div className="bg-white dark:bg-surface-900 p-3 rounded-xl shadow-material-2 hover:shadow-material-3 border border-surface-200/50 dark:border-surface-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 transform hover:scale-105">
      {/* Period Badge */}
      {footnote && (
        <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 mb-2 hover:scale-105 transition-transform duration-300">
          <span className="mr-1.5">📅</span>
          {footnote}
        </div>
      )}
      
      {/* Title */}
      <h4 className="font-bold text-base text-surface-900 dark:text-white mb-1.5 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
        {title}
      </h4>
      
      {/* Subtitle */}
      {subtitle && (
        <div className="flex items-center text-surface-600 dark:text-surface-300 font-medium text-sm">
          <span className="mr-1.5">🏢</span>
          {subtitle}
        </div>
      )}
    </div>
  </div>
);

const Timeline = ({ data, title, description, icon }) => {
  // Safety check for data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="py-16 px-6 bg-surface-100/50 dark:bg-surface-800/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title={title}
            description={description}
            icon={icon}
          />
          <div className="text-center text-surface-600 dark:text-surface-400">
            <p>No data available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 bg-surface-100/50 dark:bg-surface-800/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title={title}
          description={description}
          icon={icon}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Timeline Line - Center */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-300 dark:from-primary-800 dark:via-primary-700 dark:to-secondary-700 h-full rounded-full"></div>
          
          {/* Mobile Timeline Line - Left side */}
          <div className="md:hidden absolute left-6 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-300 dark:from-primary-800 dark:via-primary-700 dark:to-secondary-700 h-full rounded-full"></div>
          
          {/* Timeline Items */}
          <TimelineItems data={data} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
