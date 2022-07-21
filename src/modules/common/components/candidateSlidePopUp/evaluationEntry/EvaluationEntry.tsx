import React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import {
  AvatarNameWrapper,
  CustomList,
  CustomListItemText,
  InterviewerItem,
} from "./EvaluationEntryStyles";
import CustomAvatar from "../../avatars/CustomAvatar";
import Divider from "@mui/material/Divider";

export function Entry() {
  // const handleClick = ()=> {

  //   onClick(type);
  // }

  return (
    <CustomList>
      <ListItem>Date</ListItem>
      <Divider />
      <InterviewerItem>
        <p>Interviewers</p>
        <AvatarNameWrapper>
          <CustomAvatar name={"Caroline Robertson"}></CustomAvatar>
          <div style={{ paddingLeft: "10px" }}>
            <CustomListItemText
              primary="Caroline Robertson"
              primaryTypographyProps={{ fontSize: "15px" }}
              secondary="HR Manager"
              secondaryTypographyProps={{ fontSize: "12px" }}
            />
          </div>
        </AvatarNameWrapper>
      </InterviewerItem>
      <Divider />
      <ListItem>Ewaluation</ListItem>
    </CustomList>
  );
}
