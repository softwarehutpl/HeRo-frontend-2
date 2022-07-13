import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface InfoBoxTypes{
  title: string,
  value: number,
  name: string
};

const CustomizedBox = styled(Box)`
  max-width: 600px;
  max-height: 300px;
  background-color: #F4F4F4;
  margin-left: 60px;
`;

const CustomizedButton = styled(Button)`
  border: 2px solid #1976d280;
  width: 200px;
  margin: 0 20px 10px;
  justify-content: flex-start;
  border-radius: 0;
`;


export default function InfoBox({title, value, name}: InfoBoxTypes) {

  const navigate = useNavigate();
  return (
    <CustomizedBox >
      <Typography variant="h4" component="div" sx={{
        padding: `10px 50px 0 20px`,
        marginBottom: "30px"
      }}>
        {title}
      </Typography>
      <Typography variant="h2" component="div" sx={{
        padding: `0 30px`,
        fontWeight: "100"
      }}>
        {value}
      </Typography>
      {/* <Link to="/candidates"> */}
        <CustomizedButton variant="outlined" onClick={() => navigate("/candidates")}>
          {name}
        </CustomizedButton>
      {/* </Link> */}
    </CustomizedBox>
  );
}

