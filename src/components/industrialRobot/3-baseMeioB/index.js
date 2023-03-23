import { a } from "@react-spring/three";

export default function BaseMeioB({
  nodes,
  materials,
  baseMeioBSpring,
  setBaseMeioClicked,
}) {
  return (
    <a.group
      position={[14.47, 36.9, 17.46]}
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
  );
}
