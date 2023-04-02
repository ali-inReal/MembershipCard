import { MembershipCard } from "./MembershipCard/MembershipCard";
import video from "./assets/blueLightning.mp4"
import { WheelOfFortune } from "./wheelOfFortune";
// import { Wheel } from "./wheelOfFortune/wheel";
import { Spinner } from "./wheelOfFortune/Spinner";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer,SSAO, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
function App() {
  const segments = [
    { name: '500', image: 'https://via.placeholder.com/150' },
    { name: '1000', image: 'https://via.placeholder.com/150' },
    { name: '50', image: 'https://via.placeholder.com/150' },
    { name: '50K', image: 'https://via.placeholder.com/150' },
    // { name: '1K', image: 'https://via.placeholder.com/150' },
    { name: '2K', image: 'https://via.placeholder.com/150' },
    { name: '100', image: 'https://via.placeholder.com/150' },
    { name: '1K', image: 'https://via.placeholder.com/150' },
    { name: '1M', image: 'https://via.placeholder.com/150' }
  ]
  return (
    <div style={{width:"50vw",height:"50vh", display: "flex",alignItems:"center",justifyContent:"center" }}>
      {/* <MembershipCard logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnbIQgP-0AuA_AmRFKWmB5HHGMESIF6Z7FQ&usqp=CAU"} textColor={""} QRcode={"/qr.png"} rotation={true} width={"700px"} height={"700px"} rankColor={"#38b5de"} backgroundVideo={video} showBackSide={false} joinDate="10 Feb,2002" memberName="Muhammad Ali" location="Lahore" memberId={2} memberRank="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" /> */}
       
       <Canvas >
        <color c  attach={"background"} />
        {/* <ambientLight/> */}
       {/* <pointLight castShadow intensity={1} position={[0,0,50]}/> */}
       {/* <Wheel /> */}
       {/* <WheelOfFortune segments={segments}/> */}
       <directionalLight position={[0, 1, 2]} color="white" />
       <Spinner/>
       <WheelOfFortune segments={segments} innerRadius={1} outerRadius={2.5} position={[0, 0, 0.5]} />
       {/* <OrbitControls/> */}
       <EffectComposer smaa>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Bloom intensity={1}  luminanceThreshold={1}   />
        
        <Vignette eskil={false} offset={0} darkness={1.1} />
        <SSAO/>
      </EffectComposer>
</Canvas>

   
    </div>
  );
}

export default App;