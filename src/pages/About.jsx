import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/transitions/PageTransition';
import AboutCard from '../components/ui/AboutCard';
import Logo from '../assets/logo.png';

const About = () => {
  const navigate = useNavigate();
  const aboutCards = [
    {
      title: 'Who I Am',
      description: 'A passionate full-stack developer with a keen eye for design and a drive for creating exceptional digital experiences.',
      icon: '👨‍💻',
      color: '#60A5FA', // blue-400
      gradient: 'from-blue-400 to-blue-300',
      stats: [
        { label: 'Expert', value: 'Developer' },
        { label: 'Full Stack', value: 'Solutions' }
      ]
    },
    {
      title: 'My Approach',
      description: 'I believe in clean code, user-centric design, and delivering solutions that not only meet but exceed expectations.',
      icon: '🎯',
      color: '#C084FC', // purple-400
      gradient: 'from-purple-400 to-purple-300',
      stats: [
        { label: 'Quality', value: 'Focused' },
        { label: 'Reliable', value: 'Support' }
      ]
    },
    {
      title: 'Services',
      description: 'Specializing in modern web development, mobile apps, and custom software solutions tailored to your needs.',
      icon: '⚡',
      color: '#34D399', // emerald-400
      gradient: 'from-emerald-400 to-emerald-300',
      stats: [
        { label: 'Custom', value: 'Solutions' },
        { label: 'Modern', value: 'Tech Stack' }
      ]
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to understand their vision and transform it into reality through innovative solutions.',
      icon: '🤝',
      color: '#F472B6', // pink-400
      gradient: 'from-pink-400 to-pink-300',
      stats: [
        { label: 'Client', value: 'Focused' },
        { label: 'Global', value: 'Reach' }
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
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-purple-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 3D Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-200/20 rounded-full blur-2xl"></div>
          
          {/* 3D Shapes */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-xl transform rotate-45 backdrop-blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-xl transform -rotate-12 backdrop-blur-sm"></div>
        </div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-center"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/90"
              >
                <div className="w-full h-full bg-white flex items-center justify-center p-2">
                  <img 
                    src={Logo}
                    alt="NexaHCM Logo" 
                    className="w-full h-full object-contain rounded-full"
                    style={{
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Hi, I'm Satheesh
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 max-w-2xl mx-auto"
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

            {/* Skills Section with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-sm bg-white/20 text-gray-700 backdrop-blur-sm hover:bg-white/30 hover:text-gray-900 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 text-center"
            >
              <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 group">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-600 mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Let's work together to bring your ideas to life.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-gray-800 font-semibold overflow-hidden transition-all duration-300 hover:bg-white/30 hover:text-gray-900 hover:scale-105"
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
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
