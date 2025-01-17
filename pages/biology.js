import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function HumanModel() {
  const { scene } = useGLTF("/models/scene.gltf"); // Replace with your model path
  return <primitive object={scene} scale={2} />;
}

function HeartModel() {
  const { scene } = useGLTF('/models/heart/scene.gltf'); // Load the GLTF file
  return <primitive object={scene} scale={2} />;
}

function BrainModel() {
  const { scene } = useGLTF('/models/human_skull/skull.gltf'); // Load the GLTF file
  return <primitive object={scene} scale={2} />;
}

function FrontBodyModel() {
  const { scene } = useGLTF('/models/front_body_anatomy/front_body.gltf'); // Load the GLTF file
  return <primitive object={scene} scale={2} />;
}

export default function BiologyPage() {
  const [model, setModel] = useState("human");

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Body Viewer</h1>
        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500">
          Settings
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-20 bg-gray-700 text-white flex flex-col items-center py-6">
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl">
            🦴
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl"
            onClick={() => setModel("frontBody")}
          >
            💪
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl"
            onClick={() => setModel("heart")}
          >
            🫀
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl"
            onClick={() => setModel("brain")}
          >
            🧠
          </button>
          <button className="w-16 h-16 bg-gray-600 rounded-full mb-4 hover:bg-gray-500 text-2xl">
            🍔
          </button>
        </div>

        {/* 3D Viewer Canvas */}
        <div className="flex-1 bg-gray-800 flex justify-center items-center h-full">
          <div className="w-full h-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 20]} />
              {model === "human" && <HumanModel />}
              {model === "heart" && <HeartModel />}
              {model === "brain" && <BrainModel />}
              {model === "frontBody" && <FrontBodyModel />}
              <OrbitControls />
            </Canvas>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-72 bg-gray-700 text-white p-4">
          <h2 className="text-lg mb-4">Tools</h2>
          <div className="space-y-4">
            <details className="bg-gray-600 p-4 rounded">
              <summary className="cursor-pointer">My Scenes</summary>
              {/* Content for My Scenes */}
            </details>
            <details className="bg-gray-600 p-4 rounded">
              <summary className="cursor-pointer">Zygote Scenes</summary>
              {/* Content for Zygote Scenes */}
            </details>
            <details className="bg-gray-600 p-4 rounded">
              <summary className="cursor-pointer">Hierarchy</summary>
              {/* Content for Hierarchy */}
            </details>
            <details className="bg-gray-600 p-4 rounded">
              <summary className="cursor-pointer">Annotations</summary>
              {/* Content for Annotations */}
            </details>
            <details className="bg-gray-600 p-4 rounded">
              <summary className="cursor-pointer">Tools</summary>
              {/* Content for Tools */}
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
