import React from 'react';
import InfoBox from '../common/components/infobox/InfoBox';
import { StyledBox, MainBox } from './styled/StyledBox';
import MyCalendar from './MyCalendar';

function Home() {
  return (
    <MainBox>
      <StyledBox>
        <InfoBox title="New Candidates" value={5} name="Show" route="/candidates" />
        <InfoBox title="Interviews this week" value={8} name="Show" route="/projects" />
      </StyledBox>
      <MyCalendar />
    </MainBox>
  );
}

export default Home;
