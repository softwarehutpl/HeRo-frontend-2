import Navbar from "../common/components/navbar/Navbar";
import Sidebar from "../common/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';



const InfoBoxWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;

const CustomDiv = styled('div')`
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled('div')`
  display: flex;
  flex-direction: row;
`;


function Wrapper() {
  return (
    <CustomDiv>
      <Navbar />
      <RowDiv>
        <Sidebar />
        <Outlet />
      </RowDiv>
    </CustomDiv>
  );
}

export default Wrapper;
