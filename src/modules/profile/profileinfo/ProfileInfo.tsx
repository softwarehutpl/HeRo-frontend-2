import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CandidatesService from '../../common/Api/Candidates.service';
import EvaluationHr from '../evaluationhr/EvaluationHr';
import EvaluationTech from '../evaluationtech/EvaluationTech';
import { ProfileHeader } from '../profileheader/ProfileHeader';
import ProfileNotes from '../profilenotes/ProfileNotes';
import ProfileSummary from '../profilesummary/ProfileSummary';
import { ProfileInfoWrapper } from './ProfileInfoStyles';

interface Candidate {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  availableFrom: Date;
  expectedMonthlySalary: number;
  otherExpectations: string;
  cvPath: string;
}

function ProfileInfo() {
  const params = useParams();
  const [candidate, setCandidate] = useState<Candidate[]>([]);

  useEffect(() => {
    const profileData = CandidatesService.candidateHttpGet(`Get/${params.id}`);
    profileData.then(res => setCandidate(res));
  }, []);

  console.log(candidate);

  return (
    <ProfileInfoWrapper>
      <ProfileHeader candidate={candidate} />
      <ProfileSummary />
      <ProfileNotes />
      <EvaluationHr />
      <EvaluationTech />
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
