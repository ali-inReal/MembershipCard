import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import roboto from "../../assets/Roboto_Regular.typeface.json"
import Arrow from "./CardComponents/Arrow"
import { Text } from './CardComponents/Text'
import { CardBackground } from './CardComponents/CardBackground'
extend({ TextGeometry })
export const Card = ({ QRcode, profileImage, memberRank, joinDate, memberName, textColor, bodyColor, memberId, location, actOfKindness, rotation, showBackSide, backgroundVideo, rankColor }) => {

    const group = useRef()
    rotation?useFrame((state, delta) => {
        group.current.rotation.y += delta / 3
        
    }): showBackSide ? group.current.rotation.y = Math.PI : "";
    const { nodes, materials } = useGLTF('/compressed.glb')

    
    const colorMap = useTexture(QRcode)
    const profile = useTexture(profileImage)
    const font = new FontLoader().parse(roboto)
    console.log(materials["Material.007"])

    return (
        <group scale={1.7} ref={group} dispose={null}>
            <group name="final_for_render_">

                <group name="base_parent_" position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.73}>
                    <mesh name="backHeart" geometry={nodes.backHeart.geometry} material={materials.QR} position={[-0.78, -0.04, 1.61]} rotation={[0, 0, -Math.PI]} scale={[0.65, 2.95, 0.65]} />
                    <mesh name="backLogo" geometry={nodes.backLogo.geometry} material={materials['Material.007']} position={[-0.22, -0.06, 0]} rotation={[Math.PI, 0, 0]} scale={[-2.27, -3.2, -2.27]} />
                    
                    <mesh name="forwardQR" geometry={nodes.forwardQR.geometry} material={materials.forwardQR} position={[0.8, 0.04, 1.66]} rotation={[Math.PI, 0, 0]} scale={0.7} >
                        <meshStandardMaterial map={colorMap} />
                    </mesh>
                    <Text font={font} textMaterial={materials.text} memberId={memberId} memberRank={memberRank} joinDate={joinDate} textColor={textColor} memberName={memberName} location={location} actOfKindness={actOfKindness} />
                    <mesh name="profile" rotation={[0, 89.55, 0]} geometry={nodes.profile.geometry} position={[0.02, 0.05, -0.15]} scale={[0.77, 0.05, 0.77]} >
                        <meshStandardMaterial reflectivity={0} map={profile} toneMapped={false} transparent={false} opacity={1} />
                    </mesh>
                    <mesh name="RoundBorder" material-metalness={0.9} material-roughness={1} geometry={nodes.RoundBorder.geometry} material={materials['Material.007']} position={[0.02, 0.089, -0.15]} scale={[0.71, 0.05, 0.71]} />

                </group>
                <mesh name="bottomHalf" material-metalness={0.9} material-roughness={0.2} material-color={bodyColor ? "" : bodyColor} geometry={nodes.bottomHalf.geometry} material={materials['Material.007']} position={[0, -1.3, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.49, 0.48, 0.22]} >
                </mesh>
                <Arrow />
                
                <CardBackground bodyMaterial={materials.body} backgroundVideo={backgroundVideo} bodyGeometry={nodes.cardBody.geometry} />
                <mesh name="Circle" geometry={nodes.Circle.geometry} material-color={rankColor} material={materials['Material.004']} position={[-0.01, 0.91, 0.01]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
            </group>
        </group>
    )
}
useGLTF.preload('/compressed.glb')

