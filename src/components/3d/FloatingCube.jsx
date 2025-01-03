import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const FloatingSphere = () => {
  const sphere = useRef();
  const sphere2 = useRef();
  const sphere3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Main sphere gentle rotation
    sphere.current.rotation.z = t * 0.1;
    
    // Orbiting spheres
    sphere2.current.position.x = Math.sin(t * 0.4) * 2;
    sphere2.current.position.y = Math.cos(t * 0.4) * 2;
    
    sphere3.current.position.x = Math.sin(t * 0.4 + Math.PI) * 2;
    sphere3.current.position.y = Math.cos(t * 0.4 + Math.PI) * 2;
  });

  return (
    <group>
      {/* Main sphere */}
      <mesh ref={sphere} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#4f46e5"
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2}
        />
      </mesh>

      {/* Orbiting sphere 1 */}
      <mesh ref={sphere2} position={[2, 0, 0]} scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#06b6d4"
          roughness={0.1}
          metalness={0.9}
          distort={0.6}
          speed={4}
        />
      </mesh>

      {/* Orbiting sphere 2 */}
      <mesh ref={sphere3} position={[-2, 0, 0]} scale={0.4}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#818cf8"
          roughness={0.1}
          metalness={0.9}
          distort={0.6}
          speed={4}
        />
      </mesh>
    </group>
  );
};

export default FloatingSphere;
