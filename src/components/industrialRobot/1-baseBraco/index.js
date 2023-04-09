import React from "react";
import { a } from "@react-spring/three";

export default function BaseBraco({
  nodes,
  materials,
  baseSpring,
  baseClicked,
  setBaseClicked,
  TextObj,
  visibledAll,
}) {
  return (
    <a.group
      position={baseSpring.position}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={baseSpring.scale}
      onClick={() => {
        setBaseClicked(true);
      }}
    >
      <mesh
        geometry={nodes.foundation_low_base_0.geometry}
        material={materials.base}
      >
        <TextObj
          X={0.55}
          Y={0}
          Z={0.05}
          isClicked={baseClicked && (baseClicked || !visibledAll)}
          text={"Base XYZ"}
          scale={[1.1, 1.1, 1.1]}
          rotation={[1.6, 0, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.screw_low_base_0.geometry}
        material={materials.base}
        position={[0, 0, 0.07]}
      />
      <mesh
        geometry={nodes.screw2_low_base_0.geometry}
        material={materials.base}
        position={[0, 0, 0.16]}
      />
    </a.group>
  );
}
