import React from 'react';
import Slide from '@mui/material/Slide';
import { ContentWrapper, Content, SlideButton, SlideHeader, SlideHeaderNameDiv, SlideNavbar, HistoryWrapper, HistoryContent} from "./SlidePopUpStyles"
import CustomAvatar from '../avatars/CustomAvatar';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from "react-router-dom";


interface CandidateSlideProps {
  isChecked?: boolean;
  candidateName: string;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}


// zapytać Kamila o to aby się nie wysuwał Slide po kliknięciu na innego kandytata !!


export function CandidateSlide({isChecked, candidateName, close }: CandidateSlideProps): JSX.Element{
  
  const navigate = useNavigate();
    return (
      <Slide direction="left" in={isChecked} mountOnEnter unmountOnExit>
        <ContentWrapper>
          <Content>
            <SlideHeader>
              <SlideHeaderNameDiv>
                <CustomAvatar name={candidateName}/>
                {candidateName}
              </SlideHeaderNameDiv>
              <IconButton style={{alignSelf: "flex-start"}}>
                <CloseOutlinedIcon onClick={() => close(false)}/>  
              </IconButton>
            </SlideHeader>
            <SlideNavbar>
              <SlideButton variant="contained">Add Evaluation</SlideButton>
              <SlideButton variant="contained" onClick={() => navigate("/profile")}>Browse profile</SlideButton>
            </SlideNavbar>
            <HistoryWrapper>
              <div><p>History</p></div>
              <HistoryContent>Hui</HistoryContent>
            </HistoryWrapper>
          </Content>
        </ContentWrapper>
        
      </Slide>
    );
}