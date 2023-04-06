import React, { useEffect, useState } from 'react'
import { useRef } from "react"
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Prize } from './prize'
import wheelSound from "./../assets/sound.mp3"
import { Howl } from 'howler'
import win from "././../assets/win.mp3"
export const WheelOfFortune = ({ segments, innerRadius, outerRadius, position,result,setResult }) => {
    var initialRotationSpeed = 0.6;
    var minimumRotationSpeed = 0.01;
    const rings = useRef([])
    const [sound,setSound]=useState(null);
    const [winSound,setWinSound]=useState(null)
    useEffect(
        ()=>{
            const winSound = new Howl(
                {
                    src:[win],
                    preload:true
                }
            )
            const sound = new Howl(
                {
                    src:[wheelSound],
                    preload:true
                }
            )
            
            setSound(sound)
            setWinSound(winSound)
        },[]
    )
    const [isSpinning,setIsSpinning] = useState(false);
    const group = useRef(null);
    const [currentAngle, setCurrentAngle] = useState(0);
    const [targetAngle, setTargetAngle] = useState(0);
    const updateCurrentAngle = () => {
        const currentRotation = group.current.rotation.z;
        setCurrentAngle(currentRotation);
    };
    

    // console.log(result)
    const rotateWheel = () => {
        const remainingAngle = targetAngle - currentAngle;

        // Calculate the rotation speed based on the remaining angle
        if(isSpinning)
        {
            const rotationSpeed =
            remainingAngle > Math.PI / 2
                ? initialRotationSpeed
                : Math.max(
                    minimumRotationSpeed,
                    (initialRotationSpeed * remainingAngle) / (Math.PI / 2)
                );
        // Rotate the wheel by the calculated speed
        // console.log(remainingAngle)
        if (remainingAngle > 0.01) {
            group.current.rotation.z += rotationSpeed;
        } else if (remainingAngle < -0.01) {
            group.current.rotation.z -= rotationSpeed;
        } else {
            group.current.rotation.z = targetAngle;
            // sound.stop();
            // console.log("paused!")
            setIsSpinning(false)
            // console.log(isSpinning)
            
            // if(isSpinning)
            // {
            //     sound.fade(1000,0,3000)
            // }
          
        }

        updateCurrentAngle();}
    };
    useFrame(
        (state, delta) => {
            rotateWheel();
        }
    )
    
    useEffect(
        ()=>{
            if(sound!=null)
            {if(isSpinning)
            {
                sound.play()
                
            }
            else
            {
                sound.on('stop',function (){
                    winSound.play()
                })
                sound.stop()
                
                console.log("paused")
            }}
        },[isSpinning]
    )
    

    const music_player = useRef();
    function clickHandler() {
        // sound.play()
        
        // sound.play()
        var randomAngle = (Math.random() * (2 * Math.PI) * 10)
        var finalAngle = Math.round((randomAngle) / (2 * Math.PI / segments.length)) * (2 * Math.PI / segments.length);
        group.current.rotation.z = 0;
        finalAngle = finalAngle + 10 * Math.PI + (0.174/2)
        console.log(finalAngle)
        setTargetAngle(finalAngle)
        setCurrentAngle(group.current.rotation.z)
        setIsSpinning(true)
        
        const index = Math.floor((finalAngle / (2 * Math.PI / segments.length) + 2)) % segments.length
        // console.log(rings.current[index])
        console.log(segments[index].name)
        // console.log(index)
        // setTimeout(
        //     ()=>{
        //         setResult(index)
        //         console.log("GLow!!!!")
        //         setIsSpinning(false)
        //     },2000
        // )
        
        
    }
  
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
                            >
                                <Html
                                    position={[0, 0, 0.5]}
                                    distanceFactor={10}
                                    transform
                                    material={
                                        <meshBasicMaterial color={"black"} />
                                    }
                                >
                                 
                                    <Prize index={index} length={segments.length} text={segment.name} image={segment.image} />
                                </Html>
                                <ringBufferGeometry  args={[innerRadius, outerRadius, 32, 2, ((2 * Math.PI) / segments.length) * index, (2 * Math.PI) / segments.length]} />
                                <meshBasicMaterial  toneMapped={false} name={segment.name} attach="material" color={segment.color} />
                            </mesh>
                        )
                    }
                )


            }
        </group>

    )
}
