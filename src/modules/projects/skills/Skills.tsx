import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';
import { stringify } from 'querystring';
import { kStringMaxLength } from 'buffer';
import SkillsList from '../skillsList/SkillsList';

export interface Skill {
  id: string;
  label: string;
}

export default function Skills() {
  const [skillList, setSkillList] = React.useState<Skill[]>([]);

  const handleOnChange = (newSkill: Skill): void => {
    if (newSkill !== null) {
      setSkillList(prevState => [...prevState, newSkill]);
    }
  };

  return (
    <div>
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
      <SkillsList list={skillList} />
    </div>
  );
}

const skills = [
  { id: '1', label: 'React' },
  { id: '2', label: 'Angular' },
  { id: '3', label: 'Javascript' },
  { id: '4', label: 'C#' },
  { id: '5', label: 'Java' },
];
