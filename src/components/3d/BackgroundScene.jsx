import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Torus, Sphere } from '@react-three/drei';

const GlowingSphere = ({ position, scale, color, speed }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
    meshRef.current.rotation.y = t * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={color}
        opacity={0.08}
        transparent
        shininess={20}
      />
    </mesh>
  );
};

const AbstractShape = ({ position, rotation, scale }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.2) * 0.1;
    meshRef.current.rotation.y = rotation[1] + t * 0.1;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.3) * 0.2;
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 3, 0.2]}
      radius={0.1}
      smoothness={4}
      position={position}
      scale={scale}
    >
      <meshPhongMaterial
        color="#000000"
        opacity={0.8}
        transparent
      />
    </RoundedBox>
  );
};

const FloatingRing = ({ position, rotation, scale }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.3) * 0.1;
    meshRef.current.rotation.y = rotation[1] + t * 0.15;
    meshRef.current.position.y = position[1] + Math.cos(t * 0.4) * 0.2;
  });

  return (
    <Torus
      ref={meshRef}
      args={[1, 0.3, 16, 32]}
      position={position}
      scale={scale}
    >
      <meshPhongMaterial
        color="#000000"
        opacity={0.8}
        transparent
      />
    </Torus>
  );
};

const BackgroundScene = () => {
  return (
    <>
      {/* Left side shapes */}
      <AbstractShape 
        position={[-12, 4, -8]} 
        rotation={[0.5, 1, 0]}
        scale={1.5}
      />
      <AbstractShape 
        position={[-15, -3, -10]} 
        rotation={[-0.3, 0.5, 0.2]}
        scale={1.2}
      />
      <AbstractShape 
        position={[-8, 0, -6]} 
        rotation={[0.2, -0.5, 0.1]}
        scale={1}
      />

      {/* Right side shapes */}
      <AbstractShape 
        position={[14, 2, -9]} 
        rotation={[-0.4, -0.8, 0.1]}
        scale={1.3}
      />
      <AbstractShape 
        position={[10, -4, -7]} 
        rotation={[0.3, 0.6, -0.2]}
        scale={1.1}
      />
      <AbstractShape 
        position={[16, -1, -11]} 
        rotation={[-0.2, 0.4, 0.3]}
        scale={1.4}
      />

      {/* Floating rings distributed */}
      <FloatingRing
        position={[-10, 6, -8]}
        rotation={[0.5, 0, 0.2]}
        scale={1.2}
      />
      <FloatingRing
        position={[12, 5, -9]}
        rotation={[-0.3, 0.2, -0.1]}
        scale={1}
      />
      <FloatingRing
        position={[-6, -5, -7]}
        rotation={[0.2, -0.3, 0.1]}
        scale={0.8}
      />
      <FloatingRing
        position={[8, -2, -6]}
        rotation={[-0.4, 0.1, 0.2]}
        scale={1.1}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a192f', 8, 20]} />
    </>
  );
};

export default BackgroundScene;
