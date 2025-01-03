import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const LoadingBar = () => {
  const controls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    controls.set({ scaleX: 0 });
    controls.start({
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    });
  }, [location.pathname]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
      animate={controls}
    />
  );
};

export default LoadingBar;
