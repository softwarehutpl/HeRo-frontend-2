import React from "react";
import Candidate from "../../common/interfaces/Candidate.interface";
import {
  CustomList,
  CustomListElement,
  CustomRateWrapper,
  CustomSecondHeading,
  CustomTechRate,
} from "../ProfileStyles";

type Props = {
  candidate: Candidate;
};

function EvaluationTech({ candidate }: Props) {
  return (
    <div>
      <CustomSecondHeading>Evaluation Result</CustomSecondHeading>
      <CustomList>
        <CustomListElement>
          Evaluation Author: <span>{candidate.interviewName}</span>
        </CustomListElement>
        <CustomListElement>
          <CustomRateWrapper>
            <p>Rate:</p>
            <CustomTechRate>{candidate.interviewOpinionScore}/5</CustomTechRate>
          </CustomRateWrapper>
        </CustomListElement>
        <CustomListElement>
          Note: <span>{candidate.interviewOpinionText}</span>
        </CustomListElement>
      </CustomList>
    </div>
  );
}

export default EvaluationTech;
