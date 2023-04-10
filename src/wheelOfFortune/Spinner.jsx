

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import model from "./../assets/spinner.glb"
import { useFrame } from '@react-three/fiber';
import * as THREE from "three"
import { extend } from '@react-three/fiber';
import { Selection,Select } from '@react-three/postprocessing';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { WheelOfFortune } from '.';

export function Spinner(props) {
  const { nodes, materials } = useGLTF(model)
  const meshRef = useRef();
  
  const mat = materials.outerLight
  
  const wheelRef = useRef(null);
  
  return (
    
  
    <group {...props} dispose={null}>
      <group position={[3.41, 1.69, 19.69]} rotation={[1.47, 0.02, -0.19]}>
        <PerspectiveCamera makeDefault={false} far={100} near={1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, 0, 4.52]}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <mesh material-metalness={1}  geometry={nodes.outerRingOfLight.geometry} material={materials.innerRing} rotation={[Math.PI / 2, 0, 0]} />
      <mesh material-color={[1.831,1.831,1.831]} material-toneMapped={false} geometry={nodes.gemPlaceholder.geometry}  material={materials.gemPlaceholder} position={[0, 3.2, 0.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.2} />
      <mesh geometry={nodes.Plane.geometry} material={materials.gemPlaceholder} position={[0, 3.0, 0.5]} rotation={[Math.PI / 2, 0, 0]} />
      // prizes here
     
      {/* <mesh material-color={[2,2,0]} material-toneMapped={false} geometry={nodes.gemLight1.geometry} material={materials.gemLight} position={[-0.19, 3.09, 0.36]} scale={0.06} /> */}
      <mesh geometry={nodes.gemLight2.geometry} material={materials.gemLight} position={[0.18, 3.09, 0.36]} scale={0.06} />
      <mesh geometry={nodes.backSide.geometry} material={materials.gemLight} rotation={[Math.PI / 2, 0, 0]} scale={2.72} />
      <mesh material-emissive={"red"} geometry={nodes.Center.geometry} material={materials.Center} position={[0, 0, 0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0.88, 0.38, 0.88]} />
      <mesh geometry={nodes.innerRing.geometry} material={materials.innerRing} position={[0, 0, 0.29]} rotation={[Math.PI / 2, 0, 0]} scale={0.91} />
      <mesh material-emissive={"white"} material-toneMapped={false} geometry={nodes.outerLight1.geometry} material={materials.outerLight} position={[1.6, 2.82, 0.28]} rotation={[-Math.PI / 2, 0.52, -Math.PI]} scale={0.36} />
      <mesh geometry={nodes.outerLight3.geometry} material={materials.outerLight} rotation={[-Math.PI / 2, 1.05, -Math.PI]} scale={0.36} />
      <mesh geometry={nodes.outerLight5.geometry} material={materials.outerLight} rotation={[Math.PI / 2, 1.04, 0]} scale={0.36} />
      <mesh geometry={nodes.outerLight6.geometry} material={materials.outerLight} rotation={[Math.PI / 2, 0, 0]} scale={0.36} />
      <mesh geometry={nodes.outerLight2.geometry} material={materials.outerLight} rotation={[1.57, 1.57, 0]} scale={0.36} />
      <mesh geometry={nodes.outerLight4.geometry} material={materials.outerLight} rotation={[Math.PI / 2, 0.52, 0]} scale={0.36} />
      <mesh  material={mat}  geometry={nodes.outerRing.geometry} position={[0, 0, 0.29]} rotation={[Math.PI / 2, 0, 0]} scale={2.91} >
      
      </mesh>
      <mesh geometry={nodes.Sphere023.geometry} material={materials.stone} position={[0, 3.2, 0.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.21} />
      <mesh  geometry={nodes.gemAtTop001.geometry}  position={[0.01, 3.2, 0.36]} rotation={[Math.PI / 2, 0, 0]} scale={0.19} >
       <meshBasicMaterial color={[4,0,0]} toneMapped={false} />
      </mesh>
      
      <mesh ref={meshRef} geometry={nodes.innerDiamond1.geometry} material={materials.Diamond}    position={[0, 0, 0.19]} rotation={[Math.PI / 2, 0, 0]} scale={0.08} >
      </mesh>
      
      <mesh geometry={nodes.innerDiamond3.geometry} material-color={[2,2,2]} material-toneMapped={false} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, -1.57, 0]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond2.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond4.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond5.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, -Math.PI / 6, 0]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond6.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[-Math.PI / 2, -Math.PI / 3, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond7.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[-Math.PI / 2, Math.PI / 6, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond8.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, Math.PI / 3, 0]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond9.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, -Math.PI / 3, 0]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond10.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[-Math.PI / 2, -Math.PI / 6, Math.PI]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond11.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[-Math.PI / 2, Math.PI / 3, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.innerDiamond12.geometry} material={materials.Diamond} position={[0, 0, 0.19]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={0.08} />
      <mesh material-color={[2,0,0]} geometry={nodes.display.geometry} material={materials.display} position={[-0.02, 0.02, 0.07]} rotation={[Math.PI / 2, 0, 0]} scale={1.35} />
      <mesh geometry={nodes.Sphere058.geometry} material={materials.stone} />
      <mesh material-metalness={1} geometry={nodes.Sphere058_1.geometry} material={materials.metal} />
   
    </group> 
    
    
  )
}

useGLTF.preload(model)
