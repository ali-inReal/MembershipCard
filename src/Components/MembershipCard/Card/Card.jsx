import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import roboto from "../../../assets/Roboto_Regular.typeface.json"
extend({TextGeometry})
export const Card=({profileImage,memberRank,joinDate,memberName,textColor,bodyColor,memberId,location,actOfKindness,rotation,showBackSide,backgroundVideo,rankColor})=> {
    const group = useRef()
    useFrame((state, delta) => (rotation?group.current.rotation.y += delta / 3:showBackSide?group.current.rotation.y=Math.PI:""))
    const { nodes, materials} = useGLTF('/CARD 3.glb')
    
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: backgroundVideo, crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])

    const profile = useTexture(profileImage)
    const font = new FontLoader().parse(roboto)
    return (
        <group scale={1.7} ref={group} dispose={null}>
            <group name="final_for_render_">
                <group name="base_parent_" position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.73}>
                    <mesh name="backHeart" geometry={nodes.backHeart.geometry} material={materials.QR} position={[-0.78, -0.04, 1.61]} rotation={[0, 0, -Math.PI]} scale={[0.65, 2.95, 0.65]} />
                    <mesh name="backLogo" geometry={nodes.backLogo.geometry} material={materials['Material.007']} position={[-0.22, -0.06, 0]} rotation={[Math.PI, 0, 0]} scale={[-2.27, -3.2, -2.27]} />
                    <mesh name="backText1" material-color={textColor?textColor:""} material={materials.text} position={[1.05, -0.04, 1.49]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                        <textGeometry args={[memberName, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="backText2"  material={materials.text} position={[1.05, -0.05, 1.63]} rotation={[-Math.PI / 2, Math.PI, 0]} >
                    <textGeometry args={[memberRank+" Member", { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="BackText3"  material={materials.text} position={[1.05, -0.05, 1.75]} rotation={[-Math.PI / 2, Math.PI, 0]}  >
                    <textGeometry args={["Joined "+joinDate, { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="backText4" material={materials.text} position={[1.05, -0.05, 1.87]} rotation={[-Math.PI / 2, Math.PI, 0]} >
                    <textGeometry args={["Memer Id #  "+memberId, { font, size: 0.09, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardQR" geometry={nodes.forwardQR.geometry} material={materials.text} position={[0.8, 0.04, 1.66]} scale={[0.57, 2.34, 0.57]} >
                        {/* <meshBasicMaterial map={colorMap} /> */}
                    </mesh>
                    <mesh name="forwardText1" material={materials.text} position={[-0.12, 0.04, 1.39]} scale={[0.11, 1.6, 0.11]} />
                    <mesh name="forwardText2" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.51]}  >
                        <textGeometry args={[memberName, { font, size: 0.15, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText3" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.65]}  >
                        <textGeometry args={[location, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText4" rotation={[4.6, 0, 0]} material={materials.text} position={[-1.03, 0.04, 1.77]}  >
                        <textGeometry args={[actOfKindness, { font, size: 0.1, height: 0.04, bewelThickness: 0.015, bewelSize: 0.003 }]} />
                    </mesh>
                    <mesh name="forwardText5" material={materials.text} position={[-0.74, 0.05, 1.87]} scale={[0.1, 1.57, 0.1]} />
                    <mesh name="profile" rotation={[0, 89.55, 0]} geometry={nodes.profile.geometry} position={[0.02, 0.05, -0.15]} scale={[0.77, 0.05, 0.77]} >
                        <meshStandardMaterial reflectivity={0} map={profile} toneMapped={false} transparent={false} opacity={1} />
                    </mesh>
                    <mesh name="RoundBorder" geometry={nodes.RoundBorder.geometry} material={materials['Material.007']} position={[0.02, 0.089, -0.15]} scale={[0.71, 0.05, 0.71]} />
                </group>
                <mesh name="bottomHalf" material-color={bodyColor?"":bodyColor}  geometry={nodes.bottomHalf.geometry} material={materials['Material.007']} position={[0, -1.3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.49, 0.48, 0.22]} />
                <mesh name="cardBody" geometry={nodes.cardBody.geometry} material={materials.body} position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.84, 0.48, 1.12]} >
                    <meshBasicMaterial toneMapped={false}>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    </meshBasicMaterial>
                </mesh>
                <mesh name="Circle" geometry={nodes.Circle.geometry} material-color={rankColor} material={materials['Material.004']} position={[-0.01, 0.91, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
            </group>
        </group>
    )
}

useGLTF.preload('/CARD 3.glb')

