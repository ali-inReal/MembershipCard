import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import multi from "./../../assets/p.jpg"
import { useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { MeshStandardMaterial } from 'three'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import fo from "./../../assets/Roboto_Regular.typeface.json"
export function Card2(props) {
    const group = useRef()
    useFrame((state, delta) => (group.current.rotation.y += delta / 3))
    //   useEffect(
    //     ()=>{
    //         group.current.rotation.y += Math.PI/2
    //     }
    //   )
    const { nodes, materials, animations } = useGLTF('/CARD 3.glb')
    const { actions } = useAnimations(animations, group)
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/text.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])

    const profileImage = useTexture(props.profileImage)
    const font = new FontLoader().parse(fo)
    return (//1, -0.18, 1.43
        <group scale={1.5} ref={group} dispose={null}>
            <group name="final_for_render_">
                <group name="base_parent_" position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.73}>
                    <mesh name="backHeart" geometry={nodes.backHeart.geometry} material={materials.QR} position={[-0.78, -0.04, 1.61]} rotation={[0, 0, -Math.PI]} scale={[0.65, 2.95, 0.65]} />
                    <mesh name="backLogo" geometry={nodes.backLogo.geometry} material={materials['Material.007']} position={[-0.22, -0.06, 0]} rotation={[Math.PI, 0, 0]} scale={[-2.27, -3.2, -2.27]} />
                    <mesh name="backText1" material-color={props.textColor} material={materials.text} position={[1.05, -0.04, 1.49]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                        <textGeometry args={[props.name, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="backText2"  material={materials.text} position={[1.05, -0.05, 1.63]} rotation={[-Math.PI / 2, Math.PI, 0]} >
                    <textGeometry args={[props.member+" Member", { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="BackText3"  material={materials.text} position={[1.05, -0.05, 1.75]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                    <textGeometry args={["Joined "+props.joinDate, { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="backText4" material={materials.text} position={[0.49, -0.05, 1.85]} rotation={[-Math.PI, 0, 0]} scale={[-0.1, -1.08, -0.1]} />
                    <mesh name="forwardQR" geometry={nodes.forwardQR.geometry} material={materials.text} position={[0.8, 0.04, 1.66]} scale={[0.57, 2.34, 0.57]} >
                        {/* <meshBasicMaterial map={colorMap} /> */}
                    </mesh>
                    <mesh name="forwardText1" material={materials.text} position={[-0.12, 0.04, 1.39]} scale={[0.11, 1.6, 0.11]} />
                    <mesh name="forwardText2" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.51]}  >
                        <textGeometry args={[props.name, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText3" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.65]}  >
                        <textGeometry args={[props.location, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText4" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.77]}  >
                        <textGeometry args={[props.actOfKindness, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText5" material={materials.text} position={[-0.74, 0.05, 1.87]} scale={[0.1, 1.57, 0.1]} />
                    <mesh name="profile" rotation={[0, 89.55, 0]} geometry={nodes.profile.geometry} position={[0.02, 0.05, -0.15]} scale={[0.77, 0.05, 0.77]} >
                        <meshStandardMaterial reflectivity={0} map={profileImage} toneMapped={false} transparent={false} opacity={1} />
                    </mesh>
                    <mesh name="RoundBorder" geometry={nodes.RoundBorder.geometry} material={materials['Material.007']} position={[0.02, 0.089, -0.15]} scale={[0.71, 0.05, 0.71]} />
                </group>
                <mesh name="bottomHalf" material-color={props.bodyColor==""?"":props.bodyColor}  geometry={nodes.bottomHalf.geometry} material={materials['Material.007']} position={[0, -1.3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.49, 0.48, 0.22]} />
                <mesh name="cardBody" geometry={nodes.cardBody.geometry} material={materials.body} position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.84, 0.48, 1.12]} >
                    <meshBasicMaterial toneMapped={false}>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    </meshBasicMaterial>
                </mesh>
                <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.004']} position={[-0.01, 0.91, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
            </group>
        </group>
    )
}

useGLTF.preload('/CARD 3.glb')
