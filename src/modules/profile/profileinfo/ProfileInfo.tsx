import React from 'react';
import EvaluationHr from '../evaluationhr/EvaluationHr';
import EvaluationTech from '../evaluationtech/EvaluationTech';
import ProfileHeader from '../profileheader/ProfileHeader';
import ProfileNotes from '../profilenotes/ProfileNotes';
import ProfileSummary from '../profilesummary/ProfileSummary';
import { ProfileInfoWrapper } from './ProfileInfoStyles';

function ProfileInfo() {
  return (
    <ProfileInfoWrapper>
      <ProfileHeader />
      <ProfileSummary />
      <ProfileNotes />
      <EvaluationHr />
      <EvaluationTech />
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
