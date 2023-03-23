import { Suspense, useState, useEffect } from "react";
import { useSpring } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import "../../index.css";
import ButtonObj3D from "../../components/buttonObj3D";
import BaseBraco from "../../components/industrialRobot/1-baseBraco";

const TextObj = ({ isClicked, X, Y, Z, text, scale, rotation }) => {
  return (
    <Text
      scale={scale}
      color="white" // default
      anchorX="center" // default
      anchorY="middle" // default
      position={[X, Y, Z]}
      visible={isClicked}
      rotation={rotation}
    >
      {text}
    </Text>
  );
};

function Montagem() {
  const { nodes, materials } = useGLTF("/industrial_robot.glb");

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

  /*   const returnObjOriginal = () => {
    setBaseClicked(false);
    setCilindroBaseClicked(false);
    setCilindroPecaPrincClicked(false);
    setPecaRetaBracoClicked(false);
    setGanchoBracoClicked(false);
    setBaseMeioClicked(false);
    setVisibledAll(false);
  }; */

  const baseSpring = useSpring({
    position: showPecas ? [0, -19.6, 0] : [0, -6.6, 0],
    scale: baseClicked || !visibledAll ? 100 : 0,
  });

  /* const cilindroBaseSpring = useSpring({
    position: showPecas ? [-0.11, 0.1, 0.24] : [-0.11, 0.1, 0.14],
    scale: cilindroBaseClicked || !visibledAll ? 1 : 0,
  });

  const cilindroPecaPrincSpring = useSpring({
    position: showPecas ? [-0.15, -0.17, 0.24] : [0.02, -0.17, 0.24],
    scale: cilindroPecaPrincClicked || !visibledAll ? 1 : 0,
  });

  const pecaRetaBracoSpring = useSpring({
    position: showPecas ? [-5.91, 66.94, -31.83] : [5.91, 66.94, -31.83],
    scale: pecaRetaBracoClicked || !visibledAll ? 100 : 0,
  });

  const ganchoBracoSpring = useSpring({
    position: showPecas ? [-14.11, 75.34, 56.28] : [-3.11, 75.34, 46.28],
    scale: ganchoBracoClicked || !visibledAll ? 100 : 0,
  });

  const baseMeioASpring = useSpring({
    scale: baseMeioClicked || !visibledAll ? 1 : 0,
  });

  const baseMeioBSpring = useSpring({
    scale: baseMeioClicked || !visibledAll ? 100 : 0,
  }); */

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
          <ButtonObj3D title={"Anterior"} onClick={() => {}} />
          <ButtonObj3D title={"Próximo"} onClick={() => {}} />
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
            <group dispose={null}>
              <group scale={0.5}>
                <BaseBraco
                  baseClicked={baseClicked}
                  baseSpring={baseSpring}
                  materials={materials}
                  nodes={nodes}
                  setBaseClicked={setBaseClicked}
                  visibledAll={visibledAll}
                  TextObj={TextObj}
                />
              </group>
            </group>
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

export default Montagem;
