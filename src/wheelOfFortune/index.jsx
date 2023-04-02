import React from 'react'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber'
import { useRef } from "react"
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { Prize } from './prize'
export const WheelOfFortune = ({ segments,innerRadius,outerRadius,position }) => {
    const ref = useRef(null)
    // const { size, viewport } = useThree();
    const group = useRef(null);
    useFrame(
        (state,delta)=>
        {
            group.current.rotation.z+=delta
            // state.performance.current=0.01
        }
    )
    return (
        
            <group ref={group}>
            {
                segments.map(
                    (segment, index) => {
                        return (
                            <mesh
                                visible
                                position={position}
                                rotation={[0, 0, 0]}
                                castShadow
                                ref={ref}>
                                <Html
                                    position={[0, 0,0.5]}
                                    distanceFactor={10}
                                    transform
                                    // sprite
                                    // center
                                    // occlude
                                    material={
                                        <meshBasicMaterial color={"black"} />
                                    }
                                    // portal={ref}
                                >
                                    <Prize index={index} length={segments.length} text={segment.name} image={segment.image} />
                                </Html>
                                <ringBufferGeometry args={[innerRadius,outerRadius, 32, 2, ((2 * Math.PI) / segments.length) * index, (2 * Math.PI) / segments.length]} />
                                <meshBasicMaterial toneMapped={false} attach="material" color={index % 2 == 0 ? [1,0,0] : [1,1,0]} />
                            </mesh>
                        )
                    }
                )


            }
            </group>
       
    )
}
