import React from 'react';
import { CustomList, CustomListElement, CustomSecondHeading } from '../ProfileStyles';

function ProfileNotes() {
  return (
    <div>
      <CustomSecondHeading>
        Notes
        <CustomList>
          <CustomListElement>Available from: </CustomListElement>
          <CustomListElement>Expected month salary: </CustomListElement>
          <CustomListElement>Other expectations, conditions: </CustomListElement>
        </CustomList>
      </CustomSecondHeading>
    </div>
  );
}

export default ProfileNotes;
