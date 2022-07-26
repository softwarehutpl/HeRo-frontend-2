import React from 'react';
import { CustomList, CustomListElement, CustomSecondHeading } from '../ProfileStyles';
import { Candidate } from '../../common/interfaces/Candidate.interface';

type Props = {
  candidate: Candidate;
};

function ProfileNotes({ candidate }: Props) {
  return (
    <div>
      <CustomSecondHeading>
        Notes
        <CustomList>
          <CustomListElement>
            Available from: <span>{candidate.availableFrom.toString()}</span>
          </CustomListElement>
          <CustomListElement>
            Expected month salary: <span>{candidate.expectedMonthlySalary}</span>
          </CustomListElement>
          <CustomListElement>
            Other expectations, conditions: <span>{candidate.otherExpectations}</span>
          </CustomListElement>
        </CustomList>
      </CustomSecondHeading>
    </div>
  );
}

export default ProfileNotes;
