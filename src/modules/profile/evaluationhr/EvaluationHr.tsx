import React from 'react';
import { CustomHrRate, CustomList, CustomListElement, CustomRateWrapper, CustomSecondHeading } from '../ProfileStyles';

function EvaluationHr() {
  return (
    <div>
      <CustomSecondHeading>Evaluation Result</CustomSecondHeading>
      <CustomList>
        <CustomListElement>Evaluation Author: </CustomListElement>
        <CustomListElement>
          <CustomRateWrapper>
            <p>Rate:</p>
            <CustomHrRate>5/5</CustomHrRate>
          </CustomRateWrapper>
        </CustomListElement>
        <CustomListElement>Note: </CustomListElement>
      </CustomList>
    </div>
  );
}

export default EvaluationHr;
