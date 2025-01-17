import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import modelsConfig from './modelsConfig.json';

function ModelViewer({ modelKey }) {
  const { path, scale, position } = modelsConfig[modelKey];
  const { scene } = useGLTF(path, true);
  return <primitive object={scene} scale={scale} position={position} />;
}

export default function BiologyPage() {
  const [model, setModel] = useState("human");

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Body Viewer</h1>
        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500">Settings</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-20 bg-gray-700 text-white flex flex-col items-center py-6">
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("human")}>
            🦴
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("frontBody")}>
            💪
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("heart")}>
            🫀
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("brain")}>
            🧠
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("liver")}>
            🏵️
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("intestine")}>
            🏮
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl" onClick={() => setModel("reproductiveSystem")}>
            🔍
          </button>
        </div>

        {/* 3D Viewer Canvas */}
        <div className="flex-1 bg-gray-800 flex justify-center items-center h-full">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 20]} />
            <Suspense fallback={<Html><div className="text-white">Loading...</div></Html>}>
              <ModelViewer modelKey={model} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* Right Panel */}
        <div className="w-72 bg-gray-700 text-white p-4">
          <h2 className="text-lg mb-4">Tools</h2>
          <div className="space-y-4">
            {/* Tools Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
