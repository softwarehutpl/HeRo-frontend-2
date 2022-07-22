import React from 'react';
import CustomAvatar from '../../common/components/avatars/CustomAvatar';
import { ProfileHeaderHeading, ProfileHeaderWrapper } from './ProfileHeaderStyles';

function ProfileHeader() {
  return (
    <ProfileHeaderWrapper>
      <CustomAvatar name={'John Doe'} />
      <ProfileHeaderHeading>Profile of John Doe</ProfileHeaderHeading>
    </ProfileHeaderWrapper>
  );
}

export default ProfileHeader;
