import { styled } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";

interface IconButtonProps {
   active: boolean;
}


export const StyledIconButton = styled(IconButton)<IconButtonProps>`

  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #ffffff;
  border-radius: 0;
  background-color: ${props => props.active ? "#1976d280" : "black"};
`;