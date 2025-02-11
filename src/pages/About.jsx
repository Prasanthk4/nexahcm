import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/transitions/PageTransition';
import AboutCard from '../components/ui/AboutCard';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiFlutter } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
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
    {
      name: 'Frontend',
      tech: [
        { name: 'React', icon: <FaReact className="mr-2 text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="mr-2 text-black" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="mr-2 text-[#06B6D4]" /> }
      ]
    },
    {
      name: 'Backend',
      tech: [
        { name: 'Node.js', icon: <FaNodeJs className="mr-2 text-[#339933]" /> },
        { name: 'Express', icon: <SiExpress className="mr-2 text-[#000000]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="mr-2 text-[#47A248]" /> }
      ]
    },
    {
      name: 'Mobile',
      tech: [
        { name: 'React Native', icon: <TbBrandReactNative className="mr-2 text-[#61DAFB]" /> },
        { name: 'Flutter', icon: <SiFlutter className="mr-2 text-[#02569B]" /> }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-300 p-4 pt-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Logo Section */}
          <div className="flex justify-center mt-16 mb-12">
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="w-24 h-24 rounded-full bg-white p-1 shadow-lg"
            />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-blue-900 text-center mb-6"
            >
              Building Tomorrow's Solutions
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-800/80 text-center max-w-3xl mx-auto"
            >
              Expert full-stack development team delivering innovative solutions 
              that empower businesses to thrive in the digital age.
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
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center hover:text-indigo-600 transition-colors duration-300">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-full text-sm bg-white/20 text-blue-800 backdrop-blur-sm hover:bg-white/30 hover:text-indigo-500 transition-all duration-300 cursor-pointer flex items-center"
                      >
                        {tech.icon}
                        {tech.name}
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
              <h2 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-800 mb-8 group-hover:text-indigo-500 transition-colors duration-300">
                Let's work together to bring your ideas to life.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-blue-900 font-semibold overflow-hidden transition-all duration-300 hover:bg-white/30 hover:text-indigo-600 hover:scale-105"
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
    </PageTransition>
  );
};

export default About;
