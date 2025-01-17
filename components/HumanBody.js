import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function HeartModel() {
  const { scene } = useGLTF('/models/heart/scene.gltf'); // Load the GLTF file
  return <primitive object={scene} scale={2} />;
}

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Container for the 3D Canvas */}
    
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <HeartModel />
          <OrbitControls />
        </Canvas>
      
    </div>
  );
}
