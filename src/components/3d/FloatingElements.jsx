import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, RoundedBox, Sphere, Torus } from '@react-three/drei';

const HolographicCube = ({ position }) => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.5;
    groupRef.current.position.y = position[1] + Math.sin(t) * 0.1;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main cube */}
      <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={4}>
        <meshPhongMaterial
          color="#00ff88"
          opacity={0.1}
          transparent
          wireframe
        />
      </RoundedBox>
      
      {/* Inner elements */}
      {[0, 1, 2].map((i) => (
        <RoundedBox 
          key={i}
          args={[2 - i * 0.5, 2 - i * 0.5, 2 - i * 0.5]} 
          radius={0.1} 
          smoothness={4}
        >
          <meshPhongMaterial
            color="#00ff88"
            opacity={0.1 + i * 0.1}
            transparent
            wireframe
          />
        </RoundedBox>
      ))}
    </group>
  );
};

const EnergyRing = ({ position }) => {
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.5;
    ringRef.current.rotation.x = Math.sin(t * 0.5) * 0.5;
    ringRef.current.position.y = position[1] + Math.cos(t * 0.8) * 0.1;
  });

  return (
    <group ref={ringRef} position={position}>
      <Torus args={[1.5, 0.2, 16, 100]}>
        <meshPhongMaterial
          color="#4f46e5"
          emissive="#4f46e5"
          emissiveIntensity={0.5}
          opacity={0.7}
          transparent
        />
      </Torus>
      <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshPhongMaterial
          color="#4f46e5"
          emissive="#4f46e5"
          emissiveIntensity={0.5}
          opacity={0.5}
          transparent
        />
      </Torus>
    </group>
  );
};

const DataSphere = ({ position }) => {
  const sphereRef = useRef();
  const particlesRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sphereRef.current.rotation.y = t * 0.2;
    particlesRef.current.rotation.y = -t * 0.3;
    sphereRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={sphereRef} position={position}>
      {/* Core sphere */}
      <Sphere args={[1, 32, 32]}>
        <meshPhongMaterial
          color="#60a5fa"
          opacity={0.2}
          transparent
        />
      </Sphere>

      {/* Orbiting particles */}
      <group ref={particlesRef}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Sphere
            key={i}
            args={[0.05, 8, 8]}
            position={[
              Math.cos(i * Math.PI * 2 / 20) * 1.5,
              Math.sin(i * Math.PI * 2 / 20) * 1.5,
              0
            ]}
          >
            <meshPhongMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={0.5}
            />
          </Sphere>
        ))}
      </group>
    </group>
  );
};

const GradientSphere = ({ position, scale, color, speed }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.2;
    meshRef.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={color}
        opacity={0.05}
        transparent
        shininess={100}
      />
    </mesh>
  );
};

const BackgroundGlow = ({ position, scale, color }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.scale.x = scale + Math.sin(t * 0.5) * 0.1;
    meshRef.current.scale.y = scale + Math.cos(t * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color={color}
        opacity={0.1}
        transparent
        blending={2}
      />
    </mesh>
  );
};

const FloatingElements = () => {
  return (
    <>
      {/* Large gradient spheres */}
      <GradientSphere 
        position={[-8, 2, -15]} 
        scale={6} 
        color="#60a5fa"
        speed={0.3}
      />
      <GradientSphere 
        position={[8, -2, -15]} 
        scale={5} 
        color="#818cf8"
        speed={0.4}
      />
      <GradientSphere 
        position={[0, 4, -12]} 
        scale={4} 
        color="#34d399"
        speed={0.2}
      />

      {/* Background glows */}
      <BackgroundGlow
        position={[-5, 3, -10]}
        scale={8}
        color="#60a5fa"
      />
      <BackgroundGlow
        position={[5, -3, -10]}
        scale={7}
        color="#818cf8"
      />
      <BackgroundGlow
        position={[0, 0, -8]}
        scale={10}
        color="#34d399"
      />

      {/* Innovative Tech Elements */}
      <HolographicCube position={[-4, 0, -5]} />
      <EnergyRing position={[4, 1, -6]} />
      <DataSphere position={[0, -1, -4]} />
      <HolographicCube position={[5, 2, -7]} />
      <DataSphere position={[-5, -2, -6]} />
      <EnergyRing position={[3, 0, -5]} />

      {/* Subtle ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a192f', 8, 30]} />
    </>
  );
};

export default FloatingElements;
