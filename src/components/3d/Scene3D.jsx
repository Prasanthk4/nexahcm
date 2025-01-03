import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const Model = ({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(path);
  return (
    <motion.primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      animate={{
        rotateY: rotation[1] + Math.PI * 2,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

const Scene3D = ({
  children,
  cameraPosition = [0, 0, 5],
  background = '#000000',
  enableZoom = false,
  enablePan = false,
  autoRotate = true,
  enableStars = true,
}) => {
  return (
    <Canvas
      camera={{ position: cameraPosition }}
      style={{ background }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        {enableStars && <Stars depth={50} count={5000} factor={4} />}
        {children}
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={enableZoom}
        enablePan={enablePan}
        autoRotate={autoRotate}
        autoRotateSpeed={1}
      />
    </Canvas>
  );
};

export { Scene3D, Model };
