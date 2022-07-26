import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CandidatesService from '../../common/Api/Candidates.service';
import { Candidate } from '../../common/interfaces/Candidate.interface';
import EvaluationHr from '../evaluationhr/EvaluationHr';
import EvaluationTech from '../evaluationtech/EvaluationTech';
import ProfileHeader from '../profileheader/ProfileHeader';
import ProfileNotes from '../profilenotes/ProfileNotes';
import ProfileSummary from '../profilesummary/ProfileSummary';
import { ProfileInfoWrapper } from './ProfileInfoStyles';

function ProfileInfo() {
  const params = useParams();
  const [candidate, setCandidate] = useState<Candidate>();

  useEffect(() => {
    const profileData = CandidatesService.candidateHttpGet(`Get/${params.id}`);
    profileData.then(res => setCandidate(res));
  }, []);

  return (
    <>
      {candidate && (
        <ProfileInfoWrapper>
          <ProfileHeader candidate={candidate} />
          <ProfileSummary candidate={candidate} />
          <ProfileNotes candidate={candidate} />
          <EvaluationHr candidate={candidate} />
          <EvaluationTech candidate={candidate} />
        </ProfileInfoWrapper>
      )}
    </>
  );
}

export default ProfileInfo;
