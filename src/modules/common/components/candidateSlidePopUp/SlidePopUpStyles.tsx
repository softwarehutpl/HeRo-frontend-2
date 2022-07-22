import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ContentWrapper = styled("div")`
  position: fixed;
  height: 90%;
  bottom: 0%;
  right: 0%;
  background-color: #fafafa;
  min-width: 20%;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 15px;
`;

export const SlideHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15%;
`;

export const SlideHeaderNameDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const SlideNavbar = styled("div")`
  display: flex;
  justify-content: space-between;
  min-height: 5%;
  padding: 20px 0;
`;

export const SlideButton = styled(Button)`
  display: flex;
  min-width: 40%;
  font-size: 12px;
  border-radius: 0;
  text-transform: none;
`;

export const HistoryWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40%;
  padding: 10px 0;
`;

export const HistoryContent = styled("div")`
  display: flex;
  height: 90%;
  padding: 10px 0;
`;
