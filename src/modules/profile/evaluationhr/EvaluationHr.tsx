import React from "react";
import Candidate from "../../common/interfaces/Candidate.interface";
import {
  CustomHrRate,
  CustomList,
  CustomListElement,
  CustomRateWrapper,
  CustomSecondHeading,
} from "../ProfileStyles";

type Props = {
  candidate: Candidate;
};

function EvaluationHr({ candidate }: Props) {
  return (
    <div>
      <CustomSecondHeading>Evaluation Result</CustomSecondHeading>
      <CustomList>
        <CustomListElement>
          Evaluation Author: <span>{candidate.hrName}</span>
        </CustomListElement>
        <CustomListElement>
          <CustomRateWrapper>
            <p>Rate:</p>
            <CustomHrRate>{candidate.hrOpinionScore}/5</CustomHrRate>
          </CustomRateWrapper>
        </CustomListElement>
        <CustomListElement>
          Note: <span>{candidate.hrOpinionText}</span>
        </CustomListElement>
      </CustomList>
    </div>
  );
}

export default EvaluationHr;
