import React from "react";
import { CustomList, CustomListElement, CustomSecondHeading } from "../ProfileStyles";

function ProfileSummary() {
    return (
        <div>
            <CustomSecondHeading>Summary
                <CustomList>
                    <CustomListElement>Full Name: </CustomListElement>
                    <CustomListElement>E-mail: </CustomListElement>
                    <CustomListElement>Contact phone: </CustomListElement>
                </CustomList>
            </CustomSecondHeading>
        </div>
    );
  }
  
export default ProfileSummary;
