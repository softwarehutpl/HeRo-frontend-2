import React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { InterviewerItem } from "../SlidePopUpStyles";

export function Entry() {
  // const handleClick = ()=> {

  //   onClick(type);
  // }

  return (
    <List>
      <ListItem>Date</ListItem>
      <InterviewerItem>
        <p>Intervievers</p>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary="Caroline Robertson" secondary="HR Manager" />
      </InterviewerItem>
      <ListItem>Ewaluation</ListItem>
    </List>
  );
}
