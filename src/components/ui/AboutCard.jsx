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
      <div className={`absolute -inset-0.5 ${gradient} opacity-50 blur-lg group-hover:opacity-75 transition duration-300 rounded-2xl`} />
      
      {/* Card Content */}
      <div className="relative bg-[#0B1120]/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/50">
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
        <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          {description}
        </p>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Hover Effects */}
        <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default AboutCard;
