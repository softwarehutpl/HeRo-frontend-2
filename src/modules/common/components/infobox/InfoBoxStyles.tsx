import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CustomizedBox = styled(Box)`
  max-width: 600px;
  max-height: 220px;
  background-color: #f4f4f4;
  margin-right: 60px;
`;

export const CustomizedButton = styled(Button)`
  border: 2px solid #1976d280;
  width: 200px;
  margin: 0 20px 10px;
  justify-content: flex-start;
  border-radius: 0;
`;

export const TypographyTitle = styled(Typography)`
  padding: 10px 50px 0 20px;
  marginbottom: 30px;
`;

export const TypographyValue = styled(Typography)`
  padding: 0 30px;
  fontweight: 100;
`;
