import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import BackgroundScene from '../components/3d/BackgroundScene';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end development services from database design to user interface.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#bfdbfe] via-[#c7d2fe] to-[#e9d5ff]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/80 to-indigo-300/80 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/80 to-purple-300/80 rounded-full blur-3xl"></div>
        
        {/* Additional color accents */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-indigo-300/60 to-purple-300/60 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/60 to-violet-300/60 rounded-full blur-2xl"></div>
        
        {/* Floating elements with animation */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 top-1/3 w-48 h-48 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/40 to-violet-400/40 rounded-full blur-xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Transforming Ideas into Digital Reality
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            We create cutting-edge software solutions that drive business growth
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium
                       transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                       hover:from-indigo-600 hover:to-blue-500"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20
                       shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                       hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              <div className="w-12 h-12 mb-4 text-blue-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
