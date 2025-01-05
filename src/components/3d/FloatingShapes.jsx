import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';

const FloatingShapes = () => {
  const sphere = useRef();
  const torus = useRef();
  const box = useRef();

  useFrame((state, delta) => {
    sphere.current.rotation.x += delta * 0.2;
    sphere.current.rotation.y += delta * 0.2;
    
    torus.current.rotation.x += delta * 0.3;
    torus.current.rotation.y += delta * 0.3;
    
    box.current.rotation.x += delta * 0.1;
    box.current.rotation.y += delta * 0.1;
  });

  return (
    <group>
      <Sphere ref={sphere} args={[1, 32, 32]} position={[-4, 2, 0]}>
        <meshStandardMaterial color="#60A5FA" opacity={0.6} transparent />
      </Sphere>

      <Torus ref={torus} args={[1.5, 0.3, 16, 32]} position={[4, -2, -2]}>
        <meshStandardMaterial color="#818CF8" opacity={0.7} transparent />
      </Torus>

      <Box ref={box} args={[1.5, 1.5, 1.5]} position={[0, 3, -1]}>
        <meshStandardMaterial color="#38BDF8" opacity={0.5} transparent />
      </Box>
    </group>
  );
};

export default FloatingShapes;
