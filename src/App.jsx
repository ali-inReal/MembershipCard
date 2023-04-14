import { MembershipCard } from "./MembershipCard/MembershipCard";
import video from "./assets/blueLightning.mp4"
import { WheelOfFortune } from "./wheelOfFortune";
// import { Wheel } from "./wheelOfFortune/wheel";
import { Spinner } from "./wheelOfFortune/Spinner";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, SSAO, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { useRef, useState } from "react";
import token from "./assets/token.png"
import token2 from "./assets/token2.png"
import ParticleEffect from "./wheelOfFortune/ParticleEffect"
function App() {
  
  const [textSize,setTextSize] = useState(10);
  const segments = [
    { name: '500',image:token , color: "" },
    { name:'1000',image:token2,color: "" },
    { name: '3K', image:token , color: "" },
    { name: '4K', image:token2 , color: "" },
    { name: '2k', image:token , color: "" },
    { name: '5K', image:token2, color: "" },
    { name: '10k', image:token, color: "" },
    { name: '11K', image: token2, color: "" },
    { name: '1M',  image: token, color: "" },
    { name: '10k', image:token2, color: "" },
    { name: '11K', image: token, color: "" },
    { name: '5K', image:token2, color: "" },

  ]
  function colorAssign(index) {
    if (segments.length % 2 == 0) {
      if (segments[index].color) {
        return segments[index].color
      }
      else
        return index % 2 == 0 ? "#0E2359" : "1B57ED"
    }
    else {
      if (segments[index].color) {
        return segments[index].color
      }
      else
        return index % 3 == 0 ? [1, 0, 0] : index % 3 == 1 ? [1, 0.5, 1] : [1, 0, 1]
    }
  }
  
  var seg = []
  for (let index = 0; index < segments.length; index++) {
    seg.push(
      {
        name: segments[index].name,
        image: segments[index].image,
        color: colorAssign(index)
      }
    )
  }


  const [selected, setSelected] = useState("")
  function setResult(index) {
    console.log(index)
    seg[index].color = [1, 1, 1]
    setSelected(selected + 2)
  }
  const ref = useRef()
  return (
    <div style={{ width: "50vw", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      {/* <MembershipCard logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnbIQgP-0AuA_AmRFKWmB5HHGMESIF6Z7FQ&usqp=CAU"} textColor={""} QRcode={"/qr.png"} rotation={true} width={"700px"} height={"700px"} rankColor={"#38b5de"} backgroundVideo={video} showBackSide={false} joinDate="10 Feb,2002" memberName="Muhammad Ali" location="Lahore" memberId={2} memberRank="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" /> */}

      <Canvas width="100%" height={"100%"} >
        <color c attach={"background"} />
        {/* <ambientLight/> */}
        {/* <pointLight castShadow intensity={1} position={[0,0,50]}/> */}
        {/* <Wheel /> */}
        {/* <WheelOfFortune segments={segments}/> */}
        {/* <directionalLight position={[0, 2, 2]} color="white" /> */}
        {/* <directionalLight position={[0, 0, 2]} color="white" /> */}
        {/* <directionalLight position={[0, -2, 2]} color="white" /> */}
        <Spinner  flickerTime={1} flickering={false} />
        <WheelOfFortune soundOn={true} spinTime={5} ref={ref} textOrientation="vertical" textSize={textSize} result={selected} setResult={setResult} segments={seg} innerRadius={1} outerRadius={2.5} position={[0, 0, 0.5]} />
        <OrbitControls/>
        <ParticleEffect/>
        <EffectComposer >
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
          <Bloom intensity={1} luminanceThreshold={1} />

          <Vignette eskilS={false} offset={0} darkness={1.1} />
          <SSAO />
        </EffectComposer>
      </Canvas>

      <button
        style={{
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "gold",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => ref.current.clickHandler()}>Spin</button>
    </div>
  );
}

export default App;