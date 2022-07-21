import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';
import { stringify } from 'querystring';
import { kStringMaxLength } from 'buffer';

interface Skill {
  id: string;
  label: string;
}

export default function Skills() {
  const [skillList, setSkillList] = React.useState<Skill[]>([]);

  const handleOnChange = (newSkill: Skill): void => {
    console.log(skillList);
    if (newSkill === null) {
      alert('null');
    } else {
      setSkillList(prevState => [...prevState, newSkill]);
    }
    console.log(skillList);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={skills}
      sx={{ width: 300 }}
      onChange={(_event, newSkill) => {
        handleOnChange(newSkill as Skill);
      }}
      // isOptionEqualToValue={(option, value) => option.id === value.id}
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
