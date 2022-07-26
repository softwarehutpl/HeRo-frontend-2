import * as React from 'react';
import { Link } from 'react-router-dom';

export default function SeeProfile({ id }: { id?: number }) {
  return (
    <div>
      <Link to={`/profile/${id}`}>See Profile {id}</Link>
    </div>
  );
}
