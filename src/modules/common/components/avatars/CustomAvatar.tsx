import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: '#dd0000',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function CustomAvatar() {
  return (
      <Avatar {...stringAvatar('John Doe')} />
  );
}
