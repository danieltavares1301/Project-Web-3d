import { ARButton, XR } from "@react-three/xr";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EquipamentoAlumar } from "../../components/equipamentoAlumar";

export default function EquipamentoAr() {
  return (
    <>
      <ARButton />
      <Canvas
        camera={{ fov: 70, position: [80, 20, 55] }}
        style={{ height: 600 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight intensity={1} position={[0, 0, 50]} />
          <directionalLight intensity={1} position={[0, 0, -50]} />
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
          <XR>
            <EquipamentoAlumar />
          </XR>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
