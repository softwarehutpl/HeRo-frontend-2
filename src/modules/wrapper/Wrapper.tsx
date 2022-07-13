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


function Wrapper() {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <Outlet/>
    </div>
  );
}

export default Wrapper;
