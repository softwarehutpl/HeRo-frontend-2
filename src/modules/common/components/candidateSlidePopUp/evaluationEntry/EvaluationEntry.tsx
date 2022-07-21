import React from "react";
import ListItem from "@mui/material/ListItem";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

import {
  AvatarNameWrapper,
  CustomList,
  CustomListItemText,
  EvaluationItem,
  InterviewerItem,
  RatingWrapper,
} from "./EvaluationEntryStyles";
import CustomAvatar from "../../avatars/CustomAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

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
      <EvaluationItem>
        <p>Evaluation</p>
        <RatingWrapper>
          <Avatar>4</Avatar>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={4} />
          </Box>
        </RatingWrapper>
      </EvaluationItem>
    </CustomList>
  );
}
