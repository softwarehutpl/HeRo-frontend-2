import { styled } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";




export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #ffffff;
  border-radius: 0;
  background-color: #030303;

  &:active {
    background-color: #0000ff;
  }
`;