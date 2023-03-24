import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../../index.css";
import ButtonObj3D from "../../components/buttonObj3D";
import { IndustrialRobot } from "../../components/industrialRobot";
import { useNavigate } from "react-router-dom";

function IndustrialRobotPage() {
  const navigate = useNavigate();

  const [showPecas, setShowPecas] = useState(false);
  const [baseClicked, setBaseClicked] = useState(false);
  const [cilindroBaseClicked, setCilindroBaseClicked] = useState(false);
  const [cilindroPecaPrincClicked, setCilindroPecaPrincClicked] =
    useState(false);
  const [pecaRetaBracoClicked, setPecaRetaBracoClicked] = useState(false);
  const [ganchoBracoClicked, setGanchoBracoClicked] = useState(false);
  const [baseMeioClicked, setBaseMeioClicked] = useState(false);
  const [visibledAll, setVisibledAll] = useState(false);

  useEffect(() => {
    setVisibledAll(
      baseClicked ||
        cilindroBaseClicked ||
        cilindroPecaPrincClicked ||
        pecaRetaBracoClicked ||
        ganchoBracoClicked ||
        baseMeioClicked
    );
  }, [
    baseClicked,
    cilindroBaseClicked,
    cilindroPecaPrincClicked,
    pecaRetaBracoClicked,
    ganchoBracoClicked,
    baseMeioClicked,
  ]);

  const returnObjOriginal = () => {
    setBaseClicked(false);
    setCilindroBaseClicked(false);
    setCilindroPecaPrincClicked(false);
    setPecaRetaBracoClicked(false);
    setGanchoBracoClicked(false);
    setBaseMeioClicked(false);
    setVisibledAll(false);
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
            disabled={!visibledAll}
          />
          <ButtonObj3D
            title={"Montagem"}
            onClick={() => navigate("/montagem")}
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
            <IndustrialRobot
              baseClicked={baseClicked}
              setBaseClicked={setBaseClicked}
              cilindroBaseClicked={cilindroBaseClicked}
              setCilindroBaseClicked={setCilindroBaseClicked}
              cilindroPecaPrincClicked={cilindroPecaPrincClicked}
              setCilindroPecaPrincClicked={setCilindroPecaPrincClicked}
              ganchoBracoClicked={ganchoBracoClicked}
              setGanchoBracoClicked={setGanchoBracoClicked}
              pecaRetaBracoClicked={pecaRetaBracoClicked}
              setPecaRetaBracoClicked={setPecaRetaBracoClicked}
              setShowPecas={setShowPecas}
              setVisibledAll={setVisibledAll}
              visibledAll={visibledAll}
              baseMeioClicked={baseMeioClicked}
              setBaseMeioClicked={setBaseMeioClicked}
              showPecas={showPecas}
            />
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

export default IndustrialRobotPage;
