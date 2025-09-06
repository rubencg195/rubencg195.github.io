import React, { useState, useEffect } from 'react';

const DataVisualization = () => {
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    linesOfCode: 0,
    coffeeCups: 0,
    happyClients: 0
  });

  const finalStats = {
    projectsCompleted: 47,
    linesOfCode: 125000,
    coffeeCups: 2847,
    happyClients: 23
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setStats({
          projectsCompleted: Math.floor(finalStats.projectsCompleted * easeOutProgress),
          linesOfCode: Math.floor(finalStats.linesOfCode * easeOutProgress),
          coffeeCups: Math.floor(finalStats.coffeeCups * easeOutProgress),
          happyClients: Math.floor(finalStats.happyClients * easeOutProgress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('data-visualization');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const metrics = [
    {
      key: 'projectsCompleted',
      label: 'Projects Completed',
      icon: '🚀',
      color: 'from-primary-500 to-secondary-500',
      suffix: '+',
      description: 'Successful deliveries'
    },
    {
      key: 'linesOfCode',
      label: 'Lines of Code',
      icon: '💻',
      color: 'from-secondary-500 to-accent-500',
      suffix: '+',
      description: 'Clean, maintainable code'
    },
    {
      key: 'coffeeCups',
      label: 'Coffee Consumed',
      icon: '☕',
      color: 'from-accent-500 to-warning-500',
      suffix: '+',
      description: 'Fuel for innovation'
    },
    {
      key: 'happyClients',
      label: 'Happy Clients',
      icon: '😊',
      color: 'from-warning-500 to-primary-500',
      suffix: '+',
      description: '5-star satisfaction'
    }
  ];

  const technologies = [
    { name: 'React', usage: 95, color: '#61DAFB' },
    { name: 'Node.js', usage: 90, color: '#339933' },
    { name: 'Python', usage: 85, color: '#3776AB' },
    { name: 'AWS', usage: 88, color: '#FF9900' },
    { name: 'TypeScript', usage: 92, color: '#3178C6' },
    { name: 'Docker', usage: 82, color: '#2496ED' }
  ];

  return (
    <section id="data-visualization" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-meta mb-6 animate-fade-in">
            Impact Metrics
          </h2>
          <div className="w-24 h-1 bg-gradient-meta mx-auto rounded-full mb-8 animate-scale-in" 
               style={{animationDelay: '0.3s'}}></div>
          <p className="max-w-3xl mx-auto text-xl text-surface-600 dark:text-surface-300 animate-fade-in"
             style={{animationDelay: '0.5s'}}>
            Data-driven results that matter. Here's what I've accomplished in my journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.key}
              className="glass-effect rounded-3xl p-8 text-center hover:shadow-material-4 transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{animationDelay: `${0.7 + index * 0.2}s`}}
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">{metric.icon}</div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {formatNumber(stats[metric.key])}{metric.suffix}
              </div>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                {metric.description}
              </p>
              <div className={`w-full h-1 bg-gradient-to-r ${metric.color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Technology Usage Chart */}
        <div className="glass-effect rounded-3xl p-8 shadow-material-3">
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            Technology Proficiency
          </h3>
          
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-surface-900 dark:text-white">
                    {tech.name}
                  </span>
                  <span className="text-sm text-surface-600 dark:text-surface-400">
                    {tech.usage}%
                  </span>
                </div>
                <div className="w-full h-3 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out shadow-lg animate-scale-in"
                    style={{
                      width: `${tech.usage}%`,
                      backgroundColor: tech.color,
                      animationDelay: `${1.5 + index * 0.2}s`,
                      boxShadow: `0 0 10px ${tech.color}40`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500">
            Certifications & Achievements
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'AWS Solutions Architect', icon: '☁️', color: 'from-orange-500 to-red-500' },
              { name: 'React Expert', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
              { name: 'Scrum Master', icon: '🏃‍♂️', color: 'from-green-500 to-teal-500' },
              { name: 'ML Specialist', icon: '🤖', color: 'from-purple-500 to-pink-500' }
            ].map((badge, index) => (
              <div
                key={badge.name}
                className="glass-effect rounded-2xl px-6 py-4 hover:shadow-material-3 transition-all duration-300 hover:scale-110 group animate-fade-in"
                style={{animationDelay: `${2 + index * 0.1}s`}}
              >
                <div className="text-3xl mb-2 group-hover:animate-spin">{badge.icon}</div>
                <div className={`text-sm font-semibold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                  {badge.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
