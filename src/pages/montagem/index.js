import { Suspense, useState, useEffect, useRef } from "react";
import { useSpring, a } from "@react-spring/three";
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

  const [proximo, setProximo] = useState(0);

  const queue = [
    "base",
    "baseMeio",
    "cilindroVertical",
    "cilindroHorizontal",
    "pecaRetaBraco",
    "gancho",
  ];

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

  const baseSpring = useSpring({
    position: showPecas ? [0, -19.6, 0] : [0, -6.6, 0],
    scale: queue.indexOf("base") <= proximo ? 100 : 0,
  });

  const cilindroBaseSpring = useSpring({
    position:
      queue.indexOf("cilindroVertical") === proximo
        ? [-0.11, 0.1, 0.34]
        : [-0.11, 0.1, 0.14],
    scale: queue.indexOf("cilindroVertical") <= proximo ? 1 : 0,
  });

  const cilindroPecaPrincSpring = useSpring({
    position:
      queue.indexOf("cilindroHorizontal") === proximo
        ? [-0.25, -0.17, 0.24]
        : [0.02, -0.17, 0.24],
    scale: queue.indexOf("cilindroHorizontal") <= proximo ? 1 : 0,
  });

  const pecaRetaBracoSpring = useSpring({
    position:
      queue.indexOf("pecaRetaBraco") === proximo
        ? [-8.91, 66.94, -31.83]
        : [5.91, 66.94, -31.83],
    scale: queue.indexOf("pecaRetaBraco") <= proximo ? 100 : 0,
  });

  const ganchoBracoSpring = useSpring({
    position:
      queue.indexOf("gancho") === proximo
        ? [-3.11, 75.34, 66.28]
        : [-3.11, 75.34, 46.28],
    scale: queue.indexOf("gancho") <= proximo ? 100 : 0,
  });

  /* 
      queue.indexOf("baseMeio") == proximo
        ? [(0.33, 13.67, 0.33)]
        :  */
  const baseMeioASpring = useSpring({
    position:
      queue.indexOf("baseMeio") === proximo
        ? [0.33, 37.67, 0.33]
        : [0.33, 12.67, 0.33],
    scale: queue.indexOf("baseMeio") <= proximo ? 100 : 0,
  });

  const baseMeioBSpring = useSpring({
    position:
      queue.indexOf("baseMeio") === proximo
        ? [14.47, 62.9, 17.46]
        : [14.47, 36.9, 17.46],
    scale: queue.indexOf("baseMeio") <= proximo ? 100 : 0,
  });

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
            title={"Anterior"}
            onClick={() => setProximo(proximo > 0.5 ? proximo - 1 : 0)}
          />
          <ButtonObj3D
            title={"Próximo"}
            onClick={() =>
              setProximo(
                proximo < queue.length && proximo !== 0
                  ? proximo + 0.5
                  : proximo === 0
                  ? proximo + 1
                  : proximo
              )
            }
          />
          <ButtonObj3D
            title={"Ocultar nome"}
            onClick={() => returnObjOriginal()}
            disabled={!visibledAll}
          />
          {/*  {gRef.current.position.y === 37.67 ? <div>dad</div> : null} */}
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
                <a.group
                  position={baseMeioASpring.position}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={baseMeioASpring.scale}
                >
                  {/* cilindro vertical */}
                  <a.group
                    position={cilindroBaseSpring.position}
                    scale={cilindroBaseSpring.scale}
                    onClick={() => {
                      setCilindroBaseClicked(true);
                    }}
                  >
                    <mesh
                      geometry={nodes.engine2_low_Engine_0.geometry}
                      material={materials.Engine}
                    >
                      <TextObj
                        X={-0.45}
                        Y={0}
                        Z={0.1}
                        isClicked={
                          cilindroBaseClicked &&
                          (cilindroBaseClicked || !visibledAll)
                        }
                        text={"Cilindro XYZ 1"}
                        scale={[1.1, 1.1, 1.1]}
                        rotation={[1.6, 0, 0]}
                      />
                    </mesh>
                    <mesh
                      geometry={nodes.Cylinder004_Engine_0.geometry}
                      material={materials.Engine}
                    />
                  </a.group>
                  <a.group
                    position={cilindroPecaPrincSpring.position}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={cilindroPecaPrincSpring.scale}
                    onClick={() => {
                      setCilindroPecaPrincClicked(true);
                    }}
                  >
                    <mesh
                      geometry={nodes.engine_low_Engine_0.geometry}
                      material={materials.Engine}
                    >
                      <TextObj
                        X={0}
                        Y={0}
                        Z={0.65}
                        isClicked={
                          cilindroPecaPrincClicked &&
                          (cilindroPecaPrincClicked || !visibledAll)
                        }
                        text={"Cilindro Horizontal XYZ"}
                        scale={[0.9, 1.1, 1.1]}
                        rotation={[3.15, -1.6, 0]}
                      />
                    </mesh>
                    <mesh
                      geometry={nodes.Cylinder005_Engine_0.geometry}
                      material={materials.Engine}
                    />
                  </a.group>
                  <group
                    scale={1}
                    onClick={() => {
                      setBaseMeioClicked(true);
                    }}
                  >
                    <mesh
                      geometry={nodes.Base_low_arm_0.geometry}
                      material={materials.material}
                    >
                      <TextObj
                        X={0.65}
                        Y={0}
                        Z={0.2}
                        isClicked={
                          baseMeioClicked && (baseMeioClicked || !visibledAll)
                        }
                        text={"Base Principal"}
                        scale={[1.1, 1.1, 1.1]}
                        rotation={[1.6, 0, 0]}
                      />
                    </mesh>
                    <mesh
                      geometry={nodes.BigCyl_low_arm_0.geometry}
                      material={materials.material}
                      position={[0.13, 0.16, 0.25]}
                      rotation={[Math.PI / 6, 0, 0]}
                    />
                    <mesh
                      geometry={nodes.decal_low_arm_0.geometry}
                      material={materials.material}
                      position={[0.22, -0.07, 0.12]}
                    />
                    <mesh
                      geometry={nodes.decal3_low_arm_0.geometry}
                      material={materials.material}
                      position={[0.02, -0.01, 0.13]}
                    />
                    <mesh
                      geometry={nodes.decal2_low_arm_0.geometry}
                      material={materials.material}
                      position={[0.22, 0.16, 0.25]}
                    />
                    <mesh
                      geometry={nodes.wire2_low_arm_0.geometry}
                      material={materials.material}
                      position={[-0.08, -0.07, 0.14]}
                      rotation={[0, 0, -1.22]}
                    />
                    <mesh
                      geometry={nodes.prop_low_arm_0.geometry}
                      material={materials.material}
                      position={[0.01, 0.09, 0.13]}
                    />
                    <mesh
                      geometry={nodes.wire_low_arm_0.geometry}
                      material={materials.material}
                      position={[-0.03, -0.08, 0.16]}
                      rotation={[0, 0, -1.22]}
                    />
                    <mesh
                      geometry={nodes.wire3_low_arm_0.geometry}
                      material={materials.material}
                      position={[-0.1, -0.05, 0.15]}
                      rotation={[0, 0, -1.22]}
                    />
                  </group>
                </a.group>
                <a.group
                  position={baseMeioBSpring.position}
                  rotation={[-0.97, 0, 0]}
                  scale={baseMeioBSpring.scale}
                  onClick={() => {
                    setBaseMeioClicked(true);
                  }}
                >
                  <mesh
                    geometry={nodes.arm_low_arm_0.geometry}
                    material={materials.material}
                  />

                  <mesh
                    geometry={nodes.decal4_low_arm_0.geometry}
                    material={materials.material}
                    position={[0.01, 0.29, 0.02]}
                  />
                  <mesh
                    geometry={nodes.BigWire_low_arm_0.geometry}
                    material={materials.material}
                    position={[0.05, -0.05, -0.11]}
                    rotation={[-0.6, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.screw3_low_arm_0.geometry}
                    material={materials.material}
                    rotation={[-0.6, -Math.PI / 2, 0]}
                  />
                  <mesh
                    geometry={nodes.screw4_low_arm_0.geometry}
                    material={materials.material}
                    position={[0, 0.58, -0.03]}
                    rotation={[-0.6, -Math.PI / 2, 0]}
                  />
                </a.group>
                <a.group
                  position={pecaRetaBracoSpring.position}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={pecaRetaBracoSpring.scale}
                  onClick={() => {
                    setPecaRetaBracoClicked(true);
                  }}
                >
                  <mesh
                    geometry={nodes.arm2_low_arm_0.geometry}
                    material={materials.material}
                  >
                    <TextObj
                      X={-0.35}
                      Y={0}
                      Z={0}
                      isClicked={
                        pecaRetaBracoClicked &&
                        (pecaRetaBracoClicked || !visibledAll)
                      }
                      text={"Braço"}
                      scale={[1.1, 1.1, 1.1]}
                      rotation={[1.65, 0, 0]}
                    />
                  </mesh>
                  <mesh
                    geometry={nodes.screw5_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.09, -0.16, 0.08]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  />
                  <mesh
                    geometry={nodes.wire4_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.15, -0.02, 0.07]}
                    rotation={[0, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.wire5_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.15, -0.02, 0.05]}
                    rotation={[0, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.wire6_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.16, -0.03, -0.01]}
                    rotation={[0, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.wire7_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.15, -0.03, -0.02]}
                    rotation={[0, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.screw6_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.09, -0.7, 0.08]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  />
                  <mesh
                    geometry={nodes.wire8_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.03, -0.12, 0.06]}
                    rotation={[0, 0, -1.22]}
                  />
                  <mesh
                    geometry={nodes.electricbox_low_arm_0.geometry}
                    material={materials.material}
                    position={[-0.05, 0.01, 0.13]}
                  />
                  <mesh
                    geometry={nodes.engine5_low_Engine_0.geometry}
                    material={materials.Engine}
                    position={[-0.06, 0, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.69}
                  />
                  <mesh
                    geometry={nodes.engine4_low_Engine_0.geometry}
                    material={materials.Engine}
                    position={[-0.13, -0.09, 0.06]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.6}
                  />
                  <mesh
                    geometry={nodes.engine3_low_Engine_0.geometry}
                    material={materials.Engine}
                    position={[-0.13, -0.09, 0.12]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.6}
                  />
                </a.group>
                <a.group
                  position={ganchoBracoSpring.position}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={ganchoBracoSpring.scale}
                  onClick={() => {
                    setGanchoBracoClicked(true);
                  }}
                >
                  <mesh
                    geometry={nodes.ToolRotation_low_tool_0.geometry}
                    material={materials.tool}
                  >
                    <TextObj
                      X={-0.35}
                      Y={0}
                      Z={0}
                      isClicked={
                        ganchoBracoClicked &&
                        (ganchoBracoClicked || !visibledAll)
                      }
                      text={"Gancho"}
                      scale={[1.1, 1.1, 1.1]}
                      rotation={[1.4, 0, 0]}
                    />
                  </mesh>
                  <mesh
                    geometry={nodes.Tool_low_tool_0.geometry}
                    material={materials.tool}
                  />
                </a.group>
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
