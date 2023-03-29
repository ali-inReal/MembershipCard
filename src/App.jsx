import { MembershipCard } from "./MembershipCard/MembershipCard";
import video from "./assets/blueLightning.mp4"
function App() {

  return (
    <div style={{ display: "flex" }}>
      <MembershipCard logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnbIQgP-0AuA_AmRFKWmB5HHGMESIF6Z7FQ&usqp=CAU"} textColor={""} QRcode={"/qr.png"} rotation={true} width={"700px"} height={"700px"} rankColor={"#38b5de"} backgroundVideo={video} showBackSide={false} joinDate="10 Feb,2002" memberName="Muhammad Ali" location="Lahore" memberId={2} memberRank="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" />
    </div>
  );
}

export default App;