import React from 'react'

import { useState } from "react";
import * as THREE from "three";
import { Card } from "./Card/Card";
import { Canvas} from "@react-three/fiber";

import { Suspense } from 'react';
export const MembershipCard = ({width="400px",height="400px",profileImage,memberRank,joinDate,memberName,textColor,bodyColor,memberId,location,actOfKindness,rotation,showBackSide,backgroundVideo,rankColor,QRcode}) => {
  
  const [numLights] = useState(4);
  const radius = 30;

  // calculate positions of lights in a circle for top part of the card
  const positions = [...Array(numLights)].map((_, i) => {
    const angle = (i / numLights) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, 70, Math.sin(angle) * radius);
  });

  // calculate positions of lights in a circle for lower part of the card
  const positions1 = [...Array(2)].map((_, i) => {
    const angle = (i / 2) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, -20, Math.sin(angle) * radius);
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        width: width,
      }}
    ><Suspense fallback={<h1>LOADING.....</h1>}>
      
      <Canvas performance={{current:0.1,min:0.1,max:0.1}} >
        
        {positions.map((position, i) => (
          <directionalLight key={i} position={position} />
        ))}
        {positions1.map((position, i) => (
          <directionalLight key={i} position={position} />
        ))}
        <Card QRcode={QRcode} textColor={textColor} rotation={rotation} rankColor={rankColor} backgroundVideo={backgroundVideo} showBackSide={showBackSide}  bodyColor={bodyColor} joinDate={joinDate} memberName={memberName} location={location} memberId={memberId} memberRank={memberRank} profileImage={profileImage} actOfKindness={actOfKindness} />   
      </Canvas>
      </Suspense>
      </div>
   
  );
}
