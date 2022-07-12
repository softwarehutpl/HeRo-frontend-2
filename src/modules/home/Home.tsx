import Navbar from "../common/components/navbar/Navbar";
import Sidebar from "../common/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import InfoBox from "../common/components/infobox/InfoBox";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Box sx={{
        display: "flex",
        justifyContent: "flex-start"
      }}>
        <InfoBox title="New Candidates" value={5} name="Show"/>
        <InfoBox title="Interviews this week" value={8} name="Show"/>
        <InfoBox title="New vodkas this month" value={4} name="Show"/>
      </Box>
      <Outlet />
    </div>
  );
}

export default Home;
