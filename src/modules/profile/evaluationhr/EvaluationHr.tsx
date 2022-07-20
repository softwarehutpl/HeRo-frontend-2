import React from "react";
import { CustomList, CustomListElement, CustomRateWrapper, CustomSecondHeading } from "../ProfileStyles";

function EvaluationHr() {
    return (
        <div>
            <CustomSecondHeading>
                Evaluation Result
            </CustomSecondHeading>
            <CustomList>
                    <CustomListElement>Evaluation Author: </CustomListElement>
                    <CustomListElement>
                        <CustomRateWrapper>
                            <p>Rate:</p>
                            <p>5/5</p>
                        </CustomRateWrapper>
                    </CustomListElement>
                    <CustomListElement>Note: </CustomListElement>
            </CustomList>
        </div>
    );
}
  
export default EvaluationHr;
