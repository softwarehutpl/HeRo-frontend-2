import * as React from 'react';
import { Link } from 'react-router-dom';
import { CustomDiv } from './SeePorifleStyles';

export default function SeeProfile({ id }: { id?: number }) {
  return (
    <CustomDiv>
      <Link to={`/profile/${id}`}>Browse Profile</Link>
    </CustomDiv>
  );
}
