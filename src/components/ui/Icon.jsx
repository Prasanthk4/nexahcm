import React from 'react';
import { motion } from 'framer-motion';

const Icon = ({ 
  icon: IconComponent,
  size = 'md',
  variant = 'default',
  className = '',
  animate = false,
  ...props 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variants = {
    default: 'text-gray-400',
    primary: 'text-blue-500',
    secondary: 'text-purple-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    gradient: 'text-gradient'
  };

  const animation = animate ? {
    initial: { scale: 1 },
    animate: { scale: [1, 1.1, 1] },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <motion.div
      className={`
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      {...animation}
      {...props}
    >
      {IconComponent && <IconComponent className="w-full h-full" />}
    </motion.div>
  );
};

// Predefined icon components
export const IconCircle = ({ className = '', ...props }) => (
  <div className={`rounded-full flex items-center justify-center ${className}`} {...props} />
);

export const IconGradient = ({ children, className = '' }) => (
  <div className={`bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent ${className}`}>
    {children}
  </div>
);

export const IconWithBadge = ({ icon: IconComponent, badgeContent, badgeColor = 'bg-red-500', size = 'md' }) => (
  <div className="relative">
    <Icon icon={IconComponent} size={size} />
    <span className={`absolute -top-1 -right-1 ${badgeColor} text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1`}>
      {badgeContent}
    </span>
  </div>
);

export const IconButton = ({ 
  icon: IconComponent,
  size = 'md',
  variant = 'default',
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = "rounded-full p-2 transition-all duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    default: 'bg-gray-700 hover:bg-gray-600 focus:ring-gray-500',
    primary: 'bg-blue-600 hover:bg-blue-500 focus:ring-blue-500',
    secondary: 'bg-purple-600 hover:bg-purple-500 focus:ring-purple-500'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <Icon icon={IconComponent} size={size} variant="default" />
    </motion.button>
  );
};

export default Icon;
