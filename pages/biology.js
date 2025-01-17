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

const contentData = {
  human: (
    <>
      <h3 className="text-xl font-bold mb-2">Overview of the Human Body</h3>
      <p>The human body is a complex structure comprising multiple interdependent systems that maintain life and functionality:</p>
      <h4 className="text-lg font-semibold mt-4">Major Systems</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Skeletal System</b>: Provides structure and support, protects vital organs, and enables movement.</li>
        <li><b>Muscular System</b>: Facilitates movement and posture, and generates heat.</li>
        <li><b>Circulatory System</b>: Transports oxygen, nutrients, and waste through the blood.</li>
        <li><b>Respiratory System</b>: Enables gas exchange (oxygen intake and carbon dioxide release).</li>
        <li><b>Digestive System</b>: Breaks down food to absorb nutrients and eliminate waste.</li>
        <li><b>Nervous System</b>: Coordinates bodily functions via the brain, spinal cord, and nerves.</li>
        <li><b>Endocrine System</b>: Regulates hormones and metabolic activities.</li>
        <li><b>Reproductive System</b>: Responsible for producing offspring.</li>
        <li><b>Urinary System</b>: Maintains fluid balance and eliminates waste through urine.</li>
        <li><b>Integumentary System</b>: Protects the body with skin, hair, and nails.</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Fascinating Facts</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>The human body contains about <b>37.2 trillion cells</b>.</li>
        <li>The <b>heart beats over 100,000 times a day</b>, pumping around 5 liters of blood per minute.</li>
        <li>The <b>largest organ</b> is the skin, covering about 20 square feet.</li>
        <li>The <b>small intestine</b> is about 20 feet long, aiding in nutrient absorption.</li>
      </ul>
    </>
  ),
  heart: (
    <>
      <h3 className="text-xl font-bold mb-2">Human Heart: Anatomy Overview</h3>
      <h4 className="text-lg font-semibold mt-4">Function</h4>
      <p>Pumps oxygenated blood to the body and deoxygenated blood to the lungs.</p>
      <h4 className="text-lg font-semibold mt-4">Chambers</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Right Atrium</b>: Receives deoxygenated blood.</li>
        <li><b>Right Ventricle</b>: Pumps blood to the lungs.</li>
        <li><b>Left Atrium</b>: Receives oxygenated blood.</li>
        <li><b>Left Ventricle</b>: Pumps oxygenated blood to the body.</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Major Vessels</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Aorta</b>: Carries oxygenated blood from the heart.</li>
        <li><b>Pulmonary Arteries</b>: Carry blood to the lungs.</li>
        <li><b>Vena Cava</b>: Returns deoxygenated blood to the heart.</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Valves</h4>
      <p>Prevent backflow of blood:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Tricuspid</li>
        <li>Pulmonary</li>
        <li>Mitral</li>
        <li>Aortic</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Did You Know?</h4>
      <p>The human heart beats approximately <b>100,000 times per day</b>, circulating around <b>5 liters of blood per minute</b>!</p>
    </>
  ),
  brain: (
    <>
      <h3 className="text-xl font-bold mb-2">Skull Anatomy Overview</h3>
      <h4 className="text-lg font-semibold mt-4">Key Features</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><b>Cranium</b>: Protects the brain and supports facial structures.</li>
        <li><b>Facial Bones</b>: Include the maxilla (upper jaw) and mandible (lower jaw).</li>
        <li><b>Sutures</b>: Immovable joints connecting skull bones, such as the coronal and sagittal sutures.</li>
        <li><b>Foramina</b>: Openings for nerves and blood vessels, e.g., the foramen magnum.</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Functions</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Encloses and safeguards the brain.</li>
        <li>Provides attachment points for muscles.</li>
        <li>Houses the sensory organs (eyes, ears, nose).</li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Interesting Fact</h4>
      <p>The adult skull consists of 22 bones that are fused except for the mandible, which is movable.</p>
    </>
  ),
  frontBody: (
    <>
      <h3 className="text-xl font-bold mb-2">Human Musculature Overview</h3>
      <h4 className="text-lg font-semibold mt-4">Muscular System</h4>
      <p>The image depicts the muscular system of the human body, showcasing key muscle groups and their anatomical positions.</p>
      <h4 className="text-lg font-semibold mt-4">Primary Focus</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Chest muscles: <b>Pectoralis major</b></li>
        <li>Arm muscles: <b>Biceps, triceps</b></li>
        <li>Leg muscles: <b>Quadriceps, hamstrings</b></li>
        <li>Core muscles: <b>Abdominals, obliques</b></li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Purpose</h4>
      <p>To aid in understanding human anatomy for education, medical studies, or fitness training.</p>
      <h4 className="text-lg font-semibold mt-4">Applications</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Medical education</li>
        <li>Physiotherapy</li>
        <li>Fitness and strength training</li>
      </ul>
    </>
  ),
};

export default function BiologyPage() {
  const [model, setModel] = useState("human");

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-gray-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Body Model Viewer</h1>
        <button className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500">Settings</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-24 bg-gray-700 text-white flex flex-col items-center py-6 space-y-6">
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full hover:bg-gray-500 flex items-center justify-center text-xl"
            onClick={() => setModel("human")}
          >
            🦴
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full hover:bg-gray-500 flex items-center justify-center text-xl"
            onClick={() => setModel("frontBody")}
          >
            💪
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full hover:bg-gray-500 flex items-center justify-center text-xl"
            onClick={() => setModel("heart")}
          >
            🫀
          </button>
          <button 
            className="w-16 h-16 bg-gray-600 rounded-full hover:bg-gray-500 flex items-center justify-center text-xl"
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
