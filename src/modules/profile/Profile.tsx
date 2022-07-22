import React from 'react';
import ProfileInfo from './profileinfo/ProfileInfo';
import ProfilePdf from './profilepdf/ProfilePdf';
import { ProfileWrapper } from './ProfileStyles';

function Profile() {
  return (
    <ProfileWrapper>
      <ProfileInfo />
      <ProfilePdf />
    </ProfileWrapper>
  );
}

export default Profile;
