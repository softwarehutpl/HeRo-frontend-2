import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<any>();
  console.log(selectedSkill);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 300 }}
      onChange={(_event, newSkill) => {
        setSelectedSkill(newSkill);
      }}
      renderInput={params => <TextField {...params} label="Skill" />}
    />
  );
}

const skills = [
  { id: '1', label: 'React' },
  { id: '2', label: 'Angular' },
  { id: '3', label: 'Javascript' },
  { id: '4', label: 'C#' },
  { id: '5', label: 'Java' },
];
