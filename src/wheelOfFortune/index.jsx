import React, { useState } from 'react'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber'
import { useRef } from "react"
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { Prize } from './prize'
import { AudioLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import wheelSound from "./../assets/sound.mp3"
import { AudioListener } from 'three'
export const WheelOfFortune = ({ segments, innerRadius, outerRadius, position }) => {
    const ref = useRef(null)
    // const { size, viewport } = useThree();
    const group = useRef(null);
    var max = 0;
    // const sound = useLoader(AudioLoader, wheelSound,(sound) => {
    //     sound.play();
    //   });
    useFrame(
        (state, delta) => {


            // state.performance.current=0.01
            if (max > 0) {
                group.current.rotation.z += delta * max
                max -= 0.2
            }

        }
    )
    const music_player = useRef();
    function clickHandler() {
        // sound.play()

       var randomAngle = (Math.random() * (2*Math.PI)*10)
       const finalAngle = Math.round(randomAngle / (2 * Math.PI / segments.length)) * (2 * Math.PI / segments.length);
       group.current.rotation.z=5;
       group.current.rotation.z+=finalAngle 
       console.log(segments[(finalAngle / (2 * Math.PI / segments.length)+2)%segments.length])
    }
    const [listener] = useState(() => new AudioListener())
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
                                onClick={() => clickHandler()}
                                ref={ref}>
                                <Html
                                    position={[0, 0, 0.5]}
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
                                    <audio ref={music_player} args={[listener]}></audio>
                                    <Prize index={index} length={segments.length} text={segment.name} image={segment.image} />
                                </Html>
                                <ringBufferGeometry args={[innerRadius, outerRadius, 32, 2, ((2 * Math.PI) / segments.length) * index, (2 * Math.PI) / segments.length]} />
                                <meshBasicMaterial toneMapped={false} attach="material" color={index % 2 == 0 ? [1, 0, 0] : [1, 1, 0]} />
                            </mesh>
                        )
                    }
                )


            }
        </group>

    )
}
