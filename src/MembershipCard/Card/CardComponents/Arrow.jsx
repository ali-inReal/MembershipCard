
import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import model from "./../../../assets/arrow.glb"
const Arrow=()=> {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
 
  return (
    <group ref={group}  dispose={null}>
      <group name="final_for_render_">
        <group name="Colorful_glowing_arrow_09" position={[0.67, 0.87, 0.03]}>
          <mesh name="Colorful_glowing_arrow09" geometry={nodes.Colorful_glowing_arrow09.geometry} material={materials['Material.007']} position={[-0.04, 0, 0]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.2} />
        </group>
        <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.007']} position={[-0.66, 0.87, 0.02]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.04} />
      </group>
    </group>
  )
}

useGLTF.preload(model)
export default Arrow