import React, { useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import modelsConfig from './modelsConfig.json';
import contentData from '../components/data'; 
import Link from 'next/link'

function ModelViewer({ modelKey }) {
  const { path, scale, position } = modelsConfig[modelKey];
  const { scene } = useGLTF(path, true);

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position}
    />
  );
}

export default function BiologyPage() {
  const [model, setModel] = useState("human");

  
  const [canvasKey, setCanvasKey] = useState(0);

  const handleModelChange = (newModel) => {
    setModel(newModel);
    setCanvasKey(prevKey => prevKey + 1);  // Change key to force re-render
  };
  
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Body Model Viewer</h1>
        <button className="bg-gray-600 px-4 py-2 rounded">
        <Link href={"/"} className="hover:bg-gray-500 text-white">Home</Link></button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-20 bg-gray-700 text-white flex flex-col items-center py-6">
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("human")}>
            🙍‍♂️
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("frontBody")}>
            💪
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("heart")}>
            🫀
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("brain")}>
            🧠
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("liver")}>
            🫁
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("intestine")}>
            🪢
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => handleModelChange("reproductiveSystem")}>
            🍌
          </button>
        </div>

        {/* 3D Viewer Canvas */}
        <div className="flex-1 bg-gray-300 flex justify-center items-center h-full">
          <Canvas key={canvasKey}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 20]} />
            <Suspense fallback={<Html><div className="text-white">Loading...</div></Html>}>
              <ModelViewer modelKey={model} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* Right Panel */}
        <div className="w-100 bg-gray-700 text-white p-6 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Details</h2>
          <div className="prose prose-invert text-sm">
            {contentData[model]}
          </div>
        </div>
      </div>
    </div>
  );
}
