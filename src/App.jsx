
import { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Card from "./Components/Card/Card";
import { Card1 } from "./Components/Card/Card1";
import { Card2 } from "./Components/Card/Card2";
import ColorPicker from 'react-color-wheel-picker';
function App() {
  const [numLights] = useState(6);
  const radius = 30;
  const [bodyColors,setbodyColors] = useState("")
  const [textColors,setTextColors] = useState("")
  // calculate positions of lights in a circle
  const positions = [...Array(numLights)].map((_, i) => {
    const angle = (i / numLights) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, 70, Math.sin(angle) * radius);
  });
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
        height: "100vh",
        width: "100vw",
      }}
    >
      
      <Canvas gl={{antialias:false}}>
        <ambientLight intensity={0.5} />
        {positions.map((position, i) => (
          <pointLight key={i} position={position} />
        ))}
        {positions1.map((position, i) => (
          <pointLight key={i} position={position} />
        ))}
        {/* <pointLight position={[0,-30,0]} /> */}
        {/* <spotLight position={[0,-50,0]} /> */}
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}
        <Card2 textColor={textColors.hex} bodyColor={bodyColors.hex} joinDate="10 Feb,2002" name="Muhammad Ali" location="Lahore" memberId={2} member="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" />
      </Canvas>
      <div>
        <h1>Card Body</h1>
      <ColorPicker
       initialColor={"#222222"}
       onChange={(color)=>{
        setbodyColors(color);
      }}
       size={300}
      />
      </div>
      <div>
        <h1>Text Color</h1>
        <ColorPicker
       initialColor={"#222222"}
       onChange={(color)=>{
        setTextColors(color);
      }}
       size={300}
      />
      </div>
      </div>
   
  );
}

export default App;