import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function SkillRating() {
  const [value, setValue] = React.useState<number | null>(0);
  console.log('Ustawilem value na: ', value);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        mr: '30px',
        ml: '15px',
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
