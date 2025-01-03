import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HoverCard = ({
  children,
  className = '',
  effect = 'lift',
  glowColor = 'rgba(99, 102, 241, 0.3)', // Primary blue color
  borderGradient = true,
  spotlight = true,
  tilt = true,
  glitch = false,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Handle mouse move for spotlight effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Calculate tilt transform
  const calculateTilt = (e) => {
    if (!cardRef.current || !tilt) return '';
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset tilt on mouse leave
  useEffect(() => {
    if (!isHovered && cardRef.current) {
      cardRef.current.style.transform = '';
    }
  }, [isHovered]);

  // Combine effect classes
  const effectClasses = [
    effect === 'lift' && 'hover-lift',
    effect === 'scale' && 'hover-scale',
    effect === 'border' && 'hover-border',
    effect === 'glow' && 'hover-glow',
    borderGradient && 'gradient-border',
    spotlight && 'spotlight',
    tilt && 'tilt-card',
    glitch && 'glitch-hover',
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-xl backdrop-blur-md
        bg-gray-800/30 border border-gray-700/50
        ${effectClasses}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      initial={false}
      animate={isHovered ? {
        scale: effect === 'scale' ? 1.05 : 1,
        boxShadow: effect === 'glow' ? `0 0 20px ${glowColor}` : 'none'
      } : {
        scale: 1,
        boxShadow: 'none'
      }}
      {...props}
    >
      {/* Spotlight gradient overlay */}
      {spotlight && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 70%)`
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Border gradient */}
      {borderGradient && (
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-[1px] bg-gray-800 rounded-xl" />
        </div>
      )}
    </motion.div>
  );
};

// Preset configurations
export const ServiceCard = (props) => (
  <HoverCard
    effect="lift"
    borderGradient
    spotlight
    tilt
    className="p-6"
    {...props}
  />
);

export const FeatureCard = (props) => (
  <HoverCard
    effect="scale"
    glowColor="rgba(139, 92, 246, 0.3)" // Purple glow
    spotlight
    className="p-6"
    {...props}
  />
);

export const TeamCard = (props) => (
  <HoverCard
    effect="border"
    spotlight
    glitch
    className="p-6 text-center"
    {...props}
  />
);

export default HoverCard;
