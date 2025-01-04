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

  const frontendSkills = [
    { name: 'React', icon: '🔥' },
    { name: 'Next.js', icon: '📚' },
    { name: 'Tailwind CSS', icon: '💨' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🌐' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '📈' }
  ];

  const mobileSkills = [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '🎯' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-400 via-slate-300 to-slate-400 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07] bg-center"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full 
            bg-gradient-to-bl from-blue-300/30 to-purple-300/30 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full 
            bg-gradient-to-tr from-slate-400/30 to-blue-300/30 blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl mb-6">
                  Hi, I'm Satheesh
                </h1>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                  A freelance full-stack developer passionate about crafting beautiful, 
                  functional websites and applications that help businesses grow.
                </p>
              </motion.div>
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
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Frontend</h3>
                  <div className="space-y-3">
                    {frontendSkills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/30 to-purple-400/30 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Backend</h3>
                  <div className="space-y-3">
                    {backendSkills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400/30 to-emerald-400/30 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Mobile</h3>
                  <div className="space-y-3">
                    {mobileSkills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400/30 to-red-400/30 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* New Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 text-center"
            >
              <div className="bg-slate-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Let's work together to bring your ideas to life.
                  </p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get in Touch
                  </button>
                </div>
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
