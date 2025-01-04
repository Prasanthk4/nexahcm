import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import BackgroundScene from '../components/3d/BackgroundScene';

const Home = () => {
  const floatingElements = [
    {
      initial: { x: 0, y: 0 },
      animate: { x: 100, y: 100 },
      duration: 2,
      left: '50%',
      top: '50%',
      size: 100,
    },
    {
      initial: { x: 0, y: 0 },
      animate: { x: -100, y: -100 },
      duration: 2,
      left: '25%',
      top: '25%',
      size: 150,
    },
    {
      initial: { x: 0, y: 0 },
      animate: { x: 200, y: 200 },
      duration: 2,
      left: '75%',
      top: '75%',
      size: 200,
    },
  ];

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* 3D Background */}
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className="absolute"
                initial={element.initial}
                animate={element.animate}
                transition={{
                  duration: element.duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: element.left,
                  top: element.top,
                  width: element.size,
                  height: element.size,
                }}
              >
                <div className="w-full h-full bg-slate-700/20 rounded-full backdrop-blur-sm border border-slate-600/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transforming Ideas into
              <br />
              Digital Reality
            </motion.h1>
            
            <motion.p
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We create cutting-edge software solutions that drive business growth
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative z-10 py-20 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
