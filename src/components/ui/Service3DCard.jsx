import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

const Service3DCard = React.memo(({ title, description, icon, features, gradient, iconColor, delay = 0 }) => {
  // Memoize variants to prevent recalculation
  const variants = useMemo(() => ({
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: [0.48, 0.15, 0.25, 0.96]
      }
    }
  }), [delay]);

  // Memoize hover animation
  const whileHover = useMemo(() => ({
    scale: 1.02,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.2
    }
  }), []);

  // Memoize tap animation
  const whileTap = useMemo(() => ({
    scale: 0.98
  }), []);

  return (
    <motion.div
      className="relative group"
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-15 transition-opacity duration-300`} />
      
      {/* Card content */}
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 group-hover:border-gray-700/50 transition-colors h-full">
        {/* Icon and title section */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Features list */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (index * 0.1) }}
              className="flex items-center text-gray-300"
            >
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Learn more button */}
        <motion.button
          className="mt-6 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
});

Service3DCard.displayName = 'Service3DCard';

export default Service3DCard;
