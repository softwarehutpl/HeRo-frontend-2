import React from "react";
import Slide from "@mui/material/Slide";
import {
  ContentWrapper,
  Content,
  SlideButton,
  SlideHeader,
  SlideHeaderNameDiv,
  CustomIconButton,
  ClosingButton,
  SlideNavbar,
  HistoryWrapper,
  CustomTypography,
  HistoryContent,
} from "./SlidePopUpStyles";
import CustomAvatar from "../avatars/CustomAvatar";
import { useNavigate } from "react-router-dom";
import { Entry } from "./evaluationEntry/EvaluationEntry";
import {
  EvaluationContent,
  EvaluationWrapper,
} from "./evaluationEntry/EvaluationEntryStyles";

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
            <CustomIconButton onClick={close}>
              <ClosingButton />
            </CustomIconButton>
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
              <CustomTypography>Evaluation Info</CustomTypography>
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
