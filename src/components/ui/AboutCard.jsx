import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const FloatingIcon = ({ color }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  );
};

const AboutCard = ({ title, description, icon, stats, color, gradient }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      {/* Background Glow */}
      <div className={`absolute -inset-0.5 ${gradient} opacity-60 blur-lg group-hover:opacity-85 transition duration-300 rounded-2xl`} />
      
      {/* Card Content */}
      <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 transition-all duration-300 group-hover:bg-white/15">
        {/* Icon Container */}
        <div className="h-28 mb-4 relative flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <FloatingIcon color={color} />
          </Canvas>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl flex items-center justify-center">{icon}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/30 hover:border-white/30 cursor-pointer"
              >
                <div className={`text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300`}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AboutCard;
