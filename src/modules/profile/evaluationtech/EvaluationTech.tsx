import React from 'react';
import {
  CustomList,
  CustomListElement,
  CustomRateWrapper,
  CustomSecondHeading,
  CustomTechRate,
} from '../ProfileStyles';

function EvaluationTech() {
  return (
    <div>
      <CustomSecondHeading>Evaluation Result</CustomSecondHeading>
      <CustomList>
        <CustomListElement>Evaluation Author: </CustomListElement>
        <CustomListElement>
          <CustomRateWrapper>
            <p>Rate:</p>
            <CustomTechRate>5/5</CustomTechRate>
          </CustomRateWrapper>
        </CustomListElement>
        <CustomListElement>Note: </CustomListElement>
      </CustomList>
    </div>
  );
}

export default EvaluationTech;
