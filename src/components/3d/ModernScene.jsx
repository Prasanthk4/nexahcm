import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Torus, TorusKnot, Float, Sphere } from '@react-three/drei';

const ModernScene = () => {
  const torusRef = useRef();
  const torusKnotRef = useRef();
  const torusSmallRef = useRef();
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Different rotation speeds for each element
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.1;
    }

    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = t * 0.3;
      torusKnotRef.current.rotation.y = t * 0.2;
    }

    if (torusSmallRef.current) {
      torusSmallRef.current.rotation.x = t * 0.4;
      torusSmallRef.current.rotation.z = t * 0.3;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Large Torus - Far left */}
      <Float
        speed={1.5}
        rotationIntensity={0.6}
        floatIntensity={0.6}
        position={[-7, 1, -3]}
      >
        <Torus ref={torusRef} args={[1.2, 0.2, 16, 32]} rotation={[0.8, 0.5, 0.3]}>
          <MeshDistortMaterial
            color="#4f46e5"
            roughness={0.1}
            metalness={0.9}
            distort={0.2}
            speed={2}
          />
        </Torus>
      </Float>

      {/* TorusKnot - Far top right */}
      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={0.5}
        position={[6, 4, 2]}
      >
        <TorusKnot
          ref={torusKnotRef}
          args={[0.7, 0.2, 128, 16]}
          scale={0.8}
          rotation={[0.5, 0.8, 0.2]}
        >
          <MeshDistortMaterial
            color="#06b6d4"
            roughness={0.1}
            metalness={0.9}
            distort={0.2}
            speed={2}
          />
        </TorusKnot>
      </Float>

      {/* Small Torus - Far bottom */}
      <Float
        speed={2.5}
        rotationIntensity={0.7}
        floatIntensity={0.7}
        position={[2, -5, 3]}
      >
        <Torus ref={torusSmallRef} args={[0.8, 0.15, 16, 32]} scale={0.6} rotation={[0.4, 0, 0.6]}>
          <MeshDistortMaterial
            color="#818cf8"
            roughness={0.1}
            metalness={0.9}
            distort={0.3}
            speed={3}
          />
        </Torus>
      </Float>

      {/* Glowing Sphere - Far top left */}
      <Float
        speed={1.8}
        rotationIntensity={0.4}
        floatIntensity={0.4}
        position={[-5, 5, -1]}
      >
        <Sphere ref={sphereRef} args={[0.6, 32, 32]}>
          <MeshDistortMaterial
            color="#3b82f6"
            roughness={0.1}
            metalness={0.9}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Background glow effect - Far right */}
      <mesh position={[8, -3, -4]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

export default ModernScene;
