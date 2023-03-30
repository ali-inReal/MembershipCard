import { MembershipCard } from "./MembershipCard/MembershipCard";
import video from "./assets/blueLightning.mp4"
import { WheelOfFortune } from "./wheelOfFortune";
// import { Wheel } from "./wheelOfFortune/wheel";
import { Canvas } from "@react-three/fiber";
function App() {
  const segments = [
    { name: 'Segment 1', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 2', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 3', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 4', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 5', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 6', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 7', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 8', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 9', image: 'https://via.placeholder.com/150' },
    { name: 'Segment 10', image: 'https://via.placeholder.com/150' },
  ]
  return (
    <div style={{width:"50vw",height:"50vh", display: "flex",alignItems:"center",justifyContent:"center" }}>
      {/* <MembershipCard logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnbIQgP-0AuA_AmRFKWmB5HHGMESIF6Z7FQ&usqp=CAU"} textColor={""} QRcode={"/qr.png"} rotation={true} width={"700px"} height={"700px"} rankColor={"#38b5de"} backgroundVideo={video} showBackSide={false} joinDate="10 Feb,2002" memberName="Muhammad Ali" location="Lahore" memberId={2} memberRank="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" /> */}
       
       <Canvas >
       {/* <Wheel /> */}
       <WheelOfFortune segments={segments}/>
</Canvas>

   
    </div>
  );
}

export default App;