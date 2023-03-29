import React from 'react'
import { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { lazy } from 'react';
import { Suspense } from 'react';
import animation from "./../assets/animation.json"
import Lottie from "lottie-react"
export const MembershipCard = ({ width = "100%", height = "100%", logo,profileImage, memberRank, joinDate, memberName, textColor, bodyColor, memberId, location, actOfKindness, rotation, showBackSide, backgroundVideo, rankColor, QRcode }) => {

  const [numLights] = useState(4);
  const radius = 30;
  const LazyModel = lazy(() => import("./Card/Card"))
  // calculate positions of lights in a circle for top part of the card
  const positions = [...Array(numLights)].map((_, i) => {
    const angle = (i / numLights) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, 70, Math.sin(angle) * radius);
  });

  // calculate positions of lights in a circle for lower part of the card
  const positions1 = [...Array(numLights)].map((_, i) => {
    const angle = (i / numLights) * Math.PI * 2;
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
    >
      <Suspense fallback={(<Lottie animationData={animation} loop={true} />)}>
        <Canvas performance={{ current: 0.1, min: 0.1, max: 0.1 }} >

          {positions.map((position, i) => (
            <pointLight key={i} position={position} />
          ))}
          {positions1.map((position, i) => (
            <pointLight key={i} position={position} />
          ))}
          <LazyModel logo={logo} QRcode={QRcode} textColor={textColor} rotation={rotation} rankColor={rankColor} backgroundVideo={backgroundVideo} showBackSide={showBackSide} bodyColor={bodyColor} joinDate={joinDate} memberName={memberName} location={location} memberId={memberId} memberRank={memberRank} profileImage={profileImage} actOfKindness={actOfKindness} />
        </Canvas>
      </Suspense>
    </div>

  );
}
