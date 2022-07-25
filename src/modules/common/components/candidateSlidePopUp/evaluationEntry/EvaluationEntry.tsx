import React from "react";
import Box from "@mui/material/Box";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import {
  AvatarNameWrapper,
  CustomList,
  CustomListItemText,
  DateItem,
  EvaluationItem,
  InterviewerItem,
  RatingWrapper,
} from "./EvaluationEntryStyles";
import CustomAvatar from "../../avatars/CustomAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DoneIcon from "@mui/icons-material/Done";
import IconButton from "@mui/material/IconButton";
import SliderMarks from "../slider/SliderMarks";

export function Entry() {
  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ padding: "0 10px" }}>
        <Avatar style={{ backgroundColor: "#33CD94" }}>
          <DoneIcon />
        </Avatar>
        <div
          style={{ display: "flex", justifyContent: "center", height: "90%" }}
        >
          <div></div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div></div>
        </div>
      </div>
      <CustomList>
        <DateItem>
          <CustomListItemText
            primary="15"
            primaryTypographyProps={{ fontSize: "18px" }}
            secondary="June"
            secondaryTypographyProps={{ fontSize: "12px" }}
          />
          <Divider variant="middle" orientation="vertical" flexItem />
          <CustomListItemText
            primary="1 Step - HR interview"
            primaryTypographyProps={{ fontSize: "15px" }}
            secondary="11:30 AM - 12:30 PM"
            secondaryTypographyProps={{ fontSize: "12px" }}
          />
          <IconButton aria-label="edit">
            <ModeEditOutlinedIcon style={{ color: "gray" }} />
          </IconButton>
        </DateItem>
        <Divider variant="middle" />
        <InterviewerItem>
          <p style={{ color: "gray" }}>Interviewers</p>
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
        <Divider variant="middle" />
        <EvaluationItem>
          <p style={{ color: "gray" }}>Evaluation</p>
          <RatingWrapper>
            <Avatar
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #e6e6e6",
              }}
            >
              4
            </Avatar>
            <Box sx={{ width: "100%" }}>
              <SliderMarks />
            </Box>
          </RatingWrapper>
        </EvaluationItem>
      </CustomList>
    </Box>
  );
}
