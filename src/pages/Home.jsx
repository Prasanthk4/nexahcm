import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import BackgroundScene from '../components/3d/BackgroundScene';
import { OrbitControls, Float, Sphere } from '@react-three/drei';

const FloatingElement = () => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial 
          color="#4F46E5"
          opacity={0.5}
          transparent
          wireframe
        />
      </Sphere>
    </Float>
  );
};

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* 3D Canvas Background */}
        <div className="absolute inset-0 opacity-40">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <group>
              <FloatingElement position={[-2, 1, 0]} />
              <FloatingElement position={[2, -1, -2]} />
              <FloatingElement position={[0, -2, -4]} />
            </group>
          </Canvas>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We create cutting-edge software solutions that drive business growth
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium
                        shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40
                        transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm
                          border border-white/20 shadow-lg hover:shadow-xl
                          transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-indigo-600
                              rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
