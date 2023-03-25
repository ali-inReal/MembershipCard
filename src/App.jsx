import { MembershipCard } from "./MembershipCard/MembershipCard";
function App() {
 
  return (
   < >
     <MembershipCard textColor={""} QRcode={"/qr.png"}  rotation={true} width={"700px"} height={"700px"} rankColor={"#38b5de"} backgroundVideo={"/blueLightning.mp4"} showBackSide={true}   joinDate="10 Feb,2002" memberName="Muhammad Ali" location="Lahore" memberId={2} memberRank="Senior" profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MCnvBDf0tSbcF6SmCshL-Fp-1ByLnJK09VPX_SVA&s" actOfKindness="Charity" />
    
   </>
  );
}

export default App;