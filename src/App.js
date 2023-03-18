import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import "./index.css";
import { ModelA } from "./ModelA";
import Model from "./Model";
import { Parafuso } from "./Parafuso";

function App() {
  return (
    <div className="wrapper">
      <Canvas
        camera={{ fov: 70, position: [0, 0, 15] }}
        style={{ backgroundColor: "black", height: 400 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight intensity={1.2} position={[0, 0, 50]} />
          <directionalLight intensity={1.2} position={[0, 0, -50]} />
          <directionalLight intensity={0.5} position={[50, 0, 0]} />
          <directionalLight intensity={0.5} position={[-50, 0, 0]} />
          <spotLight
            position={[0, 25, 0]}
            angle={1.3}
            penumbra={1}
            castShadow
            intensity={2}
            shadowBias={-0.0001}
          />
          <ModelA />
          <Parafuso />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
