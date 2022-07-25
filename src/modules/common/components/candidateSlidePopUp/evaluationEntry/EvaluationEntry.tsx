import React from "react";
import Box from "@mui/material/Box";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import {
  AvatarNameWrapper,
  DoneAvatar,
  CustomList,
  CustomListItemText,
  DateItem,
  DoneIconWrapper,
  EvaluationItem,
  InterviewerItem,
  RatingWrapper,
  WrapperBox,
  DividerWrapper,
  EditButton,
  PStyled,
  DivStyled,
  AvatarStyled,
} from "./EvaluationEntryStyles";
import CustomAvatar from "../../avatars/CustomAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DoneIcon from "@mui/icons-material/Done";
import IconButton from "@mui/material/IconButton";
import SliderMarks from "../slider/SliderMarks";

export function Entry() {
  return (
    <WrapperBox>
      <DoneIconWrapper>
        <DoneAvatar>
          <DoneIcon />
        </DoneAvatar>
        <DividerWrapper>
          <div></div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div></div>
        </DividerWrapper>
      </DoneIconWrapper>
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
            <EditButton />
          </IconButton>
        </DateItem>
        <Divider variant="middle" />
        <InterviewerItem>
          <PStyled>Interviewers</PStyled>
          <AvatarNameWrapper>
            <CustomAvatar name={"Caroline Robertson"}></CustomAvatar>
            <DivStyled>
              <CustomListItemText
                primary="Caroline Robertson"
                primaryTypographyProps={{ fontSize: "15px" }}
                secondary="HR Manager"
                secondaryTypographyProps={{ fontSize: "12px" }}
              />
            </DivStyled>
          </AvatarNameWrapper>
        </InterviewerItem>
        <Divider variant="middle" />
        <EvaluationItem>
          <PStyled>Evaluation</PStyled>
          <RatingWrapper>
            <AvatarStyled>4</AvatarStyled>
            <Box sx={{ width: "100%" }}>
              <SliderMarks />
            </Box>
          </RatingWrapper>
        </EvaluationItem>
      </CustomList>
    </WrapperBox>
  );
}
