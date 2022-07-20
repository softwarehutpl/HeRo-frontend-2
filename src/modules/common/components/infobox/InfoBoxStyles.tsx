import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";



export const CustomizedBox = styled(Box)`
  max-width: 600px;
  max-height: 220px;
  background-color: #F4F4F4;
  margin-right: 60px;
`;

export const CustomizedButton = styled(Button)`
  border: 2px solid #1976d280;
  width: 200px;
  margin: 0 20px 10px;
  justify-content: flex-start;
  border-radius: 0;
`;