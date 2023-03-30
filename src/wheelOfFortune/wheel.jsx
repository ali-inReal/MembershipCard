import React from 'react'
import { useState,useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
export const Wheel = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const wheelRef = useRef();
    const items = [
        "Segment 1",
        "Segment 2",
        "Segment 3",
        "Segment 1",
        "Segment 2",
        "Segment 3",
    ]
    const spinWheel = () => {
        const randomAngle = Math.random() * 2 * Math.PI;
        const finalAngle = Math.round(randomAngle / (2 * Math.PI / items.length)) * (2 * Math.PI / items.length);
        setSelectedItem(items[finalAngle / (2 * Math.PI / items.length)]);
        wheelRef.current.rotation.z = 0;
        wheelRef.current.rotation.z += finalAngle;
    };
        
    useFrame(() => {
        wheelRef.current.rotation.z += 0.01;
    });
    
    return (
        <>
          
            <mesh onClick={spinWheel} rotation={[Math.PI/2,0,0]} ref={wheelRef}>
                <cylinderBufferGeometry args={[20, 20, 5, 64]} />
                <meshStandardMaterial color="red" />
            </mesh>
            <Html>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            color:"white",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) rotate(" + index * (360 / items.length) + "deg)",
                        }}
                    >
                        {item}
                    </div>
                ))}
                {selectedItem && (
                    <div style={{ position: "absolute", top: "10%", left: "50%" }}>
                        <h2>You won: {selectedItem}</h2>
                    </div>
                )}
            </Html>
        </>
    );
}
