/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 industrial_robot.glb
Author: jacuo777 (https://sketchfab.com/jacuo777)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/industrial-robot-e5e6703e7788417e9761eb4dc516de5a
Title: Industrial Robot
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function IndustrialRobot(props) {
  const { nodes, materials } = useGLTF("/industrial_robot.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.5}>
        <group
          position={[0, -6.6, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.foundation_low_base_0.geometry}
            material={materials.base}
          />
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
        </group>
        <group
          position={[0.33, 12.67, 0.33]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <group position={[-0.11, 0.1, 0.14]}>
            <mesh
              geometry={nodes.engine2_low_Engine_0.geometry}
              material={materials.Engine}
            />
            <mesh
              geometry={nodes.Cylinder004_Engine_0.geometry}
              material={materials.Engine}
            />
          </group>
          <group
            position={[0.02, -0.17, 0.24]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          >
            <mesh
              geometry={nodes.engine_low_Engine_0.geometry}
              material={materials.Engine}
            />
            <mesh
              geometry={nodes.Cylinder005_Engine_0.geometry}
              material={materials.Engine}
            />
          </group>
          <mesh
            geometry={nodes.Base_low_arm_0.geometry}
            material={materials.material}
          />
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
        <group
          position={[14.47, 36.9, 17.46]}
          rotation={[-0.97, 0, 0]}
          scale={100}
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
        </group>
        <group
          position={[5.91, 66.94, -31.83]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.arm2_low_arm_0.geometry}
            material={materials.material}
          />
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
        </group>
        <group
          position={[-3.11, 75.34, 46.28]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.ToolRotation_low_tool_0.geometry}
            material={materials.tool}
          />
          <mesh
            geometry={nodes.Tool_low_tool_0.geometry}
            material={materials.tool}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/industrial_robot.glb");