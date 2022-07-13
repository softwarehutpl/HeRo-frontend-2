import Navbar from "../common/components/navbar/Navbar";
import Sidebar from "../common/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import InfoBox from "../common/components/infobox/InfoBox";
import { styled } from '@mui/material/styles';



const InfoBoxWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;



function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <InfoBoxWrapper >
        <InfoBox title="New Candidates" value={5} name="Show"/>
        <InfoBox title="Interviews this week" value={8} name="Show"/>
        <InfoBox title="New vodkas this month" value={4} name="Show"/>
      </InfoBoxWrapper>
      <Outlet/>
    </div>
  );
}

export default Home;
