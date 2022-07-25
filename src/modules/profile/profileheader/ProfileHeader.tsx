import { CoPresentOutlined } from '@mui/icons-material';
import React from 'react';
import CustomAvatar from '../../common/components/avatars/CustomAvatar';
import { ProfileHeaderHeading, ProfileHeaderWrapper } from './ProfileHeaderStyles';

type Candidate = {
  candidate: {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    availableFrom: Date;
    expectedMonthlySalary: number;
    otherExpectations: string;
    cvPath: string;
  }[];
};

export const ProfileHeader: React.FC<Candidate> = props => {
  return (
    <ProfileHeaderWrapper>
      <CustomAvatar name={'test test'} />
      <ProfileHeaderHeading>Profile of {props.candidate.id}</ProfileHeaderHeading>
    </ProfileHeaderWrapper>
  );
};
