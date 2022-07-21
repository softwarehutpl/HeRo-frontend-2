import React from "react";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

export const CustomList = styled(List)`
  width: 100%;
`;

export const EvaluationWrapper = styled("div")`
  height: 90%;
  width: 80%;
  padding: 10px 0;
  background-color: green;
`;

export const EvaluationContent = styled("div")`
  height: 90%;
  padding: 10px 0;
  background-color: green;
`;

export const InterviewerItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
`;

export const AvatarNameWrapper = styled("div")`
  display: flex;
  align-items: center;
  background-color: brown;
`;

export const CustomListItemText = styled(ListItemText)`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
