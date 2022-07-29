import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Typography from "@mui/material/Typography";
import SeeProfile from "../../../profile/seeProfile/SeeProfile";
import Box from "@mui/material/Box";

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

export const CustomIconButton = styled(IconButton)`
  align-self: flex-start;
`;

export const ClosingButton = styled(CloseOutlinedIcon)`
  color: #0f62fe;
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

export const CustomTypography = styled(Typography)`
  font-size: 18px;
`;

export const HistoryContent = styled("div")`
  display: flex;
  height: 90%;
  padding: 10px 0;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 60%;
  background-color: white;
  border: 2px solid #000;
  boxshadow: 24;
  p: 4;
`;
