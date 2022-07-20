import React from 'react';
import Slide from '@mui/material/Slide';
import { ContentWrapper, Content, SlideButton, SlideHeader, SlideHeaderNameDiv, SlideNavbar} from "./SlidePopUpStyles"
import CustomAvatar from '../avatars/CustomAvatar';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


interface CandidateSlideProps {
  isChecked?: boolean;
  candidateName: string
}





export function CandidateSlide({isChecked, candidateName }: CandidateSlideProps): JSX.Element{
  

    return (
      <Slide direction="left" in={isChecked} mountOnEnter unmountOnExit>
        <ContentWrapper>
          <Content>
            <SlideHeader>
              <SlideHeaderNameDiv>
                <CustomAvatar name={candidateName}/>
                {candidateName}
              </SlideHeaderNameDiv>
              <IconButton>
                <CloseOutlinedIcon style={{alignSelf: "flex-start"}}/>
              </IconButton>
            </SlideHeader>
            <SlideNavbar>
              <SlideButton variant="contained">Add Evaluation</SlideButton>
              <SlideButton variant="contained">Browse</SlideButton>
            </SlideNavbar>
            <div>
              <div>History</div>
              
            </div>
          </Content>
        </ContentWrapper>
        
      </Slide>
    );
}