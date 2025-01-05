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
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#e8f2ff] via-white to-[#f0f5ff]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/60 to-blue-300/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/60 to-violet-300/30 rounded-full blur-3xl"></div>
        
        {/* Additional color accents */}
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-400/40 to-blue-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/40 to-violet-300/20 rounded-full blur-2xl"></div>
        
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
          className="absolute left-1/3 top-1/3 w-48 h-48 bg-gradient-to-br from-blue-400/30 to-blue-300/30 rounded-full blur-xl"
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
          className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-violet-300/20 rounded-full blur-xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center pt-32 pb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
          >
            Transforming Ideas into Digital Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            We create cutting-edge software solutions that drive business growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium
                       transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                       hover:from-blue-400 hover:to-blue-500"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
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
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-xl
                         border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
                         hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
                         transition-all duration-300 transform-gpu
                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br
                         before:from-blue-500/5 before:to-blue-400/5 before:opacity-0
                         before:transition-opacity before:duration-300 hover:before:opacity-100
                         after:absolute after:inset-0 after:rounded-2xl after:border-2
                         after:border-transparent after:bg-gradient-to-br
                         after:from-blue-500/10 after:to-blue-400/10
                         after:opacity-0 after:transition-opacity after:duration-300
                         hover:after:opacity-100 overflow-hidden"
              >
                {/* Floating 3D elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-300/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-violet-300/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon with animation */}
                <div className="relative w-16 h-16 mb-6 transform-gpu group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center text-blue-600 group-hover:text-blue-500 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="relative text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-20 h-20">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-xl backdrop-blur-sm"
          />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full bg-gradient-to-br from-blue-400/20 to-violet-300/10 rounded-full backdrop-blur-sm"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
