import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover3D = false,
  onClick,
  ...props 
}) => {
  const baseClasses = "rounded-xl backdrop-blur-md transition-all duration-300";
  
  const variants = {
    default: "bg-gray-800/30 border border-gray-700/50",
    glass: "glass-effect",
    solid: "bg-gray-800",
    gradient: "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
  };

  const hoverEffect = hover3D ? 'card-3d' : 'hover:transform hover:-translate-y-1';

  return (
    <motion.div
      whileHover={!hover3D ? { y: -5 } : {}}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${hoverEffect}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-gray-700/50 ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 border-t border-gray-700/50 ${className}`}>
    {children}
  </div>
);

export default Card;
