import React from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

export const CustomList = styled(List)`
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
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

export const InterviewerItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
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
