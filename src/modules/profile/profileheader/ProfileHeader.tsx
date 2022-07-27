import CustomAvatar from "../../common/components/avatars/CustomAvatar";
import React from "react";
import {
  ProfileHeaderHeading,
  ProfileHeaderWrapper,
} from "./ProfileHeaderStyles";
import Candidate from "../../common/interfaces/Candidate.interface";

type Props = {
  candidate: Candidate;
};

export default function ProfileHeader({ candidate }: Props) {
  return (
    <ProfileHeaderWrapper>
      <CustomAvatar name={candidate.fullName} />
      <ProfileHeaderHeading>
        Profile of <p>{candidate.fullName}</p>
      </ProfileHeaderHeading>
    </ProfileHeaderWrapper>
  );
}
