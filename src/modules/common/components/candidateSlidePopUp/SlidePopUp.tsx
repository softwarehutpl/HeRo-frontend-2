import React from "react";
import Slide from "@mui/material/Slide";
import {
  ContentWrapper,
  Content,
  SlideButton,
  SlideHeader,
  SlideHeaderNameDiv,
  SlideNavbar,
  HistoryWrapper,
  HistoryContent,
} from "./SlidePopUpStyles";
import CustomAvatar from "../avatars/CustomAvatar";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import { Entry } from "./evaluationEntry/EvaluationEntry";
import {
  EvaluationContent,
  EvaluationWrapper,
} from "./evaluationEntry/EvaluationEntryStyles";
import Typography from "@mui/material/Typography";

interface CandidateSlideProps {
  isChecked: boolean;
  candidateName: string;
  close: () => void;
}

export function CandidateSlide({
  isChecked,
  candidateName,
  close,
}: CandidateSlideProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <Slide direction="left" in={isChecked} mountOnEnter unmountOnExit>
      <ContentWrapper>
        <Content>
          <SlideHeader>
            <SlideHeaderNameDiv>
              <CustomAvatar name={candidateName} />
              {candidateName}
            </SlideHeaderNameDiv>
            <IconButton style={{ alignSelf: "flex-start" }} onClick={close}>
              <CloseOutlinedIcon style={{ color: "#0F62FE" }} />
            </IconButton>
          </SlideHeader>
          <SlideNavbar>
            <SlideButton variant="contained">Add Evaluation</SlideButton>
            <SlideButton
              variant="contained"
              onClick={() => navigate("/profile")}
            >
              Browse profile
            </SlideButton>
          </SlideNavbar>
          <HistoryWrapper>
            <div>
              <Typography style={{ fontSize: "18px" }}>
                Evaluation Info
              </Typography>
            </div>
            <HistoryContent>
              <EvaluationWrapper>
                <EvaluationContent>
                  <Entry />
                </EvaluationContent>
              </EvaluationWrapper>
            </HistoryContent>
          </HistoryWrapper>
        </Content>
      </ContentWrapper>
    </Slide>
  );
}
