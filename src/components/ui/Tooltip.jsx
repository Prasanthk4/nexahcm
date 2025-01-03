import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ 
  children, 
  content, 
  position = 'bottom',
  type = 'default',
  delay = 0,
  width = 'auto'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    'top': '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
    'top-left': '-top-2 left-0 -translate-y-full',
    'top-right': '-top-2 right-0 -translate-y-full',
    'bottom': '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
    'bottom-left': '-bottom-2 left-0 translate-y-full',
    'bottom-right': '-bottom-2 right-0 translate-y-full',
    'left': 'top-1/2 -left-2 -translate-x-full -translate-y-1/2',
    'right': 'top-1/2 -right-2 translate-x-full -translate-y-1/2'
  };

  const types = {
    'default': 'bg-gray-900/90 text-white',
    'info': 'bg-blue-500/90 text-white',
    'success': 'bg-green-500/90 text-white',
    'warning': 'bg-yellow-500/90 text-white',
    'error': 'bg-red-500/90 text-white'
  };

  const arrows = {
    'top': 'bottom-0 translate-y-1/2',
    'top-left': 'bottom-0 translate-y-1/2 left-4',
    'top-right': 'bottom-0 translate-y-1/2 right-4',
    'bottom': 'top-0 -translate-y-1/2',
    'bottom-left': 'top-0 -translate-y-1/2 left-4',
    'bottom-right': 'top-0 -translate-y-1/2 right-4',
    'left': 'right-0 translate-x-1/2',
    'right': 'left-0 -translate-x-1/2'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setTimeout(() => setIsVisible(true), delay)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setTimeout(() => setIsVisible(true), delay)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{ width }}
            className={`absolute ${positions[position]} z-50 px-3 py-2 text-sm rounded-lg whitespace-normal pointer-events-none ${types[type]}`}
          >
            {content}
            <div 
              className={`absolute ${arrows[position]} w-2 h-2 transform rotate-45 ${types[type]}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
