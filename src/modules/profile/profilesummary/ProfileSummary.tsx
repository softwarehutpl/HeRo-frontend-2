import React from 'react';
import { CustomList, CustomListElement, CustomSecondHeading } from '../ProfileStyles';
import { Candidate } from '../../common/interfaces/Candidate.interface';

type Props = {
  candidate: Candidate;
};

function ProfileSummary({ candidate }: Props) {
  return (
    <div>
      <CustomSecondHeading>
        Summary
        <CustomList>
          <CustomListElement>
            Full Name: <span>{candidate.fullName}</span>
          </CustomListElement>
          <CustomListElement>
            E-mail: <a href={'mailto:' + candidate.email}>{candidate.email}</a>
          </CustomListElement>
          <CustomListElement>
            Contact phone: <a href={'tel:+48' + candidate.phoneNumber}>{candidate.phoneNumber}</a>
          </CustomListElement>
        </CustomList>
      </CustomSecondHeading>
    </div>
  );
}

export default ProfileSummary;
