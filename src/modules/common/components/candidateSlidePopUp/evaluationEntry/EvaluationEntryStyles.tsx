import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

export const WrapperBox = styled(Box)`
  display: flex;
`;

export const CustomList = styled(List)`
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const DoneIconWrapper = styled("div")`
  padding: 0 10px;
`;

export const DoneAvatar = styled(Avatar)`
  background-color: #33cd94;
`;

export const DividerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 90%;
`;

export const EvaluationWrapper = styled("div")`
  height: 90%;
  width: 100%;
  padding: 0 0 10px 0;
`;

export const EvaluationContent = styled("div")`
  height: 90%;
  padding: 10px 0;
`;

export const DateItem = styled(ListItem)`
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

export const EditButton = styled(ModeEditOutlinedIcon)`
  color: gray;
`;

export const InterviewerItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
`;

export const PStyled = styled("p")`
  color: gray;
`;

export const DivStyled = styled("div")`
  padding-left: 10px;
`;

export const AvatarNameWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const CustomListItemText = styled(ListItemText)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 0 10px;
`;

export const EvaluationItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
`;

export const RatingWrapper = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const AvatarStyled = styled(Avatar)`
  background-color: white;
  color: black;
  border: 1px solid #e6e6e6;
`;
