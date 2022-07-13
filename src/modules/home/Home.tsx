import InfoBox from "../common/components/infobox/InfoBox";
import { StyledBox } from "./styled/StyledBox";


function Home() {
  return (
        <StyledBox >
          <InfoBox title="New Candidates" value={5} name="Show" route="/candidates"/>
          <InfoBox title="Interviews this week" value={8} name="Show" route="/projects"/>
        </StyledBox>
  );
}

export default Home;
