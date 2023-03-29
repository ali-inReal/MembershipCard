
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import model from "./../../../assets/arrow.glb"
const Arrow = ({liked,handleLike,shared,handleShare}) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  const [hovered, setHovered] = useState(false);
  


  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group

      ref={group} dispose={null}>
      <group name="final_for_render_">
        <group 
        onPointerOver={() => { setHovered(true) }}
        onPointerOut={() => { setHovered(false) }} 
        onClick={()=>handleShare()}
        name="Colorful_glowing_arrow_09" 
        position={[0.67, 0.87, 0.03]}>
          <mesh name="Colorful_glowing_arrow09" geometry={nodes.Colorful_glowing_arrow09.geometry}  position={[-0.04, 0, 0]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.2} >
          <meshStandardMaterial color={shared?"orange":"white"} transparent />
          </mesh>
        </group>
        <mesh 
        onPointerOver={() => { setHovered(true) }}
        onPointerOut={() => { setHovered(false) }} 
        name="Circle002" 
        geometry={nodes.Circle002.geometry}  
        position={[-0.66, 0.87, 0.02]} 
        rotation={[Math.PI / 2, 0, Math.PI]}
        onClick={()=>{handleLike()}}
        scale={0.04} >
          
          <meshStandardMaterial color={liked?"red":"white"} transparent />
          
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload(model)
export default Arrow