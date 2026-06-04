import React from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { renderAchievementWithMetrics } from '../utils/highlightMetrics';
import { createCardHoverHandler } from '../hooks/useCardHoverTracking';
import { slugifyCardId } from '../utils/analyticsDedupe';

// Scroll-animated Timeline Items component
const TimelineItems = ({ data, sectionType = 'timeline' }) => {
  const [ref, isVisible] = useScrollAnimation(0.2, '50px', true);

  return (
    <div ref={ref} className="space-y-4 sm:space-y-6 md:space-y-8">
      {data.slice(0, 6).map((item, idx) => (
        <div 
          key={idx} 
          className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible ? `${idx * 0.2}s` : '0s'
          }}
        >
          {/* Mobile Layout */}
          <div className="md:hidden flex items-start pl-12 sm:pl-16 relative z-10">
            {/* Mobile Timeline Circle */}
            <div className="absolute left-4 sm:left-6 top-6 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-2 border-white dark:border-surface-900 shadow-material-1 z-10">
              </div>
            </div>
            
            {/* Mobile Timeline Card */}
            <div className="w-full">
              <MobileTimelineCard 
                sectionType={sectionType}
                title={item.title} 
                subtitle={item.company || item.institution} 
                subtitleNote={item.subtitle_note}
                footnote={item.period || item.year}
                description={item.description}
                achievements={item.achievements}
                technologies={item.technologies}
                index={idx}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative" style={{zIndex: 10 - idx}}>
            <div className="relative flex items-stretch">
              {/* Left Side (Even indices) */}
              <div className="w-1/2 pr-8">
                {idx % 2 === 0 && (
                  <TimelineCard 
                    sectionType={sectionType}
                    title={item.title} 
                    subtitle={item.company || item.institution} 
                    subtitleNote={item.subtitle_note}
                    footnote={item.period || item.year}
                    description={item.description}
                    achievements={item.achievements}
                    technologies={item.technologies}
                    isLeft={true}
                    index={idx}
                  />
                )}
              </div>
              
              {/* Center Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 h-full">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-surface-900 shadow-material-2 hover:scale-125 transition-transform duration-300">
                </div>
              </div>
              
              {/* Right Side (Odd indices) */}
              <div className="w-1/2 pl-8">
                {idx % 2 === 1 && (
                  <TimelineCard 
                    sectionType={sectionType}
                    title={item.title} 
                    subtitle={item.company || item.institution} 
                    subtitleNote={item.subtitle_note}
                    footnote={item.period || item.year}
                    description={item.description}
                    achievements={item.achievements}
                    technologies={item.technologies}
                    isLeft={false}
                    index={idx}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TimelineCard = ({ sectionType, title, subtitle, subtitleNote, footnote, description, achievements, technologies, isLeft, index = 0 }) => {
  const handleCardHover = createCardHoverHandler(
    sectionType,
    title,
    `${sectionType}-${slugifyCardId(title)}`
  );

  return (
  <div className={`group relative ${isLeft ? 'text-right' : 'text-left'} h-full`}>
    {/* Connection Line to Center */}
    <div className={`absolute top-6 ${isLeft ? '-right-8 translate-x-full' : '-left-8 -translate-x-full'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-primary-300 to-transparent' : 'from-transparent to-primary-300'} dark:${isLeft ? 'from-primary-600 to-transparent' : 'from-transparent to-primary-600'}`}></div>
    
    {/* Card */}
    <div
      onMouseEnter={handleCardHover}
      className="bg-slate-50 dark:bg-surface-900 p-5 sm:p-6 rounded-2xl shadow-material-2 hover:shadow-material-4 border border-slate-200 dark:border-surface-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 transform hover:scale-[1.01] h-full flex flex-col justify-between"
    >
      <div>
        {/* Period Badge */}
        {footnote && (
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 mb-3 hover:scale-105 transition-transform duration-300">
            <span className="mr-1.5">📅</span>
            {footnote}
          </div>
        )}
        
        {/* Title */}
        <h4 className={`font-bold text-lg sm:text-xl text-surface-900 dark:text-white mb-1 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300 ${isLeft ? 'text-right' : 'text-left'} leading-tight`}>
          {title}
        </h4>

        {/* Subtitle Note */}
        {subtitleNote && (
          <p className={`text-xs italic text-slate-500 dark:text-surface-500 mb-1 ${isLeft ? 'text-right' : 'text-left'}`}>
            {subtitleNote}
          </p>
        )}
        
        {/* Subtitle */}
        {subtitle && (
          <div className={`flex items-center text-sm sm:text-base text-slate-900 dark:text-surface-300 font-semibold mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {!isLeft && <span className="mr-1.5 sm:mr-2">🏢</span>}
            {subtitle}
            {isLeft && <span className="ml-1.5 sm:ml-2">🏢</span>}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-slate-600 dark:text-surface-400 mb-4 leading-relaxed text-left">
            {description}
          </p>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <ul className="list-disc pl-5 mb-4 text-sm text-slate-700 dark:text-surface-300 space-y-2 text-left">
            {achievements.map((achievement, aIdx) => (
              <li key={aIdx} className="leading-relaxed">
                {renderAchievementWithMetrics(achievement)}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className={`flex flex-wrap gap-1.5 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
          {technologies.map((tech, tIdx) => (
            <span 
              key={tIdx} 
              className="px-2.5 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-semibold border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {/* Decorative Element */}
      <div className={`absolute -top-1.5 ${isLeft ? '-left-1.5' : '-right-1.5'} w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
    </div>
  </div>
  );
};

const MobileTimelineCard = ({ sectionType, title, subtitle, subtitleNote, footnote, description, achievements, technologies, index = 0 }) => {
  const handleCardHover = createCardHoverHandler(
    sectionType,
    title,
    `${sectionType}-${slugifyCardId(title)}`
  );

  return (
  <div className="group relative">
    {/* Connection Line to Timeline */}
    <div className="absolute top-6 -left-12 sm:-left-16 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-600 dark:to-transparent"></div>
    
    {/* Card */}
    <div
      onMouseEnter={handleCardHover}
      className="bg-white dark:bg-surface-900 p-4 sm:p-5 rounded-2xl shadow-material-2 hover:shadow-material-4 border border-surface-200/50 dark:border-surface-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
    >
      {/* Period Badge */}
      {footnote && (
        <div className="inline-flex items-center px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 mb-2 hover:scale-105 transition-transform duration-300">
          <span className="mr-1 sm:mr-1.5">📅</span>
          <span className="text-xs">{footnote}</span>
        </div>
      )}
      
      {/* Title */}
      <h4 className="font-bold text-base sm:text-lg text-surface-900 dark:text-white mb-1 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
        {title}
      </h4>

      {/* Subtitle Note */}
      {subtitleNote && (
        <p className="text-xs italic text-slate-500 dark:text-surface-500 mb-1">
          {subtitleNote}
        </p>
      )}
      
      {/* Subtitle */}
      {subtitle && (
        <div className="flex items-center text-slate-900 dark:text-surface-300 font-semibold text-sm mb-3">
          <span className="mr-1 sm:mr-1.5">🏢</span>
          <span className="truncate">{subtitle}</span>
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-xs sm:text-sm text-slate-600 dark:text-surface-400 mb-3 leading-relaxed text-left">
          {description}
        </p>
      )}

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <ul className="list-disc pl-4 mb-3 text-xs sm:text-sm text-slate-700 dark:text-surface-300 space-y-1.5 text-left">
          {achievements.map((achievement, aIdx) => (
            <li key={aIdx} className="leading-relaxed">
              {renderAchievementWithMetrics(achievement)}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {technologies.map((tech, tIdx) => (
            <span 
              key={tIdx} 
              className="px-2 py-0.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 dark:text-primary-300 rounded-md text-[10px] sm:text-xs font-semibold border border-primary-500/15"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

const Timeline = ({ data, title, description, icon, sectionType = 'timeline' }) => {
  // Safety check for data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-surface-100/50 dark:bg-surface-800/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title={title}
            description={description}
            icon={icon}
          />
          <div className="text-center text-surface-600 dark:text-surface-400">
            <p className="text-sm sm:text-base">No data available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 bg-surface-100/50 dark:bg-surface-800/50">
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
          <div className="md:hidden absolute left-4 sm:left-6 w-0.5 sm:w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-300 dark:from-primary-800 dark:via-primary-700 dark:to-secondary-700 h-full rounded-full"></div>
          
          {/* Timeline Items */}
          <TimelineItems data={data} sectionType={sectionType} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
