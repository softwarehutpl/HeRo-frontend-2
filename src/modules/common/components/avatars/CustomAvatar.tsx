import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function CustomAvatar({ name }: { name: string; id?: string }) {
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: '#ff8533',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return <Avatar {...stringAvatar(name)} />;
}
