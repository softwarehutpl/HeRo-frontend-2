import InfoBox from "../common/components/infobox/InfoBox";
import { StyledBox } from "./styled/StyledBox";


function Home() {
  return (
        <StyledBox >
          <InfoBox title="New Candidates" value={5} name="Show"/>
          <InfoBox title="Interviews this week" value={8} name="Show"/>
          <InfoBox title="New vodkas this month" value={4} name="Show"/>
        </StyledBox>
  );
}

export default Home;
