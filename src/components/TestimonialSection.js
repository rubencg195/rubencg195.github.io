import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow',
      company: 'TechFlow Inc.',
      content: 'Ruben delivered exceptional results on our cloud migration project. His expertise in AWS and serverless architecture helped us reduce costs by 60% while improving performance.',
      avatar: '👩‍💼',
      rating: 5,
      project: 'Cloud Migration'
    },
    {
      name: 'Marcus Chen',
      role: 'Product Manager',
      company: 'InnovateHub',
      content: 'Working with Ruben was a game-changer. He built our React dashboard from scratch and implemented real-time features that our users absolutely love.',
      avatar: '👨‍💻',
      rating: 5,
      project: 'Dashboard Development'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Lead Developer',
      company: 'StartupXYZ',
      content: 'Ruben\'s full-stack expertise and attention to detail are outstanding. He delivered our MVP ahead of schedule and helped us secure Series A funding.',
      avatar: '👩‍🚀',
      rating: 5,
      project: 'MVP Development'
    },
    {
      name: 'David Kim',
      role: 'Engineering Director',
      company: 'ScaleUp Solutions',
      content: 'The machine learning integration Ruben built for us processes 100K+ requests daily. His code is clean, scalable, and well-documented.',
      avatar: '👨‍🔬',
      rating: 5,
      project: 'ML Integration'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-warning-500 mb-6 animate-fade-in">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-warning-500 mx-auto rounded-full mb-8 animate-scale-in" 
               style={{animationDelay: '0.3s'}}></div>
          <p className="max-w-3xl mx-auto text-xl text-surface-600 dark:text-surface-300 animate-fade-in"
             style={{animationDelay: '0.5s'}}>
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="glass-effect rounded-3xl p-12 shadow-material-4 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-pulse-soft">
                {testimonials[currentTestimonial].avatar}
              </div>
              
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-warning-500 animate-bounce" 
                        style={{animationDelay: `${i * 0.1}s`}}>
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl text-surface-700 dark:text-surface-300 italic leading-relaxed mb-8 animate-fade-in">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="animate-fade-in">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-surface-600 dark:text-surface-400 mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-sm text-surface-500 dark:text-surface-500 mb-4">
                  {testimonials[currentTestimonial].company}
                </p>
                
                {/* Project Tag */}
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/30">
                  {testimonials[currentTestimonial].project}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="group p-3 rounded-xl glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl group-hover:animate-bounce">←</span>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125'
                        : 'bg-surface-300 dark:bg-surface-600 hover:scale-110'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group p-3 rounded-xl glass-effect hover:shadow-material-2 transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl group-hover:animate-bounce">→</span>
              </button>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-accent-500/20 to-warning-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-surface-900 dark:text-white">
            Trusted by Companies Worldwide
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[
              { name: 'PartnerHero', logo: '🏢' },
              { name: 'Internet of Trees', logo: '🌳' },
              { name: 'Monge Group', logo: '🛒' },
              { name: 'UNITEC', logo: '🎓' },
              { name: 'LML Consulting', logo: '💼' }
            ].map((company, index) => (
              <div
                key={company.name}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-300 animate-fade-in"
                style={{animationDelay: `${1 + index * 0.2}s`}}
              >
                <span className="text-4xl">{company.logo}</span>
                <span className="text-sm font-medium text-surface-600 dark:text-surface-400">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
