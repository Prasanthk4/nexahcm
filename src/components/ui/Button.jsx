import React from 'react';
import '../../styles/animations.css';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white focus:ring-blue-500",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500",
    ghost: "text-blue-500 hover:bg-blue-500/10 focus:ring-blue-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  const newVariants = {
    default: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'bg-transparent hover:bg-blue-500/10',
  };

  const newBaseClasses = 'btn-glow font-medium text-sm px-5 py-2.5 text-center inline-flex items-center justify-center transition-all duration-300';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={`
        ${newBaseClasses}
        ${newVariants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span className="ml-2">Loading...</span>
        </>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </motion.button>
  );
};

export default Button;
