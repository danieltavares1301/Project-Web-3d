import React from "react";
import { a } from "@react-spring/three";

export default function BaseMeioA({
  nodes,
  materials,
  baseMeioASpring,
  baseMeioClicked,
  setBaseMeioClicked,
  TextObj,
  visibledAll,
}) {
  return (
    <a.group
      scale={baseMeioASpring.scale}
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
          isClicked={baseMeioClicked && (baseMeioClicked || !visibledAll)}
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
    </a.group>
  );
}
