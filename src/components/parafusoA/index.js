/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 parafuso.glb
Author: 3D Scan (https://sketchfab.com/3DSCAN-2020)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/parafuso-screw-7c122638fdc6420490cafa94499bfe17
Title: PARAFUSO - SCREW
*/

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

const TextObj = ({ isClicked, X, Y, Z, text }) => {
  return (
    <Text
      scale={[20, 20, 20]}
      color="white" // default
      anchorX="center" // default
      anchorY="middle" // default
      position={[X, Y, Z]}
      visible={isClicked}
    >
      {text}
    </Text>
  );
};

export function ParafusoA({ isClicked, setIsClicked, visible, showPecas }) {
  const { nodes, materials } = useGLTF("/parafuso.glb");
  const mesh = useRef();
  const meshPhysicalMaterial = useRef();
  //let segundos = 0;

  // gira o parafuso se ele estiver selecionado
  useFrame(
    ({ clock }) =>
      (mesh.current.rotation.z = isClicked
        ? clock.getElapsedTime()
        : mesh.current.rotation.z)
  );

  /* const segundo = () => {
    //incrementa os segundos
    segundos++;
    if ((meshPhysicalMaterial.current.metalness = 0.9))
      meshPhysicalMaterial.current.metalness = 1.1;
    if (segundos === 3) {
      segundos = 0;
      if ((meshPhysicalMaterial.current.metalness = 1.1))
        meshPhysicalMaterial.current.metalness = 0.9;
    }
  };

  if (showPecas) setInterval(() => segundo(), 100); */

  // faz com que o parafuso mude de posição lentamente
  const meshSpring = useSpring({
    position: isClicked ? [0, 25, 0] : [0, -25, 0],
  });

  const groupSpring = useSpring({
    scale: visible ? [0.5, 0.4, 0.5] : [0, 0, 0],
  });

  const meshPSpring = useSpring({
    color: showPecas & !isClicked ? "#d6d66e" : "#aaa",
  });

  return (
    <a.group dispose={null} scale={groupSpring.scale} visible={visible}>
      <mesh>
        <TextObj
          X={15}
          Y={20}
          Z={0}
          isClicked={isClicked}
          text={"Parafuso XYZ"}
        />
        <TextObj
          X={16.2}
          Y={15}
          Z={0}
          isClicked={isClicked}
          text={"Tamanho: 10cm"}
        />
        <TextObj
          X={16.6}
          Y={10}
          Z={0}
          isClicked={isClicked}
          text={"Em estoque: SIM"}
        />
      </mesh>
      <a.mesh
        scale={meshSpring.scale}
        ref={mesh}
        geometry={nodes.Object_2.geometry}
        material={materials.PARAFUSO_material}
        rotation={[-Math.PI / -2, 0, 0]}
        position={meshSpring.position}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        <a.meshPhysicalMaterial
          ref={meshPhysicalMaterial}
          color={meshPSpring.color}
          roughness={0.2}
          metalness={0.9}
          reflectivity={0.5}
          iridescense={0.3}
          iridescenseIOR={1}
          iridescenseThicknessRange={[100, 1000]}
        />
      </a.mesh>
    </a.group>
  );
}

useGLTF.preload("/parafuso.glb");
