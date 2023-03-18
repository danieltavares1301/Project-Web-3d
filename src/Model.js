import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import "./index.css";

export default function Model({ ...props }) {
  const [sizeT, setSizeT] = useState(false);

  const group = useRef();
  const { nodes, materials } = useGLTF("/demo-text.glb");

  /* useFrame(({ clock }) => {
    group.current.rotation.x = clock.getElapsedTime();
  }); */
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <mesh
          geometry={nodes["3D_Text_-_D"].geometry}
          material={nodes["3D_Text_-_D"].material}
          position={[-20.49, 1.55, 0.32]}
          scale={0.21}
        >
          <meshPhysicalMaterial color="#aaa" />
        </mesh>
        <mesh
          geometry={nodes["3D_Text_-_e"].geometry}
          material={nodes["3D_Text_-_e"].material}
          position={[-14.18, 1.55, 0.12]}
          scale={0.21}
        />
        <mesh
          geometry={nodes["3D_Text_-_e_1"].geometry}
          material={nodes["3D_Text_-_e_1"].material}
          position={[8.09, 1.55, 0.12]}
          scale={0.21}
        />
        <mesh
          geometry={nodes["3D_Text_-_m"].geometry}
          material={nodes["3D_Text_-_m"].material}
          position={[-10.13, 1.55, 0.12]}
          scale={0.21}
        />
        <mesh
          geometry={nodes["3D_Text_-_o"].geometry}
          material={nodes["3D_Text_-_o"].material}
          position={[-2.81, 1.55, 0.12]}
          scale={0.21}
        />
        <mesh
          geometry={nodes["3D_Text_-_T"].geometry}
          material={nodes["3D_Text_-_T"].material}
          position={[3.18, 1.55, 0.12]}
          scale={sizeT ? 0.3 : 0.21}
          onClick={() => setSizeT(!sizeT)}
        />
        <mesh
          geometry={nodes["3D_Text_-_x"].geometry}
          material={nodes["3D_Text_-_x"].material}
          position={[12.13, 1.55, 0.12]}
          scale={0.21}
        />
        <mesh
          geometry={nodes["3D_Text_-_t"].geometry}
          material={nodes["3D_Text_-_t"].material}
          position={[16.06, 1.55, 0.12]}
          scale={0.21}
        />
      </group>
    </group>
  );
}
