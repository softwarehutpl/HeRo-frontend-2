import React from "react";
import { CustomList, CustomListElement, CustomSecondHeading } from "../ProfileStyles";

function EvaluationHr() {
    return (
        <div>
            <CustomSecondHeading>
                Evaluation Result
            </CustomSecondHeading>
            <CustomList>
                    <CustomListElement>Evaluation Author: </CustomListElement>
                    <CustomListElement>Rate: </CustomListElement>
                    <CustomListElement>Note: </CustomListElement>
            </CustomList>
        </div>
    );
}
  
export default EvaluationHr;
