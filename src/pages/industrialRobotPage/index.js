import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../../index.css";
import ButtonObj3D from "../../components/buttonObj3D";
import { IndustrialRobot } from "../../components/industrialRobot";

function EquipamentoAlumarPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedB, setIsClickedB] = useState(false);
  const [showPecas, setShowPecas] = useState(false);

  const returnObjOriginal = () => {
    setIsClicked(false);
    setIsClickedB(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#28282e",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ButtonObj3D
            title={"Mostrar peças"}
            onClick={() =>
              showPecas ? setShowPecas(false) : setShowPecas(true)
            }
          />
          <ButtonObj3D
            title={"Sair do zoom"}
            onClick={() => returnObjOriginal()}
            disabled={!(isClicked | isClickedB)}
          />
        </div>
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
            <IndustrialRobot />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default EquipamentoAlumarPage;
