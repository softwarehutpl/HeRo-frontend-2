import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';




export const ContentWrapper = styled("div")`
  position: fixed;
  height: 90%;
  bottom: 0%;
  right: 0%;
  background-color: lightblue;
  min-width: 20%;
`;


export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SlideHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20%;
`;

export const SlideHeaderNameDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;

export const SlideNavbar = styled("div")`
  display: flex;
`;

export const SlideButton = styled(Button)`
  display: flex;
`;