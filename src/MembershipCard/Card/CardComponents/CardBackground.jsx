import React from 'react'
import { useState, useEffect } from 'react'
import * as THREE from "three"

export const CardBackground = ({ bodyGeometry, bodyMaterial, backgroundVideo }) => {


    const [video] = useState(() => Object.assign(document.createElement('video'), { src: backgroundVideo, crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    return (
        <>
            <mesh name="cardBody" geometry={bodyGeometry} material={bodyMaterial} position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.84, 0.48, 1.12]} >
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                </meshBasicMaterial>
            </mesh>
        </>
    )
}
