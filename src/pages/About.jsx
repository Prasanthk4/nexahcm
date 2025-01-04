import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/transitions/PageTransition';
import AboutCard from '../components/ui/AboutCard';

const About = () => {
  const navigate = useNavigate();
  const aboutCards = [
    {
      title: 'Who I Am',
      description: 'A passionate full-stack developer with a keen eye for design and a drive for creating exceptional digital experiences.',
      icon: '👨‍💻',
      color: '#60A5FA',
      gradient: 'from-blue-500 to-cyan-500',
      stats: [
        { value: 'Expert', label: 'Developer' },
        { value: 'Full Stack', label: 'Solutions' }
      ]
    },
    {
      title: 'My Approach',
      description: 'I believe in clean code, user-centric design, and delivering solutions that not only meet but exceed expectations.',
      icon: '🎯',
      color: '#C084FC',
      gradient: 'from-purple-500 to-pink-500',
      stats: [
        { value: 'Quality', label: 'Focused' },
        { value: 'Reliable', label: 'Support' }
      ]
    },
    {
      title: 'Services',
      description: 'Specializing in modern web development, mobile apps, and custom software solutions tailored to your needs.',
      icon: '⚡',
      color: '#34D399',
      gradient: 'from-emerald-500 to-teal-500',
      stats: [
        { value: 'Custom', label: 'Solutions' },
        { value: 'Modern', label: 'Tech Stack' }
      ]
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to understand their vision and transform it into reality through innovative solutions.',
      icon: '🤝',
      color: '#F472B6',
      gradient: 'from-pink-500 to-rose-500',
      stats: [
        { value: 'Client', label: 'Focused' },
        { value: 'Global', label: 'Reach' }
      ]
    }
  ];

  const skills = [
    { name: 'Frontend', tech: ['React', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', tech: ['Node.js', 'Express', 'MongoDB'] },
    { name: 'Mobile', tech: ['React Native', 'Flutter'] }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center"></div>
        
        {/* Subtle Gradient Accent */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-blue-500/50 p-1"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
              >
                Hi, I'm Satheesh
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
              >
                A freelance full-stack developer passionate about crafting beautiful, 
                functional websites and applications that help businesses grow.
              </motion.p>
            </div>

            {/* Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {aboutCards.map((card, index) => (
                <AboutCard key={index} {...card} />
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* New Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 text-center"
            >
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1a2234] to-[#1d2639] p-8 rounded-2xl border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-400 mb-8">
                  Let's work together to bring your ideas to life.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <svg 
                    className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Extra gradient at bottom to ensure no white space */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
    </PageTransition>
  );
};

export default About;
